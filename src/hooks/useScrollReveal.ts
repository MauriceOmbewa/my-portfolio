import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const revealEls = document.querySelectorAll<HTMLElement>(
      '.reveal, .reveal-left, .reveal-right'
    );
    const skillBars = document.querySelectorAll<HTMLElement>('.skill-bar-fill');

    const revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('visible');
          // Unobserve immediately — element stays visible, no need to keep watching
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
    );

    const skillObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.style.setProperty('--skill-level', `${el.dataset.level ?? '0'}%`);
          // rAF ensures the CSS variable is applied before the transition starts
          requestAnimationFrame(() => el.classList.add('animated'));
          obs.unobserve(el);
        });
      },
      { threshold: 0.25 }
    );

    revealEls.forEach((el) => revealObserver.observe(el));
    skillBars.forEach((el) => skillObserver.observe(el));

    return () => {
      revealObserver.disconnect();
      skillObserver.disconnect();
    };
  }, []);
}
