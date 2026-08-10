"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight, MessageSquare, Compass, ShieldCheck } from "lucide-react";
import { services } from "@/data/services";
import ParallaxHeader from "@/components/ParallaxHeader";
import Magnetic from "@/components/Magnetic";
import { businessConfig } from "@/data/config";

export default function Services() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="pt-24 min-h-screen">
      {/* Page Header */}
      <ParallaxHeader
        imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuAN7D5uZaXxROP-uUKFUjZNRFX5ARyZ4UyGV22iEILh0exDk4NVeERIOtx_nHBOxqoNk7QBxnYHNIb_jdCvei64c_b3J8L-7XobxUL5lcRihBYj61Z-jiMZtzJj2foZiF7WVIpkVyTwD3rfY0zveAcoLvCpfHdYWcMw3Z1fdE688yi7-2S78Z9bd4eIlb6-xWQlg22GPF06RxN2oa1L2vOw62F8q-_Q18l90HHStFYqKQqNIUhyV6Cc"
        imageAlt="Scenic road travel"
        category="Our Capabilities"
        title="WanderNest Services"
        description="From luxury wedding convoys and corporate retreats to airport transfers and weekend tour packages, we deliver comfortable, reliable journeys."
      />

      {/* Alternating Services Layout */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 md:px-margin-desktop max-w-7xl mx-auto flex flex-col gap-12 sm:gap-20">
        {services.map((service, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <motion.div
              key={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12 border-b border-surface-container-highest/30 pb-12 sm:pb-20 last:border-b-0 last:pb-0 ${
                isEven ? "" : "lg:flex-row-reverse"
              }`}
            >
              {/* Image Block */}
              <div className="w-full lg:w-1/2 h-[220px] sm:h-[320px] rounded-2xl overflow-hidden relative shadow-sm border border-surface-container-highest/60">
                <img
                  className="w-full h-full object-cover"
                  src={service.image}
                  alt={service.title}
                />
              </div>

              {/* Text Block */}
              <div className="w-full lg:w-1/2 flex flex-col items-start">
                <div className="bg-primary/5 text-primary p-2.5 sm:p-3 rounded-lg mb-3 sm:mb-4">
                  <Compass className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary mb-3 sm:mb-4">
                  {service.title}
                </h2>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-4 sm:mb-6">
                  {service.description}
                </p>

                {/* Features checklist */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-on-surface font-semibold mb-8 w-full">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="h-4.5 w-4.5 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  <Magnetic>
                    <Link
                      href="/contact"
                      className="bg-secondary hover:bg-secondary/90 text-white font-semibold py-2.5 px-6 rounded-full text-xs shadow-md transition-all duration-200 hover-glow flex items-center gap-1.5"
                    >
                      Enquire Now
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Magnetic>
                  <a
                    href={`https://wa.me/${businessConfig.phoneRaw}?text=Hi%20WanderNest%20Travels,%20I'm%20interested%20in%20your%20service:%20${encodeURIComponent(service.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 px-6 rounded-full text-xs flex items-center justify-center gap-1 transition-colors"
                  >
                    <MessageSquare className="h-4 w-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Trust guarantees banner */}
      <section className="bg-surface-container-low py-20 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-4">
          <ShieldCheck className="h-10 w-10 text-primary mb-2" />
          <h2 className="font-display text-2xl font-bold text-primary">Need a Customized Travel Package?</h2>
          <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed max-w-xl">
            If you need a specific vehicle combination, multi-stop pilgrimage tours, or VIP airport security transfers, our managers can plan it immediately.
          </p>
          <Link
            href="/contact"
            className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-3 rounded-full text-xs shadow mt-2"
          >
            CREATE CUSTOM PLAN
          </Link>
        </div>
      </section>
    </div>
  );
}
