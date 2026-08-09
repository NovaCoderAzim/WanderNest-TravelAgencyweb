"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Compass, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "@/components/Magnetic";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "Packages", href: "/packages" },
  { label: "Fleet", href: "/fleet" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 glass-nav shadow-sm border-b border-surface-container-highest/20"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className={`p-1.5 rounded-full hover:rotate-12 transition-transform duration-300 ${
              scrolled
                ? "bg-primary text-white"
                : "bg-white/10 text-white backdrop-blur-md border border-white/25"
            }`}>
              <svg viewBox="0 0 100 100" className="h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="6" />
                <line x1="50" y1="8" x2="50" y2="18" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                <line x1="50" y1="82" x2="50" y2="92" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                <line x1="8" y1="50" x2="18" y2="50" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                <line x1="82" y1="50" x2="92" y2="50" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                <path d="M48 28 L68 62 L50 54 L32 62 Z" fill="currentColor" />
                <path d="M50 28 L50 54" stroke="currentColor" strokeWidth="2.5" />
                <path d="M25 72 C40 64, 60 64, 75 72" stroke="#ffab69" strokeWidth="6" strokeLinecap="round" />
              </svg>
            </div>
            <span className={`font-display text-2xl font-bold tracking-tight transition-colors ${
              scrolled
                ? "text-primary"
                : "text-white text-shadow-glow"
            }`}>
              WanderNest
            </span>
          </Link>
 
          {/* Desktop Nav links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative font-medium text-sm transition-all duration-200 select-none outline-none ${
                    scrolled
                      ? isActive
                        ? "text-primary font-bold"
                        : "text-on-surface-variant hover:text-primary"
                      : isActive
                        ? "text-secondary-container font-semibold text-shadow-glow"
                        : "text-white/95 hover:text-secondary-container text-shadow-glow"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeIndicator"
                      className={`absolute -bottom-1 left-0 w-full h-[2px] rounded-full ${
                        scrolled ? "bg-secondary" : "bg-secondary-container"
                      }`}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>
 
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Magnetic>
              <Link
                href="/contact"
                className="px-6 py-2.5 rounded-full text-sm font-semibold shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2 bg-secondary text-white hover:bg-secondary-container"
              >
                <PhoneCall className="h-4 w-4" />
                Get a Quote
              </Link>
            </Magnetic>
          </div>
 
          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-full hover:bg-surface-container/10 transition-colors ${
              scrolled ? "text-primary" : "text-white text-shadow-glow"
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>
 
      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden bg-background pt-24 px-margin-mobile flex flex-col justify-between pb-8"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, idx) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={link.label}
                  >
                    <Link
                      href={link.href}
                      className={`text-xl font-medium block py-2 select-none outline-none ${
                        isActive
                          ? "text-secondary font-bold border-l-4 border-secondary pl-3"
                          : "text-on-surface-variant pl-3"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
 
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-4"
            >
              <Link
                href="/contact"
                className="bg-secondary text-white py-3 rounded-full text-center font-semibold text-lg flex items-center justify-center gap-2 hover:bg-secondary-container"
              >
                <PhoneCall className="h-5 w-5" />
                Get a Quote
              </Link>
              <div className="text-center text-xs text-on-surface-variant">
                Plan the trip. We'll handle the journey.
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
