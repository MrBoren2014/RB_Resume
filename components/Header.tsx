
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/95 backdrop-blur-xl border-b-2 border-white py-3">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-3xl font-black tracking-tight text-white">RB_</div>
          <div className="hidden lg:block border-l border-white/30 pl-4">
            <span className="block text-sm text-white font-bold uppercase tracking-wide">Reese Boren</span>
            <span className="block text-xs text-emerald-400 font-medium">Systems Engineer</span>
          </div>
        </div>

        <nav className="flex items-center gap-8">
          <a
            href="#projects"
            className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors uppercase tracking-wide"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors uppercase tracking-wide"
          >
            Experience
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="px-5 py-2 bg-emerald-500 text-white text-sm font-bold uppercase tracking-wide hover:bg-emerald-400 transition-all"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
