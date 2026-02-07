export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  type: 'job' | 'education';
}

export interface Skill {
  name: string;
  category: 'Tech' | 'Tool' | 'Soft';
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
}