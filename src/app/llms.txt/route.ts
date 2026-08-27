import { NextResponse } from "next/server";

export async function GET() {
  const content = `# Unified Branding Experts

> Unified Branding Experts is a digital branding, technology, eCommerce, marketing, search optimization, mobile application, and AI automation agency helping businesses build and scale digital brands and platforms.

## Services

- [Branding Services](https://unifiedbrandingexperts.com/services/branding): Custom visual identity systems, vector logos, typography, and brand style guides.
- [Website Design & Development](https://unifiedbrandingexperts.com/services/web-design-development): Bespoke Next.js and React web applications engineered for speed and conversion.
- [eCommerce Development](https://unifiedbrandingexperts.com/services/ecommerce): High-conversion online store architecture, custom cart UX, and catalog management.
- [Shopify Store Development](https://unifiedbrandingexperts.com/services/shopify-development): End-to-end Shopify setup, theme customization, and dropshipping integrations.
- [Etsy Shop Setup](https://unifiedbrandingexperts.com/services/etsy-shop-setup): 13-tag Etsy search optimization, shop branding, and listing launch.
- [TikTok Shop Setup](https://unifiedbrandingexperts.com/services/tiktok-shop-setup): Seller Center sync, affiliate product catalog, and in-feed checkout setup.
- [TikTok Marketing](https://unifiedbrandingexperts.com/services/tiktok-marketing): High-performing short-form video ads, viral content strategy, and TikTok spark ads.
- [AI SEO & Search Discovery](https://unifiedbrandingexperts.com/services/aiseo): Generative Engine Optimization (GEO), entity schema, and Google AI Overviews ranking.
- [Google Ads](https://unifiedbrandingexperts.com/services/google-ads): High-intent Google Search, Performance Max, and Shopping ad management.
- [Meta Ads](https://unifiedbrandingexperts.com/services/meta-ads): Facebook and Instagram visual sales funnels with Conversion API tracking.
- [Social Media Management](https://unifiedbrandingexperts.com/services/social-media-management): Strategic social content calendars, community management, and visual posts.
- [Mobile App Development](https://unifiedbrandingexperts.com/services/mobile-app-development): Native and cross-platform iOS and Android mobile app engineering.
- [AI & Workflow Automation](https://unifiedbrandingexperts.com/services/ai-automation): Custom CRM integrations, automated lead nurturing, and internal AI agents.

## Packages

- [Branding Packages](https://unifiedbrandingexperts.com/branding-packages): Flat-rate brand identity, logo, and guideline setup tiers.
- [AI SEO Packages](https://unifiedbrandingexperts.com/ai-seo-packages): Comprehensive AEO entity schema and search optimization plans.
- [eCommerce Growth Packages](https://unifiedbrandingexperts.com/ecommerce-growth-packages): Turnkey Shopify and marketplace growth solutions.
- [TikTok Marketing Packages](https://unifiedbrandingexperts.com/tiktok-marketing-packages): Short-form ad creation and account scaling management.
- [Mobile App Packages](https://unifiedbrandingexperts.com/mobile-app-packages): Cross-platform app design and app store deployment plans.
- [AI Automation Packages](https://unifiedbrandingexperts.com/ai-automation-packages): CRM automation and custom business bot deployment.

## Case Studies

- [Work & Portfolio](https://unifiedbrandingexperts.com/work): Explore case studies across eCommerce, web platforms, branding systems, and AI search architecture.
- [Fixoria Studio Brand Identity](https://unifiedbrandingexperts.com/work/fixoria-studio-brand-identity-system): Comprehensive visual identity and vector asset system.
- [Happy Knot Creations Shopify Storefront](https://unifiedbrandingexperts.com/work/happy-knot-creations-shopify-storefront): High-converting custom Shopify storefront.
- [Everhome Real Estate Brand System](https://unifiedbrandingexperts.com/work/everhome-real-estate-brand-system): Modern real estate identity and digital platform.

## Insights

- [Insights & Articles](https://unifiedbrandingexperts.com/insights): In-depth guides on branding, eCommerce, AI search, and digital marketing.
- [How Much Does Professional Logo Design Cost?](https://unifiedbrandingexperts.com/insights/how-much-does-professional-logo-design-cost): Breakdown of logo design pricing and deliverables.
- [How to Choose the Best Logo Design Company](https://unifiedbrandingexperts.com/insights/how-to-choose-the-best-logo-design-company): Selection criteria for brand agency partners.
- [How Much Does a Small Business Website Cost?](https://unifiedbrandingexperts.com/insights/how-much-does-a-small-business-website-cost): Web development investment guide for growing businesses.

## Company

- [About Unified Branding Experts](https://unifiedbrandingexperts.com/about): Our agency philosophy, strategy, and team background.
- [Contact Unified Branding Experts](https://unifiedbrandingexperts.com/contact): Direct consultation and project inquiry.

## Contact

Unified Branding Experts
Website: https://unifiedbrandingexperts.com/
Email: info@unifiedbrandingexperts.com
Phone: +1 224-266-8081
`;

  return new NextResponse(content.trim(), {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
