"use client";

import React from "react";

interface Icon3DProps {
  className?: string;
  size?: number;
}

// 1. Google 3D Dimensional Badge
export function Google3DIcon({ className = "", size = 24 }: Icon3DProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block drop-shadow-[0_4px_8px_rgba(66,133,244,0.35)] ${className}`}
      style={{ verticalAlign: "middle" }}
    >
      <defs>
        <linearGradient id="gBlue3D" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6BA4FF" />
          <stop offset="100%" stopColor="#2A6DE8" />
        </linearGradient>
        <linearGradient id="gRed3D" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6E61" />
          <stop offset="100%" stopColor="#D93025" />
        </linearGradient>
        <linearGradient id="gYellow3D" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE066" />
          <stop offset="100%" stopColor="#F29900" />
        </linearGradient>
        <linearGradient id="gGreen3D" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5CD685" />
          <stop offset="100%" stopColor="#188038" />
        </linearGradient>
        <filter id="shadow3D" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodOpacity="0.3" />
        </filter>
      </defs>
      {/* 3D Circular Base / Glass Container */}
      <circle cx="24" cy="24" r="22" fill="#FFFFFF" filter="url(#shadow3D)" />
      <circle cx="24" cy="24" r="21.5" stroke="rgba(224, 221, 219, 0.8)" strokeWidth="1" />
      {/* Blue Segment */}
      <path
        d="M42.5 24.5C42.5 23.1 42.4 21.7 42.1 20.4H24V28H34.4C33.9 30.4 32.5 32.5 30.3 34L36.8 39C40.6 35.5 42.5 30.5 42.5 24.5Z"
        fill="url(#gBlue3D)"
      />
      {/* Green Segment */}
      <path
        d="M24 43.5C29.3 43.5 33.7 41.7 36.8 39L30.3 34C28.5 35.2 26.4 36 24 36C18.9 36 14.5 32.5 13 27.9L6.3 33.1C9.6 39.5 16.3 43.5 24 43.5Z"
        fill="url(#gGreen3D)"
      />
      {/* Yellow Segment */}
      <path
        d="M13 27.9C12.6 26.6 12.4 25.3 12.4 24C12.4 22.7 12.6 21.4 13 20.1L6.3 14.9C4.9 17.7 4.1 20.7 4.1 24C4.1 27.3 4.9 30.3 6.3 33.1L13 27.9Z"
        fill="url(#gYellow3D)"
      />
      {/* Red Segment */}
      <path
        d="M24 12C26.9 12 29.4 13 31.5 14.9L37.1 9.3C33.6 6.1 29.2 4.5 24 4.5C16.3 4.5 9.6 8.5 6.3 14.9L13 20.1C14.5 15.5 18.9 12 24 12Z"
        fill="url(#gRed3D)"
      />
      {/* Specular Highlight Arc */}
      <path
        d="M10 10C14 6 20 4.5 26 5C18 7 11 12 9 18C8.5 15 9 11.5 10 10Z"
        fill="white"
        opacity="0.8"
      />
    </svg>
  );
}

// 2. TikTok 3D Chromatic Dimensional Badge
export function TikTok3DIcon({ className = "", size = 24 }: Icon3DProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block drop-shadow-[0_4px_10px_rgba(254,44,85,0.4)] ${className}`}
      style={{ verticalAlign: "middle" }}
    >
      <defs>
        <linearGradient id="ttBg3D" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E1E24" />
          <stop offset="100%" stopColor="#08080A" />
        </linearGradient>
        <linearGradient id="ttCyan3D" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6CFAFF" />
          <stop offset="100%" stopColor="#00E5FF" />
        </linearGradient>
        <linearGradient id="ttPink3D" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF5E82" />
          <stop offset="100%" stopColor="#FE2C55" />
        </linearGradient>
      </defs>
      {/* 3D Obsidian Rounded Container */}
      <rect x="3" y="3" width="42" height="42" rx="12" fill="url(#ttBg3D)" />
      <rect x="3.5" y="3.5" width="41" height="41" rx="11.5" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      {/* Cyan 3D Layer */}
      <path
        d="M31 10.5C31.8 14 34.5 16.8 38 17.5V23.5C35 23.5 32.2 22.3 30 20.5V31.5C30 36.7 25.7 41 20.5 41C15.3 41 11 36.7 11 31.5C11 26.3 15.3 22 20.5 22C21.4 22 22.2 22.1 23 22.4V28.1C22.2 27.8 21.4 27.6 20.5 27.6C18.3 27.6 16.5 29.4 16.5 31.6C16.5 33.8 18.3 35.6 20.5 35.6C22.7 35.6 24.5 33.8 24.5 31.6V10.5H31Z"
        fill="url(#ttCyan3D)"
        transform="translate(-1.5, -1)"
        opacity="0.9"
      />
      {/* Pink 3D Layer */}
      <path
        d="M31 10.5C31.8 14 34.5 16.8 38 17.5V23.5C35 23.5 32.2 22.3 30 20.5V31.5C30 36.7 25.7 41 20.5 41C15.3 41 11 36.7 11 31.5C11 26.3 15.3 22 20.5 22C21.4 22 22.2 22.1 23 22.4V28.1C22.2 27.8 21.4 27.6 20.5 27.6C18.3 27.6 16.5 29.4 16.5 31.6C16.5 33.8 18.3 35.6 20.5 35.6C22.7 35.6 24.5 33.8 24.5 31.6V10.5H31Z"
        fill="url(#ttPink3D)"
        transform="translate(1.5, 1)"
        opacity="0.9"
      />
      {/* White Foreground Note */}
      <path
        d="M31 10.5C31.8 14 34.5 16.8 38 17.5V23.5C35 23.5 32.2 22.3 30 20.5V31.5C30 36.7 25.7 41 20.5 41C15.3 41 11 36.7 11 31.5C11 26.3 15.3 22 20.5 22C21.4 22 22.2 22.1 23 22.4V28.1C22.2 27.8 21.4 27.6 20.5 27.6C18.3 27.6 16.5 29.4 16.5 31.6C16.5 33.8 18.3 35.6 20.5 35.6C22.7 35.6 24.5 33.8 24.5 31.6V10.5H31Z"
        fill="#FFFFFF"
      />
      {/* Top Gloss Highlight */}
      <rect x="6" y="5" width="36" height="12" rx="6" fill="white" opacity="0.15" />
    </svg>
  );
}

// 3. Instagram 3D Sunset Glossy Camera Squircle
export function Instagram3DIcon({ className = "", size = 24 }: Icon3DProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block drop-shadow-[0_4px_10px_rgba(214,41,118,0.4)] ${className}`}
      style={{ verticalAlign: "middle" }}
    >
      <defs>
        <linearGradient id="igBg3D" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FED373" />
          <stop offset="25%" stopColor="#F15245" />
          <stop offset="60%" stopColor="#D92E7F" />
          <stop offset="100%" stopColor="#9B36B7" />
        </linearGradient>
      </defs>
      {/* Sunset 3D Squircle */}
      <rect x="3" y="3" width="42" height="42" rx="13" fill="url(#igBg3D)" />
      <rect x="3.5" y="3.5" width="41" height="41" rx="12.5" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
      {/* Camera Body Border */}
      <rect
        x="11"
        y="11"
        width="26"
        height="26"
        rx="7"
        stroke="white"
        strokeWidth="3.2"
        fill="none"
      />
      {/* Lens Circle */}
      <circle cx="24" cy="24" r="6.5" stroke="white" strokeWidth="3.2" fill="none" />
      {/* Flash Dot */}
      <circle cx="31.5" cy="16.5" r="1.8" fill="white" />
      {/* Top Gloss Bevel */}
      <path
        d="M6 14C6 8.5 10.5 4 16 4H32C37.5 4 42 8.5 42 14C42 14 36 8 24 8C12 8 6 14 6 14Z"
        fill="white"
        opacity="0.35"
      />
    </svg>
  );
}

// 4. Meta / Facebook 3D Dimensional Badge
export function Meta3DIcon({ className = "", size = 24 }: Icon3DProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block drop-shadow-[0_4px_10px_rgba(0,129,251,0.4)] ${className}`}
      style={{ verticalAlign: "middle" }}
    >
      <defs>
        <linearGradient id="metaBg3D" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2593FC" />
          <stop offset="100%" stopColor="#0064E0" />
        </linearGradient>
      </defs>
      {/* Meta Blue 3D Pill Base */}
      <rect x="3" y="3" width="42" height="42" rx="13" fill="url(#metaBg3D)" />
      <rect x="3.5" y="3.5" width="41" height="41" rx="12.5" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
      {/* 3D Infinity Ribbon Logo */}
      <path
        d="M36.2 16.4C34.2 16.4 32.4 17.4 31.2 19L27.6 23.8C26.7 25 25.4 25.8 24 25.8C22.6 25.8 21.3 25 20.4 23.8L16.8 19C15.6 17.4 13.8 16.4 11.8 16.4C8 16.4 5 19.5 5 23.5C5 27.5 8 30.6 11.8 30.6C13.8 30.6 15.6 29.6 16.8 28L20.4 23.2C21.3 22 22.6 21.2 24 21.2C25.4 21.2 26.7 22 27.6 23.2L31.2 28C32.4 29.6 34.2 30.6 36.2 30.6C40 30.6 43 27.5 43 23.5C43 19.5 40 16.4 36.2 16.4ZM11.8 26.6C10.1 26.6 8.8 25.2 8.8 23.5C8.8 21.8 10.1 20.4 11.8 20.4C12.8 20.4 13.7 20.9 14.3 21.7L16.2 24.2C15.2 25.7 13.6 26.6 11.8 26.6ZM36.2 26.6C34.4 26.6 32.8 25.7 31.8 24.2L33.7 21.7C34.3 20.9 35.2 20.4 36.2 20.4C37.9 20.4 39.2 21.8 39.2 23.5C39.2 25.2 37.9 26.6 36.2 26.6Z"
        fill="white"
      />
      {/* Specular Highlight */}
      <path
        d="M6 14C6 8.5 10.5 4 16 4H32C37.5 4 42 8.5 42 14C42 14 36 8 24 8C12 8 6 14 6 14Z"
        fill="white"
        opacity="0.3"
      />
    </svg>
  );
}

// 5. Trustpilot 3D Green Star Shield Badge
export function Trustpilot3DIcon({ className = "", size = 24 }: Icon3DProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block drop-shadow-[0_4px_10px_rgba(0,182,122,0.45)] ${className}`}
      style={{ verticalAlign: "middle" }}
    >
      <defs>
        <linearGradient id="tpBg3D" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00E59B" />
          <stop offset="50%" stopColor="#00B67A" />
          <stop offset="100%" stopColor="#008055" />
        </linearGradient>
      </defs>
      {/* 3D Star Shield Base */}
      <rect x="3" y="3" width="42" height="42" rx="13" fill="url(#tpBg3D)" />
      <rect x="3.5" y="3.5" width="41" height="41" rx="12.5" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
      {/* 3D Star Cutout */}
      <path
        d="M24 10L27.5 20.8H39L29.7 27.5L33.3 38.3L24 31.6L14.7 38.3L18.3 27.5L9 20.8H20.5L24 10Z"
        fill="white"
      />
      {/* Black / Dark Green Right Wedge */}
      <path
        d="M24 31.6L33.3 38.3L29.7 27.5L24 23.3V31.6Z"
        fill="#005137"
        opacity="0.3"
      />
      {/* Specular Highlight */}
      <path
        d="M6 14C6 8.5 10.5 4 16 4H32C37.5 4 42 8.5 42 14C42 14 36 8 24 8C12 8 6 14 6 14Z"
        fill="white"
        opacity="0.4"
      />
    </svg>
  );
}

// 6. Shopify 3D Green Dimensional Shopping Bag
export function Shopify3DIcon({ className = "", size = 24 }: Icon3DProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block drop-shadow-[0_4px_10px_rgba(149,191,71,0.45)] ${className}`}
      style={{ verticalAlign: "middle" }}
    >
      <defs>
        <linearGradient id="shpBag3D" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A8D654" />
          <stop offset="100%" stopColor="#7DAE31" />
        </linearGradient>
        <linearGradient id="shpHandle3D" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6C9728" />
          <stop offset="100%" stopColor="#4E7017" />
        </linearGradient>
      </defs>
      {/* Bag Body */}
      <path
        d="M37 15H31C30.5 10 27.5 6 24 6C20.5 6 17.5 10 17 15H11C9.3 15 8 16.5 8.2 18.2L11.5 40.2C11.7 41.8 13.1 43 14.7 43H33.3C34.9 43 36.3 41.8 36.5 40.2L39.8 18.2C40 16.5 38.7 15 37 15Z"
        fill="url(#shpBag3D)"
      />
      {/* Handle */}
      <path
        d="M19 15C19.3 11.5 21.2 8.5 24 8.5C26.8 8.5 28.7 11.5 29 15H25.5C25.3 13 24.8 11.5 24 11.5C23.2 11.5 22.7 13 22.5 15H19Z"
        fill="url(#shpHandle3D)"
      />
      {/* Bag White "S" Monogram */}
      <path
        d="M24.8 24.2C22.5 23.6 22 23.1 22 22.2C22 21.1 23.1 20.3 24.6 20.3C26.2 20.3 27.2 21.2 27.5 22.5H30.2C29.8 19.9 27.7 18.2 24.6 18.2C21.4 18.2 19.2 20 19.2 22.5C19.2 24.9 20.8 25.9 23.4 26.6C25.9 27.3 26.3 28 26.3 29C26.3 30.2 25 31 23.5 31C21.7 31 20.5 30 20.2 28.4H17.4C17.7 31.3 20 33.1 23.5 33.1C26.9 33.1 29.2 31.3 29.2 28.7C29.2 25.9 27.4 24.9 24.8 24.2Z"
        fill="white"
      />
      {/* Top Specular Arc */}
      <path
        d="M12 17L14.5 38C14.5 38 13.5 22 19 17H12Z"
        fill="white"
        opacity="0.35"
      />
    </svg>
  );
}

// 7. General 3D Heading Badges (Growth, AI, Mobile, Design, Automation)
export function Heading3DSparkle({ className = "", size = 20 }: Icon3DProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block drop-shadow-[0_2px_8px_rgba(159,139,231,0.5)] ${className}`}
      style={{ verticalAlign: "middle" }}
    >
      <defs>
        <linearGradient id="spk3D" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C4B5FD" />
          <stop offset="50%" stopColor="#9F8BE7" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      <path
        d="M16 2L19.5 12.5L30 16L19.5 19.5L16 30L12.5 19.5L2 16L12.5 12.5L16 2Z"
        fill="url(#spk3D)"
      />
      <circle cx="16" cy="16" r="3.5" fill="#FFFFFF" opacity="0.9" />
    </svg>
  );
}

export function Heading3DGrowth({ className = "", size = 20 }: Icon3DProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block drop-shadow-[0_2px_8px_rgba(16,185,129,0.5)] ${className}`}
      style={{ verticalAlign: "middle" }}
    >
      <defs>
        <linearGradient id="grw3D" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="100%" stopColor="#34D399" />
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="14" fill="url(#grw3D)" />
      <path
        d="M9 20L14 15L18 19L23 12M23 12H19M23 12V16"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Heading3DShield({ className = "", size = 20 }: Icon3DProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block drop-shadow-[0_2px_8px_rgba(59,130,246,0.4)] ${className}`}
      style={{ verticalAlign: "middle" }}
    >
      <defs>
        <linearGradient id="shd3D" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
      </defs>
      <path
        d="M16 3L27 7V16C27 22.5 22.2 28.2 16 29.5C9.8 28.2 5 22.5 5 16V7L16 3Z"
        fill="url(#shd3D)"
      />
      <path
        d="M12 16L15 19L21 13"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// 8. Amazon 3D Dark Glass Badge with Orange Smile Arrow
export function Amazon3DIcon({ className = "", size = 24 }: Icon3DProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block drop-shadow-[0_4px_10px_rgba(255,153,0,0.45)] ${className}`}
      style={{ verticalAlign: "middle" }}
    >
      <defs>
        <linearGradient id="amzBg3D" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#232F3E" />
          <stop offset="100%" stopColor="#131A22" />
        </linearGradient>
        <linearGradient id="amzOrange3D" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFB833" />
          <stop offset="100%" stopColor="#FF9900" />
        </linearGradient>
      </defs>
      {/* 3D Dark Slate Rounded Base */}
      <rect x="3" y="3" width="42" height="42" rx="12" fill="url(#amzBg3D)" />
      <rect x="3.5" y="3.5" width="41" height="41" rx="11.5" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      {/* Amazon "a" Lettermark */}
      <path
        d="M21.5 15.2C18.2 15.2 15.8 17 15.4 19.8H18.8C19.1 18.4 20.1 17.6 21.6 17.6C23.2 17.6 24.2 18.5 24.2 20.1V21.1C23.4 20.6 22.2 20.3 20.8 20.3C17.5 20.3 15.2 21.9 15.2 24.8C15.2 27.5 17.4 29.1 20.4 29.1C22.4 29.1 23.8 28.2 24.5 26.9L24.7 28.8H27.8V20.1C27.8 16.9 25.2 15.2 21.5 15.2ZM21.3 26.6C19.8 26.6 18.6 25.8 18.6 24.5C18.6 23.3 19.7 22.5 21.4 22.5C22.5 22.5 23.5 22.8 24.2 23.4V24.5C24.2 25.8 22.9 26.6 21.3 26.6Z"
        fill="white"
      />
      {/* Amazon Smile Arrow pointing left to right under "a" */}
      <path
        d="M12.5 31.8C16.8 35.2 24.8 35.8 31.5 32.2C32.2 31.8 32.9 32.5 32.4 33.1C30.2 35.8 23.8 37.2 17.8 36.4C14.8 36 12.2 34.6 10.8 33.2C10.2 32.6 11.2 31.2 12.5 31.8Z"
        fill="url(#amzOrange3D)"
      />
      <path
        d="M32.8 30.5C32.2 30.1 30 30.6 30.8 32.1C31.5 33.5 33.8 34.2 34.4 33.7C35 33.2 34.5 31.2 32.8 30.5Z"
        fill="url(#amzOrange3D)"
      />
      {/* Specular Highlight Arc */}
      <rect x="6" y="5" width="36" height="12" rx="6" fill="white" opacity="0.15" />
    </svg>
  );
}

// 9. Etsy 3D Signature Orange Dimensional Tile Badge
export function Etsy3DIcon({ className = "", size = 24 }: Icon3DProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block drop-shadow-[0_4px_10px_rgba(241,100,30,0.45)] ${className}`}
      style={{ verticalAlign: "middle" }}
    >
      <defs>
        <linearGradient id="etsyBg3D" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF7A33" />
          <stop offset="100%" stopColor="#D55411" />
        </linearGradient>
      </defs>
      {/* 3D Etsy Orange Rounded Container */}
      <rect x="3" y="3" width="42" height="42" rx="12" fill="url(#etsyBg3D)" />
      <rect x="3.5" y="3.5" width="41" height="41" rx="11.5" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
      {/* Etsy White Serif Wordmark / "Etsy" */}
      <text
        x="24"
        y="30"
        fill="white"
        fontSize="17"
        fontWeight="800"
        fontFamily="Georgia, serif"
        textAnchor="middle"
        letterSpacing="-0.5"
      >
        Etsy
      </text>
      {/* Specular Highlight Arc */}
      <path
        d="M6 14C6 8.5 10.5 4 16 4H32C37.5 4 42 8.5 42 14C42 14 36 8 24 8C12 8 6 14 6 14Z"
        fill="white"
        opacity="0.3"
      />
    </svg>
  );
}

// 10. eBay 3D Multi-Color Dimensional Glass Badge
export function EBay3DIcon({ className = "", size = 24 }: Icon3DProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block drop-shadow-[0_4px_10px_rgba(0,100,210,0.35)] ${className}`}
      style={{ verticalAlign: "middle" }}
    >
      <defs>
        <linearGradient id="ebayBg3D" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F5F5F7" />
        </linearGradient>
        <filter id="ebayShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodOpacity="0.2" />
        </filter>
      </defs>
      {/* 3D Off-White Glossy Tile Base */}
      <rect x="3" y="3" width="42" height="42" rx="12" fill="url(#ebayBg3D)" filter="url(#ebayShadow)" />
      <rect x="3.5" y="3.5" width="41" height="41" rx="11.5" stroke="rgba(224, 221, 219, 0.9)" strokeWidth="1" />
      {/* eBay 4-Color Wordmark Logo (e: Red, B: Blue, a: Yellow, y: Green) */}
      <g transform="translate(6, 15)">
        {/* e - Red */}
        <path d="M7 11.5C7 8.5 9 6.8 11.8 6.8C14.5 6.8 16.2 8.5 16 11.5H9.6C9.7 12.8 10.6 13.6 11.9 13.6C12.9 13.6 13.7 13.1 14 12.3H16.2C15.7 14.5 14.1 15.5 11.9 15.5C8.9 15.5 7 13.8 7 11.5ZM11.8 8.4C10.6 8.4 9.7 9.2 9.6 10.2H14.1C14 9.2 13 8.4 11.8 8.4Z" fill="#E53238" />
        {/* B - Blue */}
        <path d="M16.5 4.5H20.8C22.6 4.5 23.8 5.4 23.8 6.8C23.8 7.8 23.1 8.5 22.1 8.8C23.4 9.1 24.2 10 24.2 11.3C24.2 13 22.8 14 20.8 14H16.5V4.5ZM18.7 8H20.4C21.3 8 21.9 7.6 21.9 6.9C21.9 6.2 21.3 5.8 20.4 5.8H18.7V8ZM18.7 12.7H20.6C21.6 12.7 22.3 12.2 22.3 11.4C22.3 10.6 21.6 10.1 20.6 10.1H18.7V12.7Z" fill="#0064D2" />
        {/* a - Yellow */}
        <path d="M25 11.5C25 9.5 26.4 8.2 28.5 8.2C29.6 8.2 30.5 8.6 31 9.3V8.4H33V15.5H31V14.6C30.5 15.3 29.6 15.7 28.5 15.7C26.4 15.7 25 14.4 25 11.5ZM31 11.9V11.2C30.6 10.4 29.7 9.8 28.7 9.8C27.3 9.8 26.4 10.7 26.4 11.9C26.4 13.1 27.3 14 28.7 14C29.7 14 30.6 13.4 31 12.6V11.9Z" fill="#F5AF02" />
        {/* y - Green */}
        <path d="M33.5 8.4H35.7L37.8 13.5L39.9 8.4H42.1L38.7 16.2C37.8 18.2 36.8 19 35 19H34.1V17.3H34.8C35.7 17.3 36.2 16.9 36.7 15.8L33.5 8.4Z" fill="#86B817" />
      </g>
      {/* Specular Highlight Arc */}
      <path
        d="M6 14C6 8.5 10.5 4 16 4H32C37.5 4 42 8.5 42 14C42 14 36 8 24 8C12 8 6 14 6 14Z"
        fill="white"
        opacity="0.5"
      />
    </svg>
  );
}

