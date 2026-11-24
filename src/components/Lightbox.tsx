"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import type { GalleryImage } from "@/data/portfolioData";

interface LightboxProps {
  images: GalleryImage[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

function LightboxModal({
  images,
  initialIndex,
  onClose,
  title,
}: Omit<LightboxProps, "isOpen">) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const syncFullscreen = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener("fullscreenchange", syncFullscreen);
    return () => document.removeEventListener("fullscreenchange", syncFullscreen);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const toggleFullscreen = useCallback(async () => {
    try {
      if (!document.fullscreenElement) {
        const target = containerRef.current ?? document.documentElement;
        await target.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch {
      // Ignore fullscreen denial on restricted browsers
    }
  }, []);

  const handleClose = useCallback(async () => {
    if (document.fullscreenElement) {
      try {
        await document.exitFullscreen();
      } catch {
        // Ignore
      }
    }
    onClose();
  }, [onClose]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          void handleClose();
          break;
        case "ArrowLeft":
          handlePrev();
          break;
        case "ArrowRight":
          handleNext();
          break;
        case "f":
        case "F":
          void toggleFullscreen();
          break;
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleClose, handlePrev, handleNext, toggleFullscreen]);

  const activeImage = images[currentIndex] ?? images[0];
  if (!activeImage) return null;

  return (
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label={activeImage.alt}
      className="fixed inset-0 z-[100] bg-obsidian/96 backdrop-blur-md flex flex-col items-center justify-center animate-fade-in"
      onClick={() => void handleClose()}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        const delta = (e.changedTouches[0]?.clientX ?? 0) - touchStartX.current;
        if (delta > 50) handlePrev();
        if (delta < -50) handleNext();
        touchStartX.current = null;
      }}
    >
      {/* Top Bar */}
      <div
        className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 sm:px-6 py-4 bg-gradient-to-b from-black/80 to-transparent"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="px-3.5 py-1.5 rounded-full bg-obsidian-card/90 border border-gold/40 text-gold-light text-xs font-medium tracking-wider">
            {currentIndex + 1} / {images.length}
          </span>
          {title && (
            <span className="hidden sm:inline-block font-display text-sm text-[#FFF7E2]/90">
              {title}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => void toggleFullscreen()}
            className="w-10 h-10 rounded-full bg-obsidian-card/90 border border-gold/35 hover:border-gold hover:bg-gold/20 flex items-center justify-center text-gold-light transition-all"
            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            title="Fullscreen (F)"
          >
            {isFullscreen ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9L4 4m0 0v4m0-4h4m6 6l5 5m0 0v-4m0 4h-4M9 15l-5 5m0 0v-4m0 4h4m6-6l5-5m0 0v4m0-4h-4" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
              </svg>
            )}
          </button>

          <button
            onClick={() => void handleClose()}
            className="w-10 h-10 rounded-full bg-obsidian-card/90 border border-gold/35 hover:border-gold hover:bg-gold/20 flex items-center justify-center text-gold-light transition-all"
            aria-label="Close lightbox"
            title="Close (Esc)"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Previous Arrow */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-obsidian-card/85 border border-gold/40 hover:bg-gold hover:text-obsidian flex items-center justify-center text-gold-light transition-all shadow-lg"
        aria-label="Previous image"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Main Image Frame */}
      <div
        className="relative w-full h-[68vh] sm:h-[74vh] max-w-5xl mx-14 sm:mx-20 flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={activeImage.src}
          alt={activeImage.alt}
          fill
          className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.85)]"
          sizes="90vw"
          priority
        />
      </div>

      {/* Next Arrow */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-obsidian-card/85 border border-gold/40 hover:bg-gold hover:text-obsidian flex items-center justify-center text-gold-light transition-all shadow-lg"
        aria-label="Next image"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Caption & Thumbnail Strip */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20 px-4 pb-4 pt-6 bg-gradient-to-t from-black/90 via-black/70 to-transparent flex flex-col items-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-xs sm:text-sm text-[#F7F1E3]/90 text-center max-w-xl truncate">
          {activeImage.subCategory ? `${activeImage.subCategory} · ` : ""}
          {activeImage.alt}
        </p>

        <div className="flex gap-2 overflow-x-auto max-w-[92vw] p-1 scrollbar-hide">
          {images.map((img, idx) => (
            <button
              key={`${img.src}-${idx}`}
              onClick={() => setCurrentIndex(idx)}
              className={`relative w-14 h-11 sm:w-16 sm:h-12 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                idx === currentIndex
                  ? "border-gold-light scale-105 shadow-[0_0_12px_rgba(212,162,76,0.6)]"
                  : "border-white/20 opacity-55 hover:opacity-100"
              }`}
              aria-label={`View image ${idx + 1}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="64px"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Lightbox({
  images,
  initialIndex,
  isOpen,
  onClose,
  title,
}: LightboxProps) {
  if (!isOpen || images.length === 0) return null;

  return (
    <LightboxModal
      key={`${initialIndex}-${images[initialIndex]?.src ?? ""}`}
      images={images}
      initialIndex={initialIndex}
      onClose={onClose}
      title={title}
    />
  );
}
