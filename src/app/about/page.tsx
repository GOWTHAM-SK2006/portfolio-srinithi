import type { Metadata } from "next";
import AboutSections from "@/components/sections/AboutSections";

export const metadata: Metadata = {
  title: "About",
  description:
    "Discover the musical journey of Srinithi Anand — Carnatic training, 150+ stage performances, 25+ awards, television appearances, and albums.",
};

export default function AboutPage() {
  return <AboutSections />;
}
