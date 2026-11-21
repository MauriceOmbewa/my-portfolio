import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  icon: ReactNode;
  title: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, icon, title, children }) => {
  return (
    <section id={id} className="py-20 relative overflow-hidden">
      {/* Subtle radial glow behind each section */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/[0.04] blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section heading */}
        <div className="reveal flex flex-col items-center justify-center gap-2 mb-16">
          <div className="flex items-center gap-3">
            <span className="text-blue-400 opacity-80">{icon}</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              {title}
            </h2>
          </div>
          <span className="section-title-line" />
        </div>

        {children}
      </div>
    </section>
  );
};

export default Section;
