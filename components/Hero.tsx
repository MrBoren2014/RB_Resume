
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative py-24 lg:py-40">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <div className="inline-block px-6 py-2 border-4 border-white text-[14px] font-black uppercase tracking-[0.4em] mb-4 bg-white text-black shadow-[10px_10px_0px_rgba(255,255,255,0.1)]">
          STATUS: OPERATIONAL // FOUNDER_SYSTALOG.AI
        </div>
        
        <h1 
          className="text-7xl sm:text-9xl lg:text-[11rem] font-black tracking-tighter leading-none text-white glitch"
          data-text="REESE BOREN"
        >
          REESE BOREN
        </h1>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm font-black uppercase tracking-[0.2em] text-white">
          <span className="bg-neutral-900 border-2 border-white/20 px-4 py-2">AI Systems Engineer</span>
          <span className="hidden md:block text-white/50">|</span>
          <span className="bg-neutral-900 border-2 border-white/20 px-4 py-2">Full-Stack Architect</span>
          <span className="hidden md:block text-white/50">|</span>
          <span className="bg-white text-black px-4 py-2">Founder @ Systalog.ai</span>
        </div>

        <p className="text-xl sm:text-2xl text-white max-w-4xl mx-auto font-black leading-tight border-l-[12px] border-white pl-8 py-6 text-left bg-neutral-900/60 backdrop-blur-sm shadow-[20px_20px_0px_rgba(0,0,0,0.5)]">
          {PERSONAL_INFO.summary}
        </p>

        <div className="flex flex-wrap justify-center gap-10 pt-10">
          <a 
            href="https://systalog.ai" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-14 py-6 bg-white text-black font-black uppercase tracking-widest text-xl hover:translate-x-2 hover:-translate-y-2 transition-all shadow-[12px_12px_0px_rgba(255,255,255,0.2)] active:shadow-none active:translate-x-0 active:translate-y-0 text-center"
          >
            Explore_Systalog.ai
          </a>
          <a 
            href="#experience" 
            className="px-14 py-6 border-4 border-white text-white font-black uppercase tracking-widest text-xl hover:bg-white hover:text-black transition-all text-center"
          >
            Engineering_Arch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
