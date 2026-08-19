"use client";

import React, { useEffect, createContext, useContext, useState, useCallback } from "react";

interface ScrollContextType {
  getLenis: () => null;
  scrollTo: (target: string | HTMLElement | number, options?: { offset?: number; duration?: number }) => void;
  openProjectModal: (service?: string) => void;
  closeProjectModal: () => void;
  isProjectModalOpen: boolean;
  selectedServiceForModal: string;
  setSelectedServiceForModal: (service: string) => void;
}

const ScrollContext = createContext<ScrollContextType>({
  getLenis: () => null,
  scrollTo: () => {},
  openProjectModal: () => {},
  closeProjectModal: () => {},
  isProjectModalOpen: false,
  selectedServiceForModal: "",
  setSelectedServiceForModal: () => {},
});

export const useScroll = () => useContext(ScrollContext);

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState("");

  // Lock background body scroll cleanly when modal is open without breaking modal's native scroll
  useEffect(() => {
    if (isProjectModalOpen) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      }
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isProjectModalOpen]);

  const getLenis = useCallback(() => null, []);

  const scrollTo = useCallback((target: string | HTMLElement | number, options?: { offset?: number; duration?: number }) => {
    if (typeof target === "number") {
      window.scrollTo({ top: target, behavior: "smooth" });
    } else if (typeof target === "string") {
      const el = document.querySelector(target);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY + (options?.offset ?? 0);
        window.scrollTo({ top, behavior: "smooth" });
      }
    } else if (target instanceof HTMLElement) {
      const top = target.getBoundingClientRect().top + window.scrollY + (options?.offset ?? 0);
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  const openProjectModal = useCallback((service?: string) => {
    if (service) setSelectedServiceForModal(service);
    setIsProjectModalOpen(true);
  }, []);

  const closeProjectModal = useCallback(() => {
    setIsProjectModalOpen(false);
  }, []);

  return (
    <ScrollContext.Provider
      value={{
        getLenis,
        scrollTo,
        openProjectModal,
        closeProjectModal,
        isProjectModalOpen,
        selectedServiceForModal,
        setSelectedServiceForModal,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}
