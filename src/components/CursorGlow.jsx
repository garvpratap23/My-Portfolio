import React, { useEffect, useRef, useState } from 'react';

const CursorGlow = () => {
  const glowRef = useRef(null);
  const trailRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;

    const handleMouseMove = (e) => {
      if (!visible) setVisible(true);
      targetX = e.clientX;
      targetY = e.clientY;

      // Instant position for main glow
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }
    };

    // Smooth trail following with lag
    const animateTrail = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      if (trailRef.current) {
        trailRef.current.style.left = `${currentX}px`;
        trailRef.current.style.top = `${currentY}px`;
      }
      requestAnimationFrame(animateTrail);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    const raf = requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(raf);
    };
  }, [visible]);

  return (
    <>
      {/* Main cursor glow */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, hsla(185, 100%, 50%, 0.07) 0%, hsla(270, 100%, 50%, 0.03) 40%, transparent 70%)',
          zIndex: 1,
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.3s ease',
          willChange: 'left, top',
        }}
      />
      {/* Trailing glow (lagging behind) */}
      <div
        ref={trailRef}
        className="pointer-events-none fixed -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, hsla(270, 100%, 60%, 0.04) 0%, hsla(330, 100%, 50%, 0.02) 40%, transparent 60%)',
          zIndex: 1,
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.5s ease',
          willChange: 'left, top',
        }}
      />
    </>
  );
};

export default CursorGlow;
