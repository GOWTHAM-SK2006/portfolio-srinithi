import Image from "next/image";
import Link from "next/link";
import HomeClient from "@/components/HomeClient";
import AnimatedSection from "@/components/AnimatedSection";
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
      {/* Hero Section — Side-by-Side on BOTH Mobile & Desktop matching Reference 100% */}
      <section className="relative hero-gradient overflow-hidden pt-14 sm:pt-20">
        <SpotlightBackdrop align="right" />

        {/* Right Floating Golden Treble Clef (Visible on Mobile & Desktop) */}
        <div className="absolute top-20 right-2 sm:top-28 sm:right-6 xl:right-12 opacity-80 animate-float pointer-events-none z-20">
          <TrebleClefMark className="w-7 h-10 sm:w-12 sm:h-16 lg:w-14 lg:h-20 drop-shadow-[0_0_18px_rgba(230,179,102,0.55)]" />
        </div>

        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 pt-4 sm:pt-10 pb-8 sm:pb-20 relative z-10">
          <div className="relative flex items-center min-h-[300px] sm:min-h-[460px] lg:min-h-[540px]">
            {/* Left Typography (stays left-aligned alongside portrait on every screen size) */}
            <div className="relative z-20 w-[60%] sm:w-[54%] lg:w-[50%] pr-2 animate-fade-in-up">
              <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-4">
                <p className="text-[#E6DEC8] text-[7.5px] sm:text-[11px] lg:text-xs tracking-[0.2em] sm:tracking-[0.34em] uppercase font-medium whitespace-nowrap">
                  Award Winning Singer
                </p>
                <span className="h-px w-8 sm:w-24 bg-gradient-to-r from-[#E1AF64]/80 to-transparent" />
              </div>

              <h1 className="font-display text-[2.25rem] sm:text-6xl lg:text-[5.25rem] font-normal leading-[0.94] mb-1.5 sm:mb-4">
                <span className="block text-[#FAF6EE] tracking-tight">Srinithi</span>
                <span className="block gold-gradient-text tracking-tight relative w-fit">
                  Anand
                  {/* Crisp pinpoint star glint on top of Anand matching reference */}
                  <span
                    className="pointer-events-none absolute -top-0.5 left-[44%] w-8 sm:w-16 h-[2px] bg-gradient-to-r from-transparent via-[#FFFEE5] to-transparent opacity-90"
                    aria-hidden="true"
                  />
                  <span
                    className="pointer-events-none absolute -top-1.5 left-[49%] w-3 h-3 rounded-full bg-[#FFFEE5]/65 blur-[2px]"
                    aria-hidden="true"
                  />
                </span>
              </h1>

              <p className="text-[#EAE2CF]/90 text-[7px] sm:text-[11px] lg:text-xs tracking-[0.14em] sm:tracking-[0.26em] uppercase mt-1.5 sm:mt-5 mb-2 sm:mb-6 whitespace-nowrap">
                Singer &nbsp;|&nbsp; Performer &nbsp;|&nbsp; Artist
              </p>

              <blockquote className="font-display text-[#DFC086] text-[12px] sm:text-xl lg:text-[1.45rem] italic mb-1.5 sm:mb-4 leading-snug">
                &ldquo;A Voice That Creates
                <br />
                Unforgettable Moments.&rdquo;
              </blockquote>

              <p className="text-[#D8CEBA]/85 text-[8.5px] sm:text-xs lg:text-sm leading-relaxed mb-3 sm:mb-7 max-w-[195px] sm:max-w-md">
                A versatile vocalist known for soulful performances across Carnatic, devotional, film and fusion music.
              </p>

              {/* Pill Buttons — Side by side on Mobile & Desktop */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-3.5 mb-3 sm:mb-8">
                <Link
                  href="/about"
                  className="bg-gradient-to-r from-[#E8B86B] via-[#E1AF64] to-[#D49C49] text-[#160F06] font-semibold rounded-full text-[8.5px] sm:text-xs lg:text-sm px-2.5 sm:px-6 py-1.5 sm:py-3 inline-flex items-center gap-1 sm:gap-2.5 shadow-[0_4px_14px_rgba(225,175,100,0.28)] hover:brightness-105 transition-all whitespace-nowrap"
                >
                  Explore My Journey
                  <svg className="w-2.5 h-2.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>

                <Link
                  href="/portfolio"
                  className="border border-[#E1AF64]/60 bg-[#100C09]/70 backdrop-blur-sm text-[#F4EDE0] font-medium rounded-full text-[8.5px] sm:text-xs lg:text-sm px-2.5 sm:px-6 py-1.5 sm:py-3 inline-flex items-center gap-1 sm:gap-2.5 hover:bg-[#E1AF64]/15 transition-all whitespace-nowrap"
                >
                  <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border border-[#E1AF64]/80 flex items-center justify-center flex-shrink-0">
                    <svg className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 ml-0.5 text-[#E1AF64]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  View Portfolio
                </Link>
              </div>

              {/* 5 Social Circle Icons */}
              <div className="flex items-center gap-1.5 sm:gap-3">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-5 h-5 sm:w-9 sm:h-9 rounded-full border border-[#E1AF64]/45 bg-[#100C09]/70 flex items-center justify-center text-[#E6B366] hover:bg-[#E6B366] hover:text-[#160F06] hover:border-transparent transition-all"
                    aria-label={s.name}
                  >
                    <SocialIcon name={s.name} className="w-2.5 h-2.5 sm:w-4 sm:h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right — Large Warm-Lit Portrait with Glowing Crescent Gold Arc (side-by-side on mobile too!) */}
            <div className="absolute -right-4 sm:right-0 bottom-0 w-[56%] sm:w-[50%] lg:w-[50%] h-[310px] sm:h-[480px] lg:h-[560px] flex items-end justify-end pointer-events-none z-10">
              <div className="relative w-full h-full flex items-end justify-center">
                {/* 3/4 Glowing Golden Crescent Arc behind left/top-left of portrait */}
                <GoldenCrescentArc className="absolute -top-2 sm:-top-3 left-1/2 -translate-x-1/2 w-[235px] h-[235px] sm:w-[400px] sm:h-[400px] lg:w-[470px] lg:h-[470px] pointer-events-none z-0" />

                {/* Warm Amber Studio Rim Glow */}
                <div
                  className="absolute inset-0 pointer-events-none z-0"
                  style={{
                    background:
                      "radial-gradient(circle at 52% 46%, rgba(225, 175, 100, 0.16) 0%, rgba(108, 56, 9, 0.1) 45%, transparent 72%)",
                  }}
                />

                {/* Smooth bottom blend into the golden silk wave */}
                <div className="absolute inset-x-0 bottom-0 h-14 sm:h-24 bg-gradient-to-t from-[#090502] via-[#090502]/85 to-transparent z-20 pointer-events-none" />

                <Image
                  src="/images/srinithi-portrait.png"
                  alt="Srinithi Anand — Award Winning Singer"
                  fill
                  className="object-contain object-bottom z-10 relative sepia-[0.11] saturate-[1.08] brightness-[1.01] drop-shadow-[0_18px_40px_rgba(0,0,0,0.85)]"
                  priority
                  sizes="(max-width: 640px) 220px, 490px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Sweeping Double Golden Silk Wave */}
        <GoldenWaveRibbon className="absolute -bottom-2 sm:-bottom-3 left-0 right-0 w-full h-20 sm:h-40 lg:h-44 z-20 opacity-95" />
      </section>

      {/* Stats Strip — Always 4 Columns in 1 Horizontal Row (Mobile & Desktop) */}
      <section className="bg-gradient-to-b from-[#100B07] to-[#0B0906] relative z-20 pt-2.5 sm:pt-5 pb-4 sm:pb-10">
        <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 grid grid-cols-4 gap-1.5 sm:gap-6 lg:gap-8">
          {ARTIST_STATS.map((stat) => (
            <div key={stat.label} className="flex items-center justify-center gap-1.5 sm:gap-3.5">
              <div className="text-[#DDAC6A] flex-shrink-0">
                <GoldIcon name={stat.icon} className="w-4 h-4 sm:w-7 sm:h-7 lg:w-8 lg:h-8 stroke-[1.5]" />
              </div>
              <div className="min-w-0">
                <div className="font-display text-sm sm:text-2xl lg:text-3xl font-normal text-[#ECD9A1] leading-none">
                  {stat.number}
                </div>
                <div className="text-[7px] sm:text-[11px] lg:text-xs text-[#D5C8B0]/75 mt-0.5 sm:mt-1 leading-tight truncate">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Moments — Always 4 Cards in 1 Row */}
      <HomeClient />

      {/* Bottom 2 Wide CTA Cards — Always 2 Columns Side-by-Side (Mobile & Desktop) */}
      <section className="pt-2 sm:pt-4 pb-8 sm:pb-20 bg-[#090804]">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 grid grid-cols-2 gap-2.5 sm:gap-6">
          {/* Left Card: Awards & Recognitions */}
          <AnimatedSection>
            <div className="gold-border-card rounded-xl sm:rounded-2xl px-2.5 sm:px-7 py-3 sm:py-6 flex items-center justify-between gap-2 sm:gap-4 min-h-[105px] sm:min-h-[188px] group hover:-translate-y-0.5 transition-all">
              <div className="relative flex-shrink-0 w-14 h-14 sm:w-28 sm:h-28 lg:w-36 lg:h-36 flex items-center justify-center">
                <GoldenTrophyGraphic className="w-full h-full group-hover:scale-105 transition-transform duration-500" />
              </div>

              <div className="flex-1 text-center sm:text-left min-w-0">
                <h3 className="font-display text-xs sm:text-xl lg:text-[1.7rem] font-normal italic text-[#FAF6EE] leading-tight mb-2 sm:mb-4">
                  Awards &amp;
                  <br />
                  Recognitions
                </h3>
                <Link
                  href="/portfolio#awards"
                  className="bg-gradient-to-r from-[#E8B86B] via-[#E1AF64] to-[#D49C49] text-[#160F06] font-semibold rounded-full text-[8px] sm:text-xs py-1 sm:py-2.5 px-2 sm:px-5 inline-flex items-center gap-1 sm:gap-2 shadow-[0_4px_12px_rgba(225,175,100,0.25)] whitespace-nowrap"
                >
                  View Awards
                  <svg className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Card: Explore My Portfolio */}
          <AnimatedSection delay={100}>
            <div className="gold-border-card rounded-xl sm:rounded-2xl px-2.5 sm:px-7 py-3 sm:py-6 flex items-center justify-between gap-2 sm:gap-4 min-h-[105px] sm:min-h-[188px] group hover:-translate-y-0.5 transition-all">
              <div className="relative flex-shrink-0 w-14 h-14 sm:w-28 sm:h-28 lg:w-36 lg:h-36 flex items-center justify-center">
                <CameraLensGraphic className="w-full h-full group-hover:scale-105 transition-transform duration-500" />
              </div>

              <div className="flex-1 text-center sm:text-left min-w-0">
                <h3 className="font-display text-xs sm:text-xl lg:text-[1.7rem] font-normal italic text-[#FAF6EE] leading-tight mb-2 sm:mb-4">
                  Explore My
                  <br />
                  Portfolio
                </h3>
                <Link
                  href="/portfolio"
                  className="bg-gradient-to-r from-[#E8B86B] via-[#E1AF64] to-[#D49C49] text-[#160F06] font-semibold rounded-full text-[8px] sm:text-xs py-1 sm:py-2.5 px-2.5 sm:px-6 inline-flex items-center gap-1 sm:gap-2 shadow-[0_4px_12px_rgba(225,175,100,0.25)] whitespace-nowrap"
                >
                  View Gallery
                  <svg className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
