import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  ShoppingBag,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Zap,
  Layers,
  Search,
  Bot,
  BarChart3,
  Globe,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import CommercePlatformIcon3D from "@/components/common/CommercePlatformIcon3D";
import EcommerceMultiChannelVisual from "@/components/services/EcommerceMultiChannelVisual";
import ProductListingOptimizationVisual from "@/components/services/ProductListingOptimizationVisual";
import EcommerceAutomationVisual from "@/components/services/EcommerceAutomationVisual";
import ServiceProjectModalTrigger from "@/components/services/ServiceProjectModalTrigger";

export const metadata: Metadata = {
  title: "eCommerce Growth Services | Shopify, Amazon, Etsy & eBay | UBE",
  description:
    "Grow your online business across Shopify, Amazon, Etsy and eBay with professional store development, marketplace optimization, product SEO, automation and multi-channel eCommerce strategy from Unified Branding Experts.",
  alternates: {
    canonical: "https://unifiedbrandingexperts.com/services/ecommerce",
  },
  openGraph: {
    title: "eCommerce Growth Services | Shopify, Amazon, Etsy & eBay | UBE",
    description:
      "Grow your online business across Shopify, Amazon, Etsy and eBay with professional store development, marketplace optimization, product SEO, automation and multi-channel eCommerce strategy from Unified Branding Experts.",
    url: "https://unifiedbrandingexperts.com/services/ecommerce",
    siteName: "Unified Branding Experts",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://unifiedbrandingexperts.com/images/projects/happy-knot/hero.png",
        width: 1200,
        height: 630,
        alt: "eCommerce Growth & Marketplace Services - Unified Branding Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "eCommerce Growth Services | Shopify, Amazon, Etsy & eBay | UBE",
    description:
      "Professional eCommerce store development, marketplace optimization, product SEO, and multi-channel strategy for Shopify, Amazon, Etsy, and eBay.",
    images: ["https://unifiedbrandingexperts.com/images/projects/happy-knot/hero.png"],
  },
};

export default function EcommerceGrowthServicePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://unifiedbrandingexperts.com/services/ecommerce/#webpage",
        "url": "https://unifiedbrandingexperts.com/services/ecommerce",
        "name": "eCommerce Growth Services | Shopify, Amazon, Etsy & eBay | UBE",
        "description":
          "Grow your online business across Shopify, Amazon, Etsy and eBay with professional store development, marketplace optimization, product SEO, automation and multi-channel eCommerce strategy.",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://unifiedbrandingexperts.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://unifiedbrandingexperts.com/services" },
            { "@type": "ListItem", "position": 3, "name": "eCommerce Growth Services", "item": "https://unifiedbrandingexperts.com/services/ecommerce" },
          ],
        },
      },
      {
        "@type": "Service",
        "@id": "https://unifiedbrandingexperts.com/services/ecommerce/#service",
        "name": "eCommerce Growth & Marketplace Services",
        "serviceType": "eCommerce Development & Marketplace Optimization",
        "description":
          "End-to-end eCommerce storefront development, multi-channel marketplace optimization (Shopify, Amazon, Etsy, eBay), product listing SEO, workflow automation, and conversion optimization.",
        "provider": {
          "@type": "Organization",
          "name": "Unified Branding Experts",
          "url": "https://unifiedbrandingexperts.com",
        },
        "url": "https://unifiedbrandingexperts.com/services/ecommerce",
        "image": "https://unifiedbrandingexperts.com/images/projects/happy-knot/hero.png",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "eCommerce Growth Packages",
          "url": "https://unifiedbrandingexperts.com/ecommerce-growth-packages",
        },
      },
    ],
  };

  return (
    <main className="pt-28 pb-20 space-y-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. HERO SECTION */}
      <section className="space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Headline & Hero Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ECOMMERCE GROWTH &amp; MARKETPLACE SERVICES</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#161616] leading-[1.1]">
              eCommerce Growth Services for Shopify, Amazon, Etsy &amp; eBay
            </h1>

            <p className="text-sm sm:text-base text-[#585858] font-body leading-relaxed max-w-2xl">
              Building an online store is only the beginning. Unified Branding Experts helps brands create, optimize and grow eCommerce systems across the platforms customers already use to discover and purchase products.
            </p>

            <p className="text-xs sm:text-sm text-[#585858] font-body leading-relaxed max-w-2xl">
              From your own Shopify storefront to marketplaces such as Amazon, Etsy and eBay, we connect store experience, product listings, search visibility, automation, analytics and marketplace strategy into one scalable commerce system.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/ecommerce-growth-packages"
                className="px-7 py-3.5 rounded-full bg-[#161616] hover:bg-[#9F8BE7] text-white hover:text-[#161616] text-xs font-display font-bold flex items-center gap-2 transition-all shadow-sm"
              >
                <span>Explore eCommerce Packages</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <ServiceProjectModalTrigger label="Start Your eCommerce Project" />
            </div>
          </div>

          {/* Right Column: Hero Visual composition with 3D Platform Icons */}
          <div className="lg:col-span-5 relative">
            <div className="p-6 rounded-3xl bg-[#FAF7F6] border border-[#E0DDDB] space-y-6 shadow-xs relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-[#E0DDDB] pb-4">
                <span className="text-[11px] font-mono-num font-bold text-[#161616]">
                  MULTI-CHANNEL COMMERCE HUB
                </span>
                <span className="text-[10px] font-mono-num px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                  Active Sync
                </span>
              </div>

              {/* 3D Platform Cluster */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
                <div className="p-2.5 sm:p-3.5 rounded-2xl bg-white border border-[#E0DDDB] flex items-center gap-2.5 sm:gap-3 shadow-2xs min-w-0">
                  <CommercePlatformIcon3D platform="shopify" size="md" className="shrink-0" />
                  <div className="min-w-0 flex-1">
                    <span className="font-display font-bold text-xs text-[#161616] whitespace-nowrap block leading-tight">Shopify</span>
                    <span className="text-[10px] text-[#585858] font-mono-num whitespace-nowrap block leading-tight">Storefront</span>
                  </div>
                </div>

                <div className="p-2.5 sm:p-3.5 rounded-2xl bg-white border border-[#E0DDDB] flex items-center gap-2.5 sm:gap-3 shadow-2xs min-w-0">
                  <CommercePlatformIcon3D platform="amazon" size="md" className="shrink-0" />
                  <div className="min-w-0 flex-1">
                    <span className="font-display font-bold text-xs text-[#161616] whitespace-nowrap block leading-tight">Amazon</span>
                    <span className="text-[10px] text-[#585858] font-mono-num whitespace-nowrap block leading-tight">Marketplace</span>
                  </div>
                </div>

                <div className="p-2.5 sm:p-3.5 rounded-2xl bg-white border border-[#E0DDDB] flex items-center gap-2.5 sm:gap-3 shadow-2xs min-w-0">
                  <CommercePlatformIcon3D platform="etsy" size="md" className="shrink-0" />
                  <div className="min-w-0 flex-1">
                    <span className="font-display font-bold text-xs text-[#161616] whitespace-nowrap block leading-tight">Etsy</span>
                    <span className="text-[10px] text-[#585858] font-mono-num whitespace-nowrap block leading-tight">Niche Shop</span>
                  </div>
                </div>

                <div className="p-2.5 sm:p-3.5 rounded-2xl bg-white border border-[#E0DDDB] flex items-center gap-2.5 sm:gap-3 shadow-2xs min-w-0">
                  <CommercePlatformIcon3D platform="ebay" size="md" className="shrink-0" />
                  <div className="min-w-0 flex-1">
                    <span className="font-display font-bold text-xs text-[#161616] whitespace-nowrap block leading-tight">eBay</span>
                    <span className="text-[10px] text-[#585858] font-mono-num whitespace-nowrap block leading-tight">Listings</span>
                  </div>
                </div>
              </div>

              {/* Store Preview Graphic */}
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-[#E0DDDB] bg-white">
                <Image
                  src="/images/projects/happy-knot/hero.png"
                  alt="Multi-channel eCommerce Storefront & Dashboard Interface"
                  fill
                  priority
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ANSWER-FIRST DEFINITION SECTION */}
      <section className="p-8 sm:p-10 rounded-3xl bg-[#FAF7F6] border border-[#E0DDDB] space-y-4 shadow-xs">
        <span className="text-xs font-mono-num text-[#9F8BE7] font-bold uppercase tracking-wider block">
          EXECUTIVE DEFINITION
        </span>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#161616]">
          What Are eCommerce Growth &amp; Marketplace Services?
        </h2>
        <p className="text-sm sm:text-base text-[#303030] font-body leading-relaxed max-w-4xl">
          eCommerce growth services combine storefront development, marketplace setup, product optimization, search visibility, conversion strategy, analytics and operational integrations into one connected system designed to help online businesses launch and scale more effectively.
        </p>
        <p className="text-xs sm:text-sm text-[#585858] font-body leading-relaxed max-w-4xl">
          Unified Branding Experts works across Shopify, Amazon, Etsy and eBay while helping businesses determine which channels actually make sense for their products, audience and growth stage.
        </p>
      </section>

      {/* 3. ONE STRATEGY - MULTIPLE SALES CHANNELS */}
      <section className="space-y-8">
        <div className="space-y-3 max-w-3xl">
          <span className="text-xs font-mono-num font-bold text-[#9F8BE7] uppercase tracking-wider block">
            OMNICHANNEL EXPANSION
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#161616]">
            One eCommerce Strategy. Multiple Sales Channels.
          </h2>
          <p className="text-sm text-[#585858] font-body leading-relaxed">
            Customers no longer shop in one place. Some discover products through Google and social media. Others begin directly on Amazon, Etsy or eBay. Your own eCommerce storefront gives you greater control over brand experience, customer relationships and long-term growth.
          </p>
          <p className="text-xs sm:text-sm text-[#585858] font-body leading-relaxed">
            We help build an ecosystem where these channels work together instead of operating as disconnected stores. Our focus is an organized foundation for product discovery, customer acquisition, conversion, fulfillment and future expansion.
          </p>
        </div>

        <EcommerceMultiChannelVisual />
      </section>

      {/* 4. SHOPIFY SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-8 border-t border-[#E0DDDB]">
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-3">
            <CommercePlatformIcon3D platform="shopify" size="md" />
            <div>
              <span className="text-xs font-mono-num font-bold text-emerald-600 uppercase tracking-wider block">
                STOREFRONT ENGINE
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#161616]">
                Shopify Store Development &amp; Growth
              </h2>
            </div>
          </div>

          <p className="text-sm text-[#585858] font-body leading-relaxed">
            Shopify gives businesses the flexibility to create a branded storefront they control. We build and optimize Shopify stores around clear navigation, product discovery, mobile shopping, trust and a streamlined checkout experience.
          </p>

          {/* Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#303030]">
            {[
              "Shopify store setup and design",
              "Theme customization",
              "Product and collection organization",
              "Product page optimization",
              "Payment and shipping configuration",
              "Supplier and dropshipping integrations",
              "Mobile optimization",
              "Conversion-focused storefront structure",
              "Analytics and tracking setup",
              "eCommerce SEO and content optimization",
              "Upsell and cross-sell opportunities",
              "Ongoing store management",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#585858] leading-relaxed">
            Whether a business is launching its first product line, expanding an existing brand or moving beyond marketplace-only selling, we build the Shopify foundation around the products and growth objectives.
          </p>

          <div className="pt-2">
            <Link
              href="/services/shopify-development"
              className="inline-flex items-center gap-2 text-xs font-display font-bold text-[#161616] hover:text-[#9F8BE7] underline underline-offset-4 transition-colors"
            >
              <span>Explore Shopify Development Services</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Supporting Visual */}
        <div className="lg:col-span-6">
          <div className="p-6 rounded-3xl bg-[#FAF7F6] border border-[#E0DDDB] space-y-4 shadow-xs">
            <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden border border-[#E0DDDB]">
              <Image
                src="/images/projects/happy-knot/storefront-design.png"
                alt="Shopify Storefront UX Breakdown and Mobile Responsive Layout"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
            <div className="flex items-center justify-between text-xs font-mono-num text-[#585858]">
              <span>Happy Knot Creations Shopify Storefront</span>
              <span className="text-emerald-600 font-bold">100% Custom UX</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. AMAZON SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-8 border-t border-[#E0DDDB]">
        <div className="lg:col-span-6 lg:order-2 space-y-6">
          <div className="flex items-center gap-3">
            <CommercePlatformIcon3D platform="amazon" size="md" />
            <div>
              <span className="text-xs font-mono-num font-bold text-amber-600 uppercase tracking-wider block">
                GLOBAL MARKETPLACE REACH
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#161616]">
                Amazon Marketplace Services
              </h2>
            </div>
          </div>

          <p className="text-sm text-[#585858] font-body leading-relaxed">
            Amazon offers access to an enormous product marketplace, but successful selling requires more than uploading products. Unified Branding Experts helps businesses structure their Amazon presence around professional listings, clear product information, marketplace discoverability, brand consistency and seller readiness.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#303030]">
            {[
              "Seller / storefront setup support",
              "Product listing organization",
              "Keyword-focused product content",
              "Optimized titles and descriptions",
              "Image presentation guidance",
              "Category organization",
              "Listing optimization",
              "Storefront organization",
              "Marketplace strategy",
              "Ongoing optimization support",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#585858] leading-relaxed">
            Where appropriate, Amazon can also be aligned with a brand's Shopify storefront and wider digital marketing strategy.
          </p>

          <div className="pt-2">
            <ServiceProjectModalTrigger label="Talk to an eCommerce Specialist" />
          </div>
        </div>

        <div className="lg:col-span-6 lg:order-1">
          <div className="p-6 rounded-3xl bg-[#FAF7F6] border border-[#E0DDDB] space-y-4 shadow-xs">
            <div className="p-6 rounded-2xl bg-white border border-[#E0DDDB] space-y-4">
              <div className="flex items-center justify-between border-b border-[#E0DDDB] pb-3 text-xs font-mono-num font-bold">
                <span>AMAZON LISTING READINESS</span>
                <span className="text-amber-600">A+ Content Ready</span>
              </div>
              <div className="space-y-2 text-xs text-[#585858]">
                <p className="font-display font-bold text-[#161616] text-sm">
                  Optimized Product Title &amp; Keyword Structure
                </p>
                <p>
                  Search-engineered titles, 5 benefit bullet points, optimized item specifics, bulleted specs, and high-conversion image presentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ETSY SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-8 border-t border-[#E0DDDB]">
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-3">
            <CommercePlatformIcon3D platform="etsy" size="md" />
            <div>
              <span className="text-xs font-mono-num font-bold text-orange-600 uppercase tracking-wider block">
                CREATIVE &amp; GIFT MARKETPLACE
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#161616]">
                Etsy Shop Setup &amp; Optimization
              </h2>
            </div>
          </div>

          <p className="text-sm text-[#585858] font-body leading-relaxed">
            Etsy can be a strong discovery channel for handmade products, personalized products, jewelry, gifts, apparel, creative goods and niche brands. We help Etsy sellers create a stronger storefront experience.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#303030]">
            {[
              "Etsy shop setup",
              "Shop branding",
              "Listing organization",
              "Keyword-focused titles",
              "Listing descriptions",
              "Category and tag optimization",
              "Product presentation",
              "Storefront organization",
              "Etsy SEO",
              "Promotional content strategy",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#585858] leading-relaxed">
            We can also help businesses use Etsy as a discovery channel while developing their own branded eCommerce storefront for long-term growth.
          </p>

          <div className="pt-2">
            <Link
              href="/services/etsy-shop-setup"
              className="inline-flex items-center gap-2 text-xs font-display font-bold text-[#161616] hover:text-[#9F8BE7] underline underline-offset-4 transition-colors"
            >
              <span>Explore Etsy Shop Services</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="p-6 rounded-3xl bg-[#FAF7F6] border border-[#E0DDDB] space-y-4 shadow-xs">
            <div className="p-6 rounded-2xl bg-white border border-[#E0DDDB] space-y-4">
              <div className="flex items-center justify-between border-b border-[#E0DDDB] pb-3 text-xs font-mono-num font-bold">
                <span>13/13 TAG ETSY SEO</span>
                <span className="text-orange-600">Star Seller Framework</span>
              </div>
              <p className="text-xs text-[#585858] leading-relaxed">
                Complete Etsy keyword optimization using eRank, Marmalead, and EverBee data to align long-tail tags with high buyer search intent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. EBAY SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-8 border-t border-[#E0DDDB]">
        <div className="lg:col-span-6 lg:order-2 space-y-6">
          <div className="flex items-center gap-3">
            <CommercePlatformIcon3D platform="ebay" size="md" />
            <div>
              <span className="text-xs font-mono-num font-bold text-blue-600 uppercase tracking-wider block">
                CATALOG &amp; SPECIALTY CHANNEL
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#161616]">
                eBay Store &amp; Listing Optimization
              </h2>
            </div>
          </div>

          <p className="text-sm text-[#585858] font-body leading-relaxed">
            eBay remains relevant across categories including electronics, collectibles, fashion, automotive products, home goods, refurbished products and specialty merchandise.
          </p>

          <p className="text-xs text-[#585858] leading-relaxed">
            We help improve the marketplace experience through professional product listings, descriptions, categories, pricing presentation, storefront organization and listing optimization.
          </p>

          <p className="text-xs text-[#585858] leading-relaxed">
            Where supported by available integrations and the client's business model, we can also help streamline product and inventory workflows between eBay and other selling channels.
          </p>
        </div>

        <div className="lg:col-span-6 lg:order-1">
          <div className="p-6 rounded-3xl bg-[#FAF7F6] border border-[#E0DDDB] space-y-4 shadow-xs">
            <div className="p-6 rounded-2xl bg-white border border-[#E0DDDB] space-y-4">
              <div className="flex items-center justify-between border-b border-[#E0DDDB] pb-3 text-xs font-mono-num font-bold">
                <span>EBAY ITEM SPECIFICS</span>
                <span className="text-blue-600">Category Optimization</span>
              </div>
              <p className="text-xs text-[#585858] leading-relaxed">
                Item specifics optimization, structured catalog data, and clean template presentation for maximum search visibility on eBay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PRODUCT LISTING OPTIMIZATION */}
      <section className="space-y-8 pt-8 border-t border-[#E0DDDB]">
        <div className="space-y-3 max-w-3xl">
          <span className="text-xs font-mono-num font-bold text-[#9F8BE7] uppercase tracking-wider block">
            CONVERSION ARCHITECTURE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#161616]">
            Product Listings Built for Search and Conversion
          </h2>
          <p className="text-sm text-[#585858] font-body leading-relaxed">
            A product listing has two jobs: <strong>Get discovered</strong>, and <strong>Help the customer decide to buy</strong>. We structure product information around both.
          </p>
        </div>

        <ProductListingOptimizationVisual />
      </section>

      {/* 9. ECOMMERCE SEO + AI SEARCH */}
      <section className="p-8 sm:p-10 rounded-3xl bg-[#FAF7F6] border border-[#E0DDDB] space-y-8 shadow-xs">
        <div className="space-y-3 max-w-3xl">
          <span className="text-xs font-mono-num font-bold text-emerald-600 uppercase tracking-wider block">
            SEARCH &amp; AI VISIBILITY
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#161616]">
            eCommerce SEO &amp; AI Search Visibility
          </h2>
          <p className="text-sm text-[#585858] font-body leading-relaxed">
            Products should be understandable to customers, search engines and modern answer systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-2xl bg-white border border-[#E0DDDB] space-y-2 shadow-2xs">
            <h4 className="font-display text-base font-bold text-[#161616]">Product SEO</h4>
            <p className="text-xs text-[#585858] leading-relaxed">
              Product titles, descriptions, categories, collections and contextual internal linking.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#E0DDDB] space-y-2 shadow-2xs">
            <h4 className="font-display text-base font-bold text-[#161616]">Technical SEO</h4>
            <p className="text-xs text-[#585858] leading-relaxed">
              Indexability, metadata, canonical architecture, structured data, image optimization and site organization.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#E0DDDB] space-y-2 shadow-2xs">
            <h4 className="font-display text-base font-bold text-[#161616]">AI Search Optimization</h4>
            <p className="text-xs text-[#585858] leading-relaxed">
              Clear product entities, answer-first content, structured information designed for AI discovery systems.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#E0DDDB] space-y-2 shadow-2xs">
            <h4 className="font-display text-base font-bold text-[#161616]">Marketplace Search</h4>
            <p className="text-xs text-[#585858] leading-relaxed">
              Platform-specific listing optimization for Amazon, Etsy and eBay search algorithms.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white border border-[#E0DDDB] text-xs text-[#585858] space-y-2">
          <p className="font-bold text-[#161616]">Our Ethical Search Commitment:</p>
          <p>
            Our goal is to create a technically sound, content-rich foundation that improves the opportunity for sustainable search visibility across traditional and AI-powered discovery experiences. We do not make false promises regarding guaranteed #1 rankings or guaranteed sales.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-display font-bold">
          <Link href="/services/aiseo" className="text-[#161616] hover:text-[#9F8BE7] underline underline-offset-4">
            Explore AI SEO &amp; Answer Engine Services →
          </Link>
          <Link href="/insights/how-much-does-a-small-business-website-cost" className="text-[#161616] hover:text-[#9F8BE7] underline underline-offset-4">
            Read eCommerce Cost &amp; SEO Guide →
          </Link>
        </div>
      </section>

      {/* 10. AUTOMATION SECTION */}
      <section className="space-y-8 pt-8 border-t border-[#E0DDDB]">
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono-num font-bold text-purple-600 uppercase tracking-wider block">
              OPERATIONAL EFFICIENCY
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#161616]">
            Automation, Inventory &amp; Order Workflows
          </h2>
          <p className="text-sm text-[#585858] font-body leading-relaxed">
            As an eCommerce business grows, repetitive operational work can become a bottleneck. Where integrations support it, we help connect systems across product sync, inventory, orders, fulfillment, customer notifications, and analytics.
          </p>
        </div>

        <EcommerceAutomationVisual />

        <div className="pt-2">
          <Link
            href="/services/ai-automation"
            className="inline-flex items-center gap-2 text-xs font-display font-bold text-[#161616] hover:text-[#9F8BE7] underline underline-offset-4"
          >
            <span>Explore AI Automation &amp; Workflow Integration Services</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 11. PROCESS SECTION */}
      <section className="space-y-8 pt-8 border-t border-[#E0DDDB]">
        <div className="space-y-3 max-w-3xl">
          <span className="text-xs font-mono-num font-bold text-[#9F8BE7] uppercase tracking-wider block">
            METHODOLOGY
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#161616]">
            Our eCommerce Growth Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { step: "01", title: "Discovery & Platform Strategy", desc: "Review products, target audience, current channels, fulfillment model, goals and storefronts." },
            { step: "02", title: "Store & Marketplace Foundation", desc: "Build or optimize storefront structure, collections, product organization and marketplace foundations." },
            { step: "03", title: "Product & Content Optimization", desc: "Improve product presentation, listing content, SEO structure, imagery and customer-facing information." },
            { step: "04", title: "Integrations & Tracking", desc: "Configure relevant payments, shipping, suppliers, analytics, pixels, CRM, email and automation tools." },
            { step: "05", title: "Launch & Growth", desc: "After QA and launch, expand into search visibility, paid acquisition, content, marketplace growth and optimization." },
          ].map((item) => (
            <div key={item.step} className="p-5 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] space-y-3 shadow-2xs">
              <span className="text-xs font-mono-num text-[#9F8BE7] font-bold block">{item.step}</span>
              <h3 className="font-display text-sm font-bold text-[#161616]">{item.title}</h3>
              <p className="text-xs text-[#585858] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 12. WHO THIS IS FOR & WHY UBE */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-[#E0DDDB]">
        <div className="p-8 rounded-3xl bg-[#FAF7F6] border border-[#E0DDDB] space-y-4">
          <span className="text-xs font-mono-num font-bold text-[#9F8BE7] uppercase tracking-wider block">
            TARGET FIT
          </span>
          <h3 className="font-display text-2xl font-bold text-[#161616]">
            Who This Service Is For
          </h3>
          <ul className="space-y-2 text-xs text-[#585858]">
            {[
              "Businesses launching their first online store",
              "Brands moving from Etsy or Amazon to Shopify",
              "Expanding an existing Shopify business",
              "Launching dropshipping operations",
              "Selling through multiple marketplaces",
              "Improving underperforming listings",
              "Developing a branded product business",
              "Looking for ongoing eCommerce optimization",
            ].map((fit) => (
              <li key={fit} className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{fit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-8 rounded-3xl bg-[#161616] text-white border border-white/10 space-y-4 shadow-xl">
          <span className="text-xs font-mono-num font-bold text-[#DDF160] uppercase tracking-wider block">
            OUR ADVANTAGE
          </span>
          <h3 className="font-display text-2xl font-bold text-white">
            Why Unified Branding Experts
          </h3>
          <p className="text-xs sm:text-sm text-[#ACACAC] leading-relaxed">
            We approach eCommerce as a connected digital system. Rather than treating storefront design, marketplaces, branding, search optimization, automation and marketing as unrelated activities, we organize them around the same commercial objective.
          </p>
          <p className="text-xs text-[#ACACAC] leading-relaxed">
            That creates a stronger foundation for professional presentation, product discovery, customer experience, measurement and future growth.
          </p>
        </div>
      </section>

      {/* 13. PACKAGE TEASER CARDS */}
      <section className="space-y-8 pt-8 border-t border-[#E0DDDB]">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-mono-num font-bold text-[#9F8BE7] uppercase tracking-wider block">
            TRANSPARENT PRICING PLANS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#161616]">
            eCommerce Growth Packages
          </h2>
          <p className="text-sm text-[#585858]">
            Choose a plan engineered for your current catalog size and channel expansion goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Launch $399 */}
          <div className="p-6 rounded-3xl bg-white border border-[#E0DDDB] space-y-5 shadow-xs hover:border-[#9F8BE7] transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono-num font-bold text-[#161616]">eCommerce Launch</span>
                <span className="text-lg font-mono-num font-bold text-emerald-600">$399</span>
              </div>
              <p className="text-xs text-[#585858]">
                Best for new businesses needing a professional storefront foundation up to 50 products.
              </p>
            </div>
            <Link
              href="/ecommerce-growth-packages"
              className="w-full py-3 rounded-full bg-[#FAF7F6] border border-[#E0DDDB] hover:bg-[#9F8BE7] hover:text-[#161616] text-xs font-display font-bold text-center block transition-colors"
            >
              View Launch Plan Details
            </Link>
          </div>

          {/* Growth $799 */}
          <div className="p-6 rounded-3xl bg-white border-2 border-[#9F8BE7] space-y-5 shadow-md relative flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono-num font-bold text-[#161616]">eCommerce Growth</span>
                <span className="text-lg font-mono-num font-bold text-emerald-600">$799</span>
              </div>
              <p className="text-xs text-[#585858]">
                For stores needing supplier/dropshipping sync, up to 100 products, analytics, and email workflows.
              </p>
            </div>
            <Link
              href="/ecommerce-growth-packages"
              className="w-full py-3 rounded-full bg-[#161616] text-white hover:bg-[#9F8BE7] hover:text-[#161616] text-xs font-display font-bold text-center block transition-colors"
            >
              View Growth Plan Details
            </Link>
          </div>

          {/* Scale $999 */}
          <div className="p-6 rounded-3xl bg-white border border-[#E0DDDB] space-y-5 shadow-xs hover:border-[#9F8BE7] transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono-num font-bold text-[#161616]">eCommerce Scale</span>
                <span className="text-lg font-mono-num font-bold text-emerald-600">$999</span>
              </div>
              <p className="text-xs text-[#585858]">
                For larger catalogs (up to 200 products), multi-channel strategy (Amazon, Etsy, eBay), &amp; AI search SEO.
              </p>
            </div>
            <Link
              href="/ecommerce-growth-packages"
              className="w-full py-3 rounded-full bg-[#FAF7F6] border border-[#E0DDDB] hover:bg-[#9F8BE7] hover:text-[#161616] text-xs font-display font-bold text-center block transition-colors"
            >
              View Scale Plan Details
            </Link>
          </div>
        </div>

        <div className="text-center pt-2">
          <Link
            href="/ecommerce-growth-packages"
            className="inline-flex items-center gap-2 text-xs font-display font-bold text-[#161616] hover:text-[#9F8BE7] underline underline-offset-4"
          >
            <span>Compare Full eCommerce Package Features &amp; Add-ons →</span>
          </Link>
        </div>
      </section>

      {/* 14. VISIBLE SEMANTIC FAQS */}
      <section className="space-y-8 pt-8 border-t border-[#E0DDDB]">
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-mono-num font-bold text-[#9F8BE7] uppercase tracking-wider block">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-display text-3xl font-bold text-[#161616]">
            eCommerce Growth FAQs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] space-y-2">
            <h3 className="font-display text-base font-bold text-[#161616]">
              Which eCommerce platforms do you work with?
            </h3>
            <p className="text-xs text-[#585858] leading-relaxed">
              We support Shopify, Amazon, Etsy, eBay, WooCommerce and selected supplier or fulfillment platforms depending on project requirements.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] space-y-2">
            <h3 className="font-display text-base font-bold text-[#161616]">
              Can you build a Shopify store from scratch?
            </h3>
            <p className="text-xs text-[#585858] leading-relaxed">
              Yes. We can handle store setup, design, product organization, collections, payment configuration, shipping, integrations, mobile optimization and launch preparation.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] space-y-2">
            <h3 className="font-display text-base font-bold text-[#161616]">
              Do you help with Amazon, Etsy and eBay listings?
            </h3>
            <p className="text-xs text-[#585858] leading-relaxed">
              Yes. We can help structure and optimize product listings, marketplace content, categories, keywords and storefront organization.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] space-y-2">
            <h3 className="font-display text-base font-bold text-[#161616]">
              Can you help with dropshipping?
            </h3>
            <p className="text-xs text-[#585858] leading-relaxed">
              Yes. Where appropriate suppliers and integrations are available, we can configure storefronts, supplier connections, product imports and fulfillment workflows.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] space-y-2">
            <h3 className="font-display text-base font-bold text-[#161616]">
              Does eCommerce development include advertising?
            </h3>
            <p className="text-xs text-[#585858] leading-relaxed">
              Advertising budgets and ongoing advertising management are separate unless explicitly included in a proposal.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] space-y-2">
            <h3 className="font-display text-base font-bold text-[#161616]">
              Can a business start with one platform and expand later?
            </h3>
            <p className="text-xs text-[#585858] leading-relaxed">
              Yes. In many situations, establishing one strong channel first is more practical than attempting to launch everywhere simultaneously.
            </p>
          </div>
        </div>
      </section>

      {/* 15. FINAL SERVICE CTA */}
      <section className="p-8 sm:p-14 rounded-3xl bg-[#161616] text-white text-center space-y-6 shadow-xl border border-white/10">
        <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Ready to Build a Stronger eCommerce System?
        </h2>
        <p className="text-sm sm:text-base text-[#ACACAC] max-w-xl mx-auto">
          Whether you're launching on Shopify, expanding to Amazon, building an Etsy presence, optimizing eBay or connecting multiple selling channels, Unified Branding Experts can help create the foundation.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/ecommerce-growth-packages"
            className="px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-md"
          >
            Explore eCommerce Packages
          </Link>
          <ServiceProjectModalTrigger label="Start Your Project" />
        </div>
      </section>
    </main>
  );
}
