"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowRight, Compass } from "lucide-react";
import { destinations } from "@/data/destinations";
import ParallaxHeader from "@/components/ParallaxHeader";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" as const } },
};

export default function Destinations() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Hill Stations", "Coastal & Beaches", "Pilgrimage & Heritage", "Weekend Getaways"];

  // Filter logic matching the tags of each destination
  const filteredDestinations = destinations.filter((dest) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Hill Stations") {
      return dest.bestFor.includes("Hill Stations") || dest.id === "yercaud" || dest.id === "kodaikanal";
    }
    if (activeCategory === "Coastal & Beaches") {
      return dest.name === "Pondicherry" || dest.name === "Kanyakumari" || dest.name === "Mahabalipuram";
    }
    if (activeCategory === "Pilgrimage & Heritage") {
      return dest.bestFor.includes("Pilgrimage") || dest.bestFor.includes("Heritage") || dest.id === "rameswaram" || dest.id === "madurai";
    }
    if (activeCategory === "Weekend Getaways") {
      return dest.bestFor.includes("Weekend Getaways") || dest.id === "pondicherry" || dest.id === "mahabalipuram" || dest.id === "yercaud";
    }
    return true;
  });

  return (
    <div className="pt-24 min-h-screen">
      {/* Page Header */}
      <ParallaxHeader
        imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDBPJp31M0w2MLPKPzOUEzpvecvO15byCKgI_TAHwmT8c5GziNkiSNOdfeN8ULTnDlx2YqOYw8MHiEhpZx35Dg5bYCQzvr5QP4Uj37TgIT6AacHdHMOWKm8_Z1JHCtkUw-d_o2V-07r_m5wEAFScAXEqRTFAc0kC8FfBDYYx3xzOqgPu-bByu_Esf1EFAVEwJkXI9nyUc03sDSoJDbHrixGQV1sbA1ig5kQhgVR_hQqPFLDDvfJwgW3"
        imageAlt="Scenic mountain landscape"
        category="Explore South India"
        title="Popular Destinations"
        description="Choose your next escape. From misty blue mountains and tranquil lakes to heritage stone temples and golden shores, discover the best of Tamil Nadu."
      />

      {/* Catalog Grid */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 md:px-margin-desktop max-w-7xl mx-auto">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center items-center gap-1.5 sm:gap-2 mb-8 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-primary text-white shadow-sm"
                  : "bg-white hover:bg-surface-container-high text-on-surface-variant border border-outline-variant/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Catalog list */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredDestinations.map((dest) => (
            <motion.div
              key={dest.id}
              variants={itemVariants}
              className="glass-card-light rounded-2xl overflow-hidden hover-lift flex flex-col justify-between group border border-white/50"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={dest.image}
                  alt={dest.name}
                />
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-xs font-bold">
                  {dest.duration}
                </div>
              </div>

              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-xl text-on-background mb-1">{dest.name}</h3>
                  <p className="text-xs text-primary font-semibold italic mb-3">{dest.tagline}</p>
                  <p className="text-xs text-on-surface-variant line-clamp-3 leading-relaxed mb-4">
                    {dest.overview}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {dest.bestFor.map((b, i) => (
                      <span key={i} className="bg-primary/5 text-primary text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                        {b}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/destinations/${dest.id}`}
                    className="w-full bg-primary/5 hover:bg-primary hover:text-white text-primary text-center py-2 rounded-full font-bold text-xs flex items-center justify-center gap-1.5 transition-all duration-300"
                  >
                    EXPLORE DETAILS
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
