
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative py-24 lg:py-40">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30">
          <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
          <span className="text-sm font-medium text-emerald-400">Available for opportunities</span>
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none">
          <span className="text-white">Reese </span>
          <span className="text-emerald-400 glow-text">Boren</span>
        </h1>

        {/* Title pills */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/90 font-medium">
            AI Systems Engineer
          </span>
          <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/90 font-medium">
            Full-Stack Architect
          </span>
          <span className="px-4 py-2 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-semibold">
            Founder @ Systalog.ai
          </span>
        </div>

        {/* Summary */}
        <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
          {PERSONAL_INFO.summary}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-4 pt-6">
          <a
            href="https://systalog.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-400 transition-all"
          >
            <span className="flex items-center gap-2">
              Explore Systalog.ai
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
          <a
            href="#experience"
            className="px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/30 transition-all"
          >
            View Experience
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="px-8 py-4 bg-transparent border border-emerald-500/50 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-500/10 transition-all"
          >
            Get in Touch
          </a>
        </div>

        {/* Quick stats */}
        <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">6+</div>
            <div className="text-sm text-white/50">Years USAF</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">25+</div>
            <div className="text-sm text-white/50">RLS Policies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">3,000+</div>
            <div className="text-sm text-white/50">Pilots Managed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400">M.S.</div>
            <div className="text-sm text-white/50">AI in Progress</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
