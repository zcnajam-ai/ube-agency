import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScroll } from "@/components/providers/SmoothScrollProvider";
import {
  X,
  Send,
  RotateCcw,
  ArrowUpRight,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Mail,
  Compass,
  Layers,
  Calculator,
  Briefcase,
  Headphones,
} from "lucide-react";
import { trackConciergeEvent } from "@/lib/conciergeAnalytics";
import {
  INITIAL_PATHWAYS,
  CONCIERGE_DECISION_TREE,
  ConciergeOption,
  ConciergeRecommendation,
  matchKeywordIntent,
} from "@/data/conciergeDecisionTree";

export interface ChatMessage {
  id: string;
  role: "user" | "concierge";
  content: string;
  options?: ConciergeOption[];
  recommendation?: ConciergeRecommendation;
  showPathways?: boolean;
  showContactCard?: boolean;
  timestamp: string;
}

interface ConciergeChatProps {
  isOpen: boolean;
  onClose: () => void;
}

const INITIAL_GREETING_MESSAGE: ChatMessage = {
  id: "greeting-0",
  role: "concierge",
  content:
    "Welcome to **Unified Branding Experts**.\n\nTell us what you're looking to achieve, or choose a pathway below to find the right services, packages, and project estimates.",
  showPathways: true,
  timestamp: "Just now",
};

let counter = 0;
function uniqueId(prefix: string) {
  counter++;
  return `${prefix}-${counter}-${Math.random().toString(36).substring(2, 7)}`;
}

export default function ConciergeChat({ isOpen, onClose }: ConciergeChatProps) {
  const pathname = usePathname();
  const { openProjectModal } = useScroll();

  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_GREETING_MESSAGE]);
  const [inputValue, setInputValue] = useState("");
  const [currentPathway, setCurrentPathway] = useState<string | null>(null);
  const [showEstimateForm, setShowEstimateForm] = useState(false);
  const [estimateData, setEstimateData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Website Design & Development",
    budget: "$1,500 - $3,500",
    timeline: "2-4 Weeks",
    notes: "",
  });
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);
  const [leadSuccess, setLeadSuccess] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatScrollContainerRef = useRef<HTMLDivElement>(null);

  // 1. Route Change Safety: Automatically minimize chatbot whenever pathname changes while open
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [pathname]);

  // 2. Mobile Body Scroll Lock & Cleanup
  useEffect(() => {
    if (isOpen && typeof window !== "undefined" && window.innerWidth < 768) {
      document.body.style.overflow = "hidden";
    } else if (typeof window !== "undefined") {
      document.body.style.overflow = "";
    }

    return () => {
      if (typeof window !== "undefined") {
        document.body.style.overflow = "";
      }
    };
  }, [isOpen]);

  // 3. Navigation & Modal Action Handlers
  const handleLinkAction = (url?: string, label?: string) => {
    if (url?.includes("package")) {
      trackConciergeEvent("package_clicked", { packageName: label });
    } else if (url?.includes("work")) {
      trackConciergeEvent("work_clicked");
    }
    onClose(); // Auto-close chatbot panel on mobile/desktop navigation
  };

  const handleEstimateAction = (serviceName?: string) => {
    trackConciergeEvent("estimate_started", { source: "rec_card" });
    onClose(); // Close chatbot drawer first
    openProjectModal(serviceName || estimateData.service); // Open global ProjectModal
  };

  // Auto-scroll to latest message
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      trackConciergeEvent("concierge_opened");
    }
  }, [isOpen, messages, showEstimateForm]);

  // Reset Concierge
  const handleReset = () => {
    setMessages([
      {
        id: uniqueId("reset"),
        role: "concierge",
        content:
          "Concierge reset. What business or project goal would you like help with?",
        showPathways: true,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
    setCurrentPathway(null);
    setShowEstimateForm(false);
    setLeadSuccess(false);
  };

  // Handle Pathway Selection (e.g. "Build a Website", "Launch an Online Store")
  const handlePathwaySelect = (pathwayValue: string, label: string) => {
    trackConciergeEvent("pathway_selected", { pathway: pathwayValue });
    setCurrentPathway(pathwayValue);

    const userMsg: ChatMessage = {
      id: uniqueId("user"),
      role: "user",
      content: label,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    const treeNode = CONCIERGE_DECISION_TREE[pathwayValue];

    if (!treeNode) {
      setMessages((prev) => [
        ...prev,
        userMsg,
        {
          id: uniqueId("asst"),
          role: "concierge",
          content:
            "I can help you explore our verified services. Choose an area of focus below:",
          showPathways: true,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
      return;
    }

    // Check if there is a follow-up question
    if (treeNode.question && treeNode.options) {
      setMessages((prev) => [
        ...prev,
        userMsg,
        {
          id: uniqueId("asst"),
          role: "concierge",
          content: treeNode.question!,
          options: treeNode.options,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    } else if (treeNode.recommendation) {
      // Immediate recommendation (e.g. compare packages)
      const rec = treeNode.recommendation();
      trackConciergeEvent("service_recommended", { serviceSlug: rec.title });
      setMessages((prev) => [
        ...prev,
        userMsg,
        {
          id: uniqueId("asst"),
          role: "concierge",
          content: `Here are the approved details for **${rec.title}**:`,
          recommendation: rec,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    }
  };

  // Handle Sub-option follow-up selection (e.g. "New Website", "Redesign", "Dropshipping")
  const handleSubOptionSelect = (subOptionValue: string, label: string) => {
    const userMsg: ChatMessage = {
      id: uniqueId("user"),
      role: "user",
      content: label,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    const treeNode = currentPathway ? CONCIERGE_DECISION_TREE[currentPathway] : null;
    const rec = treeNode?.recommendation
      ? treeNode.recommendation(subOptionValue)
      : null;

    if (rec) {
      trackConciergeEvent("service_recommended", {
        pathway: currentPathway || undefined,
        serviceSlug: rec.title,
      });

      setMessages((prev) => [
        ...prev,
        userMsg,
        {
          id: uniqueId("asst"),
          role: "concierge",
          content: `Based on your selection, here is our recommended UBE solution:`,
          recommendation: rec,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    } else {
      setMessages((prev) => [
        ...prev,
        userMsg,
        {
          id: uniqueId("asst"),
          role: "concierge",
          content:
            "I can help you find the right Unified Branding Experts service. Choose what you're looking to accomplish below.",
          showPathways: true,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    }
  };

  // Handle Deterministic Text Input Matching
  const handleTextSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = inputValue.trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: uniqueId("user"),
      role: "user",
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setInputValue("");
    const match = matchKeywordIntent(text);

    if (match.matched) {
      if (match.special === "contact") {
        trackConciergeEvent("human_handoff");
        setMessages((prev) => [
          ...prev,
          userMsg,
          {
            id: uniqueId("asst"),
            role: "concierge",
            content:
              "You can connect directly with our directors and technical team through any of the options below:",
            showContactCard: true,
            timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          },
        ]);
        return;
      }

      if (match.special === "work") {
        trackConciergeEvent("work_clicked");
        setMessages((prev) => [
          ...prev,
          userMsg,
          {
            id: uniqueId("asst"),
            role: "concierge",
            content:
              "You can explore our verified client case studies including Fixoria Studio, Happy Knot Creations, Everhome Real Estate, and Eau'dacity Luxury Fragrance.",
            recommendation: {
              title: "Client Case Studies & Portfolio",
              badge: "Verified Work",
              summary:
                "Explore complete brand transformations, architectural identity kits, and custom Shopify eCommerce storefronts built for scale.",
              actions: [
                { type: "link", label: "View All Case Studies", url: "/work" },
                { type: "link", label: "Fixoria Studio Brand System", url: "/work/fixoria-studio-brand-identity-system" },
                { type: "link", label: "Happy Knot Shopify Storefront", url: "/work/happy-knot-creations-shopify-storefront" },
                { type: "link", label: "Everhome Real Estate Study", url: "/work/everhome-real-estate-brand-system" },
                { type: "estimate", label: "Get Project Estimate" },
              ],
            },
            timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          },
        ]);
        return;
      }

      if (match.pathway) {
        setCurrentPathway(match.pathway);
        const node = CONCIERGE_DECISION_TREE[match.pathway];
        if (node) {
          if (match.subOption && node.recommendation) {
            const rec = node.recommendation(match.subOption);
            setMessages((prev) => [
              ...prev,
              userMsg,
              {
                id: uniqueId("asst"),
                role: "concierge",
                content: `Here is our recommended solution for **${rec.title}**:`,
                recommendation: rec,
                timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
              },
            ]);
            return;
          }

          if (node.question && node.options) {
            setMessages((prev) => [
              ...prev,
              userMsg,
              {
                id: uniqueId("asst"),
                role: "concierge",
                content: node.question!,
                options: node.options,
                timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
              },
            ]);
            return;
          }

          if (node.recommendation) {
            const rec = node.recommendation();
            setMessages((prev) => [
              ...prev,
              userMsg,
              {
                id: uniqueId("asst"),
                role: "concierge",
                content: `Here is our recommended solution for **${rec.title}**:`,
                recommendation: rec,
                timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
              },
            ]);
            return;
          }
        }
      }
    }

    // Fallback for unmatched/unknown input
    setMessages((prev) => [
      ...prev,
      userMsg,
      {
        id: uniqueId("asst"),
        role: "concierge",
        content:
          "I can help you find the right Unified Branding Experts service. Choose what you're looking to accomplish below:",
        showPathways: true,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
  };

  // Lead Submission
  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!estimateData.name || (!estimateData.email && !estimateData.phone)) return;

    setIsSubmittingLead(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: estimateData.name,
          email: estimateData.email,
          phone: estimateData.phone,
          service: estimateData.service,
          budget: estimateData.budget,
          description: `Concierge Lead Submission. Timeline: ${estimateData.timeline}. Notes: ${estimateData.notes || "N/A"}`,
        }),
      });

      if (res.ok) {
        setLeadSuccess(true);
        trackConciergeEvent("lead_submitted", {
          serviceSlug: estimateData.service,
          projectType: estimateData.budget,
        });

        setMessages((prev) => [
          ...prev,
          {
            id: uniqueId("lead-confirm"),
            role: "concierge",
            content: `Thank you, **${estimateData.name}**! Your project details have been received. Our team will review your scope and follow up with you regarding next steps.`,
            timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          },
        ]);
        setTimeout(() => setShowEstimateForm(false), 2200);
      }
    } catch (err) {
      console.error("Lead submit error:", err);
    } finally {
      setIsSubmittingLead(false);
    }
  };

  // Render markdown bolding
  const renderFormattedText = (text: string) => {
    const lines = text.split("\n");
    return lines.map((line, idx) => {
      const parts = line.split(/(\*\*[^*]+\*\*)/g);
      return (
        <p key={idx} className={line.trim() === "" ? "h-2" : "leading-relaxed"}>
          {parts.map((part, pIdx) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              return (
                <strong key={pIdx} className="font-semibold text-[#161616]">
                  {part.slice(2, -2)}
                </strong>
              );
            }
            return part;
          })}
        </p>
      );
    });
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-label="UBE Project Concierge"
      data-lenis-prevent="true"
      className="fixed z-[9999] inset-0 sm:inset-auto sm:bottom-6 sm:right-6 w-full sm:w-[430px] sm:max-w-[calc(100vw-3rem)] h-[100dvh] sm:h-[660px] sm:max-h-[calc(100vh-5rem)] flex flex-col bg-[#FAF7F6] sm:rounded-3xl sm:border sm:border-[#E0DDDB] sm:shadow-2xl overflow-hidden font-body text-[#161616] animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      {/* 1. Header */}
      <div className="flex items-center justify-between px-5 py-4 bg-white/95 backdrop-blur-md border-b border-[#E0DDDB] select-none">
        <div className="flex items-center gap-3">
          <div className="relative w-9 h-9 rounded-full bg-[#161616] text-[#9F8BE7] flex items-center justify-center shadow-xs">
            <Compass className="w-4 h-4" />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-display text-sm font-bold tracking-tight text-[#161616]">
                UBE Project Concierge
              </h2>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono-num font-bold bg-[#FAF7F6] border border-[#E0DDDB] text-[#9F8BE7]">
                GUIDE
              </span>
            </div>
            <p className="text-[11px] text-[#585858]">Tell us what you&apos;re looking to achieve</p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={handleReset}
            title="Reset concierge"
            className="p-2 rounded-full text-[#585858] hover:text-[#161616] hover:bg-[#FAF7F6] transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={onClose}
            title="Close concierge"
            className="p-2 rounded-full text-[#585858] hover:text-[#161616] hover:bg-[#FAF7F6] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2. Messages & Interactive Choices Scroll Container */}
      <div
        ref={chatScrollContainerRef}
        data-lenis-prevent="true"
        className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 touch-pan-y overscroll-contain"
      >
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex flex-col ${m.role === "user" ? "items-end" : "items-start"} space-y-2`}
          >
            <div className="flex items-center gap-1.5 text-[10px] text-[#585858] px-1 font-mono-num">
              {m.role === "user" ? (
                <>
                  <span>You</span>
                  <span>•</span>
                  <span>{m.timestamp}</span>
                </>
              ) : (
                <>
                  <Compass className="w-3 h-3 text-[#9F8BE7]" />
                  <span>UBE Concierge</span>
                  <span>•</span>
                  <span>{m.timestamp}</span>
                </>
              )}
            </div>

            {/* Bubble */}
            <div
              className={`max-w-[92%] sm:max-w-[88%] text-xs sm:text-sm leading-relaxed ${
                m.role === "user"
                  ? "bg-[#161616] text-white rounded-2xl rounded-tr-xs px-4 py-3 shadow-xs"
                  : "bg-white border border-[#E0DDDB] text-[#161616] rounded-2xl rounded-tl-xs p-4 shadow-xs space-y-2"
              }`}
            >
              {renderFormattedText(m.content)}
            </div>

            {/* Sub-option Follow-up Pills */}
            {m.options && m.options.length > 0 && (
              <div className="grid grid-cols-1 gap-1.5 w-full pt-1">
                {m.options.map((opt, optIdx) => (
                  <button
                    key={optIdx}
                    onClick={() => handleSubOptionSelect(opt.value, opt.label)}
                    className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#E0DDDB] hover:border-[#9F8BE7] hover:bg-[#FAF7F6] text-left text-xs font-display font-medium text-[#161616] transition-all shadow-2xs group cursor-pointer"
                  >
                    <span>{opt.label}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#585858] group-hover:text-[#9F8BE7] transition-colors" />
                  </button>
                ))}
              </div>
            )}

            {/* Recommended Service Card */}
            {m.recommendation && (
              <div className="w-full p-4 sm:p-5 rounded-2xl bg-white border border-[#9F8BE7] shadow-sm space-y-3.5 animate-in fade-in duration-200">
                <div className="flex items-center justify-between gap-2 border-b border-[#E0DDDB] pb-2.5">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[#9F8BE7] shrink-0" />
                    <h3 className="font-display text-xs sm:text-sm font-bold text-[#161616]">
                      {m.recommendation.title}
                    </h3>
                  </div>
                  {m.recommendation.badge && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono-num font-bold bg-[#FAF7F6] border border-[#E0DDDB] text-[#9F8BE7] shrink-0">
                      {m.recommendation.badge}
                    </span>
                  )}
                </div>

                <p className="text-xs text-[#585858] leading-relaxed">
                  {m.recommendation.summary}
                </p>

                {/* Actions Grid */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {m.recommendation.actions.map((act, actIdx) => (
                    <React.Fragment key={actIdx}>
                      {act.type === "link" && act.url ? (
                        <Link
                          href={act.url}
                          onClick={() => handleLinkAction(act.url, act.label)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF7F6] border border-[#E0DDDB] hover:border-[#9F8BE7] hover:bg-white text-xs font-mono-num font-bold text-[#161616] transition-all shadow-2xs group"
                        >
                          {act.url.includes("package") && <Layers className="w-3 h-3 text-[#9F8BE7]" />}
                          {act.url.includes("services") && <Compass className="w-3 h-3 text-[#9F8BE7]" />}
                          {act.url.includes("work") && <Briefcase className="w-3 h-3 text-[#9F8BE7]" />}
                          <span>{act.label}</span>
                          <ArrowUpRight className="w-3 h-3 text-[#585858] group-hover:text-[#9F8BE7] transition-colors" />
                        </Link>
                      ) : (
                        <button
                          onClick={() => handleEstimateAction(m.recommendation?.title)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#161616] text-white hover:bg-black text-xs font-mono-num font-bold transition-all shadow-2xs cursor-pointer"
                        >
                          <Calculator className="w-3 h-3 text-[#9F8BE7]" />
                          <span>{act.label}</span>
                        </button>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}

            {/* Direct Human Contact Card */}
            {m.showContactCard && (
              <div className="w-full p-4 rounded-2xl bg-white border border-[#E0DDDB] shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-xs font-display font-bold text-[#161616]">
                  <Headphones className="w-4 h-4 text-[#9F8BE7]" />
                  <span>Direct Communication Channels</span>
                </div>
                <div className="space-y-2">
                  <a
                    href="tel:+12242668081"
                    onClick={() => {
                      trackConciergeEvent("human_handoff", { source: "phone" });
                      onClose();
                    }}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF7F6] border border-[#E0DDDB] hover:border-[#9F8BE7] text-xs font-mono-num text-[#161616] transition-all"
                  >
                    <span className="flex items-center gap-2 font-bold">
                      <Phone className="w-3.5 h-3.5 text-[#9F8BE7]" />
                      +1 224-266-8081
                    </span>
                    <span className="text-[10px] text-[#585858]">Call Directly</span>
                  </a>

                  <a
                    href="mailto:info@unifiedbrandingexperts.com"
                    onClick={() => {
                      trackConciergeEvent("human_handoff", { source: "email" });
                      onClose();
                    }}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF7F6] border border-[#E0DDDB] hover:border-[#9F8BE7] text-xs font-mono-num text-[#161616] transition-all"
                  >
                    <span className="flex items-center gap-2 font-bold truncate max-w-[220px]">
                      <Mail className="w-3.5 h-3.5 text-[#9F8BE7] shrink-0" />
                      info@unifiedbrandingexperts.com
                    </span>
                    <span className="text-[10px] text-[#585858]">Send Email</span>
                  </a>

                  <button
                    onClick={() => handleEstimateAction()}
                    className="w-full py-2.5 rounded-xl bg-[#161616] text-white hover:bg-black text-xs font-display font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-xs"
                  >
                    <Calculator className="w-3.5 h-3.5 text-[#9F8BE7]" />
                    <span>Submit Project Inquiry</span>
                  </button>
                </div>
              </div>
            )}

            {/* 9 Entry Pathways Grid */}
            {m.showPathways && (
              <div className="pt-2 space-y-2 w-full">
                <div className="text-[11px] font-mono-num uppercase tracking-wider text-[#585858] font-bold px-1">
                  Choose a Project Pathway
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {INITIAL_PATHWAYS.map((p, idx) => (
                    <button
                      key={idx}
                      onClick={() => handlePathwaySelect(p.value, p.label)}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#E0DDDB] hover:border-[#9F8BE7] hover:bg-[#FAF7F6] text-left text-xs font-display font-medium text-[#161616] transition-all shadow-2xs group cursor-pointer"
                    >
                      <span>{p.label}</span>
                      <ChevronRight className="w-3 h-3 text-[#585858] group-hover:text-[#9F8BE7] transition-colors" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Project Estimate / Lead Capture Card */}
        {showEstimateForm && (
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#9F8BE7] shadow-md space-y-3.5 animate-in fade-in duration-200">
            <div className="flex items-center justify-between border-b border-[#E0DDDB] pb-2.5">
              <div className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-[#9F8BE7]" />
                <h3 className="font-display text-xs sm:text-sm font-bold text-[#161616]">
                  Get Project Estimate &amp; Proposal
                </h3>
              </div>
              <button
                onClick={() => setShowEstimateForm(false)}
                className="text-xs text-[#585858] hover:text-[#161616] cursor-pointer"
              >
                Cancel
              </button>
            </div>

            {leadSuccess ? (
              <div className="p-3.5 rounded-xl bg-emerald-50 text-emerald-800 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Proposal request submitted! Our team will review your requirements and follow up with you.</span>
              </div>
            ) : (
              <form onSubmit={handleLeadSubmit} className="space-y-2.5 text-xs">
                <div>
                  <label className="block text-[10px] font-mono-num uppercase text-[#585858] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Smith"
                    value={estimateData.name}
                    onChange={(e) => setEstimateData({ ...estimateData, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-[#FAF7F6] border border-[#E0DDDB] focus:outline-none focus:border-[#9F8BE7] text-xs"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[10px] font-mono-num uppercase text-[#585858] mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={estimateData.email}
                      onChange={(e) => setEstimateData({ ...estimateData, email: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-[#FAF7F6] border border-[#E0DDDB] focus:outline-none focus:border-[#9F8BE7] text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono-num uppercase text-[#585858] mb-1">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={estimateData.phone}
                      onChange={(e) => setEstimateData({ ...estimateData, phone: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-[#FAF7F6] border border-[#E0DDDB] focus:outline-none focus:border-[#9F8BE7] text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[10px] font-mono-num uppercase text-[#585858] mb-1">
                      Service
                    </label>
                    <select
                      value={estimateData.service}
                      onChange={(e) => setEstimateData({ ...estimateData, service: e.target.value })}
                      className="w-full px-2 py-2 rounded-lg bg-[#FAF7F6] border border-[#E0DDDB] focus:outline-none focus:border-[#9F8BE7] text-xs"
                    >
                      <option value="Website Design & Development">Website Design &amp; Dev</option>
                      <option value="Shopify & Custom eCommerce">Shopify &amp; eCommerce</option>
                      <option value="Brand Identity & Logo Design">Branding &amp; Logo</option>
                      <option value="AI SEO & Search Discovery">AI SEO &amp; Search</option>
                      <option value="Paid Ads (Google/Meta/TikTok)">Paid Advertising</option>
                      <option value="Mobile App Development">Mobile App Dev</option>
                      <option value="AI & CRM Automation">AI Automation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono-num uppercase text-[#585858] mb-1">
                      Target Budget
                    </label>
                    <select
                      value={estimateData.budget}
                      onChange={(e) => setEstimateData({ ...estimateData, budget: e.target.value })}
                      className="w-full px-2 py-2 rounded-lg bg-[#FAF7F6] border border-[#E0DDDB] focus:outline-none focus:border-[#9F8BE7] text-xs"
                    >
                      <option value="$500 – $1,000">$500 – $1,000</option>
                      <option value="$1,000 – $1,500">$1,000 – $1,500</option>
                      <option value="$1,500 – $2,000">$1,500 – $2,000</option>
                      <option value="$2,000+">$2,000+</option>
                      <option value="Other / Custom Budget">Other / Custom Budget</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[10px] font-mono-num uppercase text-[#585858] mb-1">
                      Timeline
                    </label>
                    <select
                      value={estimateData.timeline}
                      onChange={(e) => setEstimateData({ ...estimateData, timeline: e.target.value })}
                      className="w-full px-2 py-2 rounded-lg bg-[#FAF7F6] border border-[#E0DDDB] focus:outline-none focus:border-[#9F8BE7] text-xs"
                    >
                      <option value="Urgent (1-2 Weeks)">Urgent (1-2 Weeks)</option>
                      <option value="Standard (2-4 Weeks)">Standard (2-4 Weeks)</option>
                      <option value="Flexible (1-2 Months)">Flexible (1-2 Months)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono-num uppercase text-[#585858] mb-1">
                      Project Notes
                    </label>
                    <input
                      type="text"
                      placeholder="Key requirements..."
                      value={estimateData.notes}
                      onChange={(e) => setEstimateData({ ...estimateData, notes: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-[#FAF7F6] border border-[#E0DDDB] focus:outline-none focus:border-[#9F8BE7] text-xs"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmittingLead}
                  className="w-full py-2.5 rounded-lg bg-[#161616] text-white hover:bg-black font-display font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  {isSubmittingLead ? "Submitting..." : "Submit Proposal Request"}
                </button>
              </form>
            )}
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* 3. Footer / Disclaimer */}
      <div className="px-4 py-2 bg-white/70 border-t border-[#E0DDDB]/80 text-[10px] text-[#585858] leading-tight flex items-start gap-1.5">
        <ShieldCheck className="w-3.5 h-3.5 text-[#9F8BE7] shrink-0 mt-0.5" />
        <span>
          Explore official UBE service packages or connect directly with our directors at <strong>+1 224-266-8081</strong>.
        </span>
      </div>

      {/* 4. Text Input Bar */}
      <div className="p-3 sm:p-4 bg-white border-t border-[#E0DDDB]">
        <form onSubmit={handleTextSubmit} className="flex items-center gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type website, shopify, branding, SEO, ads..."
            className="flex-1 px-4 py-2.5 rounded-full bg-[#FAF7F6] border border-[#E0DDDB] text-xs sm:text-sm text-[#161616] placeholder:text-[#585858] focus:outline-none focus:border-[#9F8BE7] transition-all"
          />
          <button
            type="submit"
            disabled={!inputValue.trim()}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#161616] text-white disabled:opacity-40 hover:bg-black flex items-center justify-center transition-all shrink-0 shadow-xs cursor-pointer"
          >
            <Send className="w-4 h-4 text-[#9F8BE7]" />
          </button>
        </form>
      </div>
    </div>
  );
}
