"use client";

import React from "react";
import { Sparkles, Shield, Rocket, HeartHandshake, Gauge, Layers } from "lucide-react";

export default function WhyUBE() {
  const differentiators = [
    {
      number: "01",
      icon: <Shield className="w-5 h-5 text-[#9F8BE7]" />,
      title: "Strategy First",
      subtitle: "Every Creative Decision Supports a Business KPI",
      desc: "We do not believe in superficial design trends. Every color choice, typographic scale, and layout structure is designed to elevate your market position and convert visitors into customers.",
    },
    {
      number: "02",
      icon: <Gauge className="w-5 h-5 text-[#9F8BE7]" />,
      title: "User-Focused Engineering",
      subtitle: "Fast Loading Meets Clear User Experience",
      desc: "We engineer digital storefronts and web apps with responsive layouts, stable performance, and intuitive mobile navigation.",
    },
    {
      number: "03",
      icon: <Layers className="w-5 h-5 text-emerald-600" />,
      title: "Full-Service Cohesion",
      subtitle: "Brand, Code, Commerce & AI Under One Roof",
      desc: "Stop coordinating between disjointed freelancers and agencies. Our multidisciplinary team ensures your visual identity and advertising funnels align with your brand goals.",
    },
    {
      number: "04",
      icon: <Rocket className="w-5 h-5 text-[#DDF160]" />,
      title: "Built for Scalability",
      subtitle: "Architectures That Grow With Your Business",
      desc: "We write clean, modular Next.js and headless commerce systems with manageable CMS backends, ensuring long-term maintainability.",
    },
    {
      number: "05",
      icon: <HeartHandshake className="w-5 h-5 text-rose-500" />,
      title: "Dedicated Partnership",
      subtitle: "Direct Collaboration With Specialists",
      desc: "You collaborate directly with designers, web developers, and growth strategists who prioritize your project goals.",
    },
  ];

  return (
    <section className="relative py-24 sm:py-36 px-6 md:px-12 bg-[#FAF7F6] border-t border-[#E0DDDB] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E0DDDB] pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono-num uppercase tracking-[0.25em] text-[#9F8BE7] font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>08 / THE UBE ADVANTAGE</span>
            </div>
            <h2 className="font-display text-editorial-lg text-[#161616] tracking-tight">
              Why Ambitious Brands Choose Unified Branding Experts.
            </h2>
            <p className="text-sm sm:text-base text-[#585858] font-body">
              Built on strategic craft, multi-disciplinary expertise, and an unwavering commitment to clear client communication.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono-num text-[#585858]">
            <div className="p-3.5 rounded-2xl bg-white border border-[#E0DDDB] text-center shadow-xs">
              <span className="font-display font-black text-xl text-[#161616] block">90%</span>
              <span className="text-[10px] text-[#585858] uppercase font-bold">Retention</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white border border-[#E0DDDB] text-center shadow-xs">
              <span className="font-display font-black text-xl text-[#9F8BE7] block">200+</span>
              <span className="text-[10px] text-[#585858] uppercase font-bold">Projects</span>
            </div>
          </div>
        </div>

        {/* 5 Distinctive Pillars Grid (Clean White Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, idx) => (
            <div
              key={item.number}
              className={`p-8 sm:p-10 rounded-3xl bg-white border border-[#E0DDDB] hover:border-[#9F8BE7] transition-all duration-300 space-y-4 shadow-xs group flex flex-col justify-between ${
                idx === 0 ? "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white to-[#F4EFEB]" : ""
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono-num text-[#585858] font-bold">
                    {item.number}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-mono-num uppercase tracking-wider text-[#9F8BE7] font-bold block">
                    {item.subtitle}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#161616] group-hover:text-[#9F8BE7] transition-colors mt-1">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#585858] font-body leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
