
import React from 'react';
import { EXPERIENCE, EDUCATION } from '../constants';

const Experience: React.FC = () => {
  return (
    <div className="space-y-24">
      <div className="space-y-6">
        {EXPERIENCE.map((job, idx) => (
          <div key={idx} className="relative group bg-neutral-900/50 border-2 border-neutral-700 p-6 lg:p-8 hover:border-emerald-500/50 transition-colors">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-6">
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 text-xs mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30">
                  {job.period}
                </span>
                <h3 className="pixel-font text-2xl sm:text-3xl text-white leading-tight">
                  {job.role.toUpperCase()}
                </h3>
                <p className="text-white/50 mono text-sm">
                  &gt; {job.company}
                </p>
              </div>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {job.highlights.map((point, i) => (
                <li key={i} className="text-sm text-white/70 leading-relaxed flex gap-3 items-start">
                  <span className="text-emerald-400 mono">-</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div>
        <h2 className="pixel-font text-2xl tracking-wide mb-6 text-white flex items-center gap-3">
          <span className="text-emerald-400">&gt;</span>
          EDUCATION
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {EDUCATION.map((edu, idx) => (
            <div key={idx} className="bg-neutral-900/50 border-2 border-neutral-700 p-5 hover:border-emerald-500/50 transition-colors group">
              <span className="inline-block px-2 py-1 text-xs mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 mb-3">
                {edu.year}
              </span>
              <h4 className="text-base font-bold text-white leading-snug mb-2 group-hover:text-emerald-400 transition-colors mono">
                {edu.degree}
              </h4>
              <p className="text-white/50 text-sm mono mb-2">
                {edu.school}
              </p>
              {edu.gpa && (
                <div className="inline-flex items-center gap-2 px-2 py-1 bg-emerald-500/10 border border-emerald-500/30">
                  <span className="text-xs mono text-emerald-400">GPA: {edu.gpa}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
