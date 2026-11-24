import type { Metadata } from "next";
import Image from "next/image";
import PortfolioClient from "@/components/PortfolioClient";
import {
  GoldenWaveRibbon,
  SpotlightBackdrop,
} from "@/components/BrandDecorations";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore Srinithi Anand's photo galleries: With Celebrities, Live Performances, Stage Performances, Special Events, Musical Moments, Tour Diaries, and Awards.",
};

export default function PortfolioPage() {
  return (
    <div className="bg-[#080604]">
      {/* Hero Banner — Seamless Portrait Blend matching Portfolio Reference */}
      <section className="relative hero-gradient overflow-hidden pt-14 sm:pt-20">
        <SpotlightBackdrop align="right" />
        <GoldenWaveRibbon className="absolute -bottom-2 sm:-bottom-4 left-0 right-0 w-full h-20 sm:h-36 z-20 opacity-95" />

        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 pt-5 sm:pt-12 pb-6 sm:pb-14 relative z-10 w-full">
          <div className="relative flex items-center min-h-[140px] sm:min-h-[250px] lg:min-h-[280px]">
            {/* Left Title — exact match (no extra uppercase eyebrow) */}
            <div className="relative z-20 w-[56%] sm:w-[54%] animate-fade-in-up">
              <h1 className="font-display text-[2.25rem] sm:text-6xl lg:text-[4.25rem] font-normal italic leading-none mb-2 sm:mb-4">
                <span className="text-[#FAF6EE]">Port</span>
                <span className="gold-gradient-text relative">
                  folio
                  <span
                    className="pointer-events-none absolute -top-0.5 right-0 w-7 sm:w-12 h-[2px] bg-gradient-to-r from-transparent via-[#FFFEE5] to-transparent opacity-90"
                    aria-hidden="true"
                  />
                </span>
              </h1>
              <p className="text-[#E7DEC8]/90 text-[10px] sm:text-base lg:text-lg tracking-[0.12em] sm:tracking-[0.2em]">
                A Glimpse of My Musical Journey
              </p>
            </div>

            {/* Right Seamless Stage Photo (edge-faded into obsidian stage, no rectangular box) */}
            <div className="absolute -right-3 sm:right-0 bottom-0 w-[52%] sm:w-[48%] lg:w-[460px] h-[165px] sm:h-[270px] lg:h-[310px] pointer-events-none z-10 overflow-hidden">
              <Image
                src="/images/about/about.jpg"
                alt="Srinithi Anand performing live on stage"
                fill
                className="object-cover object-[50%_18%] sepia-[0.12] saturate-[1.06]"
                sizes="(max-width: 640px) 220px, 460px"
                priority
              />
              {/* Soft Left, Top, Right & Bottom Edge Vignette into #090502 */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, #090502 0%, rgba(9,5,2,0.55) 28%, transparent 58%, rgba(9,5,2,0.75) 100%), linear-gradient(180deg, rgba(9,5,2,0.5) 0%, transparent 25%, transparent 65%, #090502 100%)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <PortfolioClient />
    </div>
  );
}
