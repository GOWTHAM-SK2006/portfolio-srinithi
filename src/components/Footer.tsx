import Link from "next/link";
import { SOCIAL_LINKS } from "@/data/portfolioData";
import {
  GoldenWaveRibbon,
  SocialIcon,
  TrebleClefMark,
} from "@/components/BrandDecorations";

export default function Footer() {
  return (
    <footer className="relative bg-obsidian border-t border-gold/25 overflow-hidden">
      <div className="golden-wave" />
      <GoldenWaveRibbon className="absolute bottom-0 left-0 right-0 w-full h-36 opacity-55" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-10 h-11 flex items-center justify-center rounded-full bg-gold/10 border border-gold/35">
                <TrebleClefMark className="w-6 h-8" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-[#FFF7E2] group-hover:text-gold-light transition-colors">
                  SRINITHI ANAND
                </h3>
                <p className="text-xs tracking-[0.22em] text-gold uppercase">
                  Official Artist
                </p>
              </div>
            </Link>
            <p className="text-[15px] text-[#D5C8B0]/80 leading-relaxed mt-4 max-w-sm">
              A versatile vocalist celebrated for soulful performances across
              Carnatic, devotional, television, film and fusion music.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gold-light mb-4 text-xs sm:text-sm tracking-[0.22em] uppercase">
              Quick Links
            </h4>
            <div className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/portfolio#awards", label: "Awards & Recognitions" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-[15px] text-[#D5C8B0]/80 hover:text-gold-light transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold text-gold-light mb-4 text-xs sm:text-sm tracking-[0.22em] uppercase">
              Connect
            </h4>
            <a
              href="mailto:srinithianand@gmail.com"
              className="block text-[15px] text-[#D5C8B0]/90 hover:text-gold-light transition-colors mb-1.5"
            >
              srinithianand@gmail.com
            </a>
            <p className="text-[15px] text-[#D5C8B0]/70 mb-5">
              Chennai, Tamil Nadu, India
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gold/40 bg-obsidian-card/70 flex items-center justify-center text-gold-light/85 hover:bg-gradient-to-br hover:from-gold-light hover:to-gold-dark hover:text-obsidian hover:border-transparent transition-all"
                  aria-label={s.name}
                >
                  <SocialIcon name={s.name} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Treble Clef Divider */}
        <div className="flex items-center justify-center my-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/35 to-transparent" />
          <div className="mx-4 flex items-center justify-center">
            <TrebleClefMark className="w-6 h-8 opacity-85" />
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/35 to-transparent" />
        </div>

        <p className="text-center text-xs text-[#A39278]">
          © {new Date().getFullYear()} Srinithi Anand. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
