import React, { useEffect, useRef } from 'react';

const ScrollProgress: React.FC = () => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    let rafPending = false;

    const update = () => {
      if (rafPending) return;
      rafPending = true;

      requestAnimationFrame(() => {
        rafPending = false;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const pct = docHeight > 0 ? window.scrollY / docHeight : 0;
        // scaleX is compositor-only — no layout triggered
        bar.style.transform = `scaleX(${pct})`;
      });
    };

    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div
      ref={barRef}
      id="scroll-progress"
      style={{
        // Full width, scaled from left — avoids width layout changes
        width: '100%',
        transformOrigin: 'left',
        transform: 'scaleX(0)',
      }}
    />
  );
};

export default ScrollProgress;
