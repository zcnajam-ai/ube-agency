import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Sparkles, Check, ArrowUpRight, ShieldCheck, Cpu, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Web Design & Development Packages | Bespoke Systems & eCommerce",
  description:
    "Explore our custom web design and development packages. Tailor-made web applications, high-volume eCommerce, custom portals, and dynamic architectures starting from $450.",
  alternates: {
    canonical: "https://unifiedbrandingexperts.com/our-custom-web-design-development-packages",
  },
  openGraph: {
    title: "Custom Web Design & Development Packages | Bespoke Systems & eCommerce",
    description:
      "Explore our custom web design and development packages starting from $450.",
    url: "https://unifiedbrandingexperts.com/our-custom-web-design-development-packages",
    images: [
      {
        url: "https://unifiedbrandingexperts.com/images/projects/project-web-1.webp",
        width: 1200,
        height: 630,
        alt: "Custom Web Design Packages - Unified Branding Experts",
      },
    ],
  },
};

export default function OurCustomWebDesignDevelopmentPackagesPage() {
  const tiers = [
    {
      name: "Custom Web Basic",
      price: "$450",
      period: "one-time",
      badge: "CUSTOM STARTER",
      desc: "Conceptual, dynamic custom website or online store with CMS, product search, and payment module integration.",
      features: [
        "Conceptual & Dynamic Web Architecture",
        "Content Management System (CMS)",
        "Mobile Responsive & Cross-Browser Tested",
        "Easy Product Search & Product Reviews",
        "Up to 150 Products / Pages Capacity",
        "Full Shopping Cart & Payment Module Integration",
        "Sales & Inventory Management",
        "JQuery/GSAP Animated Slider",
        "Free Google-Friendly XML Sitemap",
        "Facebook, Twitter & YouTube Page Designs",
        "Dedicated Accounts Manager & 100% Ownership",
      ],
      popular: false,
    },
    {
      name: "Custom Web Standard",
      price: "$700",
      period: "one-time",
      badge: "MOST POPULAR",
      desc: "Expanded dynamic platform designed for up to 300 products or complex service portals with multi-gateway payments.",
      features: [
        "Advanced Conceptual & Dynamic UI/UX Design",
        "CMS with Multi-Admin Role Support",
        "Up to 200-300 Products / Dynamic Records",
        "Up to 15 Product/Service Categories",
        "Full Shopping Cart & Multi-Gateway Integration",
        "Sales, Orders & Inventory Real-Time Sync",
        "Advanced Filtrations & Sorting Options",
        "Social Media Branding Kit (FB, IG, TW, YT)",
        "Search Engine Indexing & Speed Optimization",
        "100% Unique Design & Satisfaction Guarantee",
      ],
      popular: true,
    },
    {
      name: "Custom Web Enterprise",
      price: "$1,400",
      period: "one-time",
      badge: "ENTERPRISE BESPOKE",
      desc: "Tailor-made enterprise web application with high-volume database capacity (500+ items), live chat, wishlist, coupon codes, and custom workflows.",
      features: [
        "100% Tailor-Made UI/UX & Custom Code Architecture",
        "Up to 400-500 Products / Dynamic Content Modules",
        "Unlimited Categories & Multi-Level Filtering",
        "Product Summary Reports (Out of Stock / Sales)",
        "Coupon Code Generation & Discount Engine",
        "Online Payment Gateways & Tax Calculator",
        "Live Chat & Wishlist Integration",
        "10 Custom Banner Designs & 15 Stock Photos",
        "Dedicated Team of Designers and Full-Stack Developers",
        "Complete Source Files & Dedicated Project Lead",
      ],
      popular: false,
    },
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto space-y-20">
      {/* 1. Header */}
      <div className="space-y-4 max-w-3xl border-b border-[#E0DDDB] pb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold shadow-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>CUSTOM WEB &amp; ECOMMERCE PACKAGES</span>
        </div>
        <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#161616] leading-tight">
          Our Custom Web Design &amp; Development Packages
        </h1>
        <p className="text-base sm:text-lg text-[#585858] font-body leading-relaxed">
          Bespoke digital storefronts, portals, and dynamic platforms engineered for high SKU counts, frictionless checkouts, and custom workflows.
        </p>
      </div>

      {/* 2. Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`p-7 rounded-3xl flex flex-col justify-between space-y-6 transition-all duration-300 relative ${
              tier.popular
                ? "bg-[#161616] text-white border-2 border-[#9F8BE7] shadow-xl scale-[1.02]"
                : "bg-white text-[#161616] border border-[#E0DDDB] shadow-xs hover:border-[#9F8BE7]"
            }`}
          >
            {tier.popular && (
              <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-[#9F8BE7] text-[#161616] text-[10px] font-mono-num font-bold uppercase tracking-wider shadow-sm">
                High Value
              </div>
            )}

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span
                  className={`text-[10px] font-mono-num font-bold uppercase tracking-wider ${
                    tier.popular ? "text-[#DDF160]" : "text-[#9F8BE7]"
                  }`}
                >
                  {tier.badge}
                </span>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold">{tier.name}</h3>
                <p
                  className={`text-xs mt-1 leading-relaxed ${
                    tier.popular ? "text-[#ACACAC]" : "text-[#585858]"
                  }`}
                >
                  {tier.desc}
                </p>
              </div>

              <div className="pt-2 pb-3 border-b border-[#E0DDDB]/30">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display text-3xl font-black">{tier.price}</span>
                  <span
                    className={`text-xs font-mono-num ${
                      tier.popular ? "text-[#ACACAC]" : "text-[#585858]"
                    }`}
                  >
                    /{tier.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-2 text-xs">
                {tier.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2">
                    <Check
                      className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                        tier.popular ? "text-[#9F8BE7]" : "text-emerald-600"
                      }`}
                    />
                    <span className={tier.popular ? "text-gray-200" : "text-[#303030]"}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-[#E0DDDB]/30">
              <Link
                href={`/contact?type=custom-web&tier=${encodeURIComponent(tier.name)}`}
                className={`w-full py-3 rounded-full font-display font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  tier.popular
                    ? "bg-[#9F8BE7] text-[#161616] hover:bg-[#b4a3f7] shadow-[0_4px_15px_rgba(159,139,231,0.35)]"
                    : "bg-[#161616] text-white hover:bg-[#303030]"
                }`}
              >
                <span>Select {tier.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Assurance Strip */}
      <div className="p-8 rounded-3xl bg-[#FAF7F6] border border-[#E0DDDB] grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div className="space-y-1">
          <ShieldCheck className="w-6 h-6 text-emerald-600 mx-auto" />
          <h4 className="font-display font-bold text-sm text-[#161616]">100% Ownership Rights</h4>
          <p className="text-xs text-[#585858]">Complete source code, database architecture, and assets handed over.</p>
        </div>
        <div className="space-y-1">
          <Cpu className="w-6 h-6 text-[#9F8BE7] mx-auto" />
          <h4 className="font-display font-bold text-sm text-[#161616]">No Monthly Hidden Fees</h4>
          <p className="text-xs text-[#585858]">Transparent fixed one-time build prices with no unexpected costs.</p>
        </div>
        <div className="space-y-1">
          <Sparkles className="w-6 h-6 text-[#DDF160] mx-auto" />
          <h4 className="font-display font-bold text-sm text-[#161616]">High Conversion Guarantee</h4>
          <p className="text-xs text-[#585858]">Engineered for sub-second speeds and maximum checkout conversion.</p>
        </div>
      </div>
    </div>
  );
}
