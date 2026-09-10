export type ThemeMode = 'warm' | 'cyber';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'AI & ML' | 'Enterprise & Web' | 'Healthcare';
  image: string;
  tags: string[];
  metrics?: string;
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: 'Languages' | 'Frontend' | 'Backend & API' | 'Database' | 'AI & Tools';
  level: number; // 0 - 100
  experienceYears: string;
  iconName: string;
  badge: string;
  highlight?: string;
}

export interface StatMetric {
  value: string;
  label: string;
  sublabel: string;
  icon: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  phone: string;
  message: string;
  serviceInterest?: string;
}
