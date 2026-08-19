import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Sparkles, Check, ArrowUpRight, ShieldCheck, Layout, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Web Design Packages & Pricing | Responsive UI/UX Plans | Unified Branding Experts",
  description:
    "Explore transparent web design packages. From 3-page starter websites ($300) to 8-10 page standard sites ($649) and enterprise custom platforms ($1,200).",
  alternates: {
    canonical: "/web-design-packages",
  },
};

export default function WebDesignPackagesPage() {
  const tiers = [
    {
      name: "Basic Web Design",
      price: "$300",
      period: "one-time",
      badge: "STARTER PRESENCE",
      desc: "An informative, responsive website engineered for clean presentation and immediate brand credibility.",
      features: [
        "Up to 3 Unique Pages Website",
        "100% Mobile Responsive Layout",
        "3 Stock Photos Included",
        "3 Custom Banner Designs",
        "Social Media Links Integration",
        "Complete W3C Certified HTML",
        "Search Engine Submission",
        "48 to 72 Hours Turnaround",
        "100% Ownership Rights",
      ],
      popular: false,
    },
    {
      name: "Standard Web Design",
      price: "$649",
      period: "one-time",
      badge: "MOST POPULAR",
      desc: "A comprehensive multi-page website designed to showcase your complete services and capture inbound leads.",
      features: [
        "8 to 10 Unique Pages Website",
        "CMS / Admin Panel Support",
        "8 Stock Photos & 5 Banner Designs",
        "1 JQuery Slider Banner",
        "Mobile Responsive & Cross-Browser Tested",
        "FREE Google Friendly Sitemap",
        "Facebook & Instagram Page Creations",
        "On-Page SEO Structure Setup",
        "Complete Deployment & 100% Ownership",
      ],
      popular: true,
    },
    {
      name: "Enterprise Web Design",
      price: "$1,200",
      period: "one-time",
      badge: "FULL COMMERCIAL SYSTEM",
      desc: "A dynamic, high-performance web platform with custom form workflows, striking hover effects, and interactive UI.",
      features: [
        "Up to 10-15 Unique Pages Website",
        "Conceptual & Dynamic UI/UX Architecture",
        "Online Reservation / Appointment Tool (Optional)",
        "Online Payment Gateway Integration (Optional)",
        "Custom Lead Capturing Forms",
        "Striking Micro-Interactions & Hover Effects",
        "Newsletter & Newsfeed Integration",
        "Dedicated Team of Designers & Developers",
        "Dedicated Accounts Manager & Ongoing Support",
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
          <span>TRANSPARENT WEB DESIGN PRICING</span>
        </div>
        <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#161616] leading-tight">
          Web Design Packages &amp; Pricing
        </h1>
        <p className="text-base sm:text-lg text-[#585858] font-body leading-relaxed">
          Affordable, transparent fixed pricing for modern responsive websites. No hidden monthly platform lock-ins—you own 100% of your website.
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
                Recommended Choice
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
                href={`/contact?type=web-design&tier=${encodeURIComponent(tier.name)}`}
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

      {/* 3. Value Added Services */}
      <div className="p-8 rounded-3xl bg-[#FAF7F6] border border-[#E0DDDB] grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div className="space-y-1">
          <ShieldCheck className="w-6 h-6 text-emerald-600 mx-auto" />
          <h4 className="font-display font-bold text-sm text-[#161616]">100% Unique Design</h4>
          <p className="text-xs text-[#585858]">Custom UI/UX crafted specifically for your industry and brand.</p>
        </div>
        <div className="space-y-1">
          <Layout className="w-6 h-6 text-[#9F8BE7] mx-auto" />
          <h4 className="font-display font-bold text-sm text-[#161616]">Fast 48-72h Turnaround</h4>
          <p className="text-xs text-[#585858]">Rapid initial milestone delivery with structured feedback loops.</p>
        </div>
        <div className="space-y-1">
          <Sparkles className="w-6 h-6 text-[#DDF160] mx-auto" />
          <h4 className="font-display font-bold text-sm text-[#161616]">No Hidden Fees</h4>
          <p className="text-xs text-[#585858]">One-time fixed pricing with full ownership of all source assets.</p>
        </div>
      </div>
    </div>
  );
}
