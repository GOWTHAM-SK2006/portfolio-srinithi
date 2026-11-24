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
      {/* Hero Section — Exact Reference Colors (#090502 -> #100C09 + #513118 Spotlight) */}
      <section className="relative hero-gradient overflow-hidden pt-20">
        <SpotlightBackdrop align="right" />

        {/* Right Floating Golden Treble Clef */}
        <div className="absolute top-32 right-6 xl:right-12 opacity-75 animate-float hidden lg:block pointer-events-none z-20">
          <TrebleClefMark className="w-14 h-20 drop-shadow-[0_0_20px_rgba(230,179,102,0.55)]" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-20 sm:pb-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Typography */}
            <div className="lg:col-span-6 animate-fade-in-up">
              <div className="flex items-center gap-3 mb-4">
                <p className="text-[#E6DEC8] text-[11px] sm:text-xs tracking-[0.34em] uppercase font-medium">
                  Award Winning Singer
                </p>
                <span className="h-px w-24 bg-gradient-to-r from-[#E1AF64]/80 to-transparent" />
              </div>

              <h1 className="font-display text-6xl sm:text-7xl lg:text-[5.25rem] font-normal leading-[0.95] mb-4">
                <span className="block text-[#FAF6EE] tracking-tight">Srinithi</span>
                <span className="block gold-gradient-text tracking-tight relative">
                  Anand
                  <span
                    className="pointer-events-none absolute -top-2 left-20 w-28 h-6 rounded-full bg-[#FFFFE5]/35 blur-md"
                    aria-hidden="true"
                  />
                </span>
              </h1>

              <p className="text-[#EAE2CF]/90 text-[11px] sm:text-xs tracking-[0.26em] uppercase mt-5 mb-6">
                Singer &nbsp;|&nbsp; Performer &nbsp;|&nbsp; Artist
              </p>

              <blockquote className="font-display text-[#DFC086] text-xl sm:text-[1.45rem] italic mb-4 leading-snug">
                &ldquo;A Voice That Creates
                <br />
                Unforgettable Moments.&rdquo;
              </blockquote>

              <p className="text-[#D8CEBA]/85 text-xs sm:text-sm leading-relaxed mb-7 max-w-md">
                A versatile vocalist known for soulful performances
                <br className="hidden sm:inline" /> across Carnatic, devotional, film and fusion music.
              </p>

              {/* Pill Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 mb-8">
                <Link
                  href="/about"
                  className="btn-gold text-xs sm:text-sm px-6 py-3 inline-flex items-center gap-2.5"
                >
                  Explore My Journey
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>

                <Link
                  href="/portfolio"
                  className="btn-outline-gold text-xs sm:text-sm px-6 py-3 inline-flex items-center gap-2.5"
                >
                  <span className="w-4 h-4 rounded-full border border-[#E1AF64]/80 flex items-center justify-center">
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
                    className="w-9 h-9 rounded-full border border-[#E1AF64]/45 bg-[#100C09]/70 flex items-center justify-center text-[#E6B366] hover:bg-[#E6B366] hover:text-[#160F06] hover:border-transparent transition-all"
                    aria-label={s.name}
                  >
                    <SocialIcon name={s.name} className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right — Large Warm-Lit Portrait with Glowing Crescent Gold Arc */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
              <div className="relative w-80 h-[430px] sm:w-[440px] sm:h-[520px] lg:w-[490px] lg:h-[560px] flex items-end justify-center">
                {/* 3/4 Glowing Golden Crescent Arc behind left/top-left of portrait */}
                <GoldenCrescentArc className="absolute -top-2 left-1/2 -translate-x-1/2 w-[360px] h-[360px] sm:w-[470px] sm:h-[470px] pointer-events-none z-0" />

                {/* Warm Amber Studio Rim Glow */}
                <div
                  className="absolute inset-0 pointer-events-none z-0"
                  style={{
                    background:
                      "radial-gradient(circle at 52% 46%, rgba(225, 175, 100, 0.16) 0%, rgba(108, 56, 9, 0.1) 45%, transparent 72%)",
                  }}
                />

                {/* Smooth bottom blend into the golden silk wave */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#090502] via-[#090502]/85 to-transparent z-20 pointer-events-none" />

                <Image
                  src="/images/srinithi-portrait.png"
                  alt="Srinithi Anand — Award Winning Singer"
                  fill
                  className="object-contain object-bottom z-10 relative sepia-[0.11] saturate-[1.08] brightness-[1.01] drop-shadow-[0_18px_40px_rgba(0,0,0,0.85)]"
                  priority
                  sizes="(max-width: 640px) 320px, 490px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Sweeping Double Golden Silk Wave */}
        <GoldenWaveRibbon className="absolute -bottom-3 left-0 right-0 w-full h-44 z-20 opacity-95" />
      </section>

      {/* Stats Strip — Seamless Deep Espresso Black (#100B07 -> #090804) */}
      <section className="bg-gradient-to-b from-[#100B07] to-[#0B0906] relative z-20 pt-5 pb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {ARTIST_STATS.map((stat) => (
            <div key={stat.label} className="flex items-center justify-center gap-3.5">
              <div className="text-[#DDAC6A] flex-shrink-0">
                <GoldIcon name={stat.icon} className="w-8 h-8 stroke-[1.5]" />
              </div>
              <div>
                <div className="font-display text-2xl sm:text-3xl font-normal text-[#ECD9A1] leading-none">
                  {stat.number}
                </div>
                <div className="text-[11px] sm:text-xs text-[#D5C8B0]/75 mt-1">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Moments — 4 Cards in 1 Row */}
      <HomeClient />

      {/* Bottom 2 Wide CTA Cards */}
      <section className="pt-4 pb-20 bg-[#090804]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Card: Awards & Recognitions */}
          <AnimatedSection>
            <div className="gold-border-card rounded-2xl px-5 sm:px-7 py-6 flex items-center justify-between gap-4 min-h-[188px] group hover:-translate-y-0.5 transition-all">
              <div className="relative flex-shrink-0 w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center">
                <GoldenTrophyGraphic className="w-full h-full group-hover:scale-105 transition-transform duration-500" />
              </div>

              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-display text-2xl sm:text-[1.7rem] font-normal italic text-[#FAF6EE] leading-tight mb-4">
                  Awards &amp;
                  <br />
                  Recognitions
                </h3>
                <Link
                  href="/portfolio#awards"
                  className="btn-gold text-xs py-2.5 px-5 inline-flex items-center gap-2"
                >
                  View Recognitions
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Card: Explore My Portfolio */}
          <AnimatedSection delay={100}>
            <div className="gold-border-card rounded-2xl px-5 sm:px-7 py-6 flex items-center justify-between gap-4 min-h-[188px] group hover:-translate-y-0.5 transition-all">
              <div className="relative flex-shrink-0 w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center">
                <CameraLensGraphic className="w-full h-full group-hover:scale-105 transition-transform duration-500" />
              </div>

              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-display text-2xl sm:text-[1.7rem] font-normal italic text-[#FAF6EE] leading-tight mb-4">
                  Explore My
                  <br />
                  Portfolio
                </h3>
                <Link
                  href="/portfolio"
                  className="btn-gold text-xs py-2.5 px-6 inline-flex items-center gap-2"
                >
                  View Gallery
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
