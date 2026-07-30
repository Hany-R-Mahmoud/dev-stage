export type Language = 'en' | 'ar';

export type ProjectStatus = 'showcase' | 'in-progress' | 'prototype' | 'dropped' | 'internal';

export interface BilingualText {
  en: string;
  ar: string;
}

export interface PortfolioRepository {
  github?: string;
  branch?: string;
  sync?: 'github' | 'local-only' | 'parent-workspace' | 'not-applicable';
}

export interface PortfolioSource {
  workspace: string;
  last_reviewed: string;
}

export interface Project {
  id: string;
  slug: string;
  title: BilingualText;
  description: BilingualText;
  meta: BilingualText;
  category: string; // e.g., 'Branding', 'UI/UX', 'Architecture', 'Web'
  client: BilingualText;
  role: BilingualText;
  year: string;
  liveUrl?: string;
  imageSrc: string;
  galleryImages: string[];
  contentMDX: BilingualText;
  isPublished: boolean;
  featured: boolean;
  tags: string[];
  status?: ProjectStatus;
  features?: BilingualText[];
  progress?: BilingualText;
  issues?: BilingualText[];
  suggestions?: BilingualText[];
  repository?: PortfolioRepository;
  source?: PortfolioSource;
}

export interface Profile {
  name: BilingualText;
  title: BilingualText;
  bio: BilingualText;
  location: BilingualText;
  avatar: string;
  email: string;
  github?: string;
  twitter?: string;
  linkedin?: string;
  behance?: string;
  dribbble?: string;
  resumeUrl?: string;
  skills: string[];
}
