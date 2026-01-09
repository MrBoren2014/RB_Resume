
import React, { useState, useEffect, useRef } from 'react';

const Terminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([
    'Boren-CLI v2.0.1 [Systalog-Core Enabled]',
    'Accessing kernel... OK',
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
        response = 'Available commands: about, systalog, alaska, usaf, skills, contact, clear, whoami';
        break;
      case 'about':
        response = 'AI Engineer / Full-Stack Architect. Founder of Systalog.ai. Former USAF Flight Sergeant. Current M.S. in AI student.';
        break;
      case 'systalog':
        response = 'Systems Logic & Automation Group LLC. Flagship multi-tenant SaaS. 25+ RLS policies. Built with Next.js 16/React 19.';
        break;
      case 'alaska':
        response = 'Flight Training QA Specialist II. Compliance for 3,000+ pilots. Python automation (OCR/Pandas) for FAA audits.';
        break;
      case 'usaf':
        response = 'Security Forces Flight Sergeant. Training & Onboarding lead. SITREP standardization specialist.';
        break;
      case 'skills':
        response = 'TS/JS, Python, SQL. React 19, Next.js 16, PostgreSQL, PyTorch, Transformers, Radix UI.';
        break;
      case 'contact':
        response = 'Email: Reese.Boren@hotmail.com | LinkedIn: linkedin.com/in/michael-boren-b63a65234';
        break;
      case 'whoami':
        response = 'root@systalog-node:~$ user="Reese Boren" status="Founder" mode="Shipping"';
        break;
      case 'clear':
        setHistory(['Terminal reset. OK.']);
        setInput('');
        return;
      case '':
        return;
      default:
        response = `Command not found: ${cmd}. Type "help" for a list of valid commands.`;
    }

    setHistory(prev => [...prev, `> ${input}`, response, '']);
    setInput('');
  };

  return (
    <div className="bg-black border-4 border-white overflow-hidden shadow-2xl font-mono text-sm h-full flex flex-col">
      <div className="bg-white px-6 py-2 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-black"></div>
          <div className="w-3 h-3 bg-black"></div>
          <div className="w-3 h-3 bg-black"></div>
        </div>
        <span className="text-black text-[10px] font-black uppercase tracking-widest">rb_terminal — 120x40</span>
      </div>
      <div 
        ref={scrollRef}
        className="p-8 flex-grow overflow-y-auto custom-scrollbar bg-black text-white min-h-[400px]"
      >
        {history.map((line, i) => (
          <div key={i} className={line.startsWith('>') ? 'text-emerald-400 font-black' : 'opacity-90'}>
            {line}
          </div>
        ))}
        <form onSubmit={handleCommand} className="flex gap-4 items-center">
          <span className="text-emerald-500 font-black">systalog:~$</span>
          <input 
            autoFocus
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent border-none outline-none flex-grow text-white font-black caret-white"
            autoComplete="off"
            spellCheck="false"
          />
        </form>
      </div>
    </div>
  );
};

export default Terminal;
