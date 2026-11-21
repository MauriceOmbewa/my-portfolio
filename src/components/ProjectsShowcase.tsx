import React, { useEffect, useRef, useState, useCallback, memo } from 'react';
import { Code2, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  liveDemo?: string;
}

interface Props {
  projects: Project[];
}

const ACCENTS = [
  { from: '#3b82f6', to: '#8b5cf6' },
  { from: '#10b981', to: '#3b82f6' },
  { from: '#f59e0b', to: '#ef4444' },
  { from: '#8b5cf6', to: '#ec4899' },
  { from: '#06b6d4', to: '#3b82f6' },
  { from: '#10b981', to: '#06b6d4' },
  { from: '#f97316', to: '#f59e0b' },
  { from: '#6366f1', to: '#8b5cf6' },
  { from: '#14b8a6', to: '#10b981' },
  { from: '#3b82f6', to: '#06b6d4' },
  { from: '#a855f7', to: '#ec4899' },
  { from: '#ef4444', to: '#f97316' },
  { from: '#22c55e', to: '#14b8a6' },
];

interface CardProps {
  project: Project;
  index: number;
  total: number;
  activeIndex: number;
}

const ShowcaseCard = memo(({ project, index, total, activeIndex }: CardProps) => {
  const accent = ACCENTS[index % ACCENTS.length];
  const dist = Math.abs(index - activeIndex);
  const isActive = dist === 0;

  // Visual state
  const scale   = isActive ? 1 : dist === 1 ? 0.95 : 0.91;
  const opacity = isActive ? 1 : dist === 1 ? 0.55 : 0.28;
  const blur    = isActive ? 0 : dist === 1 ? 2    : 5;

  return (
    <div
      style={{
        transform:  `scale(${scale})`,
        opacity,
        filter:     blur > 0 ? `blur(${blur}px) brightness(${isActive ? 1 : dist === 1 ? 0.7 : 0.4})` : 'none',
        transition: 'transform 0.45s cubic-bezier(0.16,1,0.3,1), opacity 0.45s ease, filter 0.35s ease, box-shadow 0.45s ease, border-color 0.45s ease',
        borderRadius: '1rem',
        overflow: 'hidden',
        border: `1px solid ${isActive ? accent.from + '55' : 'rgba(255,255,255,0.05)'}`,
        boxShadow: isActive
          ? `0 0 50px ${accent.from}22, 0 20px 50px rgba(0,0,0,0.5)`
          : '0 2px 12px rgba(0,0,0,0.3)',
        width: '100%',
        maxWidth: '900px',
        pointerEvents: isActive ? 'auto' : 'none',
      }}
    >
      {/* Inner glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: isActive
            ? `radial-gradient(ellipse 80% 60% at 70% 50%, ${accent.from}22, transparent 70%)`
            : 'none',
          pointerEvents: 'none',
          zIndex: 0,
          transition: 'background 0.5s ease',
        }}
      />

      {/* Layout */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'row', minHeight: '360px' }}>

        {/* Image — left 40% */}
        <div style={{ position: 'relative', width: '40%', flexShrink: 0, overflow: 'hidden' }}>
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: isActive ? 'scale(1.06)' : 'scale(1)',
              transition: 'transform 0.6s ease',
              display: 'block',
            }}
          />
          {/* Fade right into content */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, transparent 40%, #0d1117 100%)',
          }} />
          {/* Accent tint */}
          <div style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(135deg, ${accent.from}22, ${accent.to}11)`,
            opacity: isActive ? 0.8 : 0.3,
            transition: 'opacity 0.4s ease',
          }} />
          {/* Number watermark */}
          <div style={{
            position: 'absolute', bottom: '12px', left: '12px',
            fontWeight: 900, fontSize: '56px', lineHeight: 1,
            color: 'transparent',
            WebkitTextStroke: `1.5px ${accent.from}${isActive ? '44' : '15'}`,
            userSelect: 'none', pointerEvents: 'none',
            transition: 'all 0.4s ease',
          }}>
            {String(index + 1).padStart(2, '0')}
          </div>
        </div>

        {/* Content — right 60% */}
        <div style={{
          flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: '2.5rem 2.5rem 2.5rem 2rem',
          background: 'rgba(13,17,23,0.85)',
        }}>
          {/* Counter */}
          {isActive && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <span style={{
                width: '8px', height: '8px', borderRadius: '50%',
                background: accent.from, display: 'inline-block',
                animation: 'dot-pulse 2.5s ease-in-out 1s infinite',
              }} />
              <span style={{ fontSize: '11px', fontFamily: 'monospace', color: accent.from }}>
                {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
            </div>
          )}

          {/* Accent bar */}
          <div style={{
            height: '2px', borderRadius: '999px', marginBottom: '16px',
            width: isActive ? '32px' : '14px',
            background: `linear-gradient(90deg, ${accent.from}, ${accent.to})`,
            opacity: isActive ? 1 : 0.35,
            transition: 'width 0.4s ease, opacity 0.4s ease',
          }} />

          {/* Title */}
          <h3 style={{
            fontWeight: 900, lineHeight: 1.2, marginBottom: '12px',
            fontSize: isActive ? 'clamp(1.5rem, 2.5vw, 2rem)' : 'clamp(1.1rem, 2vw, 1.5rem)',
            background: isActive
              ? `linear-gradient(135deg, #ffffff, ${accent.from})`
              : 'linear-gradient(135deg, #64748b, #475569)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            transition: 'font-size 0.4s ease',
          }}>
            {project.title}
          </h3>

          {/* Description */}
          <p style={{
            fontSize: '14px', lineHeight: 1.6, marginBottom: '18px',
            color: isActive ? '#94a3b8' : '#374151',
            transition: 'color 0.4s ease',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}>
            {project.description}
          </p>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '22px' }}>
            {project.tags.slice(0, isActive ? 99 : 3).map((tag) => (
              <span key={tag} style={{
                padding: '4px 10px', borderRadius: '999px',
                fontSize: '11px', fontWeight: 600,
                border: `1px solid ${isActive ? accent.from + '44' : 'rgba(255,255,255,0.08)'}`,
                color: isActive ? accent.from : '#475569',
                background: isActive ? `${accent.from}14` : 'transparent',
                transition: 'all 0.3s ease',
              }}>
                {tag}
              </span>
            ))}
            {!isActive && project.tags.length > 3 && (
              <span style={{
                padding: '4px 10px', borderRadius: '999px',
                fontSize: '11px', color: '#374151',
                border: '1px solid rgba(255,255,255,0.06)',
              }}>
                +{project.tags.length - 3}
              </span>
            )}
          </div>

          {/* Buttons */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: '10px',
            opacity: isActive ? 1 : 0,
            pointerEvents: isActive ? 'auto' : 'none',
            transition: 'opacity 0.3s ease',
          }}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '10px 18px', borderRadius: '10px',
                background: 'rgba(31,41,55,0.9)',
                color: '#d1d5db', fontSize: '13px', fontWeight: 600,
                border: '1px solid rgba(75,85,99,0.6)',
                textDecoration: 'none',
                transition: 'background 0.2s, color 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(55,65,81,0.9)';
                (e.currentTarget as HTMLElement).style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(31,41,55,0.9)';
                (e.currentTarget as HTMLElement).style.color = '#d1d5db';
              }}
            >
              <Code2 size={15} />
              View Code
            </a>
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '10px 18px', borderRadius: '10px',
                  background: `linear-gradient(135deg, ${accent.from}, ${accent.to})`,
                  color: '#fff', fontSize: '13px', fontWeight: 600,
                  boxShadow: `0 4px 14px ${accent.from}40`,
                  textDecoration: 'none',
                }}
              >
                <ExternalLink size={15} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});
ShowcaseCard.displayName = 'ShowcaseCard';

// ─────────────────────────────────────────────────────────────
const ProjectsShowcase: React.FC<Props> = ({ projects }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafPending = useRef(false);

  const onScroll = useCallback(() => {
    if (rafPending.current) return;
    rafPending.current = true;
    requestAnimationFrame(() => {
      rafPending.current = false;
      const mid = window.innerHeight / 2;
      let best = 0;
      let bestDist = Infinity;
      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const d = Math.abs(r.top + r.height / 2 - mid);
        if (d < bestDist) { bestDist = d; best = i; }
      });
      setActiveIndex((prev) => (prev === best ? prev : best));
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    // Run immediately so the first card in view is active on mount
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  const accent = ACCENTS[activeIndex % ACCENTS.length];

  return (
    <div style={{ position: 'relative' }}>
      {/* Cards */}
      <div style={{
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: '24px',
        padding: '24px 16px 48px',
      }}>
        {projects.map((project, i) => (
          <div
            key={project.title}
            ref={(el) => { itemRefs.current[i] = el; }}
            style={{ width: '100%', maxWidth: '900px', cursor: i !== activeIndex ? 'pointer' : 'default' }}
            onClick={() => {
              if (i !== activeIndex) {
                itemRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }}
          >
            <ShowcaseCard
              project={project}
              index={i}
              total={projects.length}
              activeIndex={activeIndex}
            />
          </div>
        ))}
      </div>

      {/* Fixed right dot-nav */}
      <div style={{
        position: 'fixed', right: '20px', top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex', flexDirection: 'column', gap: '8px',
        zIndex: 50, pointerEvents: 'none',
      }}>
        {projects.map((_, i) => (
          <div
            key={i}
            style={{
              height: '5px',
              width: i === activeIndex ? '20px' : '5px',
              borderRadius: '999px',
              background: i === activeIndex
                ? `linear-gradient(90deg, ${accent.from}, ${accent.to})`
                : 'rgba(255,255,255,0.12)',
              transition: 'width 0.3s ease, background 0.3s ease',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsShowcase;
