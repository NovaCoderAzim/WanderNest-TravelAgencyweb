"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxHeaderProps {
  imageSrc: string;
  imageAlt: string;
  category: string;
  title: string;
  description: string;
}

export default function ParallaxHeader({
  imageSrc,
  imageAlt,
  category,
  title,
  description,
}: ParallaxHeaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position of the header container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Background image moves slower than scroll (parallax effect)
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  // Background opacity fades slightly on scroll for readability depth
  const opacity = useTransform(scrollYProgress, [0, 1], [0.75, 0.5]);

  return (
    <section
      ref={containerRef}
      className="bg-primary text-white py-12 sm:py-16 text-center relative overflow-hidden min-h-[220px] sm:min-h-[240px] flex items-center justify-center"
    >
      <div className="absolute inset-0 z-0">
        <motion.div
          style={{ opacity }}
          className="absolute inset-0 bg-primary z-10"
        />
        <motion.img
          style={{ y }}
          className="w-full h-full object-cover absolute inset-0 z-0 scale-110 origin-bottom"
          src={imageSrc}
          alt={imageAlt}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-margin-mobile">
        <span className="text-[11px] sm:text-xs font-bold text-secondary uppercase tracking-wider block mb-2">
          {category}
        </span>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3">
          {title}
        </h1>
        <p className="text-xs sm:text-sm text-[#ebe1d6]/85 leading-relaxed max-w-xl mx-auto px-2 sm:px-0">
          {description}
        </p>
      </div>
    </section>
  );
}
