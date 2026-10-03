"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Play, Volume2, VolumeX } from "lucide-react";

export default function HeroVideoClient() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldPlay, setShouldPlay] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // The video is below the headline on phones. Keep its 22 MB source out of
  // the mobile critical path until a visitor chooses to watch it.
  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (window.matchMedia("(min-width: 1024px)").matches &&
          !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setShouldPlay(true);
      }
    }, 200);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (shouldPlay) videoRef.current?.play().catch(() => {});
  }, [shouldPlay]);

  return (
    <div className="relative aspect-[16/9] w-full rounded-2xl sm:rounded-[28px] overflow-hidden border border-[#E0DDDB] shadow-lg bg-[#FAF7F6] hover:border-[#9F8BE7] transition-colors group">
      {shouldPlay ? (
        <video
          ref={videoRef}
          poster="/images/home/ube-video-poster.webp"
          autoPlay
          muted={isMuted}
          loop
          playsInline
          preload="none"
          className="w-full h-full object-contain bg-[#FAF7F6]"
          aria-label="Unified Branding Experts promotional video"
        >
          <source src="/videos/ube-promotional-video.mp4" type="video/mp4" />
        </video>
      ) : (
        <>
          <Image
            src="/images/home/ube-video-poster.webp"
            alt=""
            fill
            sizes="(max-width: 1023px) calc(100vw - 32px), 50vw"
            className="object-cover"
          />
          <button
            type="button"
            onClick={() => setShouldPlay(true)}
            className="absolute inset-0 flex items-center justify-center bg-black/10 text-white focus-visible:outline-4 focus-visible:outline-offset-[-4px] focus-visible:outline-[#9F8BE7]"
            aria-label="Play Unified Branding Experts promotional video"
          >
            <span className="flex items-center gap-2 rounded-full bg-[#161616]/90 px-5 py-3 text-sm font-semibold shadow-md">
              <Play className="h-5 w-5 fill-current" aria-hidden="true" /> Play video
            </span>
          </button>
        </>
      )}

      {shouldPlay && (
        <button
          type="button"
          onClick={() => setIsMuted((muted) => !muted)}
          className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-white/95 border border-[#E0DDDB] hover:border-[#9F8BE7] text-xs font-mono-num font-bold text-[#161616] flex items-center gap-1.5 shadow-sm min-h-[36px]"
          aria-label={isMuted ? "Unmute promotional video" : "Mute promotional video"}
        >
          {isMuted ? <VolumeX className="w-4 h-4" aria-hidden="true" /> : <Volume2 className="w-4 h-4" aria-hidden="true" />}
          <span>{isMuted ? "Sound Off" : "Sound On"}</span>
        </button>
      )}
    </div>
  );
}
