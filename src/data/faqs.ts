export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Services" | "Process" | "Technology";
}

export const FAQS: FAQItem[] = [
  {
    id: "faq-why-choose",
    question: "Why do businesses choose Unified Branding Experts for digital growth?",
    answer:
      "Businesses choose Unified Branding Experts because we combine branding, website development, software engineering, mobile applications, CRM automation, and performance digital marketing into one unified growth strategy designed to improve visibility, customer conversions, and sustainable long-term scalability.",
    category: "General",
  },
  {
    id: "faq-services-offered",
    question: "What services does Unified Branding Experts offer?",
    answer:
      "Unified Branding Experts provides brand strategy, custom logo design, high-performance website development, eCommerce storefront solutions (Shopify, WooCommerce, headless commerce), mobile app development (iOS & Android), AI Search Optimization (AISEO / GEO / AEO), Google Ads, Meta Ads, TikTok marketing, and CRM automation.",
    category: "Services",
  },
  {
    id: "faq-growth-strategy",
    question: "How can Unified Branding Experts help my business grow online?",
    answer:
      "We help businesses build memorable brands, create ultra-fast digital platforms, automate operations, and implement data-driven acquisition strategies that capture high-intent buyers, increase customer engagement, and drive compounding revenue growth.",
    category: "General",
  },
  {
    id: "faq-custom-web",
    question: "Does Unified Branding Experts provide custom website development?",
    answer:
      "Yes. We design and develop bespoke websites tailored to your specific business goals, industry requirements, and user expectations. Every web platform is custom-coded for maximum speed, SEO indexation, mobile responsiveness, and high conversion rates.",
    category: "Technology",
  },
  {
    id: "faq-difference",
    question: "What makes Unified Branding Experts different from other digital agencies?",
    answer:
      "Unlike traditional agencies that offer isolated services in silos, Unified Branding Experts integrates brand identity, software engineering, eCommerce architecture, and paid/AI growth marketing into a single connected ecosystem where every creative decision directly supports measurable business outcomes.",
    category: "General",
  },
  {
    id: "faq-aiseo-explained",
    question: "What is AISEO and why is it essential for modern brands?",
    answer:
      "AISEO (AI Search Optimization, GEO, and AEO) optimizes your digital footprint for next-generation Answer Engines such as Perplexity, ChatGPT Search, and Google AI Overviews. We build structured entity schemas and authoritative knowledge graphs to help AI engines understand and reference your brand accurately.",
    category: "Technology",
  },
];
