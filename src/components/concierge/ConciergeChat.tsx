"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Sparkles,
  X,
  Send,
  RotateCcw,
  ArrowUpRight,
  ChevronRight,
  ShieldCheck,
  Bot,
  CheckCircle2,
  Phone,
  Compass,
  Layers,
  Calculator,
} from "lucide-react";
import { trackConciergeEvent } from "@/lib/conciergeAnalytics";

export interface ChatAction {
  type: "recommend_service" | "recommend_package" | "open_project_estimate" | "view_work" | "contact_team";
  label: string;
  route?: string;
  payload?: Record<string, unknown>;
}

export interface MessageItem {
  id: string;
  role: "user" | "assistant";
  content: string;
  actions?: ChatAction[];
  timestamp: string;
}

interface ConciergeChatProps {
  isOpen: boolean;
  onClose: () => void;
}

const INITIAL_INTENTS = [
  { label: "Build a Website", query: "I want to build a high-performance modern website." },
  { label: "Launch an Online Store", query: "I want to launch or scale an online store on Shopify." },
  { label: "Brand My Business", query: "I need a complete brand identity and logo system." },
  { label: "Improve Search Visibility", query: "How can I improve my search rankings and AI SEO visibility?" },
  { label: "Grow Through Advertising", query: "I want to run paid ads across Google, Meta, or TikTok." },
  { label: "Build an App", query: "I need a custom mobile app for iOS and Android." },
  { label: "Automate My Business", query: "I want to automate my CRM pipelines and lead follow-ups." },
  { label: "Compare Packages", query: "What are your standard service packages and pricing?" },
  { label: "I'm Not Sure", query: "Can you help me explore which service is right for my business?" },
];

const DEFAULT_GREETING: MessageItem = {
  id: "welcome-initial",
  role: "assistant",
  content:
    "Hello! I am your **UBE AI Sales & Service Concierge**.\n\nWe engineer brand identities, custom Next.js web applications, Shopify eCommerce, and AI search optimization. What would you like help with today?",
  timestamp: "Just now",
};

let messageCounter = 0;
function createMessageId(prefix: string): string {
  messageCounter++;
  return `${prefix}-${messageCounter}-${Math.random().toString(36).substring(2, 7)}`;
}

export default function ConciergeChat({ isOpen, onClose }: ConciergeChatProps) {
  const [messages, setMessages] = useState<MessageItem[]>([DEFAULT_GREETING]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showEstimateForm, setShowEstimateForm] = useState(false);
  const [estimateData, setEstimateData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Web & Branding",
    budget: "$1,000 - $3,000",
    notes: "",
  });
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);
  const [leadSuccess, setLeadSuccess] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatScrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll on new message
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [isOpen, messages, isLoading, showEstimateForm]);

  // Handle Send Message
  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isLoading) return;

    const userMessageId = createMessageId("user");
    const newUserMsg: MessageItem = {
      id: userMessageId,
      role: "user",
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, newUserMsg]);
    setInputValue("");
    setIsLoading(true);

    try {
      // Build conversation payload
      const payloadMessages = [...messages, newUserMsg].map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch("/api/concierge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: payloadMessages }),
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const data = await res.json();
      const assistantMsg: MessageItem = {
        id: createMessageId("asst"),
        role: "assistant",
        content: data.content || "I'm ready to assist with any questions regarding UBE's services.",
        actions: data.actions || [],
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      console.error("Chat error:", err);
      setMessages((prev) => [
        ...prev,
        {
          id: createMessageId("err"),
          role: "assistant",
          content:
            "I'm currently unable to reach the AI server. You can explore all our official packages directly at [/packages](/packages) or contact our team at **+1 224-266-8081**.",
          actions: [
            { type: "recommend_package", label: "View All Packages", route: "/packages" },
            { type: "contact_team", label: "Contact Us Directly", route: "/contact" },
          ],
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Reset Chat
  const handleReset = () => {
    setMessages([
      {
        id: createMessageId("reset"),
        role: "assistant",
        content:
          "Conversation reset. What business or project goal would you like to explore?",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
    setShowEstimateForm(false);
    setLeadSuccess(false);
  };

  // Action Click Handler
  const handleActionClick = (action: ChatAction) => {
    if (action.type === "open_project_estimate") {
      trackConciergeEvent("estimate_started", { source: "action_card" });
      setShowEstimateForm(true);
    } else if (action.type === "recommend_package") {
      trackConciergeEvent("package_viewed", { packageName: action.label });
    } else if (action.type === "recommend_service") {
      trackConciergeEvent("service_selected", { serviceSlug: action.route });
    } else if (action.type === "contact_team") {
      trackConciergeEvent("human_handoff");
    }
  };

  // Inline Lead Submission
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
          description: `AI Concierge Lead Submission. Notes: ${estimateData.notes || "N/A"}`,
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
            id: createMessageId("lead-success"),
            role: "assistant",
            content: `Thank you, **${estimateData.name}**! Your project details have been sent to our directors. We will contact you at **${estimateData.email || estimateData.phone}** within 24 hours with a custom project proposal.`,
            timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          },
        ]);
        setTimeout(() => setShowEstimateForm(false), 2000);
      }
    } catch (err) {
      console.error("Lead submission error:", err);
    } finally {
      setIsSubmittingLead(false);
    }
  };

  // Render markdown text simply
  const renderFormattedText = (text: string) => {
    const lines = text.split("\n");
    return lines.map((line, idx) => {
      // Bold replacement
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
      aria-label="UBE AI Sales & Service Concierge"
      data-lenis-prevent="true"
      className="fixed z-[9999] inset-0 sm:inset-auto sm:bottom-6 sm:right-6 w-full sm:w-[430px] sm:max-w-[calc(100vw-3rem)] h-full sm:h-[650px] sm:max-h-[calc(100vh-5rem)] flex flex-col bg-[#FAF7F6] sm:rounded-3xl sm:border sm:border-[#E0DDDB] sm:shadow-2xl overflow-hidden font-body text-[#161616] animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      {/* 1. Header Bar */}
      <div className="flex items-center justify-between px-5 py-4 bg-white/90 backdrop-blur-md border-b border-[#E0DDDB] select-none">
        <div className="flex items-center gap-3">
          <div className="relative w-9 h-9 rounded-full bg-[#161616] text-[#9F8BE7] flex items-center justify-center shadow-xs">
            <Sparkles className="w-4 h-4" />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-display text-sm font-bold tracking-tight text-[#161616]">
                UBE AI Concierge
              </h2>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono-num font-bold bg-[#FAF7F6] border border-[#E0DDDB] text-[#9F8BE7]">
                OFFICIAL
              </span>
            </div>
            <p className="text-[11px] text-[#585858]">Grounded Sales &amp; Service Guide</p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={handleReset}
            title="Reset conversation"
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

      {/* 2. Messages Scroll Container */}
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
                  <Bot className="w-3 h-3 text-[#9F8BE7]" />
                  <span>UBE AI</span>
                  <span>•</span>
                  <span>{m.timestamp}</span>
                </>
              )}
            </div>

            <div
              className={`max-w-[90%] sm:max-w-[85%] text-xs sm:text-sm leading-relaxed ${
                m.role === "user"
                  ? "bg-[#161616] text-white rounded-2xl rounded-tr-xs px-4 py-3 shadow-xs"
                  : "bg-white border border-[#E0DDDB] text-[#161616] rounded-2xl rounded-tl-xs p-4 shadow-xs space-y-2"
              }`}
            >
              {renderFormattedText(m.content)}
            </div>

            {/* Action Cards for Assistant */}
            {m.role === "assistant" && m.actions && m.actions.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-1 max-w-[95%]">
                {m.actions.map((act, actIdx) => (
                  <React.Fragment key={actIdx}>
                    {act.route && act.type !== "open_project_estimate" ? (
                      <Link
                        href={act.route}
                        onClick={() => handleActionClick(act)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E0DDDB] hover:border-[#9F8BE7] hover:bg-[#FAF7F6] text-xs font-mono-num font-bold text-[#161616] transition-all shadow-2xs group"
                      >
                        {act.type === "recommend_package" && <Layers className="w-3 h-3 text-[#9F8BE7]" />}
                        {act.type === "recommend_service" && <Compass className="w-3 h-3 text-[#9F8BE7]" />}
                        {act.type === "view_work" && <Sparkles className="w-3 h-3 text-[#9F8BE7]" />}
                        {act.type === "contact_team" && <Phone className="w-3 h-3 text-[#9F8BE7]" />}
                        <span>{act.label}</span>
                        <ArrowUpRight className="w-3 h-3 text-[#585858] group-hover:text-[#9F8BE7] transition-colors" />
                      </Link>
                    ) : (
                      <button
                        onClick={() => handleActionClick(act)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#161616] text-white hover:bg-black text-xs font-mono-num font-bold transition-all shadow-2xs cursor-pointer"
                      >
                        <Calculator className="w-3 h-3 text-[#9F8BE7]" />
                        <span>{act.label}</span>
                      </button>
                    )}
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Typing State Indicator */}
        {isLoading && (
          <div className="flex items-center gap-2 p-3 rounded-2xl bg-white border border-[#E0DDDB] w-fit shadow-xs animate-pulse">
            <Bot className="w-3.5 h-3.5 text-[#9F8BE7]" />
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9F8BE7] animate-bounce [animation-delay:-0.3s]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#9F8BE7] animate-bounce [animation-delay:-0.15s]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#9F8BE7] animate-bounce" />
            </div>
            <span className="text-xs text-[#585858] font-mono-num">Thinking...</span>
          </div>
        )}

        {/* Quick Intent Chips (Show if conversation has 1 message) */}
        {messages.length <= 1 && !isLoading && (
          <div className="pt-2 space-y-2">
            <div className="text-[11px] font-mono-num uppercase tracking-wider text-[#585858] font-bold px-1">
              Popular Project Pathways
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {INITIAL_INTENTS.map((intent, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(intent.query)}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#E0DDDB] hover:border-[#9F8BE7] hover:bg-[#FAF7F6] text-left text-xs font-display font-medium text-[#161616] transition-all shadow-2xs group cursor-pointer"
                >
                  <span>{intent.label}</span>
                  <ChevronRight className="w-3 h-3 text-[#585858] group-hover:text-[#9F8BE7] transition-colors" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Inline Estimate / Lead Capture Card */}
        {showEstimateForm && (
          <div className="p-4 rounded-2xl bg-white border border-[#9F8BE7] shadow-md space-y-3 animate-in fade-in duration-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-[#9F8BE7]" />
                <h3 className="font-display text-xs font-bold text-[#161616]">
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
              <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Proposal request submitted! Our team will contact you within 24 hours.</span>
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
                      Phone
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
                      <option value="Web & Branding">Web &amp; Branding</option>
                      <option value="Shopify & eCommerce">Shopify &amp; eCommerce</option>
                      <option value="AI SEO & Visibility">AI SEO &amp; Visibility</option>
                      <option value="Paid Ads (Google/Meta/TikTok)">Paid Ads</option>
                      <option value="Mobile App">Mobile App</option>
                      <option value="AI Automation">AI Automation</option>
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
                      <option value="$500 - $1,500">$500 – $1,500</option>
                      <option value="$1,500 - $3,500">$1,500 – $3,500</option>
                      <option value="$3,500 - $7,500">$3,500 – $7,500</option>
                      <option value="$7,500+">$7,500+</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmittingLead}
                  className="w-full py-2.5 rounded-lg bg-[#161616] text-white hover:bg-black font-display font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  {isSubmittingLead ? "Sending..." : "Submit Proposal Request"}
                </button>
              </form>
            )}
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* 3. Privacy Notice Banner */}
      <div className="px-4 py-2 bg-white/70 border-t border-[#E0DDDB]/80 text-[10px] text-[#585858] leading-tight flex items-start gap-1.5">
        <ShieldCheck className="w-3.5 h-3.5 text-[#9F8BE7] shrink-0 mt-0.5" />
        <span>
          By using UBE AI, you agree that your messages may be processed to answer your request. Avoid sharing sensitive data.
        </span>
      </div>

      {/* 4. Input Bar */}
      <div className="p-3 sm:p-4 bg-white border-t border-[#E0DDDB]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask about websites, Shopify, branding, AI SEO..."
            className="flex-1 px-4 py-2.5 rounded-full bg-[#FAF7F6] border border-[#E0DDDB] text-xs sm:text-sm text-[#161616] placeholder:text-[#585858] focus:outline-none focus:border-[#9F8BE7] transition-all"
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || isLoading}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#161616] text-white disabled:opacity-40 hover:bg-black flex items-center justify-center transition-all shrink-0 shadow-xs cursor-pointer"
          >
            <Send className="w-4 h-4 text-[#9F8BE7]" />
          </button>
        </form>
      </div>
    </div>
  );
}
