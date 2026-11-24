import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactClient";
import {
  GoldenWaveRibbon,
  SocialIcon,
  SpotlightBackdrop,
  TrebleClefMark,
  VintageMicWatermark,
} from "@/components/BrandDecorations";
import { SOCIAL_LINKS } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Srinithi Anand for live concert performances, musical collaborations, special events, and media enquiries in Chennai and worldwide.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section — Side-by-Side Portrait & Contact Me */}
      <section className="relative hero-gradient overflow-hidden pt-14 sm:pt-20">
        <SpotlightBackdrop align="left" />
        <GoldenWaveRibbon className="absolute -bottom-3 left-0 right-0 w-full h-20 sm:h-36 z-20 opacity-85" />
        <VintageMicWatermark
          className="absolute top-12 -right-4 sm:-right-8 w-28 h-28 sm:w-64 sm:h-64 pointer-events-none"
          opacityClass="opacity-30 sm:opacity-35"
        />

        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-6 sm:pt-12 pb-8 sm:pb-16 relative z-10 w-full">
          <div className="grid grid-cols-12 gap-3 sm:gap-10 items-center">
            {/* Portrait with Halo */}
            <div className="col-span-5 lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[155px] sm:max-w-[320px] h-[180px] sm:h-[360px] lg:h-[400px] flex items-end justify-center">
                <div
                  className="absolute top-2 sm:top-4 w-32 h-32 sm:w-72 sm:h-72 rounded-full border border-gold-light/45 shadow-[0_0_55px_rgba(212,162,76,0.28)] pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(246, 227, 173, 0.22) 0%, transparent 72%)",
                  }}
                />
                <Image
                  src="/images/srinithi-portrait.png"
                  alt="Srinithi Anand"
                  fill
                  className="object-contain object-bottom relative z-10 drop-shadow-[0_14px_34px_rgba(0,0,0,0.85)]"
                  sizes="(max-width: 640px) 155px, 320px"
                  priority
                />
              </div>
            </div>

            {/* Contact Hero Copy */}
            <div className="col-span-7 lg:col-span-6 text-left animate-fade-in-up">
              <p className="text-gold-mid text-[8px] sm:text-xs tracking-[0.22em] sm:tracking-[0.32em] uppercase font-medium mb-1.5 sm:mb-3">
                Get In Touch
              </p>
              <h1 className="font-display text-[1.85rem] sm:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 text-[#FFF7E2]">
                Contact{" "}
                <span className="gold-gradient-text italic">Me</span>
              </h1>
              <div className="flex items-center justify-start gap-2 sm:gap-3 mb-2 sm:mb-5">
                <div className="section-divider w-8 sm:w-20" />
                <TrebleClefMark className="w-3.5 h-5 sm:w-5 sm:h-7" />
                <div className="section-divider rotate-180 w-8 sm:w-20" />
              </div>
              <p className="text-[#D5C8B0]/80 text-[9px] sm:text-sm lg:text-base max-w-md leading-snug sm:leading-relaxed">
                For performances, collaborations, events or any enquiries, feel
                free to reach out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info + Enquiry Form — Side-by-Side on Mobile & Desktop matching Reference 4 */}
      <section className="py-6 sm:py-16 lg:py-20 bg-obsidian relative overflow-hidden">
        <div className="golden-wave" />
        <div className="max-w-6xl mx-auto px-2.5 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-12 gap-2.5 sm:gap-8 lg:gap-10 items-start">
            {/* Left Column: Contact Info + Follow Me */}
            <div className="col-span-5">
              <AnimatedSection>
                <div className="gold-border-card rounded-xl sm:rounded-2xl p-3 sm:p-8 space-y-3 sm:space-y-7">
                  {/* Phone */}
                  <a
                    href="tel:+919XXXXXXXXXX"
                    className="flex items-start gap-2 sm:gap-4 group"
                  >
                    <div className="w-7 h-7 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border border-gold/45 bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold group-hover:text-obsidian text-gold-light transition-all">
                      <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <h2 className="text-gold-light font-semibold text-[9.5px] sm:text-sm mb-0.5">
                        Phone
                      </h2>
                      <p className="text-[#F7F1E3]/85 text-[8.5px] sm:text-sm group-hover:text-gold-light transition-colors truncate">
                        +91 9XXXXXXXXXX
                      </p>
                    </div>
                  </a>

                  <div className="h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

                  {/* Email */}
                  <a
                    href="mailto:srinithianand@gmail.com"
                    className="flex items-start gap-2 sm:gap-4 group"
                  >
                    <div className="w-7 h-7 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border border-gold/45 bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold group-hover:text-obsidian text-gold-light transition-all">
                      <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <h2 className="text-gold-light font-semibold text-[9.5px] sm:text-sm mb-0.5">
                        Email
                      </h2>
                      <p className="text-[#F7F1E3]/85 text-[8px] sm:text-sm group-hover:text-gold-light transition-colors break-all">
                        srinithianand@gmail.com
                      </p>
                    </div>
                  </a>

                  <div className="h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

                  {/* Location */}
                  <div className="flex items-start gap-2 sm:gap-4">
                    <div className="w-7 h-7 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full border border-gold/45 bg-gold/10 flex items-center justify-center flex-shrink-0 text-gold-light">
                      <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <h2 className="text-gold-light font-semibold text-[9.5px] sm:text-sm mb-0.5">
                        Location
                      </h2>
                      <p className="text-[#F7F1E3]/85 text-[8.5px] sm:text-sm leading-tight">
                        Chennai, Tamil Nadu, India
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Social Links */}
              <AnimatedSection delay={140}>
                <div className="mt-4 sm:mt-8 text-center">
                  <div className="flex items-center justify-center gap-1.5 sm:gap-3 mb-2.5 sm:mb-6">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/35" />
                    <h3 className="font-display text-xs sm:text-lg font-bold italic whitespace-nowrap">
                      <span className="text-[#FFF7E2]">Follow</span>{" "}
                      <span className="gold-gradient-text">Me</span>
                    </h3>
                    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/35" />
                  </div>

                  <div className="flex justify-center gap-1.5 sm:gap-3.5">
                    {SOCIAL_LINKS.map((s) => (
                      <a
                        key={s.name}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-6 h-6 sm:w-11 sm:h-11 rounded-full border border-gold/45 bg-obsidian-card/80 flex items-center justify-center text-gold-light hover:bg-gradient-to-br hover:from-gold-light hover:to-gold-dark hover:text-obsidian hover:border-transparent transition-all"
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
                <div className="gold-border-card rounded-xl sm:rounded-2xl p-3.5 sm:p-8">
                  <h2 className="font-display text-base sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-7">
                    <span className="text-[#FFF7E2]">Send an</span>{" "}
                    <span className="gold-gradient-text italic">Enquiry</span>
                  </h2>
                  <ContactForm />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
