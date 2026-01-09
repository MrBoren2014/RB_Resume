
export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  year: string;
  gpa?: string;
}

export interface ProjectDetail {
  name: string;
  tagline: string;
  description: string;
  achievements: string[];
  techStack: string[];
  architecture?: {
    frontend: string[];
    backend: string[];
    auth: string[];
    deployment: string[];
  };
}

export interface SkillCategory {
  name: string;
  skills: string[];
}
