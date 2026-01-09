
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import ProjectHighlight from './components/ProjectHighlight';
import AIAsk from './components/AIAsk';
import Terminal from './components/Terminal';
import { PROJECTS, ARCHIVE_PROJECTS, PERSONAL_INFO } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-white selection:text-black">
      <Header />
      
      <main className="max-w-7xl mx-auto px-8 pt-20 pb-40 space-y-48">
        <Hero />
        
        <section id="interactive" className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 flex flex-col">
            <div className="mb-8 flex items-center gap-6">
              <h2 className="text-3xl font-black uppercase tracking-tighter bg-white text-black px-4">SYSTEM_SHELL</h2>
              <div className="h-[2px] bg-white/20 flex-grow"></div>
            </div>
            <Terminal />
          </div>
          <div className="lg:col-span-2 flex flex-col">
            <div className="mb-8 flex items-center gap-6">
              <h2 className="text-3xl font-black uppercase tracking-tighter bg-white text-black px-4">KNOWLEDGE_SIM</h2>
              <div className="h-[2px] bg-white/20 flex-grow"></div>
            </div>
            <AIAsk />
          </div>
        </section>

        <section id="projects" className="space-y-16 scroll-mt-32">
          <div className="flex items-center gap-6">
            <h2 className="text-6xl font-black tracking-tighter uppercase italic bg-white text-black px-8 py-2 glitch" data-text="FLAGSHIP_SYSTEM">FLAGSHIP_SYSTEM</h2>
            <div className="h-[4px] bg-white flex-grow"></div>
          </div>
          
          <div className="grid grid-cols-1 gap-12">
            {PROJECTS.map((p, idx) => (
              <ProjectHighlight key={idx} project={p} />
            ))}
          </div>

          <div className="pt-24 space-y-12">
            <div className="flex items-center gap-6">
              <h3 className="text-4xl font-black tracking-tighter uppercase text-white/40">PROJECT_ARCHIVES</h3>
              <div className="h-[1px] bg-white/20 flex-grow"></div>
            </div>
            <div className="grid grid-cols-1 gap-8 opacity-70 hover:opacity-100 transition-opacity">
              {ARCHIVE_PROJECTS.map((p, idx) => (
                <ProjectHighlight key={idx} project={p} isArchive={true} />
              ))}
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-32">
          <section id="skills" className="xl:col-span-1">
            <div className="sticky top-40">
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-16 bg-white text-black px-6 py-2 inline-block">REGISTRY_STACK</h2>
              <Skills />
            </div>
          </section>

          <section id="experience" className="xl:col-span-2 scroll-mt-32">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-16 bg-white text-black px-6 py-2 inline-block">ENGINEERING_LOGS</h2>
            <Experience />
          </section>
        </div>
      </main>

      <footer className="border-t-[12px] border-white bg-black py-32 mt-40">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <p className="text-[14px] font-black uppercase tracking-[0.8em] text-white">REESE_BOREN // SYSTEM_TERMINAL</p>
            <p className="text-xs text-neutral-600 mt-4 tracking-widest font-black uppercase">Build_Hash: RB_PROD_2024_04_FINAL</p>
          </div>
          <div className="flex gap-16">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[14px] font-black uppercase tracking-widest text-white hover:text-emerald-400 transition-colors border-b-2 border-white">Email_Channel</a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-[14px] font-black uppercase tracking-widest text-white hover:text-emerald-400 transition-colors border-b-2 border-white">Net_LinkedIn</a>
            <span className="text-[14px] font-black uppercase tracking-widest text-white/30 cursor-not-allowed">Source_Private</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
