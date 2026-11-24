import React from "react";

/**
 * Metallic gold Treble Clef emblem replacing the off-color logo.svg viewBox issue.
 */
export function TrebleClefMark({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 96"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="clefGoldGrad" x1="12" y1="4" x2="54" y2="92" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF3C6" />
          <stop offset="35%" stopColor="#E6BC6B" />
          <stop offset="70%" stopColor="#C99133" />
          <stop offset="100%" stopColor="#9A6616" />
        </linearGradient>
      </defs>
      <path
        d="M35.5 89c-5.8 0-10.5-3.9-10.5-9.2 0-4.4 3.4-7.7 7.6-7.7 3.4 0 5.9 2.3 5.9 5.3 0 2.4-1.8 4.2-4.2 4.2-1.6 0-2.8-.8-3.4-2 1.2 3.1 4.2 5.3 7.9 5.3 5.3 0 8.9-4.5 7.7-11.2L37.8 31C30 33.4 22.8 39.2 21.6 47.4c-1.4 9.5 6.4 17.5 16.4 17.5 7.4 0 13.7-5.1 14.3-12 .7-7.7-4.8-13.9-12.5-14.4-5.7-.4-10.8 2.8-12.4 7.8-.9 2.9-.4 6.5 1.9 9.1.6.7-.1 1.7-.9 1.3-4.6-2.4-7.2-7.8-6.2-13.7 1.3-7.6 8.3-12.8 16.4-12.3 10.6.7 18.6 9.5 17.8 20.4-.9 10.9-9.8 19-20.7 19-13.6 0-23.4-10.6-21.6-23.8 1.5-11 11.4-18.8 22.7-22.4L34.7 13.8C32.2 18.6 30.8 23.6 31.6 29l-3.7 1.1c-1.3-6.6.7-14.7 5.8-21.5 2.2-2.9 4.5-4.7 6.3-4.7 2.5 0 4.5 3.4 4.5 7.9 0 6.1-3.3 11.9-8.8 16.1l3.1 15.8 3.2 16.2 7.5 23.5c1.5 7.9-3.6 15.6-14 15.6z"
        fill="url(#clefGoldGrad)"
      />
    </svg>
  );
}

/**
 * Flowing golden silk wave ribbons for dark obsidian and warm cream sections.
 */
export function GoldenWaveRibbon({
  className = "",
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "cream";
}) {
  const strokeMain = variant === "cream" ? "#B88028" : "#E1AF64";
  const strokeAccent = variant === "cream" ? "#D4A24C" : "#FFFDC9";
  const strokeDeep = variant === "cream" ? "#9E6816" : "#6C3809";
  const baseOpacity = variant === "cream" ? 0.35 : 0.7;

  return (
    <svg
      viewBox="0 0 1440 260"
      fill="none"
      preserveAspectRatio="none"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`waveGrad-${variant}`} x1="0" y1="130" x2="1440" y2="130" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={strokeDeep} stopOpacity="0.3" />
          <stop offset="18%" stopColor={strokeAccent} stopOpacity="0.95" />
          <stop offset="46%" stopColor={strokeMain} stopOpacity={baseOpacity} />
          <stop offset="76%" stopColor={strokeAccent} stopOpacity="0.85" />
          <stop offset="100%" stopColor={strokeDeep} stopOpacity="0.35" />
        </linearGradient>
        <linearGradient id={`waveSilkFill-${variant}`} x1="0" y1="90" x2="1440" y2="210" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={strokeDeep} stopOpacity="0.06" />
          <stop offset="22%" stopColor={strokeMain} stopOpacity={variant === "cream" ? "0.1" : "0.26"} />
          <stop offset="52%" stopColor={strokeDeep} stopOpacity={variant === "cream" ? "0.05" : "0.14"} />
          <stop offset="85%" stopColor={strokeMain} stopOpacity={variant === "cream" ? "0.1" : "0.24"} />
          <stop offset="100%" stopColor={strokeDeep} stopOpacity="0.06" />
        </linearGradient>
      </defs>

      {/* Luminous Silk Ribbon Band */}
      <path
        d="M-40 132 C 230 228, 480 236, 760 156 C 1030 82, 1260 148, 1480 86 L 1480 198 C 1240 230, 990 154, 730 202 C 450 256, 200 226, -40 182 Z"
        fill={`url(#waveSilkFill-${variant})`}
      />

      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <path
          key={i}
          d={`M-40 ${136 + i * 7} C 240 ${228 - i * 4}, 490 ${236 - i * 8}, 770 ${154 + i * 6} C 1040 ${78 + i * 8}, 1260 ${154 - i * 5}, 1480 ${88 + i * 7}`}
          stroke={`url(#waveGrad-${variant})`}
          strokeWidth={i === 0 || i === 3 ? 1.8 : 0.85}
          strokeOpacity={1 - i * 0.1}
        />
      ))}
    </svg>
  );
}

/**
 * Glowing 3/4 golden crescent arc behind Srinithi's hero portrait matching the reference halo.
 */
export function GoldenCrescentArc({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 500 500" fill="none" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="haloAmbience" cx="46%" cy="44%" r="50%">
          <stop offset="0%" stopColor="#E6B366" stopOpacity="0.28" />
          <stop offset="50%" stopColor="#6C3809" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#090502" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="crescentStroke" x1="85" y1="220" x2="355" y2="95" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6C3809" stopOpacity="0" />
          <stop offset="18%" stopColor="#E1AF64" stopOpacity="0.7" />
          <stop offset="48%" stopColor="#FFFFE5" stopOpacity="1" />
          <stop offset="78%" stopColor="#E6B366" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#6C3809" stopOpacity="0" />
        </linearGradient>
        <filter id="haloGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <circle cx="255" cy="245" r="220" fill="url(#haloAmbience)" />

      {/* Outer Soft Glow Halo */}
      <path
        d="M 108 380 A 196 196 0 1 1 365 78"
        stroke="url(#crescentStroke)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeOpacity="0.45"
        filter="url(#haloGlowFilter)"
      />
      {/* Sharp Luminous Core Arc */}
      <path
        d="M 108 380 A 196 196 0 1 1 365 78"
        stroke="url(#crescentStroke)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Diagonal golden spotlight rays and drifting dust particles for obsidian sections.
 */
export function SpotlightBackdrop({
  align = "right",
}: {
  align?: "left" | "right" | "center";
}) {
  const posClass =
    align === "left"
      ? "left-[-10%] rotate-[22deg]"
      : align === "center"
        ? "left-1/2 -translate-x-1/2 rotate-[12deg]"
        : "right-[-5%] -rotate-[24deg]";

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Main Diagonal Spotlight Cone */}
      <div
        className={`absolute -top-32 w-[520px] sm:w-[680px] h-[140%] opacity-60 blur-2xl ${posClass}`}
        style={{
          background:
            "linear-gradient(180deg, rgba(246, 227, 173, 0.22) 0%, rgba(212, 162, 76, 0.12) 45%, rgba(158, 107, 30, 0.02) 78%, transparent 100%)",
        }}
      />
      {/* Secondary Warm Ambient Glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            align === "left"
              ? "radial-gradient(circle at 26% 45%, rgba(212, 162, 76, 0.14) 0%, transparent 55%)"
              : "radial-gradient(circle at 74% 45%, rgba(212, 162, 76, 0.14) 0%, transparent 55%)",
        }}
      />
      {/* Subtle Golden Dust Bokeh Motes */}
      <span className="absolute top-[18%] left-[12%] w-1.5 h-1.5 rounded-full bg-gold-light/50 blur-[0.5px] animate-float" />
      <span className="absolute top-[34%] right-[18%] w-2 h-2 rounded-full bg-gold/40 blur-[1px] animate-float" />
      <span className="absolute top-[62%] left-[44%] w-1 h-1 rounded-full bg-gold-light/60" />
      <span className="absolute bottom-[24%] right-[28%] w-1.5 h-1.5 rounded-full bg-gold-mid/45" />
      <span className="absolute top-[25%] left-[56%] w-1 h-1 rounded-full bg-gold-light/40" />
    </div>
  );
}

/**
 * Vintage gold condenser microphone & curved musical staff watermark
 * matching the Warm Champagne Ivory reference aesthetic.
 */
export function VintageMicWatermark({
  className = "",
  opacityClass = "opacity-45",
}: {
  className?: string;
  opacityClass?: string;
}) {
  return (
    <svg
      viewBox="0 0 360 320"
      fill="none"
      className={`pointer-events-none select-none ${opacityClass} ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="vintageMicGold" x1="120" y1="20" x2="260" y2="300" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E6BC6B" />
          <stop offset="50%" stopColor="#C48A30" />
          <stop offset="100%" stopColor="#8F5C14" />
        </linearGradient>
      </defs>

      {/* Curved Musical Staff Lines */}
      {[0, 1, 2, 3, 4].map((line) => (
        <path
          key={line}
          d={`M 10 ${145 + line * 11} Q 175 ${95 + line * 11} 350 ${160 + line * 11}`}
          stroke="url(#vintageMicGold)"
          strokeWidth="1.2"
          strokeOpacity="0.55"
        />
      ))}

      {/* Musical Eighth & Beamed Notes */}
      <g fill="url(#vintageMicGold)" fillOpacity="0.72">
        <ellipse cx="64" cy="142" rx="7" ry="5" transform="rotate(-18 64 142)" />
        <rect x="69" y="108" width="2.5" height="33" />
        <ellipse cx="90" cy="134" rx="7" ry="5" transform="rotate(-18 90 134)" />
        <rect x="95" y="100" width="2.5" height="33" />
        <polygon points="69,108 97.5,100 97.5,106 69,114" />

        <ellipse cx="115" cy="68" rx="6.5" ry="4.5" transform="rotate(-15 115 68)" />
        <rect x="119.5" y="38" width="2.5" height="29" />
        <ellipse cx="137" cy="61" rx="6.5" ry="4.5" transform="rotate(-15 137 61)" />
        <rect x="141.5" y="31" width="2.5" height="29" />
        <polygon points="119.5,38 144,31 144,36.5 119.5,43.5" />

        <ellipse cx="298" cy="144" rx="7" ry="5" transform="rotate(-16 298 144)" />
        <rect x="303" y="110" width="2.5" height="33" />
        <path d="M303 110 c 10 4 13 12 7 19 c 3-7 0-12-7-14z" />
      </g>

      {/* Vintage Ribbed Microphone Tilted */}
      <g transform="translate(205 155) rotate(14) translate(-205 -155)">
        {/* Capsule Dome */}
        <rect
          x="168"
          y="36"
          width="74"
          height="108"
          rx="37"
          fill="#FCF6E8"
          fillOpacity="0.65"
          stroke="url(#vintageMicGold)"
          strokeWidth="3.2"
        />
        {/* Horizontal Grille Ribs */}
        {[56, 68, 80, 92, 104, 116].map((yPos) => (
          <line
            key={yPos}
            x1="172"
            y1={yPos}
            x2="238"
            y2={yPos}
            stroke="url(#vintageMicGold)"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        ))}
        {/* Center Vertical Band */}
        <rect
          x="198"
          y="40"
          width="14"
          height="98"
          rx="6"
          fill="#F5E4C2"
          stroke="url(#vintageMicGold)"
          strokeWidth="2.2"
        />
        <circle cx="205" cy="76" r="4.5" stroke="url(#vintageMicGold)" strokeWidth="2" fill="#FCF6E8" />

        {/* Yoke & Pivot Joint */}
        <path
          d="M158 102 v28 c0 22 20 38 47 38 s47-16 47-38 v-28"
          stroke="url(#vintageMicGold)"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="158" cy="102" r="4.5" fill="url(#vintageMicGold)" />
        <circle cx="252" cy="102" r="4.5" fill="url(#vintageMicGold)" />

        {/* Collar & Stand */}
        <rect
          x="192"
          y="168"
          width="26"
          height="46"
          rx="4"
          fill="#F7E8C9"
          stroke="url(#vintageMicGold)"
          strokeWidth="2.6"
        />
        <rect
          x="199"
          y="214"
          width="12"
          height="92"
          fill="#F7E8C9"
          stroke="url(#vintageMicGold)"
          strokeWidth="2.4"
        />
      </g>
    </svg>
  );
}

/**
 * Crisp gold SVG icons replacing raw OS emojis across pages.
 */
export function GoldIcon({
  name,
  className = "w-6 h-6",
}: {
  name:
  | "mic"
  | "trophy"
  | "tv"
  | "disc"
  | "users"
  | "medal"
  | "calendar"
  | "music"
  | "plane"
  | "film"
  | "book";
  className?: string;
}) {
  switch (name) {
    case "mic":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className={className}>
          <rect x="9" y="2" width="6" height="11" rx="3" />
          <path strokeLinecap="round" d="M5 10a7 7 0 0 0 14 0M12 17v4m-4 0h8" />
        </svg>
      );
    case "trophy":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className={className}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8m-4-4v4m-5-9a5 5 0 0 0 10 0V4H7v8zm-3-7h3v4a3 3 0 0 1-3-3V5zm13 0h3v1a3 3 0 0 1-3 3V5z" />
        </svg>
      );
    case "tv":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className={className}>
          <rect x="3" y="7" width="18" height="13" rx="2.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="m8 3 4 4 4-4" />
        </svg>
      );
    case "disc":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className={className}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="2.5" />
          <path strokeLinecap="round" d="M12 7a5 5 0 0 1 5 5" />
        </svg>
      );
    case "users":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className={className}>
          <circle cx="9" cy="8" r="3.5" />
          <path strokeLinecap="round" d="M2.5 19.5c0-3 3-5 6.5-5s6.5 2 6.5 5" />
          <circle cx="17" cy="9" r="2.5" />
          <path strokeLinecap="round" d="M17 14.5c2.5 0 4.5 1.5 4.5 4" />
        </svg>
      );
    case "medal":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className={className}>
          <circle cx="12" cy="14" r="6" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 8.5 6 3h12l-2.5 5.5M12 11.5l.8 1.6 1.7.2-1.2 1.2.3 1.7-1.6-.8-1.6.8.3-1.7-1.2-1.2 1.7-.2.8-1.6z" />
        </svg>
      );
    case "calendar":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className={className}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path strokeLinecap="round" d="M16 3v4M8 3v4M3 10h18" />
          <path strokeLinecap="round" strokeLinejoin="round" d="m12 12.5.7 1.4 1.5.2-1.1 1 .3 1.5-1.4-.7-1.4.7.3-1.5-1.1-1 1.5-.2.7-1.4z" />
        </svg>
      );
    case "music":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className={className}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 18V5l11-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="17" cy="16" r="3" />
        </svg>
      );
    case "plane":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className={className}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
        </svg>
      );
    case "film":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className={className}>
          <rect x="2.5" y="6" width="14" height="12" rx="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="m16.5 10 5-3v10l-5-3v-4z" />
        </svg>
      );
    case "book":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className={className}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 5.5A2.5 2.5 0 0 1 4.5 3H12v16H4.5A2.5 2.5 0 0 0 2 21.5V5.5zm20 0A2.5 2.5 0 0 0 19.5 3H12v16h7.5A2.5 2.5 0 0 1 22 21.5V5.5z" />
        </svg>
      );
  }
}

/**
 * Vector SVG social icons shared across Home, Contact, and Footer.
 */
export function SocialIcon({ name, className = "w-4 h-4" }: { name: string; className?: string }) {
  switch (name) {
    case "Instagram":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.3 1 .4 2.2.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .3-2.2.4-1.3.1-1.6.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4a3.9 3.9 0 0 1-1.4-.9 3.9 3.9 0 0 1-.9-1.4c-.2-.4-.3-1-.4-2.2-.1-1.3-.1-1.6-.1-4.9s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.3 2.2-.4 1.3 0 1.6-.1 4.9-.1zm0-2.2C8.7 0 8.3 0 7 .1 5.7.1 4.8.3 4 .6c-.9.3-1.6.7-2.3 1.4A6.5 6.5 0 0 0 .3 4.3C.1 5 0 5.9 0 7.2 0 8.5 0 8.9 0 12.2s0 3.7.1 5c.1 1.3.2 2.2.5 2.9.3.9.7 1.6 1.4 2.3.7.7 1.4 1.1 2.3 1.4.7.3 1.6.4 2.9.5 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3-.1 2.2-.2 2.9-.5.9-.3 1.6-.7 2.3-1.4.7-.7 1.1-1.4 1.4-2.3.3-.7.4-1.6.5-2.9.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.2-2.2-.5-2.9-.3-.9-.7-1.6-1.4-2.3A6.5 6.5 0 0 0 20 .6C19.3.3 18.4.2 17.1.1 15.8 0 15.4 0 12.1 0h-.1zM12 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-10.5a1.4 1.4 0 1 0 0-2.9 1.4 1.4 0 0 0 0 2.9z" />
        </svg>
      );
    case "Facebook":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.12 5.32H17V2.14A26.11 26.11 0 0 0 14.26 2c-2.72 0-4.58 1.66-4.58 4.7v2.62H6.61v3.56h3.07V22h3.68v-9.12h3.06l.46-3.56h-3.52V7.05c0-1.05.29-1.73 1.76-1.73Z" />
        </svg>
      );
    case "YouTube":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1 31.4 31.4 0 0 0 .5-5.8 31.4 31.4 0 0 0-.5-5.8zM9.5 15.5v-7l6.3 3.5-6.3 3.5z" />
        </svg>
      );
    case "WhatsApp":
    default:
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.82 14.08c-.24.68-1.42 1.3-1.97 1.38-.52.08-1.18.11-1.9-.12-.44-.14-1-.33-1.72-.64-3.03-1.31-5.01-4.37-5.16-4.57-.15-.2-1.23-1.64-1.23-3.13 0-1.49.78-2.22 1.06-2.52.27-.3.6-.38.8-.38.2 0 .4 0 .58.01.19.01.44-.07.69.53.25.61.87 2.1.94 2.25.08.15.13.33.03.53-.1.2-.15.33-.3.5-.15.18-.32.4-.45.53-.15.15-.31.31-.13.62.18.3.79 1.31 1.7 2.12 1.17 1.04 2.15 1.36 2.46 1.51.3.15.48.13.66-.08.18-.2.76-.88.96-1.18.2-.3.41-.25.69-.15.28.1 1.78.84 2.09.99.3.15.51.23.58.36.08.13.08.74-.16 1.42z" />
        </svg>
      );
  }
}

/**
 * Glowing 3D-style Metallic Gold Trophy & Laurel Wreath SVG for the Home Awards CTA card.
 */
export function GoldenTrophyGraphic({ className = "w-36 h-36" }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 180" fill="none" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="trophyBgGlow" cx="50%" cy="48%" r="50%">
          <stop offset="0%" stopColor="#FFE89E" stopOpacity="0.48" />
          <stop offset="55%" stopColor="#D4A24C" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#060504" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="trophyCupGrad" x1="50" y1="26" x2="132" y2="128" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF5CC" />
          <stop offset="28%" stopColor="#F0C66B" />
          <stop offset="65%" stopColor="#C48728" />
          <stop offset="100%" stopColor="#7C4E0E" />
        </linearGradient>
        <linearGradient id="trophyHighlight" x1="72" y1="30" x2="86" y2="95" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#FFE394" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="laurelGrad" x1="25" y1="70" x2="155" y2="145" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E6BC6B" />
          <stop offset="100%" stopColor="#9A6616" />
        </linearGradient>
      </defs>

      <circle cx="90" cy="88" r="76" fill="url(#trophyBgGlow)" />

      {/* Laurel Wreath Leaves */}
      <g fill="url(#laurelGrad)" fillOpacity="0.72">
        <path d="M46 132c-12-8-18-20-16-32 6 6 12 16 16 32zm-12-26c-9-9-11-21-6-32 4 8 7 18 6 32zm0-24c-6-10-4-22 3-31 2 9 1 19-3 31z" />
        <path d="M134 132c12-8 18-20 16-32-6 6-12 16-16 32zm12-26c9-9 11-21 6-32-4 8-7 18-6 32zm0-24c6-10 4-22-3-31-2 9-1 19 3 31z" />
      </g>

      {/* Left & Right Handles */}
      <path
        d="M55 44H39c-5 0-8 4-7 10 2 14 11 26 26 30"
        stroke="url(#trophyCupGrad)"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M125 44h16c5 0 8 4 7 10-2 14-11 26-26 30"
        stroke="url(#trophyCupGrad)"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Main Cup Body */}
      <path
        d="M52 34h76l-5 44c-3 20-17 34-33 34s-30-14-33-34l-5-44z"
        fill="url(#trophyCupGrad)"
      />
      <path d="M64 38h16l-3 42c-1 13 3 23 8 28-11-3-18-13-20-28l-1-42z" fill="url(#trophyHighlight)" />
      <rect x="48" y="30" width="84" height="7" rx="3.5" fill="#FCE59B" />

      {/* Stem & Knop */}
      <rect x="83" y="110" width="14" height="22" rx="3" fill="url(#trophyCupGrad)" />
      <ellipse cx="90" cy="121" rx="12" ry="4.5" fill="#F0C66B" />

      {/* Pedestal Base */}
      <path d="M66 132h48l6 10H60l6-10z" fill="url(#trophyCupGrad)" />
      <rect x="56" y="142" width="68" height="14" rx="2.5" fill="#17110A" stroke="#C88E2E" strokeWidth="1.5" />
      <rect x="72" y="146" width="36" height="5" rx="1" fill="#D4A24C" fillOpacity="0.8" />
    </svg>
  );
}

/**
 * Sleek Dark-Gold Cinema Lens SVG for the Home Explore Portfolio CTA card.
 */
export function CameraLensGraphic({ className = "w-36 h-36" }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 180" fill="none" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="lensAura" cx="55%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E6BC6B" stopOpacity="0.34" />
          <stop offset="65%" stopColor="#9E6B1E" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#060504" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="lensBezelGrad" x1="30" y1="30" x2="150" y2="150" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E6BC6B" stopOpacity="0.7" />
          <stop offset="38%" stopColor="#3B2D18" />
          <stop offset="75%" stopColor="#140F09" />
          <stop offset="100%" stopColor="#D4A24C" stopOpacity="0.5" />
        </linearGradient>
        <radialGradient id="lensGlassGrad" cx="42%" cy="38%" r="55%">
          <stop offset="0%" stopColor="#46351E" stopOpacity="0.8" />
          <stop offset="45%" stopColor="#120E08" />
          <stop offset="100%" stopColor="#040302" />
        </radialGradient>
      </defs>

      <circle cx="90" cy="90" r="82" fill="url(#lensAura)" />
      <circle cx="90" cy="90" r="64" fill="#0B0805" stroke="url(#lensBezelGrad)" strokeWidth="4" />
      <circle cx="90" cy="90" r="55" fill="#070503" stroke="#D4A24C" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="3 4" />
      <circle cx="90" cy="90" r="46" fill="#0F0B07" stroke="#E6BC6B" strokeOpacity="0.45" strokeWidth="1.5" />
      <circle cx="90" cy="90" r="34" fill="url(#lensGlassGrad)" stroke="#D4A24C" strokeOpacity="0.5" strokeWidth="1.2" />
      <circle cx="90" cy="90" r="20" fill="#080604" stroke="#E6BC6B" strokeOpacity="0.3" strokeWidth="1" />
      <ellipse cx="77" cy="74" rx="9" ry="5" transform="rotate(-32 77 74)" fill="#F6E3AD" fillOpacity="0.38" />
      <circle cx="104" cy="104" r="3" fill="#D4A24C" fillOpacity="0.45" />
      <circle cx="144" cy="52" r="1.5" fill="#F6E3AD" fillOpacity="0.7" />
      <circle cx="152" cy="86" r="1" fill="#D4A24C" fillOpacity="0.8" />
      <circle cx="136" cy="128" r="1.5" fill="#F6E3AD" fillOpacity="0.6" />
    </svg>
  );
}

/**
 * Dark metallic antique-gold vintage condenser microphone on slender stand
 * for the Contact page hero right edge.
 */
export function DarkGoldMicGraphic({
  className = "w-44 h-64",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 180 280"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <radialGradient id="darkMicAura" cx="52%" cy="38%" r="48%">
          <stop offset="0%" stopColor="#D4A24C" stopOpacity="0.34" />
          <stop offset="55%" stopColor="#6C3809" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#090502" stopOpacity="0" />
        </radialGradient>
        <linearGradient
          id="darkMicShellGrad"
          x1="44"
          y1="26"
          x2="136"
          y2="146"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#F6E3AD" />
          <stop offset="22%" stopColor="#C89342" />
          <stop offset="55%" stopColor="#5C3B16" />
          <stop offset="85%" stopColor="#1D140B" />
          <stop offset="100%" stopColor="#8F6224" />
        </linearGradient>
        <linearGradient
          id="darkMicRibGrad"
          x1="56"
          y1="40"
          x2="124"
          y2="140"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#DDA95E" stopOpacity="0.85" />
          <stop offset="50%" stopColor="#422B11" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#120C06" />
        </linearGradient>
        <linearGradient
          id="darkMicStandGrad"
          x1="84"
          y1="148"
          x2="96"
          y2="275"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#E1AF64" />
          <stop offset="35%" stopColor="#7C5220" />
          <stop offset="75%" stopColor="#2A1C0D" />
          <stop offset="100%" stopColor="#090502" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Warm atmospheric rim glow */}
      <circle cx="94" cy="102" r="78" fill="url(#darkMicAura)" />

      {/* Subtle gold bokeh particles */}
      <circle cx="34" cy="76" r="1.4" fill="#F6E3AD" fillOpacity="0.7" />
      <circle cx="26" cy="128" r="1.1" fill="#D4A24C" fillOpacity="0.55" />
      <circle cx="48" cy="186" r="1.6" fill="#E6B366" fillOpacity="0.6" />
      <circle cx="148" cy="52" r="1.3" fill="#F6E3AD" fillOpacity="0.65" />

      {/* Tilted vintage condenser mic */}
      <g transform="rotate(9 92 145)">
        {/* Capsule silhouette */}
        <rect
          x="56"
          y="26"
          width="68"
          height="112"
          rx="34"
          fill="url(#darkMicRibGrad)"
          stroke="url(#darkMicShellGrad)"
          strokeWidth="3.2"
        />

        {/* Inner acoustic mesh dark core */}
        <rect x="63" y="34" width="54" height="96" rx="27" fill="#120C06" />

        {/* Horizontal ribbed metallic louvers */}
        <path
          d="M62 48h56 M60 56h60 M59 64h62 M58 72h64 M58 80h64 M58 88h64 M58 96h64 M59 104h62 M60 112h60 M63 120h54"
          stroke="url(#darkMicShellGrad)"
          strokeWidth="3.1"
          strokeLinecap="round"
        />

        {/* Center vertical spine highlight */}
        <rect
          x="87.5"
          y="29"
          width="5"
          height="106"
          rx="2.5"
          fill="url(#darkMicShellGrad)"
          fillOpacity="0.92"
        />

        {/* Top & bottom cap bands */}
        <path
          d="M66 130h48"
          stroke="#F6E3AD"
          strokeOpacity="0.55"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* U-shaped yoke mount */}
        <path
          d="M46 86v26c0 24 20 42 44 42s44-18 44-42V86"
          stroke="url(#darkMicShellGrad)"
          strokeWidth="5"
          strokeLinecap="round"
        />
        {/* Side pivot bolts */}
        <circle
          cx="46"
          cy="94"
          r="5"
          fill="#22170C"
          stroke="#E1AF64"
          strokeWidth="1.8"
        />
        <circle
          cx="134"
          cy="94"
          r="5"
          fill="#22170C"
          stroke="#E1AF64"
          strokeWidth="1.8"
        />

        {/* Neck collar & swivel nut */}
        <rect
          x="79"
          y="153"
          width="22"
          height="13"
          rx="3"
          fill="#261A0D"
          stroke="url(#darkMicShellGrad)"
          strokeWidth="2.2"
        />
        <rect
          x="83"
          y="166"
          width="14"
          height="11"
          rx="2"
          fill="#3B2814"
          stroke="#C89342"
          strokeWidth="1.5"
        />

        {/* Slender stand fading behind bottom wave */}
        <rect x="86.5" y="177" width="7" height="108" rx="3.5" fill="url(#darkMicStandGrad)" />
        <line
          x1="88.5"
          y1="178"
          x2="88.5"
          y2="265"
          stroke="#F6E3AD"
          strokeOpacity="0.35"
          strokeWidth="1.2"
        />
      </g>
    </svg>
  );
}

