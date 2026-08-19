"use client";

import React from "react";

interface AmbientBackgroundProps {
  variant?: "hero" | "subtle" | "contrast";
  className?: string;
}

export default function AmbientBackground({
  variant = "subtle",
  className = "",
}: AmbientBackgroundProps) {
  if (variant === "contrast") {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none -z-10 ${className}`}>
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#9F8BE7]/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-[#DDF160]/10 rounded-full blur-[120px]" />
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none -z-10 ${className}`}>
      {/* Soft warm ambient lighting */}
      <div className="absolute -top-40 -right-40 w-[550px] h-[550px] bg-[#9F8BE7]/06 rounded-full blur-[140px]" />
      <div className="absolute -bottom-40 -left-40 w-[450px] h-[450px] bg-[#DDF160]/08 rounded-full blur-[130px]" />
    </div>
  );
}
