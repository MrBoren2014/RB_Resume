
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative py-24 lg:py-40">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border-2 border-emerald-500/50 animate-in">
          <span className="w-2 h-2 bg-emerald-500 pulse-dot"></span>
          <span className="text-sm font-medium text-emerald-400 mono">AVAILABLE_FOR_OPPORTUNITIES</span>
        </div>

        {/* Name - Pixel style */}
        <h1 className="animate-in delay-1">
          <span className="pixel-font text-6xl sm:text-8xl lg:text-9xl text-white tracking-wide">REESE </span>
          <span className="pixel-font text-6xl sm:text-8xl lg:text-9xl text-emerald-400 glow-text tracking-wide">BOREN</span>
        </h1>

        {/* Cyber tagline */}
        <div className="mono text-emerald-400/80 text-sm animate-in delay-2">
          <span className="text-white/50">&gt;</span> AI_ENGINEER <span className="text-white/50">|</span> FULL_STACK_ARCHITECT <span className="text-white/50">|</span> FOUNDER<span className="cursor-blink">_</span>
        </div>

        {/* Title pills - pixel style */}
        <div className="flex flex-wrap items-center justify-center gap-3 animate-in delay-3">
          <span className="px-4 py-2 bg-neutral-900 border-2 border-neutral-600 text-white/90 font-medium mono text-sm hover:border-emerald-500 transition-colors">
            AI Systems Engineer
          </span>
          <span className="px-4 py-2 bg-neutral-900 border-2 border-neutral-600 text-white/90 font-medium mono text-sm hover:border-emerald-500 transition-colors">
            Full-Stack Architect
          </span>
          <span className="px-4 py-2 bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 font-semibold mono text-sm">
            Founder @ Systalog.ai
          </span>
        </div>

        {/* Summary */}
        <p className="text-base text-white/60 max-w-3xl mx-auto leading-relaxed animate-in delay-4">
          {PERSONAL_INFO.summary}
        </p>

        {/* CTA buttons - pixel style */}
        <div className="flex flex-wrap justify-center gap-4 pt-6 animate-in delay-5">
          <a
            href="https://systalog.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-6 py-3 bg-emerald-500 text-black font-bold mono text-sm border-2 border-emerald-400 hover:bg-emerald-400 transition-all pixel-border"
            style={{ color: '#000' }}
          >
            <span className="flex items-center gap-2">
              [EXPLORE_SYSTALOG]
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
          <a
            href="#experience"
            className="px-6 py-3 bg-neutral-900 border-2 border-neutral-500 text-white font-bold mono text-sm hover:border-emerald-500 hover:text-emerald-400 transition-all"
          >
            [VIEW_EXPERIENCE]
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="px-6 py-3 bg-transparent border-2 border-emerald-500/50 text-emerald-400 font-bold mono text-sm hover:bg-emerald-500/10 transition-all"
          >
            [GET_IN_TOUCH]
          </a>
        </div>

        {/* Quick stats - retro terminal style */}
        <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <div className="text-center p-4 border-2 border-neutral-700 bg-neutral-900/50 hover:border-emerald-500/50 transition-colors">
            <div className="pixel-font text-4xl text-emerald-400">6+</div>
            <div className="text-xs text-white/50 mono mt-1">YEARS_USAF</div>
          </div>
          <div className="text-center p-4 border-2 border-neutral-700 bg-neutral-900/50 hover:border-emerald-500/50 transition-colors">
            <div className="pixel-font text-4xl text-emerald-400">25+</div>
            <div className="text-xs text-white/50 mono mt-1">RLS_POLICIES</div>
          </div>
          <div className="text-center p-4 border-2 border-neutral-700 bg-neutral-900/50 hover:border-emerald-500/50 transition-colors">
            <div className="pixel-font text-4xl text-emerald-400">3K+</div>
            <div className="text-xs text-white/50 mono mt-1">PILOTS_MANAGED</div>
          </div>
          <div className="text-center p-4 border-2 border-neutral-700 bg-neutral-900/50 hover:border-emerald-500/50 transition-colors">
            <div className="pixel-font text-4xl text-emerald-400">M.S.</div>
            <div className="text-xs text-white/50 mono mt-1">AI_IN_PROGRESS</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
