import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Use refs for positions so the rAF reads the latest values without closures
    const pos = { mouseX: 0, mouseY: 0, ringX: 0, ringY: 0 };
    let animId: number;
    let moved = false; // skip rAF work when cursor hasn't moved

    const onMouseMove = (e: MouseEvent) => {
      pos.mouseX = e.clientX;
      pos.mouseY = e.clientY;
      moved = true;
      // Move the dot immediately on the event — no rAF needed for dot
      dot.style.transform = `translate(calc(-50% + ${pos.mouseX}px), calc(-50% + ${pos.mouseY}px))`;
    };

    // Ring lags behind with lerp — only needs rAF
    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!moved) return; // nothing to do

      const dx = pos.mouseX - pos.ringX;
      const dy = pos.mouseY - pos.ringY;

      // Skip tiny movements — avoids layout thrashing for sub-pixel changes
      if (Math.abs(dx) < 0.1 && Math.abs(dy) < 0.1) return;

      pos.ringX += dx * 0.12;
      pos.ringY += dy * 0.12;
      ring.style.transform = `translate(calc(-50% + ${pos.ringX}px), calc(-50% + ${pos.ringY}px))`;
    };

    // Throttle mouseover — fires constantly during movement otherwise
    let hoverThrottle = 0;
    const onMouseOver = (e: MouseEvent) => {
      const now = Date.now();
      if (now - hoverThrottle < 80) return;
      hoverThrottle = now;

      const target = e.target as HTMLElement;
      const isHoverable = !!(target.closest('a') || target.closest('button') || target.closest('[role="button"]'));
      ring.classList.toggle('hovering', isHoverable);
    };

    // Start both at the same offscreen position to avoid a "fly in" on first move
    dot.style.transform = 'translate(calc(-50% + -100px), calc(-50% + -100px))';
    ring.style.transform = 'translate(calc(-50% + -100px), calc(-50% + -100px))';

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });
    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      {/* Use transform instead of left/top — avoids layout, uses compositor */}
      <div ref={dotRef} className="cursor-dot" style={{ left: 0, top: 0 }} />
      <div ref={ringRef} className="cursor-ring" style={{ left: 0, top: 0 }} />
    </>
  );
};

export default CustomCursor;
