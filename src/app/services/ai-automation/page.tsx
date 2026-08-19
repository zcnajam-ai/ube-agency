import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  HelpCircle,
  Bot,
  Cpu,
  Workflow,
  Mail,
  Users,
  Database,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Automation Services | CRM & Workflow Solutions | Unified Branding Experts",
  description:
    "Automate CRM pipelines, lead follow-ups, AI chatbots, email sequences, and multi-system workflows. Eliminate manual busywork and scale your operations.",
  alternates: {
    canonical: "/services/ai-automation",
  },
};

export default function AiAutomationServicePage() {
  const serviceIncludes = [
    {
      title: "CRM Automation",
      desc: "Your customer records should update themselves. We automate lead capture, contact tagging, pipeline stages, and status changes, so your CRM stays accurate without anyone babysitting it.",
      icon: <Users className="w-5 h-5 text-[#9F8BE7]" />,
      image: "/images/official/automation/automation-strategy.jpeg",
    },
    {
      title: "Workflow Automation",
      desc: "Most businesses run on a patchwork of disconnected tools. We connect them. When something happens in one app, the right action fires in another, quietly and reliably, without manual handoffs.",
      icon: <Workflow className="w-5 h-5 text-emerald-600" />,
      image: "/images/official/automation/workflow-mapping.jpeg",
    },
    {
      title: "Lead Nurturing Automation",
      desc: "A lead that goes quiet isn't always a lost lead. We build nurturing sequences that stay in touch, share the right message at the right moment, and keep prospects warm until they're ready to buy.",
      icon: <Cpu className="w-5 h-5 text-purple-600" />,
      image: "/images/official/automation/system-integration.jpeg",
    },
    {
      title: "Email Automation",
      desc: "The right email, sent at the right time, does real work. We set up automated emails for welcomes, follow-ups, reminders, and re-engagement, so your communication stays consistent without daily effort.",
      icon: <Mail className="w-5 h-5 text-blue-600" />,
      image: "/images/official/automation/automation-scale.jpeg",
    },
    {
      title: "AI Chatbots",
      desc: "Your customers ask questions at all hours. We build AI chatbots that answer common questions, qualify leads, and route real conversations to your team, so no inquiry sits waiting overnight.",
      icon: <Bot className="w-5 h-5 text-[#DDF160]" />,
      image: "/images/official/automation/ai-action.jpeg",
    },
    {
      title: "Process Automation",
      desc: "Beyond marketing and sales, whole operations run on repeatable steps. We automate onboarding, approvals, reporting, and internal handoffs, turning multi-step processes into workflows that mostly run themselves.",
      icon: <Database className="w-5 h-5 text-amber-600" />,
      image: "/images/official/automation/workflow-mapping.jpeg",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      review: "Your current tools, tasks, and the workflows eating the most time.",
      setup: "A clear picture of where automation will save you the most.",
      avoid: "Automating the wrong things and missing the real bottlenecks.",
    },
    {
      number: "02",
      title: "Mapping",
      review: "How your tasks, tools, and teams actually connect today.",
      setup: "A detailed automation blueprint showing what triggers what.",
      avoid: "Messy, half-connected systems that create more work than they save.",
    },
    {
      number: "03",
      title: "Build",
      review: "The blueprint against your real accounts and data.",
      setup: "The automations, integrations, and workflows inside your existing tools.",
      avoid: "Brittle setups that break the moment something changes.",
    },
    {
      number: "04",
      title: "Test",
      review: "Every workflow, edge case, and handoff before it goes live.",
      setup: "Tested, verified automations that behave the way you expect.",
      avoid: "Silent failures that cost you leads or data down the line.",
    },
    {
      number: "05",
      title: "Launch and Support",
      review: "The full system as it runs on live data.",
      setup: "The go-live, a walkthrough for your team, and ongoing support.",
      avoid: "Feeling stranded once the automations are handling real work.",
    },
  ];

  const faqs = [
    {
      q: "What tools do you work with?",
      a: "We work with standard CRM and automation tools including HubSpot, Make, Zapier, ActiveCampaign, Klaviyo, HighLevel, Notion, and custom webhooks. We build around what you already use rather than forcing you into a new platform.",
    },
    {
      q: "How long does it take to set up automations?",
      a: "Simple CRM workflows and email automations can be active within one to two weeks. Complex multi-system setups with custom logic and chatbots take three to four weeks. We share a clear milestone schedule upfront.",
    },
    {
      q: "Will automation make our brand feel robotic?",
      a: "Not if it is built thoughtfully. We write custom conversational copy, build natural human handoffs, and ensure automated touchpoints feel helpful, timely, and authentic to your brand voice.",
    },
    {
      q: "Do I have to pay ongoing platform fees?",
      a: "Third-party tools (such as Zapier, Make, or CRM subscriptions) are billed directly by those platforms. We guide you on the most cost-efficient plan for your usage volume.",
    },
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto space-y-24">
      {/* 1. Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-b border-[#E0DDDB] pb-16">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTELLIGENT WORKFLOW ARCHITECTURE</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#161616] leading-tight">
            Do Less of the Work That Slows You Down.
          </h1>

          <p className="text-base sm:text-lg text-[#585858] font-body leading-relaxed max-w-2xl">
            You didn&apos;t start your business to spend your days copying data between tools, chasing follow-ups, or answering the same question for the hundredth time. The repetitive tasks pile up quietly, and before long, your team is busy without moving forward.
          </p>

          <p className="text-sm sm:text-base text-[#303030] font-body font-medium">
            At Unified Branding Experts, we build automation that takes those tasks off your plate. We connect your tools, streamline your workflows, and let smart systems handle the busywork, so your people can focus on the work that actually grows the business.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              "CRM and lead management automation",
              "Workflow automation across your tools",
              "Automated email and lead nurturing",
              "AI chatbots that qualify around the clock",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-xs text-[#303030] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#9F8BE7] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-[0_4px_20px_rgba(159,139,231,0.35)]"
            >
              Request an Automation Consultation
            </Link>

            <Link
              href="/ai-automation-packages"
              className="px-8 py-4 rounded-full border border-[#E0DDDB] bg-white hover:border-[#9F8BE7] text-sm font-display font-bold text-[#161616] transition-all flex items-center gap-2 shadow-xs"
            >
              <span>Explore Automation Packages</span>
              <span className="text-xs font-mono-num text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                Audit From $349
              </span>
              <ArrowUpRight className="w-4 h-4 text-[#9F8BE7]" />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-white border border-[#E0DDDB] shadow-md group">
            <Image
              src="/images/official/automation/automation-strategy.jpeg"
              alt="Unified Branding Experts AI Automation and Workflow Strategy"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-[#E0DDDB] text-xs font-mono-num text-[#161616] flex items-center justify-between shadow-xs">
              <span className="font-bold">CRM • WORKFLOWS • CHATBOTS</span>
              <span className="text-emerald-600 font-bold">AUDIT FROM $349</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What Is AI Automation? */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-white border border-[#E0DDDB] shadow-sm">
            <Image
              src="/images/official/automation/workflow-mapping.jpeg"
              alt="Intelligent Workflow Mapping and System Connection"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
          <span className="text-xs font-mono-num text-[#9F8BE7] uppercase tracking-widest font-bold">
            OPERATIONAL CLARITY
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#161616]">
            What Is AI Automation?
          </h2>
          <p className="text-base text-[#585858] font-body leading-relaxed">
            AI automation is the practice of using software and intelligent systems to handle repetitive tasks for you, without someone doing them by hand.
          </p>
          <p className="text-sm sm:text-base text-[#585858] font-body leading-relaxed">
            Think of every routine step your team repeats. Logging a new lead. Sending a follow-up. Updating a record. Moving information from one app to another. On their own, each takes a minute. Together, they eat entire days.
          </p>
          <p className="text-sm sm:text-base text-[#585858] font-body leading-relaxed">
            This isn&apos;t about replacing your team. It&apos;s about freeing them from the work a machine can do better, faster, and without getting tired.
          </p>
          <p className="text-xs font-mono-num text-[#161616] font-bold">
            Time is the one resource you can&apos;t buy more of. Automation is how you protect it.
          </p>
        </div>
      </section>

      {/* 3. Capabilities Grid */}
      <section className="space-y-12">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-mono-num text-[#9F8BE7] uppercase tracking-widest font-bold">
            INTELLIGENT SYSTEMS
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#161616]">
            What Our AI Automation Service Includes
          </h2>
          <p className="text-sm sm:text-base text-[#585858] font-body">
            We cover the workflows that quietly drain your time, built to fit how your business already works.
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

      {/* 4. Process Steps */}
      <section className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E0DDDB] space-y-8 shadow-xs">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-mono-num text-[#9F8BE7] uppercase tracking-widest font-bold">
            BLUEPRINT TO EXECUTION
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#161616]">
            Our 5-Step Automation Process
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

      {/* 5. Dedicated Package Banner */}
      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-white to-[#F4EFEB] border-2 border-[#9F8BE7] shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9F8BE7]/15 text-xs font-mono-num text-[#161616] font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#9F8BE7]" />
            <span>TRANSPARENT AUTOMATION PACKAGES</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#161616]">
            Looking for Dedicated Automation Packages?
          </h2>
          <p className="text-sm text-[#585858] font-body">
            Compare our 5 tiers: Automation Audit ($349), Starter ($749/mo), Growth ($1,499/mo), Advanced ($2,999/mo), and Enterprise.
          </p>
        </div>

        <Link
          href="/ai-automation-packages"
          className="px-8 py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-[0_4px_20px_rgba(159,139,231,0.35)] shrink-0 flex items-center gap-2"
        >
          <span>View All Automation Packages</span>
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
            Request Automation Consultation
          </Link>
          <Link
            href="/ai-automation-packages"
            className="px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-display font-bold text-sm transition-all"
          >
            Compare Package Pricing
          </Link>
        </div>
      </section>
    </div>
  );
}
