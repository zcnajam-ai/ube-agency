"use client";

import React, { useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";

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

    const xTo = gsap.quickTo(button, "x", { duration: 0.35, ease: "power2.out" });
    const yTo = gsap.quickTo(button, "y", { duration: 0.35, ease: "power2.out" });

    const textXTo = text ? gsap.quickTo(text, "x", { duration: 0.25, ease: "power2.out" }) : null;
    const textYTo = text ? gsap.quickTo(text, "y", { duration: 0.25, ease: "power2.out" }) : null;

    const arrowXTo = arrow ? gsap.quickTo(arrow, "x", { duration: 0.25, ease: "power2.out" }) : null;
    const arrowYTo = arrow ? gsap.quickTo(arrow, "y", { duration: 0.25, ease: "power2.out" }) : null;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      // Subtle magnetic pull
      xTo(distanceX * 0.18);
      yTo(distanceY * 0.18);

      if (textXTo && textYTo) {
        textXTo(distanceX * 0.08);
        textYTo(distanceY * 0.08);
      }

      if (arrowXTo && arrowYTo) {
        arrowXTo(distanceX * 0.12 + 2);
        arrowYTo(distanceY * 0.12 - 2);
      }
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
      if (textXTo && textYTo) {
        textXTo(0);
        textYTo(0);
      }
      if (arrowXTo && arrowYTo) {
        arrowXTo(0);
        arrowYTo(0);
      }
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
      className={`relative inline-flex items-center justify-center gap-2 rounded-full cursor-pointer transition-colors duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none will-change-transform ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      <span ref={textRef} className="relative z-10 will-change-transform inline-block whitespace-nowrap">
        {children}
      </span>
      {showArrow && (
        <span ref={arrowRef} className="relative z-10 will-change-transform inline-flex items-center justify-center">
          <ArrowUpRight className="w-4 h-4" />
        </span>
      )}
    </button>
  );
}
