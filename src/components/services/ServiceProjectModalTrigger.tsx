"use client";

import React from "react";
import { useScroll } from "@/components/providers/SmoothScrollProvider";

interface ServiceProjectModalTriggerProps {
  label?: string;
  service?: string;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "dark";
}

export default function ServiceProjectModalTrigger({
  label = "Start Your Project",
  service,
  className = "",
  variant = "secondary",
}: ServiceProjectModalTriggerProps) {
  const { openProjectModal } = useScroll();

  const handleClick = () => {
    openProjectModal(service);
  };

  const baseStyle =
    "max-w-full min-w-0 whitespace-normal break-words text-center px-7 py-3.5 rounded-full text-xs font-display font-bold transition-all cursor-pointer shadow-xs";

  const variantStyle =
    variant === "primary"
      ? "bg-[#9F8BE7] text-[#161616] hover:bg-[#b4a3f7] shadow-md"
      : variant === "dark"
      ? "bg-[#161616] text-white hover:bg-[#303030]"
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
