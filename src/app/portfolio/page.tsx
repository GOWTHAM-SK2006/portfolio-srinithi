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
      {/* Hero Banner — Zero-Overlap Grid on Mobile & Seamless Portrait Blend on Desktop */}
      <section className="relative hero-gradient overflow-hidden pt-16 sm:pt-20">
        <SpotlightBackdrop align="right" />
        <GoldenWaveRibbon className="absolute -bottom-2 sm:-bottom-4 left-0 right-0 w-full h-20 sm:h-36 z-20 opacity-95 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-12 pb-12 sm:pb-18 relative z-10 w-full">
          <div className="grid grid-cols-12 items-center gap-2 sm:gap-6 min-h-[165px] sm:min-h-[260px] lg:min-h-[290px]">
            {/* Left Title */}
            <div className="col-span-7 sm:col-span-6 relative z-20 animate-fade-in-up">
              <h1 className="font-display text-[2.5rem] sm:text-6xl lg:text-[4.25rem] font-normal italic leading-none mb-2.5 sm:mb-4">
                <span className="text-[#FAF6EE]">Port</span>
                <span className="gold-gradient-text relative">
                  folio
                  <span
                    className="pointer-events-none absolute -top-0.5 right-0 w-8 sm:w-12 h-[2px] bg-gradient-to-r from-transparent via-[#FFFEE5] to-transparent opacity-90"
                    aria-hidden="true"
                  />
                </span>
              </h1>
              <p className="text-[#E7DEC8]/90 text-xs sm:text-base lg:text-lg tracking-[0.1em] sm:tracking-[0.2em] leading-snug">
                A Glimpse of My Musical Journey
              </p>
            </div>

            {/* Right Seamless Stage Photo (edge-faded into obsidian stage) */}
            <div className="col-span-5 sm:col-span-6 relative h-[175px] sm:h-[270px] lg:h-[310px] pointer-events-none z-10 overflow-hidden">
              <Image
                src="/images/about/about.jpg"
                alt="Srinithi Anand performing live on stage"
                fill
                className="object-cover object-[50%_18%] sepia-[0.12] saturate-[1.06]"
                sizes="(max-width: 640px) 180px, 460px"
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
