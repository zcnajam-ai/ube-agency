import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  CheckCircle2,
  Sparkles,
  Monitor,
  Code,
  Zap,
  ShieldCheck,
} from "lucide-react";
import ServiceProjectModalTrigger from "@/components/services/ServiceProjectModalTrigger";

export const metadata: Metadata = {
  title: "Small Business Web Design Packages & Pricing",
  description:
    "Compare small business web design packages from $300, including responsive design, CMS options, on-page SEO, lead forms and custom development.",
  alternates: {
    canonical: "https://unifiedbrandingexperts.com/web-design-packages",
  },
};

export default function WebDesignPackagesPage() {
  const packages = [
    {
      id: "starter",
      name: "Starter Web Design",
      price: "$300",
      period: "one-time",
      description: "Ideal for startups & small businesses needing a clean, high-converting responsive web presence.",
      highlight: false,
      badge: "Quick Turnaround",
      features: [
        "Up to 3 Custom Designed Pages",
        "Responsive UI/UX Figma Design",
        "3 Custom Graphics & Banners",
        "Contact Form & Lead Notification Setup",
        "Basic On-Page SEO & Google Indexing",
        "Mobile & Tablet Touch Optimization",
        "48 - 72 Hour Delivery",
      ],
    },
    {
      id: "growth",
      name: "Growth Website & CMS",
      price: "$649",
      period: "one-time",
      description: "For expanding brands requiring content management, animations, and search engine authority.",
      highlight: true,
      badge: "Most Popular",
      features: [
        "Up to 8 Custom Designed Pages",
        "CMS Integration (WordPress / Sanity / Next.js)",
        "Custom GSAP & Framer Motion Animations",
        "Blog & Resource Hub Setup",
        "Core Web Vitals & Speed Optimization",
        "Full Schema Markup & AEO Optimization",
        "Social Media & Analytics Integration",
        "1 Week Delivery",
      ],
    },
    {
      id: "scale",
      name: "Scale Business System",
      price: "$1,200",
      period: "one-time",
      description: "Bespoke Next.js web application architecture built for high traffic, speed, and market leadership.",
      highlight: false,
      badge: "Enterprise Ready",
      features: [
        "Up to 15 Custom Application Pages",
        "Full Headless Next.js App Router Architecture",
        "Custom API & Third-Party Integrations",
        "Advanced Interactive Calculators & Components",
        "Comprehensive On-Page AEO & GEO Citation Signals",
        "Dedicated Lead Strategy Lead",
        "Priority Support & Source Code Handover",
        "2 Week Delivery",
      ],
    },
  ];

  const faqs = [
    {
      q: "How much does a small business website cost?",
      a: "UBE's fixed-price website packages currently range from $300 for a three-page starter site to $1,200 for a larger custom business system. Your final cost depends on page count, CMS, integrations, copy, ecommerce requirements, and custom functionality.",
    },
    {
      q: "What is included in a small business web design package?",
      a: "Every package includes responsive design, lead-capture setup, basic on-page SEO, mobile optimization, and source-code ownership. Larger packages add a CMS, blog, animations, structured data, speed work, and custom integrations.",
    },
    {
      q: "Are domain, hosting, maintenance, and third-party fees included?",
      a: "Not unless they are listed in your proposal. Domain registration, hosting, premium plugins, paid APIs, ongoing maintenance, and third-party subscriptions are scoped separately so the project price remains transparent.",
    },
    {
      q: "Which website package is best for a growing business?",
      a: "The $649 Growth Website & CMS package is the usual fit when you need editable pages, a blog, analytics, schema, and speed optimization. Choose the Starter package for a smaller brochure site or Scale when integrations and application features are required.",
    },
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto space-y-20">
      {/* 1. Header Section */}
      <section className="text-center space-y-5 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold shadow-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>TRANSPARENT WEB PACKAGES</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#161616]">
          Web Design &amp; Development Packages
        </h1>

        <p className="text-sm sm:text-base text-[#585858] font-body leading-relaxed max-w-2xl mx-auto">
          Choose a web engineering package engineered for speed, conversion, and long-term scalability. Every plan includes 100% full source code ownership with zero hidden fees.
        </p>
      </section>

      {/* Direct pricing answer based on Search Console demand */}
      <section className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E0DDDB] shadow-xs space-y-4">
        <span className="text-xs font-mono-num text-[#9F8BE7] font-bold uppercase tracking-wider block">
          SMALL BUSINESS WEBSITE COST
        </span>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#161616]">
          How Much Does a Small Business Website Cost?
        </h2>
        <p className="text-sm sm:text-base text-[#585858] font-body leading-relaxed max-w-4xl">
          A small business website with UBE starts at $300 for a focused three-page site. An editable CMS website starts at $649, while a custom business platform starts at $1,200. The right budget depends on content, page count, integrations, ecommerce, and ongoing support—not just the visual design.
        </p>
        <Link href="/insights/how-much-does-a-small-business-website-cost" className="inline-flex text-sm font-semibold text-[#6B46C1] underline underline-offset-4">
          Read the complete small business website cost guide
        </Link>
      </section>

      {/* 2. Package Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`rounded-3xl p-7 space-y-6 flex flex-col justify-between transition-all duration-300 relative ${
              pkg.highlight
                ? "bg-[#161616] text-white border-2 border-[#9F8BE7] shadow-xl scale-102"
                : "bg-white text-[#161616] border border-[#E0DDDB] shadow-xs hover:border-[#9F8BE7]"
            }`}
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-[#E0DDDB]/30 pb-4">
                <span
                  className={`text-[10px] font-mono-num font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                    pkg.highlight
                      ? "bg-[#9F8BE7] text-[#161616]"
                      : "bg-[#FAF7F6] text-[#585858] border border-[#E0DDDB]"
                  }`}
                >
                  {pkg.badge}
                </span>
                <span className={`text-xs font-mono-num font-bold ${pkg.highlight ? "text-[#9F8BE7]" : "text-emerald-600"}`}>
                  Fixed Price
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold">{pkg.name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold tracking-tight">{pkg.price}</span>
                  <span className={`text-xs font-mono-num ${pkg.highlight ? "text-[#ACACAC]" : "text-[#585858]"}`}>
                    /{pkg.period}
                  </span>
                </div>
                <p className={`text-xs mt-3 leading-relaxed ${pkg.highlight ? "text-[#ACACAC]" : "text-[#585858]"}`}>
                  {pkg.description}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-[#E0DDDB]/30">
                <span className={`text-[11px] font-mono-num uppercase tracking-wider font-bold block ${pkg.highlight ? "text-[#9F8BE7]" : "text-[#161616]"}`}>
                  Included Deliverables:
                </span>
                <ul className="space-y-2.5 text-xs">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${pkg.highlight ? "text-[#9F8BE7]" : "text-emerald-600"}`} />
                      <span className={pkg.highlight ? "text-[#E0DDDB]" : "text-[#303030]"}>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6">
              <ServiceProjectModalTrigger
                service={`Web Design & Dev - ${pkg.name}`}
                label={`Select ${pkg.name}`}
                className={`w-full py-3.5 rounded-full font-display text-xs font-bold transition-all shadow-xs text-center justify-center ${
                  pkg.highlight
                    ? "bg-[#9F8BE7] text-[#161616] hover:bg-[#b4a3f7]"
                    : "bg-[#161616] text-white hover:bg-black"
                }`}
              />
            </div>
          </div>
        ))}
      </section>

      {/* 3. Included Core Standards */}
      <section className="p-8 sm:p-10 rounded-3xl bg-[#FAF7F6] border border-[#E0DDDB] space-y-8 shadow-xs">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono-num text-[#9F8BE7] font-bold uppercase tracking-wider block">
            BUILT-IN ENGINEERING STANDARDS
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#161616]">
            Every Web Package Includes as Standard
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-2xl bg-white border border-[#E0DDDB] space-y-2">
            <Monitor className="w-6 h-6 text-[#9F8BE7]" />
            <h4 className="font-display font-bold text-sm text-[#161616]">100% Mobile Responsive</h4>
            <p className="text-xs text-[#585858]">Tested across 320px to 1440px+ viewports with zero horizontal overflow.</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#E0DDDB] space-y-2">
            <Code className="w-6 h-6 text-emerald-600" />
            <h4 className="font-display font-bold text-sm text-[#161616]">Full Source Code Ownership</h4>
            <p className="text-xs text-[#585858]">You own all code, assets, repository access, and domain configurations.</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#E0DDDB] space-y-2">
            <Zap className="w-6 h-6 text-purple-600" />
            <h4 className="font-display font-bold text-sm text-[#161616]">Sub-Second Speed Performance</h4>
            <p className="text-xs text-[#585858]">Optimized Core Web Vitals, lightweight assets, and fast CDN delivery.</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#E0DDDB] space-y-2">
            <ShieldCheck className="w-6 h-6 text-blue-600" />
            <h4 className="font-display font-bold text-sm text-[#161616]">Security &amp; SSL Hardening</h4>
            <p className="text-xs text-[#585858]">HTTPS security headers, API protections, and sanitized form submissions.</p>
          </div>
        </div>
      </section>

      {/* 4. Pricing FAQs */}
      <section className="space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-mono-num text-[#9F8BE7] font-bold uppercase tracking-wider block">PACKAGE QUESTIONS</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#161616]">Website Pricing FAQs</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq) => (
            <article key={faq.q} className="p-6 rounded-3xl bg-white border border-[#E0DDDB] space-y-2 shadow-xs">
              <h3 className="font-display text-base font-bold text-[#161616]">{faq.q}</h3>
              <p className="text-xs sm:text-sm text-[#585858] leading-relaxed">{faq.a}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 5. Bottom Conversion Banner */}
      <section className="p-8 sm:p-12 rounded-3xl bg-[#161616] text-white text-center space-y-6 shadow-xl">
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
          Ready to Start Your Website Project?
        </h2>
        <p className="text-sm text-[#ACACAC] max-w-lg mx-auto">
          Connect with our Senior Strategy Director to review your specifications and select the right web package for your goals.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <ServiceProjectModalTrigger
            service="Web Design & Development"
            label="Start Your Web Project"
            className="px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-md"
          />
          <Link
            href="/services/web-design-development"
            className="px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-display font-bold text-sm transition-all"
          >
            Explore Web Services Overview
          </Link>
        </div>
      </section>
    </div>
  );
}
