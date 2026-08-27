import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  X,
  HelpCircle,
  ShieldAlert,
  ArrowUpRight,
  ShoppingBag,
  Zap,
  TrendingUp,
} from "lucide-react";
import CommercePlatformIcon3D from "@/components/common/CommercePlatformIcon3D";
import ServiceProjectModalTrigger from "@/components/services/ServiceProjectModalTrigger";

export const metadata: Metadata = {
  title: "eCommerce Packages & Pricing | Shopify, Amazon, Etsy & eBay | UBE",
  description:
    "Compare eCommerce development and growth packages from Unified Branding Experts. Shopify setup, marketplace optimization, dropshipping integrations, SEO, automation and multi-channel growth plans from $399.",
  alternates: {
    canonical: "https://unifiedbrandingexperts.com/ecommerce-growth-packages",
  },
  openGraph: {
    title: "eCommerce Packages & Pricing | Shopify, Amazon, Etsy & eBay | UBE",
    description:
      "Compare eCommerce development and growth packages from Unified Branding Experts. Shopify setup, marketplace optimization, dropshipping integrations, SEO, automation and multi-channel growth plans from $399.",
    url: "https://unifiedbrandingexperts.com/ecommerce-growth-packages",
    siteName: "Unified Branding Experts",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://unifiedbrandingexperts.com/images/projects/happy-knot/hero.png",
        width: 1200,
        height: 630,
        alt: "eCommerce Growth Packages & Pricing - Unified Branding Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "eCommerce Packages & Pricing | Shopify, Amazon, Etsy & eBay | UBE",
    description:
      "Shopify store setup, dropshipping integrations, marketplace optimization, product SEO, and multi-channel growth plans from $399.",
    images: ["https://unifiedbrandingexperts.com/images/projects/happy-knot/hero.png"],
  },
};

export default function EcommercePackagesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://unifiedbrandingexperts.com/ecommerce-growth-packages/#webpage",
        "url": "https://unifiedbrandingexperts.com/ecommerce-growth-packages",
        "name": "eCommerce Packages & Pricing | Shopify, Amazon, Etsy & eBay | UBE",
        "description":
          "Compare eCommerce development and growth packages from Unified Branding Experts. Shopify setup, marketplace optimization, dropshipping integrations, SEO, automation and multi-channel growth plans from $399.",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://unifiedbrandingexperts.com" },
            { "@type": "ListItem", "position": 2, "name": "Packages", "item": "https://unifiedbrandingexperts.com/packages" },
            { "@type": "ListItem", "position": 3, "name": "eCommerce Growth Packages", "item": "https://unifiedbrandingexperts.com/ecommerce-growth-packages" },
          ],
        },
      },
      {
        "@type": "Service",
        "@id": "https://unifiedbrandingexperts.com/ecommerce-growth-packages/#service",
        "name": "eCommerce Growth Packages",
        "serviceType": "eCommerce Development & Marketplace Growth Packages",
        "provider": {
          "@type": "Organization",
          "name": "Unified Branding Experts",
          "url": "https://unifiedbrandingexperts.com",
        },
        "url": "https://unifiedbrandingexperts.com/ecommerce-growth-packages",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "eCommerce Commercial Tier Catalog",
          "itemListElement": [
            {
              "@type": "Offer",
              "name": "eCommerce Launch Package",
              "price": "399.00",
              "priceCurrency": "USD",
              "url": "https://unifiedbrandingexperts.com/ecommerce-growth-packages#launch",
              "description": "Professional storefront setup for up to 50 products, payment gateway configuration, mobile responsive design, and essential pages.",
            },
            {
              "@type": "Offer",
              "name": "eCommerce Growth Package",
              "price": "799.00",
              "priceCurrency": "USD",
              "url": "https://unifiedbrandingexperts.com/ecommerce-growth-packages#growth",
              "description": "Everything in Launch plus up to 100 products, dropshipping & supplier sync (CJ/Printify/Printful), analytics, conversion optimization, and email automation.",
            },
            {
              "@type": "Offer",
              "name": "eCommerce Scale Package",
              "price": "999.00",
              "priceCurrency": "USD",
              "url": "https://unifiedbrandingexperts.com/ecommerce-growth-packages#scale",
              "description": "Everything in Growth plus up to 200 products, multi-channel strategy (Shopify/Amazon/Etsy/eBay), advanced integrations, and AI search SEO audit.",
            },
          ],
        },
      },
    ],
  };

  const comparisonFeatures = [
    { feature: "Professional Storefront Setup", launch: true, growth: true, scale: true },
    { feature: "Mobile Responsive Layout", launch: true, growth: true, scale: true },
    { feature: "Product Capacity", launch: "Up to 50", growth: "Up to 100", scale: "Up to 200" },
    { feature: "Payment & Shipping Setup", launch: true, growth: true, scale: true },
    { feature: "Basic On-Page SEO", launch: true, growth: true, scale: true },
    { feature: "Dropshipping & Supplier Sync", launch: false, growth: true, scale: true },
    { feature: "Supplier Fulfillment Automation", launch: false, growth: true, scale: true },
    { feature: "Google Analytics & Meta Pixel", launch: false, growth: true, scale: true },
    { feature: "Search Console Setup", launch: false, growth: true, scale: true },
    { feature: "Conversion-Optimized Layout", launch: false, growth: true, scale: true },
    { feature: "Upsell & Cross-Sell Config", launch: false, growth: true, scale: true },
    { feature: "Abandoned Cart Email Workflow", launch: false, growth: true, scale: true },
    { feature: "AI Search Content Structure", launch: false, growth: false, scale: true },
    { feature: "Marketplace Channel Strategy", launch: false, growth: false, scale: true },
    { feature: "Amazon / Etsy / eBay Prep", launch: false, growth: false, scale: true },
    { feature: "Multi-Channel Growth Planning", launch: false, growth: false, scale: true },
  ];

  return (
    <main className="pt-28 pb-20 space-y-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. HERO SECTION */}
      <section className="text-center space-y-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold shadow-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>STARTING FROM $399 — TRANSPARENT COMMERCIAL PLANS</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#161616]">
          eCommerce Growth Packages
        </h1>

        <p className="text-sm sm:text-base text-[#585858] font-body leading-relaxed max-w-2xl mx-auto">
          Choose the level of eCommerce support that matches where your business is today. Whether you need a professional storefront, a dropshipping-ready system or a more advanced multi-channel commerce operation, our packages provide a clear starting point with room to grow.
        </p>

        {/* 3D Platform Cluster Badge */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <CommercePlatformIcon3D platform="shopify" size="md" showLabel />
          <CommercePlatformIcon3D platform="amazon" size="md" showLabel />
          <CommercePlatformIcon3D platform="etsy" size="md" showLabel />
          <CommercePlatformIcon3D platform="ebay" size="md" showLabel />
        </div>
      </section>

      {/* 2. THE THREE COMMERCIAL PACKAGES */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {/* PACKAGE 1: LAUNCH ($399) */}
        <div
          id="launch"
          className="rounded-3xl bg-white border border-[#E0DDDB] p-7 space-y-6 flex flex-col justify-between shadow-xs hover:border-[#9F8BE7] transition-all"
        >
          <div className="space-y-5">
            <div className="space-y-2 border-b border-[#E0DDDB] pb-4">
              <span className="text-xs font-mono-num font-bold text-[#585858] uppercase tracking-wider block">
                STARTER STOREFRONT
              </span>
              <h3 className="font-display text-2xl font-bold text-[#161616]">
                eCommerce Launch
              </h3>
              <div className="flex items-baseline gap-1">
                <span className="font-mono-num text-3xl font-bold text-[#161616]">$399</span>
                <span className="text-xs font-mono-num text-[#585858]">one-time</span>
              </div>
              <p className="text-xs text-[#585858] font-body leading-relaxed pt-1">
                Best for new businesses that need a professional eCommerce foundation and want to start selling online.
              </p>
            </div>

            {/* Deliverables */}
            <div className="space-y-4 text-xs text-[#303030]">
              <div className="space-y-1">
                <span className="font-display font-bold text-[#161616] block">Store Setup &amp; Design:</span>
                <ul className="space-y-1 text-[#585858] pl-2 border-l border-[#E0DDDB]">
                  <li>• Shopify or WooCommerce store setup</li>
                  <li>• Professional storefront layout</li>
                  <li>• Theme setup and customization</li>
                  <li>• Mobile-responsive design</li>
                  <li>• Navigation and menu structure</li>
                  <li>• Collections / categories</li>
                </ul>
              </div>

              <div className="space-y-1">
                <span className="font-display font-bold text-[#161616] block">Products:</span>
                <ul className="space-y-1 text-[#585858] pl-2 border-l border-[#E0DDDB]">
                  <li>• Up to 50 products upload/import</li>
                  <li>• Product titles and descriptions</li>
                  <li>• Pricing and variants</li>
                  <li>• Product categorization</li>
                  <li>• Basic product image organization</li>
                </ul>
              </div>

              <div className="space-y-1">
                <span className="font-display font-bold text-[#161616] block">Store Configuration:</span>
                <ul className="space-y-1 text-[#585858] pl-2 border-l border-[#E0DDDB]">
                  <li>• Payment gateway &amp; checkout setup</li>
                  <li>• Shipping configuration</li>
                  <li>• Tax configuration guidance</li>
                  <li>• Domain connection &amp; SSL setup</li>
                </ul>
              </div>

              <div className="space-y-1">
                <span className="font-display font-bold text-[#161616] block">Essential Pages &amp; SEO:</span>
                <ul className="space-y-1 text-[#585858] pl-2 border-l border-[#E0DDDB]">
                  <li>• Home, Shop, About, Contact, FAQ</li>
                  <li>• Shipping, Returns, Privacy &amp; Terms</li>
                  <li>• Basic on-page SEO &amp; metadata</li>
                  <li>• Checkout &amp; mobile QA testing</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#E0DDDB]">
            <ServiceProjectModalTrigger label="Start with eCommerce Launch — $399" />
          </div>
        </div>

        {/* PACKAGE 2: GROWTH ($799) */}
        <div
          id="growth"
          className="rounded-3xl bg-white border-2 border-[#9F8BE7] p-7 space-y-6 flex flex-col justify-between shadow-lg relative"
        >
          <div className="space-y-5">
            <div className="space-y-2 border-b border-[#E0DDDB] pb-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono-num font-bold text-[#9F8BE7] uppercase tracking-wider block">
                  RECOMMENDED FOR SCALING
                </span>
                <span className="text-[10px] font-mono-num font-bold px-2 py-0.5 rounded-full bg-[#9F8BE7]/15 text-[#9F8BE7]">
                  Supplier Ready
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold text-[#161616]">
                eCommerce Growth
              </h3>
              <div className="flex items-baseline gap-1">
                <span className="font-mono-num text-3xl font-bold text-emerald-600">$799</span>
                <span className="text-xs font-mono-num text-[#585858]">one-time</span>
              </div>
              <p className="text-xs text-[#585858] font-body leading-relaxed pt-1">
                Recommended for businesses that want a stronger storefront, supplier integrations, more products, automation and better growth infrastructure.
              </p>
            </div>

            {/* Everything in Launch Plus */}
            <div className="space-y-4 text-xs text-[#303030]">
              <span className="font-display font-bold text-[#9F8BE7] block uppercase tracking-wider text-[11px]">
                Everything in Launch, Plus:
              </span>

              <div className="space-y-1">
                <span className="font-display font-bold text-[#161616] block">Expanded Catalog:</span>
                <ul className="space-y-1 text-[#585858] pl-2 border-l border-[#9F8BE7]/40">
                  <li>• Up to 100 products</li>
                  <li>• Advanced collection organization &amp; tags</li>
                  <li>• Product variants &amp; filtering setup</li>
                  <li>• Improved benefit-focused copy</li>
                </ul>
              </div>

              <div className="space-y-1">
                <span className="font-display font-bold text-[#161616] block">Dropshipping &amp; Suppliers:</span>
                <ul className="space-y-1 text-[#585858] pl-2 border-l border-[#9F8BE7]/40">
                  <li>• Supplier integration (CJ / Printify / Printful)</li>
                  <li>• Product &amp; inventory synchronization</li>
                  <li>• Fulfillment workflow &amp; shipping config</li>
                </ul>
              </div>

              <div className="space-y-1">
                <span className="font-display font-bold text-[#161616] block">Conversion &amp; Tracking:</span>
                <ul className="space-y-1 text-[#585858] pl-2 border-l border-[#9F8BE7]/40">
                  <li>• Optimized product page structure &amp; trust badges</li>
                  <li>• Upsell &amp; cross-sell recommendations</li>
                  <li>• Google Analytics &amp; Meta Pixel setup</li>
                  <li>• Search Console &amp; performance reporting</li>
                </ul>
              </div>

              <div className="space-y-1">
                <span className="font-display font-bold text-[#161616] block">SEO &amp; Automation:</span>
                <ul className="space-y-1 text-[#585858] pl-2 border-l border-[#9F8BE7]/40">
                  <li>• Stronger eCommerce SEO &amp; internal links</li>
                  <li>• Customer email notifications</li>
                  <li>• Abandoned-cart recovery workflow</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#E0DDDB]">
            <ServiceProjectModalTrigger label="Choose eCommerce Growth — $799" />
          </div>
        </div>

        {/* PACKAGE 3: SCALE ($999) */}
        <div
          id="scale"
          className="rounded-3xl bg-white border border-[#E0DDDB] p-7 space-y-6 flex flex-col justify-between shadow-xs hover:border-[#9F8BE7] transition-all"
        >
          <div className="space-y-5">
            <div className="space-y-2 border-b border-[#E0DDDB] pb-4">
              <span className="text-xs font-mono-num font-bold text-purple-600 uppercase tracking-wider block">
                MULTI-CHANNEL ENTERPRISE
              </span>
              <h3 className="font-display text-2xl font-bold text-[#161616]">
                eCommerce Scale
              </h3>
              <div className="flex items-baseline gap-1">
                <span className="font-mono-num text-3xl font-bold text-[#161616]">$999</span>
                <span className="text-xs font-mono-num text-[#585858]">one-time</span>
              </div>
              <p className="text-xs text-[#585858] font-body leading-relaxed pt-1">
                Best for businesses that want a more advanced eCommerce system designed for larger catalogs, multi-channel selling, automation and marketplace expansion.
              </p>
            </div>

            {/* Everything in Growth Plus */}
            <div className="space-y-4 text-xs text-[#303030]">
              <span className="font-display font-bold text-purple-600 block uppercase tracking-wider text-[11px]">
                Everything in Growth, Plus:
              </span>

              <div className="space-y-1">
                <span className="font-display font-bold text-[#161616] block">Advanced Catalog:</span>
                <ul className="space-y-1 text-[#585858] pl-2 border-l border-purple-300">
                  <li>• Up to 200 products</li>
                  <li>• Advanced collection architecture &amp; filtering</li>
                  <li>• Merchandising &amp; product relationships</li>
                </ul>
              </div>

              <div className="space-y-1">
                <span className="font-display font-bold text-[#161616] block">Multi-Channel Strategy:</span>
                <ul className="space-y-1 text-[#585858] pl-2 border-l border-purple-300">
                  <li>• Support for Shopify, Amazon, Etsy &amp; eBay</li>
                  <li>• Marketplace listing optimization &amp; strategy</li>
                  <li>• Channel requirements alignment</li>
                </ul>
              </div>

              <div className="space-y-1">
                <span className="font-display font-bold text-[#161616] block">Search &amp; AI Visibility:</span>
                <ul className="space-y-1 text-[#585858] pl-2 border-l border-purple-300">
                  <li>• eCommerce SEO audit &amp; structured-data JSON-LD</li>
                  <li>• Internal-linking architecture</li>
                  <li>• AI-search-friendly content structure</li>
                </ul>
              </div>

              <div className="space-y-1">
                <span className="font-display font-bold text-[#161616] block">Growth Readiness:</span>
                <ul className="space-y-1 text-[#585858] pl-2 border-l border-purple-300">
                  <li>• Google Merchant Center &amp; Meta catalog readiness</li>
                  <li>• Advanced CRM &amp; email marketing setup</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#E0DDDB]">
            <ServiceProjectModalTrigger label="Build Your eCommerce Scale System — $999" />
          </div>
        </div>
      </section>

      {/* 3. FEATURE COMPARISON MATRIX */}
      <section className="space-y-8 pt-8 border-t border-[#E0DDDB]">
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-mono-num font-bold text-[#9F8BE7] uppercase tracking-wider block">
            DETAILED FEATURE COMPARISON
          </span>
          <h2 className="font-display text-3xl font-bold text-[#161616]">
            Compare Package Deliverables Side by Side
          </h2>
        </div>

        {/* Mobile Stacked Feature Cards (< 640px) */}
        <div className="block sm:hidden space-y-4">
          {comparisonFeatures.map((row) => (
            <div key={row.feature} className="p-4 rounded-2xl bg-white border border-[#E0DDDB] space-y-3 shadow-2xs">
              <div className="font-display font-bold text-sm text-[#161616] border-b border-[#E0DDDB] pb-2">
                {row.feature}
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono-num">
                <div className="p-2 rounded-xl bg-[#FAF7F6]">
                  <span className="text-[10px] text-[#585858] block mb-1">Launch</span>
                  {typeof row.launch === "boolean" ? (
                    row.launch ? <CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto" /> : <X className="w-4 h-4 text-[#ACACAC] mx-auto" />
                  ) : (
                    <span className="font-bold text-[#161616]">{row.launch}</span>
                  )}
                </div>

                <div className="p-2 rounded-xl bg-[#9F8BE7]/15">
                  <span className="text-[10px] text-[#9F8BE7] font-bold block mb-1">Growth</span>
                  {typeof row.growth === "boolean" ? (
                    row.growth ? <CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto" /> : <X className="w-4 h-4 text-[#ACACAC] mx-auto" />
                  ) : (
                    <span className="font-bold text-[#161616]">{row.growth}</span>
                  )}
                </div>

                <div className="p-2 rounded-xl bg-[#FAF7F6]">
                  <span className="text-[10px] text-[#585858] block mb-1">Scale</span>
                  {typeof row.scale === "boolean" ? (
                    row.scale ? <CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto" /> : <X className="w-4 h-4 text-[#ACACAC] mx-auto" />
                  ) : (
                    <span className="font-bold text-[#161616]">{row.scale}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Responsive Desktop Table (>= 640px) */}
        <div className="hidden sm:block overflow-x-auto rounded-3xl border border-[#E0DDDB] bg-white shadow-xs">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-[#E0DDDB] bg-[#FAF7F6] text-xs font-display font-bold text-[#161616]">
                <th className="p-4 sm:p-5">Feature Deliverable</th>
                <th className="p-4 sm:p-5 text-center w-36">Launch ($399)</th>
                <th className="p-4 sm:p-5 text-center w-36 bg-[#9F8BE7]/10 text-[#9F8BE7]">Growth ($799)</th>
                <th className="p-4 sm:p-5 text-center w-36">Scale ($999)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E0DDDB] text-xs text-[#303030]">
              {comparisonFeatures.map((row) => (
                <tr key={row.feature} className="hover:bg-[#FAF7F6]/60 transition-colors">
                  <td className="p-4 sm:p-5 font-medium text-[#161616]">{row.feature}</td>
                  <td className="p-4 sm:p-5 text-center font-mono-num">
                    {typeof row.launch === "boolean" ? (
                      row.launch ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-[#ACACAC] mx-auto" />
                      )
                    ) : (
                      <span className="font-bold text-[#161616]">{row.launch}</span>
                    )}
                  </td>
                  <td className="p-4 sm:p-5 text-center font-mono-num bg-[#9F8BE7]/5">
                    {typeof row.growth === "boolean" ? (
                      row.growth ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-[#ACACAC] mx-auto" />
                      )
                    ) : (
                      <span className="font-bold text-[#161616]">{row.growth}</span>
                    )}
                  </td>
                  <td className="p-4 sm:p-5 text-center font-mono-num">
                    {typeof row.scale === "boolean" ? (
                      row.scale ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-[#ACACAC] mx-auto" />
                      )
                    ) : (
                      <span className="font-bold text-[#161616]">{row.scale}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. MARKETPLACE ADD-ONS */}
      <section className="p-8 sm:p-10 rounded-3xl bg-[#FAF7F6] border border-[#E0DDDB] space-y-6 shadow-xs">
        <div className="space-y-2">
          <span className="text-xs font-mono-num font-bold text-[#9F8BE7] uppercase tracking-wider block">
            CUSTOM EXPANSION
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#161616]">
            Marketplace Add-ons &amp; Custom Scope
          </h2>
          <p className="text-xs sm:text-sm text-[#585858]">
            Expand beyond your core storefront into dedicated marketplace channels.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-[#E0DDDB] space-y-2 shadow-2xs">
            <CommercePlatformIcon3D platform="amazon" size="sm" />
            <h4 className="font-display text-sm font-bold text-[#161616]">Amazon Store &amp; Listings</h4>
            <p className="text-xs text-[#585858] leading-relaxed">
              Marketplace setup, product organization, listing content, keyword optimization and storefront support.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#E0DDDB] space-y-2 shadow-2xs">
            <CommercePlatformIcon3D platform="etsy" size="sm" />
            <h4 className="font-display text-sm font-bold text-[#161616]">Etsy Shop Optimization</h4>
            <p className="text-xs text-[#585858] leading-relaxed">
              Shop branding, 13-tag Etsy SEO, titles, tags, categories and product listing copywriting.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#E0DDDB] space-y-2 shadow-2xs">
            <CommercePlatformIcon3D platform="ebay" size="sm" />
            <h4 className="font-display text-sm font-bold text-[#161616]">eBay Store Optimization</h4>
            <p className="text-xs text-[#585858] leading-relaxed">
              Store organization, categories, item specifics, listings and marketplace structure.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#E0DDDB] space-y-2 shadow-2xs">
            <CommercePlatformIcon3D platform="shopify" size="sm" />
            <h4 className="font-display text-sm font-bold text-[#161616]">Multi-Channel Sync</h4>
            <p className="text-xs text-[#585858] leading-relaxed">
              Strategy and integrations for businesses selling through their storefront and multiple marketplaces.
            </p>
          </div>
        </div>

        <div className="pt-2 text-center">
          <ServiceProjectModalTrigger label="Request a Multi-Channel Quote" />
        </div>
      </section>

      {/* 5. PACKAGE EXCLUSIONS */}
      <section className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E0DDDB] space-y-4 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-mono-num font-bold text-[#161616]">
          <ShieldAlert className="w-4 h-4 text-amber-600" />
          <span>PACKAGE EXCLUSIONS &amp; PLATFORM POLICIES</span>
        </div>
        <p className="text-xs text-[#585858] leading-relaxed">
          Third-party subscription fees, marketplace seller fees, Shopify subscription fees, advertising budgets, premium themes/apps, inventory purchases, shipping/fulfillment charges, supplier charges and other third-party expenses are separate unless specifically included in a written proposal.
        </p>
        <p className="text-xs text-[#585858] leading-relaxed">
          Marketplace approval remains subject to each platform's eligibility, verification, product and seller policies. Unified Branding Experts does not control third-party platform seller approvals.
        </p>
      </section>

      {/* 6. PACKAGE FAQS */}
      <section className="space-y-8 pt-8 border-t border-[#E0DDDB]">
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-mono-num font-bold text-[#9F8BE7] uppercase tracking-wider block">
            PACKAGE QUESTIONS
          </span>
          <h2 className="font-display text-3xl font-bold text-[#161616]">
            Commercial Package FAQs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] space-y-2">
            <h3 className="font-display text-base font-bold text-[#161616]">
              Which package should I choose?
            </h3>
            <p className="text-xs text-[#585858] leading-relaxed">
              Launch is appropriate for businesses needing a core storefront foundation. Growth is designed for businesses requiring larger catalogs, supplier integrations and stronger optimization. Scale is intended for businesses preparing for larger catalogs and multi-channel expansion.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] space-y-2">
            <h3 className="font-display text-base font-bold text-[#161616]">
              Can I upgrade later?
            </h3>
            <p className="text-xs text-[#585858] leading-relaxed">
              Yes. Businesses can begin with a smaller package and expand into additional products, integrations, marketplaces, SEO or marketing later.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] space-y-2">
            <h3 className="font-display text-base font-bold text-[#161616]">
              Are Shopify monthly fees included?
            </h3>
            <p className="text-xs text-[#585858] leading-relaxed">
              No. Shopify subscriptions and other third-party platform costs are paid separately.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] space-y-2">
            <h3 className="font-display text-base font-bold text-[#161616]">
              Is advertising included?
            </h3>
            <p className="text-xs text-[#585858] leading-relaxed">
              Paid advertising management and advertising spend are not automatically included unless explicitly stated in the selected proposal.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] space-y-2 col-span-1 md:col-span-2">
            <h3 className="font-display text-base font-bold text-[#161616]">
              Do you guarantee sales?
            </h3>
            <p className="text-xs text-[#585858] leading-relaxed">
              No. Sales and ROI depend on numerous factors including product demand, pricing, competition, audience, traffic and marketing. UBE builds and optimizes the technical, content and conversion foundation.
            </p>
          </div>
        </div>
      </section>

      {/* 7. FINAL PACKAGE CTA */}
      <section className="p-8 sm:p-14 rounded-3xl bg-[#161616] text-white text-center space-y-6 shadow-xl border border-white/10">
        <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Not Sure Which eCommerce Package Fits Your Business?
        </h2>
        <p className="text-sm sm:text-base text-[#ACACAC] max-w-xl mx-auto">
          Tell us what you're selling, where you currently sell and where you want to grow. We'll help determine the most appropriate platform and starting package.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <ServiceProjectModalTrigger label="Start Your eCommerce Project" />
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-display font-bold text-sm transition-all"
          >
            Talk With Our Team
          </Link>
        </div>
      </section>
    </main>
  );
}
