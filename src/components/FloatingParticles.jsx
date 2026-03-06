import React, { useEffect, useRef } from 'react';

const FloatingParticles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particles = [];
    const PARTICLE_COUNT = 12;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';

      const size = Math.random() * 3 + 1;
      const left = Math.random() * 100;
      const duration = Math.random() * 15 + 10;
      const delay = Math.random() * 10;
      const hue = [185, 270, 330, 150][Math.floor(Math.random() * 4)];

      particle.style.cssText = `
        left: ${left}%;
        width: ${size}px;
        height: ${size}px;
        background: hsla(${hue}, 100%, 60%, 0.8);
        animation: floatParticle ${duration}s ${delay}s linear infinite;
        will-change: transform, opacity;
      `;

      container.appendChild(particle);
      particles.push(particle);
    }

    return () => {
      particles.forEach((p) => p.remove());
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden" />;
};

export default FloatingParticles;
