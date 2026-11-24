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

  const [activeFilter, setActiveFilter] = useState<string>("all");
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

  const visibleCategories =
    activeFilter === "all"
      ? PORTFOLIO_CATEGORIES
      : PORTFOLIO_CATEGORIES.filter((c) => c.id === activeFilter);

  const displayedAwards = awardsExpanded
    ? AWARDS_GALLERY
    : AWARDS_GALLERY.slice(0, 8);

  return (
    <>
      {/* Obsidian Portfolio Grid Section */}
      <section className="py-14 bg-obsidian relative overflow-hidden">
        <div className="golden-wave" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Quick Category Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeFilter === "all"
                  ? "bg-gradient-to-r from-gold-light via-gold to-gold-dark text-obsidian shadow-[0_4px_16px_rgba(212,162,76,0.35)]"
                  : "border border-gold/30 bg-obsidian-card/70 text-[#E7DEC8]/80 hover:border-gold/65 hover:text-gold-light"
              }`}
            >
              All Galleries
            </button>

            {PORTFOLIO_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveFilter(cat.id);
                  setExpandedCategory(cat.id);
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  activeFilter === cat.id
                    ? "bg-gradient-to-r from-gold-light via-gold to-gold-dark text-obsidian shadow-[0_4px_16px_rgba(212,162,76,0.35)]"
                    : "border border-gold/30 bg-obsidian-card/70 text-[#E7DEC8]/80 hover:border-gold/65 hover:text-gold-light"
                }`}
              >
                {cat.title}
              </button>
            ))}

            <a
              href="#awards"
              className="px-4 py-2 rounded-full text-xs font-semibold tracking-wide border border-gold/45 bg-gold/10 text-gold-light hover:bg-gold/20 transition-all"
            >
              Awards &amp; Certificates
            </a>
          </div>

          {/* 6 Gallery Cards */}
          <div
            className={`grid gap-8 ${
              activeFilter === "all" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
            }`}
          >
            {visibleCategories.map((category, catIdx) => {
              const isExpanded =
                expandedCategory === category.id || activeFilter === category.id;
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
                <AnimatedSection key={category.id} delay={catIdx * 70}>
                  <div className="gold-border-card rounded-2xl p-6 sm:p-7 h-full flex flex-col">
                    {/* Card Header */}
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="flex items-start gap-3.5">
                        <div className="w-11 h-11 rounded-xl border border-gold/40 bg-gold/10 flex items-center justify-center text-gold-light flex-shrink-0">
                          <GoldIcon name={category.icon} className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2.5 flex-wrap">
                            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#FFF7E2]">
                              {category.title}
                            </h2>
                            <span className="px-2.5 py-0.5 rounded-full bg-gold/15 border border-gold/30 text-[10px] font-semibold text-gold-light tracking-wider">
                              {category.images.length} Photos
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-[#D5C8B0]/65 mt-1 leading-relaxed">
                            {category.description}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => toggleCategory(category.id)}
                        className="text-gold-light/70 hover:text-gold-light transition-colors p-1.5 rounded-lg hover:bg-gold/10"
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
                            className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                              tourDestination === dest
                                ? "bg-gold text-obsidian font-semibold"
                                : "border border-gold/30 text-[#E7DEC8]/75 hover:border-gold/60"
                            }`}
                          >
                            {dest === "All" ? "All Destinations" : dest}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Image Thumbnails Grid */}
                    <div
                      className={`grid gap-2.5 mb-5 flex-1 ${
                        isExpanded
                          ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
                          : "grid-cols-4"
                      }`}
                    >
                      {displayImages.map((img, idx) => {
                        const lightboxSource = isTourDiaries && isExpanded ? tourFilteredImages : category.images;
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
                            className="relative aspect-[3/4] rounded-xl overflow-hidden border border-gold/25 hover:border-gold-light group cursor-pointer transition-all"
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
                              <div className="absolute bottom-0 left-0 right-0 bg-obsidian/80 backdrop-blur-xs text-center py-1.5 px-1 border-t border-gold/25">
                                <span className="text-[10px] sm:text-[11px] font-medium text-gold-light flex items-center justify-center gap-1">
                                  <svg className="w-3 h-3 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
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

                    {/* Card Footer Action */}
                    <div className="flex items-center justify-between gap-3 pt-1">
                      <button
                        onClick={() => toggleCategory(category.id)}
                        className="btn-gold text-xs py-2.5 px-5 inline-flex items-center gap-2"
                      >
                        {isExpanded ? "Show Less" : category.buttonText}
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>

                      <button
                        onClick={() => openLightbox(category.images, 0, category.title)}
                        className="text-xs text-gold-light/80 hover:text-gold-light underline underline-offset-4 transition-colors"
                      >
                        Open Lightbox
                      </button>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Warm Champagne Ivory Section: Awards & Recognitions Gallery */}
      <section id="awards" className="cream-section py-20 relative overflow-hidden border-t border-gold/30">
        <GoldenWaveRibbon variant="cream" className="absolute top-0 left-0 right-0 w-full h-32 opacity-40 rotate-180" />
        <VintageMicWatermark className="absolute -bottom-6 right-0 w-72 h-64 hidden md:block" opacityClass="opacity-30" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-[#8E5D16] text-xs tracking-[0.28em] uppercase font-semibold mb-2">
                Honours &amp; Milestones
              </p>
              <div className="flex items-center justify-center gap-4 mb-3">
                <div className="section-divider-cream" />
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-espresso">
                  <span className="italic">Awards &amp;</span>{" "}
                  <span className="cream-gold-text">Recognitions</span>
                </h2>
                <div className="section-divider-cream rotate-180" />
              </div>
              <p className="text-sm text-bronze-ink/80 max-w-xl mx-auto">
                25+ trophies, medals, stage citations and collegiate honours earned across prestigious musical platforms.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5">
            {displayedAwards.map((award, idx) => (
              <AnimatedSection key={award.src} delay={(idx % 8) * 50}>
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
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <span className="text-[11px] font-medium text-[#FFF7E2] text-left line-clamp-2">
                      {award.alt}
                    </span>
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setAwardsExpanded(!awardsExpanded)}
              className="btn-outline-antique text-xs sm:text-sm inline-flex items-center gap-2"
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

      {/* Treble Clef Closing Ornament */}
      <div className="bg-obsidian flex items-center justify-center py-10 border-t border-gold/20">
        <TrebleClefMark className="w-8 h-11 opacity-75" />
      </div>

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
