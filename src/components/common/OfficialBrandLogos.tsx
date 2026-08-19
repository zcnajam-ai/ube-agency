"use client";

import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
}

// Official Trustpilot Star Mark
export function TrustpilotOfficialIcon({ className = "", size = 20 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block shrink-0 ${className}`}
      style={{ verticalAlign: "middle" }}
    >
      <rect width="24" height="24" rx="4" fill="#00B67A" />
      <path
        d="M12 4.5L14.3 11.6H21.7L15.7 16L18 23.1L12 18.7L6 23.1L8.3 16L2.3 11.6H9.7L12 4.5Z"
        fill="#FFFFFF"
      />
      <path
        d="M12 18.7L18 23.1L15.7 16L12 13.2V18.7Z"
        fill="#005128"
      />
    </svg>
  );
}

// Official Google 'G' Mark
export function GoogleOfficialIcon({ className = "", size = 20 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block shrink-0 ${className}`}
      style={{ verticalAlign: "middle" }}
    >
      <path
        d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.67 15.63 16.88 16.79 15.71 17.57V20.34H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z"
        fill="#4285F4"
      />
      <path
        d="M12 23C14.97 23 17.46 22.02 19.28 20.34L15.71 17.57C14.73 18.23 13.48 18.63 12 18.63C9.14 18.63 6.71 16.7 5.84 14.1H2.18V16.94C4 20.53 7.7 23 12 23Z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.1C5.62 13.3 5.49 12.45 5.49 11.58C5.49 10.71 5.62 9.86 5.84 9.06V6.22H2.18C1.43 7.7 1 9.38 1 11.58C1 13.78 1.43 15.46 2.18 16.94L5.84 14.1Z"
        fill="#FBBC05"
      />
      <path
        d="M12 4.53C13.62 4.53 15.06 5.09 16.21 6.18L19.36 3.03C17.45 1.25 14.96 0.16 12 0.16C7.7 0.16 4 2.63 2.18 6.22L5.84 9.06C6.71 6.46 9.14 4.53 12 4.53Z"
        fill="#EA4335"
      />
    </svg>
  );
}

// Official Meta Mark
export function MetaOfficialIcon({ className = "", size = 20 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block shrink-0 ${className}`}
      style={{ verticalAlign: "middle" }}
    >
      <path d="M16.9 7.4C15.6 7.4 14.4 8.1 13.6 9.2L12 11.3L10.4 9.2C9.6 8.1 8.4 7.4 7.1 7.4C4.3 7.4 2 9.7 2 12.5C2 15.3 4.3 17.6 7.1 17.6C8.4 17.6 9.6 16.9 10.4 15.8L12 13.7L13.6 15.8C14.4 16.9 15.6 17.6 16.9 17.6C19.7 17.6 22 15.3 22 12.5C22 9.7 19.7 7.4 16.9 7.4ZM7.1 15.6C5.4 15.6 4 14.2 4 12.5C4 10.8 5.4 9.4 7.1 9.4C8 9.4 8.8 9.8 9.3 10.6L10.7 12.5L9.3 14.4C8.8 15.2 8 15.6 7.1 15.6ZM16.9 15.6C16 15.6 15.2 15.2 14.7 14.4L13.3 12.5L14.7 10.6C15.2 9.8 16 9.4 16.9 9.4C18.6 9.4 20 10.8 20 12.5C20 14.2 18.6 15.6 16.9 15.6Z" />
    </svg>
  );
}

// Official TikTok Mark
export function TikTokOfficialIcon({ className = "", size = 20 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block shrink-0 ${className}`}
      style={{ verticalAlign: "middle" }}
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.88 2.89 2.89 0 0 1-2.89-2.88 2.89 2.89 0 0 1 2.89-2.88c.28 0 .54.04.79.1V9.02a6.34 6.34 0 0 0-.79-.05 6.33 6.33 0 0 0-6.34 6.33 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.89a8.28 8.28 0 0 0 4.77 1.48V7.93a4.83 4.83 0 0 1-1-.24z" />
    </svg>
  );
}
