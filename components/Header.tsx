
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b-4 border-white py-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="text-4xl font-black tracking-tighter text-white bg-neutral-900 px-2">RB_</div>
          <div className="hidden lg:block border-l-2 border-white/20 pl-6">
            <span className="block text-[12px] text-white font-black uppercase tracking-[0.3em]">REESE_BOREN_OS</span>
            <span className="block text-[10px] text-emerald-500 font-black uppercase tracking-[0.2em]">BUILD: SYSTALOG_PROD_04</span>
          </div>
        </div>
        
        <nav className="flex items-center gap-10">
          <a 
            href="#projects" 
            className="text-[12px] font-black text-white hover:text-emerald-400 transition-colors uppercase tracking-[0.2em] border-b-2 border-transparent hover:border-emerald-400"
          >
            SYSTEM_LOGS
          </a>
          <a 
            href="#experience" 
            className="text-[12px] font-black text-white hover:text-emerald-400 transition-colors uppercase tracking-[0.2em] border-b-2 border-transparent hover:border-emerald-400"
          >
            ENGINEERING_ARCH
          </a>
          <a 
            href={`mailto:${PERSONAL_INFO.email}`} 
            className="px-6 py-2 bg-white text-black text-[12px] font-black uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all shadow-[6px_6px_0px_rgba(255,255,255,0.2)]"
          >
            INIT_CONTACT
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
