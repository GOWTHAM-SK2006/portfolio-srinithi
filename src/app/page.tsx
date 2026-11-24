import Image from "next/image";
import Link from "next/link";
import HomeClient from "@/components/HomeClient";
import AnimatedSection from "@/components/AnimatedSection";
import AboutSections from "@/components/sections/AboutSections";
import PortfolioSections from "@/components/sections/PortfolioSections";
import ContactSections from "@/components/sections/ContactSections";
import {
  CameraLensGraphic,
  GoldenCrescentArc,
  GoldenTrophyGraphic,
  GoldenWaveRibbon,
  GoldIcon,
  SocialIcon,
  SpotlightBackdrop,
  TrebleClefMark,
} from "@/components/BrandDecorations";
import { ARTIST_STATS, SOCIAL_LINKS } from "@/data/portfolioData";

export default function HomePage() {
  return (
    <div className="bg-[#090804]">
      <div id="home" className="scroll-mt-16 sm:scroll-mt-20">
        {/* Hero Section — Zero-Overlap Grid on Mobile & Full Reference Split on Desktop */}
      <section className="relative hero-gradient overflow-hidden pt-16 sm:pt-20">
        <SpotlightBackdrop align="right" />

        {/* Right Floating Golden Treble Clef */}
        <div className="absolute top-20 right-3 sm:top-28 sm:right-6 xl:right-12 opacity-85 animate-float pointer-events-none z-20">
          <TrebleClefMark className="w-8 h-11 sm:w-12 sm:h-16 lg:w-14 lg:h-20 drop-shadow-[0_0_18px_rgba(230,179,102,0.55)]" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 sm:pt-10 pb-16 sm:pb-24 relative z-10">
          <div className="grid grid-cols-12 items-center gap-x-2 sm:gap-x-6 gap-y-4 sm:gap-y-5 md:min-h-[520px] lg:min-h-[560px]">
            {/* Row 1 Left: Eyebrow, Main Name Display & Role */}
            <div className="col-span-7 md:col-span-6 md:self-end relative z-20 animate-fade-in-up">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
                <p className="text-[#E6DEC8] text-[11px] sm:text-xs lg:text-sm tracking-[0.15em] sm:tracking-[0.32em] uppercase font-medium">
                  Award Winning Singer
                </p>
                <span className="hidden sm:block h-px flex-1 max-w-[96px] bg-gradient-to-r from-[#E1AF64]/80 to-transparent" />
              </div>

              <h1 className="font-display text-[2.6rem] sm:text-6xl lg:text-[5.25rem] font-normal leading-[0.95] mb-2 sm:mb-4">
                <span className="block text-[#FAF6EE] tracking-tight">Srinithi</span>
                <span className="block gold-gradient-text tracking-tight relative w-fit">
                  Anand
                  {/* Crisp pinpoint star glint on top of Anand matching reference */}
                  <span
                    className="pointer-events-none absolute -top-0.5 left-[44%] w-10 sm:w-16 h-[2px] bg-gradient-to-r from-transparent via-[#FFFEE5] to-transparent opacity-90"
                    aria-hidden="true"
                  />
                  <span
                    className="pointer-events-none absolute -top-1.5 left-[49%] w-3 h-3 rounded-full bg-[#FFFEE5]/65 blur-[2px]"
                    aria-hidden="true"
                  />
                </span>
              </h1>

              <p className="text-[#EAE2CF]/90 text-[11px] sm:text-xs lg:text-sm tracking-[0.1em] sm:tracking-[0.24em] uppercase mt-2.5 sm:mt-4 leading-relaxed">
                Singer &nbsp;|&nbsp; Performer &nbsp;|&nbsp; Artist
              </p>
            </div>

            {/* Right: Dedicated Column for Warm-Lit Portrait with Crescent Arc */}
            <div className="col-span-5 md:col-span-6 md:row-span-2 relative h-[225px] sm:h-[340px] md:h-[500px] lg:h-[560px] flex items-end justify-center pointer-events-none z-10">
              <GoldenCrescentArc className="absolute -top-1 sm:-top-3 left-1/2 -translate-x-1/2 w-[195px] h-[195px] sm:w-[320px] sm:h-[320px] lg:w-[460px] lg:h-[460px] pointer-events-none z-0" />

              {/* Warm Amber Studio Rim Glow */}
              <div
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                  background:
                    "radial-gradient(circle at 52% 46%, rgba(225, 175, 100, 0.16) 0%, rgba(108, 56, 9, 0.1) 45%, transparent 72%)",
                }}
              />

              {/* Smooth bottom blend into the golden silk wave */}
              <div className="absolute inset-x-0 bottom-0 h-10 sm:h-24 bg-gradient-to-t from-[#090502] via-[#090502]/85 to-transparent z-20 pointer-events-none" />

              <Image
                src="/images/srinithi-portrait.png"
                alt="Srinithi Anand — Award Winning Singer"
                fill
                className="object-contain object-bottom z-10 relative sepia-[0.11] saturate-[1.08] brightness-[1.01] drop-shadow-[0_18px_40px_rgba(0,0,0,0.85)]"
                priority
                sizes="(max-width: 640px) 180px, (max-width: 1024px) 360px, 490px"
              />
            </div>

            {/* Row 2: Quote, Description, CTA Pill Buttons & Social Links */}
            <div className="col-span-12 md:col-span-6 md:row-start-2 md:self-start relative z-20 animate-fade-in-up">
              <blockquote className="font-display text-[#DFC086] text-xl sm:text-2xl lg:text-[1.5rem] italic mb-2.5 sm:mb-4 leading-snug">
                &ldquo;A Voice That Creates
                <br />
                Unforgettable Moments.&rdquo;
              </blockquote>

              <p className="text-[#D8CEBA]/90 text-[15px] sm:text-sm lg:text-base leading-relaxed mb-5 sm:mb-7 max-w-md">
                A versatile vocalist known for soulful performances across Carnatic, devotional, film and fusion music.
              </p>

              {/* Pill Buttons */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-3.5 mb-5 sm:mb-8">
                <Link
                  href="/#about"
                  className="bg-gradient-to-r from-[#E8B86B] via-[#E1AF64] to-[#D49C49] text-[#160F06] font-semibold rounded-full text-sm sm:text-sm lg:text-[15px] px-5 sm:px-6 py-2.5 sm:py-3 inline-flex items-center gap-2 shadow-[0_4px_14px_rgba(225,175,100,0.28)] hover:brightness-105 transition-all whitespace-nowrap"
                >
                  Explore My Journey
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>

                <Link
                  href="/#portfolio"
                  className="border border-[#E1AF64]/60 bg-[#100C09]/70 backdrop-blur-sm text-[#F4EDE0] font-medium rounded-full text-sm sm:text-sm lg:text-[15px] px-5 sm:px-6 py-2.5 sm:py-3 inline-flex items-center gap-2 hover:bg-[#E1AF64]/15 transition-all whitespace-nowrap"
                >
                  <span className="w-4 h-4 rounded-full border border-[#E1AF64]/80 flex items-center justify-center flex-shrink-0">
                    <svg className="w-2.5 h-2.5 ml-0.5 text-[#E1AF64]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  View Portfolio
                </Link>
              </div>

              {/* 5 Social Circle Icons */}
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#E1AF64]/45 bg-[#100C09]/70 flex items-center justify-center text-[#E6B366] hover:bg-[#E6B366] hover:text-[#160F06] hover:border-transparent transition-all"
                    aria-label={s.name}
                  >
                    <SocialIcon name={s.name} className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Sweeping Double Golden Silk Wave */}
        <GoldenWaveRibbon className="absolute -bottom-2 sm:-bottom-3 left-0 right-0 w-full h-20 sm:h-40 lg:h-44 z-20 opacity-95 pointer-events-none" />
      </section>

      {/* Stats Strip — 2x2 Scrolling Grid on Mobile, 4 Columns on Desktop */}
      <section className="bg-gradient-to-b from-[#100B07] to-[#0B0906] relative z-20 pt-5 sm:pt-7 pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {ARTIST_STATS.map((stat) => (
            <div key={stat.label} className="flex items-center justify-start sm:justify-center gap-3 sm:gap-3.5">
              <div className="text-[#DDAC6A] flex-shrink-0">
                <GoldIcon name={stat.icon} className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.5]" />
              </div>
              <div className="min-w-0">
                <div className="font-display text-2xl sm:text-3xl lg:text-[2.1rem] font-normal text-[#ECD9A1] leading-none">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-[#D5C8B0]/85 mt-1 leading-snug">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Moments — 2x2 on Mobile, 4-Column Row on Desktop */}
      <HomeClient />

      {/* Bottom 2 Wide CTA Cards — 1 Column Scrolling on Mobile, 2 Columns Side-by-Side on Desktop */}
      <section className="pt-2 sm:pt-4 pb-12 sm:pb-20 bg-[#090804]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Left Card: Awards & Recognitions */}
          <AnimatedSection>
            <div className="gold-border-card rounded-2xl px-5 sm:px-7 py-5 sm:py-6 flex items-center justify-between gap-4 min-h-[150px] sm:min-h-[188px] group hover:-translate-y-0.5 transition-all">
              <div className="relative flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36 flex items-center justify-center">
                <GoldenTrophyGraphic className="w-full h-full group-hover:scale-105 transition-transform duration-500" />
              </div>

              <div className="flex-1 text-left min-w-0">
                <h3 className="font-display text-xl sm:text-2xl lg:text-[1.75rem] font-normal italic text-[#FAF6EE] leading-tight mb-3 sm:mb-4">
                  Awards &amp;
                  <br />
                  Recognitions
                </h3>
                <Link
                  href="/#awards"
                  className="bg-gradient-to-r from-[#E8B86B] via-[#E1AF64] to-[#D49C49] text-[#160F06] font-semibold rounded-full text-sm py-2.5 px-5 sm:px-6 inline-flex items-center gap-2 shadow-[0_4px_12px_rgba(225,175,100,0.25)] whitespace-nowrap"
                >
                  View Awards
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Card: Explore My Portfolio */}
          <AnimatedSection delay={100}>
            <div className="gold-border-card rounded-2xl px-5 sm:px-7 py-5 sm:py-6 flex items-center justify-between gap-4 min-h-[150px] sm:min-h-[188px] group hover:-translate-y-0.5 transition-all">
              <div className="relative flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36 flex items-center justify-center">
                <CameraLensGraphic className="w-full h-full group-hover:scale-105 transition-transform duration-500" />
              </div>

              <div className="flex-1 text-left min-w-0">
                <h3 className="font-display text-xl sm:text-2xl lg:text-[1.75rem] font-normal italic text-[#FAF6EE] leading-tight mb-3 sm:mb-4">
                  Explore My
                  <br />
                  Portfolio
                </h3>
                <Link
                  href="/#portfolio"
                  className="bg-gradient-to-r from-[#E8B86B] via-[#E1AF64] to-[#D49C49] text-[#160F06] font-semibold rounded-full text-sm py-2.5 px-5 sm:px-6 inline-flex items-center gap-2 shadow-[0_4px_12px_rgba(225,175,100,0.25)] whitespace-nowrap"
                >
                  View Gallery
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      </div>

      {/* Continuous Single-Page Scroll Flow: About -> Portfolio -> Contact */}
      <AboutSections embedded />
      <PortfolioSections embedded />
      <ContactSections embedded />
    </div>
  );
}
