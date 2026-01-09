
import { PERSONAL_INFO, PROJECTS, EXPERIENCE } from "../constants";

const KNOWLEDGE_BASE = [
  {
    keywords: ["systalog", "startup", "founder", "logic", "automation"],
    answer: "Systalog.ai (Systems Logic & Automation Group LLC) is my flagship production B2B SaaS platform. I architected it solo using React 19, Next.js 16, and PostgreSQL. It features 25+ Row-Level Security policies for enterprise-grade multi-tenant isolation."
  },
  {
    keywords: ["backoffice", "vets", "old name"],
    answer: "BackOfficeVets was the initial prototype name. The project has since evolved into Systalog.ai, reflecting a broader mission of Systems Logic & Automation for B2B clients."
  },
  {
    keywords: ["rls", "security", "security policies", "isolation", "database"],
    answer: "Security is non-negotiable. I implement 25+ Row-Level Security (RLS) policies in PostgreSQL to ensure that data isolation is enforced at the database level. This is paired with HSTS, CSP, and RBAC middleware."
  },
  {
    keywords: ["ocr", "tesseract", "document", "extract", "alaska"],
    answer: "At Alaska Airlines, I manage compliance for 3,000+ pilots. I built Python-based OCR pipelines using pdfplumber and pytesseract to turn messy records into audit-ready outputs, maintaining a 100% FAA compliance rate."
  },
  {
    keywords: ["nlp", "sentiment", "bert", "gpt", "mental health"],
    answer: "One of my archived projects is a Mental Health Sentiment Analysis solution using fine-tuned DistilBERT and GPT-2 models. It processed 50,000+ statements with high F1 and Precision-Recall accuracy."
  },
  {
    keywords: ["usaf", "air force", "military", "leadership", "sitrep"],
    answer: "I served 6 years in the US Air Force. As a Flight Sergeant, I led security teams and standardized SITREP reporting templates for base defense. This experience honed my leadership and systems-thinking under pressure."
  },
  {
    keywords: ["stack", "languages", "typescript", "python"],
    answer: "My core production stack is TypeScript, React 19, Next.js 16, PostgreSQL, and Python for ML/Automation tasks. I use Claude Code in the terminal for rapid shipping."
  }
];

export const getKnowledgeResponse = (query: string): string => {
  const normalized = query.toLowerCase();
  const match = KNOWLEDGE_BASE.find(k => k.keywords.some(kw => normalized.includes(kw)));
  
  if (match) return match.answer;
  return "Query not recognized. Ask about 'Systalog.ai', 'RLS Security', 'OCR at Alaska', or 'USAF SITREPs'.";
};

export const SUGGESTED_QUESTIONS = [
  "What is the vision for Systalog.ai?",
  "How are the 25+ RLS policies implemented?",
  "Tell me about automation at Alaska Airlines.",
  "What did you do in the US Air Force?",
  "How does your ML Sentiment project work?"
];
