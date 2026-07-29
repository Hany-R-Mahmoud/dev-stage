export type Language = 'en' | 'ar';

export interface BilingualText {
  en: string;
  ar: string;
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
  imageSrc: string;
  galleryImages: string[];
  contentMDX: BilingualText;
  isPublished: boolean;
  featured: boolean;
  tags: string[];
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
