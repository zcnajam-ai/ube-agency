"use client";

import React, { useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "lime" | "dark";
  size?: "sm" | "md" | "lg";
  showArrow?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function MagneticButton({
  children,
  onClick,
  className = "",
  variant = "primary",
  size = "md",
  showArrow = false,
  type = "button",
  disabled = false,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReducedMotion || isTouch) return;

    const button = buttonRef.current;
    const text = textRef.current;
    const arrow = arrowRef.current;
    if (!button) return;

    button.style.transition = "transform 0.25s cubic-bezier(0.25, 1, 0.5, 1)";
    if (text) text.style.transition = "transform 0.25s cubic-bezier(0.25, 1, 0.5, 1)";
    if (arrow) arrow.style.transition = "transform 0.25s cubic-bezier(0.25, 1, 0.5, 1)";

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      button.style.transform = `translate3d(${distanceX * 0.18}px, ${distanceY * 0.18}px, 0)`;
      if (text) text.style.transform = `translate3d(${distanceX * 0.08}px, ${distanceY * 0.08}px, 0)`;
      if (arrow) arrow.style.transform = `translate3d(${distanceX * 0.12 + 2}px, ${distanceY * 0.12 - 2}px, 0)`;
    };

    const handleMouseLeave = () => {
      button.style.transform = "translate3d(0, 0, 0)";
      if (text) text.style.transform = "translate3d(0, 0, 0)";
      if (arrow) arrow.style.transform = "translate3d(0, 0, 0)";
    };

    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const variantStyles = {
    primary:
      "bg-[#9F8BE7] text-[#161616] font-display font-bold border border-[#9F8BE7] hover:bg-[#b4a3f7] shadow-[0_4px_20px_rgba(159,139,231,0.35)]",
    secondary:
      "bg-white text-[#161616] font-display font-bold border border-[#E0DDDB] hover:border-[#9F8BE7] shadow-xs",
    outline:
      "bg-transparent text-[#161616] font-display font-bold border border-[#161616] hover:bg-[#161616] hover:text-white transition-colors",
    lime:
      "bg-[#DDF160] text-[#161616] font-display font-bold border border-[#DDF160] hover:bg-[#ebf887] shadow-[0_4px_20px_rgba(221,241,96,0.35)]",
    dark:
      "bg-[#161616] text-white font-display font-bold border border-[#161616] hover:bg-[#303030] shadow-sm",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-xs sm:text-sm",
    lg: "px-8 py-4 text-sm sm:text-base",
  };

  return (
    <button
      ref={buttonRef}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`relative max-w-full min-w-0 inline-flex items-center justify-center gap-2 rounded-full cursor-pointer transition-colors duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none will-change-transform ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      <span ref={textRef} className="relative z-10 will-change-transform inline-block min-w-0 whitespace-normal break-words text-center">
        {children}
      </span>
      {showArrow && (
        <span ref={arrowRef} className="relative z-10 shrink-0 will-change-transform inline-flex items-center justify-center">
          <ArrowUpRight className="w-4 h-4" />
        </span>
      )}
    </button>
  );
}
