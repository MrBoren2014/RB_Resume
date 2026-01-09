
import React, { useState, useEffect, useRef } from 'react';

const Terminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([
    'Boren-CLI v2.0',
    'Type "help" to see available commands.',
    ''
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    let response = '';

    switch (cmd) {
      case 'help':
        response = 'Commands: about, systalog, alaska, usaf, skills, contact, clear';
        break;
      case 'about':
        response = 'AI Engineer & Full-Stack Architect. Founder of Systalog.ai. Former USAF Flight Sergeant. M.S. in AI student.';
        break;
      case 'systalog':
        response = 'Systems Logic & Automation Group LLC. Multi-tenant SaaS with 25+ RLS policies. Built with Next.js 16 & React 19.';
        break;
      case 'alaska':
        response = 'Flight Training QA Specialist II. Compliance for 3,000+ pilots. Python automation for FAA audits.';
        break;
      case 'usaf':
        response = 'Security Forces Flight Sergeant. Training & onboarding lead. 6 years of service.';
        break;
      case 'skills':
        response = 'TypeScript, Python, SQL, React 19, Next.js 16, PostgreSQL, PyTorch, Transformers';
        break;
      case 'contact':
        response = 'Email: Reese.Boren@hotmail.com | LinkedIn: linkedin.com/in/michael-boren-b63a65234';
        break;
      case 'clear':
        setHistory(['Terminal cleared.', '']);
        setInput('');
        return;
      case '':
        return;
      default:
        response = `Command not found: ${cmd}. Type "help" for commands.`;
    }

    setHistory(prev => [...prev, `$ ${input}`, response, '']);
    setInput('');
  };

  return (
    <div className="bg-neutral-950 border border-neutral-700 overflow-hidden font-mono h-full flex flex-col">
      <div className="bg-neutral-800 px-4 py-2 flex items-center justify-between border-b border-neutral-700">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-neutral-400 text-xs font-medium">terminal</span>
      </div>
      <div
        ref={scrollRef}
        className="p-5 flex-grow overflow-y-auto custom-scrollbar bg-neutral-950 text-white min-h-[350px] text-sm leading-relaxed"
      >
        {history.map((line, i) => (
          <div key={i} className={line.startsWith('$') ? 'text-emerald-400 font-semibold' : 'text-white/90'}>
            {line}
          </div>
        ))}
        <form onSubmit={handleCommand} className="flex gap-3 items-center mt-1">
          <span className="text-emerald-400 font-semibold">$</span>
          <input
            autoFocus
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent border-none outline-none flex-grow text-white caret-emerald-400"
            autoComplete="off"
            spellCheck="false"
            placeholder="type a command..."
          />
        </form>
      </div>
    </div>
  );
};

export default Terminal;
