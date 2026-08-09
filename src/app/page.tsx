"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Users,
  MapPin,
  ArrowRight,
  Star,
  Car,
  Check,
  ChevronDown,
  Clock,
  Shield,
  Heart,
  Award,
  Users2,
  ChevronLeft,
  ChevronRight,
  Search,
  Sparkles,
  PlaneTakeoff,
  TrendingUp,
  X,
  Compass,
} from "lucide-react";

// Data imports
import { destinations } from "@/data/destinations";
import { packages } from "@/data/packages";
import { vehicles } from "@/data/vehicles";
import { services } from "@/data/services";
import { galleryItems } from "@/data/gallery";
import { businessConfig } from "@/data/config";
import Magnetic from "@/components/Magnetic";

export default function Home() {
  // States for interactive UI elements
  const [activeFleetCategory, setActiveFleetCategory] = useState<string>("All");
  const [activeFAQIndex, setActiveFAQIndex] = useState<number | null>(null);
  const [enquirySuccess, setEnquirySuccess] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Hero background images slideshow
  const heroImages = [
    "/assets/yeskay1211-hills-2836301.jpg",
    "/assets/1-meenakshi-amman-temple-madurai-tamil-nadu-attr-hero.jpg",
    "/assets/Thanjavur-Image.jpg",
    "/assets/128929-water-body_of_water-water_resources-watercourse-nature-3840x2160.jpg",
    "/assets/photo-1501785888041-af3ef285b470.avif",
    "/assets/photo-1476610182048-b716b8518aae.avif",
    "/assets/Destination-OIZNG.jpg",
    "/assets/1_kyeXXk2JjoU6JtvEHslAvQ.jpg",
    "/assets/istockphoto-537064629-612x612.jpg",
    "/assets/images (1).jpg"
  ];

  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroImages.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  // Form states
  const [from, setFrom] = useState("Chennai");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [travellers, setTravellers] = useState("2");
  const [tripType, setTripType] = useState("Family Trip");

  // Handler for enquiry submissions
  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnquirySuccess(true);
  };

  // Filtered vehicles based on category selection
  const filteredVehicles = activeFleetCategory === "All"
    ? vehicles
    : vehicles.filter(v => v.category === activeFleetCategory);

  // Fleet Categories
  const fleetCategories = ["All", "Sedan", "SUV", "Tempo Traveller", "Van", "Bus", "Luxury"];

  // Testimonials (12 reviews for infinite marquee)
  const testimonials = [
    {
      name: "Priya S.",
      location: "Chennai",
      rating: 5,
      tripType: "Family Trip",
      review: "Booked a Toyota Innova Crysta for our Ooty family trip. The vehicle was clean, the driver was punctual, extremely polite on mountain roads, and the entire coordination was handled smoothly.",
    },
    {
      name: "Ramesh Kumar",
      location: "Madurai",
      rating: 5,
      tripType: "Pilgrimage Tour",
      review: "Our Tempo Traveller booking for the Rameswaram pilgrimage was excellent. Reasonable price, transparent billing, and a well-maintained vehicle with working AC throughout.",
    },
    {
      name: "Deepak & Anjali",
      location: "Chennai",
      rating: 5,
      tripType: "Honeymoon Trip",
      review: "The Kodaikanal honeymoon package was unforgettable. The resort was stunning with misty forest views, and the private sedan driver knew all the scenic spots. Highly recommended!",
    },
    {
      name: "Karthik Raja",
      location: "Chennai",
      rating: 5,
      tripType: "Corporate Outing",
      review: "Excellent service for our team outing of 35 people to Pondicherry. The luxury bus was clean and comfortable, and the coordinator kept in touch constantly.",
    },
    {
      name: "Sunitha Nair",
      location: "Coimbatore",
      rating: 5,
      tripType: "Family Weekend",
      review: "We booked a swift dzire for a quick weekend drive to Yercaud. The booking process was simple and transparent. The driver was extremely professional and polite.",
    },
    {
      name: "Vikram & Sneha",
      location: "Chennai",
      rating: 5,
      tripType: "Heritage Tour",
      review: "Loved the Mahabalipuram day trip package. The guide provided rich historic context, and the vehicle was pristine. Highly professional travel coordinators!",
    },
    {
      name: "Dr. Anand",
      location: "Bangalore",
      rating: 5,
      tripType: "Temple Visit",
      review: "Very smooth arrangement for Madurai and Thanjavur temples. Highly polite staff and clean sedan provided. I will definitely book again with WanderNest.",
    },
    {
      name: "Shalini Sen",
      location: "Kolkata",
      rating: 5,
      tripType: "Solo Adventure",
      review: "Travelled to Munnar hills from Chennai. Safe, comfortable, and well-managed resort booking. The driver was friendly and shared great local dining tips.",
    },
    {
      name: "Rajesh M.",
      location: "Chennai",
      rating: 5,
      tripType: "Airport Transfer",
      review: "Reliable pickup and drop-off service. Punctual, neat luxury sedan, and polite driver. Outstanding business travel logistics coordination.",
    },
    {
      name: "Manoj Prasanna",
      location: "Trichy",
      rating: 5,
      tripType: "Family Getaway",
      review: "Wonderful 3-day trip to Kanyakumari. The resort stay booked by them had sea views, and the Innova was very clean. Perfect organization by the team!",
    },
    {
      name: "Divya Bharathi",
      location: "Chennai",
      rating: 5,
      tripType: "Friends Escape",
      review: "Booked a tempo traveller for our college friends' trip to Pondicherry. Amazing sound system, very spacious, and super friendly driver!",
    },
    {
      name: "Abdul Rahim",
      location: "Chennai",
      rating: 5,
      tripType: "Family Visit",
      review: "Professional, fair pricing, and excellent condition vehicle. Travel coordinators are available 24/7. Will recommend WanderNest to my friends.",
    },
  ];

  // FAQs
  const faqs = [
    {
      question: "Do you provide vehicles with drivers?",
      answer: "Yes, all our vehicle rentals come with experienced, professional chauffeurs. We do not provide self-drive rentals to ensure maximum safety and convenience for our travellers."
    },
    {
      question: "Do you offer outstation rentals?",
      answer: "Yes, we specialize in outstation rentals from Chennai to destinations across Tamil Nadu, Karnataka, Andhra Pradesh, and Kerala. Interstate permits and toll arrangements are managed by us."
    },
    {
      question: "Can I customize a package?",
      answer: "Absolutely! All our tour packages are fully customizable. You can modify the duration, choice of hotels, destinations, and vehicle type to suit your personal preferences and budget."
    },
    {
      question: "Do you provide airport pickup and drop?",
      answer: "Yes, we provide 24/7 airport transfers to and from Chennai International Airport. Flight schedules are tracked in real-time to ensure timely arrivals."
    },
    {
      question: "Do you provide tempo travellers?",
      answer: "Yes, we maintain a fleet of clean 12-seater, 14-seater Tempo Travellers and premium Force Urbania vans, perfect for larger families and group travel."
    }
  ];

  // Animation variants
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="overflow-x-hidden min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative h-[95vh] flex items-center justify-center pt-20 px-margin-mobile md:px-margin-desktop overflow-hidden">
        {/* Background Zoom image slideshow */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-transparent to-background z-10"></div>
          <AnimatePresence mode="wait">
            <motion.img
              key={bgIndex}
              src={heroImages[bgIndex]}
              alt="WanderNest beautiful travel backdrop"
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1.08 }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { duration: 1.2 },
                scale: { duration: 10, ease: "linear" }
              }}
              className="w-full h-full object-cover absolute inset-0"
            />
          </AnimatePresence>
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col items-center justify-center text-center mt-10">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#006d77]/20 text-[#00535b] border border-[#006d77]/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-secondary" />
            WanderNest Travels
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-on-background tracking-tight max-w-4xl leading-[1.1] mb-6"
          >
            YOUR NEXT ADVENTURE <br className="hidden md:inline" /> STARTS HERE.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-on-surface-variant max-w-2xl font-sans mb-8 leading-relaxed"
          >
            Comfortable journeys, reliable vehicles and memorable trips from Chennai to breathtaking destinations across South India.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Magnetic>
              <Link
                href="/packages"
                className="bg-secondary hover:bg-secondary/95 text-white px-8 py-3.5 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-sm flex items-center justify-center gap-2"
              >
                EXPLORE PACKAGES
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Magnetic>
            <Link
              href="/fleet"
              className="bg-white hover:bg-surface-container-low text-primary border border-primary/20 px-8 py-3.5 rounded-full font-semibold shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-sm"
            >
              RENT A VEHICLE
            </Link>
          </motion.div>

          {/* Supporting badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="glass-card-light floating-element max-w-lg w-full p-4 rounded-2xl border border-white/60 text-center grid grid-cols-3 gap-6 sm:gap-12"
          >
            <div>
              <div className="text-xl sm:text-2xl font-bold text-primary">10+ Yrs</div>
              <div className="text-[10px] sm:text-xs text-on-surface-variant uppercase tracking-wider font-semibold">Experience</div>
            </div>
            <div className="border-x border-on-surface-variant/10">
              <div className="text-xl sm:text-2xl font-bold text-primary">10K+</div>
              <div className="text-[10px] sm:text-xs text-on-surface-variant uppercase tracking-wider font-semibold">Travellers</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-primary">24/7</div>
              <div className="text-[10px] sm:text-xs text-on-surface-variant uppercase tracking-wider font-semibold">Support</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. TRIP ENQUIRY WIDGET */}
      <section className="relative z-30 max-w-5xl mx-auto px-margin-mobile -mt-16 md:-mt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="glass-card-light rounded-2xl p-6 md:p-8 shadow-xl border border-white/60"
        >
          <AnimatePresence mode="wait">
            {!enquirySuccess ? (
              <motion.form
                key="form"
                onSubmit={handleEnquirySubmit}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end"
              >
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-on-surface-variant flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-primary" />
                    FROM
                  </label>
                  <input
                    type="text"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    className="w-full bg-white border border-outline-variant/60 rounded-md px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none text-on-background font-medium"
                    placeholder="Depart City"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-on-surface-variant flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-primary" />
                    DESTINATION
                  </label>
                  <select
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    className="w-full bg-white border border-outline-variant/60 rounded-md px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none text-on-background font-medium"
                    required
                  >
                    <option value="" disabled>Select Destination</option>
                    {destinations.map(d => (
                      <option key={d.id} value={d.name}>{d.name}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-on-surface-variant flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-primary" />
                    TRAVEL DATE
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-white border border-outline-variant/60 rounded-md px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none text-on-background font-medium"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-on-surface-variant flex items-center gap-1">
                    <Users className="h-3.5 w-3.5 text-primary" />
                    TRAVELLERS
                  </label>
                  <select
                    value={travellers}
                    onChange={(e) => setTravellers(e.target.value)}
                    className="w-full bg-white border border-outline-variant/60 rounded-md px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none text-on-background font-medium"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3-5">3 - 5 People</option>
                    <option value="6-9">6 - 9 People</option>
                    <option value="10+">10+ Group</option>
                  </select>
                </div>
                <div className="mt-4 lg:mt-0">
                  <Magnetic className="w-full inline-block">
                    <button
                      type="submit"
                      className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold py-2.5 rounded-full shadow-sm hover:shadow transition-colors flex items-center justify-center gap-2 text-sm cursor-pointer h-[42px]"
                    >
                      <Search className="h-4 w-4" />
                      GET A QUOTE
                    </button>
                  </Magnetic>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-4 flex flex-col items-center justify-center gap-2 text-primary"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-2">
                  <Check className="h-6 w-6 stroke-[3]" />
                </div>
                <h3 className="font-display font-bold text-xl">Request Submitted Successfully!</h3>
                <p className="text-on-surface-variant text-sm max-w-md">
                  Thank you! Our travel team will contact you shortly with the best package and vehicle rates.
                </p>
                <button
                  onClick={() => setEnquirySuccess(false)}
                  className="mt-2 text-xs font-semibold text-secondary hover:underline"
                >
                  Submit Another Enquiry
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 3. QUICK SERVICES */}
      <section className="py-20 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto bg-transparent">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-secondary uppercase tracking-wider block mb-2">What We Do</span>
          <h2 className="font-display text-3xl font-bold text-primary">Our Quick Services</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { title: "Tour Packages", desc: "Curated all-inclusive family & couples packages.", icon: MapPin, href: "/packages" },
            { title: "Car Rental", desc: "Clean sedans & SUVs with local experienced drivers.", icon: Car, href: "/fleet" },
            { title: "Tempo Traveller", desc: "Spacious luxury passenger vans for family & groups.", icon: Users, href: "/fleet" },
            { title: "Bus Rental", desc: "Large coaches for weddings, events & conventions.", icon: Car, href: "/fleet" },
            { title: "Airport Transfers", desc: "Timely, reliable pick and drops to MAA Airport.", icon: PlaneTakeoff, href: "/services" },
          ].map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className="glass-card-light hover-lift rounded-xl p-5 flex flex-col justify-between group cursor-pointer border border-white/50"
            >
              <div>
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display font-bold text-base text-on-background mb-2">{item.title}</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">{item.desc}</p>
              </div>
              <div className="flex items-center gap-1 text-xs font-bold text-primary mt-4 group-hover:text-secondary transition-colors">
                Explore
                <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. POPULAR DESTINATIONS */}
      <section className="py-20 px-margin-mobile md:px-margin-desktop bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-xs font-bold text-secondary uppercase tracking-wider block mb-2">South Indian Beauties</span>
              <h2 className="font-display text-3xl font-bold text-primary">Popular Destinations</h2>
            </div>
            <Link
              href="/destinations"
              className="text-sm font-semibold text-primary hover:text-secondary transition-colors flex items-center gap-1 mt-4 md:mt-0 group"
            >
              View All Destinations
              <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.slice(0, 4).map((d) => (
              <motion.div
                key={d.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInVariants}
                className="bg-white rounded-lg overflow-hidden border border-surface-container-highest/60 hover-lift flex flex-col justify-between group"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={d.image}
                    alt={d.name}
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-xs font-bold">
                    {d.duration}
                  </div>
                </div>

                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-xl text-on-background mb-1">{d.name}</h3>
                    <p className="text-xs text-primary font-semibold italic mb-3">{d.tagline}</p>
                    <p className="text-xs text-on-surface-variant line-clamp-3 leading-relaxed mb-4">
                      {d.overview}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {d.bestFor.map((b, i) => (
                        <span key={i} className="bg-primary/5 text-primary text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                          {b}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/destinations/${d.id}`}
                      className="w-full bg-primary/5 hover:bg-primary hover:text-white text-primary text-center py-2 rounded-full font-bold text-xs flex items-center justify-center gap-1.5 transition-all duration-300"
                    >
                      EXPLORE DETAILS
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. POPULAR PACKAGES */}
      <section className="py-20 px-margin-mobile md:px-margin-desktop bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-xs font-bold text-secondary uppercase tracking-wider block mb-2">Memorable Packages</span>
              <h2 className="font-display text-3xl font-bold text-primary">Popular Tour Packages</h2>
            </div>
            <Link
              href="/packages"
              className="text-sm font-semibold text-primary hover:text-secondary transition-colors flex items-center gap-1 mt-4 md:mt-0 group"
            >
              View All Tour Packages
              <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <motion.div
                key={pkg.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInVariants}
                className="bg-white rounded-lg overflow-hidden border border-surface-container-highest/60 hover-lift flex flex-col justify-between group"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  {/* Find main package image */}
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={pkg.itinerary[0].image || pkg.gallery[0]}
                    alt={pkg.name}
                  />
                  <div className="absolute bottom-3 left-3 bg-secondary text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                    From ₹{pkg.startingPrice.toLocaleString()}
                  </div>
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-xs font-bold">
                    {pkg.duration}
                  </div>
                </div>

                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-display font-bold text-lg text-on-background">{pkg.name}</h3>
                      <div className="flex items-center gap-0.5 text-amber-500 text-xs font-semibold">
                        <Star className="h-3.5 w-3.5 fill-amber-500" />
                        {pkg.rating}
                      </div>
                    </div>
                    <p className="text-xs text-on-surface-variant line-clamp-3 leading-relaxed mb-4">
                      {pkg.summary}
                    </p>
                  </div>

                  <div>
                    <ul className="text-[11px] text-on-surface-variant flex flex-col gap-1.5 border-t border-surface-container/60 pt-3 mb-5">
                      {pkg.inclusions.slice(0, 3).map((inc, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{inc}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/packages/${pkg.id}`}
                      className="w-full bg-secondary hover:bg-secondary/90 text-white text-center py-2 rounded-full font-bold text-xs flex items-center justify-center gap-1.5 transition-all duration-300"
                    >
                      VIEW PACKAGE
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OUR FLEET */}
      <section className="py-20 px-margin-mobile md:px-margin-desktop bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-secondary uppercase tracking-wider block mb-2">Comfortable Transport</span>
            <h2 className="font-display text-3xl font-bold text-primary mb-6">Our Diverse Vehicle Fleet</h2>

            {/* Filter buttons */}
            <div className="flex flex-wrap justify-center items-center gap-2 mt-4 max-w-3xl mx-auto">
              {fleetCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFleetCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                    activeFleetCategory === cat
                      ? "bg-primary text-white shadow-sm"
                      : "bg-white hover:bg-surface-container-high text-on-surface-variant border border-outline-variant/60"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredVehicles.slice(0, 4).map((vehicle) => (
              <motion.div
                key={vehicle.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInVariants}
                className="bg-white rounded-lg overflow-hidden border border-surface-container-highest/60 hover-lift flex flex-col justify-between group"
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
                      <span className="bg-primary/5 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                        {vehicle.category}
                      </span>
                    </div>
                    <p className="text-xs text-on-surface-variant line-clamp-2 leading-relaxed mb-4">
                      {vehicle.overview}
                    </p>

                    {/* Features list */}
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
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE US */}
      <section className="py-20 px-margin-mobile md:px-margin-desktop bg-transparent">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="text-xs font-bold text-secondary uppercase tracking-wider block mb-2">Our Commitments</span>
            <h2 className="font-display text-3xl font-bold text-primary mb-4">Why Travellers Choose WanderNest</h2>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
              We understand that the journey matters just as much as the destination. We blend local expertise, hospitality, and top-tier logistics to deliver memories that last.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card-light floating-element rounded-xl p-4 text-center border border-white/60">
                <div className="text-3xl font-bold text-primary mb-1">10+</div>
                <div className="text-xs text-on-surface-variant font-semibold">Years Experience</div>
              </div>
              <div className="glass-card-light floating-element rounded-xl p-4 text-center border border-white/60">
                <div className="text-3xl font-bold text-primary mb-1">10K+</div>
                <div className="text-xs text-on-surface-variant font-semibold">Happy Travellers</div>
              </div>
              <div className="glass-card-light floating-element rounded-xl p-4 text-center border border-white/60">
                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-xs text-on-surface-variant font-semibold">Trips Completed</div>
              </div>
              <div className="glass-card-light floating-element rounded-xl p-4 text-center border border-white/60">
                <div className="text-3xl font-bold text-primary mb-1">4.8★</div>
                <div className="text-xs text-on-surface-variant font-semibold">Client Rating</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Trusted Driver Chauffeurs", desc: "English & Tamil speaking, background-verified senior drivers with decades of hill road driving expertise.", icon: Award },
              { title: "Well Maintained Fleet", desc: "Rigorous cleaning, routine mechanic checkups, and sanitized cabins before every pick-up.", icon: Shield },
              { title: "Transparent Fixed Pricing", desc: "Zero hidden charges, flat-rate outstation driver allowances, and fully detailed billing reports.", icon: TrendingUp },
              { title: "24/7 Roadside Assistance", desc: "Round-the-clock coordinator call desk and fast vehicle replacement backups if any issue occurs.", icon: Clock },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-5 border border-surface-container-highest/60 shadow-sm flex items-start gap-4 hover-lift">
                <div className="bg-primary/5 p-2 rounded-lg text-primary shrink-0">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-on-background mb-1.5">{item.title}</h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TRAVEL BY PURPOSE */}
      <section className="py-20 px-margin-mobile md:px-margin-desktop bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-secondary uppercase tracking-wider block mb-2">Designed for You</span>
            <h2 className="font-display text-3xl font-bold text-primary">Travel By Purpose</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Family Trips", icon: Users2, img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80" },
              { title: "Honeymoon Escape", icon: Heart, img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80" },
              { title: "Pilgrimage Tours", icon: Award, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmuRkXT9wbk0Uy4-MTp6dtOYzjPth8uToR47G3bQNkFCfd0eDdJ81ROKWEPcXApPom_GOupPnW1gIu0qQY4njKKMQplPmiB_9-ePx_3ECJG29XrYgczizLMhBcfFanBtXm4J06tg9xcFe9Idlucf1H_kD3pnstL3T8URDbO2gps4LXnhbORlSdwMc3Yh5fenKR8YCKFF4e3gH07pqUVorYkNJXLf7sqH-BFDRvnb60XoyojBT3QQoQ" },
              { title: "Corporate Travel", icon: Shield, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqMhTLGJHuzyZEfL98n55D8XSI8L6k7z7UVOAUYv_H1HLZTfbj0SiQsGOfmx5Qu5PW8zbFgk5Zz1yv6zosm8EGNIZVwGVv5E56keLINKgnrS2J-pZIjdRBbhSckgDKzxyUmE9F-jEbYXu2gdEHntIZf4NUK8a_wkHnvodGpl5pNNXVFkXMEOyLPfUr5dHKFKUVR19gUsuFtZ_6ozERe6V_raWJ44ZAYk7ZMeOeJB7I1_iTKKLuTQCe" },
              { title: "Wedding Transportation", icon: Heart, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLG_MZdDpd8RZO3r-Snj0BCERbvClgofBtjD1Gow9EpK09EMXK7cKVBx3GEsqsoOOTECHxNxlcpfsQoXC98yVwTUCXx24xRVr_xQjVok3C_yN6nvl1F2kwI3wB4Dhi2yieFXmZ1_3j6eng_djqY5pQ4UW7hIWIJihnc0qKnkBeCgK_2x3fSxD2BMcAmTL1JzJNty3sL8_zTTJOu3Oyj8ntvcWIly08IE70IP3yDxBKuauXchgTJyyf" },
              { title: "Group Tours", icon: Users, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfkeoRFQaxlGpSp3WRhMJP3hTJZcQr8Alu7sDexUxmWk47PgMm6uCgqjfohh7lwNUQZTnCaqwfdSNOafHpIbvFrJLjo9X77kafCLGMgO7f6qwb5Srkfi2Xm061eEAhttWZ67alB6xLlnFQeW8m6Lvr_jmov5pTI3v7ux0ZZL18KeBCW8gC5_8l9GdSlTZAM_K3s0aadA4XmzX60HgIyt6MriZiRvR7LjPPdWrvChk7Qu_C4BnsaryL" },
              { title: "Weekend Getaways", icon: Compass, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxhPmvAXO95AqPSiETaxzQn7cYzhyYr3Rfqv3fj_sxiU3uDQRwSnB17XvoRtI3kmfJy8xc1Vh0aIaLbjUPnr4RxfUOkYTJN2kiX6UwgPKKwPSbGg5OWbE2-f3D5r41VvWIjLYiUZedMUxuCTbc_ZI2ExMfugLd8HozEK1rsry3BBXbCmWFLO0Spm0xQr14NEbcvzd3dLFniRBx1OoNsBgbk0qvIULQp2fA23p478Om5n40FZu_fxKN" },
              { title: "Adventure Roadtrips", icon: Clock, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAN7D5uZaXxROP-uUKFUjZNRFX5ARyZ4UyGV22iEILh0exDk4NVeERIOtx_nHBOxqoNk7QBxnYHNIb_jdCvei64c_b3J8L-7XobxUL5lcRihBYj61Z-jiMZtzJj2foZiF7WVIpkVyTwD3rfY0zveAcoLvCpfHdYWcMw3Z1fdE688yi7-2S78Z9bd4eIlb6-xWQlg22GPF06RxN2oa1L2vOw62F8q-_Q18l90HHStFYqKQqNIUhyV6Cc" },
            ].map((purpose, index) => (
              <div
                key={index}
                className="relative h-48 rounded-lg overflow-hidden group cursor-pointer border border-surface-container-highest/40"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent z-10"></div>
                <img
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={purpose.img}
                  alt={purpose.title}
                />
                <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 text-white">
                  <div className="bg-secondary p-1.5 rounded-full text-white">
                    <purpose.icon className="h-3.5 w-3.5" />
                  </div>
                  <h3 className="font-display font-semibold text-sm sm:text-base">{purpose.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. HOW IT WORKS */}
      <section className="py-20 px-margin-mobile md:px-margin-desktop bg-transparent max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-secondary uppercase tracking-wider block mb-2">Simple Process</span>
          <h2 className="font-display text-3xl font-bold text-primary">How It Works</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-10 left-1/8 right-1/8 h-0.5 bg-outline-variant/60 z-0"></div>

          {[
            { step: "01", title: "Choose Destination", desc: "Browse our South India catalog & find your holiday dream location." },
            { step: "02", title: "Choose Package / Vehicle", desc: "Match hotel packages or request Dzire, Innova, or vans for rental." },
            { step: "03", title: "Send Enquiry", desc: "Submit dates & pax. Our team replies with transparent quotes in minutes." },
            { step: "04", title: "Start Your Journey", desc: "Hop in! Our verified driver will pick you up at your Chennai address." },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center relative z-10 group">
              <div className="w-16 h-16 bg-white text-primary border-2 border-primary rounded-full flex items-center justify-center font-display font-bold text-xl mb-4 group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">
                {item.step}
              </div>
              <h3 className="font-display font-bold text-base text-on-background mb-2">{item.title}</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed max-w-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 10. CUSTOM TRIP CTA SECTION */}
      <section className="py-20 px-margin-mobile md:px-margin-desktop bg-surface-container-low">
        <div className="max-w-4xl mx-auto bg-primary text-white rounded-lg p-6 md:p-10 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-secondary uppercase tracking-wider block mb-2">Can't Find the Perfect Package?</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Design a Custom Travel Plan</h2>
            <p className="text-xs md:text-sm text-[#ebe1d6]/80 leading-relaxed mb-8">
              Tell us where you want to go. We'll help create a custom trip matching your dates, group size, budget constraints, and favorite sights.
            </p>

            <form onSubmit={handleEnquirySubmit} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-end text-left text-on-background">
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold text-[#ebe1d6]/80">DESTINATION</label>
                <input
                  type="text"
                  placeholder="Where to?"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="bg-white rounded px-3 py-2 text-xs outline-none"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold text-[#ebe1d6]/80">TRAVEL DATE</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="bg-white rounded px-3 py-2 text-xs outline-none"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold text-[#ebe1d6]/80">TRIP TYPE</label>
                <select
                  value={tripType}
                  onChange={(e) => setTripType(e.target.value)}
                  className="bg-white rounded px-3 py-2 text-xs outline-none"
                >
                  <option>Family Trip</option>
                  <option>Honeymoon</option>
                  <option>Pilgrimage</option>
                  <option>Corporate</option>
                  <option>Wedding Guest Shuttle</option>
                </select>
              </div>
              <button
                type="submit"
                className="bg-secondary hover:bg-secondary/90 text-white font-bold py-2 rounded text-xs transition-colors h-[33px] cursor-pointer"
              >
                PLAN MY TRIP
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 11. TESTIMONIALS MARQUEE */}
      <section className="py-20 overflow-hidden bg-transparent w-full">
        <div className="text-center mb-12 px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto">
          <span className="text-xs font-bold text-secondary uppercase tracking-wider block mb-2">Our Reviews</span>
          <h2 className="font-display text-3xl font-bold text-primary">What Happy Travellers Say</h2>
        </div>

        <div className="flex flex-col gap-6 w-full select-none">
          {/* Lane 1: Right to Left */}
          <div className="flex overflow-hidden w-full">
            <div className="animate-marquee-left flex gap-6 py-2">
              {/* Render testimonials 1 to 4 */}
              {testimonials.slice(0, 4).map((t, idx) => (
                <div
                  key={`l1-${idx}`}
                  className="glass-card-light w-[320px] sm:w-[380px] p-6 rounded-2xl border border-white/60 shadow-sm flex flex-col justify-between hover-lift shrink-0"
                >
                  <div>
                    <div className="flex items-center gap-1 text-amber-500 mb-3">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-500" />
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-on-surface-variant italic leading-relaxed mb-4">
                      "{t.review}"
                    </p>
                  </div>
                  <div className="border-t border-surface-container/40 pt-3 mt-2">
                    <h4 className="font-display font-bold text-sm text-on-background">{t.name}</h4>
                    <p className="text-[10px] text-on-surface-variant font-semibold">
                      {t.location} &bull; {t.tripType}
                    </p>
                  </div>
                </div>
              ))}
              {/* Duplicate lane for infinite effect */}
              {testimonials.slice(0, 4).map((t, idx) => (
                <div
                  key={`l1-dup-${idx}`}
                  className="glass-card-light w-[320px] sm:w-[380px] p-6 rounded-2xl border border-white/60 shadow-sm flex flex-col justify-between hover-lift shrink-0"
                >
                  <div>
                    <div className="flex items-center gap-1 text-amber-500 mb-3">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-500" />
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-on-surface-variant italic leading-relaxed mb-4">
                      "{t.review}"
                    </p>
                  </div>
                  <div className="border-t border-surface-container/40 pt-3 mt-2">
                    <h4 className="font-display font-bold text-sm text-on-background">{t.name}</h4>
                    <p className="text-[10px] text-on-surface-variant font-semibold">
                      {t.location} &bull; {t.tripType}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lane 2: Left to Right */}
          <div className="flex overflow-hidden w-full">
            <div className="animate-marquee-right flex gap-6 py-2">
              {/* Render testimonials 5 to 8 */}
              {testimonials.slice(4, 8).map((t, idx) => (
                <div
                  key={`l2-${idx}`}
                  className="glass-card-light w-[320px] sm:w-[380px] p-6 rounded-2xl border border-white/60 shadow-sm flex flex-col justify-between hover-lift shrink-0"
                >
                  <div>
                    <div className="flex items-center gap-1 text-amber-500 mb-3">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-500" />
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-on-surface-variant italic leading-relaxed mb-4">
                      "{t.review}"
                    </p>
                  </div>
                  <div className="border-t border-surface-container/40 pt-3 mt-2">
                    <h4 className="font-display font-bold text-sm text-on-background">{t.name}</h4>
                    <p className="text-[10px] text-on-surface-variant font-semibold">
                      {t.location} &bull; {t.tripType}
                    </p>
                  </div>
                </div>
              ))}
              {/* Duplicate lane for infinite effect */}
              {testimonials.slice(4, 8).map((t, idx) => (
                <div
                  key={`l2-dup-${idx}`}
                  className="glass-card-light w-[320px] sm:w-[380px] p-6 rounded-2xl border border-white/60 shadow-sm flex flex-col justify-between hover-lift shrink-0"
                >
                  <div>
                    <div className="flex items-center gap-1 text-amber-500 mb-3">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-500" />
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-on-surface-variant italic leading-relaxed mb-4">
                      "{t.review}"
                    </p>
                  </div>
                  <div className="border-t border-surface-container/40 pt-3 mt-2">
                    <h4 className="font-display font-bold text-sm text-on-background">{t.name}</h4>
                    <p className="text-[10px] text-on-surface-variant font-semibold">
                      {t.location} &bull; {t.tripType}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lane 3: Right to Left */}
          <div className="flex overflow-hidden w-full">
            <div className="animate-marquee-left flex gap-6 py-2">
              {/* Render testimonials 9 to 12 */}
              {testimonials.slice(8, 12).map((t, idx) => (
                <div
                  key={`l3-${idx}`}
                  className="glass-card-light w-[320px] sm:w-[380px] p-6 rounded-2xl border border-white/60 shadow-sm flex flex-col justify-between hover-lift shrink-0"
                >
                  <div>
                    <div className="flex items-center gap-1 text-amber-500 mb-3">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-500" />
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-on-surface-variant italic leading-relaxed mb-4">
                      "{t.review}"
                    </p>
                  </div>
                  <div className="border-t border-surface-container/40 pt-3 mt-2">
                    <h4 className="font-display font-bold text-sm text-on-background">{t.name}</h4>
                    <p className="text-[10px] text-on-surface-variant font-semibold">
                      {t.location} &bull; {t.tripType}
                    </p>
                  </div>
                </div>
              ))}
              {/* Duplicate lane for infinite effect */}
              {testimonials.slice(8, 12).map((t, idx) => (
                <div
                  key={`l3-dup-${idx}`}
                  className="glass-card-light w-[320px] sm:w-[380px] p-6 rounded-2xl border border-white/60 shadow-sm flex flex-col justify-between hover-lift shrink-0"
                >
                  <div>
                    <div className="flex items-center gap-1 text-amber-500 mb-3">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-500" />
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-on-surface-variant italic leading-relaxed mb-4">
                      "{t.review}"
                    </p>
                  </div>
                  <div className="border-t border-surface-container/40 pt-3 mt-2">
                    <h4 className="font-display font-bold text-sm text-on-background">{t.name}</h4>
                    <p className="text-[10px] text-on-surface-variant font-semibold">
                      {t.location} &bull; {t.tripType}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 12. TRAVEL GALLERY SNIPPET */}
      <section className="py-20 px-margin-mobile md:px-margin-desktop bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-xs font-bold text-secondary uppercase tracking-wider block mb-2">Moments in Lens</span>
              <h2 className="font-display text-3xl font-bold text-primary">Travel Gallery</h2>
            </div>
            <Link
              href="/gallery"
              className="text-sm font-semibold text-primary hover:text-secondary transition-colors flex items-center gap-1 mt-4 md:mt-0 group"
            >
              View Full Gallery
              <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryItems.slice(0, 4).map((item) => (
              <div
                key={item.id}
                onClick={() => setLightboxImage(item.src)}
                className="relative h-48 rounded-lg overflow-hidden group cursor-pointer border border-surface-container-highest/40"
              >
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center text-white text-xs font-bold font-sans">
                  Click to View
                </div>
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={item.src}
                  alt={item.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. FAQ SECTION */}
      <section className="py-20 px-margin-mobile md:px-margin-desktop bg-transparent max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-secondary uppercase tracking-wider block mb-2">Got Questions?</span>
          <h2 className="font-display text-3xl font-bold text-primary">Frequently Asked Questions</h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = activeFAQIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-surface-container-highest/60 rounded-lg overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setActiveFAQIndex(isOpen ? null : index)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between font-display font-semibold text-sm sm:text-base text-on-background hover:bg-surface-container-low transition-colors"
                >
                  {faq.question}
                  <ChevronDown className={`h-5 w-5 text-primary transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-on-surface-variant leading-relaxed font-sans border-t border-surface-container/40">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* 14. FINAL CTA */}
      <section className="relative py-20 px-margin-mobile md:px-margin-desktop text-center text-white overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/80 z-10"></div>
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhABxPL40PmI6oLg8XaGJmwts2aD2HeiW3Z8StSEaYizHAVSYL2gOZ7Y33tVhDNFip0CSbg_fGvh3cHoHCea_YWTSLEzEGu5-EIjIPfGfE8mvUstR8e7HBlg0Ryb_mHEV-sX20SY9ZaCqfou36bFl1PPsp0FLewV3akNT7kVj1MypPXGOsvFHX7ClqVPn8F9vD_Ib-Q_2BxGXZ2LIkZZHw_D3BUHrPxOzCuOGcy4MAKH5qeHN5nLQV"
            alt="Cinematic sweeping highway view of Rameswaram Pamban Bridge"
          />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          <span className="text-xs font-bold text-secondary uppercase tracking-wider block mb-2">Ready for Your Next Journey?</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Tell us where you want to go. <br className="hidden sm:inline" /> We'll take care of the rest.
          </h2>
          <p className="text-xs sm:text-sm text-[#ebe1d6]/80 leading-relaxed mb-8 max-w-lg">
            Enjoy premium tourist guides, top hotel selections, and professional drivers waiting at your pickup. Let's make travel simple.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Magnetic>
              <Link
                href="/contact"
                className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-3 rounded-full text-xs shadow-sm hover:shadow transition-colors"
              >
                PLAN MY TRIP
              </Link>
            </Magnetic>
            <Link
              href="/packages"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-3 rounded-full text-xs transition-colors"
            >
              EXPLORE PACKAGES
            </Link>
          </div>
        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-4xl max-h-[80vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                className="w-full h-full object-contain rounded"
                src={lightboxImage}
                alt="Enlarged gallery photo"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
