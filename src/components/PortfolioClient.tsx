"use client";

import { useState } from "react";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import Lightbox from "@/components/Lightbox";
import {
  GoldIcon,
  GoldenWaveRibbon,
  TrebleClefMark,
  VintageMicWatermark,
} from "@/components/BrandDecorations";
import {
  AWARDS_GALLERY,
  PORTFOLIO_CATEGORIES,
  type GalleryImage,
} from "@/data/portfolioData";

const TOUR_DESTINATIONS = ["All", "Kashmir", "Malaysia", "Sri Lanka", "Vietnam"] as const;

export default function PortfolioClient() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<GalleryImage[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxTitle, setLightboxTitle] = useState<string | undefined>(undefined);

  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [tourDestination, setTourDestination] = useState<string>("All");
  const [awardsExpanded, setAwardsExpanded] = useState(false);

  const openLightbox = (
    images: GalleryImage[],
    index: number,
    title?: string
  ) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxTitle(title);
    setLightboxOpen(true);
  };

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory((prev) => (prev === categoryId ? null : categoryId));
  };

  const displayedAwards = awardsExpanded
    ? AWARDS_GALLERY
    : AWARDS_GALLERY.slice(0, 8);

  return (
    <>
      {/* 6 Gallery Cards — Scrolling Stack on Mobile, Exact 2x3 Grid on Desktop */}
      <section className="pt-6 sm:pt-10 pb-10 sm:pb-16 bg-[#080604] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
            {PORTFOLIO_CATEGORIES.map((category, catIdx) => {
              const isExpanded = expandedCategory === category.id;
              const isTourDiaries = category.id === "tour-diaries";

              const tourFilteredImages =
                isTourDiaries && tourDestination !== "All"
                  ? category.images.filter((i) => i.subCategory === tourDestination)
                  : category.images;

              const previewImages = isTourDiaries
                ? [
                    category.images[0],
                    category.images[7],
                    category.images[14],
                    category.images[18],
                  ]
                : category.images.slice(0, 4);

              const displayImages = isExpanded ? tourFilteredImages : previewImages;

              return (
                <AnimatedSection
                  key={category.id}
                  delay={catIdx * 60}
                  className={isExpanded ? "col-span-1 md:col-span-2" : ""}
                >
                  <div className="gold-border-card rounded-2xl px-4 sm:px-6 py-5 sm:py-6 h-full flex flex-col">
                    {/* Card Header — Pure Gold Icon + Italic Title + Description + Right Chevron */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-start gap-3 sm:gap-3.5 min-w-0">
                        <div className="text-[#E1AF64] flex-shrink-0 pt-0.5">
                          <GoldIcon name={category.icon} className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.6]" />
                        </div>
                        <div className="min-w-0">
                          <h2 className="font-display italic text-xl sm:text-2xl font-normal text-[#FAF6EE] leading-tight">
                            {category.title}
                          </h2>
                          <p className="text-sm sm:text-[15px] text-[#D5C8B0]/85 mt-1 leading-relaxed">
                            {category.description}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => toggleCategory(category.id)}
                        className="text-[#E1AF64]/80 hover:text-gold-light transition-colors p-1.5 flex-shrink-0 cursor-pointer"
                        aria-label={isExpanded ? `Collapse ${category.title}` : `Expand ${category.title}`}
                      >
                        <svg
                          className={`w-5 h-5 transition-transform duration-300 ${
                            isExpanded ? "rotate-90" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>

                    {/* Tour Destinations Sub-filter when expanded */}
                    {isTourDiaries && isExpanded && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {TOUR_DESTINATIONS.map((dest) => (
                          <button
                            key={dest}
                            onClick={() => setTourDestination(dest)}
                            className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                              tourDestination === dest
                                ? "bg-gold text-obsidian font-semibold"
                                : "border border-gold/30 text-[#E7DEC8]/80 hover:border-gold/60"
                            }`}
                          >
                            {dest === "All" ? "All Destinations" : dest}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* 4 Portrait Thumbnails */}
                    <div
                      className={`grid gap-2 sm:gap-2.5 mb-4 flex-1 ${
                        isExpanded
                          ? "grid-cols-2 sm:grid-cols-4 md:grid-cols-5"
                          : "grid-cols-4"
                      }`}
                    >
                      {displayImages.map((img, idx) => {
                        const lightboxSource =
                          isTourDiaries && isExpanded ? tourFilteredImages : category.images;
                        const targetIndex =
                          isTourDiaries && !isExpanded
                            ? [0, 7, 14, 18][idx] ?? 0
                            : idx;

                        return (
                          <button
                            key={`${img.src}-${idx}`}
                            onClick={() =>
                              openLightbox(lightboxSource, targetIndex, category.title)
                            }
                            className="relative aspect-[3/4] rounded-lg overflow-hidden border border-[#E1AF64]/50 hover:border-gold-light group cursor-pointer transition-all"
                          >
                            <Image
                              src={img.src}
                              alt={img.alt}
                              fill
                              className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                              sizes={isExpanded ? "(max-width: 768px) 50vw, 20vw" : "(max-width: 768px) 25vw, 13vw"}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-40 group-hover:opacity-80 transition-opacity" />

                            {(img.label || (isTourDiaries && isExpanded && img.subCategory)) && (
                              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/65 to-transparent text-center py-1 sm:py-1.5 px-1">
                                <span className="text-[11px] sm:text-xs font-medium text-[#F5DC9F] flex items-center justify-center gap-0.5 truncate">
                                  <svg className="w-2.5 h-2.5 text-[#E1AF64] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                                  </svg>
                                  {img.label ?? img.subCategory}
                                </span>
                              </div>
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Centered Gold Pill CTA Button */}
                    <div className="flex justify-center pt-1">
                      <button
                        onClick={() => toggleCategory(category.id)}
                        className="bg-gradient-to-r from-[#E8B86B] via-[#E1AF64] to-[#D49C49] text-[#160F06] font-semibold rounded-full text-xs sm:text-sm py-2.5 px-5 sm:px-6 inline-flex items-center gap-2 shadow-[0_4px_14px_rgba(225,175,100,0.25)] hover:brightness-105 transition-all whitespace-nowrap cursor-pointer"
                      >
                        {isExpanded ? "Show Less" : category.buttonText}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

        {/* Bottom Treble Clef & Sweeping Golden Wave Divider */}
        <div className="relative mt-8 sm:mt-12 pt-4 pb-2 flex items-center justify-center">
          <GoldenWaveRibbon className="absolute inset-0 w-full h-full opacity-65 pointer-events-none" />
          <TrebleClefMark className="w-7 h-9 sm:w-8 sm:h-11 relative z-10 opacity-90" />
        </div>
      </section>

      {/* Warm Champagne Ivory Section: Awards & Recognitions Gallery */}
      <section id="awards" className="cream-section py-12 sm:py-20 relative overflow-hidden border-t border-gold/30">
        <GoldenWaveRibbon variant="cream" className="absolute top-0 left-0 right-0 w-full h-20 sm:h-32 opacity-40 rotate-180 pointer-events-none" />
        <VintageMicWatermark className="absolute -bottom-6 right-0 w-36 h-32 sm:w-72 sm:h-64 pointer-events-none" opacityClass="opacity-20 sm:opacity-30" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-8 sm:mb-12">
              <p className="text-[#8E5D16] text-xs sm:text-sm tracking-[0.22em] sm:tracking-[0.28em] uppercase font-semibold mb-2">
                Honours &amp; Milestones
              </p>
              <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3">
                <div className="section-divider-cream w-10 sm:w-20" />
                <h2 className="font-display text-2xl sm:text-4xl font-bold text-espresso">
                  <span className="italic">Awards &amp;</span>{" "}
                  <span className="cream-gold-text">Recognitions</span>
                </h2>
                <div className="section-divider-cream rotate-180 w-10 sm:w-20" />
              </div>
              <p className="text-sm sm:text-base text-bronze-ink/85 max-w-xl mx-auto leading-relaxed">
                25+ trophies, medals, stage citations and collegiate honours earned across prestigious musical platforms.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-5">
            {displayedAwards.map((award, idx) => (
              <AnimatedSection key={award.src} delay={(idx % 8) * 40}>
                <button
                  onClick={() =>
                    openLightbox(AWARDS_GALLERY, idx, "Awards & Recognitions")
                  }
                  className="image-cream-frame aspect-[4/3] w-full relative group cursor-pointer bg-[#FFFBF2]"
                >
                  <Image
                    src={award.src}
                    alt={award.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                  />
                  <div className="hidden sm:flex absolute inset-0 bg-gradient-to-t from-espresso/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity items-end p-3">
                    <span className="text-xs font-medium text-[#FFF7E2] text-left line-clamp-2">
                      {award.alt}
                    </span>
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setAwardsExpanded(!awardsExpanded)}
              className="btn-outline-antique text-sm py-2.5 sm:py-3 px-6 inline-flex items-center gap-2 cursor-pointer"
            >
              {awardsExpanded
                ? "Show Featured Awards"
                : `View All ${AWARDS_GALLERY.length} Awards & Certificates`}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <Lightbox
        images={lightboxImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        title={lightboxTitle}
      />
    </>
  );
}
