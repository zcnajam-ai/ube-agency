"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Sparkles, Send, CheckCircle2, ShieldCheck } from "lucide-react";
import confetti from "canvas-confetti";
import { COMPANY_INFO } from "@/data/company";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "eCommerce Store Setup",
    budget: "$15k – $30k",
    timeline: "1–2 Months",
    description: "",
    honeypot: "",
  });

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

  const budgetList = ["< $5,000", "$5k – $15k", "$15k – $30k", "$30k – $60k", "$60k+"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;

    if (!formData.name || !formData.email || !formData.description) {
      setError("Please complete all required fields.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to submit form.");
      }

      setIsSubmitted(true);
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
          Tell us about your brand, goals, and timeline. Our senior team responds within 24 hours with an actionable roadmap.
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
              className="flex items-center gap-3 p-4 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] hover:border-[#9F8BE7] transition-all text-[#161616]"
            >
              <div className="w-9 h-9 rounded-xl bg-[#9F8BE7]/20 flex items-center justify-center text-[#161616] font-bold">
                <Mail className="w-4 h-4 text-[#9F8BE7]" />
              </div>
              <div>
                <span className="text-[10px] text-[#585858] block">EMAIL</span>
                <span className="font-bold truncate block max-w-[220px]">
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
              <span>Full project scope proposal in 24 hours</span>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Project Inquiry Form */}
        <div className="lg:col-span-8 p-8 sm:p-12 rounded-3xl bg-white border border-[#E0DDDB] shadow-sm">
          {isSubmitted ? (
            <div className="text-center py-16 space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2 max-w-md mx-auto">
                <h3 className="font-display text-2xl font-bold text-[#161616]">
                  Inquiry Received.
                </h3>
                <p className="text-sm text-[#585858]">
                  Thank you for reaching out. A senior member of our team will review your requirements and respond within 24 hours.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-2.5 rounded-full border border-[#E0DDDB] text-xs font-mono-num font-bold hover:border-[#9F8BE7] transition-all cursor-pointer"
              >
                Submit Another Inquiry
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
