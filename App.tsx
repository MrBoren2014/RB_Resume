
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
    <div className="min-h-screen selection:bg-emerald-500 selection:text-white">
      <Header />

      <main className="max-w-7xl mx-auto px-6 pt-20 pb-32 space-y-32">
        <Hero />

        <section id="interactive" className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 flex flex-col">
            <h2 className="text-2xl font-bold text-white mb-6">Interactive Terminal</h2>
            <Terminal />
          </div>
          <div className="lg:col-span-2 flex flex-col">
            <h2 className="text-2xl font-bold text-white mb-6">Ask Me Anything</h2>
            <AIAsk />
          </div>
        </section>

        <section id="projects" className="space-y-12 scroll-mt-32">
          <h2 className="text-4xl font-bold text-white">Featured Projects</h2>

          <div className="space-y-8">
            {PROJECTS.map((p, idx) => (
              <ProjectHighlight key={idx} project={p} />
            ))}
          </div>

          <div className="pt-8">
            <button
              onClick={() => setShowArchived(!showArchived)}
              className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors group"
            >
              <span className="text-lg font-medium">
                {showArchived ? '− Hide' : '+ Show'} Archived Projects ({ARCHIVE_PROJECTS.length})
              </span>
            </button>

            {showArchived && (
              <div className="mt-8 space-y-6">
                {ARCHIVE_PROJECTS.map((p, idx) => (
                  <ProjectHighlight key={idx} project={p} isArchive={true} />
                ))}
              </div>
            )}
          </div>
        </section>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-16">
          <section id="skills" className="xl:col-span-1">
            <div className="sticky top-24">
              <h2 className="text-2xl font-bold text-white mb-8">Skills</h2>
              <Skills />
            </div>
          </section>

          <section id="experience" className="xl:col-span-2 scroll-mt-32">
            <h2 className="text-4xl font-bold text-white mb-12">Experience</h2>
            <Experience />
          </section>
        </div>
      </main>

      <footer className="border-t border-white/20 bg-neutral-950 py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-lg font-bold text-white">Reese Boren</p>
            <p className="text-sm text-neutral-500 mt-1">AI Systems Engineer</p>
          </div>
          <div className="flex gap-8">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm font-medium text-white hover:text-emerald-400 transition-colors">
              Email
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white hover:text-emerald-400 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
