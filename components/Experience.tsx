
import React from 'react';
import { EXPERIENCE, EDUCATION } from '../constants';

const Experience: React.FC = () => {
  return (
    <div className="space-y-40">
      <div className="space-y-24">
        {EXPERIENCE.map((job, idx) => (
          <div key={idx} className="relative group bg-neutral-900/40 p-12 border-l-[16px] border-white shadow-[20px_20px_0px_rgba(0,0,0,0.5)]">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-12">
              <div className="space-y-4">
                <span className="text-[14px] font-black text-emerald-400 uppercase tracking-[0.5em] block">
                  [{job.period}]
                </span>
                <h3 className="text-5xl sm:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                  {job.role}
                </h3>
                <div className="inline-block px-6 py-2 bg-white text-black text-[14px] font-black uppercase tracking-widest shadow-[8px_8px_0px_rgba(255,255,255,0.2)]">
                  LOG_ID: {job.company.split(' ')[0]}
                </div>
                <p className="text-white text-xl font-bold uppercase tracking-widest opacity-60">
                  {job.company}
                </p>
              </div>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t-2 border-white/20 pt-10">
              {job.highlights.map((point, i) => (
                <li key={i} className="text-base uppercase font-black text-white leading-tight flex gap-4 items-start group-hover:text-emerald-300 transition-colors">
                  <span className="text-white bg-white/10 px-2 py-0.5 text-xs">#0{i+1}</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="pt-32 border-t-[12px] border-white">
        <h2 className="text-6xl font-black tracking-tighter uppercase mb-20 italic bg-white text-black inline-block px-8 py-2">
          ACADEMIC_REGISTRY
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {EDUCATION.map((edu, idx) => (
            <div key={idx} className="bg-white p-12 border-8 border-black text-black shadow-[15px_15px_0px_rgba(255,255,255,0.1)] hover:translate-x-4 transition-transform">
              <div className="flex justify-between items-start mb-8 border-b-4 border-black pb-4">
                <h4 className="text-3xl font-black uppercase leading-[0.9] max-w-[70%]">
                  {edu.degree}
                </h4>
                <span className="text-[14px] font-black bg-black text-white px-4 py-2">
                  CLASS_{edu.year}
                </span>
              </div>
              <p className="text-black text-[14px] font-black uppercase mb-8 tracking-[0.2em] opacity-80 italic">
                {edu.school}
              </p>
              {edu.gpa && (
                <div className="flex items-center gap-6 bg-black text-white p-4">
                  <div className="h-4 bg-emerald-500 w-24"></div>
                  <span className="text-[18px] font-black">GPA_METRIC: {edu.gpa}</span>
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
