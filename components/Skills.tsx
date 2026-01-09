
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <div className="space-y-8">
      {SKILLS.map((category) => (
        <div key={category.name} className="bg-neutral-900/60 p-6 border-l-2 border-emerald-500">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-3">
            {category.name}
            <div className="h-px bg-white/20 flex-grow"></div>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {category.skills.map((skill) => (
              <div
                key={skill}
                className="px-3 py-2 border border-neutral-700 text-sm font-medium text-white/90 flex items-center justify-between hover:bg-emerald-500/20 hover:border-emerald-500 transition-all"
              >
                <span>{skill}</span>
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
