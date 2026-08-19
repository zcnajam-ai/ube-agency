"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ArrowUpRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { useScroll } from "@/components/providers/SmoothScrollProvider";

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FullscreenMenu({ isOpen, onClose }: FullscreenMenuProps) {
  const { openProjectModal } = useScroll();

  if (!isOpen) return null;

  const navLinks = [
    { label: "Home", href: "/", number: "01" },
    { label: "Selected Work", href: "/work", number: "02" },
    { label: "Services & Capabilities", href: "/services", number: "03" },
    { label: "Dedicated Packages", href: "/packages", number: "04" },
    { label: "Why UBE / About", href: "/about", number: "05" },
    { label: "Editorial Insights", href: "/insights", number: "06" },
    { label: "Contact & Inquiries", href: "/contact", number: "07" },
  ];

  const dedicatedServices = [
    { label: "Best Logo Design Agency", href: "/best-logo-design-agency" },
    { label: "Professional Web Design", href: "/professional-web-design-services" },
    { label: "Best Website Development", href: "/best-website-development-agency" },
    { label: "Digital Marketing Agency", href: "/digital-marketing-services-agency" },
    { label: "Custom Web Development", href: "/custom-web-development" },
    { label: "Content Writing Services", href: "/professional-content-writing-services" },
    { label: "AI SEO & Answer Engines", href: "/services/aiseo" },
    { label: "AI Automation & CRM", href: "/services/ai-automation" },
  ];

  const packageLinks = [
    { label: "Logo Design Packages", href: "/logo-design-packages", starting: "From $299" },
    { label: "Web Design Packages", href: "/web-design-packages", starting: "From $300" },
    { label: "Website Dev Packages", href: "/our-website-development-packages", starting: "From $300" },
    { label: "Digital Marketing Packages", href: "/our-digital-marketing-packages", starting: "From $299/mo" },
    { label: "Custom Web & eCom Plans", href: "/our-custom-web-design-development-packages", starting: "From $450" },
    { label: "Content Writing Packages", href: "/our-content-writing-packages", starting: "From $199" },
    { label: "AI SEO Packages", href: "/ai-seo-packages", starting: "From $349" },
    { label: "TikTok Marketing Packages", href: "/tiktok-marketing-packages", starting: "From $299/mo" },
    { label: "Mobile App Packages", href: "/mobile-app-packages", starting: "From $999" },
  ];

  return (
    <div
      data-lenis-prevent
      className="fixed inset-0 z-50 flex flex-col bg-[#161616]/98 backdrop-blur-2xl text-white overflow-y-auto animate-in fade-in duration-300"
      style={{
        overscrollBehavior: "contain",
        touchAction: "pan-y",
        WebkitOverflowScrolling: "touch",
      }}
    >
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-6 md:px-14 py-6 border-b border-white/10">
        <Link href="/" onClick={onClose} className="flex items-center gap-3 group">
          <div className="relative h-8 sm:h-9 w-40 sm:w-48">
            <Image
              src="/images/logo/ube-logo-white.svg"
              alt="Unified Branding Experts"
              fill
              priority
              className="object-contain object-left"
            />
          </div>
        </Link>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-[#9F8BE7] transition-all text-xs font-display font-bold uppercase tracking-wider cursor-pointer"
        >
          <span>Close</span>
          <X className="w-4 h-4 text-[#9F8BE7]" />
        </button>
      </div>

      {/* Main Content Split */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-6 md:px-14 py-10 md:py-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Side: Major Navigation */}
        <div className="lg:col-span-5 space-y-4">
          <p className="text-xs uppercase font-mono-num tracking-[0.25em] text-[#DDF160] mb-2 font-bold">
            Navigation Index
          </p>
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href} className="overflow-hidden">
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="group flex items-baseline justify-between py-2 border-b border-white/10 hover:border-[#9F8BE7] transition-colors"
                >
                  <span className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-[#9F8BE7] group-hover:translate-x-2 transition-all duration-300">
                    {link.label}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono-num text-[#838383] group-hover:text-white transition-colors">
                      {link.number}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#838383] group-hover:text-[#9F8BE7] transition-colors" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <div className="pt-4">
            <button
              type="button"
              onClick={() => {
                onClose();
                openProjectModal();
              }}
              className="w-full py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-[0_4px_20px_rgba(159,139,231,0.4)] cursor-pointer"
            >
              Start Your Project
            </button>
          </div>
        </div>

        {/* Middle Column: Dedicated Services */}
        <div className="lg:col-span-3 space-y-3">
          <p className="text-xs uppercase font-mono-num tracking-[0.25em] text-[#9F8BE7] font-bold">
            Dedicated Services
          </p>
          <div className="space-y-1">
            {dedicatedServices.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                onClick={onClose}
                className="block p-2 rounded-xl bg-white/5 hover:bg-white/10 hover:text-[#9F8BE7] transition-all text-xs font-display font-medium text-gray-200"
              >
                {svc.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Side: Commercial Packages */}
        <div className="lg:col-span-4 space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-xs uppercase font-mono-num tracking-[0.25em] text-emerald-400 font-bold">
              Transparent Packages
            </p>
            <Link
              href="/packages"
              onClick={onClose}
              className="text-[11px] font-mono-num text-[#9F8BE7] hover:underline"
            >
              All Packages →
            </Link>
          </div>

          <div className="space-y-1.5 max-h-[380px] overflow-y-auto pr-1">
            {packageLinks.map((pkg) => (
              <Link
                key={pkg.href}
                href={pkg.href}
                onClick={onClose}
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#9F8BE7]/40 transition-all text-xs group"
              >
                <span className="text-white font-medium group-hover:text-[#9F8BE7] transition-colors">
                  {pkg.label}
                </span>
                <span className="text-[10px] font-mono-num px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 font-bold">
                  {pkg.starting}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Info Strip */}
      <div className="px-6 md:px-14 py-4 border-t border-white/10 text-xs font-mono-num text-[#838383] flex flex-col sm:flex-row items-center justify-between gap-4">
        <span>© {new Date().getFullYear()} Unified Branding Experts. All Rights Reserved.</span>
        <div className="flex items-center gap-6">
          <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-white transition-colors">
            {COMPANY_INFO.phone}
          </a>
          <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
            {COMPANY_INFO.email}
          </a>
        </div>
      </div>
    </div>
  );
}
