import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import {
  AboutInterestsGrid,
  JourneySpotlightCard,
} from "@/components/AboutClient";
import {
  GoldenCrescentArc,
  GoldenWaveRibbon,
  GoldIcon,
  SpotlightBackdrop,
  VintageMicWatermark,
} from "@/components/BrandDecorations";

export const metadata: Metadata = {
  title: "About",
  description:
    "Discover the musical journey of Srinithi Anand — Carnatic training, 150+ stage performances, 25+ awards, television appearances, and albums.",
};

const aboutStats = [
  { icon: "music" as const, number: "150+", label: "Stage Performances" },
  { icon: "trophy" as const, number: "25+", label: "Awards" },
  { icon: "tv" as const, number: "10+", label: "TV Appearances" },
  { icon: "disc" as const, number: "7+", label: "Albums" },
];

export default function AboutPage() {
  return (
    <>
      {/* 1. Hero Banner — #080808 Obsidian + #B46F22 Warm Bronze Spotlight */}
      <section className="relative bg-[#080808] overflow-hidden pt-20">
        <SpotlightBackdrop align="right" />

        {/* Subtle Flowing Gold Lines along bottom-left edge */}
        <GoldenWaveRibbon className="absolute -bottom-8 left-0 right-0 w-full h-36 z-20 opacity-75" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-12 sm:pb-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Title */}
            <div className="lg:col-span-6 animate-fade-in-up">
              <h1 className="font-display text-5xl sm:text-6xl lg:text-[3.85rem] font-normal leading-[1.06] mb-4">
                <span className="block italic text-[#FAF6EE]">About</span>
                <span className="block gold-gradient-text tracking-tight">
                  Srinithi Anand
                </span>
              </h1>
              <div className="w-24 h-px bg-gradient-to-r from-[#D4A24C]/85 to-transparent mb-5" />
              <p className="text-[#EAE2CF]/90 text-sm sm:text-base tracking-[0.22em]">
                Singer &nbsp;|&nbsp; Performer &nbsp;|&nbsp; Artist
              </p>
            </div>

            {/* Right Close Bust Portrait with Glowing Crescent Halo */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
              <div className="relative w-72 h-72 sm:w-96 sm:h-80 lg:w-[430px] lg:h-[340px] flex items-end justify-center">
                {/* Warm Golden Bronze Halo behind portrait */}
                <div
                  className="pointer-events-none absolute -top-4 right-2 w-[320px] h-[320px] rounded-full blur-2xl opacity-75"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(180, 111, 34, 0.52) 0%, rgba(180, 111, 34, 0.14) 55%, transparent 75%)",
                  }}
                />
                {/* Crisp Crescent Arc framing top-right edge like About reference */}
                <GoldenCrescentArc className="absolute -top-6 right-0 w-[330px] h-[330px] sm:w-[390px] sm:h-[390px] scale-x-[-1] pointer-events-none z-0 opacity-95" />

                {/* Bottom dark fade */}
                <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#080808] via-[#080808]/75 to-transparent z-20 pointer-events-none" />

                <Image
                  src="/images/srinithi-portrait.png"
                  alt="Srinithi Anand"
                  fill
                  className="object-cover object-top scale-105 sepia-[0.11] saturate-[1.08] z-10 relative drop-shadow-[0_14px_30px_rgba(0,0,0,0.85)]"
                  sizes="(max-width: 640px) 288px, 430px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. My Journey — Warm Cream (#F7EAD9 -> #FDF3E7 -> #F7EAD9) */}
      <section
        className="py-14 sm:py-16 relative overflow-hidden text-[#23190E]"
        style={{
          background:
            "linear-gradient(180deg, #F7EAD9 0%, #FDF3E7 50%, #F7EAD9 100%)",
        }}
      >
        <GoldenWaveRibbon
          variant="cream"
          className="absolute bottom-0 left-0 right-0 w-full h-28 opacity-45"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left 16:10 Image with Play Button */}
              <div className="lg:col-span-6">
                <JourneySpotlightCard />
              </div>

              {/* Right Narrative */}
              <div className="lg:col-span-6">
                <div className="flex items-center gap-4 mb-5">
                  <h2 className="font-display text-3xl sm:text-4xl font-normal italic whitespace-nowrap">
                    <span className="text-[#23190E]">My</span>{" "}
                    <span className="text-[#A47123]">Journey</span>
                  </h2>
                  <span className="h-px flex-1 bg-gradient-to-r from-[#B98232]/70 to-transparent" />
                </div>

                <p className="text-[#2F2418]/90 text-sm sm:text-base leading-relaxed">
                  I&apos;m Srinithi Anand, a versatile vocalist with a deep
                  passion for music. My journey has been a beautiful blend of
                  Carnatic, devotional, film and fusion music, shaped by
                  consistent learning, stage experience and the love of my
                  audience.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Full-Width 4-Stat Strip with Vertical Gold Dividers */}
          <AnimatedSection delay={120}>
            <div className="mt-10 pt-4 grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#D5B78A]/75">
              {aboutStats.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center justify-center gap-3.5 py-3 md:py-1 px-4"
                >
                  <div className="text-[#B98232] flex-shrink-0">
                    <GoldIcon name={s.icon} className="w-8 h-8 stroke-[1.6]" />
                  </div>
                  <div>
                    <div className="font-display text-2xl sm:text-3xl font-normal text-[#23190E] leading-none">
                      {s.number}
                    </div>
                    <div className="text-xs text-[#3B2D1E]/85 mt-1">
                      {s.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 3. Musical Journey — Deep Obsidian Black (#090907) */}
      <section className="py-16 sm:py-20 bg-[#090907] relative overflow-hidden">
        <SpotlightBackdrop align="left" />
        <GoldenWaveRibbon className="absolute -bottom-4 left-0 right-0 w-full h-28 opacity-45" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Vertical Timeline */}
            <div className="lg:col-span-5">
              <AnimatedSection>
                <h2 className="font-display text-3xl sm:text-4xl font-normal italic mb-9">
                  <span className="text-[#FAF6EE]">Musical</span>{" "}
                  <span className="text-[#DFB065]">Journey</span>
                </h2>

                <div className="relative pl-10">
                  {/* Vertical Connecting Line */}
                  <div className="absolute left-[9px] top-2 bottom-4 w-px bg-gradient-to-b from-[#E1AF64] via-[#E1AF64]/60 to-[#E1AF64]/20" />

                  {[
                    {
                      title: "Early Training",
                      desc: "Foundation in Carnatic music.",
                    },
                    {
                      title: "Stage Experience",
                      desc: "Performed across various prestigious platforms.",
                    },
                    {
                      title: "Versatile Performer",
                      desc: "A blend of classical, devotional, film and fusion music.",
                    },
                  ].map((item, idx) => (
                    <AnimatedSection key={item.title} delay={idx * 120}>
                      <div className="relative mb-8 last:mb-0">
                        {/* Glowing Gold Node */}
                        <div className="absolute -left-10 top-0.5 w-5 h-5 rounded-full bg-gradient-to-br from-[#F7D78E] to-[#B67B24] ring-4 ring-[#E1AF64]/25 shadow-[0_0_14px_rgba(225,175,100,0.75)]" />
                        <h3 className="text-base sm:text-lg font-semibold text-[#F6E2B3] mb-1">
                          {item.title}
                        </h3>
                        <p className="text-[#D8CEBA]/80 text-xs sm:text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Right 16:10 Concert Stage Image */}
            <div className="lg:col-span-7">
              <AnimatedSection delay={160}>
                <div className="rounded-2xl overflow-hidden border border-[#D4A24C]/65 shadow-[0_18px_45px_rgba(0,0,0,0.85)] aspect-[16/10] relative">
                  <Image
                    src="/images/reality-shows/jaya-tv.jpeg"
                    alt="Srinithi Anand performing live on concert stage with microphone"
                    fill
                    className="object-cover object-[50%_20%]"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* 4. My Interests — Warm Cream (#F7EAD9 -> #FDF5EB) + Vintage Gold Mic & Staff */}
      <section
        className="py-16 sm:py-20 relative overflow-hidden text-[#23190E]"
        style={{
          background:
            "linear-gradient(180deg, #F7EAD9 0%, #FDF5EB 55%, #F6E6CF 100%)",
        }}
      >
        <GoldenWaveRibbon
          variant="cream"
          className="absolute bottom-0 left-0 right-0 w-full h-32 opacity-55"
        />
        <VintageMicWatermark
          className="absolute -bottom-3 right-0 sm:right-6 w-64 h-56 sm:w-80 sm:h-72 pointer-events-none"
          opacityClass="opacity-70"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-9 max-w-3xl">
              <h2 className="font-display text-3xl sm:text-4xl font-normal italic whitespace-nowrap">
                <span className="text-[#23190E]">My</span>{" "}
                <span className="text-[#A47123]">Interests</span>
              </h2>
              <span className="h-px flex-1 bg-gradient-to-r from-[#B98232]/70 to-transparent" />
            </div>
          </AnimatedSection>

          <AboutInterestsGrid />
        </div>
      </section>
    </>
  );
}
