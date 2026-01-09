
import { ExperienceItem, EducationItem, ProjectDetail, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "REESE BOREN",
  title: "AI Engineer | Founder, Systalog.ai",
  location: "Washington State",
  email: "Reese.Boren@hotmail.com",
  linkedin: "https://www.linkedin.com/in/michael-boren-b63a65234/",
  summary: "Full-Stack AI Engineer building production-grade systems. Founder of Systalog.ai (Systems Logic & Automation Group LLC)—a multi-tenant B2B platform with database-level security (25+ RLS policies), dual-portal architecture, and enterprise authentication. Expert in TypeScript, React, Next.js, PostgreSQL, and machine learning frameworks. CLI-first developer. Air Force veteran. M.S. in Artificial Intelligence in progress.",
};

export const PROJECTS: ProjectDetail[] = [
  {
    name: "SYSTALOG.AI",
    tagline: "Flagship: Systems Logic & Automation Group LLC | Founder",
    description: "The primary focus. A production B2B workflow automation engine. Built to handle complex, multi-tenant enterprise data with absolute isolation.",
    achievements: [
      "Architected multi-tenant platform with React 19/Next.js 16 App Router using Server Components for extreme performance",
      "Implemented 25+ Row-Level Security (RLS) policies for data isolation at the database level",
      "Built dual-portal architecture: Client Dashboard (projects, invoices, messaging) and Admin Console (Kanban, deployments)",
      "Developed 9 RESTful API endpoints with Zod schema validation and 35+ reusable Radix UI components",
      "Security focus: HSTS (63072000s), CSP, X-Frame-Options, and cookie-based sessions with HttpOnly/Secure flags",
      "Created Python deployment tooling for branch-specific preview environments with automated dependency management"
    ],
    techStack: ["React 19", "Next.js 16", "TypeScript 5", "PostgreSQL", "Supabase", "Tailwind 4", "Zod", "Zustand", "Python"],
    architecture: {
      frontend: ["Next.js 16 App Router", "Server Components", "Tailwind CSS 4", "Radix UI"],
      backend: ["PostgreSQL", "Supabase", "RLS Policies", "Zod Validation"],
      auth: ["RBAC", "HttpOnly Cookies", "HSTS", "CSP Headers"],
      deployment: ["Vercel", "Python Preview System", "Branch Isolation"]
    }
  }
];

export const ARCHIVE_PROJECTS: ProjectDetail[] = [
  {
    name: "MENTAL HEALTH SENTIMENT ANALYSIS",
    tagline: "NLP/ML | DistilBERT & GPT-2",
    description: "NLP/ML solution fine-tuned on 50,000+ statements; deployed via FastAPI on AWS EC2.",
    achievements: [
      "Fine-tuned DistilBERT, DistilRoBERTa, and GPT-2 models for sentiment state detection",
      "Implemented robust performance tracking with confusion matrices, F1 score, and precision-recall metrics"
    ],
    techStack: ["PyTorch", "Transformers", "FastAPI", "AWS EC2", "scikit-learn"]
  },
  {
    name: "RECORDS PRODUCTIVITY SUITE",
    tagline: "Desktop Suite | PyQt5 & SQLite",
    description: "Desktop application for pilot records featuring PDF/DOCX automation and GPT utilities.",
    achievements: [
      "Engineered PyQt5 app for pilot records management with automated extraction of key details",
      "Integrated Ollama LLMs (LLaMA, Gemma, DeepSeek R1) for retrieval, summarization, and document Q&A"
    ],
    techStack: ["Python", "PyQt5", "SQLite", "Ollama", "pytesseract"]
  },
  {
    name: "PILOT MEDICALS AUTOMATION",
    tagline: "OCR Pipeline | Desktop App",
    description: "Desktop app for drag-and-drop import and automated extraction of pilot medical details.",
    achievements: [
      "Seamless document upload to SharePoint for streamlined compliance audits",
      "Automated Monthly reporting through pandas and matplotlib"
    ],
    techStack: ["Python", "pandas", "Tableau", "OCR", "SharePoint"]
  }
];

export const SKILLS: SkillCategory[] = [
  { name: "Languages & Frameworks", skills: ["TypeScript", "Python", "SQL", "React 19", "Next.js 16", "FastAPI", "Tailwind 4"] },
  { name: "ML & NLP", skills: ["PyTorch", "Transformers (BERT, RoBERTa, GPT-2)", "scikit-learn", "Ollama", "OCR Parsing"] },
  { name: "Security & Backend", skills: ["RLS Policies", "RBAC", "HSTS", "CSP", "PostgreSQL", "Supabase", "Node.js"] },
  { name: "Data & Infrastructure", skills: ["AWS EC2/S3", "Docker", "Vercel", "Tableau", "pandas", "Git"] }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "SYSTALOG.AI (Systems Logic & Automation Group LLC)",
    role: "Founder & Lead Software Engineer",
    period: "2025 - Present",
    highlights: [
      "Architected production multi-tenant SaaS platform with React 19 and Next.js 16",
      "Enforced multi-tier isolation using 25+ Row-Level Security policies at the database layer",
      "Built full dual-portal system for client management and administrative workflow automation",
      "Established 5-stage request pipeline with real-time tracking and automated resource allocation"
    ]
  },
  {
    company: "ALASKA AIRLINES",
    role: "Flight Training QA and Records Specialist II",
    period: "July 2022 - Present",
    highlights: [
      "Manage compliance audits for 3,000+ pilots under FAA 121.411–121.415 and 121.683",
      "Developed Python automation (pandas, pdfplumber, pytesseract) to produce audit-ready outputs",
      "Built Tableau dashboards for training currency and QA trend analysis, achieving 100% compliance",
      "Implemented Power Automate workflows reducing manual handoffs and closing efficiency gaps"
    ]
  },
  {
    company: "US AIR FORCE",
    role: "Flight Sergeant | Training & Onboarding Specialist",
    period: "Dec 2016 - July 2022",
    highlights: [
      "Standardized ops reporting templates for base defense SITREP digests, cutting rewrite time significantly",
      "Designed onboarding and readiness curricula, assessment certification tracking, and skills checkouts",
      "Led multi-disciplinary teams in high-stakes security operations; mentored junior Airmen",
      "Utilized assessment results to update training and close critical performance gaps"
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  { degree: "M.S. Artificial Intelligence", school: "City University of Seattle", year: "Expected 2026" },
  { degree: "M.S. IT Admin Management (Cyber)", school: "Central Washington University", year: "2023", gpa: "3.9" },
  { degree: "B.S. IT Management", school: "American Military University", year: "2022", gpa: "3.7" }
];
