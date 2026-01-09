
import React from 'react';
import { ProjectDetail } from '../types';

interface ProjectHighlightProps {
  project: ProjectDetail;
  isArchive?: boolean;
}

const ProjectHighlight: React.FC<ProjectHighlightProps> = ({ project, isArchive = false }) => {
  const isMain = project.name === "SYSTALOG.AI";

  return (
    <div className={`bg-neutral-900/60 border-l-4 ${isMain ? 'border-emerald-500' : 'border-neutral-700'} p-8 lg:p-10`}>
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <span className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider ${isMain ? 'bg-emerald-500 text-white' : 'bg-neutral-800 text-neutral-400'}`}>
                {isMain ? "Flagship Project" : isArchive ? "Archived" : "Deployed"}
              </span>
              {isMain && <span className="text-emerald-400 text-sm font-medium">2025 - Present</span>}
            </div>
            <h3 className={`text-3xl sm:text-4xl font-bold mb-3 leading-tight ${isMain ? 'text-white' : 'text-neutral-300'}`}>
              {project.name}
            </h3>
            <p className="text-lg text-white/80 font-medium border-b border-white/20 pb-4">
              {project.tagline}
            </p>
          </div>

          <div className="space-y-4 mb-8">
            {project.achievements.map((item, i) => (
              <div key={i} className={`flex gap-3 border-l-2 ${isMain ? 'border-emerald-500' : 'border-neutral-600'} pl-4 py-1`}>
                <p className="text-base text-white/90 leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {project.techStack.map(tag => (
              <span key={tag} className="px-3 py-1.5 bg-neutral-800 border border-neutral-700 text-sm font-medium text-white/90 hover:border-emerald-500 transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {project.architecture && (
          <div className="flex-1 bg-neutral-950 border border-neutral-800 p-6 lg:p-8">
            <h4 className="text-sm font-bold text-emerald-400 mb-6 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              Architecture
            </h4>
            <div className="grid grid-cols-2 gap-6">
              {Object.entries(project.architecture).map(([key, vals]) => (
                <div key={key}>
                  <span className="text-xs font-bold text-white/60 uppercase tracking-wider block mb-3">{key}</span>
                  <ul className="text-sm space-y-2 text-white/90">
                    {(vals as string[]).map((v: string) => (
                      <li key={v} className="flex items-center gap-2">
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
  );
};

export default ProjectHighlight;
