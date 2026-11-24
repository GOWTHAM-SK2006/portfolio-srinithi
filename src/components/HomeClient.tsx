"use client";

import { useState } from "react";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import Lightbox from "@/components/Lightbox";
import { FEATURED_MOMENTS } from "@/data/portfolioData";

export default function HomeClient() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <>
      <section className="pt-6 sm:pt-10 pb-8 sm:pb-12 bg-gradient-to-b from-[#0B0D0A] to-[#090804] relative overflow-hidden">
        <div
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[520px] h-28 opacity-35 blur-2xl"
          style={{ background: "radial-gradient(circle, rgba(203,164,109,0.28) 0%, transparent 72%)" }}
          aria-hidden="true"
        />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-5 sm:mb-8">
              <div className="flex items-center justify-center gap-3 sm:gap-6">
                <div className="h-px flex-1 max-w-[70px] sm:max-w-[180px] bg-gradient-to-r from-transparent via-[#CBA46D]/45 to-[#CBA46D]/80" />
                <h2 className="font-display text-2xl sm:text-3xl lg:text-[2.5rem] font-medium italic whitespace-nowrap">
                  <span className="text-[#FAF6EE]">Featured</span>{" "}
                  <span className="text-[#CBA46D]">Moments</span>
                </h2>
                <div className="h-px flex-1 max-w-[70px] sm:max-w-[180px] bg-gradient-to-l from-transparent via-[#CBA46D]/45 to-[#CBA46D]/80" />
              </div>
            </div>
          </AnimatedSection>

          {/* 2x2 Scrolling Grid on Mobile, 4-Column Row on Desktop */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
            {FEATURED_MOMENTS.map((img, idx) => (
              <AnimatedSection key={`${img.src}-${idx}`} delay={idx * 70}>
                <button
                  onClick={() => {
                    setLightboxIndex(idx);
                    setLightboxOpen(true);
                  }}
                  className="relative aspect-[4/3] w-full rounded-lg sm:rounded-xl overflow-hidden border border-gold/55 hover:border-gold-light shadow-[0_8px_24px_rgba(0,0,0,0.75)] hover:shadow-[0_0_24px_rgba(212,162,76,0.28)] group cursor-pointer transition-all"
                  style={
                    idx === 0
                      ? {
                          background:
                            "radial-gradient(circle at 50% 42%, #7D2794 0%, #3E1051 52%, #13061A 100%)",
                        }
                      : undefined
                  }
                  aria-label={img.alt}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className={`${
                      idx === 0 ? "object-contain object-bottom pt-1" : "object-cover object-top"
                    } group-hover:scale-105 transition-transform duration-500`}
                    sizes="(max-width: 768px) 25vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        images={FEATURED_MOMENTS}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        title="Featured Moments"
      />
    </>
  );
}
