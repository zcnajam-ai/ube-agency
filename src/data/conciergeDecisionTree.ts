export interface ConciergeAction {
  type: "link" | "estimate" | "contact" | "phone" | "email";
  label: string;
  url?: string;
}

export interface ConciergeOption {
  label: string;
  value: string;
}

export interface ConciergeRecommendation {
  title: string;
  badge?: string;
  summary: string;
  actions: ConciergeAction[];
  nextQuestion?: {
    text: string;
    options: ConciergeOption[];
  };
}

export interface ConciergeQuestion {
  id: string;
  text: string;
  options: ConciergeOption[];
}

export const INITIAL_PATHWAYS: ConciergeOption[] = [
  { label: "Build a Website", value: "website" },
  { label: "Launch an Online Store", value: "ecommerce" },
  { label: "Brand My Business", value: "branding" },
  { label: "Improve Search Visibility", value: "search" },
  { label: "Grow Through Advertising", value: "ads" },
  { label: "Build an App", value: "mobile_app" },
  { label: "Automate My Business", value: "automation" },
  { label: "Compare Packages", value: "packages" },
  { label: "I'm Not Sure", value: "not_sure" },
];

export const CONCIERGE_DECISION_TREE: Record<
  string,
  {
    question?: string;
    options?: ConciergeOption[];
    recommendation?: (subOptionValue?: string) => ConciergeRecommendation;
  }
> = {
  // 1. Website Journey
  website: {
    question: "Are you starting a new website or improving an existing one?",
    options: [
      { label: "New Website", value: "web_new" },
      { label: "Redesign Existing Website", value: "web_redesign" },
      { label: "Custom Web Application", value: "web_app" },
    ],
    recommendation: (sub) => {
      if (sub === "web_redesign") {
        return {
          title: "Professional Web Redesign & UX Optimization",
          badge: "Web Redesign",
          summary:
            "We modernize existing websites with high-performance Next.js architectures, refined brand typography, and conversion-focused user journeys.",
          actions: [
            { type: "link", label: "View Redesign Services", url: "/professional-web-design-services" },
            { type: "link", label: "View Web Packages", url: "/web-design-packages" },
            { type: "link", label: "See Our Work", url: "/work" },
            { type: "estimate", label: "Get Project Estimate" },
          ],
        };
      }
      if (sub === "web_app") {
        return {
          title: "Custom Web Application Engineering",
          badge: "Web Application",
          summary:
            "We engineer scalable custom web applications, member portals, and SaaS platforms built on modern Next.js and secure APIs.",
          actions: [
            { type: "link", label: "View Custom Web Services", url: "/custom-web-development" },
            { type: "link", label: "View Custom Packages", url: "/our-custom-web-design-development-packages" },
            { type: "link", label: "See Our Work", url: "/work" },
            { type: "estimate", label: "Get Project Estimate" },
          ],
        };
      }
      return {
        title: "Website Design & Development",
        badge: "Web Development",
        summary:
          "We design and build bespoke, high-performance websites tailored to your brand, user experience, and conversion goals.",
        actions: [
          { type: "link", label: "View Website Services", url: "/services/web-design-development" },
          { type: "link", label: "View Web Packages", url: "/web-design-packages" },
          { type: "link", label: "See Our Work", url: "/work" },
          { type: "estimate", label: "Get Project Estimate" },
        ],
      };
    },
  },

  // 2. eCommerce Journey
  ecommerce: {
    question: "What are you planning to sell?",
    options: [
      { label: "My Own Products", value: "ecom_own" },
      { label: "Dropshipping Products", value: "ecom_dropship" },
      { label: "Both", value: "ecom_both" },
      { label: "Not Sure Yet", value: "ecom_unsure" },
    ],
    recommendation: (sub) => {
      if (sub === "ecom_dropship") {
        return {
          title: "Automated Dropshipping & Store Setup",
          badge: "eCommerce & Dropshipping",
          summary:
            "UBE handles supplier integration, product catalog curation, order fulfillment automation where supported, custom branding, and complete store launch setup.",
          actions: [
            { type: "link", label: "Explore eCommerce", url: "/services/ecommerce" },
            { type: "link", label: "View All Packages", url: "/packages" },
            { type: "link", label: "See eCommerce Work", url: "/work" },
            { type: "estimate", label: "Get Project Estimate" },
          ],
        };
      }
      if (sub === "ecom_both") {
        return {
          title: "Hybrid eCommerce & Catalog Platform",
          badge: "Hybrid Storefront",
          summary:
            "We build versatile eCommerce platforms supporting both custom branded inventory and integrated third-party supplier fulfillment with optimized checkout flows.",
          actions: [
            { type: "link", label: "Explore eCommerce", url: "/services/ecommerce" },
            { type: "link", label: "View All Packages", url: "/packages" },
            { type: "link", label: "See eCommerce Work", url: "/work" },
            { type: "estimate", label: "Get Project Estimate" },
          ],
        };
      }
      if (sub === "ecom_unsure") {
        return {
          title: "eCommerce Strategy & Platform Consultation",
          badge: "Strategy Consultation",
          summary:
            "Our eCommerce specialists guide you through choosing the optimal business model, platform setup, and conversion strategy for your market.",
          actions: [
            { type: "link", label: "Explore eCommerce", url: "/services/ecommerce" },
            { type: "estimate", label: "Get Project Estimate" },
            { type: "contact", label: "Talk with Our Team", url: "/contact" },
          ],
        };
      }
      return {
        title: "Shopify & Custom eCommerce Development",
        badge: "Shopify Storefront",
        summary:
          "UBE handles complete storefront design, collection organization, payment gateways, checkout optimization, shipping configuration, and launch setup.",
        actions: [
          { type: "link", label: "Explore eCommerce", url: "/services/ecommerce" },
          { type: "link", label: "Shopify Services", url: "/services/shopify-development" },
          { type: "link", label: "See eCommerce Work", url: "/work" },
          { type: "estimate", label: "Get Project Estimate" },
        ],
      };
    },
  },

  // 3. Branding Journey
  branding: {
    question: "What do you need most?",
    options: [
      { label: "Logo Design", value: "brand_logo" },
      { label: "Complete Brand Identity", value: "brand_identity" },
      { label: "Rebranding", value: "brand_rebrand" },
      { label: "Not Sure", value: "brand_unsure" },
    ],
    recommendation: (sub) => {
      if (sub === "brand_logo") {
        return {
          title: "Custom Logo Design & Vector Identity",
          badge: "Logo Design",
          summary:
            "We design distinctive, memorable custom logos with complete vector asset kits, typography guidance, and full ownership rights.",
          actions: [
            { type: "link", label: "View Logo Packages", url: "/logo-design-packages" },
            { type: "link", label: "Logo Agency Overview", url: "/best-logo-design-agency" },
            { type: "link", label: "See Our Work", url: "/work" },
            { type: "estimate", label: "Get Project Estimate" },
          ],
        };
      }
      if (sub === "brand_rebrand") {
        return {
          title: "Strategic Brand Evolution & Modernization",
          badge: "Rebranding",
          summary:
            "We elevate established businesses with refreshed brand positioning, modernized logos, unified collateral, and consistent multi-channel guidelines.",
          actions: [
            { type: "link", label: "View Branding Packages", url: "/branding-packages" },
            { type: "link", label: "Branding Services", url: "/services/branding" },
            { type: "link", label: "See Our Work", url: "/work" },
            { type: "estimate", label: "Get Project Estimate" },
          ],
        };
      }
      if (sub === "brand_unsure") {
        return {
          title: "Brand Strategy & Positioning Consultation",
          badge: "Brand Advisory",
          summary:
            "We review your business goals to determine whether a focused logo package or a complete brand ecosystem fits your next growth stage.",
          actions: [
            { type: "link", label: "View Branding Packages", url: "/branding-packages" },
            { type: "estimate", label: "Get Project Estimate" },
            { type: "contact", label: "Talk with Our Team", url: "/contact" },
          ],
        };
      }
      return {
        title: "Comprehensive Brand Architecture & Style Guide",
        badge: "Brand Identity",
        summary:
          "We engineer complete brand ecosystems: primary & secondary logomarks, typography rules, color specifications, stationery, social kits, and packaging guidelines.",
        actions: [
          { type: "link", label: "View Branding Packages", url: "/branding-packages" },
          { type: "link", label: "Branding Services", url: "/services/branding" },
          { type: "link", label: "See Our Work", url: "/work" },
          { type: "estimate", label: "Get Project Estimate" },
        ],
      };
    },
  },

  // 4. Search Journey
  search: {
    question: "What search approach are you looking for?",
    options: [
      { label: "Traditional SEO", value: "search_trad" },
      { label: "AI SEO / AEO / GEO", value: "search_ai" },
      { label: "Both", value: "search_both" },
      { label: "Not Sure", value: "search_unsure" },
    ],
    recommendation: (sub) => {
      if (sub === "search_trad") {
        return {
          title: "Technical SEO & Organic Visibility",
          badge: "Technical SEO",
          summary:
            "Improve search visibility and strengthen how your business is understood across traditional and AI-powered discovery through technical audits, structured data, and on-page optimization.",
          actions: [
            { type: "link", label: "View Search Services", url: "/services/aiseo" },
            { type: "link", label: "View SEO Packages", url: "/ai-seo-packages" },
            { type: "estimate", label: "Get Project Estimate" },
          ],
        };
      }
      if (sub === "search_ai") {
        return {
          title: "AI Engine Optimization (GEO & AEO)",
          badge: "AI SEO / GEO",
          summary:
            "Improve search visibility and strengthen how your business is understood across Google and AI-powered search engines through entity schemas, answer engine formatting, and IndexNow feeds.",
          actions: [
            { type: "link", label: "View AI SEO Services", url: "/services/aiseo" },
            { type: "link", label: "View AI SEO Packages", url: "/ai-seo-packages" },
            { type: "estimate", label: "Get Project Estimate" },
          ],
        };
      }
      if (sub === "search_unsure") {
        return {
          title: "Search Audit & Visibility Assessment",
          badge: "Search Audit",
          summary:
            "Our search team audits your current indexation, site structure, and entity signals to recommend the most effective search roadmap.",
          actions: [
            { type: "link", label: "View SEO Packages", url: "/ai-seo-packages" },
            { type: "estimate", label: "Get Project Estimate" },
            { type: "contact", label: "Talk with Our Team", url: "/contact" },
          ],
        };
      }
      return {
        title: "Unified Search & AI Discovery Architecture",
        badge: "Unified Search",
        summary:
          "A complete visibility strategy aligning technical on-page SEO, high-authority content modeling, and Answer Engine Optimization (AEO) for modern search discovery.",
        actions: [
          { type: "link", label: "View AI SEO Services", url: "/services/aiseo" },
          { type: "link", label: "View AI SEO Packages", url: "/ai-seo-packages" },
          { type: "estimate", label: "Get Project Estimate" },
        ],
      };
    },
  },

  // 5. Paid Marketing Journey
  ads: {
    question: "Which platform are you interested in?",
    options: [
      { label: "Google Ads", value: "ads_google" },
      { label: "Facebook & Instagram", value: "ads_meta" },
      { label: "TikTok", value: "ads_tiktok" },
      { label: "Not Sure", value: "ads_unsure" },
    ],
    recommendation: (sub) => {
      if (sub === "ads_google") {
        return {
          title: "Google Search & Shopping Ads",
          badge: "Google Ads",
          summary:
            "We build and manage high-intent Google Search, Performance Max, and Shopping campaigns focused on qualified leads and measurable return on ad spend.",
          actions: [
            { type: "link", label: "View Google Ads Services", url: "/services/google-ads" },
            { type: "link", label: "View Marketing Packages", url: "/our-digital-marketing-packages" },
            { type: "estimate", label: "Get Project Estimate" },
          ],
        };
      }
      if (sub === "ads_meta") {
        return {
          title: "Meta Paid Social & Retargeting Campaigns",
          badge: "Meta Ads",
          summary:
            "We create targeted Meta advertising funnels with bespoke creative ad sets, custom audiences, and full pixel event tracking.",
          actions: [
            { type: "link", label: "View Meta Ads Services", url: "/services/meta-ads" },
            { type: "link", label: "View Marketing Packages", url: "/our-digital-marketing-packages" },
            { type: "estimate", label: "Get Project Estimate" },
          ],
        };
      }
      if (sub === "ads_tiktok") {
        return {
          title: "TikTok Marketing & TikTok Shop Campaigns",
          badge: "TikTok Ads",
          summary:
            "We produce authentic short-form video creative, manage TikTok Spark & in-feed ad campaigns, and optimize TikTok Shop product listings.",
          actions: [
            { type: "link", label: "View TikTok Services", url: "/services/tiktok-marketing" },
            { type: "link", label: "View TikTok Packages", url: "/tiktok-marketing-packages" },
            { type: "estimate", label: "Get Project Estimate" },
          ],
        };
      }
      return {
        title: "Paid Media Strategy Consultation",
        badge: "Ad Strategy",
        summary:
          "We can help you choose based on what you sell, your audience, and your marketing objective to maximize advertising efficiency.",
        actions: [
          { type: "link", label: "View Digital Marketing", url: "/digital-marketing-services-agency" },
          { type: "estimate", label: "Get Project Estimate" },
          { type: "contact", label: "Talk with Our Team", url: "/contact" },
        ],
      };
    },
  },

  // 6. Mobile App Journey
  mobile_app: {
    question: "What stage is your app project in?",
    options: [
      { label: "New App Idea", value: "app_new" },
      { label: "MVP / Prototype", value: "app_mvp" },
      { label: "Existing App Improvement", value: "app_improve" },
    ],
    recommendation: (sub) => {
      if (sub === "app_mvp") {
        return {
          title: "Rapid MVP Mobile App Build & Prototyping",
          badge: "MVP App",
          summary:
            "We design and engineer launch-ready MVP mobile applications focused on core functionality, user testing, and investor validation.",
          actions: [
            { type: "link", label: "View App Services", url: "/services/mobile-app-development" },
            { type: "link", label: "Compare App Packages", url: "/mobile-app-packages" },
            { type: "estimate", label: "Start App Estimate" },
          ],
        };
      }
      if (sub === "app_improve") {
        return {
          title: "Mobile App Redesign & Feature Scaling",
          badge: "App Upgrade",
          summary:
            "We refactor existing mobile applications to improve performance, upgrade UI/UX flows, and add new API integrations.",
          actions: [
            { type: "link", label: "View App Services", url: "/services/mobile-app-development" },
            { type: "link", label: "Compare App Packages", url: "/mobile-app-packages" },
            { type: "estimate", label: "Start App Estimate" },
          ],
        };
      }
      return {
        title: "End-to-End Mobile App Development",
        badge: "iOS & Android",
        summary:
          "We turn product concepts into polished, cross-platform mobile apps for iOS and Android using React Native and scalable cloud backends.",
        actions: [
          { type: "link", label: "View App Services", url: "/services/mobile-app-development" },
          { type: "link", label: "Compare App Packages", url: "/mobile-app-packages" },
          { type: "estimate", label: "Start App Estimate" },
        ],
      };
    },
  },

  // 7. Automation Journey
  automation: {
    question: "What would you like to automate?",
    options: [
      { label: "Lead & CRM Follow-Up", value: "auto_crm" },
      { label: "Email & Customer Journey", value: "auto_email" },
      { label: "Chatbot / Customer Support", value: "auto_support" },
      { label: "Internal Workflow", value: "auto_workflow" },
      { label: "Not Sure", value: "auto_unsure" },
    ],
    recommendation: (sub) => {
      if (sub === "auto_email") {
        return {
          title: "Customer Journey & Email Automation",
          badge: "Email Workflows",
          summary:
            "We configure dynamic onboarding sequences, abandoned cart recovery, and post-purchase engagement workflows.",
          actions: [
            { type: "link", label: "View AI Automation", url: "/services/ai-automation" },
            { type: "link", label: "Compare Packages", url: "/ai-automation-packages" },
            { type: "estimate", label: "Get Project Estimate" },
          ],
        };
      }
      if (sub === "auto_support") {
        return {
          title: "Smart Customer Support & Triage Systems",
          badge: "Support Automation",
          summary:
            "We implement guided customer self-service, FAQ routing, and support ticket triage systems to resolve customer inquiries faster.",
          actions: [
            { type: "link", label: "View AI Automation", url: "/services/ai-automation" },
            { type: "link", label: "Compare Packages", url: "/ai-automation-packages" },
            { type: "estimate", label: "Get Project Estimate" },
          ],
        };
      }
      if (sub === "auto_workflow") {
        return {
          title: "Custom Zapier, Make & API Workflows",
          badge: "Process Automation",
          summary:
            "We eliminate repetitive operational bottlenecks by syncing project management tools, databases, and billing software seamlessly.",
          actions: [
            { type: "link", label: "View AI Automation", url: "/services/ai-automation" },
            { type: "link", label: "Compare Packages", url: "/ai-automation-packages" },
            { type: "estimate", label: "Get Project Estimate" },
          ],
        };
      }
      if (sub === "auto_unsure") {
        return {
          title: "Workflow Automation Audit & Strategy",
          badge: "Automation Audit",
          summary:
            "Our automation architects review your daily manual tasks to identify the highest-impact processes to streamline.",
          actions: [
            { type: "link", label: "View AI Automation", url: "/services/ai-automation" },
            { type: "link", label: "Compare Packages", url: "/ai-automation-packages" },
            { type: "estimate", label: "Get Project Estimate" },
          ],
        };
      }
      return {
        title: "Automated CRM & Lead Routing Pipelines",
        badge: "CRM Pipelines",
        summary:
          "We build real-time integrations connecting website inquiries, instant SMS/email responses, calendar booking, and CRM deal tracking.",
        actions: [
          { type: "link", label: "View AI Automation", url: "/services/ai-automation" },
          { type: "link", label: "Compare Packages", url: "/ai-automation-packages" },
          { type: "estimate", label: "Get Project Estimate" },
        ],
      };
    },
  },

  // 8. Compare Packages
  packages: {
    recommendation: () => ({
      title: "Official UBE Service Package Directory",
      badge: "Verified Packages",
      summary:
        "Explore our standardized package tiers with transparent pricing across branding, web engineering, SEO, marketing, and automation.",
      actions: [
        { type: "link", label: "Branding Packages ($299+)", url: "/branding-packages" },
        { type: "link", label: "Web Packages ($399+)", url: "/web-design-packages" },
        { type: "link", label: "AI SEO Packages ($349/mo)", url: "/ai-seo-packages" },
        { type: "link", label: "Marketing Packages ($499/mo)", url: "/our-digital-marketing-packages" },
        { type: "link", label: "App Packages ($1,499+)", url: "/mobile-app-packages" },
        { type: "link", label: "View Complete Directory", url: "/packages" },
        { type: "estimate", label: "Get Custom Estimate" },
      ],
    }),
  },

  // 9. I'm Not Sure Journey
  not_sure: {
    question: "What are you mainly trying to achieve?",
    options: [
      { label: "Start a New Business", value: "goal_new_biz" },
      { label: "Get More Sales", value: "goal_sales" },
      { label: "Improve My Website", value: "goal_improve_web" },
      { label: "Build My Brand", value: "goal_brand" },
      { label: "Get Found Online", value: "goal_seo" },
      { label: "Automate Operations", value: "goal_auto" },
    ],
    recommendation: (sub) => {
      if (sub === "goal_sales") {
        return {
          title: "eCommerce Storefront & Paid Advertising",
          badge: "Sales Growth",
          summary:
            "We recommend optimizing your purchase funnel with a modern Shopify storefront and driving qualified traffic via targeted Google or Meta ad campaigns.",
          actions: [
            { type: "link", label: "Explore eCommerce", url: "/services/ecommerce" },
            { type: "link", label: "Explore Paid Ads", url: "/services/meta-ads" },
            { type: "estimate", label: "Get Project Estimate" },
          ],
        };
      }
      if (sub === "goal_improve_web") {
        return {
          title: "Professional Web Redesign & UX Optimization",
          badge: "Website Upgrade",
          summary:
            "We recommend a UX audit and modern Next.js redesign to elevate your aesthetics, increase page speed, and lift conversion rates.",
          actions: [
            { type: "link", label: "View Web Services", url: "/services/web-design-development" },
            { type: "link", label: "View Web Packages", url: "/web-design-packages" },
            { type: "estimate", label: "Get Project Estimate" },
          ],
        };
      }
      if (sub === "goal_brand") {
        return {
          title: "Brand Strategy & Visual Identity System",
          badge: "Brand Identity",
          summary:
            "We recommend crafting a unified identity system with custom logos, typography, color bibles, and branded collateral.",
          actions: [
            { type: "link", label: "View Branding Services", url: "/services/branding" },
            { type: "link", label: "View Branding Packages", url: "/branding-packages" },
            { type: "estimate", label: "Get Project Estimate" },
          ],
        };
      }
      if (sub === "goal_seo") {
        return {
          title: "AI SEO & Search Engine Optimization",
          badge: "Search Discovery",
          summary:
            "Improve search visibility and strengthen how your business is understood across Google and AI-powered search engines through structured data and technical SEO.",
          actions: [
            { type: "link", label: "View Search Services", url: "/services/aiseo" },
            { type: "link", label: "View SEO Packages", url: "/ai-seo-packages" },
            { type: "estimate", label: "Get Project Estimate" },
          ],
        };
      }
      if (sub === "goal_auto") {
        return {
          title: "AI & Workflow Automation",
          badge: "Operations",
          summary:
            "We recommend connecting your lead capture forms, email notifications, and CRM tools into automated real-time workflows.",
          actions: [
            { type: "link", label: "View AI Automation", url: "/services/ai-automation" },
            { type: "link", label: "Compare Packages", url: "/ai-automation-packages" },
            { type: "estimate", label: "Get Project Estimate" },
          ],
        };
      }
      return {
        title: "New Business Launch: Branding & Website Foundation",
        badge: "New Business",
        summary:
          "We recommend starting with a distinctive brand identity followed by a clean, conversion-focused website or online store.",
        actions: [
          { type: "link", label: "View Branding Packages", url: "/branding-packages" },
          { type: "link", label: "View Web Packages", url: "/web-design-packages" },
          { type: "estimate", label: "Get Project Estimate" },
        ],
      };
    },
  },
};

// Deterministic Keyword Matcher Rules (Priority Order)
export const KEYWORD_MATCH_RULES = [
  {
    keywords: ["shopify", "ecommerce", "online store", "dropshipping", "woo", "woocommerce", "store", "product"],
    pathway: "ecommerce",
  },
  {
    keywords: ["website", "web", "redesign", "landing page", "site", "html", "nextjs"],
    pathway: "website",
  },
  {
    keywords: ["logo", "branding", "identity", "brand", "graphic design"],
    pathway: "branding",
  },
  {
    keywords: ["seo", "aiseo", "geo", "aeo", "ranking", "search", "google search", "rank"],
    pathway: "search",
  },
  {
    keywords: ["google ads", "ppc", "search ads", "adwords"],
    pathway: "ads",
    subOption: "ads_google",
  },
  {
    keywords: ["facebook", "instagram", "meta ads", "social ads", "fb ads"],
    pathway: "ads",
    subOption: "ads_meta",
  },
  {
    keywords: ["tiktok", "tiktok shop", "tik tok"],
    pathway: "ads",
    subOption: "ads_tiktok",
  },
  {
    keywords: ["mobile app", "ios", "android", "app", "application", "react native"],
    pathway: "mobile_app",
  },
  {
    keywords: ["automation", "crm", "zapier", "make", "workflow", "chatbot", "automate"],
    pathway: "automation",
  },
  {
    keywords: ["price", "pricing", "cost", "package", "packages", "quote", "how much"],
    pathway: "packages",
  },
  {
    keywords: ["portfolio", "examples", "work", "case study", "case studies", "showcase"],
    special: "work",
  },
  {
    keywords: ["contact", "call", "person", "human", "talk", "phone", "email", "support", "team"],
    special: "contact",
  },
];

export function matchKeywordIntent(text: string): {
  matched: boolean;
  pathway?: string;
  subOption?: string;
  special?: "work" | "contact";
} {
  const norm = text.toLowerCase().trim();
  if (!norm) return { matched: false };

  for (const rule of KEYWORD_MATCH_RULES) {
    for (const kw of rule.keywords) {
      if (norm.includes(kw)) {
        return {
          matched: true,
          pathway: rule.pathway,
          subOption: rule.subOption,
          special: rule.special as "work" | "contact" | undefined,
        };
      }
    }
  }

  return { matched: false };
}
