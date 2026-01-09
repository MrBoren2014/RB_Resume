
import React from 'react';
import { EXPERIENCE, EDUCATION } from '../constants';

const Experience: React.FC = () => {
  return (
    <div className="space-y-32">
      <div className="space-y-16">
        {EXPERIENCE.map((job, idx) => (
          <div key={idx} className="relative group bg-neutral-900/60 p-8 lg:p-10 border-l-4 border-emerald-500">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8">
              <div className="space-y-3">
                <span className="text-sm font-semibold text-emerald-400 uppercase tracking-wider block">
                  {job.period}
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                  {job.role}
                </h3>
                <p className="text-white/70 text-lg font-medium">
                  {job.company}
                </p>
              </div>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-white/20 pt-8">
              {job.highlights.map((point, i) => (
                <li key={i} className="text-base text-white/90 leading-relaxed flex gap-3 items-start">
                  <span className="text-emerald-400 font-bold text-sm mt-1">0{i+1}</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="pt-16 border-t-2 border-white/20">
        <h2 className="text-4xl font-bold tracking-tight mb-12 text-white">
          Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EDUCATION.map((edu, idx) => (
            <div key={idx} className="bg-white p-8 text-black">
              <div className="flex justify-between items-start mb-4 border-b-2 border-black/20 pb-4">
                <h4 className="text-xl font-bold leading-snug max-w-[70%]">
                  {edu.degree}
                </h4>
                <span className="text-sm font-bold bg-black text-white px-3 py-1">
                  {edu.year}
                </span>
              </div>
              <p className="text-black/70 text-base font-medium mb-4">
                {edu.school}
              </p>
              {edu.gpa && (
                <div className="flex items-center gap-4 bg-emerald-500 text-white p-3">
                  <span className="text-base font-bold">GPA: {edu.gpa}</span>
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
