
export interface SubCourse {
  id: string;
  title: string;
  description: string;
  images: string[];
  tags: string[];
}

export interface LevelInfo {
  id: string;
  name: string;
  badge: string;
  duration: string;
  valueProp: string;
  target: string;
  intro: string;
  structure: {
    label: string;
    description: string;
    ratio?: number; // For progress bars
    steps?: string[]; // For list-style structures
  }[];
  outputs: string[];
  schedule: string;
  images: string[];
  ctaLink: string;
  subCourses?: SubCourse[]; // 新增：子课程/项目列表
}

export interface PortfolioItem {
  id: number;
  title: string;
  tags: string[];
  description: string;
  imageUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SiteConfig {
  theme: {
    primary: string;
    accent: string;
  };
  hero: {
    title: string;
    subtitle: string;
    primaryBtn: string;
    secondaryBtn: string;
    heroImage: string;
  };
  levels: LevelInfo[];
  timeline: {
    nodes: {
      label: string;
      duration: string;
      capability: string;
      outcome: string;
      condition: string;
    }[];
  };
  methodology: {
    title: string;
    items: {
      title: string;
      desc: string;
      icon: string;
    }[];
  };
  portfolio: PortfolioItem[];
  audiences: {
    type: string;
    benefits: string[];
  }[];
  faqs: FAQItem[];
  cta: {
    title: string;
    qrImage: string;
    contact: string;
  };
  footer: {
    about: string;
    address: string;
    email: string;
    social: { platform: string; url: string }[];
  };
}
