// FeatureCard used in FeaturesGrid.tsx
export interface FeatureCard {
  id: string;
  icon: string;
  title: string;
  description: string; 
  image: string; // Required to fix TS2322 in FeaturesGrid
  alt: string;   // Required to fix TS2322 in FeaturesGrid
}

// InstallationStep used in InstallationGuide.tsx
export interface InstallationStep {
  id: number;
  title: string;
  description: string; // Changed back to 'description' to fix TS2353/TS2339
  icon: string;
  image: string;
  alt: string;
}

export interface TrustBadge {
  id: string;
  icon: string;
  title: string;
  description: string;
  verified: boolean;
}

// Statistic used in ProblemSection.tsx
export interface Statistic {
  id: string;
  value: string;
  label: string;
  icon: string;
  trend?: 'up' | 'down';
}

export interface CommunityIssue {
  id: string;
  type: string;
  icon: string;
  location: string;
  status: 'pending' | 'in-progress' | 'resolved';
  reportedDate: string;
  resolvedDate?: string;
}

// FounderProfile used in FounderSection.tsx
export interface FounderProfile {
  name: string;
  title: string; // Changed back to 'title' to fix TS2353/TS2339
  bio: string;
  image: string;
  alt: string;
  credentials: string[];
}

// ContactFormData used in ContactSection.tsx
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// SocialLink used in ContactSection.tsx
export interface SocialLink {
  id: string;
  platform: string;
  icon: string;
  url: string;
  label: string;
}