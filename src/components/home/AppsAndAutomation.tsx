"use client";

import React from "react";
import Link from "next/link";
import {
  Smartphone,
  Bot,
  ArrowUpRight,
  CheckCircle2,
  Zap,
} from "lucide-react";
import InteractiveMedia from "../common/InteractiveMedia";
import BackgroundGrid from "../common/BackgroundGrid";
import PurpleGlowField from "../common/PurpleGlowField";
import OversizedTypography from "../common/OversizedTypography";

export default function AppsAndAutomation() {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-12 bg-white border-b border-[#E0DDDB] overflow-hidden">
      {/* Ambient Atmosphere */}
      <BackgroundGrid opacity={0.025} size={72} maskRadial />
      <PurpleGlowField position="top-left" size={700} opacity={0.09} parallaxSpeed={0.15} />
      <OversizedTypography text="APPLICATIONS" direction="left" className="top-12 opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#E0DDDB] pb-6">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F6] border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold shadow-2xs">
              <Zap className="w-3.5 h-3.5" />
              <span>ENGINEERING &amp; EFFICIENCY • MOBILE APPS &amp; AUTOMATION</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#161616]">
              Scalable Mobile Apps &amp; Intelligent Workflows.
            </h2>
            <p className="text-sm sm:text-base text-[#585858] font-body leading-relaxed">
              We build production <strong className="text-[#161616]">iOS &amp; Android mobile applications</strong> and deploy <strong className="text-[#161616]">AI automations</strong> that eliminate manual busywork and streamline your sales operations.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/packages"
              className="px-6 py-3 rounded-full bg-[#FAF7F6] border border-[#E0DDDB] hover:border-[#9F8BE7] text-xs sm:text-sm font-display font-bold text-[#161616] transition-all flex items-center gap-1.5 shadow-2xs"
            >
              <span>View Packages Directory</span>
              <ArrowUpRight className="w-4 h-4 text-[#9F8BE7]" />
            </Link>
          </div>
        </div>

        {/* 2-Card Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Mobile App Engineering */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF7F6] text-[#161616] border border-[#E0DDDB] flex flex-col justify-between space-y-8 shadow-xs hover:border-[#9F8BE7] transition-all group">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-2xl bg-white border border-[#E0DDDB] flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-xs font-mono-num px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-bold">
                  MVP FROM $999
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#161616]">
                  Mobile App Development (iOS &amp; Android)
                </h3>
                <p className="text-xs sm:text-sm text-[#585858] font-body leading-relaxed">
                  Turn your product idea into a working app. From rapid MVP prototypes for founders to high-performance native iOS &amp; Android apps ready for the App Store and Google Play.
                </p>
              </div>

              {/* Visual Preview */}
              <InteractiveMedia
                src="/images/official/mobile-app/mobile-app-showcase.png"
                alt="Unified Branding Experts Mobile App Development iOS & Android Native Showcase"
                aspectRatio="aspect-[4/3] sm:aspect-[16/11]"
                objectFit="contain"
                badgeText="iOS & Android Native"
                className="bg-white"
              />

              <ul className="space-y-2 text-xs text-[#303030]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Concept MVP Prototypes &amp; Clickable Wireframes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Native &amp; Cross-Platform (React Native / Flutter / Swift)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Full App Store &amp; Google Play Store Submission</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-[#E0DDDB] flex items-center justify-between">
              <Link
                href="/mobile-app-packages"
                className="px-6 py-3 rounded-full bg-[#161616] text-white hover:bg-[#9F8BE7] hover:text-[#161616] font-display font-bold text-xs transition-all flex items-center gap-1.5 shadow-sm"
              >
                <span>Compare App Packages ($999+)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 2: AI Automations & Workflows */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF7F6] text-[#161616] border border-[#E0DDDB] flex flex-col justify-between space-y-8 shadow-xs hover:border-[#9F8BE7] transition-all group">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-2xl bg-white border border-[#E0DDDB] flex items-center justify-center">
                  <Bot className="w-5 h-5 text-[#9F8BE7]" />
                </div>
                <span className="text-xs font-mono-num px-3 py-1 rounded-full bg-[#9F8BE7]/15 text-[#9F8BE7] border border-[#9F8BE7]/30 font-bold">
                  FROM $349
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#161616]">
                  AI Automation &amp; Backend Integrations
                </h3>
                <p className="text-xs sm:text-sm text-[#585858] font-body leading-relaxed">
                  Eliminate repetitive manual tasks. We connect your CRM, lead pipelines, email responders, and inventory databases with intelligent AI agents and webhook automations.
                </p>
              </div>

              {/* Visual Preview with 3D Tilt */}
              <InteractiveMedia
                src="/images/official/automation/system-integration.jpeg"
                alt="Unified Branding Experts Automation Strategy"
                aspectRatio="aspect-[16/9]"
                enableTilt
                enableParallax
                enableReveal
                revealType="fade-scale"
                badgeText="Zero Manual Busywork"
              />

              <ul className="space-y-2 text-xs text-[#303030]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9F8BE7] shrink-0" />
                  <span>Lead Qualification &amp; CRM Routing Automations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9F8BE7] shrink-0" />
                  <span>AI Customer Support Agents &amp; Chatbot Logic</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9F8BE7] shrink-0" />
                  <span>Make.com, Zapier &amp; Custom API Middleware Sync</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-[#E0DDDB] flex items-center justify-between">
              <Link
                href="/ai-automation-packages"
                className="px-6 py-3 rounded-full bg-[#161616] text-white hover:bg-[#9F8BE7] hover:text-[#161616] font-display font-bold text-xs transition-all flex items-center gap-1.5 shadow-sm"
              >
                <span>Compare Automation Plans ($349+)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
