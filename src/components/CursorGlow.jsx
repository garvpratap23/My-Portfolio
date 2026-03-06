import React, { useEffect, useRef, useState } from 'react';

const CursorGlow = () => {
  const glowRef = useRef(null);
  const trailRef = useRef(null);
  const rafRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;

    const handleMouseMove = (e) => {
      if (!visible) setVisible(true);
      targetX = e.clientX;
      targetY = e.clientY;

      // Instant position for main glow — use transform for GPU compositing
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${e.clientX - 200}px, ${e.clientY - 200}px, 0)`;
      }
    };

    // Smooth trail following with lag
    const animateTrail = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${currentX - 300}px, ${currentY - 300}px, 0)`;
      }
      rafRef.current = requestAnimationFrame(animateTrail);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    rafRef.current = requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(rafRef.current);
    };
  }, []); // removed `visible` dep — no need to re-register everything on toggle

  return (
    <>
      {/* Main cursor glow */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed top-0 left-0"
        style={{
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, hsla(185, 100%, 50%, 0.07) 0%, hsla(270, 100%, 50%, 0.03) 40%, transparent 70%)',
          zIndex: 1,
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.3s ease',
          willChange: 'transform',
        }}
      />
      {/* Trailing glow (lagging behind) */}
      <div
        ref={trailRef}
        className="pointer-events-none fixed top-0 left-0"
        style={{
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, hsla(270, 100%, 60%, 0.04) 0%, hsla(330, 100%, 50%, 0.02) 40%, transparent 60%)',
          zIndex: 1,
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.5s ease',
          willChange: 'transform',
        }}
      />
    </>
  );
};

export default CursorGlow;
