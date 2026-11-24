import type { Metadata } from "next";
import Image from "next/image";
import PortfolioClient from "@/components/PortfolioClient";
import {
  GoldenWaveRibbon,
  SpotlightBackdrop,
  TrebleClefMark,
} from "@/components/BrandDecorations";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore Srinithi Anand's photo galleries: With Celebrities, Live Performances, Stage Performances, Special Events, Musical Moments, Tour Diaries, and Awards.",
};

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Banner — Obsidian Black + Golden Spotlight */}
      <section className="relative min-h-[48vh] hero-gradient overflow-hidden flex items-end">
        <SpotlightBackdrop align="right" />
        <GoldenWaveRibbon className="absolute bottom-0 left-0 right-0 w-full h-32 z-20 opacity-85" />

        <div className="absolute top-28 left-8 opacity-25 animate-float hidden lg:block pointer-events-none">
          <TrebleClefMark className="w-14 h-20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-10 sm:pb-14 relative z-10 w-full">
          <div className="grid grid-cols-12 gap-4 sm:gap-10 items-end">
            <div className="col-span-7 lg:col-span-6 animate-fade-in-up">
              <p className="text-gold-mid text-[9px] sm:text-xs tracking-[0.24em] sm:tracking-[0.3em] uppercase font-medium mb-2 sm:mb-3">
                Curated Collection
              </p>
              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold italic mb-2 sm:mb-3">
                <span className="text-[#FFF7E2]">Port</span>
                <span className="gold-gradient-text">folio</span>
              </h1>
              <p className="text-[#E7DEC8]/75 text-[10px] sm:text-sm lg:text-base tracking-[0.12em] sm:tracking-[0.18em] uppercase">
                A Glimpse of My Musical Journey
              </p>
            </div>

            {/* Clean Real Live Singing Photo (Mobile & Desktop) */}
            <div className="col-span-5 lg:col-span-6 flex justify-end">
              <div className="relative w-full max-w-[160px] sm:max-w-[300px] lg:max-w-[320px] h-32 sm:h-64 lg:h-72 rounded-xl sm:rounded-2xl overflow-hidden border border-gold/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                <Image
                  src="/images/about/about.jpg"
                  alt="Srinithi Anand performing live on stage"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 160px, 320px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-obsidian/45 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <PortfolioClient />
    </>
  );
}
