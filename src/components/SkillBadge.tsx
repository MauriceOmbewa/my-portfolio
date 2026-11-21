import React from 'react';

interface SkillBadgeProps {
  title: string;
  level: number;
  deviconClass: string; // e.g. "devicon-react-original colored"
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ title, level, deviconClass }) => {
  return (
    <div className="group relative bg-gray-800/60 backdrop-blur-sm p-4 rounded-2xl border border-gray-700/50 hover:border-blue-500/40 transition-all duration-300 card-hover gradient-border flex flex-col items-center gap-3 text-center">
      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-900/60 group-hover:bg-gray-900/80 transition-colors">
        <i className={`${deviconClass} text-3xl`} />
      </div>

      {/* Name */}
      <span className="text-xs font-semibold text-gray-300 group-hover:text-white transition-colors leading-tight">
        {title}
      </span>

      {/* Progress bar */}
      <div className="w-full">
        <div className="h-1 bg-gray-700/80 rounded-full overflow-hidden">
          <div
            className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-400"
            data-level={level}
          />
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-[10px] text-gray-600">proficiency</span>
          <span className="text-[10px] text-blue-400 font-semibold">{level}%</span>
        </div>
      </div>
    </div>
  );
};

export default SkillBadge;
