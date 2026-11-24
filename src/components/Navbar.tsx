"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TrebleClefMark } from "@/components/BrandDecorations";

const navLinks = [
  { id: "home", route: "/", href: "/#home", label: "Home" },
  { id: "about", route: "/about", href: "/#about", label: "About" },
  { id: "portfolio", route: "/portfolio", href: "/#portfolio", label: "Portfolio" },
  { id: "contact", route: "/contact", href: "/#contact", label: "Contact" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [openForPath, setOpenForPath] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const isOpen = openForPath === pathname;

  useEffect(() => {
    const updateOnScroll = () => {
      setScrolled(window.scrollY > 40);

      if (pathname !== "/") return;

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 40;
      if (atBottom && document.getElementById("contact")) {
        setActiveSection("contact");
        return;
      }

      let current = "home";
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el && el.getBoundingClientRect().top <= 160) {
          current = link.id;
        }
      }
      setActiveSection(current);
    };

    const rafId = window.requestAnimationFrame(updateOnScroll);
    window.addEventListener("scroll", updateOnScroll, { passive: true });
    window.addEventListener("resize", updateOnScroll, { passive: true });
    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", updateOnScroll);
      window.removeEventListener("resize", updateOnScroll);
    };
  }, [pathname]);

  const toggleMenu = () => {
    setOpenForPath((prev) => (prev === pathname ? null : pathname));
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    setOpenForPath(null);
    if (pathname === "/") {
      const target = document.getElementById(sectionId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const getIsActive = (link: (typeof navLinks)[number]) => {
    if (pathname === "/") {
      return activeSection === link.id;
    }
    return pathname === link.route;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#101010]/95 backdrop-blur-lg border-b border-[#E1AF64]/20 shadow-[0_8px_32px_rgba(0,0,0,0.65)]"
          : "bg-[#101010]/90 backdrop-blur-sm border-b border-[#E1AF64]/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo — Pure Metallic Gold Treble Clef */}
          <Link
            href="/#home"
            onClick={(e) => handleLinkClick(e, "home")}
            className="flex items-center gap-2.5 sm:gap-3 group flex-shrink-0"
          >
            <TrebleClefMark className="w-6 h-8 sm:w-7 sm:h-9 drop-shadow-[0_0_10px_rgba(212,162,76,0.5)] group-hover:scale-105 transition-transform" />
            <div>
              <span className="block font-display text-base sm:text-xl font-semibold tracking-wider text-[#FFF7E2] group-hover:text-gold-light transition-colors leading-tight">
                SRINITHI ANAND
              </span>
              <span className="block text-[10px] sm:text-xs tracking-[0.2em] text-gold uppercase font-medium">
                Official Artist
              </span>
            </div>
          </Link>

          {/* Centered Desktop Nav */}
          <div className="hidden md:flex items-center justify-center gap-10">
            {navLinks.map((link) => {
              const isActive = getIsActive(link);
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className={`text-[15px] font-medium tracking-wide transition-all relative py-1.5 ${
                    isActive
                      ? "text-gold-light"
                      : "text-[#EDE5D2]/85 hover:text-gold-light"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-gold-dark via-gold-light to-gold-dark rounded-full shadow-[0_0_8px_rgba(212,162,76,0.75)]" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Menu Toggle Button */}
          <div className="flex items-center flex-shrink-0">
            <button
              onClick={toggleMenu}
              className="relative w-10 h-10 rounded-lg flex flex-col items-end justify-center gap-1.5 hover:opacity-80 transition-opacity cursor-pointer flex-shrink-0"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              <span
                className={`block w-6 h-[2px] bg-gold/90 transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-[8px]" : ""
                }`}
              />
              <span
                className={`block w-6 h-[2px] bg-gold/90 transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-[2px] bg-gold/90 transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-[8px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Drawer */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-obsidian/98 backdrop-blur-xl border-t border-b border-gold/25 px-4 sm:px-8 py-4 space-y-1.5 shadow-2xl max-w-7xl mx-auto">
          {navLinks.map((link) => {
            const isActive = getIsActive(link);
            return (
              <Link
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`block text-base font-medium py-3 px-4 rounded-xl transition-all ${
                  isActive
                    ? "text-gold-light bg-gold/15 border border-gold/35"
                    : "text-[#E7DEC8]/85 hover:text-gold-light hover:bg-gold/10"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
