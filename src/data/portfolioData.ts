export interface GalleryImage {
  src: string;
  alt: string;
  label?: string;
  subCategory?: string;
}

export interface GalleryCategory {
  id: string;
  title: string;
  description: string;
  icon: "users" | "mic" | "medal" | "calendar" | "music" | "plane" | "trophy";
  buttonText: string;
  images: GalleryImage[];
}

export const SOCIAL_LINKS = [
  { name: "Instagram", href: "https://www.instagram.com/srinithi_anand/" },
  { name: "Facebook", href: "https://www.facebook.com/SrinithiAnandSinger/" },
  { name: "YouTube", href: "https://www.youtube.com/@anandsindu" },
  { name: "WhatsApp", href: "https://api.whatsapp.com/send?phone=919500040780" },
] as const;

export const ARTIST_STATS = [
  { icon: "mic" as const, number: "150+", label: "Stage Performances" },
  { icon: "trophy" as const, number: "25+", label: "Awards & Recognitions" },
  { icon: "tv" as const, number: "10+", label: "Television Appearances" },
  { icon: "disc" as const, number: "7+", label: "Albums & Releases" },
];

export const FEATURED_MOMENTS: GalleryImage[] = [
  {
    src: "/images/srinithi-portrait.png",
    alt: "Srinithi Anand — Official Artist Portrait",
    label: "Artist Spotlight",
  },
  {
    src: "/images/legends/spb.png",
    alt: "With Padma Vibhushan Dr. S. P. Balasubrahmanyam",
    label: "With Legendary S. P. B.",
  },
  {
    src: "/images/about/about.jpg",
    alt: "Srinithi Anand Live Vocal Performance",
    label: "Live Performance",
  },
  {
    src: "/images/awards/10.jpg",
    alt: "Receiving Award & Honour on Stage",
    label: "Award Recognition",
  },
];

export const JOURNEY_HIGHLIGHT_IMAGES: GalleryImage[] = [
  { src: "/images/about/about.jpg", alt: "Live Carnatic & Devotional Performance" },
  { src: "/images/legends/spb-charan.png", alt: "Mega TV Geethanjali Concert with S. P. B. Charan" },
  { src: "/images/legends/unni-menon.png", alt: "Live Stage Concert with Unni Menon" },
  { src: "/images/reality-shows/sun-tv.jpg", alt: "Sun TV Singing Appearance" },
  { src: "/images/reality-shows/zee-tamil.jpg", alt: "Zee Tamil Reality Show Performance" },
  { src: "/images/reality-shows/jaya-tv.jpeg", alt: "Jaya TV Star Singer Performance" },
  { src: "/images/reality-shows/dd-podhigai.jpg", alt: "Doordarshan Podhigai Exclusive" },
  { src: "/images/reality-shows/deepam-tv.jpg", alt: "Deepam TV Musical Performance" },
  { src: "/images/television/tv.jpg", alt: "Mega TV & Puthuyugam TV Musical Specials" },
];

export const TELEVISION_SHOWCASE: GalleryImage[] = [
  { src: "/images/television/tv.jpg", alt: "Mega TV & Puthuyugam TV Shows", label: "Mega & Puthuyugam TV" },
  { src: "/images/reality-shows/sun-tv.jpg", alt: "Sun TV Singing Show", label: "Sun TV" },
  { src: "/images/reality-shows/zee-tamil.jpg", alt: "Zee Tamil Reality Show", label: "Zee Tamil" },
  { src: "/images/reality-shows/jaya-tv.jpeg", alt: "Jaya TV Star Singer", label: "Jaya TV" },
  { src: "/images/reality-shows/dd-podhigai.jpg", alt: "Doordarshan Podhigai", label: "DD Podhigai" },
  { src: "/images/reality-shows/deepam-tv.jpg", alt: "Deepam TV Studio", label: "Deepam TV" },
  { src: "/images/albums/album-cover.jpg", alt: "Last Bench Musical Album Release", label: "Album Release" },
  { src: "/images/acting/acting.jpg", alt: "Acting & Musical Album Feature", label: "Acting & Albums" },
];

export const PORTFOLIO_CATEGORIES: GalleryCategory[] = [
  {
    id: "celebrities",
    title: "With Celebrities",
    description: "Memorable moments with renowned music legends, composers and personalities.",
    icon: "users",
    buttonText: "View All Celebrity Photos",
    images: [
      { src: "/images/celebrities/celeb-1.jpg", alt: "With Maestro Ilaiyaraaja" },
      { src: "/images/celebrities/celeb-2.jpg", alt: "With Dr. S. P. Balasubrahmanyam" },
      { src: "/images/celebrities/celeb-3.jpg", alt: "With Renowned Film Artist" },
      { src: "/images/celebrities/celeb-4.jpg", alt: "With Padma Bhushan K. S. Chithra" },
      { src: "/images/celebrities/celeb-5.jpg", alt: "With K. S. Chithra at Musical Event" },
      { src: "/images/celebrities/celeb-6.jpg", alt: "With Composer D. Imman" },
      { src: "/images/celebrities/celeb-7.png", alt: "With Playback Singer Mano" },
      { src: "/images/celebrities/celeb-8.jpg", alt: "With Actor Vijay Sethupathi" },
      { src: "/images/celebrities/celeb-9.png", alt: "With Music Personality" },
      { src: "/images/celebrities/celeb-10.jpg", alt: "Backstage Moment with Artist" },
      { src: "/images/celebrities/celeb-11.jpg", alt: "On Stage with K. S. Chithra" },
      { src: "/images/celebrities/celeb-12.jpg", alt: "At Special Concert Audience" },
      { src: "/images/celebrities/celeb-13.jpg", alt: "2018 & 2024 Reunion with Music Legend" },
      { src: "/images/celebrities/celeb-15.jpg", alt: "With Senior Film & Music Artist" },
      { src: "/images/celebrities/celeb-16.jpg", alt: "Suryan FM Radio Studio Appearance" },
      { src: "/images/celebrities/celeb-17.jpg", alt: "With Classical & Film Music Elder" },
      { src: "/images/legends/spb.png", alt: "Backstage with Dr. S. P. Balasubrahmanyam" },
      { src: "/images/legends/mano.png", alt: "With Veteran Singer Mano" },
      { src: "/images/portfolio/12.jpg", alt: "With Playback Singer Srinivas" },
      { src: "/images/portfolio/14.jpg", alt: "With Film & Television Celebrity" },
      { src: "/images/portfolio/18.jpg", alt: "With Music Personality" },
      { src: "/images/portfolio/22.jpg", alt: "At Live Concert Backstage" },
      { src: "/images/portfolio/35.jpg", alt: "With Actor & Performer" },
      { src: "/images/portfolio/42.png", alt: "With Celebrity Artists" },
      { src: "/images/portfolio/46.png", alt: "With Veteran Composer & Artist" },
    ],
  },
  {
    id: "live-performances",
    title: "Live Performances",
    description: "Stage concerts, devotional shows, television appearances and special live events.",
    icon: "mic",
    buttonText: "View All Performances",
    images: [
      { src: "/images/about/about.jpg", alt: "Live Carnatic & Devotional Concert" },
      { src: "/images/legends/spb-charan.png", alt: "Mega TV Geethanjali Live with S. P. B. Charan" },
      { src: "/images/legends/unni-menon.png", alt: "Live Concert with Unni Menon" },
      { src: "/images/portfolio/49.jpg", alt: "Live Musical Evening with Mano" },
      { src: "/images/portfolio/50.png", alt: "Live Concert Stage Duet" },
      { src: "/images/reality-shows/sun-tv.jpg", alt: "Sun TV Live Performance" },
      { src: "/images/reality-shows/zee-tamil.jpg", alt: "Zee Tamil Reality Performance" },
      { src: "/images/reality-shows/jaya-tv.jpeg", alt: "Jaya TV Star Singer Live" },
      { src: "/images/reality-shows/dd-podhigai.jpg", alt: "DD Podhigai Live Vocal" },
      { src: "/images/reality-shows/deepam-tv.jpg", alt: "Deepam TV Studio Recording" },
      { src: "/images/television/tv.jpg", alt: "Mega TV & Puthuyugam TV Specials" },
    ],
  },
  {
    id: "stage-performances",
    title: "Stage Performances",
    description: "Highlights from grand stage shows, gala nights and orchestra concerts.",
    icon: "medal",
    buttonText: "View All Stage Moments",
    images: [
      { src: "/images/portfolio/49.jpg", alt: "Grand Orchestra Stage Show" },
      { src: "/images/portfolio/50.png", alt: "Concert Stage Spotlight" },
      { src: "/images/portfolio/13.jpg", alt: "Outdoor Concert Stage" },
      { src: "/images/portfolio/21.jpg", alt: "Stage Honour with Veteran Artist" },
      { src: "/images/portfolio/25.jpg", alt: "Stage Lighting & Backstage" },
      { src: "/images/portfolio/28.jpg", alt: "Musical Show Appearance" },
      { src: "/images/portfolio/30.jpg", alt: "Blue Gown Stage Concert" },
      { src: "/images/portfolio/38.jpg", alt: "Concert Stage Co-Performer" },
      { src: "/images/portfolio/47.png", alt: "Evening Concert Event" },
      { src: "/images/portfolio/48.png", alt: "Cultural Fest Stage" },
    ],
  },
  {
    id: "special-events",
    title: "Special Events",
    description: "Gala events, celebrations, cultural festivals and prestigious appearances.",
    icon: "calendar",
    buttonText: "View All Special Events",
    images: [
      { src: "/images/awards/10.jpg", alt: "Special Event Recognition" },
      { src: "/images/portfolio/11.jpg", alt: "Gala Event with Legend" },
      { src: "/images/portfolio/20.jpg", alt: "Special Event with Singer Priyadarshini" },
      { src: "/images/portfolio/26.jpg", alt: "Cultural Celebration Guest" },
      { src: "/images/portfolio/27.jpg", alt: "Grand Hall Musical Celebration" },
      { src: "/images/portfolio/32.jpg", alt: "Special Event Ensemble" },
      { src: "/images/portfolio/33.jpg", alt: "Festive Event Gathering" },
      { src: "/images/portfolio/34.jpg", alt: "Evening Gala Co-Singers" },
      { src: "/images/portfolio/37.jpg", alt: "Special Television Celebration" },
      { src: "/images/portfolio/43.png", alt: "Musical Gathering Appearance" },
      { src: "/images/portfolio/45.png", alt: "Event Celebration Moment" },
    ],
  },
  {
    id: "musical-moments",
    title: "Musical Moments",
    description: "Memorable musical collaborations, veteran tributes and album releases.",
    icon: "music",
    buttonText: "View All Musical Moments",
    images: [
      { src: "/images/portfolio/19.jpg", alt: "With Legend P. Susheela" },
      { src: "/images/portfolio/24.jpg", alt: "Musical Collaboration" },
      { src: "/images/portfolio/7.jpg", alt: "Music Studio Moment" },
      { src: "/images/portfolio/9.jpg", alt: "Musical Meet" },
      { src: "/images/portfolio/16.jpg", alt: "Suryan FM Musical Session" },
      { src: "/images/portfolio/23.jpg", alt: "Backstage Musical Moment" },
      { src: "/images/portfolio/40.png", alt: "With Singer Mano" },
      { src: "/images/portfolio/41.png", alt: "Studio Collaboration" },
      { src: "/images/portfolio/44.png", alt: "Music Event Moment" },
      { src: "/images/albums/album-cover.jpg", alt: "Last Bench Musical Album" },
      { src: "/images/acting/acting.jpg", alt: "Musical Album & Acting Feature" },
    ],
  },
  {
    id: "tour-diaries",
    title: "Tour Diaries",
    description: "A visual diary of musical travels and exploration across iconic destinations.",
    icon: "plane",
    buttonText: "Explore Tour Diaries",
    images: [
      { src: "/images/tours/kashmir/1.jpg", alt: "Kashmir — Traditional Attire by River", label: "Kashmir", subCategory: "Kashmir" },
      { src: "/images/tours/kashmir/2.jpg", alt: "Kashmir — Blossom Gardens", subCategory: "Kashmir" },
      { src: "/images/tours/kashmir/3.jpg", alt: "Kashmir — I Love Kashmir", subCategory: "Kashmir" },
      { src: "/images/tours/kashmir/4.jpg", alt: "Kashmir — Alpine Meadow", subCategory: "Kashmir" },
      { src: "/images/tours/kashmir/5.jpg", alt: "Kashmir — Mountain Stream", subCategory: "Kashmir" },
      { src: "/images/tours/kashmir/6.jpg", alt: "Kashmir — Snow Peaks", subCategory: "Kashmir" },
      { src: "/images/tours/kashmir/7.jpg", alt: "Kashmir — Pine Valley Road", subCategory: "Kashmir" },

      { src: "/images/tours/malaysia/1.jpg", alt: "Malaysia — Tropical Park", label: "Malaysia", subCategory: "Malaysia" },
      { src: "/images/tours/malaysia/2.jpg", alt: "Malaysia — River Cruise", subCategory: "Malaysia" },
      { src: "/images/tours/malaysia/3.jpg", alt: "Malaysia — City Steps", subCategory: "Malaysia" },
      { src: "/images/tours/malaysia/4.jpg", alt: "Malaysia — Petronas Towers Family Visit", subCategory: "Malaysia" },
      { src: "/images/tours/malaysia/5.jpg", alt: "Malaysia — Temple Vista", subCategory: "Malaysia" },
      { src: "/images/tours/malaysia/6.jpg", alt: "Malaysia — Petronas Twin Towers Night", subCategory: "Malaysia" },
      { src: "/images/tours/malaysia/7.jpg", alt: "Malaysia — Batu Caves", subCategory: "Malaysia" },

      { src: "/images/tours/sri-lanka/1.jpg", alt: "Sri Lanka — Lotus Tower City Panorama", label: "Sri Lanka", subCategory: "Sri Lanka" },
      { src: "/images/tours/sri-lanka/2.jpg", alt: "Sri Lanka — Cultural Heritage", subCategory: "Sri Lanka" },
      { src: "/images/tours/sri-lanka/6.jpg", alt: "Sri Lanka — Garden Courtyard", subCategory: "Sri Lanka" },
      { src: "/images/tours/sri-lanka/7.jpg", alt: "Sri Lanka — Fountain Plaza", subCategory: "Sri Lanka" },

      { src: "/images/tours/vietnam/1.jpg", alt: "Vietnam — Coastal Beach Crescent", label: "Vietnam", subCategory: "Vietnam" },
      { src: "/images/tours/vietnam/2.jpg", alt: "Vietnam — Grand Waterfront", subCategory: "Vietnam" },
      { src: "/images/tours/vietnam/3.jpg", alt: "Vietnam — Blue Window Architecture", subCategory: "Vietnam" },
      { src: "/images/tours/vietnam/4.jpg", alt: "Vietnam — Evening River Boat", subCategory: "Vietnam" },
      { src: "/images/tours/vietnam/5.jpg", alt: "Vietnam — Grand World Promenade", subCategory: "Vietnam" },
      { src: "/images/tours/vietnam/6.jpg", alt: "Vietnam — Lakeside Castle View", subCategory: "Vietnam" },
      { src: "/images/tours/vietnam/7.jpg", alt: "Vietnam — Golden Bridge Ba Na Hills", subCategory: "Vietnam" },
    ],
  },
];

export const AWARDS_GALLERY: GalleryImage[] = [
  { src: "/images/awards/award-13.jpeg", alt: "Trophy & Certificate of Achievement" },
  { src: "/images/awards/1.jpg", alt: "G-TEC Regional Competition Award" },
  { src: "/images/awards/2.jpg", alt: "State Cultural Award Presentation" },
  { src: "/images/awards/3.jpg", alt: "Lemart Singing Competition Gold Medal" },
  { src: "/images/awards/4.jpg", alt: "Stage Honour & Citation" },
  { src: "/images/awards/5.jpg", alt: "Bharathi Cultural Trophy Presentation" },
  { src: "/images/awards/6.jpg", alt: "Achariya Cultural Honour" },
  { src: "/images/awards/7.jpg", alt: "Super Singer Big Win Cheque & Trophy" },
  { src: "/images/awards/8.jpg", alt: "Early Stage Recognition" },
  { src: "/images/awards/9.jpg", alt: "Duet & Music Competition Award" },
  { src: "/images/awards/10.jpg", alt: "Official Memento & Appreciation" },
  { src: "/images/awards/11.png", alt: "Stanley Medical College Vaagai '25 Gold Medal" },
  { src: "/images/awards/12.jpg", alt: "Ethiraj College Formula '25 First Ever College Award" },
  { src: "/images/awards/13.png", alt: "Women's Christian College Festeve '26 Winner" },
  { src: "/images/awards/14.png", alt: "XIME Chennai Prometheus Winner Certificate" },
  { src: "/images/awards/15.png", alt: "D.G. Vaishnav College Talent Hunt '26" },
  { src: "/images/awards/16.png", alt: "Stanley Medical College Vaagai '25 Certificate" },
  { src: "/images/awards/17.png", alt: "SRM Milan '26 Participation" },
  { src: "/images/awards/18.png", alt: "Vel Tech Matrix '26 Certificate" },
  { src: "/images/awards/19.png", alt: "Ethiraj College Formula '25 Achievement" },
  { src: "/images/awards/20.png", alt: "Kingspire Effective Communication Certificate" },
  { src: "/images/awards/21.png", alt: "Talent Hunt '26 Certificate of Appreciation" },
  { src: "/images/awards/22.png", alt: "Loyola College Ovations '25 Winner" },
  { src: "/images/awards/23.png", alt: "Madras Medical College Revivals '25" },
];

