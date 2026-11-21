import { useEffect } from 'react';

/**
 * Attaches an IntersectionObserver to all elements matching `.reveal`,
 * `.reveal-left`, and `.reveal-right` and adds the `visible` class when
 * they enter the viewport.
 *
 * Also handles `.skill-bar-fill` elements – sets the CSS variable and
 * triggers the bar animation once visible.
 */
export function useScrollReveal() {
  useEffect(() => {
    const revealElements = document.querySelectorAll<HTMLElement>(
      '.reveal, .reveal-left, .reveal-right'
    );

    const skillBars = document.querySelectorAll<HTMLElement>('.skill-bar-fill');

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const level = el.dataset.level ?? '0';
            el.style.setProperty('--skill-level', `${level}%`);
            requestAnimationFrame(() => el.classList.add('animated'));
            skillObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
    skillBars.forEach((el) => skillObserver.observe(el));

    return () => {
      revealObserver.disconnect();
      skillObserver.disconnect();
    };
  }, []);
}
