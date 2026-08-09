"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Star, ArrowRight, Clock, ShieldCheck, Compass } from "lucide-react";
import { packages } from "@/data/packages";
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

export default function Packages() {
  const [activeType, setActiveType] = useState("All");
  const [activeDuration, setActiveDuration] = useState("All");
  const [activeBudget, setActiveBudget] = useState("All");

  const tripTypes = ["All", "Family Trip", "Honeymoon Escape", "Pilgrimage Tour", "Weekend Getaway"];
  const durations = ["All", "1 Day", "2 Days", "3 Days"];
  const budgets = ["All", "Under ₹8,000", "₹8,000 - ₹10,000", "Over ₹10,000"];

  // Filter packages based on selected filters
  const filteredPackages = packages.filter((pkg) => {
    // 1. Filter by Trip Type
    if (activeType !== "All") {
      if (activeType === "Family Trip") {
        const familyPackages = ["ooty-escape", "kodaikanal-getaway", "madurai-temple-trail", "yercaud-loop-road-escape", "kanyakumari-lands-end-explorer", "mahabalipuram-shore-heritage"];
        if (!familyPackages.includes(pkg.id)) return false;
      }
      if (activeType === "Honeymoon Escape") {
        const honeymoonPackages = ["kodaikanal-getaway", "ooty-escape", "pondicherry-weekend", "yercaud-loop-road-escape"];
        if (!honeymoonPackages.includes(pkg.id)) return false;
      }
      if (activeType === "Pilgrimage Tour") {
        const pilgrimagePackages = ["madurai-temple-trail", "rameswaram-dhanushkodi-pilgrimage", "kanyakumari-lands-end-explorer"];
        if (!pilgrimagePackages.includes(pkg.id)) return false;
      }
      if (activeType === "Weekend Getaway") {
        const weekendPackages = ["pondicherry-weekend", "yercaud-loop-road-escape", "mahabalipuram-shore-heritage"];
        if (!weekendPackages.includes(pkg.id)) return false;
      }
    }

    // 2. Filter by Duration
    if (activeDuration !== "All") {
      if (activeDuration === "1 Day" && !pkg.duration.includes("1 Day")) return false;
      if (activeDuration === "2 Days" && !pkg.duration.includes("2 Days")) return false;
      if (activeDuration === "3 Days" && !pkg.duration.includes("3 Days")) return false;
    }

    // 3. Filter by Budget
    if (activeBudget !== "All") {
      if (activeBudget === "Under ₹8,000" && pkg.startingPrice >= 8000) return false;
      if (activeBudget === "₹8,000 - ₹10,000" && (pkg.startingPrice < 8000 || pkg.startingPrice > 10000)) return false;
      if (activeBudget === "Over ₹10,000" && pkg.startingPrice <= 10000) return false;
    }

    return true;
  });

  return (
    <div className="pt-24 min-h-screen">
      {/* Page Header */}
      <ParallaxHeader
        imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDBPJp31M0w2MLPKPzOUEzpvecvO15byCKgI_TAHwmT8c5GziNkiSNOdfeN8ULTnDlx2YqOYw8MHiEhpZx35Dg5bYCQzvr5QP4Uj37TgIT6AacHdHMOWKm8_Z1JHCtkUw-d_o2V-07r_m5wEAFScAXEqRTFAc0kC8FfBDYYx3xzOqgPu-bByu_Esf1EFAVEwJkXI9nyUc03sDSoJDbHrixGQV1sbA1ig5kQhgVR_hQqPFLDDvfJwgW3"
        imageAlt="Scenic view of Ooty hill station"
        category="Curated Journeys"
        title="Tour Packages"
        description="Book fully organized tours with premium resort stays, guided sightseeing, and private vehicles starting directly from your Chennai doorstep."
      />

      {/* Catalog Filters and Grid */}
      <section className="py-20 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="glass-card-light rounded-2xl p-5 border border-white/60 h-fit flex flex-col gap-6 shadow-xl relative z-10">
            <h3 className="font-display font-bold text-lg text-primary border-b border-surface-container/60 pb-2">
              Filter Packages
            </h3>

            {/* Filter 1: Trip Type */}
            <div>
              <h4 className="text-xs font-bold text-on-background uppercase tracking-wider mb-3">Trip Type</h4>
              <div className="flex flex-col gap-2">
                {tripTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setActiveType(type)}
                    className={`text-left text-xs font-semibold px-3 py-2 rounded transition-colors ${
                      activeType === type
                        ? "bg-primary/5 text-primary border-l-4 border-primary"
                        : "text-on-surface-variant hover:bg-surface-container-low"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter 2: Duration */}
            <div>
              <h4 className="text-xs font-bold text-on-background uppercase tracking-wider mb-3">Duration</h4>
              <div className="flex flex-col gap-2">
                {durations.map((dur) => (
                  <button
                    key={dur}
                    onClick={() => setActiveDuration(dur)}
                    className={`text-left text-xs font-semibold px-3 py-2 rounded transition-colors ${
                      activeDuration === dur
                        ? "bg-primary/5 text-primary border-l-4 border-primary"
                        : "text-on-surface-variant hover:bg-surface-container-low"
                    }`}
                  >
                    {dur}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter 3: Budget */}
            <div>
              <h4 className="text-xs font-bold text-on-background uppercase tracking-wider mb-3">Budget Range</h4>
              <div className="flex flex-col gap-2">
                {budgets.map((bgt) => (
                  <button
                    key={bgt}
                    onClick={() => setActiveBudget(bgt)}
                    className={`text-left text-xs font-semibold px-3 py-2 rounded transition-colors ${
                      activeBudget === bgt
                        ? "bg-primary/5 text-primary border-l-4 border-primary"
                        : "text-on-surface-variant hover:bg-surface-container-low"
                    }`}
                  >
                    {bgt}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Package Grid */}
          <div className="lg:col-span-3">
            <motion.div
              key={`${activeType}-${activeDuration}-${activeBudget}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredPackages.map((pkg) => (
                <motion.div
                  key={pkg.id}
                  variants={itemVariants}
                  className="glass-card-light rounded-2xl overflow-hidden hover-lift flex flex-col justify-between group border border-white/50"
                >
                  <div className="relative h-44 w-full overflow-hidden bg-zinc-100">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={pkg.itinerary[0].image || pkg.gallery[0]}
                      alt={pkg.name}
                    />
                    <div className="absolute bottom-3 left-3 bg-secondary text-white px-2.5 py-0.5 rounded-full text-xs font-bold shadow-sm">
                      From ₹{pkg.startingPrice.toLocaleString()}
                    </div>
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-xs font-bold">
                      {pkg.duration}
                    </div>
                  </div>

                  <div className="p-4 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-display font-bold text-base text-on-background line-clamp-1">{pkg.name}</h3>
                        <div className="flex items-center gap-0.5 text-amber-500 text-xs font-bold">
                          <Star className="h-3 w-3 fill-amber-500" />
                          {pkg.rating}
                        </div>
                      </div>
                      <p className="text-xs text-on-surface-variant line-clamp-2 leading-relaxed mb-4">
                        {pkg.summary}
                      </p>
                    </div>

                    <div>
                      <ul className="text-[10px] text-on-surface-variant flex flex-col gap-1.5 border-t border-surface-container/40 pt-3 mb-4">
                        {pkg.inclusions.slice(0, 3).map((inc, i) => (
                          <li key={i} className="flex items-start gap-1">
                            <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{inc}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        href={`/packages/${pkg.id}`}
                        className="w-full bg-secondary hover:bg-secondary/90 text-white text-center py-2 rounded-full font-bold text-xs flex items-center justify-center gap-1.5 transition-all duration-300"
                      >
                        VIEW DETAILS
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {filteredPackages.length === 0 && (
              <div className="glass-card-light rounded-2xl p-8 border border-white/60 text-center shadow-xl">
                <Compass className="h-10 w-10 text-primary mx-auto mb-3" />
                <h4 className="font-display font-bold text-base text-on-background mb-1">No Matching Packages Found</h4>
                <p className="text-xs text-on-surface-variant mb-4">We can customize a special tour package just for you. Send us your parameters!</p>
                <Link
                  href="/contact"
                  className="bg-secondary hover:bg-secondary/90 text-white font-semibold py-2 px-6 rounded-full text-xs transition-colors"
                >
                  GET A CUSTOM QUOTE
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
