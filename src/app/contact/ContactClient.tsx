"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Sparkles, Send, CheckCircle2, ShieldCheck } from "lucide-react";
import confetti from "canvas-confetti";
import { COMPANY_INFO } from "@/data/company";
import { trackLeadSubmit, trackPhoneClick, trackEmailClick } from "@/lib/analytics";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "eCommerce Store Setup",
    budget: "$500 – $1,000",
    timeline: "1–2 Months",
    description: "",
    honeypot: "",
  });

  const [customBudgetInput, setCustomBudgetInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const servicesList = [
    "eCommerce Store Setup",
    "Website Design & Dev",
    "Mobile App Development",
    "Brand Strategy & Logo",
    "AISEO & Search Optimization",
    "Google & Meta Ads",
    "TikTok & Social Media",
  ];

  const budgetList = [
    "$500 – $1,000",
    "$1,000 – $1,500",
    "$1,500 – $2,000",
    "$2,000+",
    "Other / Custom Budget",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;

    if (!formData.name || !formData.email || !formData.description) {
      setError("Please complete all required fields.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    const finalBudget =
      formData.budget === "Other / Custom Budget"
        ? customBudgetInput
          ? `Custom: $${customBudgetInput}`
          : "Other / Custom Budget"
        : formData.budget;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          budget: finalBudget,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to submit form.");
      }

      setIsSubmitted(true);

      // Track lead conversion event (safe properties, NO PII)
      trackLeadSubmit({
        service: formData.service,
        budget_range: finalBudget,
        timeline: formData.timeline,
        source_page: "/contact",
      });

      try {
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#9F8BE7", "#DDF160", "#10B981", "#161616"],
        });
      } catch {}
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Submission failed. Please email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-mono-num uppercase tracking-[0.25em] text-[#9F8BE7] font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>CONTACT &amp; PROJECT INQUIRIES</span>
        </div>
        <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#161616] leading-tight">
          Let&apos;s Build Your Growth System.
        </h1>
        <p className="text-base sm:text-xl text-[#585858] font-body leading-relaxed">
          Tell us about your brand, goals, and timeline. Our team will review your requirements and follow up with you.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Direct Contact Details (Clean White Card) */}
        <div className="lg:col-span-4 space-y-8 p-8 rounded-3xl bg-white border border-[#E0DDDB] shadow-xs">
          <div className="space-y-2">
            <h2 className="font-display text-xl font-bold text-[#161616]">
              Direct Contact
            </h2>
            <p className="text-xs text-[#585858] font-body">
              Prefer an immediate conversation? Reach our leadership team directly.
            </p>
          </div>

          <div className="space-y-4 text-sm font-mono-num">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              onClick={() => trackPhoneClick(COMPANY_INFO.phone)}
              className="flex items-center gap-3 p-4 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] hover:border-[#9F8BE7] transition-all text-[#161616]"
            >
              <div className="w-9 h-9 rounded-xl bg-[#9F8BE7]/20 flex items-center justify-center text-[#161616] font-bold">
                <Phone className="w-4 h-4 text-[#9F8BE7]" />
              </div>
              <div>
                <span className="text-[10px] text-[#585858] block">PHONE</span>
                <span className="font-bold">{COMPANY_INFO.phone}</span>
              </div>
            </a>

            <a
              href={`mailto:${COMPANY_INFO.email}`}
              onClick={() => trackEmailClick(COMPANY_INFO.email)}
              className="flex items-center gap-3 p-4 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] hover:border-[#9F8BE7] transition-all text-[#161616]"
            >
              <div className="w-9 h-9 rounded-xl bg-[#9F8BE7]/20 flex items-center justify-center text-[#161616] font-bold">
                <Mail className="w-4 h-4 text-[#9F8BE7]" />
              </div>
              <div>
                <span className="text-[10px] text-[#585858] block">EMAIL</span>
                <span className="font-bold break-all block min-w-0 text-xs">
                  {COMPANY_INFO.email}
                </span>
              </div>
            </a>

            <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] text-[#161616]">
              <div className="w-9 h-9 rounded-xl bg-[#DDF160]/20 flex items-center justify-center text-[#161616] font-bold shrink-0">
                <MapPin className="w-4 h-4 text-lime-700" />
              </div>
              <div>
                <span className="text-[10px] text-[#585858] block">HEADQUARTERS</span>
                <span className="text-xs leading-relaxed font-body">
                  {COMPANY_INFO.address.full}
                </span>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-[#E0DDDB] space-y-3">
            <div className="flex items-center gap-2 text-xs text-[#585858]">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Direct senior consultation, zero sales reps</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#585858]">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Full project scope proposal tailored to your goals</span>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Project Inquiry Form */}
        <div className="lg:col-span-8 p-8 sm:p-12 rounded-3xl bg-white border border-[#E0DDDB] shadow-sm">
          {isSubmitted ? (
            <div className="text-center py-12 space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2 max-w-md mx-auto">
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#161616] tracking-tight uppercase">
                  INQUIRY RECEIVED!
                </h3>
                <p className="text-sm text-[#585858] leading-relaxed">
                  Thank you, <span className="text-[#161616] font-bold">{formData.name}</span>. We&apos;ve received your project inquiry. Our team will review your requirements and follow up with you.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] max-w-md mx-auto text-xs font-mono-num text-[#303030] space-y-2 text-left shadow-2xs">
                <div className="text-[11px] font-bold text-[#9F8BE7] uppercase tracking-wider border-b border-[#E0DDDB] pb-1.5 mb-2">
                  Submission Summary
                </div>
                <div><span className="text-[#585858]">Service:</span> <strong className="text-[#161616]">{formData.service}</strong></div>
                <div>
                  <span className="text-[#585858]">Target Budget:</span>{" "}
                  <strong className="text-[#161616]">
                    {formData.budget === "Other / Custom Budget" && customBudgetInput
                      ? `Custom: $${customBudgetInput}`
                      : formData.budget}
                  </strong>
                </div>
                <div><span className="text-[#585858]">Timeline:</span> <strong className="text-[#161616]">{formData.timeline}</strong></div>
              </div>

              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="px-8 py-3.5 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-md cursor-pointer min-w-[140px]"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono-num font-bold text-[#161616] block">
                    YOUR NAME <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] text-sm text-[#161616] focus:outline-none focus:border-[#9F8BE7] transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono-num font-bold text-[#161616] block">
                    WORK EMAIL <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] text-sm text-[#161616] focus:outline-none focus:border-[#9F8BE7] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono-num font-bold text-[#161616] block">
                    PHONE / WHATSAPP
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] text-sm text-[#161616] focus:outline-none focus:border-[#9F8BE7] transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono-num font-bold text-[#161616] block">
                    COMPANY / BRAND NAME
                  </label>
                  <input
                    type="text"
                    placeholder="Acme Commerce"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] text-sm text-[#161616] focus:outline-none focus:border-[#9F8BE7] transition-all"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-2">
                <label className="text-xs font-mono-num font-bold text-[#161616] block">
                  PRIMARY SERVICE AREA
                </label>
                <div className="flex flex-wrap gap-2">
                  {servicesList.map((srv) => (
                    <button
                      key={srv}
                      type="button"
                      onClick={() => setFormData({ ...formData, service: srv })}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-mono-num transition-all cursor-pointer ${
                        formData.service === srv
                          ? "bg-[#161616] text-white font-bold shadow-xs"
                          : "bg-[#FAF7F6] text-[#585858] border border-[#E0DDDB] hover:border-[#9F8BE7]"
                      }`}
                    >
                      {srv}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget & Timeline Selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono-num font-bold text-[#161616] block">
                    ESTIMATED BUDGET
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {budgetList.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setFormData({ ...formData, budget: b })}
                        className={`px-3 py-1 rounded-xl text-xs font-mono-num transition-all cursor-pointer ${
                          formData.budget === b
                            ? "bg-[#9F8BE7] text-[#161616] font-bold"
                            : "bg-[#FAF7F6] text-[#585858] border border-[#E0DDDB]"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>

                  {formData.budget === "Other / Custom Budget" && (
                    <div className="mt-2 space-y-1 animate-fadeIn">
                      <label className="block text-[11px] font-mono-num font-bold text-[#161616]">
                        Your Estimated Budget
                      </label>
                      <div className="relative flex items-center">
                        <span className="absolute left-3 text-xs font-mono-num font-bold text-[#585858]">$</span>
                        <input
                          type="text"
                          placeholder="e.g. 750 or 2,500"
                          value={customBudgetInput}
                          onChange={(e) => setCustomBudgetInput(e.target.value)}
                          className="w-full pl-7 pr-3 py-2 rounded-xl bg-[#FAF7F6] border border-[#E0DDDB] text-xs font-mono-num text-[#161616] focus:outline-none focus:border-[#9F8BE7]"
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono-num font-bold text-[#161616] block">
                    TIMELINE
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] text-xs font-mono-num text-[#161616] focus:outline-none focus:border-[#9F8BE7]"
                  >
                    <option value="Immediately (ASAP)">Immediately (ASAP)</option>
                    <option value="1–2 Months">1–2 Months</option>
                    <option value="3–6 Months">3–6 Months</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono-num font-bold text-[#161616] block">
                  PROJECT DETAILS &amp; GOALS <span className="text-rose-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your current challenge, current platform, target launch date, and key deliverables..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] text-sm text-[#161616] focus:outline-none focus:border-[#9F8BE7] transition-all resize-none"
                />
              </div>

              {error && (
                <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-xs text-rose-600 font-mono-num">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(159,139,231,0.35)] cursor-pointer disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? "Sending Inquiry..." : "Submit Project Inquiry"}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
