
import React from 'react';
import { ProjectDetail } from '../types';

interface ProjectHighlightProps {
  project: ProjectDetail;
  isArchive?: boolean;
}

const ProjectHighlight: React.FC<ProjectHighlightProps> = ({ project, isArchive = false }) => {
  const isMain = project.name === "SYSTALOG.AI";

  return (
    <div className={`rounded-xl overflow-hidden hover-lift transition-all ${isMain ? 'gradient-border glow-border' : 'border border-white/10'} ${isArchive ? 'opacity-70 hover:opacity-100' : ''}`}>
      <div className="bg-white/5 p-8 lg:p-10">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${isMain ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-white/10 text-white/60'}`}>
                  {isMain ? "Flagship Project" : isArchive ? "Archived" : "Project"}
                </span>
                {isMain && <span className="text-emerald-400 text-sm font-medium">2025 - Present</span>}
              </div>
              <h3 className={`text-3xl sm:text-4xl font-bold mb-3 leading-tight ${isMain ? 'text-white' : 'text-white/80'}`}>
                {project.name}
              </h3>
              <p className="text-lg text-white/60 font-medium">
                {project.tagline}
              </p>
            </div>

            <div className="space-y-3 mb-8">
              {project.achievements.map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className={`w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0 ${isMain ? 'bg-emerald-500' : 'bg-white/40'}`}></div>
                  <p className="text-base text-white/80 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {project.techStack.map(tag => (
                <span key={tag} className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-sm font-medium text-white/70 hover:border-emerald-500/50 hover:text-emerald-400 transition-all">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {project.architecture && (
            <div className="flex-1 bg-[#0a0a0a] rounded-xl border border-white/10 p-6 lg:p-8">
              <h4 className="text-sm font-semibold text-emerald-400 mb-6 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                Architecture
              </h4>
              <div className="grid grid-cols-2 gap-6">
                {Object.entries(project.architecture).map(([key, vals]) => (
                  <div key={key}>
                    <span className="text-xs font-semibold text-white/40 uppercase tracking-wider block mb-3">{key}</span>
                    <ul className="text-sm space-y-2">
                      {(vals as string[]).map((v: string) => (
                        <li key={v} className="flex items-center gap-2 text-white/70">
                          <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
                          {v}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectHighlight;
