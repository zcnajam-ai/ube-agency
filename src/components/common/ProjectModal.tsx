"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X, CheckCircle2, Send, Sparkles, Phone, Mail } from "lucide-react";
import confetti from "canvas-confetti";
import { COMPANY_INFO } from "@/data/company";
import { useScroll } from "@/components/providers/SmoothScrollProvider";

export default function ProjectModal() {
  const { isProjectModalOpen, closeProjectModal, selectedServiceForModal } = useScroll();

  const [mounted, setMounted] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "$15k – $30k",
    timeline: "1–2 Months",
    description: "",
    honeypot: "",
  });

  const activeService = formData.service || selectedServiceForModal || "eCommerce Store Setup";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  // Keyboard Escape listener
  useEffect(() => {
    if (!isProjectModalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeProjectModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    const timer = setTimeout(() => {
      if (nameInputRef.current) {
        nameInputRef.current.focus({ preventScroll: true });
      }
    }, 120);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timer);
    };
  }, [isProjectModalOpen, closeProjectModal]);

  // Reset scroll to top whenever opened
  useEffect(() => {
    if (isProjectModalOpen && overlayRef.current) {
      overlayRef.current.scrollTop = 0;
    }
  }, [isProjectModalOpen]);

  if (!isProjectModalOpen || !mounted) return null;

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
  const timelineList = ["Immediately (ASAP)", "1–2 Months", "3–6 Months", "Flexible"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;

    if (!formData.name || !formData.email || !formData.description) {
      setError("Please fill in all required fields (Name, Email, Project Details).");
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          service: activeService,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to submit form.");
      }

      setIsSubmitted(true);

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#9F8BE7", "#DDF160", "#10B981", "#161616"],
        });
      } catch {
        // fallback
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Submission failed. Please email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    closeProjectModal();
  };

  const modalContent = (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      data-lenis-prevent="true"
      data-lenis-prevent-wheel="true"
      data-lenis-prevent-touch="true"
      className="fixed inset-0 z-[99999] overflow-y-auto overflow-x-hidden bg-black/75 backdrop-blur-md animate-in fade-in duration-200 select-auto"
      style={{
        WebkitOverflowScrolling: "touch",
        overscrollBehavior: "contain",
        touchAction: "pan-y",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeProjectModal();
      }}
      onWheel={(e) => {
        e.stopPropagation();
      }}
      onTouchMove={(e) => {
        e.stopPropagation();
      }}
    >
      {/* Min-h-full wrapper ensures centered layout on large screens and natural complete scrolling on smaller laptops and mobile */}
      <div
        className="min-h-full w-full flex items-center justify-center p-3 sm:p-6 md:p-8"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeProjectModal();
        }}
      >
        <div
          data-lenis-prevent="true"
          className="relative w-full max-w-3xl my-6 sm:my-10 bg-white border border-[#E0DDDB] rounded-3xl p-6 sm:p-10 md:p-12 shadow-[0_25px_80px_rgba(0,0,0,0.4)] text-[#161616]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={closeProjectModal}
            aria-label="Close inquiry modal"
            className="absolute top-5 sm:top-7 right-5 sm:right-7 w-10 h-10 rounded-full border border-[#E0DDDB] bg-[#FAF7F6] hover:border-[#9F8BE7] flex items-center justify-center text-[#161616] transition-all cursor-pointer shadow-2xs group z-10"
          >
            <X className="w-5 h-5 text-[#585858] group-hover:text-[#161616] transition-colors" />
          </button>

          {isSubmitted ? (
            <div className="py-12 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#9F8BE7]/20 border border-[#9F8BE7] text-[#161616] mx-auto flex items-center justify-center animate-bounce">
                <CheckCircle2 className="w-8 h-8 text-[#9F8BE7]" />
              </div>
              <div className="space-y-2">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#161616]">
                  Inquiry Received!
                </h3>
                <p className="text-sm text-[#585858] max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-[#161616] font-bold">{formData.name}</span>. Our Senior Strategy
                  Director will review your requirements and follow up within 24 hours.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#FAF7F6] border border-[#E0DDDB] max-w-sm mx-auto text-xs font-mono-num text-[#303030] space-y-1 text-left">
                <div><span className="text-[#838383]">Service:</span> {activeService}</div>
                <div><span className="text-[#838383]">Target Budget:</span> {formData.budget}</div>
                <div><span className="text-[#838383]">Timeline:</span> {formData.timeline}</div>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="px-8 py-3 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all shadow-md cursor-pointer"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Header */}
              <div className="pr-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F6] border border-[#E0DDDB] text-xs font-mono-num text-[#9F8BE7] font-bold mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>START YOUR GROWTH SYSTEM</span>
                </div>
                <h2 id="modal-title" className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#161616] leading-tight">
                  Let&apos;s Build Something Extraordinary.
                </h2>
                <p className="text-xs sm:text-sm text-[#585858] mt-2 leading-relaxed">
                  Fill out the project scope below, or call our team directly at{" "}
                  <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-[#161616] font-bold underline font-mono-num">
                    {COMPANY_INFO.phone}
                  </a>.
                </p>
              </div>

              {/* Anti-spam honeypot (hidden) */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* 1. Service Selection */}
              <div>
                <label className="block text-xs font-mono-num uppercase tracking-wider text-[#585858] font-bold mb-3">
                  1. What service do you need? <span className="text-[#9F8BE7]">*</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {servicesList.map((srv) => (
                    <button
                      key={srv}
                      type="button"
                      onClick={() => setFormData({ ...formData, service: srv })}
                      className={`px-3.5 py-2 rounded-xl text-xs font-display font-bold border transition-all cursor-pointer ${
                        activeService === srv
                          ? "bg-[#9F8BE7] text-[#161616] border-[#9F8BE7] shadow-sm"
                          : "bg-[#FAF7F6] text-[#303030] border-[#E0DDDB] hover:border-[#9F8BE7]"
                      }`}
                    >
                      {srv}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Budget Selection */}
              <div>
                <label className="block text-xs font-mono-num uppercase tracking-wider text-[#585858] font-bold mb-3">
                  2. Approximate Project Investment
                </label>
                <div className="flex flex-wrap gap-2">
                  {budgetList.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setFormData({ ...formData, budget: b })}
                      className={`px-3.5 py-2 rounded-xl text-xs font-mono-num font-bold border transition-all cursor-pointer ${
                        formData.budget === b
                          ? "bg-[#161616] text-white border-[#161616] shadow-sm"
                          : "bg-[#FAF7F6] text-[#303030] border-[#E0DDDB] hover:border-[#9F8BE7]"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Timeline Selection */}
              <div>
                <label className="block text-xs font-mono-num uppercase tracking-wider text-[#585858] font-bold mb-3">
                  3. Expected Launch Timeline
                </label>
                <div className="flex flex-wrap gap-2">
                  {timelineList.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setFormData({ ...formData, timeline: t })}
                      className={`px-3.5 py-2 rounded-xl text-xs font-display font-bold border transition-all cursor-pointer ${
                        formData.timeline === t
                          ? "bg-[#DDF160] text-[#161616] border-[#DDF160] shadow-sm"
                          : "bg-[#FAF7F6] text-[#303030] border-[#E0DDDB] hover:border-[#9F8BE7]"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono-num text-[#585858] font-bold mb-1.5">
                    Your Full Name <span className="text-[#9F8BE7]">*</span>
                  </label>
                  <input
                    ref={nameInputRef}
                    type="text"
                    required
                    placeholder="e.g. Eleanor Vance"
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
                    placeholder="e.g. eleanor@company.com"
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
                    placeholder="e.g. +1 (555) 019-2834"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF7F6] border border-[#E0DDDB] text-[#161616] placeholder-[#B2AEAD] focus:outline-none focus:border-[#9F8BE7] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-num text-[#585858] font-bold mb-1.5">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Vance Global"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF7F6] border border-[#E0DDDB] text-[#161616] placeholder-[#B2AEAD] focus:outline-none focus:border-[#9F8BE7] text-sm"
                  />
                </div>
              </div>

              {/* Requirements Textarea */}
              <div>
                <label className="block text-xs font-mono-num text-[#585858] font-bold mb-1.5">
                  Briefly describe your goals or requirements <span className="text-[#9F8BE7]">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about your brand vision, key challenges, target launch date, and desired results..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF7F6] border border-[#E0DDDB] text-[#161616] placeholder-[#B2AEAD] focus:outline-none focus:border-[#9F8BE7] text-sm resize-none"
                />
              </div>

              {error && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-mono-num">
                  {error}
                </div>
              )}

              {/* Bottom Bar with Contact & Submit Button */}
              <div className="pt-4 border-t border-[#E0DDDB] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono-num text-[#585858]">
                  <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="flex items-center gap-1.5 hover:text-[#161616] transition-colors">
                    <Phone className="w-3.5 h-3.5 text-[#9F8BE7]" />
                    <span>{COMPANY_INFO.phone}</span>
                  </a>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-1.5 hover:text-[#161616] transition-colors">
                    <Mail className="w-3.5 h-3.5 text-[#9F8BE7]" />
                    <span>{COMPANY_INFO.email}</span>
                  </a>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#9F8BE7] text-[#161616] font-display font-bold text-sm hover:bg-[#b4a3f7] transition-all flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(159,139,231,0.4)] disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Submitting Scope...</span>
                  ) : (
                    <>
                      <span>Submit Project Scope</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
