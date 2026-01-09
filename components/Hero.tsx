
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-32">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        <div className="inline-block px-5 py-2 border-2 border-white text-sm font-bold uppercase tracking-wider mb-4 bg-white text-black">
          STATUS: OPERATIONAL // FOUNDER_SYSTALOG.AI
        </div>

        <h1
          className="text-6xl sm:text-8xl lg:text-9xl font-black tracking-tight leading-none text-white glitch"
          data-text="REESE BOREN"
        >
          REESE BOREN
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-base font-bold uppercase tracking-wide text-white">
          <span className="bg-neutral-900 border border-white/30 px-4 py-2">AI Systems Engineer</span>
          <span className="hidden md:block text-white/50">|</span>
          <span className="bg-neutral-900 border border-white/30 px-4 py-2">Full-Stack Architect</span>
          <span className="hidden md:block text-white/50">|</span>
          <span className="bg-emerald-600 text-white px-4 py-2">Founder @ Systalog.ai</span>
        </div>

        <p className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto font-medium leading-relaxed border-l-4 border-emerald-500 pl-6 py-4 text-left bg-neutral-900/80">
          {PERSONAL_INFO.summary}
        </p>

        <div className="flex flex-wrap justify-center gap-6 pt-8">
          <a
            href="https://systalog.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-white text-black font-bold uppercase tracking-wide text-lg hover:bg-emerald-500 hover:text-white transition-all shadow-lg"
          >
            Explore Systalog.ai
          </a>
          <a
            href="#experience"
            className="px-10 py-4 border-2 border-white text-white font-bold uppercase tracking-wide text-lg hover:bg-white hover:text-black transition-all"
          >
            View Experience
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
