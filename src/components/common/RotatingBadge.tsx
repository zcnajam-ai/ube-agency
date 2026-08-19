"use client";

import React from "react";

interface RotatingBadgeProps {
  text?: string;
  size?: number;
  className?: string;
}

export default function RotatingBadge({
  text = "STRATEGY • DESIGN • TECHNOLOGY • GROWTH • ",
  size = 140,
  className = "",
}: RotatingBadgeProps) {
  const radius = size * 0.38;
  const pathId = React.useId();

  return (
    <div
      style={{ width: size, height: size }}
      className={`relative inline-flex items-center justify-center select-none ${className}`}
    >
      {/* Rotating SVG text */}
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="w-full h-full animate-spin-slow"
      >
        <defs>
          <path
            id={pathId}
            d={`M ${size / 2}, ${size / 2} m -${radius}, 0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
            fill="none"
          />
        </defs>
        <text className="text-[9.5px] uppercase tracking-[0.24em] fill-[#161616] font-mono-num font-semibold">
          <textPath href={`#${pathId}`} startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>

      {/* Center Agency Star / Emblem */}
      <div className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-white border border-[#E0DDDB] flex items-center justify-center shadow-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#9F8BE7"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-500 hover:rotate-90"
        >
          <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" />
        </svg>
      </div>
    </div>
  );
}
