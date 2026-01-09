
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import ProjectHighlight from './components/ProjectHighlight';
import AIAsk from './components/AIAsk';
import Terminal from './components/Terminal';
import { PROJECTS, ARCHIVE_PROJECTS, PERSONAL_INFO } from './constants';

const App: React.FC = () => {
  const [showArchived, setShowArchived] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />

      <main className="max-w-6xl mx-auto px-6 pt-24 pb-32 space-y-32">
        <Hero />

        {/* Interactive Section */}
        <section id="interactive" className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 flex flex-col">
            <h2 className="pixel-font text-xl text-white mb-4 flex items-center gap-2">
              <span className="text-emerald-400">&gt;</span>
              INTERACTIVE_TERMINAL
            </h2>
            <Terminal />
          </div>
          <div className="lg:col-span-2 flex flex-col">
            <h2 className="pixel-font text-xl text-white mb-4 flex items-center gap-2">
              <span className="text-emerald-400">&gt;</span>
              ASK_ME_ANYTHING
            </h2>
            <AIAsk />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-8 scroll-mt-32">
          <div className="flex items-center justify-between">
            <h2 className="pixel-font text-3xl text-white flex items-center gap-3">
              <span className="text-emerald-400">&gt;</span>
              FEATURED_PROJECTS
            </h2>
          </div>

          <div className="space-y-6">
            {PROJECTS.map((p, idx) => (
              <ProjectHighlight key={idx} project={p} />
            ))}
          </div>

          <button
            onClick={() => setShowArchived(!showArchived)}
            className="flex items-center gap-2 px-4 py-2 bg-neutral-900 border-2 border-neutral-600 text-white/60 hover:text-emerald-400 hover:border-emerald-500/50 transition-all text-sm mono"
          >
            <svg className={`w-4 h-4 transition-transform ${showArchived ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            [{showArchived ? 'HIDE' : 'SHOW'}_ARCHIVED] ({ARCHIVE_PROJECTS.length})
          </button>

          {showArchived && (
            <div className="space-y-4 animate-in">
              {ARCHIVE_PROJECTS.map((p, idx) => (
                <ProjectHighlight key={idx} project={p} isArchive={true} />
              ))}
            </div>
          )}
        </section>

        {/* Skills & Experience Section */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
          <section id="skills" className="xl:col-span-1">
            <div className="sticky top-24">
              <h2 className="pixel-font text-xl text-white mb-6 flex items-center gap-2">
                <span className="text-emerald-400">&gt;</span>
                SKILLS_&_TOOLS
              </h2>
              <Skills />
            </div>
          </section>

          <section id="experience" className="xl:col-span-2 scroll-mt-32">
            <h2 className="pixel-font text-3xl text-white mb-10 flex items-center gap-3">
              <span className="text-emerald-400">&gt;</span>
              EXPERIENCE
            </h2>
            <Experience />
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-neutral-700 bg-[#050505]">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="pixel-font text-2xl text-white">REESE_BOREN</p>
              <p className="text-xs text-emerald-400/70 mono mt-1">&gt; AI_SYSTEMS_ENGINEER & FOUNDER</p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2 px-4 py-2 bg-neutral-900 border-2 border-neutral-600 text-white/70 hover:text-emerald-400 hover:border-emerald-500/50 transition-all text-sm mono"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                [EMAIL]
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-neutral-900 border-2 border-neutral-600 text-white/70 hover:text-emerald-400 hover:border-emerald-500/50 transition-all text-sm mono"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                [LINKEDIN]
              </a>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-neutral-800 text-center">
            <p className="text-xs text-white/30 mono">BUILT_WITH: React, TypeScript, Claude Code</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
