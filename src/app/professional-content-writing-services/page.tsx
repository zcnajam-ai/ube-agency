import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  HelpCircle,
  FileText,
  PenTool,
  BookOpen,
  Send,
  Target,
  Search,
  MessageSquareQuote,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Professional Content Writing Services | Copywriting & SEO Content",
  description:
    "Persuasive copywriting and SEO content writing services. Website copy, brand storytelling, marketing ad copy, and direct-answer content that converts.",
  alternates: {
    canonical: "https://unifiedbrandingexperts.com/professional-content-writing-services",
  },
  openGraph: {
    title: "Professional Content Writing Services | Copywriting & SEO Content",
    description:
      "Persuasive copywriting and SEO content writing services. Website copy, brand storytelling, and ad copy.",
    url: "https://unifiedbrandingexperts.com/professional-content-writing-services",
    images: [
      {
        url: "https://unifiedbrandingexperts.com/images/projects/project-brand-1.webp",
        width: 1200,
        height: 630,
        alt: "Content Writing Services - Unified Branding Experts",
      },
    ],
  },
};

export default function ProfessionalContentWritingServicesPage() {
  const serviceIncludes = [
    {
      title: "Conversion-Focused Website & Landing Page Copy",
      desc: "Clear, compelling headlines, value propositions, and benefit-driven section copy designed to guide visitors directly toward inquiry, booking, or purchase.",
      icon: <PenTool className="w-5 h-5 text-[#9F8BE7]" />,
      image: "/images/official/branding/branding-hero.jpeg",
    },
    {
      title: "Brand Storytelling & Messaging Frameworks",
      desc: "Brand voice guidelines, mission and vision statements, elevator pitches, and founder narratives that establish authentic emotional resonance with your audience.",
      icon: <BookOpen className="w-5 h-5 text-emerald-600" />,
      image: "/images/official/branding/brand-guidelines.jpeg",
    },
    {
      title: "SEO & AI Overview Direct-Answer Structuring",
      desc: "Content engineered with concise definitions, FAQ schema, and authoritative data points optimized to be cited by Google AI Overviews, Perplexity, and ChatGPT.",
      icon: <Search className="w-5 h-5 text-purple-600" />,
      image: "/images/official/aiseo/aeo-structure.jpeg",
    },
    {
      title: "Direct-Response Ad Copy & Hook Variations",
      desc: "Scroll-stopping hooks, primary text, and headlines tailored for Google Ads, Meta Ads (Facebook/Instagram), and TikTok short-form video scripts.",
      icon: <Target className="w-5 h-5 text-blue-600" />,
      image: "/images/official/tiktok/tiktok-growth.jpeg",
    },
    {
      title: "Email Marketing & CRM Nurture Sequences",
      desc: "Automated welcome series, abandoned checkout reminders, lead nurture flows, and VIP loyalty emails that convert subscribers into repeat customers.",
      icon: <Send className="w-5 h-5 text-[#DDF160]" />,
      image: "/images/official/automation/system-integration.jpeg",
    },
    {
      title: "Thought Leadership & Industry Authority Articles",
      desc: "In-depth, well-researched editorial articles, case studies, and whitepapers that establish your brand as the leading authority in your competitive niche.",
      icon: <MessageSquareQuote className="w-5 h-5 text-amber-600" />,
      image: "/images/official/branding/brand-strategy.jpeg",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Brand Voice & Audience Discovery",
      review: "Your target buyer persona, pain points, objection triggers, and existing marketing materials.",
      setup: "A comprehensive Tone of Voice Guide, style sheet, and core messaging pillars.",
      avoid: "Generic, robotic copy that sounds identical to competitors.",
    },
    {
      number: "02",
      title: "Keyword & Entity Research",
      review: "High-intent commercial search queries, LSI semantic terms, and AI question clusters.",
      setup: "An SEO content matrix outlining heading structures (H1, H2, H3) and target keywords.",
      avoid: "Keyword stuffing or publishing shallow content that search engines ignore.",
    },
    {
      number: "03",
      title: "Drafting & Direct-Response Craft",
      review: "Section-by-section copywriting incorporating psychological persuasion principles.",
      setup: "Complete first draft including headlines, subheadings, body copy, and primary CTAs.",
      avoid: "Fluffy filler text that fails to articulate clear customer value.",
    },
    {
      number: "04",
      title: "Editorial Review & Optimization",
      review: "Readability scores, grammar, fact-checking, and AEO answer snippet formatting.",
      setup: "Polished final copy formatted cleanly for your web designers or CMS editors.",
      avoid: "Spelling errors, awkward phrasing, and clunky reading transitions.",
    },
    {
      number: "05",
      title: "Revisions & Asset Delivery",
      review: "Your feedback, specific tweaks, and adjustments across all drafted pages.",
      setup: "Final approved copy documents ready for immediate implementation and launch.",
      avoid: "Delays in website launch caused by missing or unfinished written content.",
    },
  ];

  const faqs = [
    {
      q: "How do you ensure the copy matches our unique brand voice?",
      a: "We begin every project with a detailed tone-of-voice questionnaire and review your existing materials to build a custom style guide reflecting your exact brand personality—whether authoritative, conversational, luxurious, or energetic.",
    },
    {
      q: "Is your content optimized for SEO and Google AI Overviews?",
      a: "Yes. Every piece includes primary and secondary keyword placement, semantic HTML heading structures (H1/H2/H3), and concise direct-answer formatting tailored for citations by Google AI Overviews and answer engines.",
    },
    {
      q: "Is your writing created by humans or AI?",
      a: "All content is 100% human-crafted by senior direct-response copywriters. We use strategic research tools to analyze search data, but every headline, story, and sentence is written with genuine emotional intelligence and commercial purpose.",
    },
    {
      q: "Are revisions included in the copywriting packages?",
      a: "Yes. All writing packages include structured rounds of revisions (typically 2 rounds or unlimited until sign-off depending on package) to ensure every sentence aligns perfectly with your vision.",
    },
    {
      q: "Can you write copy directly into our Figma design or CMS?",
      a: "Yes. We deliver copy in organized Google Docs / Word files with clear UI layout annotations, or we can collaborate directly inside your Figma wireframes or CMS admin.",
    },
    {
      q: "What are your content writing package prices?",
      a: "Our packages start at $199 for Starter Copywriting (up to 3 pages), $499 for Growth Content Suite (up to 8 pages + 2 SEO articles), and $999 for Authority Copy Suite (full omnichannel copy overhaul).",
    },
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto space-y-24">
      {/* 1. Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-b border-[#E0DDDB] pb-16">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>STRATEGIC COPYWRITING &amp; BRAND STORYTELLING</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#161616] leading-tight">
            Professional Content Writing Services That Convert.
          </h1>

          <p className="text-base sm:text-lg text-[#585858] font-body leading-relaxed max-w-2xl">
            Words shape how customers perceive, trust, and choose your brand. We combine conversion psychology, brand storytelling, and search optimization to create content that captivates your audience and drives real business outcomes.
          </p>

          <p className="text-sm sm:text-base text-[#303030] font-body font-medium">
            At Unified Branding Experts, we craft persuasive website copy, high-converting ad copy, and authoritative thought leadership that turn passive readers into lifelong brand advocates.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              "Conversion-focused website & landing page copy",
              "SEO & AI Overview direct-answer optimization",
              "Brand voice & storytelling frameworks",
              "100% original, human-crafted writing",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-xs text-[#303030] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#9F8BE7] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/contact?type=content-writing"
              className="px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-[0_4px_20px_rgba(159,139,231,0.35)]"
            >
              Order Professional Copywriting
            </Link>

            <Link
              href="/our-content-writing-packages"
              className="px-8 py-4 rounded-full border border-[#E0DDDB] bg-white hover:border-[#9F8BE7] text-sm font-display font-bold text-[#161616] transition-all flex items-center gap-2 shadow-xs"
            >
              <span>View Content Packages</span>
              <span className="text-xs font-mono-num text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                From $199
              </span>
              <ArrowUpRight className="w-4 h-4 text-[#9F8BE7]" />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-white border border-[#E0DDDB] shadow-md group">
            <Image
              src="/images/official/branding/branding-hero.jpeg"
              alt="Unified Branding Experts Professional Content Writing Showcase"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-[#E0DDDB] text-xs font-mono-num text-[#161616] flex items-center justify-between shadow-xs">
              <span className="font-bold">WEBSITE COPY • SEO • ADS</span>
              <span className="text-emerald-600 font-bold">FROM $199</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Deep Dive */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-white border border-[#E0DDDB] shadow-sm">
            <Image
              src="/images/official/branding/brand-guidelines.jpeg"
              alt="Brand Messaging and Tone of Voice Architecture"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
          <span className="text-xs font-mono-num text-[#9F8BE7] uppercase tracking-widest font-bold">
            CONVERSION COPYWRITING
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#161616]">
            Words That Transform Visitors into Buyers.
          </h2>
          <p className="text-base text-[#585858] font-body leading-relaxed">
            Good design attracts eyes, but clear copy makes sales. When your value proposition is ambiguous, prospects bounce. We distill complex features into crisp, compelling benefits that address customer pain points instantly.
          </p>
          <p className="text-sm sm:text-base text-[#585858] font-body leading-relaxed">
            From hero headlines to microcopy, CTAs, and automated nurture sequences, every word is written with psychological precision to eliminate doubt and inspire decisive action.
          </p>
          <p className="text-xs font-mono-num text-[#161616] font-bold">
            Strategic messaging crafted to command market authority and drive measurable revenue.
          </p>
        </div>
      </section>

      {/* 3. Capabilities Grid */}
      <section className="space-y-12">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-mono-num text-[#9F8BE7] uppercase tracking-widest font-bold">
            WRITING FORMATS
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#161616]">
            What Our Content Writing Service Includes
          </h2>
          <p className="text-sm sm:text-base text-[#585858] font-body">
            Strategic copywriting formats designed for web, search engines, and multi-channel marketing campaigns.
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
                  <h3 className="font-display text-lg font-bold text-[#161616] group-hover:text-[#9F8BE7] transition-colors">
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

      {/* 4. Process Steps */}
      <section className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E0DDDB] space-y-8 shadow-xs">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-mono-num text-[#9F8BE7] uppercase tracking-widest font-bold">
            EDITORIAL PROCESS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#161616]">
            Our 5-Step Copywriting Process
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

      {/* 5. Package CTA */}
      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-white to-[#F4EFEB] border-2 border-[#9F8BE7] shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs font-mono-num text-emerald-600 font-bold uppercase tracking-wider block">
            AFFORDABLE WRITING TIERS
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#161616]">
            Explore Content Writing Packages &amp; Pricing
          </h2>
          <p className="text-xs sm:text-sm text-[#585858] font-body">
            Compare Starter Copy ($199), Growth Content ($499), and Authority Copy Suite ($999) packages.
          </p>
        </div>

        <Link
          href="/our-content-writing-packages"
          className="px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-[0_4px_20px_rgba(159,139,231,0.35)] shrink-0 flex items-center gap-2"
        >
          <span>View Content Packages</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </section>

      {/* 6. FAQs */}
      <section className="space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-mono-num text-[#9F8BE7] uppercase tracking-widest font-bold">
            FREQUENT QUESTIONS
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

      {/* 7. Final CTA */}
      <section className="p-8 sm:p-14 rounded-3xl bg-[#161616] text-white text-center space-y-6 shadow-xl">
        <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Ready for Words That Command Market Authority?
        </h2>
        <p className="text-sm sm:text-base text-[#ACACAC] max-w-xl mx-auto">
          From focused website copy to complete brand messaging and omnichannel ad campaigns.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/contact?type=content-writing"
            className="px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-md"
          >
            Order Copywriting
          </Link>
          <Link
            href="/our-content-writing-packages"
            className="px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-display font-bold text-sm transition-all"
          >
            Compare Package Pricing
          </Link>
        </div>
      </section>
    </div>
  );
}
