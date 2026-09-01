import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Check,
  Sparkles,
  ArrowUpRight,
  ArrowLeft,
  Bot,
  Cpu,
  Workflow,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "AI Automation Packages & Pricing | Workflow & Chatbot Plans",
  description:
    "Compare AI automation packages built for every stage, from a one-time audit to a full-scale build. Workflow automation, CRM setups, AI chatbots, and integrations. Starting at $349.",
  alternates: {
    canonical: "https://unifiedbrandingexperts.com/ai-automation-packages",
  },
  openGraph: {
    title: "AI Automation Packages & Pricing | Workflow & Chatbot Plans",
    description:
      "Compare AI automation packages built for every stage, from a one-time audit to a full-scale build. Starting at $349.",
    url: "https://unifiedbrandingexperts.com/ai-automation-packages",
    images: [
      {
        url: "https://unifiedbrandingexperts.com/og-default.png",
        width: 1200,
        height: 630,
        alt: "AI Automation Packages by Unified Branding Experts",
      },
    ],
  },
};

export default function AiAutomationPackagesPage() {
  const packages = [
    {
      id: "automation-audit",
      name: "Automation Audit",
      bestFor: "Best for businesses testing the water",
      tagline: "See exactly where automation pays off before you build a thing.",
      price: "$349",
      pricePeriod: "one-time",
      popular: false,
      deliverables: [
        "Full review of your current tools and workflows",
        "Time-drain analysis across sales, marketing, and operations",
        "Automation opportunity map, ranked by impact",
        "Tool and integration compatibility check",
        "Quick-win recommendations you can act on right away",
        "Prioritized action report",
        "One 30-minute findings walkthrough",
      ],
    },
    {
      id: "automation-starter",
      name: "Automation Starter",
      bestFor: "Best for small teams making their first move",
      tagline: "Put your CRM and follow-ups on autopilot.",
      price: "$749",
      pricePeriod: "/month",
      popular: false,
      deliverables: [
        "Everything in the Audit",
        "CRM automation (lead capture, tagging, pipeline stages)",
        "1 connected tool integration",
        "Basic workflow automation (up to 3 workflows)",
        "Automated email follow-up sequence",
        "Testing and go-live",
        "Team walkthrough on what's running",
        "1 support check-in per month",
      ],
    },
    {
      id: "automation-growth",
      name: "Automation Growth",
      bestFor: "Best for growing businesses connecting their tools",
      tagline: "Get your systems talking, and let a chatbot answer for you.",
      price: "$1,499",
      pricePeriod: "/month",
      popular: true,
      deliverables: [
        "Everything in Starter",
        "Multi-system automation (up to 8 workflows)",
        "Up to 4 connected tool integrations",
        "AI chatbot setup for FAQs and lead qualification",
        "Lead nurturing automation with branching logic",
        "Automated data syncing between apps",
        "Monthly performance report",
        "2 support check-ins per month",
      ],
    },
    {
      id: "automation-advanced",
      name: "Automation Advanced",
      bestFor: "Best for established businesses running on their systems",
      tagline: "Automate the full engine, then see exactly how it performs.",
      price: "$2,999",
      pricePeriod: "/month",
      popular: false,
      deliverables: [
        "Everything in Growth",
        "Full-stack automation across tech stack (up to 20 workflows)",
        "Unlimited core tool integrations",
        "Advanced AI chatbot with routing and handoffs",
        "Process automation (onboarding, approvals, internal handoffs)",
        "Automated reporting and dashboards",
        "Ongoing monitoring and workflow tuning",
        "Bi-weekly reporting and a dedicated specialist",
      ],
    },
    {
      id: "automation-enterprise",
      name: "Automation Enterprise",
      bestFor: "Best for full-scale, multi-department automation",
      tagline: "Run your operation on systems that mostly run themselves.",
      price: "Custom",
      pricePeriod: "tailored scope",
      popular: false,
      deliverables: [
        "Everything in Advanced",
        "Unlimited workflows and integrations",
        "Custom automation across multiple departments or locations",
        "Advanced AI-driven decision workflows",
        "Custom reporting dashboard built around your metrics",
        "Continuous monitoring and priority optimization",
        "Quarterly automation roadmap planning",
        "Priority support with a dedicated team",
      ],
    },
  ];

  const infoBlocks = [
    {
      title: "Pricing",
      desc: "Prices start from $349 for a one-time audit and from $749 per month for ongoing retainers. Enterprise and custom scopes are quoted separately, based on how many systems and workflows you need.",
    },
    {
      title: "What's Included",
      desc: "Each package lists its workflow counts, integrations, and support cadence. Anything beyond a package's scope, such as extra workflows or additional tool connections, can be added with a custom quote.",
    },
    {
      title: "Your Tools",
      desc: "We build around the tools you already use. Some platforms charge their own subscription or API fees, and those are separate from our setup fees, paid directly to each provider. We'll flag any that apply before we start.",
    },
    {
      title: "Timelines",
      desc: "A focused automation can be live in a couple of weeks. A broader, multi-system build takes longer. Timelines also depend on how quickly we get access to your accounts. We share a clear timeline once we map your workflows.",
    },
    {
      title: "Access and Input",
      desc: "Automation runs on access. Retainer packages require timely login credentials and clear answers about how your processes work. The smoother the access, the faster the build. We outline exactly what we need at the start.",
    },
    {
      title: "Maintenance",
      desc: "Tools update and needs change, so automations need occasional care to keep running. Retainer packages include ongoing monitoring and tuning. One-time builds can add support separately if you'd like it.",
    },
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto space-y-20">
      {/* Breadcrumb */}
      <div className="flex items-center justify-between border-b border-[#E0DDDB] pb-4">
        <Link
          href="/services/ai-automation"
          className="inline-flex items-center gap-2 text-xs font-mono-num text-[#585858] hover:text-[#161616] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-[#9F8BE7]" />
          <span>Back to AI Automation Details</span>
        </Link>
        <div className="text-xs font-mono-num text-[#585858]">
          <Link href="/" className="hover:underline">Home</Link> / <Link href="/packages" className="hover:underline">Packages</Link> / <span className="text-[#161616] font-bold">AI Automation</span>
        </div>
      </div>

      {/* 1. Header Section */}
      <section className="text-center space-y-5 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold shadow-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>WORKFLOW &amp; CRM AUTOMATION</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#161616]">
          AI Automation Packages &amp; Pricing
        </h1>

        <p className="text-xl sm:text-2xl font-display font-medium text-[#303030]">
          Choose the Automation That Fits Where You Are
        </p>

        <p className="text-sm sm:text-base text-[#585858] font-body leading-relaxed max-w-2xl mx-auto">
          Some tasks are worth your time. Most aren&apos;t. If your days disappear into follow-ups, data entry, and repetitive clicks, our automation tiers give those hours back.
        </p>

        <div className="inline-block p-3 rounded-2xl bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#161616] font-bold shadow-xs">
          Starting from <span className="text-emerald-600 font-black text-sm">$349</span> for a one-time audit. Monthly retainers available for ongoing builds.
        </div>
      </section>

      {/* 2. Packages Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            id={pkg.id}
            className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
              pkg.popular
                ? "bg-[#161616] text-white border-2 border-[#9F8BE7] shadow-xl scale-[1.02]"
                : "bg-white text-[#161616] border border-[#E0DDDB] shadow-xs hover:border-[#9F8BE7]"
            }`}
          >
            {pkg.popular && (
              <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-[#9F8BE7] text-[#161616] text-[11px] font-mono-num font-bold uppercase tracking-wider shadow-md">
                Recommended Tier
              </div>
            )}

            <div className="space-y-6">
              <div>
                <span
                  className={`text-[11px] font-mono-num font-bold uppercase tracking-wider block mb-1 ${
                    pkg.popular ? "text-[#DDF160]" : "text-[#9F8BE7]"
                  }`}
                >
                  {pkg.bestFor}
                </span>
                <h3 className="font-display text-2xl font-bold">{pkg.name}</h3>
                <p
                  className={`text-xs mt-1 leading-relaxed ${
                    pkg.popular ? "text-[#ACACAC]" : "text-[#585858]"
                  }`}
                >
                  {pkg.tagline}
                </p>
              </div>

              {/* Price Display */}
              <div className="pt-2 pb-4 border-b border-[#E0DDDB]/30">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl font-black">{pkg.price}</span>
                  <span
                    className={`text-xs font-mono-num ${
                      pkg.popular ? "text-[#ACACAC]" : "text-[#585858]"
                    }`}
                  >
                    {pkg.pricePeriod}
                  </span>
                </div>
              </div>

              {/* Deliverables List */}
              <div className="space-y-3">
                <span
                  className={`text-xs font-mono-num font-bold uppercase tracking-wider block ${
                    pkg.popular ? "text-[#DDF160]" : "text-[#161616]"
                  }`}
                >
                  Included in Package:
                </span>
                <ul className="space-y-2.5">
                  {pkg.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs leading-relaxed">
                      <Check
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          pkg.popular ? "text-[#9F8BE7]" : "text-emerald-600"
                        }`}
                      />
                      <span className={pkg.popular ? "text-gray-200" : "text-[#303030]"}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-8 mt-6 border-t border-[#E0DDDB]/30">
              <Link
                href={`/contact?package=automation-${pkg.id}`}
                className={`w-full py-3.5 rounded-full font-display font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  pkg.popular
                    ? "bg-[#9F8BE7] text-[#161616] hover:bg-[#b4a3f7] shadow-[0_4px_15px_rgba(159,139,231,0.4)]"
                    : "bg-[#161616] text-white hover:bg-[#303030]"
                }`}
              >
                <span>Select {pkg.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* 3. Important Package Information */}
      <section className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E0DDDB] space-y-8 shadow-xs">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-mono-num text-[#9F8BE7] uppercase tracking-widest font-bold">
            TRANSPARENCY & ASSURANCE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#161616]">
            Important Package Information
          </h2>
          <p className="text-sm text-[#585858] font-body">
            Automation should make your business calmer, not more fragile. That means being honest about what it takes to build it well.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {infoBlocks.map((block) => (
            <div
              key={block.title}
              className="p-6 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] space-y-2"
            >
              <h3 className="font-display text-base font-bold text-[#161616]">{block.title}</h3>
              <p className="text-xs sm:text-sm text-[#585858] font-body leading-relaxed">
                {block.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Final CTA */}
      <section className="p-8 sm:p-14 rounded-3xl bg-[#161616] text-white text-center space-y-6 shadow-xl">
        <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Ready to Get Your Time Back?
        </h2>
        <p className="text-sm sm:text-base text-[#ACACAC] max-w-xl mx-auto">
          Start with an audit or step straight into a build. Request a quote and tell us which tasks are slowing you down.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/contact?type=automation"
            className="px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-md"
          >
            Request an Automation Scope
          </Link>
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-display font-bold text-sm transition-all"
          >
            Call {COMPANY_INFO.phone}
          </a>
        </div>
      </section>
    </div>
  );
}
