import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  HelpCircle,
  ShieldCheck,
  Palette,
  Layers,
  Compass,
  BookOpen,
  RefreshCw,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Branding Services & Brand Identity",
  description:
    "Custom logo design, brand strategy, visual identity systems, brand guidelines, and rebranding. Built to make your business recognizable, memorable, and trusted.",
  alternates: {
    canonical: "https://unifiedbrandingexperts.com/services/branding",
  },
  openGraph: {
    title: "Branding Services & Brand Identity | Unified Branding Experts",
    description:
      "Custom logo design, brand strategy, visual identity systems, and brand guidelines.",
    url: "https://unifiedbrandingexperts.com/services/branding",
    images: [
      {
        url: "https://unifiedbrandingexperts.com/og-default.png",
        width: 1200,
        height: 630,
        alt: "Branding Services - Unified Branding Experts",
      },
    ],
  },
};

export default function BrandingServicePage() {
  const serviceIncludes = [
    {
      title: "Logo Design",
      desc: "Your logo is the face of your brand, the mark people connect to everything you do. We design custom logos grounded in your industry, your audience, and your goals, then deliver versions that stay sharp on a billboard, a website, and a phone-sized favicon alike.",
      icon: <Palette className="w-5 h-5 text-[#9F8BE7]" />,
      image: "/images/official/branding/logo-design.jpeg",
    },
    {
      title: "Brand Identity",
      desc: "A logo alone isn't a brand. We build the full visual system around it: your color palette, typography, imagery style, and supporting graphics. Together, these give your business a look that feels intentional and holds up across every channel.",
      icon: <Layers className="w-5 h-5 text-[#9F8BE7]" />,
      image: "/images/official/branding/brand-identity.jpeg",
    },
    {
      title: "Brand Strategy",
      desc: "Great design without strategy is just decoration. Before we choose a single color, we clarify who you serve, what you stand for, and how you differ from competitors. That thinking shapes every visual choice, so your brand looks the part and means something.",
      icon: <Compass className="w-5 h-5 text-emerald-600" />,
      image: "/images/official/branding/brand-strategy.jpeg",
    },
    {
      title: "Brand Guidelines",
      desc: "A brand only works when it's used consistently. We create clear guidelines, a practical rulebook covering how to use your logo, colors, fonts, and spacing, so your team, your printer, and any future designer stay perfectly aligned.",
      icon: <BookOpen className="w-5 h-5 text-[#DDF160]" />,
      image: "/images/official/branding/brand-guidelines.jpeg",
    },
    {
      title: "Rebranding",
      desc: "Sometimes a business outgrows its look. Maybe your identity feels dated, or it no longer reflects who you've become. We handle thoughtful rebrands that carry forward what's working, refresh what isn't, and reintroduce your business without losing the customers you've earned.",
      icon: <RefreshCw className="w-5 h-5 text-rose-500" />,
      image: "/images/official/branding/branding-hero.jpeg",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery and Brand Audit",
      review: "Your business, your market, your competitors, and the audience you want to reach.",
      setup: "A clear creative brief that defines what your brand needs to say and to whom.",
      avoid: "A pretty logo that looks nice but says nothing about your business.",
    },
    {
      number: "02",
      title: "Brand Strategy and Positioning",
      review: "What makes you different and where you fit in your market.",
      setup: "Your positioning, personality, and the direction every visual choice will follow.",
      avoid: "A brand that blends in with everyone else offering the same thing.",
    },
    {
      number: "03",
      title: "Design and Concept Development",
      review: "The strategy and the feel we're aiming for.",
      setup: "Logo concepts, color directions, and typography options for you to react to.",
      avoid: "Guessing in the dark and settling for the first idea instead of the right one.",
    },
    {
      number: "04",
      title: "Refinement and Brand System",
      review: "Your feedback on the concepts and how each option performs in real contexts.",
      setup: "The final logo, complete visual identity, and the full brand system around it.",
      avoid: "A logo that works on one screen but falls apart everywhere else.",
    },
    {
      number: "05",
      title: "Delivery and Guidelines",
      review: "The finished identity across every asset and use case.",
      setup: "Your final files in every format, plus brand guidelines and a walkthrough for your team.",
      avoid: "An inconsistent brand that drifts the moment someone new touches it.",
    },
  ];

  const faqs = [
    {
      q: "What's the difference between a logo and a brand?",
      a: "A logo is a single visual mark. A brand is the complete impression your business makes, including your logo, colors, fonts, tone, and the consistent experience customers have across every touchpoint. We design the logo as part of building the wider brand around it.",
    },
    {
      q: "Do I need brand strategy, or can I just get a logo?",
      a: "You can start with a logo alone, but strategy is what gives it staying power. Without it, design choices are just guesses. With it, every color and shape supports a clear position in your market. For most businesses, the strategy is what makes the logo actually work.",
    },
    {
      q: "How long does the branding process take?",
      a: "A focused logo and identity project typically takes two to four weeks, depending on scope and how quickly feedback comes back. Full branding with strategy and guidelines takes longer. We share a clear timeline at the start, so you always know what's next.",
    },
    {
      q: "Will I own the rights to my brand?",
      a: "Yes. Once your project is complete, you receive full ownership of the final designs, along with every file format you need for web and print. Your brand is yours to use freely, everywhere your business goes.",
    },
    {
      q: "Can you rebrand my existing business?",
      a: "We can. We handle rebrands that refresh your identity while protecting the recognition you've already built. We start by understanding what's working, then update what isn't, so you evolve without confusing loyal customers.",
    },
    {
      q: "Is professional branding worth it for a small business or startup?",
      a: "It often matters most when you're small. A polished, considered brand makes a new business look established and gives customers a reason to trust you early. We shape the work around your stage and your budget, so you get a foundation you can grow into.",
    },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://unifiedbrandingexperts.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://unifiedbrandingexperts.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Branding",
        item: "https://unifiedbrandingexperts.com/services/branding",
      },
    ],
  };

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto space-y-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* 1. Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-b border-[#E0DDDB] pb-16">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OFFICIAL BRANDING SERVICES</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#161616] leading-tight">
            Branding Services &amp; Visual Identity Engineering
          </h1>

          <p className="text-base sm:text-lg text-[#585858] font-body leading-relaxed max-w-2xl">
            Your customers meet your brand before they meet you. A logo, a color, a first impression on a screen. In those few seconds, they decide whether you feel credible or forgettable. Most small businesses never get a second chance to fix that first impression.
          </p>

          <p className="text-sm sm:text-base text-[#303030] font-body font-medium">
            At Unified Branding Experts, we build brands that earn the right response from the start. From your logo to your full visual identity, we shape how startups, entrepreneurs, and growing businesses show up and how customers remember them.
          </p>

          {/* Quick Deliverable Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              "Custom logo design built for every surface",
              "Complete visual identity from colors to typography",
              "Brand strategy that gives your look a reason to exist",
              "Clear brand guidelines your whole team can follow",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-xs text-[#303030] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#9F8BE7] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Primary Action Buttons & Package Link */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-[0_4px_20px_rgba(159,139,231,0.35)]"
            >
              Request a Branding Quote
            </Link>

            <Link
              href="/branding-packages"
              className="px-8 py-4 rounded-full border border-[#E0DDDB] bg-white hover:border-[#9F8BE7] text-sm font-display font-bold text-[#161616] transition-all flex items-center gap-2 shadow-xs"
            >
              <span>Explore Branding Packages</span>
              <span className="text-xs font-mono-num text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                From $299
              </span>
              <ArrowUpRight className="w-4 h-4 text-[#9F8BE7]" />
            </Link>
          </div>
        </div>

        {/* Hero Visual Presentation Image */}
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-white border border-[#E0DDDB] shadow-md group">
            <Image
              src="/images/official/branding/branding-hero.jpeg"
              alt="Unified Branding Experts brand identity presentation with logo, typography and visual assets"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-[#E0DDDB] text-xs font-mono-num text-[#161616] flex items-center justify-between shadow-xs">
              <span className="font-bold">STRATEGY • LOGO • GUIDELINES</span>
              <span className="text-[#9F8BE7] font-bold">100% OWNERSHIP</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What Is Branding? */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-white border border-[#E0DDDB] shadow-sm">
            <Image
              src="/images/official/branding/brand-identity.jpeg"
              alt="Unified Branding Experts complete brand identity system and typography guidelines"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
          <span className="text-xs font-mono-num text-[#9F8BE7] uppercase tracking-widest font-bold">
            FOUNDATION & PHILOSOPHY
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#161616]">
            What Is Branding?
          </h2>
          <p className="text-base text-[#585858] font-body leading-relaxed">
            Branding is the work of shaping how people see, feel, and remember your business.
          </p>
          <p className="text-sm sm:text-base text-[#585858] font-body leading-relaxed">
            A logo is part of it. So are your colors, your fonts, and your tone of voice. But branding runs deeper than any single asset. It&apos;s the consistent impression your business leaves everywhere it shows up, on your website, your packaging, your social profiles, and in the mind of every person who encounters you.
          </p>
          <div className="p-5 rounded-2xl bg-white border border-[#E0DDDB] space-y-2 shadow-xs">
            <h3 className="font-display text-sm font-bold text-[#161616]">
              Done well, branding does three things at once:
            </h3>
            <ul className="space-y-1.5 text-xs text-[#585858] font-body">
              <li>• <strong>Makes you recognizable:</strong> Customers spot you immediately in a crowded market.</li>
              <li>• <strong>Makes you credible:</strong> People trust you before they&apos;ve bought a single thing.</li>
              <li>• <strong>Makes you consistent:</strong> Every touchpoint reinforces the exact same story.</li>
            </ul>
          </div>
          <p className="text-xs font-mono-num text-[#161616] font-bold">
            A brand isn&apos;t a drawing you order once. It&apos;s a foundation you build on for years.
          </p>
        </div>
      </section>

      {/* 3. Why Branding Matters */}
      <section className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E0DDDB] space-y-8 shadow-xs">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono-num text-[#9F8BE7] uppercase tracking-widest font-bold">
            COMMERCIAL IMPACT
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#161616]">
            Why Branding Matters for Your Business
          </h2>
          <p className="text-sm sm:text-base text-[#585858] font-body">
            You&apos;ve seen it happen. Two businesses offer nearly the same thing, but one looks polished and established while the other looks like an afterthought. The polished one wins the click, the trust, and the sale, often before a single word is exchanged.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Builds Instant Trust",
              desc: "A professional identity signals that you take your business seriously, so customers do too.",
            },
            {
              title: "Makes You Memorable",
              desc: "Consistent visuals help people remember you and come back instead of searching again.",
            },
            {
              title: "Supports Higher Prices",
              desc: "A credible brand lets you compete on value, not just on being the cheapest option.",
            },
            {
              title: "Unifies Everything You Do",
              desc: "Marketing, your website, your packaging, all of it lands harder when it shares one look.",
            },
            {
              title: "A Foundation to Grow On",
              desc: "Every future campaign, product, and page has a clear identity to build from.",
            },
            {
              title: "Timeless Strategic Value",
              desc: "Trends come and go with the seasons. A brand built on strategy holds its value for years.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] space-y-2"
            >
              <h3 className="font-display text-base font-bold text-[#161616]">{item.title}</h3>
              <p className="text-xs sm:text-sm text-[#585858] font-body leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. What Our Branding Service Includes */}
      <section className="space-y-12">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-mono-num text-[#9F8BE7] uppercase tracking-widest font-bold">
            FULL SPECTRUM DELIVERABLES
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#161616]">
            What Our Branding Service Includes
          </h2>
          <p className="text-sm sm:text-base text-[#585858] font-body">
            We cover the full identity, from the first sketch to the rulebook that keeps everything consistent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceIncludes.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl bg-white border border-[#E0DDDB] overflow-hidden flex flex-col justify-between shadow-xs hover:border-[#9F8BE7] transition-all group"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#FAF7F6]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 sm:p-7 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF7F6] border border-[#E0DDDB] flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#161616] group-hover:text-[#9F8BE7] transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#585858] font-body leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Our 5-Step Process */}
      <section className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E0DDDB] space-y-8 shadow-xs">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-mono-num text-[#9F8BE7] uppercase tracking-widest font-bold">
            PROVEN METHODOLOGY
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#161616]">
            Our Branding Process
          </h2>
        </div>

        <div className="space-y-6">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="p-6 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
            >
              <div className="md:col-span-3 flex items-center gap-4">
                <span className="font-display font-black text-3xl text-[#9F8BE7] font-mono-num">
                  {step.number}
                </span>
                <h3 className="font-display text-base font-bold text-[#161616]">{step.title}</h3>
              </div>

              <div className="md:col-span-3 text-xs text-[#585858]">
                <strong className="text-[#161616] block mb-0.5">What we review:</strong>
                <span>{step.review}</span>
              </div>

              <div className="md:col-span-3 text-xs text-[#585858]">
                <strong className="text-[#161616] block mb-0.5">What we set up:</strong>
                <span>{step.setup}</span>
              </div>

              <div className="md:col-span-3 text-xs text-rose-700 bg-rose-50/60 p-3 rounded-xl border border-rose-100">
                <strong className="block mb-0.5 font-bold">What this helps you avoid:</strong>
                <span>{step.avoid}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Dedicated Package Banner (Bidirectional Linking) */}
      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-white to-[#F4EFEB] border-2 border-[#9F8BE7] shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9F8BE7]/15 text-xs font-mono-num text-[#161616] font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#9F8BE7]" />
            <span>TRANSPARENT SCOPE & TIERS</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#161616]">
            Looking for Dedicated Branding Packages?
          </h2>
          <p className="text-sm text-[#585858] font-body">
            Compare our 5 complete branding packages: Logo Essentials ($299), Brand Starter ($599), Brand Identity ($1,199), Brand Elevate ($2,499), and Full Brand System.
          </p>
        </div>

        <Link
          href="/branding-packages"
          className="px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-[0_4px_20px_rgba(159,139,231,0.35)] shrink-0 flex items-center gap-2"
        >
          <span>View All Branding Packages</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </section>

      {/* 7. FAQs */}
      <section className="space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-mono-num text-[#9F8BE7] uppercase tracking-widest font-bold">
            QUESTIONS & ANSWERS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#161616]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="p-6 rounded-3xl bg-white border border-[#E0DDDB] space-y-2 shadow-xs"
            >
              <h3 className="font-display text-base font-bold text-[#161616] flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-[#9F8BE7] shrink-0 mt-1" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#585858] font-body leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="p-8 sm:p-14 rounded-3xl bg-[#161616] text-white text-center space-y-6 shadow-xl">
        <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Ready to Build a Brand That Lasts?
        </h2>
        <p className="text-sm sm:text-base text-[#ACACAC] max-w-xl mx-auto">
          Let&apos;s shape an identity your customers remember. Request a quote and tell us where your business is headed.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-md"
          >
            Start Your Branding Scope
          </Link>
          <Link
            href="/branding-packages"
            className="px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-display font-bold text-sm transition-all"
          >
            Compare Package Pricing
          </Link>
        </div>
      </section>
    </div>
  );
}
