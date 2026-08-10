"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Info, Users, ShieldCheck, HelpCircle } from "lucide-react";
import { vehicles } from "@/data/vehicles";
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

export default function Fleet() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Sedan", "SUV", "Tempo Traveller", "Van", "Bus", "Luxury"];

  // Filter vehicles based on active category
  const filteredVehicles = activeCategory === "All"
    ? vehicles
    : vehicles.filter(v => v.category === activeCategory);

  return (
    <div className="pt-24 min-h-screen">
      {/* Page Header */}
      <ParallaxHeader
        imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDTjX44g6NfLXhaKO5MWXXQKR1FZOWt7EYv3VFXVXtut70JQMUCFdVRku5egmHZoZWG1NKemADnDoYkUfJOQxQVjW5ibFSskJFMohjxiJhfg4Cba2VuHH41ZOEduhYgdjLmsjmkhogBw6SUIgSk1m-egBmk8Qr4HAlxxEnBo5OAg0hBH8AeTaljKrUF2nHQyKz5AvTJ9lWQ6VViTxWFVRKlaLyirLrnxUgTxQTi51bxkELJaN72mUac"
        imageAlt="Toyota Innova Crysta parked outside"
        category="Our Transport Fleet"
        title="Vehicle Rental Services"
        description="Rent spacious, air-conditioned, and sanitized vehicles with professional chauffeurs for city commutes, airport transfers, corporate events, and outstation trips from Chennai."
      />

      {/* Fleet Catalog and Filters */}
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

        {/* Vehicle Catalog Grid */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredVehicles.map((vehicle) => (
            <motion.div
              key={vehicle.id}
              variants={itemVariants}
              className="glass-card-light rounded-2xl overflow-hidden hover-lift flex flex-col justify-between group border border-white/50"
            >
              <div className="relative h-44 w-full overflow-hidden bg-zinc-100">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={vehicle.image}
                  alt={vehicle.name}
                />
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                  {vehicle.seats}
                </div>
              </div>

              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display font-bold text-lg text-on-background">{vehicle.name}</h3>
                    <span className="bg-primary/5 text-primary text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                      {vehicle.category}
                    </span>
                  </div>
                  <p className="text-xs text-on-surface-variant line-clamp-2 leading-relaxed mb-4">
                    {vehicle.overview}
                  </p>

                  {/* Specifications */}
                  <div className="grid grid-cols-2 gap-2 text-[10px] text-on-surface-variant font-medium border-t border-surface-container/60 pt-3 mb-4">
                    <div className="flex items-center gap-1">
                      <Check className="h-3 w-3 text-emerald-600" />
                      {vehicle.ac ? "AC Coach" : "Non-AC"}
                    </div>
                    <div className="flex items-center gap-1">
                      <Check className="h-3 w-3 text-emerald-600" />
                      {vehicle.driverIncluded ? "With Driver" : "Self Drive"}
                    </div>
                    <div className="flex items-center gap-1 col-span-2">
                      <Check className="h-3 w-3 text-emerald-600" />
                      <span className="line-clamp-1">{vehicle.luggage}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-baseline justify-between border-t border-surface-container/60 pt-3 mb-4">
                    <span className="text-[10px] text-on-surface-variant uppercase tracking-wider font-bold">Rates starting</span>
                    <span className="text-base font-bold text-primary">₹{vehicle.startingPrice.toLocaleString()} <span className="text-[10px] font-normal text-on-surface-variant">/ {vehicle.priceUnit}</span></span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      href={`/fleet/${vehicle.id}`}
                      className="bg-primary/5 hover:bg-primary hover:text-white text-primary text-center py-2 rounded-full font-bold text-xs transition-all duration-200"
                    >
                      VIEW DETAIL
                    </Link>
                    <Link
                      href="/contact"
                      className="bg-secondary hover:bg-secondary/90 text-white text-center py-2 rounded-full font-bold text-xs transition-all duration-200"
                    >
                      GET QUOTE
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Fleet Standards & Guarantees */}
      <section className="bg-surface-container-low py-20 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-xs font-bold text-secondary uppercase tracking-wider block mb-2">Quality Standards</span>
          <h2 className="font-display text-3xl font-bold text-primary mb-12">Our Rental Vehicle Promises</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="glass-card-light rounded-2xl p-6 shadow-md border border-white/50 flex items-start gap-4 hover-lift">
              <div className="bg-primary/5 p-2 rounded text-primary mt-1">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-on-background mb-2">Completely Insured & Permitted</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Every sedan, SUV, van, and tourist coach carries standard commercial tourism permits, fully paid up-to-date comprehensive insurance coverages, and fitness certificates.
                </p>
              </div>
            </div>

            <div className="glass-card-light rounded-2xl p-6 shadow-md border border-white/50 flex items-start gap-4 hover-lift">
              <div className="bg-primary/5 p-2 rounded text-primary mt-1">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-on-background mb-2">Professional Uniformed Chauffeurs</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Our drivers undergo professional background screening, road test evaluations, and customer etiquette training. All drivers speak Tamil and English.
                </p>
              </div>
            </div>

            <div className="glass-card-light rounded-2xl p-6 shadow-md border border-white/50 flex items-start gap-4 hover-lift">
              <div className="bg-primary/5 p-2 rounded text-primary mt-1">
                <Info className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-on-background mb-2">Transparent Kilometre Billing</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  No hidden state tax fees, permit surprises, or driver boarding allowances. We give full breakdown sheets beforehand, and final bills match parameters exactly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
