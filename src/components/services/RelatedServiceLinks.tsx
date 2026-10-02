import Link from "next/link";

type Resource = { href: string; label: string; description: string };

const resources: Record<string, Resource> = {
  storefront: { href: "/ecommerce-growth-packages", label: "eCommerce setup packages", description: "Compare storefront launch scopes and included deliverables." },
  management: { href: "/ecommerce-store-management-packages", label: "Store management plans", description: "Compare ongoing catalog, order-monitoring, and upkeep scopes." },
  ads: { href: "/digital-marketing-packages", label: "Digital marketing packages", description: "Compare paid campaign management scopes; media spend is separate." },
  tiktok: { href: "/tiktok-marketing-packages", label: "TikTok marketing packages", description: "Review video content and campaign management scopes." },
  web: { href: "/web-design-packages", label: "Web design packages", description: "Compare website design and development deliverables." },
  app: { href: "/mobile-app-packages", label: "Mobile app packages", description: "Compare app development scopes and launch support." },
  automation: { href: "/ai-automation-packages", label: "AI automation packages", description: "Review workflow and integration scopes." },
  branding: { href: "/branding-packages", label: "Branding packages", description: "Compare logo, identity, and guideline deliverables." },
  seo: { href: "/ai-seo-packages", label: "AI SEO packages", description: "Compare technical search, content, and measurement scopes." },
  shopifyService: { href: "/services/shopify-development", label: "Shopify development", description: "Plan the storefront, product organization, and integrations." },
  managementService: { href: "/services/ecommerce-store-management", label: "Ongoing store management", description: "Keep approved product information and storefront operations current." },
  seoService: { href: "/services/ai-seo-agency", label: "AI SEO services", description: "Review search readiness, structured content, and technical optimization." },
  webService: { href: "/services/web-design-development", label: "Website design and development", description: "Align website structure and landing pages with customer needs." },
  socialService: { href: "/services/social-media-management", label: "Social media management", description: "Plan branded content, publishing, and community-response workflows." },
  googleService: { href: "/services/google-ads", label: "Google Ads management", description: "Connect commercial searches with relevant ads and landing pages." },
  metaService: { href: "/services/meta-ads", label: "Meta Ads management", description: "Coordinate Facebook and Instagram creative, audiences, and tracking." },
  work: { href: "/work", label: "Published client projects", description: "Review documented storefront and brand deliverables." },
  happyKnot: { href: "/work/happy-knot-creations-shopify-storefront", label: "Happy Knot Creations storefront", description: "Review the documented Shopify setup and management scope." },
  brandWork: { href: "/work/fixoria-studio-brand-identity-system", label: "Fixoria brand identity", description: "Explore a published visual identity and its applications." },
  commerceGuide: { href: "/insights/shopify-store-setup-cost-2026", label: "Shopify setup cost guide", description: "Understand setup budgets and separate platform costs." },
  channelGuide: { href: "/insights/tiktok-shop-vs-shopify", label: "TikTok Shop and Shopify comparison", description: "Compare channel fit, operating needs, and cost considerations." },
  seoGuide: { href: "/ai-seo", label: "AI search methodology", description: "Understand readiness checks, evidence, and measurement limits." },
  contact: { href: "/contact", label: "Discuss a content management scope", description: "Request a proposal for your channels, publishing volume, and approval process." },
};

const serviceResources: Record<string, string[]> = {
  ecommerce: ["storefront", "shopifyService", "managementService", "happyKnot"],
  "shopify-development": ["storefront", "managementService", "seoService", "happyKnot"],
  dropshipping: ["storefront", "shopifyService", "managementService", "commerceGuide"],
  "etsy-shop-setup": ["storefront", "shopifyService", "managementService", "work"],
  "ecommerce-store-management": ["management", "shopifyService", "seoService", "happyKnot"],
  "web-design-development": ["web", "seoService", "googleService", "work"],
  "mobile-app-development": ["app", "webService", "automation", "work"],
  "ai-automation": ["automation", "managementService", "webService", "work"],
  branding: ["branding", "webService", "socialService", "brandWork"],
  "digital-marketing": ["ads", "googleService", "metaService", "seoService"],
  "google-ads": ["ads", "webService", "seoService", "metaService"],
  "meta-ads": ["ads", "shopifyService", "socialService", "googleService"],
  "tiktok-marketing": ["tiktok", "socialService", "shopifyService", "channelGuide"],
  "social-media-management": ["contact", "branding", "metaService", "work"],
  "ai-seo-agency": ["seo", "seoGuide", "webService", "happyKnot"],
};

export default function RelatedServiceLinks({ slug }: { slug: string }) {
  const keys = serviceResources[slug];
  if (!keys) return null;

  return (
    <section aria-label="Related services, plans, and resources" className="space-y-6 border-t border-[#E0DDDB] pt-12">
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#161616]">Plan your next step</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {keys.map((key) => {
          const resource = resources[key];
          return (
            <Link key={resource.href} href={resource.href} className="block rounded-2xl border border-[#E0DDDB] bg-white p-6 space-y-3 hover:border-[#6B46C1] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6B46C1] transition-colors">
              <h3 className="font-display text-base font-bold text-[#161616]">{resource.label}</h3>
              <p className="text-sm text-[#585858] leading-relaxed">{resource.description}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
