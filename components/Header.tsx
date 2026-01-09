
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/95 backdrop-blur border-b-2 border-neutral-700">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="pixel-font text-3xl text-white">
            <span className="text-emerald-400">R</span>B<span className="cursor-blink text-emerald-400">_</span>
          </div>
          <div className="hidden lg:block border-l-2 border-neutral-600 pl-4">
            <span className="block text-sm text-white mono">REESE_BOREN</span>
            <span className="block text-xs text-emerald-400/70 mono">&gt; AI_SYSTEMS_ENGINEER</span>
          </div>
        </div>

        <nav className="flex items-center gap-4">
          <a
            href="#projects"
            className="text-sm mono text-white/70 hover:text-emerald-400 transition-colors px-3 py-1 border border-transparent hover:border-emerald-500/50"
          >
            /PROJECTS
          </a>
          <a
            href="#experience"
            className="text-sm mono text-white/70 hover:text-emerald-400 transition-colors px-3 py-1 border border-transparent hover:border-emerald-500/50"
          >
            /EXPERIENCE
          </a>
          <a
            href="#skills"
            className="text-sm mono text-white/70 hover:text-emerald-400 transition-colors px-3 py-1 border border-transparent hover:border-emerald-500/50"
          >
            /SKILLS
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="px-4 py-2 bg-emerald-500 text-black text-sm mono font-bold border-2 border-emerald-400 hover:bg-emerald-400 transition-all"
          >
            [CONTACT]
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
