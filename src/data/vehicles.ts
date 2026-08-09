export interface Vehicle {
  id: string;
  name: string;
  category: "Sedan" | "SUV" | "Tempo Traveller" | "Van" | "Bus" | "Luxury";
  seats: string;
  ac: boolean;
  luggage: string;
  driverIncluded: boolean;
  startingPrice: number;
  priceUnit: string;
  image: string;
  gallery: string[];
  overview: string;
  idealFor: string[];
  features: string[];
  localRentalRate: string;
  outstationRentalRate: string;
}

export const vehicles: Vehicle[] = [
  {
    id: "maruti-dzire",
    name: "Maruti Dzire",
    category: "Sedan",
    seats: "4+1 Seats",
    ac: true,
    luggage: "2 Medium Bags",
    driverIncluded: true,
    startingPrice: 2500,
    priceUnit: "day",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuABr2Jdatp9a6bwmEjFDsuGoVtRYBi5KdbCB4riLtETO81C9eHFMW6EqqAm_y6RvoUpawiii4uKtIZUo6WfrOPMSqd4AvdSuEi-Lk9R8E0lU1YmIjofqqWlYDlQ09BLiSC-u9s_zg_sGhbvpA5w-zlhviMs5358ZyioMQ0cOUFvEGHoiV6_Af3uA9mTOC187dOq4BNmHo_VnuC4Bw6jgW3UR7ecP4CIZ3lf6VMe4Mw-qZGMBtyrFapw",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuABr2Jdatp9a6bwmEjFDsuGoVtRYBi5KdbCB4riLtETO81C9eHFMW6EqqAm_y6RvoUpawiii4uKtIZUo6WfrOPMSqd4AvdSuEi-Lk9R8E0lU1YmIjofqqWlYDlQ09BLiSC-u9s_zg_sGhbvpA5w-zlhviMs5358ZyioMQ0cOUFvEGHoiV6_Af3uA9mTOC187dOq4BNmHo_VnuC4Bw6jgW3UR7ecP4CIZ3lf6VMe4Mw-qZGMBtyrFapw"
    ],
    overview: "The Maruti Dzire is India's most popular compact sedan. Highly efficient, comfortable, and reliable for budget-conscious small families or individual business travel around Chennai and nearby cities.",
    idealFor: ["Airport Transfers", "Local Sightseeing", "Outstation Travel", "Budget Family Trips"],
    features: [
      "Well-maintained Air Conditioning",
      "Punctual and courteous driver",
      "USB charger and Bluetooth music player",
      "Clean seat covers and cabin environment"
    ],
    localRentalRate: "₹2,000 for 8 Hrs / 80 Kms (Extra Km: ₹12, Extra Hr: ₹150)",
    outstationRentalRate: "₹12 per Km (Minimum 250 Kms per day + Driver Beta ₹400/day)"
  },
  {
    id: "honda-amaze",
    name: "Honda Amaze",
    category: "Sedan",
    seats: "4+1 Seats",
    ac: true,
    luggage: "2 Medium Bags",
    driverIncluded: true,
    startingPrice: 2800,
    priceUnit: "day",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqMhTLGJHuzyZEfL98n55D8XSI8L6k7z7UVOAUYv_H1HLZTfbj0SiQsGOfmx5Qu5PW8zbFgk5Zz1yv6zosm8EGNIZVwGVv5E56keLINKgnrS2J-pZIjdRBbhSckgDKzxyUmE9F-jEbYXu2gdEHntIZf4NUK8a_wkHnvodGpl5pNNXVFkXMEOyLPfUr5dHKFKUVR19gUsuFtZ_6ozERe6V_raWJ44ZAYk7ZMeOeJB7I1_iTKKLuTQCe",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAqMhTLGJHuzyZEfL98n55D8XSI8L6k7z7UVOAUYv_H1HLZTfbj0SiQsGOfmx5Qu5PW8zbFgk5Zz1yv6zosm8EGNIZVwGVv5E56keLINKgnrS2J-pZIjdRBbhSckgDKzxyUmE9F-jEbYXu2gdEHntIZf4NUK8a_wkHnvodGpl5pNNXVFkXMEOyLPfUr5dHKFKUVR19gUsuFtZ_6ozERe6V_raWJ44ZAYk7ZMeOeJB7I1_iTKKLuTQCe"
    ],
    overview: "Offering premium styling and generous cabin legroom, the Honda Amaze is a step up for comfortable city commutes, business trips, and outstation weekend retreats.",
    idealFor: ["Corporate Travel", "Airport Drop/Pickup", "Weekend Trips", "Family Travel"],
    features: [
      "Spacious boot and seating",
      "Superior ride quality and suspension",
      "Professional chauffeur-driven experience",
      "Clean interior with sanitizer and tissue boxes"
    ],
    localRentalRate: "₹2,200 for 8 Hrs / 80 Kms (Extra Km: ₹13, Extra Hr: ₹150)",
    outstationRentalRate: "₹13 per Km (Minimum 250 Kms per day + Driver Beta ₹400/day)"
  },
  {
    id: "toyota-innova-crysta",
    name: "Toyota Innova Crysta",
    category: "SUV",
    seats: "7+1 Seats",
    ac: true,
    luggage: "4 Large Bags",
    driverIncluded: true,
    startingPrice: 5500,
    priceUnit: "day",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTjX44g6NfLXhaKO5MWXXQKR1FZOWt7EYv3VFXVXtut70JQMUCFdVRku5egmHZoZWG1NKemADnDoYkUfJOQxQVjW5ibFSskJFMohjxiJhfg4Cba2VuHH41ZOEduhYgdjLmsjmkhogBw6SUIgSk1m-egBmk8Qr4HAlxxEnBo5OAg0hBH8AeTaljKrUF2nHQyKz5AvTJ9lWQ6VViTxWFVRKlaLyirLrnxUgTxQTi51bxkELJaN72mUac",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDTjX44g6NfLXhaKO5MWXXQKR1FZOWt7EYv3VFXVXtut70JQMUCFdVRku5egmHZoZWG1NKemADnDoYkUfJOQxQVjW5ibFSskJFMohjxiJhfg4Cba2VuHH41ZOEduhYgdjLmsjmkhogBw6SUIgSk1m-egBmk8Qr4HAlxxEnBo5OAg0hBH8AeTaljKrUF2nHQyKz5AvTJ9lWQ6VViTxWFVRKlaLyirLrnxUgTxQTi51bxkELJaN72mUac"
    ],
    overview: "The Toyota Innova Crysta is the gold standard for highway passenger travel in India. Renowned for its superb comfort, strong air conditioning, and plush suspension, it is the ideal choice for family hill station trips to Ooty or Kodaikanal.",
    idealFor: ["Family Holidays", "Corporate Travel", "Outstation Hill Journeys", "Wedding Chauffeur Service"],
    features: [
      "Captain seats in the middle row",
      "Multi-zone AC controls for all passengers",
      "Ample legroom and recliner backrests",
      "Top-tier safety features (Airbags, ABS)",
      "High ground clearance suitable for winding roads"
    ],
    localRentalRate: "₹4,500 for 8 Hrs / 80 Kms (Extra Km: ₹18, Extra Hr: ₹250)",
    outstationRentalRate: "₹18 per Km (Minimum 250 Kms per day + Driver Beta ₹500/day)"
  },
  {
    id: "mahindra-xuv700",
    name: "Mahindra XUV700",
    category: "SUV",
    seats: "6+1 Seats",
    ac: true,
    luggage: "3 Medium Bags",
    driverIncluded: true,
    startingPrice: 4800,
    priceUnit: "day",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "Experience modern style and punchy performance with the Mahindra XUV700. Highly recommended for couples and modern families seeking advanced safety, skyroof views, and a solid highway presence.",
    idealFor: ["Outstation Road Trips", "Family Weekend Getaways", "Executive Travel"],
    features: [
      "Panoramic Skyroof",
      "Dual-zone automatic climate control",
      "Advanced ADAS and safety configurations",
      "Premium 3D audio system"
    ],
    localRentalRate: "₹4,000 for 8 Hrs / 80 Kms (Extra Km: ₹16, Extra Hr: ₹250)",
    outstationRentalRate: "₹16 per Km (Minimum 250 Kms per day + Driver Beta ₹500/day)"
  },
  {
    id: "tempo-traveller",
    name: "Standard Tempo Traveller",
    category: "Tempo Traveller",
    seats: "12 to 14 Seats",
    ac: true,
    luggage: "Spacious Roof Carrier",
    driverIncluded: true,
    startingPrice: 8500,
    priceUnit: "day",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfkeoRFQaxlGpSp3WRhMJP3hTJZcQr8Alu7sDexUxmWk47PgMm6uCgqjfohh7lwNUQZTnCaqwfdSNOafHpIbvFrJLjo9X77kafCLGMgO7f6qwb5Srkfi2Xm061eEAhttWZ67alB6xLlnFQeW8m6Lvr_jmov5pTI3v7ux0ZZL18KeBCW8gC5_8l9GdSlTZAM_K3s0aadA4XmzX60HgIyt6MriZiRvR7LjPPdWrvChk7Qu_C4BnsaryL",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAfkeoRFQaxlGpSp3WRhMJP3hTJZcQr8Alu7sDexUxmWk47PgMm6uCgqjfohh7lwNUQZTnCaqwfdSNOafHpIbvFrJLjo9X77kafCLGMgO7f6qwb5Srkfi2Xm061eEAhttWZ67alB6xLlnFQeW8m6Lvr_jmov5pTI3v7ux0ZZL18KeBCW8gC5_8l9GdSlTZAM_K3s0aadA4XmzX60HgIyt6MriZiRvR7LjPPdWrvChk7Qu_C4BnsaryL"
    ],
    overview: "The classic Tempo Traveller is perfect for large families, tourist groups, and corporate teams. Offering comfortable pushback seats, a high ceiling, and strong AC vents for all rows, it makes group travel joyful and unified.",
    idealFor: ["Group Tour Packages", "Corporate Outings", "Pilgrimages", "Wedding Guest Transport"],
    features: [
      "Reclining luxury pushback seats",
      "LED TV and premium music system with mic",
      "Individual reading lights and mobile charging points",
      "Dedicated overhead luggage racks and rear boot space"
    ],
    localRentalRate: "₹7,000 for 8 Hrs / 80 Kms (Extra Km: ₹24, Extra Hr: ₹350)",
    outstationRentalRate: "₹24 per Km (Minimum 250 Kms per day + Driver Beta ₹600/day)"
  },
  {
    id: "luxury-maharaja-tt",
    name: "Luxury Maharaja Tempo Traveller",
    category: "Tempo Traveller",
    seats: "9+1 Captain Seats",
    ac: true,
    luggage: "Spacious Roof Rack",
    driverIncluded: true,
    startingPrice: 11000,
    priceUnit: "day",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLG_MZdDpd8RZO3r-Snj0BCERbvClgofBtjD1Gow9EpK09EMXK7cKVBx3GEsqsoOOTECHxNxlcpfsQoXC98yVwTUCXx24xRVr_xQjVok3C_yN6nvl1F2kwI3wB4Dhi2yieFXmZ1_3j6eng_djqY5pQ4UW7hIWIJihnc0qKnkBeCgK_2x3fSxD2BMcAmTL1JzJNty3sL8_zTTJOu3Oyj8ntvcWIly08IE70IP3yDxBKuauXchgTJyyf",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBLG_MZdDpd8RZO3r-Snj0BCERbvClgofBtjD1Gow9EpK09EMXK7cKVBx3GEsqsoOOTECHxNxlcpfsQoXC98yVwTUCXx24xRVr_xQjVok3C_yN6nvl1F2kwI3wB4Dhi2yieFXmZ1_3j6eng_djqY5pQ4UW7hIWIJihnc0qKnkBeCgK_2x3fSxD2BMcAmTL1JzJNty3sL8_zTTJOu3Oyj8ntvcWIly08IE70IP3yDxBKuauXchgTJyyf"
    ],
    overview: "Upgrade to Maharaja styling. Renders individual 1x1 wide business class captain recliners, wooden styling flooring, ambient overhead starry ceiling, and full infotainment configurations.",
    idealFor: ["VIP delegations", "Family luxury hill tours", "Exclusive wedding groups"],
    features: [
      "1x1 Luxury Reclining Captain Seats",
      "Wooden finish interiors and starry ceiling styling",
      "Chiller box and cup holders",
      "Premium acoustic system with smart TV"
    ],
    localRentalRate: "₹9,000 for 8 Hrs / 80 Kms (Extra Km: ₹28, Extra Hr: ₹450)",
    outstationRentalRate: "₹28 per Km (Minimum 250 Kms per day + Driver Beta ₹700/day)"
  },
  {
    id: "force-urbania",
    name: "Force Urbania Luxury Van",
    category: "Van",
    seats: "10 to 12 Seats",
    ac: true,
    luggage: "Extra Large Rear Space",
    driverIncluded: true,
    startingPrice: 9500,
    priceUnit: "day",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLG_MZdDpd8RZO3r-Snj0BCERbvClgofBtjD1Gow9EpK09EMXK7cKVBx3GEsqsoOOTECHxNxlcpfsQoXC98yVwTUCXx24xRVr_xQjVok3C_yN6nvl1F2kwI3wB4Dhi2yieFXmZ1_3j6eng_djqY5pQ4UW7hIWIJihnc0qKnkBeCgK_2x3fSxD2BMcAmTL1JzJNty3sL8_zTTJOu3Oyj8ntvcWIly08IE70IP3yDxBKuauXchgTJyyf",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBLG_MZdDpd8RZO3r-Snj0BCERbvClgofBtjD1Gow9EpK09EMXK7cKVBx3GEsqsoOOTECHxNxlcpfsQoXC98yVwTUCXx24xRVr_xQjVok3C_yN6nvl1F2kwI3wB4Dhi2yieFXmZ1_3j6eng_djqY5pQ4UW7hIWIJihnc0qKnkBeCgK_2x3fSxD2BMcAmTL1JzJNty3sL8_zTTJOu3Oyj8ntvcWIly08IE70IP3yDxBKuauXchgTJyyf"
    ],
    overview: "The Force Urbania is India's most modern, premium passenger van, resembling European luxury styling. Features large panoramic windows, individual AC vents, and independent front suspension for a smooth, limousine-like ride.",
    idealFor: ["VIP Group Travel", "Premium Corporate Transfers", "Luxury Outstation Trips", "Wedding Convoy"],
    features: [
      "Ergonomic seats with individual armrests",
      "Panoramic side glass windows for beautiful views",
      "Absorptive independent suspension system",
      "Dual airbags and electronic stability control",
      "Premium ambient ceiling lights"
    ],
    localRentalRate: "₹8,000 for 8 Hrs / 80 Kms (Extra Km: ₹26, Extra Hr: ₹400)",
    outstationRentalRate: "₹26 per Km (Minimum 250 Kms per day + Driver Beta ₹600/day)"
  },
  {
    id: "toyota-commuter",
    name: "Toyota Commuter Luxury Van",
    category: "Van",
    seats: "10+1 Seats",
    ac: true,
    luggage: "Underseat & Rear Space",
    driverIncluded: true,
    startingPrice: 13000,
    priceUnit: "day",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "The globally acclaimed Toyota Commuter (Hiace) offers absolute reliability, high safety, silent engine rides, and luxury recliners. Perfect for VIP guest transfers, long road journeys, and premium corporate commutes.",
    idealFor: ["Expat Travel", "VIP Delegations", "High-end Family Outstations"],
    features: [
      "Ultra-silent cabin insulation",
      "Plush seats with slide and recline adjustments",
      "Powerful dual blower cooling system",
      "Legendary Toyota active safety engineering"
    ],
    localRentalRate: "₹10,000 for 8 Hrs / 80 Kms (Extra Km: ₹35, Extra Hr: ₹500)",
    outstationRentalRate: "₹35 per Km (Minimum 250 Kms per day + Driver Beta ₹800/day)"
  },
  {
    id: "mini-bus",
    name: "Tourist Mini Bus",
    category: "Bus",
    seats: "21 Seats",
    ac: true,
    luggage: "Under-carriage Storage",
    driverIncluded: true,
    startingPrice: 12000,
    priceUnit: "day",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAY8CbzO0IpNkS81RCn4mSjmxoipEOGfx6gCm_s5LYcMz6Q6dQ7sqlg3hNS1SpufjgyVuFCMyl9J9S1JxLmM7C7WFbVcrytgmfKwaDxGlpY-XXGsjFuN4etVPmYrzy8njomOXYeOBX2sJ3nmpcUXbRxRiOaK9TzRQB4jS0cLM70t8rDimIyk8WYNVUN_QOhFiIwMwcg3lwuCyM-YM6CgH_awn6jG_OyDE6CNkP2hPx9mi6COxU7qH0W",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAY8CbzO0IpNkS81RCn4mSjmxoipEOGfx6gCm_s5LYcMz6Q6dQ7sqlg3hNS1SpufjgyVuFCMyl9J9S1JxLmM7C7WFbVcrytgmfKwaDxGlpY-XXGsjFuN4etVPmYrzy8njomOXYeOBX2sJ3nmpcUXbRxRiOaK9TzRQB4jS0cLM70t8rDimIyk8WYNVUN_QOhFiIwMwcg3lwuCyM-YM6CgH_awn6jG_OyDE6CNkP2hPx9mi6COxU7qH0W"
    ],
    overview: "Our 21-seater Tourist Mini Bus offers comfortable, air-conditioned transit for mid-sized groups, corporate outings, and wedding guest transportation.",
    idealFor: ["Corporate Outings", "School/College Trips", "Pilgrimage Groups", "Wedding Guest Shuttles"],
    features: [
      "Comfortable 2x2 seating layout",
      "High power air conditioning blower system",
      "TV and audio entertainment system",
      "Spacious center aisle"
    ],
    localRentalRate: "₹10,000 for 8 Hrs / 80 Kms (Extra Km: ₹32, Extra Hr: ₹500)",
    outstationRentalRate: "₹32 per Km (Minimum 300 Kms per day + Driver Beta ₹800/day)"
  },
  {
    id: "tourist-coach",
    name: "Tourist Coach Bus",
    category: "Bus",
    seats: "40 Seats",
    ac: true,
    luggage: "Large Under-carriage Bays",
    driverIncluded: true,
    startingPrice: 18000,
    priceUnit: "day",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "A full-sized luxury tourist coach designed for long-distance group tours. Offers deep reclining seats, air suspension for bumpy roads, and professional crew coordination.",
    idealFor: ["Large Group Tourism", "Corporate Conventions", "Pilgrimages", "Interstate Tours"],
    features: [
      "Premium reclining seats with footrests",
      "Air suspension for smooth ride quality",
      "LCD screens and high-quality speaker system",
      "Large under-chassis luggage hold"
    ],
    localRentalRate: "₹15,000 for 8 Hrs / 80 Kms (Extra Km: ₹42, Extra Hr: ₹600)",
    outstationRentalRate: "₹42 per Km (Minimum 300 Kms per day + Driver Beta ₹1000/day)"
  },
  {
    id: "luxury-sleeper-bus",
    name: "Luxury Multi-Axle Sleeper Coach",
    category: "Bus",
    seats: "30 Sleeper Berths",
    ac: true,
    luggage: "Massive Basement Holds",
    driverIncluded: true,
    startingPrice: 28000,
    priceUnit: "day",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAY8CbzO0IpNkS81RCn4mSjmxoipEOGfx6gCm_s5LYcMz6Q6dQ7sqlg3hNS1SpufjgyVuFCMyl9J9S1JxLmM7C7WFbVcrytgmfKwaDxGlpY-XXGsjFuN4etVPmYrzy8njomOXYeOBX2sJ3nmpcUXbRxRiOaK9TzRQB4jS0cLM70t8rDimIyk8WYNVUN_QOhFiIwMwcg3lwuCyM-YM6CgH_awn6jG_OyDE6CNkP2hPx9mi6COxU7qH0W",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAY8CbzO0IpNkS81RCn4mSjmxoipEOGfx6gCm_s5LYcMz6Q6dQ7sqlg3hNS1SpufjgyVuFCMyl9J9S1JxLmM7C7WFbVcrytgmfKwaDxGlpY-XXGsjFuN4etVPmYrzy8njomOXYeOBX2sJ3nmpcUXbRxRiOaK9TzRQB4jS0cLM70t8rDimIyk8WYNVUN_QOhFiIwMwcg3lwuCyM-YM6CgH_awn6jG_OyDE6CNkP2hPx9mi6COxU7qH0W"
    ],
    overview: "Bring ultimate travel comfort to long-distance night tours. Offers single and double AC sleeper berths, reading console panels, charging docks, and high-tech safety suspensions.",
    idealFor: ["Interstate Multi-day Tours", "Corporate Conventions", "Long Pilgrimages"],
    features: [
      "Individual single/double sleeper cabins",
      "Ambient curtains and reading lights console",
      "Multi-axle air suspensions for smooth sleeping",
      "Full basement luggage bay configuration"
    ],
    localRentalRate: "₹24,000 for 8 Hrs / 80 Kms (Extra Km: ₹55, Extra Hr: ₹800)",
    outstationRentalRate: "₹55 per Km (Minimum 350 Kms per day + Driver Beta ₹1200/day)"
  },
  {
    id: "luxury-suv",
    name: "Luxury Chauffeur SUV",
    category: "Luxury",
    seats: "5+1 Seats",
    ac: true,
    luggage: "3 Large Bags",
    driverIncluded: true,
    startingPrice: 15000,
    priceUnit: "day",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAN7D5uZaXxROP-uUKFUjZNRFX5ARyZ4UyGV22iEILh0exDk4NVeERIOtx_nHBOxqoNk7QBxnYHNIb_jdCvei64c_b3J8L-7XobxUL5lcRihBYj61Z-jiMZtzJj2foZiF7WVIpkVyTwD3rfY0zveAcoLvCpfHdYWcMw3Z1fdE688yi7-2S78Z9bd4eIlb6-xWQlg22GPF06RxN2oa1L2vOw62F8q-_Q18l90HHStFYqKQqNIUhyV6Cc",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAN7D5uZaXxROP-uUKFUjZNRFX5ARyZ4UyGV22iEILh0exDk4NVeERIOtx_nHBOxqoNk7QBxnYHNIb_jdCvei64c_b3J8L-7XobxUL5lcRihBYj61Z-jiMZtzJj2foZiF7WVIpkVyTwD3rfY0zveAcoLvCpfHdYWcMw3Z1fdE688yi7-2S78Z9bd4eIlb6-xWQlg22GPF06RxN2oa1L2vOw62F8q-_Q18l90HHStFYqKQqNIUhyV6Cc"
    ],
    overview: "Our premium executive luxury SUV offers high-end styling, leather interiors, superior air conditioning, and top-tier safety. Handled by our most experienced senior English/Tamil-speaking chauffeurs.",
    idealFor: ["VIP Transfers", "Wedding Luxury Car", "Premium Business Travel", "Luxury Holidays"],
    features: [
      "Plush leather interiors with seat ventilation",
      "Premium surround sound audio system",
      "Advanced air purification system",
      "Extremely polite, suited senior chauffeur"
    ],
    localRentalRate: "₹12,000 for 8 Hrs / 80 Kms (Extra Km: ₹50, Extra Hr: ₹800)",
    outstationRentalRate: "₹50 per Km (Minimum 250 Kms per day + Driver Beta ₹800/day)"
  },
  {
    id: "mercedes-e-class",
    name: "Mercedes Benz E-Class",
    category: "Luxury",
    seats: "4+1 Seats",
    ac: true,
    luggage: "2 Large Bags",
    driverIncluded: true,
    startingPrice: 22000,
    priceUnit: "day",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "The Mercedes-Benz E-Class represents ultimate refinement and luxury passenger status. Ideal for high-profile corporate delegates, premium bridal wedding entry, and VIP pick-ups in Chennai.",
    idealFor: ["Wedding Bridal Car", "VIP Chauffeur Service", "Corporate CEO Travels"],
    features: [
      "Panoramic glass roof and dual zone climatronic",
      "Plush air suspension and whisper-quiet cabin",
      "Multicolor ambient lighting setup",
      "VIP senior chauffeur in formal dress suit"
    ],
    localRentalRate: "₹18,000 for 8 Hrs / 80 Kms (Extra Km: ₹80, Extra Hr: ₹1000)",
    outstationRentalRate: "₹80 per Km (Minimum 250 Kms per day + Driver Beta ₹1000/day)"
  }
];
