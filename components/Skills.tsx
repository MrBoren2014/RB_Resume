
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <div className="space-y-12">
      {SKILLS.map((category) => (
        <div key={category.name} className="bg-neutral-900/40 p-6 border-b-4 border-neutral-800 hover:border-white transition-colors">
          <h4 className="text-[12px] font-black text-white uppercase tracking-[0.5em] mb-6 flex items-center gap-4">
            {category.name}
            <div className="h-[2px] bg-neutral-800 flex-grow"></div>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {category.skills.map((skill) => (
              <div 
                key={skill} 
                className="px-4 py-3 border-2 border-neutral-800 text-[12px] font-black text-white uppercase flex items-center justify-between group hover:bg-white hover:text-black transition-all cursor-default"
              >
                <span>{skill}</span>
                <div className="w-2 h-2 bg-neutral-700 group-hover:bg-black"></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
