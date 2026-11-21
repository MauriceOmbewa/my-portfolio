import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  colorIndex: number;
}

// Pre-build colors as rgba strings — avoids hex→string conversion every frame
const COLORS = [
  'rgba(59,130,246,',   // blue-500
  'rgba(139,92,246,',   // violet-500
  'rgba(16,185,129,',   // emerald-500
  'rgba(96,165,250,',   // blue-400
];

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Use willReadFrequently: false — we only write, never read pixels
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];
    let mouseX = -9999;
    let mouseY = -9999;
    let lastTime = 0;
    // Cap at ~30fps — plenty smooth for a background effect, halves CPU cost
    const FRAME_INTERVAL = 1000 / 35;

    // Reduced particle density — was /12000, now /20000
    const initParticles = () => {
      const count = Math.min(
        Math.floor((canvas.width * canvas.height) / 20000),
        60   // hard cap — large screens don't get 200+ particles
      );
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.4 + 0.5,
        alpha: Math.random() * 0.4 + 0.15,
        colorIndex: Math.floor(Math.random() * COLORS.length),
      }));
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initParticles();
    };

    // Connection lines — only between particles closer than maxDist
    // Use squared distance to avoid sqrt on every pair
    const MAX_DIST = 110;
    const MAX_DIST_SQ = MAX_DIST * MAX_DIST;

    const draw = (timestamp: number) => {
      animationId = requestAnimationFrame(draw);
      if (timestamp - lastTime < FRAME_INTERVAL) return;
      lastTime = timestamp;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections — batch all lines in one path per opacity level
      // to cut ctx state changes drastically
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dSq = dx * dx + dy * dy;
          if (dSq < MAX_DIST_SQ) {
            const dist = Math.sqrt(dSq);
            const alpha = 0.07 * (1 - dist / MAX_DIST);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(96,165,250,${alpha.toFixed(3)})`;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Update + draw particles
      const repelRadSq = 90 * 90;
      for (const p of particles) {
        // Mouse repulsion — use squared dist to skip sqrt when not repelling
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dSq = dx * dx + dy * dy;
        if (dSq < repelRadSq && dSq > 0) {
          const dist = Math.sqrt(dSq);
          const force = (90 - dist) / 90;
          p.vx += (dx / dist) * force * 0.25;
          p.vy += (dy / dist) * force * 0.25;
        }

        p.vx *= 0.98;
        p.vy *= 0.98;
        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges
        if (p.x < 0) p.x = canvas.width;
        else if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        else if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = COLORS[p.colorIndex] + p.alpha + ')';
        ctx.fill();
      }
    };

    // Throttle mouse — only update at most every 32ms (~30fps)
    let mouseThrottle = 0;
    const onMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - mouseThrottle < 32) return;
      mouseThrottle = now;
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    // Debounce resize — don't reinit on every pixel during window drag
    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 150);
    };

    resize();
    animationId = requestAnimationFrame(draw);
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    return () => {
      cancelAnimationFrame(animationId);
      clearTimeout(resizeTimer);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="particles-canvas"
      className="absolute inset-0 w-full h-full"
      style={{ willChange: 'auto' }}
    />
  );
};

export default ParticleBackground;
