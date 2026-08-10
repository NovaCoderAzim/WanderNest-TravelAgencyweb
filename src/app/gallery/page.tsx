"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, X, ChevronLeft, ChevronRight, Compass } from "lucide-react";
import { galleryItems } from "@/data/gallery";
import ParallaxHeader from "@/components/ParallaxHeader";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ["All", "Destinations", "Vehicles", "Trips", "Hotels", "Travel"];

  // Filter gallery items based on selected category
  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory.toLowerCase());

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div className="pt-24 min-h-screen">
      {/* Page Header */}
      <ParallaxHeader
        imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDhABxPL40PmI6oLg8XaGJmwts2aD2HeiW3Z8StSEaYizHAVSYL2gOZ7Y33tVhDNFip0CSbg_fGvh3cHoHCea_YWTSLEzEGu5-EIjIPfGfE8mvUstR8e7HBlg0Ryb_mHEV-sX20SY9ZaCqfou36bFl1PPsp0FLewV3akNT7kVj1MypPXGOsvFHX7ClqVPn8F9vD_Ib-Q_2BxGXZ2LIkZZHw_D3BUHrPxOzCuOGcy4MAKH5qeHN5nLQV"
        imageAlt="Beautiful travel landscapes"
        category="Moments in Focus"
        title="Travel Gallery"
        description="A visual storytelling of our trips, high-quality vehicle fleets, standard resort partnerships, and real holiday memories created across South India."
      />

      {/* Gallery Catalog & Filters */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 md:px-margin-desktop max-w-7xl mx-auto">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center items-center gap-1.5 sm:gap-2 mb-8 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                handleCloseLightbox(); // Reset lightbox index just in case
              }}
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

        {/* Masonry Grid */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={() => handleOpenLightbox(index)}
              className="relative break-inside-avoid rounded-2xl overflow-hidden hover-lift group cursor-pointer bg-white border border-white/50 shadow-md"
            >
              <img
                className="w-full h-auto object-cover"
                src={item.src}
                alt={item.alt}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-between p-4 text-white">
                <div className="self-end bg-white/20 p-2 rounded-full backdrop-blur-sm">
                  <Eye className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[9px] bg-secondary text-white font-bold px-2 py-0.5 rounded-full uppercase tracking-wider block w-fit mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-display font-semibold text-sm sm:text-base leading-snug">
                    {item.title}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseLightbox}
            className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4"
          >
            {/* Top Bar */}
            <div className="absolute top-6 left-6 right-6 flex justify-between items-center text-white z-50">
              <div>
                <h4 className="font-display font-bold text-lg leading-tight">
                  {filteredItems[lightboxIndex].title}
                </h4>
                <p className="text-[10px] sm:text-xs text-zinc-400 capitalize">
                  Category: {filteredItems[lightboxIndex].category}
                </p>
              </div>
              <button
                onClick={handleCloseLightbox}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close lightbox"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Slider */}
            <div className="relative max-w-4xl max-h-[75vh] w-full h-full flex items-center justify-center">
              {/* Previous Button */}
              <button
                onClick={handlePrevImage}
                className="absolute left-2 p-2.5 bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors z-20 border border-white/10"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="w-full h-full relative"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  className="w-full h-full object-contain rounded"
                  src={filteredItems[lightboxIndex].src}
                  alt={filteredItems[lightboxIndex].alt}
                />
              </motion.div>

              {/* Next Button */}
              <button
                onClick={handleNextImage}
                className="absolute right-2 p-2.5 bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors z-20 border border-white/10"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Indicator */}
            <div className="absolute bottom-6 text-xs text-zinc-400 font-bold z-50">
              {lightboxIndex + 1} / {filteredItems.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
