import React, { useEffect, useRef, useCallback } from 'react';

const InteractiveBackground = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const particlesRef = useRef([]);
  const ripplesRef = useRef([]);
  const animFrameRef = useRef(null);

  const PARTICLE_COUNT = 35;
  const CONNECTION_DISTANCE = 100;
  const CONNECTION_DISTANCE_SQ = CONNECTION_DISTANCE * CONNECTION_DISTANCE;
  const MOUSE_RADIUS = 180;
  const MOUSE_RADIUS_SQ = MOUSE_RADIUS * MOUSE_RADIUS;
  const COLORS = [
    { h: 185, s: 100, l: 50 },
    { h: 270, s: 100, l: 60 },
    { h: 330, s: 100, l: 55 },
    { h: 150, s: 100, l: 50 },
  ];

  const createParticles = useCallback((width, height) => {
    const particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 0.5,
        baseAlpha: Math.random() * 0.4 + 0.1,
        color,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }
    return particles;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
      if (particlesRef.current.length === 0) {
        particlesRef.current = createParticles(canvas.width, canvas.height);
      }
    };

    resize();
    window.addEventListener('resize', resize);
    const resizeInterval = setInterval(() => {
      const newHeight = document.documentElement.scrollHeight;
      if (Math.abs(canvas.height - newHeight) > 100) canvas.height = newHeight;
    }, 3000);

    let lastMouseX = -1000, lastMouseY = -1000;
    const handleMouseMove = (e) => {
      lastMouseX = e.clientX;
      lastMouseY = e.clientY + window.scrollY;
    };

    const handleClick = (e) => {
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      for (let i = 0; i < 3; i++) {
        ripplesRef.current.push({
          x: e.clientX,
          y: e.clientY + window.scrollY,
          radius: i * 15,
          maxRadius: 200 + i * 50,
          alpha: 0.5 - i * 0.1,
          color,
          lineWidth: 2 - i * 0.5,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('click', handleClick);

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      // Sync mouse position once per frame
      mouseRef.current.x = lastMouseX;
      mouseRef.current.y = lastMouseY;

      const scrollY = window.scrollY;
      const viewTop = scrollY - 200;
      const viewBottom = scrollY + window.innerHeight + 200;
      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;

      const particles = particlesRef.current;
      const len = particles.length;

      // Update particles
      for (let i = 0; i < len; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const distSq = dx * dx + dy * dy;

        if (distSq < MOUSE_RADIUS_SQ) {
          const force = (MOUSE_RADIUS - Math.sqrt(distSq)) / MOUSE_RADIUS;
          p.vx -= dx * force * 0.0005;
          p.vy -= dy * force * 0.0005;
        }

        p.vx *= 0.998;
        p.vy *= 0.998;
      }

      // Draw connections — batched by approximate alpha to reduce state changes
      ctx.lineWidth = 0.5;
      for (let i = 0; i < len; i++) {
        const a = particles[i];
        if (a.y < viewTop || a.y > viewBottom) continue;

        for (let j = i + 1; j < len; j++) {
          const b = particles[j];
          if (b.y < viewTop || b.y > viewBottom) continue;

          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < CONNECTION_DISTANCE_SQ) {
            const alpha = (1 - Math.sqrt(distSq) / CONNECTION_DISTANCE) * 0.12;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `hsla(${a.color.h}, ${a.color.s}%, ${a.color.l}%, ${alpha})`;
            ctx.stroke();
          }
        }
      }

      // Draw particles with pulse
      for (let i = 0; i < len; i++) {
        const p = particles[i];
        if (p.y < viewTop || p.y > viewBottom) continue;

        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const distSq = dx * dx + dy * dy;
        const highlight = distSq < MOUSE_RADIUS_SQ ? (MOUSE_RADIUS - Math.sqrt(distSq)) / MOUSE_RADIUS : 0;
        const pulse = Math.sin(time * 2 + p.pulseOffset) * 0.3 + 0.7;
        const alpha = (p.baseAlpha + highlight * 0.6) * pulse;
        const glow = p.radius + highlight * 4;

        ctx.beginPath();
        ctx.arc(p.x, p.y, glow, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.color.h}, ${p.color.s}%, ${p.color.l}%, ${alpha})`;
        ctx.fill();

        if (highlight > 0.3) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, glow + 6, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${p.color.h}, ${p.color.s}%, ${p.color.l}%, ${highlight * 0.1})`;
          ctx.fill();
        }
      }

      // Ripples
      ripplesRef.current = ripplesRef.current.filter((r) => {
        r.radius += 4;
        r.alpha -= 0.006;
        if (r.alpha <= 0) return false;

        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `hsla(${r.color.h}, ${r.color.s}%, ${r.color.l}%, ${r.alpha})`;
        ctx.lineWidth = r.lineWidth;
        ctx.stroke();
        return true;
      });

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      clearInterval(resizeInterval);
    };
  }, [createParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0, willChange: 'transform' }}
    />
  );
};

export default InteractiveBackground;
