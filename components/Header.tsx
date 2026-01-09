
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-2xl font-bold text-white">
            <span className="text-emerald-400">R</span>B
          </div>
          <div className="hidden lg:block border-l border-white/20 pl-4">
            <span className="block text-sm text-white font-semibold">Reese Boren</span>
            <span className="block text-xs text-white/50">AI Systems Engineer</span>
          </div>
        </div>

        <nav className="flex items-center gap-6">
          <a
            href="#projects"
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            Experience
          </a>
          <a
            href="#skills"
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            Skills
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="px-5 py-2.5 bg-emerald-500 text-white text-sm font-semibold rounded-lg hover:bg-emerald-400 transition-all glow-border"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
