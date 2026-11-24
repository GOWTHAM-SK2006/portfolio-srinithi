"use client";

import { useState } from "react";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import Lightbox from "@/components/Lightbox";
import { GoldIcon } from "@/components/BrandDecorations";
import {
  AWARDS_GALLERY,
  JOURNEY_HIGHLIGHT_IMAGES,
  PORTFOLIO_CATEGORIES,
  TELEVISION_SHOWCASE,
  type GalleryImage,
} from "@/data/portfolioData";

export function JourneySpotlightCard() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <div className="relative group">
        <button
          onClick={() => setLightboxOpen(true)}
          className="w-full rounded-2xl overflow-hidden border-2 border-[#C89445]/75 shadow-[0_14px_34px_rgba(95,62,18,0.18)] aspect-[16/10] relative block cursor-pointer text-left"
          aria-label="Open stage and television highlights gallery"
        >
          <Image
            src="/images/about/about.jpg"
            alt="Srinithi Anand singing live with microphone"
            fill
            className="object-cover object-[50%_20%] group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

          {/* Clean Circular Gold-Bordered Play Button (bottom-right) */}
          <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full border-2 border-[#E6B86A] bg-black/55 backdrop-blur-xs flex items-center justify-center group-hover:bg-[#E1AF64] group-hover:text-[#160F06] text-[#F5DC9F] transition-all shadow-lg">
            <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      </div>

      <Lightbox
        images={JOURNEY_HIGHLIGHT_IMAGES}
        initialIndex={0}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        title="Stage & Television Journey"
      />
    </>
  );
}

const tourImages =
  PORTFOLIO_CATEGORIES.find((c) => c.id === "tour-diaries")?.images ?? [];

const interestGalleries: {
  icon: "music" | "film" | "plane" | "book";
  title: string;
  subtitle: string;
  images: GalleryImage[];
}[] = [
  {
    icon: "music",
    title: "Music &",
    subtitle: "Performing",
    images: JOURNEY_HIGHLIGHT_IMAGES,
  },
  {
    icon: "film",
    title: "Acting &",
    subtitle: "Albums",
    images: TELEVISION_SHOWCASE,
  },
  {
    icon: "plane",
    title: "Travel &",
    subtitle: "Exploration",
    images: tourImages,
  },
  {
    icon: "book",
    title: "Learning &",
    subtitle: "Growth",
    images: AWARDS_GALLERY,
  },
];

export function AboutInterestsGrid() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImages, setActiveImages] = useState<GalleryImage[]>([]);
  const [activeTitle, setActiveTitle] = useState("");

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 max-w-3xl">
        {interestGalleries.map((item, idx) => (
          <AnimatedSection key={item.subtitle} delay={idx * 80}>
            <button
              onClick={() => {
                setActiveImages(item.images);
                setActiveTitle(`${item.title} ${item.subtitle}`);
                setLightboxOpen(true);
              }}
              className="w-full rounded-xl bg-[#FAF0DF]/90 border border-[#D4AC72]/65 px-4 py-6 text-center shadow-[0_8px_22px_rgba(140,98,38,0.1)] hover:border-[#B67E2B] hover:shadow-[0_12px_28px_rgba(140,98,38,0.2)] hover:-translate-y-1 transition-all group cursor-pointer"
            >
              <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center text-[#BC955E] group-hover:scale-110 transition-transform">
                <GoldIcon name={item.icon} className="w-8 h-8 stroke-[1.6]" />
              </div>
              <span className="block text-sm font-medium text-[#2A1D10] leading-tight">
                {item.title}
              </span>
              <span className="block text-sm font-medium text-[#2A1D10] leading-tight">
                {item.subtitle}
              </span>
            </button>
          </AnimatedSection>
        ))}
      </div>

      <Lightbox
        images={activeImages}
        initialIndex={0}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        title={activeTitle}
      />
    </>
  );
}
