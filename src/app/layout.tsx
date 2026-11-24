import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

export const metadata: Metadata = {
  title: "Srinithi Anand | Singer | Performer | Artist",
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
