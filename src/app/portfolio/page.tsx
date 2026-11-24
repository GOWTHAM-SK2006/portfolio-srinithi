import type { Metadata } from "next";
import PortfolioSections from "@/components/sections/PortfolioSections";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore Srinithi Anand's photo galleries: With Celebrities, Live Performances, Stage Performances, Special Events, Musical Moments, Tour Diaries, and Awards.",
};

export default function PortfolioPage() {
  return <PortfolioSections />;
}
