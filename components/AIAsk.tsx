
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
    <div className="bg-neutral-950 border border-neutral-700 flex flex-col h-[450px]">
      <div className="bg-neutral-800 text-white px-4 py-2 flex justify-between items-center border-b border-neutral-700">
        <span className="text-sm font-semibold">Knowledge Base</span>
        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
      </div>

      <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto custom-scrollbar flex flex-col gap-3 bg-neutral-950">
        {history.length === 0 && (
          <div className="text-neutral-500 text-sm text-center py-8">
            Select a question below to learn more
          </div>
        )}
        {history.map((msg, i) => (
          <div key={i} className={`text-sm ${msg.type === 'user' ? 'text-emerald-400' : 'text-white/90'} leading-relaxed`}>
            <span className="font-semibold mr-2">{msg.type === 'user' ? 'Q:' : 'A:'}</span>
            {msg.text}
          </div>
        ))}
        {loading && <div className="text-emerald-400 animate-pulse text-sm">Thinking...</div>}
      </div>

      <div className="p-4 border-t border-neutral-700 bg-neutral-900">
        <p className="text-xs text-neutral-400 mb-3 font-medium">Ask a question:</p>
        <div className="flex flex-wrap gap-2">
          {SUGGESTED_QUESTIONS.map((q, i) => (
            <button
              key={i}
              onClick={() => !loading && askQuestion(q)}
              className="px-3 py-1.5 border border-neutral-600 text-xs text-white/80 hover:bg-emerald-500 hover:border-emerald-500 hover:text-white transition-all text-left"
            >
              {q}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIAsk;
