export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  category: 'NLP' | 'Computer Vision' | 'AI Apps' | 'Web Dev' | 'Data Science';
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  type: 'internship' | 'research' | 'hackathon' | 'project';
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  type: 'certification' | 'award' | 'competition';
  credentialUrl?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'programming' | 'aiml' | 'other';
}