import { useRef, useCallback } from 'react';

/**
 * Custom hook for magnetic hover effect on elements.
 * Elements will subtly move toward the cursor when hovered, giving a magnetic feel.
 */
const useMagneticHover = (strength = 0.3, resetDuration = 300) => {
  const ref = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    el.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    el.style.transition = 'transform 0.15s ease-out';
  }, [strength]);

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;

    el.style.transform = 'translate(0px, 0px)';
    el.style.transition = `transform ${resetDuration}ms cubic-bezier(0.22, 1, 0.36, 1)`;
  }, [resetDuration]);

  const bind = {
    ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  };

  return bind;
};

export default useMagneticHover;
