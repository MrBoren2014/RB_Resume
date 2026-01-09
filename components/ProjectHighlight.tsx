
import React from 'react';
import { ProjectDetail } from '../types';

interface ProjectHighlightProps {
  project: ProjectDetail;
  isArchive?: boolean;
}

const ProjectHighlight: React.FC<ProjectHighlightProps> = ({ project, isArchive = false }) => {
  const isMain = project.name === "SYSTALOG.AI";

  return (
    <div className={`bg-black border-4 ${isMain ? 'border-white' : 'border-neutral-800'} p-10 group transition-all mb-12 shadow-[15px_15px_0px_rgba(255,255,255,0.05)]`}>
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="flex-1">
          <div className="mb-8">
            <span className={`inline-block px-4 py-1 font-black uppercase tracking-[0.2em] mb-6 ${isMain ? 'bg-white text-black' : 'bg-neutral-800 text-neutral-400'}`}>
              {isMain ? "FLAGSHIP_SYSTEM" : isArchive ? "ARCHIVE_SYSTEM" : "DEPLOYED_SYSTEM"}
            </span>
            <h3 className={`text-5xl sm:text-7xl font-black mb-4 tracking-tighter uppercase leading-none ${isMain ? 'text-white' : 'text-neutral-400'}`}>
              {project.name}
            </h3>
            <p className="text-xl text-white font-bold uppercase tracking-widest italic opacity-90 border-b-2 border-white/20 pb-4">
              {project.tagline}
            </p>
          </div>
          
          <div className="space-y-6 mb-10">
            {project.achievements.map((item, i) => (
              <div key={i} className={`flex gap-4 border-l-8 ${isMain ? 'border-white' : 'border-neutral-700'} pl-8 py-2`}>
                <p className="text-base sm:text-lg uppercase font-black leading-tight text-white">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            {project.techStack.map(tag => (
              <span key={tag} className="px-5 py-2 bg-neutral-900 border-2 border-white/20 text-[12px] font-black text-white uppercase tracking-tighter hover:border-white transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {project.architecture && (
          <div className="flex-1 bg-white p-10 border-4 border-black flex flex-col shadow-[15px_15px_0px_rgba(255,255,255,0.2)]">
            <h4 className="text-[14px] font-black text-black mb-10 uppercase tracking-[0.4em] border-b-4 border-black pb-4">Dependency_Manifest</h4>
            <div className="grid grid-cols-2 gap-10">
              {Object.entries(project.architecture).map(([key, vals]) => (
                <div key={key} className="border-l-4 border-black pl-8">
                  <span className="text-[14px] font-black text-black uppercase block mb-4">{key}</span>
                  <ul className="text-[12px] space-y-3 text-black font-black uppercase">
                    {(vals as string[]).map((v: string) => (
                      <li key={v} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-black"></div>
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
