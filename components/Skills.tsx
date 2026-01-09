
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <div className="space-y-6">
      {SKILLS.map((category) => (
        <div key={category.name} className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
          <h4 className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-4">
            {category.name}
          </h4>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <span
                key={skill}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all cursor-default
                  ${skill === 'Claude Code'
                    ? 'bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border border-emerald-500/40 text-emerald-300 hover:border-emerald-400'
                    : 'bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover:border-white/20'
                  }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
