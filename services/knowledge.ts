
const KNOWLEDGE_BASE = [
  {
    keywords: ["alaska", "airlines", "pilot", "faa", "compliance", "flight training"],
    answer: "At Alaska Airlines, I manage compliance for 3,000+ pilots as a Flight Training QA Specialist II. I built Python-based OCR pipelines using pdfplumber and pytesseract to turn messy records into audit-ready outputs, maintaining a 100% FAA compliance rate."
  },
  {
    keywords: ["usaf", "air force", "military", "leadership", "sitrep", "sergeant"],
    answer: "I served 6 years in the US Air Force as a Security Forces Flight Sergeant. I led security teams and standardized SITREP reporting templates for base defense. This experience honed my leadership and systems-thinking under pressure."
  },
  {
    keywords: ["systalog", "startup", "founder", "vision", "flagship"],
    answer: "Systalog.ai (Systems Logic & Automation Group LLC) is my flagship production B2B SaaS platform. I architected it solo using React 19, Next.js 16, and PostgreSQL. It features 25+ Row-Level Security policies for enterprise-grade multi-tenant isolation."
  },
  {
    keywords: ["rls", "security policies", "isolation", "row-level", "25+"],
    answer: "Security is non-negotiable. I implement 25+ Row-Level Security (RLS) policies in PostgreSQL to ensure that data isolation is enforced at the database level. This is paired with HSTS, CSP, and RBAC middleware."
  },
  {
    keywords: ["nlp", "sentiment", "bert", "gpt", "mental health", "ml project"],
    answer: "One of my archived projects is a Mental Health Sentiment Analysis solution using fine-tuned DistilBERT and GPT-2 models. It processed 50,000+ statements with high F1 and Precision-Recall accuracy."
  },
  {
    keywords: ["stack", "languages", "typescript", "python", "tech", "tools"],
    answer: "My core production stack is TypeScript, React 19, Next.js 16, PostgreSQL, and Python for ML/Automation tasks. I specialize in building secure, scalable systems."
  }
];

export const getKnowledgeResponse = (query: string): string => {
  const normalized = query.toLowerCase();

  // Score each entry by how many keywords match
  let bestMatch = null;
  let bestScore = 0;

  for (const entry of KNOWLEDGE_BASE) {
    const score = entry.keywords.filter(kw => normalized.includes(kw)).length;
    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  }

  if (bestMatch && bestScore > 0) return bestMatch.answer;
  return "I don't have specific info on that. Try asking about Systalog.ai, Alaska Airlines, Air Force experience, or my tech stack.";
};

export const SUGGESTED_QUESTIONS = [
  "What is Systalog.ai?",
  "How are RLS policies implemented?",
  "Tell me about Alaska Airlines.",
  "What did you do in the Air Force?",
  "What's your tech stack?"
];
