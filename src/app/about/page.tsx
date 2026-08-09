"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Compass, Shield, Users, Trophy, Heart } from "lucide-react";
import ParallaxHeader from "@/components/ParallaxHeader";

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const team = [
    {
      name: "Senthil Kumar",
      role: "Founder & Managing Director",
      desc: "Over 15 years of travel logistics expertise in Tamil Nadu, dedicated to premium tour planning.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Meera Krishnan",
      role: "Chief Operations Coordinator",
      desc: "Coordinates our fleet operations, airport transfers, and 24/7 client road support.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Rajesh Selvam",
      role: "Senior Holiday Planner",
      desc: "Creates customized itineraries and handles luxury resort tie-ups for hill stations and temples.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <ParallaxHeader
        imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDBPJp31M0w2MLPKPzOUEzpvecvO15byCKgI_TAHwmT8c5GziNkiSNOdfeN8ULTnDlx2YqOYw8MHiEhpZx35Dg5bYCQzvr5QP4Uj37TgIT6AacHdHMOWKm8_Z1JHCtkUw-d_o2V-07r_m5wEAFScAXEqRTFAc0kC8FfBDYYx3xzOqgPu-bByu_Esf1EFAVEwJkXI9nyUc03sDSoJDbHrixGQV1sbA1ig5kQhgVR_hQqPFLDDvfJwgW3"
        imageAlt="Scenic view of Ooty hill station"
        category="Our Story"
        title="About WanderNest Travels"
        description="&quot;Plan the trip. We'll handle the journey.&quot; Chennai's leading premium travel agency providing memorable tour packages and reliable vehicle rentals."
      />

      {/* Story & Philosophy */}
      <section className="py-20 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <span className="text-xs font-bold text-secondary uppercase tracking-wider block mb-2">How We Started</span>
            <h2 className="font-display text-3xl font-bold text-primary mb-6">Redefining Highway and Hill Station Tourism</h2>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
              WanderNest Travels was founded in Chennai with a single objective: to eliminate the stress of local and outstation travel. We observed that travelers frequently struggled with unhygienic vehicles, unprofessional drivers, and opaque pricing.
            </p>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
              Today, we provide a unified service combining premium pre-screened hotels, expert local sightseeing itineraries, and our own well-maintained fleet of sedans, SUVs, Tempo Travellers, and buses. Whether it is a honeymoon in Kodaikanal, a family getaway to Ooty, a pilgrimage to Madurai, or an airport drop, we handle every detail with premium precision.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-on-surface font-semibold">
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-emerald-600 shrink-0" />
                100% Chauffeur Driven
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-emerald-600 shrink-0" />
                Clean and Sanitized Cars
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-emerald-600 shrink-0" />
                No Hidden Cost Claims
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-emerald-600 shrink-0" />
                24/7 Helpline Desk
              </li>
            </ul>
          </motion.div>

          <div className="relative rounded-lg overflow-hidden h-[400px] shadow-md border border-surface-container-highest/60">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuANqXSV35krvyaOoSc6Wsa0xmt-A9bGLlFG_cY5A5xRwfF3mtXtsnEB42wcQIsQ9s6tq6FEdu_rbcoj9IE_ZSG5MCs10QgDHC6MN5pODS4R8lsUcg0PWxGtwieY48td37ZG3_hBdV7iV3RMHNjbGKOI-ysgKbiQziYrnDDRyjuSiZX0WWwVuUo7WRuJyitq4Pht8BIgPuqbUIPJK9Vm9PuLEFwZfWUsB1yhkhrKPNXV5tTvlaEN4jmR"
              alt="Group of friends hiking in mountains"
            />
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="bg-surface-container-low py-20 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-xs font-bold text-secondary uppercase tracking-wider block mb-2">Our Reach</span>
          <h2 className="font-display text-3xl font-bold text-primary mb-12">WanderNest in Numbers</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "10+", label: "Years Experience", icon: Trophy },
              { value: "10K+", label: "Happy Travellers", icon: Users },
              { value: "500+", label: "Successful Trips", icon: Compass },
              { value: "24/7", label: "Customer Support", icon: Heart },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="bg-primary/5 text-primary p-3 rounded-full mb-3">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-xs text-on-surface-variant uppercase tracking-wider font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team Planners */}
      <section className="py-20 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-secondary uppercase tracking-wider block mb-2">Our Experts</span>
          <h2 className="font-display text-3xl font-bold text-primary">Meet Your Travel Planners</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div key={i} className="glass-card-light rounded-2xl overflow-hidden hover-lift text-center p-6 flex flex-col items-center border border-white/50">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-primary/20">
                <img
                  className="w-full h-full object-cover"
                  src={member.image}
                  alt={member.name}
                />
              </div>
              <h3 className="font-display font-bold text-lg text-on-background mb-1">{member.name}</h3>
              <p className="text-xs text-secondary font-bold uppercase tracking-wider mb-3">{member.role}</p>
              <p className="text-xs text-on-surface-variant leading-relaxed max-w-xs">{member.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary text-white text-center py-20 px-margin-mobile">
        <div className="max-w-2xl mx-auto">
          <span className="text-xs font-bold text-secondary uppercase tracking-wider block mb-2">Ready to Book?</span>
          <h2 className="font-display text-3xl font-bold mb-4">Let's Design Your Dream Journey Together</h2>
          <p className="text-xs sm:text-sm text-[#ebe1d6]/80 leading-relaxed mb-8 max-w-md mx-auto">
            Get in touch with our experts. Whether it's a family tour or a premium Innova outstation rental, we ensure absolute comfort.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-3 rounded-full text-xs shadow-sm"
            >
              GET A QUOTE
            </Link>
            <Link
              href="/packages"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-3 rounded-full text-xs"
            >
              EXPLORE PACKAGES
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
