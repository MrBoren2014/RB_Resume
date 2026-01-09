
import React, { useState, useEffect, useRef } from 'react';
import { getKnowledgeResponse, SUGGESTED_QUESTIONS } from '../services/knowledge';

const AIAsk: React.FC = () => {
  const [history, setHistory] = useState<{type: 'user' | 'bot', text: string}[]>([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [history]);

  const askQuestion = (q: string) => {
    setLoading(true);
    setHistory(prev => [...prev, {type: 'user', text: q}]);
    
    setTimeout(() => {
      const response = getKnowledgeResponse(q);
      setHistory(prev => [...prev, {type: 'bot', text: response}]);
      setLoading(false);
    }, 600);
  };

  return (
    <div className="bg-black border-2 border-white rounded-none flex flex-col h-[500px] shadow-[0_0_20px_rgba(255,255,255,0.1)]">
      <div className="bg-white text-black px-4 py-1 flex justify-between items-center">
        <span className="text-xs font-black uppercase tracking-widest">Knowledge_Bot_v2.0</span>
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-black"></div>
          <div className="w-2 h-2 bg-black"></div>
        </div>
      </div>
      
      <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto custom-scrollbar flex flex-col gap-4 bg-black">
        {history.length === 0 && (
          <div className="text-neutral-600 text-xs uppercase leading-relaxed text-center py-10 italic">
            [ SYSTEM IDLE ]<br/>
            SELECT A QUERY TO INITIALIZE RETRIEVAL
          </div>
        )}
        {history.map((msg, i) => (
          <div key={i} className={`text-xs ${msg.type === 'user' ? 'text-neutral-400' : 'text-white'} leading-relaxed`}>
            <span className="font-bold mr-2">[{msg.type.toUpperCase()}]:</span>
            {msg.text}
          </div>
        ))}
        {loading && <div className="text-emerald-500 animate-pulse text-xs uppercase tracking-tighter">Analyzing_Buffer...</div>}
      </div>

      <div className="p-4 border-t-2 border-white bg-black">
        <p className="text-[10px] text-neutral-500 uppercase font-black mb-3 tracking-widest">Available Queries:</p>
        <div className="flex flex-wrap gap-2">
          {SUGGESTED_QUESTIONS.map((q, i) => (
            <button 
              key={i}
              onClick={() => !loading && askQuestion(q)}
              className="px-2 py-1 border border-neutral-800 text-[10px] hover:bg-white hover:text-black transition-all uppercase text-left max-w-full"
            >
              &gt; {q}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIAsk;
