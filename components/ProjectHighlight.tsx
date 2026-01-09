
import React from 'react';
import { ProjectDetail } from '../types';

interface ProjectHighlightProps {
  project: ProjectDetail;
  isArchive?: boolean;
}

const ProjectHighlight: React.FC<ProjectHighlightProps> = ({ project, isArchive = false }) => {
  const isMain = project.name === "SYSTALOG.AI";

  return (
    <div className={`overflow-hidden transition-all ${isMain ? 'border-2 border-emerald-500 glow-border' : 'border-2 border-neutral-700'} ${isArchive ? 'opacity-70 hover:opacity-100' : ''} hover:border-emerald-500/70`}>
      <div className="bg-neutral-900/50 p-6 lg:p-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <span className={`inline-block px-3 py-1 text-xs mono uppercase tracking-wider ${isMain ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500' : 'bg-neutral-800 text-white/60 border border-neutral-600'}`}>
                  {isMain ? "FLAGSHIP_PROJECT" : isArchive ? "ARCHIVED" : "PROJECT"}
                </span>
                {isMain && <span className="text-emerald-400 text-xs mono">2025 - PRESENT</span>}
              </div>
              <h3 className={`pixel-font text-2xl sm:text-3xl mb-2 leading-tight ${isMain ? 'text-emerald-400' : 'text-white/80'}`}>
                {project.name}
              </h3>
              <p className="text-sm text-white/50 mono">
                &gt; {project.tagline}
              </p>
            </div>

            <div className="space-y-2 mb-6">
              {project.achievements.map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className={`mono ${isMain ? 'text-emerald-400' : 'text-white/40'}`}>-</span>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {project.techStack.map(tag => (
                <span key={tag} className="px-2 py-1 bg-neutral-800 border border-neutral-600 text-xs mono text-white/70 hover:border-emerald-500/50 hover:text-emerald-400 transition-all">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {project.architecture && (
            <div className="flex-1 bg-[#0a0a0a] border-2 border-neutral-700 p-5 lg:p-6">
              <h4 className="text-xs mono text-emerald-400 mb-5 uppercase tracking-wider flex items-center gap-2">
                <span className="text-white/50">&gt;</span>
                ARCHITECTURE
              </h4>
              <div className="grid grid-cols-2 gap-5">
                {Object.entries(project.architecture).map(([key, vals]) => (
                  <div key={key}>
                    <span className="text-xs mono text-white/40 uppercase tracking-wider block mb-2">{key}</span>
                    <ul className="text-xs space-y-1.5">
                      {(vals as string[]).map((v: string) => (
                        <li key={v} className="flex items-center gap-2 text-white/70 mono">
                          <span className="text-emerald-400">-</span>
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
