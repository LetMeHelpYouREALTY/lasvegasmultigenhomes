export type SeoPageCategory = 'search' | 'summerlin' | 'henderson' | 'north-las-vegas' | 'las-vegas';

export type SeoPageSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type SeoPageFaq = {
  question: string;
  answer: string;
};

export type HyperlocalPage = {
  slug: string;
  category: SeoPageCategory;
  title: string;
  h1: string;
  description: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  heroSubtitle: string;
  intro: string;
  sections: SeoPageSection[];
  faqs: SeoPageFaq[];
  relatedSlugs: string[];
  areaLabel: string;
};
