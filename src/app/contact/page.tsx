import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactClient";
import {
  DarkGoldMicGraphic,
  GoldenCrescentArc,
  GoldenWaveRibbon,
  SocialIcon,
  SpotlightBackdrop,
  TrebleClefMark,
} from "@/components/BrandDecorations";
import { SOCIAL_LINKS } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Srinithi Anand for live concert performances, musical collaborations, special events, and media enquiries in Chennai and worldwide.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#090705] relative overflow-hidden">
      {/* Hero Section — Left Bust Portrait + Center-Right Contact Me + Right Dark Gold Mic */}
      <section className="relative hero-gradient overflow-hidden pt-14 sm:pt-20">
        <SpotlightBackdrop align="left" />

        {/* Right Vintage Dark-Gold Condenser Microphone */}
        <div className="pointer-events-none absolute top-14 -right-6 sm:top-20 sm:-right-4 lg:right-2 w-24 h-36 sm:w-44 sm:h-64 lg:w-52 lg:h-72 z-10 opacity-90">
          <DarkGoldMicGraphic className="w-full h-full" />
        </div>

        {/* Sweeping Golden Silk Wave Divider */}
        <GoldenWaveRibbon className="absolute -bottom-3 left-0 right-0 w-full h-20 sm:h-36 z-20 opacity-95" />

        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 pt-4 sm:pt-8 pb-8 sm:pb-14 relative z-10 w-full">
          <div className="grid grid-cols-12 gap-2 sm:gap-8 items-center">
            {/* Left Bust Portrait with Glowing Crescent Gold Halo */}
            <div className="col-span-5 sm:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[165px] sm:max-w-[330px] h-[175px] sm:h-[310px] lg:h-[340px] flex items-end justify-center">
                <GoldenCrescentArc className="absolute -top-4 left-1/2 -translate-x-1/2 w-[180px] h-[180px] sm:w-[350px] sm:h-[350px] pointer-events-none z-0 opacity-95" />
                <div
                  className="absolute inset-0 pointer-events-none z-0"
                  style={{
                    background:
                      "radial-gradient(circle at 48% 45%, rgba(225, 175, 100, 0.2) 0%, transparent 72%)",
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 h-8 sm:h-14 bg-gradient-to-t from-[#090502] via-[#090502]/80 to-transparent z-20 pointer-events-none" />
                <Image
                  src="/images/srinithi-portrait.png"
                  alt="Srinithi Anand"
                  fill
                  className="object-cover object-top scale-105 sepia-[0.11] saturate-[1.08] relative z-10 drop-shadow-[0_14px_34px_rgba(0,0,0,0.85)]"
                  sizes="(max-width: 640px) 165px, 330px"
                  priority
                />
              </div>
            </div>

            {/* Center-Right Contact Hero Copy */}
            <div className="col-span-7 sm:col-span-6 text-center animate-fade-in-up pr-6 sm:pr-10">
              <p className="text-[#E1AF64] text-[7.5px] sm:text-xs tracking-[0.26em] sm:tracking-[0.36em] uppercase font-medium mb-1 sm:mb-2">
                Get In Touch
              </p>
              <h1 className="font-display text-[1.75rem] sm:text-5xl lg:text-[3.75rem] font-normal mb-1.5 sm:mb-3 text-[#FAF6EE] leading-none">
                Contact{" "}
                <span className="gold-gradient-text italic">Me</span>
              </h1>
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-4">
                <div className="h-px w-8 sm:w-20 bg-gradient-to-r from-transparent to-[#E1AF64]/80" />
                <TrebleClefMark className="w-3.5 h-5 sm:w-5 sm:h-7" />
                <div className="h-px w-8 sm:w-20 bg-gradient-to-l from-transparent to-[#E1AF64]/80" />
              </div>
              <p className="text-[#D8CEBA]/85 text-[8.5px] sm:text-sm max-w-sm mx-auto leading-snug sm:leading-relaxed">
                For performances, collaborations, events or any enquiries, feel
                free to reach out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info + Enquiry Form — Side-by-Side on Mobile & Desktop */}
      <section className="pt-4 sm:pt-10 pb-10 sm:pb-16 bg-[#090705] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-2.5 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-12 gap-2.5 sm:gap-8 lg:gap-10 items-start">
            {/* Left Column: Contact Info + Follow Me */}
            <div className="col-span-5">
              <AnimatedSection>
                <div className="gold-border-card rounded-xl sm:rounded-2xl p-2.5 sm:p-7 space-y-2.5 sm:space-y-6">
                  {/* Phone */}
                  <a
                    href="tel:+919XXXXXXXXXX"
                    className="flex items-center gap-2 sm:gap-4 group"
                  >
                    <div className="w-7 h-7 sm:w-12 sm:h-12 rounded-full border border-[#E1AF64]/65 bg-[#E1AF64]/10 shadow-[0_0_12px_rgba(225,175,100,0.2)] flex items-center justify-center flex-shrink-0 group-hover:bg-[#E1AF64] group-hover:text-[#160F06] text-[#E6B366] transition-all">
                      <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <h2 className="font-display text-[#E1AF64] font-normal text-[10px] sm:text-base leading-tight">
                        Phone
                      </h2>
                      <p className="text-[#FAF6EE]/90 text-[8px] sm:text-sm group-hover:text-gold-light transition-colors truncate">
                        +91 9XXXXXXXXXX
                      </p>
                    </div>
                  </a>

                  <div className="h-px bg-gradient-to-r from-transparent via-[#E1AF64]/25 to-transparent" />

                  {/* Email */}
                  <a
                    href="mailto:srinithianand@gmail.com"
                    className="flex items-center gap-2 sm:gap-4 group"
                  >
                    <div className="w-7 h-7 sm:w-12 sm:h-12 rounded-full border border-[#E1AF64]/65 bg-[#E1AF64]/10 shadow-[0_0_12px_rgba(225,175,100,0.2)] flex items-center justify-center flex-shrink-0 group-hover:bg-[#E1AF64] group-hover:text-[#160F06] text-[#E6B366] transition-all">
                      <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <h2 className="font-display text-[#E1AF64] font-normal text-[10px] sm:text-base leading-tight">
                        Email
                      </h2>
                      <p className="text-[#FAF6EE]/90 text-[7.5px] sm:text-sm group-hover:text-gold-light transition-colors break-all">
                        srinithianand@gmail.com
                      </p>
                    </div>
                  </a>

                  <div className="h-px bg-gradient-to-r from-transparent via-[#E1AF64]/25 to-transparent" />

                  {/* Location */}
                  <div className="flex items-center gap-2 sm:gap-4">
                    <div className="w-7 h-7 sm:w-12 sm:h-12 rounded-full border border-[#E1AF64]/65 bg-[#E1AF64]/10 shadow-[0_0_12px_rgba(225,175,100,0.2)] flex items-center justify-center flex-shrink-0 text-[#E6B366]">
                      <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <h2 className="font-display text-[#E1AF64] font-normal text-[10px] sm:text-base leading-tight">
                        Location
                      </h2>
                      <p className="text-[#FAF6EE]/90 text-[8px] sm:text-sm leading-tight">
                        Chennai, Tamil Nadu, India
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Social Links */}
              <AnimatedSection delay={140}>
                <div className="mt-4 sm:mt-8 text-center">
                  <div className="flex items-center justify-center gap-1.5 sm:gap-3 mb-2.5 sm:mb-5">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#E1AF64]/45" />
                    <h3 className="font-display text-xs sm:text-lg font-normal italic whitespace-nowrap">
                      <span className="text-[#FAF6EE]">Follow</span>{" "}
                      <span className="text-[#E1AF64]">Me</span>
                    </h3>
                    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#E1AF64]/45" />
                  </div>

                  <div className="flex justify-center gap-1.5 sm:gap-3">
                    {SOCIAL_LINKS.map((s) => (
                      <a
                        key={s.name}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-6 h-6 sm:w-10 sm:h-10 rounded-full border border-[#E1AF64]/50 bg-[#100C09]/80 flex items-center justify-center text-[#E6B366] hover:bg-[#E6B366] hover:text-[#160F06] hover:border-transparent transition-all"
                        aria-label={s.name}
                      >
                        <SocialIcon name={s.name} className="w-2.5 h-2.5 sm:w-4 sm:h-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Column: Enquiry Form */}
            <div className="col-span-7">
              <AnimatedSection delay={100}>
                <div className="gold-border-card rounded-xl sm:rounded-2xl p-3 sm:p-7 lg:p-8">
                  <h2 className="font-display text-base sm:text-2xl lg:text-3xl font-normal mb-2.5 sm:mb-6">
                    <span className="text-[#FAF6EE]">Send an</span>{" "}
                    <span className="text-[#E1AF64] italic">Enquiry</span>
                  </h2>
                  <ContactForm />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>

        {/* Bottom Sweeping Golden Silk Wave + Two Floating Gold Treble Clefs (matching Reference 4) */}
        <div className="relative mt-6 sm:mt-12 h-14 sm:h-28 pointer-events-none">
          <GoldenWaveRibbon className="absolute inset-0 w-full h-full opacity-90" />
          <div className="max-w-6xl mx-auto px-6 h-full relative">
            <TrebleClefMark className="absolute left-[8%] bottom-2 sm:bottom-4 w-5 h-7 sm:w-8 sm:h-11 opacity-85" />
            <TrebleClefMark className="absolute left-1/2 -translate-x-1/2 bottom-1 sm:bottom-2 w-5 h-7 sm:w-8 sm:h-11 opacity-85" />
          </div>
        </div>
      </section>
    </div>
  );
}
