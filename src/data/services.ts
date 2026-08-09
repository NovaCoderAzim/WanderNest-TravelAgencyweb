export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name or Material Symbol name
  image: string;
  features: string[];
}

export const services: ServiceItem[] = [
  {
    id: "tour-packages",
    title: "Holiday Tour Packages",
    description: "All-inclusive curated holiday tours designed for absolute comfort. Includes resort booking, guided sightseeing tours, breakfast, and dedicated private vehicles from Chennai to major South Indian destinations.",
    icon: "MapPin",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBPJp31M0w2MLPKPzOUEzpvecvO15byCKgI_TAHwmT8c5GziNkiSNOdfeN8ULTnDlx2YqOYw8MHiEhpZx35Dg5bYCQzvr5QP4Uj37TgIT6AacHdHMOWKm8_Z1JHCtkUw-d_o2V-07r_m5wEAFScAXEqRTFAc0kC8FfBDYYx3xzOqgPu-bByu_Esf1EFAVEwJkXI9nyUc03sDSoJDbHrixGQV1sbA1ig5kQhgVR_hQqPFLDDvfJwgW3",
    features: ["Resort Stay Included", "Doorstep Pickup & Drop", "Curated Sightseeing", "Customizable Itineraries"]
  },
  {
    id: "car-rental",
    title: "Chauffeur Car Rentals",
    description: "Rent clean, well-maintained sedans and SUVs (Dzire, Amaze, Innova Crysta) with professional, polite drivers for your business visits, city commutes, or family getaways.",
    icon: "Car",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAN7D5uZaXxROP-uUKFUjZNRFX5ARyZ4UyGV22iEILh0exDk4NVeERIOtx_nHBOxqoNk7QBxnYHNIb_jdCvei64c_b3J8L-7XobxUL5lcRihBYj61Z-jiMZtzJj2foZiF7WVIpkVyTwD3rfY0zveAcoLvCpfHdYWcMw3Z1fdE688yi7-2S78Z9bd4eIlb6-xWQlg22GPF06RxN2oa1L2vOw62F8q-_Q18l90HHStFYqKQqNIUhyV6Cc",
    features: ["Polite English/Tamil Drivers", "GPS & Audio Systems", "Flexible Hour Blocks", "Zero Hidden Charges"]
  },
  {
    id: "tempo-traveller",
    title: "Tempo Traveller Rentals",
    description: "Perfect for group travel, family gatherings, and pilgrimages. Rent spacious 12-seater, 14-seater, or premium Force Urbania vans equipped with pushback seats and flat-screen TVs.",
    icon: "Users",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfkeoRFQaxlGpSp3WRhMJP3hTJZcQr8Alu7sDexUxmWk47PgMm6uCgqjfohh7lwNUQZTnCaqwfdSNOafHpIbvFrJLjo9X77kafCLGMgO7f6qwb5Srkfi2Xm061eEAhttWZ67alB6xLlnFQeW8m6Lvr_jmov5pTI3v7ux0ZZL18KeBCW8gC5_8l9GdSlTZAM_K3s0aadA4XmzX60HgIyt6MriZiRvR7LjPPdWrvChk7Qu_C4BnsaryL",
    features: ["Pushback Luxury Seats", "LED TV & Audio Systems", "Spacious Luggage Carriers", "Comfortable Suspension"]
  },
  {
    id: "bus-rental",
    title: "Tourist Bus Rentals",
    description: "Coordinate large events, school/college excursions, or corporate conferences with our fleet of 21-seater mini-buses and 40-seater luxury coaches featuring expert driving crews.",
    icon: "Bus",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    features: ["Air Suspension Coaches", "PA Microphone System", "Experienced Bus Drivers", "Large Cargo Under-bays"]
  },
  {
    id: "airport-transfers",
    title: "Airport Pickups & Drops",
    description: "Ensure stress-free airport connections. Punctual, pre-booked pickups and drops from Chennai International Airport (MAA) to any destination in the city or surrounding districts.",
    icon: "PlaneTakeoff",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqMhTLGJHuzyZEfL98n55D8XSI8L6k7z7UVOAUYv_H1HLZTfbj0SiQsGOfmx5Qu5PW8zbFgk5Zz1yv6zosm8EGNIZVwGVv5E56keLINKgnrS2J-pZIjdRBbhSckgDKzxyUmE9F-jEbYXu2gdEHntIZf4NUK8a_wkHnvodGpl5pNNXVFkXMEOyLPfUr5dHKFKUVR19gUsuFtZ_6ozERe6V_raWJ44ZAYk7ZMeOeJB7I1_iTKKLuTQCe",
    features: ["Flight Delay Tracking", "Driver Page Board Welcome", "Luggage Assistance", "24/7 Availability"]
  },
  {
    id: "outstation-travel",
    title: "Outstation Travel & Tours",
    description: "Plan custom outstation road trips from Chennai to Pondicherry, Madurai, Tirupati, Bangalore, or Mysore with flexible multi-day options and flat-rate driver beta packages.",
    icon: "Compass",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhABxPL40PmI6oLg8XaGJmwts2aD2HeiW3Z8StSEaYizHAVSYL2gOZ7Y33tVhDNFip0CSbg_fGvh3cHoHCea_YWTSLEzEGu5-EIjIPfGfE8mvUstR8e7HBlg0Ryb_mHEV-sX20SY9ZaCqfou36bFl1PPsp0FLewV3akNT7kVj1MypPXGOsvFHX7ClqVPn8F9vD_Ib-Q_2BxGXZ2LIkZZHw_D3BUHrPxOzCuOGcy4MAKH5qeHN5nLQV",
    features: ["Interstate Permits Handled", "Round-trip or One-way", "Reliable Highway Drivers", "Anytime Rest Stops"]
  },
  {
    id: "wedding-transportation",
    title: "Wedding Transportation",
    description: "Provide premium logistics for your special day. Luxury cars for the bride & groom, and spacious vans/buses to shuttle your guests comfortably to and from the marriage hall.",
    icon: "Heart",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLG_MZdDpd8RZO3r-Snj0BCERbvClgofBtjD1Gow9EpK09EMXK7cKVBx3GEsqsoOOTECHxNxlcpfsQoXC98yVwTUCXx24xRVr_xQjVok3C_yN6nvl1F2kwI3wB4Dhi2yieFXmZ1_3j6eng_djqY5pQ4UW7hIWIJihnc0qKnkBeCgK_2x3fSxD2BMcAmTL1JzJNty3sL8_zTTJOu3Oyj8ntvcWIly08IE70IP3yDxBKuauXchgTJyyf",
    features: ["Luxury Car Decors Option", "Dedicated Fleet Coordinator", "Punctual Guest Shuttles", "Flexible Event Hours"]
  },
  {
    id: "custom-trip-planning",
    title: "Custom Trip Planning",
    description: "Don't fit into our standard boxes? Tell us your dates, group size, and budget, and our expert travel coordinators will design a customized itinerary tailored specifically for you.",
    icon: "CalendarRange",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuANqXSV35krvyaOoSc6Wsa0xmt-A9bGLlFG_cY5A5xRwfF3mtXtsnEB42wcQIsQ9s6tq6FEdu_rbcoj9IE_ZSG5MCs10QgDHC6MN5pODS4R8lsUcg0PWxGtwieY48td37ZG3_hBdV7iV3RMHNjbGKOI-ysgKbiQziYrnDDRyjuSiZX0WWwVuUo7WRuJyitq4Pht8BIgPuqbUIPJK9Vm9PuLEFwZfWUsB1yhkhrKPNXV5tTvlaEN4jmR",
    features: ["Dedicated Tour Planner", "Flexible Budgeting Options", "Handpicked Hotels & Routes", "24/7 On-Trip Support"]
  }
];
