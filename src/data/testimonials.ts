export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  serviceCategory: string;
  rating: number;
  source?: string;
  featured: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testi-katie",
    quote:
      "The branding package and brand kit provided by Unified Branding Experts gave my business a consistent and professional identity across all platforms. Everything was thoughtfully designed and easy to implement. I now have a brand presence that truly reflects my vision and attracts the right audience.",
    author: "Katie S.",
    role: "Founder & Creative Director",
    company: "Katie Studio Design",
    serviceCategory: "Brand Kit & Visual Identity",
    rating: 5,
    source: "Trustpilot",
    featured: true,
  },
  {
    id: "testi-marcus",
    quote:
      "The brand kit developed by Unified Branding Experts gave our company a strong visual foundation. From colors and typography to brand guidelines, every element was carefully crafted and professionally presented. It has helped us maintain consistency across all of our marketing materials and communications.",
    author: "Marcus Vance",
    role: "Head of Marketing",
    company: "Vance Global Solutions",
    serviceCategory: "Brand Identity & Corporate Systems",
    rating: 5,
    source: "Google Reviews",
    featured: true,
  },
  {
    id: "testi-alex",
    quote:
      "Working with UBE on our custom eCommerce storefront was a seamless experience. The mobile responsiveness, structured collection layout, and clear checkout funnel made shopping effortless for our customers.",
    author: "Alex Chen",
    role: "Managing Partner",
    company: "OmniStyle Direct",
    serviceCategory: "eCommerce Store Setup",
    rating: 5,
    source: "Trustpilot",
    featured: true,
  },
  {
    id: "testi-david",
    quote:
      "Unified Branding Experts built our Shopify store with clean product collections, secure payment gateways, and automated fulfillment workflows. The site is fast, easy to navigate, and straightforward to manage on the backend.",
    author: "David Reynolds",
    role: "Founder",
    company: "Aura Living",
    serviceCategory: "Shopify Store & Fulfillment",
    rating: 5,
    source: "Google Reviews",
    featured: true,
  },
  {
    id: "testi-elena",
    quote:
      "Their TikTok Shop setup and Meta advertising management structured our paid acquisition channels effectively. UBE delivered high-quality creative testing frameworks and clear daily campaign communication.",
    author: "Elena Rostova",
    role: "Director of Growth",
    company: "Veloce Apparel",
    serviceCategory: "TikTok Shop & Meta Ads",
    rating: 5,
    source: "Trustpilot",
    featured: true,
  },
  {
    id: "testi-liam",
    quote:
      "The team designed and launched our mobile application with clean UI/UX and seamless performance. Their workflow automation integration streamlined our customer inquiry routing and saved our team hours of manual tasks each week.",
    author: "Liam Patterson",
    role: "Co-Founder & CTO",
    company: "PulseFlow Tech",
    serviceCategory: "Mobile App & Automation",
    rating: 5,
    source: "Google Reviews",
    featured: true,
  },
  {
    id: "testi-sarah",
    quote:
      "Their approach to search optimization and structured content gave our brand clear visibility across search engines and conversational discovery platforms. Professional, communicative, and detail-oriented team.",
    author: "Sarah Jenkins",
    role: "VP of Growth",
    company: "PeakScale Dynamics",
    serviceCategory: "Search Optimization",
    rating: 5,
    source: "Trustpilot",
    featured: false,
  },
];
