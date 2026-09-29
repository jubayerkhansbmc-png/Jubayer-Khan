export interface VideoProject {
  id: string;
  stepNumber?: string;
  title: string;
  category: 'Reels' | 'Commercial Ads' | 'Motion Graphics' | 'Social Media' | 'Other';
  description: string;
  duration?: string;
  thumbnail: string;
  videoUrl?: string; // HTML5 video or YouTube URL
  youtubeId?: string;
  isShorts?: boolean;
  aspectRatio?: '16:9' | '9:16';
  externalLink?: string;
  projectLink?: string;
  tags?: string[];
}

export interface GraphicProject {
  id: string;
  title: string;
  category: string;
  image: string;
  filename?: string;
  description: string;
  externalLink?: string;
  dimensions?: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  iconName: string;
  tags: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string[];
}

export interface ToolItem {
  name: string;
  category: string;
  iconType: string;
  highlight?: boolean;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatarPlaceholder?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export type Language = 'en' | 'bn' | 'ar';

export interface SocialLinks {
  facebook: string;
  instagram: string;
  linkedin: string;
  youtube: string;
  whatsapp: string;
  email: string;
  behance: string;
  tiktok: string;
}

export interface ProfileData {
  creatorName: string; // English / Default
  creatorNameBn?: string; // Bengali: মোহাম্মদ জুবায়ের খান
  creatorNameAr?: string; // Arabic: محمد زبير خان
  tagline: string;
  headline: string;
  heroBio: string;
  aboutIntro: string;
  aboutBio: string;
  customPhoto?: string;
  socials: SocialLinks;
}

export const DEFAULT_CREATOR_NAMES: Record<Language, string> = {
  en: 'Mohammad Jubayer Khan',
  bn: 'মোহাম্মদ জুবায়ের খান',
  ar: 'محمد زبير خان',
};

export function getCreatorName(profile?: Partial<ProfileData> | null, lang: Language = 'en'): string {
  if (lang === 'bn') {
    return profile?.creatorNameBn?.trim() || DEFAULT_CREATOR_NAMES.bn;
  }
  if (lang === 'ar') {
    return profile?.creatorNameAr?.trim() || DEFAULT_CREATOR_NAMES.ar;
  }
  return profile?.creatorName?.trim() || DEFAULT_CREATOR_NAMES.en;
}

export type ThemeMode = 'dark' | 'midnight';

