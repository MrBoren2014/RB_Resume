
import React from 'react';
import { EXPERIENCE, EDUCATION } from '../constants';

const Experience: React.FC = () => {
  return (
    <div className="space-y-24">
      <div className="space-y-8">
        {EXPERIENCE.map((job, idx) => (
          <div key={idx} className="relative group rounded-xl bg-white/5 border border-white/10 p-8 lg:p-10 hover:border-white/20 transition-colors">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8">
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                  {job.period}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {job.role}
                </h3>
                <p className="text-white/50 text-lg font-medium">
                  {job.company}
                </p>
              </div>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {job.highlights.map((point, i) => (
                <li key={i} className="text-base text-white/70 leading-relaxed flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2.5 flex-shrink-0"></div>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-2xl font-bold tracking-tight mb-8 text-white flex items-center gap-3">
          <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
          Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EDUCATION.map((edu, idx) => (
            <div key={idx} className="rounded-xl bg-white/5 border border-white/10 p-6 hover:border-emerald-500/30 transition-colors group">
              <span className="inline-block px-2 py-1 rounded text-xs font-semibold text-emerald-400 bg-emerald-500/10 mb-4">
                {edu.year}
              </span>
              <h4 className="text-lg font-bold text-white leading-snug mb-2 group-hover:text-emerald-400 transition-colors">
                {edu.degree}
              </h4>
              <p className="text-white/50 text-sm font-medium mb-3">
                {edu.school}
              </p>
              {edu.gpa && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <span className="text-sm font-semibold text-emerald-400">GPA: {edu.gpa}</span>
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
