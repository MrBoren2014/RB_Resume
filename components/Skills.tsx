
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <div className="space-y-4">
      {SKILLS.map((category) => (
        <div key={category.name} className="p-4 bg-neutral-900/50 border-2 border-neutral-700 hover:border-emerald-500/50 transition-colors">
          <h4 className="text-xs mono text-emerald-400 uppercase tracking-wider mb-3 flex items-center gap-2">
            <span className="text-white/50">&gt;</span>
            {category.name.replace(/ /g, '_')}
          </h4>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <span
                key={skill}
                className={`px-3 py-1 text-xs mono transition-all cursor-default
                  ${skill === 'Claude Code'
                    ? 'bg-emerald-500/20 border-2 border-emerald-500 text-emerald-300 hover:bg-emerald-500/30'
                    : 'bg-neutral-800 border border-neutral-600 text-white/80 hover:border-emerald-500/50 hover:text-emerald-400'
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
