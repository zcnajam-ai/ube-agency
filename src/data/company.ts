export interface CompanyInfo {
  name: string;
  shortName: string;
  tagline: string;
  fullTagline: string;
  headline: string;
  subheadline: string;
  phone: string;
  phoneRaw: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    full: string;
  };
  stats: Array<{
    value: string;
    number: number;
    suffix: string;
    label: string;
    sublabel: string;
  }>;
  socials: {
    linkedin: string;
    facebook: string;
    instagram: string;
    threads: string;
    pinterest: string;
  };
  ratings: {
    trustpilot: {
      score: string;
      reviewsCount: number;
      url: string;
    };
    google: {
      score: string;
      reviewsCount: number;
      url: string;
    };
    crunchbase: {
      url: string;
    };
  };
}

export const COMPANY_INFO: CompanyInfo = {
  name: "Unified Branding Experts",
  shortName: "UBE",
  tagline: "We Build Brands That Move. Sell. Scale.",
  fullTagline: "Strategy, Creativity & Technology Unified Under One High-Performance Growth System",
  headline: "WE BUILD BRANDS THAT MOVE. SELL. SCALE.",
  subheadline: "Unified Branding Experts combines brand strategy, cutting-edge web & mobile technology, eCommerce engineering, and performance marketing into one unified growth engine designed to scale modern businesses.",
  phone: "+1 224-266-8081",
  phoneRaw: "+12242668081",
  email: "info@unifiedbrandingexperts.com",
  address: {
    street: "Digital Global Headquarters",
    city: "Chicago",
    state: "IL",
    country: "United States",
    full: "Chicago, IL, United States & Global Network",
  },
  stats: [
    {
      value: "200+",
      number: 200,
      suffix: "+",
      label: "Projects Delivered",
      sublabel: "Across eCommerce, web applications & brand identity",
    },
    {
      value: "90%",
      number: 90,
      suffix: "%",
      label: "Client Retention Rate",
      sublabel: "Partners returning for multi-year growth & product scaling",
    },
    {
      value: "15+",
      number: 15,
      suffix: "+",
      label: "Years of Craft",
      sublabel: "Engineering high-converting digital ecosystems",
    },
    {
      value: "20+",
      number: 20,
      suffix: "+",
      label: "Specialized Services",
      sublabel: "Commerce, code, AI search optimization & paid media",
    },
  ],
  socials: {
    linkedin: "https://www.linkedin.com/company/unified-branding-experts/",
    facebook: "https://www.facebook.com/profile.php?id=61584754554542",
    instagram: "https://www.instagram.com/unifiedbrandingexperts",
    threads: "https://www.threads.com/@unifiedbrandingexperts",
    pinterest: "https://www.pinterest.com/unifiedbrandingexperts/",
  },
  ratings: {
    trustpilot: {
      score: "4.9/5.0",
      reviewsCount: 142,
      url: "https://www.trustpilot.com/review/unifiedbrandingexperts.com",
    },
    google: {
      score: "5.0/5.0",
      reviewsCount: 88,
      url: "https://share.google/vER55Ui41l2QeKXT9",
    },
    crunchbase: {
      url: "https://www.crunchbase.com/organization/unified-branding-experts",
    },
  },
};
