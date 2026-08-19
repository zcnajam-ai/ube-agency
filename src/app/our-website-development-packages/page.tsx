import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Sparkles, Check, ArrowUpRight, ShieldCheck, Code2, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Website Development Packages & Pricing | Full-Stack & CMS Plans | Unified Branding Experts",
  description:
    "Explore our website development packages. From 3-page CMS websites ($300) to 8-10 page dynamic standard builds ($649) and enterprise platforms ($1,200).",
  alternates: {
    canonical: "/our-website-development-packages",
  },
};

export default function OurWebsiteDevelopmentPackagesPage() {
  const tiers = [
    {
      name: "Basic Website Dev",
      price: "$300",
      period: "one-time",
      badge: "CMS LAUNCH",
      desc: "Fast, reliable 3-page CMS website setup with full responsive mobile design and SEO submission.",
      features: [
        "3 Pages Website Development",
        "Content Management System [WordPress/Next.js]",
        "3 Stock Images & 3 Banner Designs",
        "Mobile Responsive & Cross-Browser Tested",
        "Search Engine Submission to Google & Bing",
        "Complete W3C Certified Clean Code",
        "48 to 72 Hours Turnaround",
        "3 Rounds of Revisions",
        "100% Ownership Rights",
      ],
      popular: false,
    },
    {
      name: "Standard Website Dev",
      price: "$649",
      period: "one-time",
      badge: "MOST POPULAR",
      desc: "Comprehensive 8-10 page dynamic website with admin panel support, speed optimization, and social integration.",
      features: [
        "8 to 10 Unique Pages Development",
        "Full CMS / Admin Panel Integration",
        "8 Stock Images & 5 Banner Designs",
        "1 JQuery/GSAP Animated Slider Banner",
        "Free Google-Friendly XML Sitemap",
        "Facebook & Instagram Page Creations",
        "Speed Optimization & Clean Markup",
        "Complete Deployment on Your Host",
        "100% Satisfaction & Ownership Guarantee",
      ],
      popular: true,
    },
    {
      name: "Enterprise Website Dev",
      price: "$1,200",
      period: "one-time",
      badge: "FULL-STACK CUSTOM",
      desc: "High-performance 10-15 page platform with custom lead capturing forms, online appointment booking, and payment processing.",
      features: [
        "10 to 15 Unique Pages Development",
        "Conceptual & Dynamic Web Architecture",
        "Online Booking / Reservation System (Optional)",
        "Online Payment Gateway Integration (Optional)",
        "Custom Lead Capturing Workflows",
        "Interactive UI Micro-Interactions",
        "Newsletter Subscription & Newsfeed Integration",
        "Dedicated Developer & Project Manager Team",
        "After-Sales Technical Support & Documentation",
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
          <span>FULL-STACK DEVELOPMENT PACKAGES</span>
        </div>
        <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#161616] leading-tight">
          Our Website Development Packages
        </h1>
        <p className="text-base sm:text-lg text-[#585858] font-body leading-relaxed">
          Clean, modern web engineering with sub-second speeds and intuitive CMS controls. Fixed pricing with zero ongoing agency lock-ins.
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
                Top Value
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
                href={`/contact?type=web-dev&tier=${encodeURIComponent(tier.name)}`}
                className={`w-full py-3 rounded-full font-display font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  tier.popular
                    ? "bg-[#9F8BE7] text-[#161616] hover:bg-[#b4a3f7] shadow-[0_4px_15px_rgba(159,139,231,0.35)]"
                    : "bg-[#161616] text-white hover:bg-[#303030]"
                }`}
              >
                <span>Choose {tier.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Value Added Services */}
      <div className="p-8 rounded-3xl bg-[#FAF7F6] border border-[#E0DDDB] grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div className="space-y-1">
          <ShieldCheck className="w-6 h-6 text-emerald-600 mx-auto" />
          <h4 className="font-display font-bold text-sm text-[#161616]">Full Source Code Ownership</h4>
          <p className="text-xs text-[#585858]">You own the repository, database, and all deployment files.</p>
        </div>
        <div className="space-y-1">
          <Code2 className="w-6 h-6 text-[#9F8BE7] mx-auto" />
          <h4 className="font-display font-bold text-sm text-[#161616]">Clean W3C Architecture</h4>
          <p className="text-xs text-[#585858]">Engineered without unnecessary plugins for sub-second speeds.</p>
        </div>
        <div className="space-y-1">
          <Sparkles className="w-6 h-6 text-[#DDF160] mx-auto" />
          <h4 className="font-display font-bold text-sm text-[#161616]">After-Sales Tech Support</h4>
          <p className="text-xs text-[#585858]">Dedicated onboarding walkthrough and post-launch support.</p>
        </div>
      </div>
    </div>
  );
}
