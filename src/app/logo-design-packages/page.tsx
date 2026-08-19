import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Sparkles, Check, ArrowUpRight, ShieldCheck, Palette, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Logo Design Packages & Pricing | Custom Brand Mark Plans",
  description:
    "Explore transparent custom logo design packages. 100% original vector concepts, unlimited revisions on chosen mark, full copyright ownership, and complete brand style guides.",
  alternates: {
    canonical: "https://unifiedbrandingexperts.com/logo-design-packages",
  },
  openGraph: {
    title: "Logo Design Packages & Pricing | Custom Brand Mark Plans",
    description:
      "Explore transparent custom logo design packages. 100% original vector concepts, full copyright ownership.",
    url: "https://unifiedbrandingexperts.com/logo-design-packages",
    images: [
      {
        url: "https://unifiedbrandingexperts.com/images/projects/project-brand-1.webp",
        width: 1200,
        height: 630,
        alt: "Logo Design Packages by Unified Branding Experts",
      },
    ],
  },
};

export default function LogoDesignPackagesPage() {
  const tiers = [
    {
      name: "Logo Essentials",
      price: "$299",
      period: "one-time",
      badge: "STARTUP LAUNCH",
      desc: "Perfect for new businesses that need a clean, professional vector logo to launch with credibility.",
      features: [
        "2 Custom Logo Concepts",
        "Unlimited Revisions on Chosen Concept",
        "Full Vector Formats (AI, EPS, SVG, PNG)",
        "High-Resolution Print & Web Files",
        "Color Palette & Font Pairing Recommendations",
        "100% Full Copyright Ownership",
        "48 to 72 Hours Turnaround",
      ],
      popular: false,
    },
    {
      name: "Brand Starter",
      price: "$599",
      period: "one-time",
      badge: "MOST POPULAR",
      desc: "A complete visual identity system that establishes a recognizable presence across digital and social platforms.",
      features: [
        "4 Custom Logo Concepts",
        "Unlimited Revisions on Selected Concept",
        "Full Brand Identity Guide (PDF)",
        "Social Media Profile & Banner Kit (5 Assets)",
        "Business Card & Letterhead Stationery Design",
        "Favicon & App Icon Formats",
        "Complete Vector Source Files (AI, EPS, SVG, PNG)",
        "100% Ownership & Copyright Transfer",
      ],
      popular: true,
    },
    {
      name: "Brand Identity Suite",
      price: "$1,199",
      period: "one-time",
      badge: "ESTABLISHED BUSINESSES",
      desc: "A comprehensive brand strategy and visual system for companies scaling into competitive markets.",
      features: [
        "6 Custom Logo Concepts by Senior Directors",
        "Extensive Brand Guidelines & Tone of Voice Rules",
        "Complete Marketing Collateral Pack",
        "Email Signature & Digital Asset Templates",
        "Iconography & Pattern System",
        "Packaging & Merchandise Print Templates",
        "Priority 48-Hour Iteration Turnaround",
        "100% Full Ownership Transfer",
      ],
      popular: false,
    },
    {
      name: "Full Brand System",
      price: "$2,499",
      period: "one-time",
      badge: "ENTERPRISE TRANSFORMATION",
      desc: "An enterprise-grade brand ecosystem encompassing multi-platform design, 3D motion marks, and design system governance.",
      features: [
        "Full Brand Strategy & Market Positioning Audit",
        "Unlimited Custom Logo Concept Explorations",
        "Complete Multi-Platform Design System (Figma)",
        "Animated 3D Logo Stinger / Motion Graphics",
        "Full Omnichannel Marketing Collateral Suite",
        "Brand Style Governance & Asset Management",
        "Dedicated Senior Creative Director Lead",
        "100% Intellectual Property & Source Handoff",
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
          <span>TRANSPARENT LOGO DESIGN TIERS</span>
        </div>
        <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#161616] leading-tight">
          Logo Design Packages &amp; Pricing
        </h1>
        <p className="text-base sm:text-lg text-[#585858] font-body leading-relaxed">
          No hidden fees, no stock templates. Every package delivers 100% original, custom vector logos with full copyright ownership and all source files included.
        </p>
      </div>

      {/* 2. Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                Most Popular
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
                href={`/contact?type=logo&tier=${encodeURIComponent(tier.name)}`}
                className={`w-full py-3 rounded-full font-display font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  tier.popular
                    ? "bg-[#9F8BE7] text-[#161616] hover:bg-[#b4a3f7] shadow-[0_4px_15px_rgba(159,139,231,0.35)]"
                    : "bg-[#161616] text-white hover:bg-[#303030]"
                }`}
              >
                <span>Get Started with {tier.name}</span>
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
          <h4 className="font-display font-bold text-sm text-[#161616]">100% Full Ownership</h4>
          <p className="text-xs text-[#585858]">All intellectual property rights transferred upon delivery.</p>
        </div>
        <div className="space-y-1">
          <Palette className="w-6 h-6 text-[#9F8BE7] mx-auto" />
          <h4 className="font-display font-bold text-sm text-[#161616]">Original Custom Vector</h4>
          <p className="text-xs text-[#585858]">Crafted by human designers, never generic stock icons.</p>
        </div>
        <div className="space-y-1">
          <Sparkles className="w-6 h-6 text-[#DDF160] mx-auto" />
          <h4 className="font-display font-bold text-sm text-[#161616]">Satisfaction Guaranteed</h4>
          <p className="text-xs text-[#585858]">Unlimited revisions until you love your selected concept.</p>
        </div>
      </div>
    </div>
  );
}
