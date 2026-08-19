"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Sparkles, Send, CheckCircle2, ShieldCheck } from "lucide-react";
import confetti from "canvas-confetti";
import { COMPANY_INFO } from "@/data/company";

export default function ContactPage() {
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
          <span>CONTACT & PROJECT INQUIRIES</span>
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
              Prefer an immediate conversation? Reach our Chicago leadership line directly.
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
                <span className="text-[10px] text-[#585858] block uppercase font-bold">Telephone</span>
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
                <span className="text-[10px] text-[#585858] block uppercase font-bold">Inquiries</span>
                <span className="break-all font-medium">{COMPANY_INFO.email}</span>
              </div>
            </a>

            <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] text-[#585858] text-xs">
              <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#585858] shrink-0 border border-[#E0DDDB]">
                <MapPin className="w-4 h-4 text-[#9F8BE7]" />
              </div>
              <div>
                <span className="text-[10px] text-[#585858] block uppercase font-bold">HQ Address</span>
                <span>{COMPANY_INFO.address.full}</span>
              </div>
            </div>
          </div>

          {/* Social Proof Badges */}
          <div className="border-t border-[#E0DDDB] pt-6 space-y-2 text-xs font-mono-num text-[#585858]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>200+ Projects Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Bespoke Code Architecture</span>
            </div>
          </div>
        </div>

        {/* Right Side: Project Form (Clean White Card) */}
        <div className="lg:col-span-8 p-8 sm:p-12 rounded-3xl bg-white border border-[#E0DDDB] shadow-xs">
          {isSubmitted ? (
            <div className="py-12 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#9F8BE7]/20 border border-[#9F8BE7] text-[#161616] mx-auto flex items-center justify-center animate-bounce">
                <CheckCircle2 className="w-8 h-8 text-[#9F8BE7]" />
              </div>
              <div className="space-y-2">
                <h3 className="font-display text-3xl font-bold text-[#161616]">Scope Submitted!</h3>
                <p className="text-sm text-[#585858] max-w-md mx-auto">
                  Thank you, <span className="text-[#161616] font-bold">{formData.name}</span>. We will review your
                  project and get in touch within 24 hours.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="px-8 py-3 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all cursor-pointer shadow-xs"
              >
                Send Another Note
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Service Selectors */}
              <div>
                <label className="block text-xs font-mono-num uppercase tracking-wider text-[#585858] font-bold mb-2.5">
                  Select Primary Service <span className="text-[#9F8BE7]">*</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {servicesList.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setFormData({ ...formData, service: s })}
                      className={`px-3.5 py-2 rounded-xl text-xs font-display font-bold border transition-all cursor-pointer ${
                        formData.service === s
                          ? "bg-[#9F8BE7] text-[#161616] border-[#9F8BE7] shadow-xs"
                          : "bg-[#FAF7F6] text-[#303030] border-[#E0DDDB] hover:border-[#9F8BE7]"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-xs font-mono-num uppercase tracking-wider text-[#585858] font-bold mb-2.5">
                  Target Investment Range
                </label>
                <div className="flex flex-wrap gap-2">
                  {budgetList.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setFormData({ ...formData, budget: b })}
                      className={`px-3.5 py-2 rounded-xl text-xs font-mono-num font-bold border transition-all cursor-pointer ${
                        formData.budget === b
                          ? "bg-[#161616] text-white border-[#161616] shadow-xs"
                          : "bg-[#FAF7F6] text-[#303030] border-[#E0DDDB] hover:border-[#9F8BE7]"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono-num text-[#585858] font-bold mb-1.5">
                    Your Name <span className="text-[#9F8BE7]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Johnathan Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF7F6] border border-[#E0DDDB] text-[#161616] placeholder-[#B2AEAD] focus:outline-none focus:border-[#9F8BE7] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-num text-[#585858] font-bold mb-1.5">
                    Work Email <span className="text-[#9F8BE7]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. john@brand.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF7F6] border border-[#E0DDDB] text-[#161616] placeholder-[#B2AEAD] focus:outline-none focus:border-[#9F8BE7] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-num text-[#585858] font-bold mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +1 224-266-8081"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF7F6] border border-[#E0DDDB] text-[#161616] placeholder-[#B2AEAD] focus:outline-none focus:border-[#9F8BE7] text-sm font-mono-num"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-num text-[#585858] font-bold mb-1.5">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Brand Co."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF7F6] border border-[#E0DDDB] text-[#161616] placeholder-[#B2AEAD] focus:outline-none focus:border-[#9F8BE7] text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono-num text-[#585858] font-bold mb-1.5">
                  Project Details & Goals <span className="text-[#9F8BE7]">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Share details about your objectives, current challenges, and requirements..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF7F6] border border-[#E0DDDB] text-[#161616] placeholder-[#B2AEAD] focus:outline-none focus:border-[#9F8BE7] text-sm resize-none"
                />
              </div>

              {error && <p className="text-xs text-rose-600 font-bold">{error}</p>}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm md:text-base hover:bg-[#b4a3f7] transition-all shadow-[0_4px_20px_rgba(159,139,231,0.4)] flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Sending Scope...</span>
                ) : (
                  <>
                    <span>Submit Project Scope</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
