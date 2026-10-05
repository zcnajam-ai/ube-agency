"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function HeroVideoClient() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    video.play().catch(() => {});
  }, []);

  return (
    <div className="relative aspect-[16/9] w-full rounded-2xl sm:rounded-[28px] overflow-hidden border border-[#E0DDDB] shadow-lg bg-[#FAF7F6] hover:border-[#9F8BE7] transition-colors group">
      <video
          ref={videoRef}
          poster="/images/home/ube-video-poster.webp"
          muted={isMuted}
          autoPlay
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-contain bg-[#FAF7F6]"
          aria-label="Unified Branding Experts promotional video"
        >
          <source src="/videos/ube-promotional-video.mp4" type="video/mp4" />
      </video>

        <button
          type="button"
          onClick={() => {
            setIsMuted((muted) => !muted);
            videoRef.current?.play().catch(() => {});
          }}
          className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-white/95 border border-[#E0DDDB] hover:border-[#9F8BE7] text-xs font-mono-num font-bold text-[#161616] flex items-center gap-1.5 shadow-sm min-h-[36px]"
          aria-label={isMuted ? "Unmute promotional video" : "Mute promotional video"}
        >
          {isMuted ? <VolumeX className="w-4 h-4" aria-hidden="true" /> : <Volume2 className="w-4 h-4" aria-hidden="true" />}
          <span>{isMuted ? "Sound Off" : "Sound On"}</span>
        </button>
    </div>
  );
}
