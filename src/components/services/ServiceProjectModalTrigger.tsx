"use client";

import React from "react";
import { useScroll } from "@/components/providers/SmoothScrollProvider";

import { trackStartProjectClick } from "@/lib/analytics";

interface ServiceProjectModalTriggerProps {
  label?: string;
  service?: string;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
}

export default function ServiceProjectModalTrigger({
  label = "Start Your Project",
  service,
  className = "",
  variant = "secondary",
}: ServiceProjectModalTriggerProps) {
  const { openProjectModal } = useScroll();

  const handleClick = () => {
    trackStartProjectClick(service || label);
    openProjectModal(service);
  };

  const baseStyle =
    "px-7 py-3.5 rounded-full text-xs font-display font-bold transition-all cursor-pointer shadow-xs";

  const variantStyle =
    variant === "primary"
      ? "bg-[#9F8BE7] text-[#161616] hover:bg-[#b4a3f7] shadow-md"
      : variant === "outline"
      ? "border border-white/20 bg-white/5 hover:bg-white/10 text-white"
      : "bg-[#FAF7F6] border border-[#E0DDDB] hover:border-[#9F8BE7] text-[#161616]";

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${baseStyle} ${variantStyle} ${className}`}
    >
      {label}
    </button>
  );
}
