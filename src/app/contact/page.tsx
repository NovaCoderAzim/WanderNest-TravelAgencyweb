"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Check,
  Send,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import { businessConfig } from "@/data/config";
import { destinations } from "@/data/destinations";
import { vehicles } from "@/data/vehicles";
import ParallaxHeader from "@/components/ParallaxHeader";
import Magnetic from "@/components/Magnetic";

export default function Contact() {
  const [success, setSuccess] = useState(false);

  // Form states
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [from, setFrom] = useState("Chennai");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [travellers, setTravellers] = useState("2");
  const [preference, setPreference] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <div className="pt-24 min-h-screen">
      {/* Page Header */}
      <ParallaxHeader
        imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDBPJp31M0w2MLPKPzOUEzpvecvO15byCKgI_TAHwmT8c5GziNkiSNOdfeN8ULTnDlx2YqOYw8MHiEhpZx35Dg5bYCQzvr5QP4Uj37TgIT6AacHdHMOWKm8_Z1JHCtkUw-d_o2V-07r_m5wEAFScAXEqRTFAc0kC8FfBDYYx3xzOqgPu-bByu_Esf1EFAVEwJkXI9nyUc03sDSoJDbHrixGQV1sbA1ig5kQhgVR_hQqPFLDDvfJwgW3"
        imageAlt="Contact us background"
        category="Plan Your Journey"
        title="Contact & Enquiry"
        description="Get a detailed price quote immediately. Fill out our simple enquiry form or chat with our planners directly on WhatsApp."
      />

      {/* Main Form and Details */}
      <section className="py-20 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Contact details */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold text-secondary uppercase tracking-wider block">Office Coordinates</span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary">Get in Touch</h2>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              We respond to all email enquiries within 2 hours. For instant vehicle booking confirmations or custom packages, calling or messaging on WhatsApp is recommended.
            </p>
          </div>

          {/* Quick Contact Cards */}
          <div className="flex flex-col gap-5">
            <div className="glass-card-light rounded-2xl p-5 flex items-start gap-4 border-l-4 border-l-secondary border-y border-r border-white/60 hover-lift shadow-lg">
              <div className="bg-secondary/10 p-3 rounded-full text-secondary shrink-0 flex items-center justify-center">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-primary mb-1">Chennai Office</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed font-semibold">
                  {businessConfig.address}
                </p>
              </div>
            </div>

            <div className="glass-card-light rounded-2xl p-5 flex items-start gap-4 border-l-4 border-l-secondary border-y border-r border-white/60 hover-lift shadow-lg">
              <div className="bg-secondary/10 p-3 rounded-full text-secondary shrink-0 flex items-center justify-center">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-primary mb-1">Phone Call Helpline</h3>
                <a href={`tel:${businessConfig.phoneRaw}`} className="text-sm text-on-surface-variant hover:text-primary font-bold block mb-1">
                  {businessConfig.phone} (Mobile)
                </a>
                <p className="text-[10px] text-on-surface-variant/70 font-medium">Charges might apply. General operational calls.</p>
              </div>
            </div>

            <div className="glass-card-light rounded-2xl p-5 flex items-start gap-4 border-l-4 border-l-secondary border-y border-r border-white/60 hover-lift shadow-lg">
              <div className="bg-secondary/10 p-3 rounded-full text-secondary shrink-0 flex items-center justify-center">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-primary mb-1">WhatsApp Chat Desk</h3>
                <a href={businessConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-sm text-emerald-600 hover:underline font-bold block mb-1">
                  {businessConfig.whatsapp} (Chat Now)
                </a>
                <p className="text-[10px] text-on-surface-variant/70 font-medium">Recommended for immediate pricing quotes.</p>
              </div>
            </div>

            <div className="glass-card-light rounded-2xl p-5 flex items-start gap-4 border-l-4 border-l-secondary border-y border-r border-white/60 hover-lift shadow-lg">
              <div className="bg-secondary/10 p-3 rounded-full text-secondary shrink-0 flex items-center justify-center">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-primary mb-1">Email Queries</h3>
                <a href={`mailto:${businessConfig.email}`} className="text-sm text-on-surface-variant hover:text-primary font-bold block">
                  {businessConfig.email}
                </a>
              </div>
            </div>

            <div className="glass-card-light rounded-2xl p-5 flex items-start gap-4 border-l-4 border-l-secondary border-y border-r border-white/60 hover-lift shadow-lg">
              <div className="bg-secondary/10 p-3 rounded-full text-secondary shrink-0 flex items-center justify-center">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-primary mb-1">Working Hours</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed font-semibold">
                  {businessConfig.hours}
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 items-center border-t border-surface-container/60 pt-6">
            <span className="text-xs font-bold text-primary tracking-wider uppercase">Follow Us:</span>
            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com/tnwebz?igsh=ZnZ3N3VtamJ2aGJ3" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-surface-container-high hover:bg-secondary hover:text-white rounded-full transition-all duration-200 text-primary shadow-sm hover:scale-110" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/tnwebz/" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-surface-container-high hover:bg-secondary hover:text-white rounded-full transition-all duration-200 text-primary shadow-sm hover:scale-110" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://www.youtube.com/@TNWebz" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-surface-container-high hover:bg-secondary hover:text-white rounded-full transition-all duration-200 text-primary shadow-sm hover:scale-110" aria-label="Youtube">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact form / success screen */}
        <div className="lg:col-span-7 glass-card-light rounded-3xl p-8 md:p-10 shadow-2xl flex flex-col justify-center border border-white/70 relative z-10">
          <AnimatePresence mode="wait">
            {!success ? (
              <motion.form
                key="contact-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-5 text-xs sm:text-sm"
              >
                <h3 className="font-display font-bold text-2xl text-primary border-b border-surface-container/60 pb-4 mb-2">
                  Request a Free Quote
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-bold text-primary/80 tracking-wider text-[10px] uppercase">FULL NAME</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-white/80 border border-outline-variant/40 rounded-xl px-4 py-3 outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 text-on-background font-semibold text-xs transition-all duration-200 shadow-sm"
                      placeholder="e.g. Anand Sharma"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-bold text-primary/80 tracking-wider text-[10px] uppercase">PHONE NUMBER</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-white/80 border border-outline-variant/40 rounded-xl px-4 py-3 outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 text-on-background font-semibold text-xs transition-all duration-200 shadow-sm"
                      placeholder="10-digit Mobile number"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-bold text-primary/80 tracking-wider text-[10px] uppercase">WHATSAPP NUMBER (OPTIONAL)</label>
                    <input
                      type="tel"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="bg-white/80 border border-outline-variant/40 rounded-xl px-4 py-3 outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 text-on-background font-semibold text-xs transition-all duration-200 shadow-sm"
                      placeholder="WhatsApp number"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-bold text-primary/80 tracking-wider text-[10px] uppercase">FROM CITY</label>
                    <input
                      type="text"
                      value={from}
                      onChange={(e) => setFrom(e.target.value)}
                      className="bg-white/80 border border-outline-variant/40 rounded-xl px-4 py-3 outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 text-on-background font-semibold text-xs transition-all duration-200 shadow-sm"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-bold text-primary/80 tracking-wider text-[10px] uppercase">DESTINATION</label>
                    <select
                      value={to}
                      onChange={(e) => setTo(e.target.value)}
                      className="bg-white/80 border border-outline-variant/40 rounded-xl px-4 py-3 outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 text-on-background font-semibold text-xs transition-all duration-200 shadow-sm cursor-pointer"
                      required
                    >
                      <option value="" disabled>Where to?</option>
                      {destinations.map((d) => (
                        <option key={d.id} value={d.name}>{d.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-bold text-primary/80 tracking-wider text-[10px] uppercase">TRAVEL DATE</label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="bg-white/80 border border-outline-variant/40 rounded-xl px-4 py-3 outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 text-on-background font-semibold text-xs transition-all duration-200 shadow-sm cursor-pointer"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-bold text-primary/80 tracking-wider text-[10px] uppercase">TRAVELLERS COUNT</label>
                    <select
                      value={travellers}
                      onChange={(e) => setTravellers(e.target.value)}
                      className="bg-white/80 border border-outline-variant/40 rounded-xl px-4 py-3 outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 text-on-background font-semibold text-xs transition-all duration-200 shadow-sm cursor-pointer"
                    >
                      <option value="1">1 Pax</option>
                      <option value="2">2 Pax</option>
                      <option value="3-5">3-5 Pax</option>
                      <option value="6-9">6-9 Pax</option>
                      <option value="10+">10+ Group</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-bold text-primary/80 tracking-wider text-[10px] uppercase">CHOICE OF VEHICLE / PACKAGE OPTION</label>
                  <select
                    value={preference}
                    onChange={(e) => setPreference(e.target.value)}
                    className="bg-white/80 border border-outline-variant/40 rounded-xl px-4 py-3 outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 text-on-background font-semibold text-xs transition-all duration-200 shadow-sm cursor-pointer"
                  >
                    <option value="">Select Option (Optional)</option>
                    <optgroup label="Tour Packages">
                      <option value="Ooty Escape">Ooty Escape Package</option>
                      <option value="Kodaikanal Getaway">Kodaikanal Getaway Package</option>
                      <option value="Pondicherry Weekend">Pondicherry Weekend Package</option>
                      <option value="Madurai Temple Trail">Madurai Temple Trail Package</option>
                    </optgroup>
                    <optgroup label="Vehicle Rentals">
                      {vehicles.map((v) => (
                        <option key={v.id} value={v.name}>{v.name} ({v.category})</option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-bold text-primary/80 tracking-wider text-[10px] uppercase">MESSAGE / CUSTOM REQUESTS</label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="bg-white/80 border border-outline-variant/40 rounded-xl px-4 py-3 outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 text-on-background font-semibold text-xs transition-all duration-200 shadow-sm resize-none"
                    placeholder="Tell us about special hotel requirements, flight pick-up timings, or driver route stops..."
                  />
                </div>

                <Magnetic className="w-full inline-block">
                  <button
                    type="submit"
                    className="w-full bg-secondary hover:bg-secondary/95 text-white py-3 rounded-full font-semibold shadow-md transition-all duration-200 hover-glow flex items-center justify-center gap-2 cursor-pointer text-sm h-[45px] mt-2"
                  >
                    <Send className="h-4 w-4" />
                    SEND ENQUIRY
                  </button>
                </Magnetic>
              </motion.form>
            ) : (
              <motion.div
                key="success-screen"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 flex flex-col items-center justify-center gap-3 text-primary"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-2">
                  <Check className="h-8 w-8 stroke-[3]" />
                </div>
                <h3 className="font-display font-bold text-2xl">Enquiry Received!</h3>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed max-w-sm">
                  Thank you! Our travel team will contact you shortly. We will coordinate details over phone call or WhatsApp to confirm your vehicle reservations and tour options.
                </p>
                <button
                  onClick={() => {
                    setName("");
                    setPhone("");
                    setWhatsapp("");
                    setTo("");
                    setDate("");
                    setPreference("");
                    setMessage("");
                    setSuccess(false);
                  }}
                  className="mt-4 text-xs font-bold text-secondary hover:underline"
                >
                  Submit Another Request
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Map Embed Area */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto pb-20">
        <div className="text-center mb-6">
          <h3 className="font-display font-bold text-lg text-primary">Office Location Map</h3>
        </div>
        <div className="bg-white border border-surface-container-highest/60 rounded-lg overflow-hidden h-[350px] shadow-sm relative flex items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124408.06733221946!2d80.14112196602377!3d13.047338848777174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1723223000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
            title="WanderNest Travels Chennai Map"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
