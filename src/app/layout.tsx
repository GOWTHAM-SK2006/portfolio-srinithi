import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getSiteUrl } from "@/lib/siteConfig";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Srinithi Anand | Singer | Performer | Artist",
    template: "%s | Srinithi Anand",
  },
  description:
    "Official portfolio of Srinithi Anand — Award-winning vocalist celebrated for soulful performances across Carnatic, devotional, film, television, and fusion music.",
  keywords: [
    "Srinithi Anand",
    "Singer",
    "Performer",
    "Carnatic Music",
    "Vocalist",
    "Chennai Singer",
    "Indian Music",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Srinithi Anand — Official Artist",
    title: "Srinithi Anand | Singer | Performer | Artist",
    description:
      "A versatile vocalist known for soulful performances across Carnatic, devotional, film and fusion music.",
    images: [
      {
        url: "/images/about/about.jpg",
        width: 1200,
        height: 900,
        alt: "Srinithi Anand — Official Artist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Srinithi Anand | Singer | Performer | Artist",
    description:
      "Award-winning vocalist known for soulful performances across Carnatic, devotional, film and fusion music.",
    images: ["/images/about/about.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased bg-obsidian text-[#F7F1E3]">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
