"use client";

import React, { useRef, useEffect, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function HeroVideoClient() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    // 1. Check existing session sound preference
    const savedPref = sessionStorage.getItem("ube_video_sound_pref");
    if (savedPref === "unmuted") {
      setIsMuted(false);
      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.volume = 0.65;
      }
    }

    // 2. Unmute on visitor's FIRST trusted click or touch interaction
    const handleFirstInteraction = () => {
      const pref = sessionStorage.getItem("ube_video_sound_pref");
      if (pref !== "muted" && videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.volume = 0.65;
        setIsMuted(false);
        sessionStorage.setItem("ube_video_sound_pref", "unmuted");
        videoRef.current.play().catch(() => {});
      }
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };

    window.addEventListener("click", handleFirstInteraction, { once: true });
    window.addEventListener("touchstart", handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, []);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    videoRef.current.muted = newMuted;
    if (!newMuted) {
      videoRef.current.volume = 0.65;
      videoRef.current.play().catch(() => {});
      sessionStorage.setItem("ube_video_sound_pref", "unmuted");
    } else {
      sessionStorage.setItem("ube_video_sound_pref", "muted");
    }
  };

  return (
    <div className="relative aspect-[16/9] w-full rounded-2xl sm:rounded-[28px] overflow-hidden border border-[#E0DDDB] shadow-lg bg-white/95 backdrop-blur-xs hover:border-[#9F8BE7] transition-all duration-300 group">
      <video
        ref={videoRef}
        autoPlay
        muted={isMuted}
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-contain rounded-2xl sm:rounded-[28px] bg-[#FAF7F6]"
      >
        <source src="/videos/ube-promotional-video.mp4" type="video/mp4" />
      </video>

      {/* Sound Toggle Button Overlay */}
      <button
        type="button"
        onClick={toggleMute}
        className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#E0DDDB] hover:border-[#9F8BE7] text-xs font-mono-num font-bold text-[#161616] flex items-center gap-1.5 shadow-sm transition-all hover:scale-105 min-h-[36px]"
        aria-label={isMuted ? "Unmute promotional video" : "Mute promotional video"}
      >
        {isMuted ? (
          <>
            <VolumeX className="w-3.5 h-3.5 text-rose-500 shrink-0" />
            <span>Sound Off</span>
          </>
        ) : (
          <>
            <Volume2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Sound On</span>
          </>
        )}
      </button>
    </div>
  );
}
