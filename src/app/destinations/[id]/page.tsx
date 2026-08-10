import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, MapPin, Calendar, Clock, Star, ArrowRight, MessageSquare, AlertCircle } from "lucide-react";
import { destinations } from "@/data/destinations";
import { packages } from "@/data/packages";
import { vehicles } from "@/data/vehicles";
import { businessConfig } from "@/data/config";

// Next.js 15 compatible page properties
interface DestinationPageProps {
  params: Promise<{ id: string }> | { id: string };
}

export default async function DestinationDetail({ params }: DestinationPageProps) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  // Find destination details
  const dest = destinations.find((d) => d.id === id);
  if (!dest) {
    notFound();
  }

  // Find tour packages matching this destination
  const matchedPackages = packages.filter((p) => p.destinationId === id);

  // Recommend fleet categories suited for this destination
  // E.g., hill stations demand SUV/Tempo Traveller, beach routes can use Sedans
  const recommendedVehicles = id === "ooty" || id === "kodaikanal" || id === "yercaud"
    ? vehicles.filter(v => v.category === "SUV" || v.category === "Tempo Traveller" || v.category === "Van")
    : vehicles.filter(v => v.category === "Sedan" || v.category === "SUV" || v.category === "Luxury");

  return (
    <div className="pt-20 min-h-screen">
      {/* 1. HERO BANNER */}
      <section className="relative min-h-[380px] sm:min-h-[440px] md:h-[60vh] flex items-end">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-on-surface via-on-surface/40 to-transparent z-10"></div>
          <img
            className="w-full h-full object-cover"
            src={dest.image}
            alt={dest.name}
          />
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-margin-desktop pb-8 sm:pb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 text-white">
          <div>
            <span className="inline-block bg-secondary text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2.5 sm:mb-3">
              Explore South India
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-2 tracking-tight">
              {dest.name} Tour Packages
            </h1>
            <p className="text-xs sm:text-sm text-surface-bright/80 italic font-medium flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-secondary-container" />
              {dest.tagline}
            </p>
          </div>

          <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-white/20 text-on-background flex flex-col items-start w-full md:w-auto shadow-md">
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Starting from</span>
            <div className="text-2xl font-bold text-primary mb-3">
              ₹{dest.startingPrice.toLocaleString()} <span className="text-xs font-normal text-on-surface-variant">/ person</span>
            </div>
            <Link
              href="/contact"
              className="w-full bg-secondary hover:bg-secondary/90 text-white text-center py-2.5 px-6 rounded-full font-bold text-xs shadow transition-colors"
            >
              BOOK THIS TRIP
            </Link>
          </div>
        </div>
      </section>

      {/* 2. MAIN DETAILS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-margin-desktop py-12 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        {/* Left column: Overview, Attractions, Tips */}
        <div className="lg:col-span-8 flex flex-col gap-12">
          {/* Overview */}
          <section>
            <h2 className="font-display text-2xl font-bold text-primary mb-4">Destination Overview</h2>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              {dest.overview}
            </p>
          </section>

          {/* Attractions */}
          <section>
            <h2 className="font-display text-2xl font-bold text-primary mb-6">Popular Attractions in {dest.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {dest.attractions.map((att, i) => (
                <div key={i} className="bg-white border border-surface-container-highest/60 rounded-lg overflow-hidden shadow-sm flex flex-col">
                  {att.image && (
                    <div className="h-44 w-full relative">
                      <img className="w-full h-full object-cover" src={att.image} alt={att.name} />
                    </div>
                  )}
                  <div className="p-4 flex-grow">
                    <h3 className="font-display font-bold text-lg text-on-background mb-2">{att.name}</h3>
                    <p className="text-xs text-on-surface-variant leading-relaxed">{att.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Travel Tips */}
          <section className="bg-surface-container-low rounded-lg p-6 border border-surface-container-highest/60">
            <h2 className="font-display text-xl font-bold text-primary mb-4 flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-secondary" />
              Travel Tips & Essential Information
            </h2>
            <ul className="flex flex-col gap-3 text-xs sm:text-sm text-on-surface-variant font-medium">
              {dest.travelTips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Right column: Package recommendations, Vehicle rentals */}
        <div className="lg:col-span-4 flex flex-col gap-12">
          {/* Matched Tour Packages */}
          <section className="bg-white border border-surface-container-highest/60 rounded-lg p-5 shadow-sm">
            <h3 className="font-display font-bold text-lg text-primary mb-4 border-b border-surface-container/60 pb-2">
              Tour Packages
            </h3>

            {matchedPackages.length > 0 ? (
              <div className="flex flex-col gap-4">
                {matchedPackages.map((pkg) => (
                  <div key={pkg.id} className="border border-surface-container/60 rounded-lg p-4 flex flex-col justify-between hover:bg-surface-container-low transition-colors">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <h4 className="font-display font-bold text-sm text-on-background">{pkg.name}</h4>
                        <span className="text-xs font-bold text-primary">₹{pkg.startingPrice.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-3 text-[10px] text-on-surface-variant font-semibold mb-3">
                        <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {pkg.duration}</span>
                        <span className="flex items-center gap-0.5"><Star className="h-3 w-3 text-amber-500 fill-amber-500" /> {pkg.rating}</span>
                      </div>
                    </div>
                    <Link
                      href={`/packages/${pkg.id}`}
                      className="text-[11px] font-bold text-secondary flex items-center gap-1.5 mt-2 hover:underline self-end"
                    >
                      VIEW DETAILS
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6">
                <p className="text-xs text-on-surface-variant mb-4">No pre-designed tour packages found for {dest.name}.</p>
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-[#004249] text-white text-xs font-semibold py-2 px-4 rounded-full transition-colors inline-block"
                >
                  Request Custom Plan
                </Link>
              </div>
            )}
          </section>

          {/* Recommended Vehicles */}
          <section className="bg-white border border-surface-container-highest/60 rounded-lg p-5 shadow-sm">
            <h3 className="font-display font-bold text-lg text-primary mb-4 border-b border-surface-container/60 pb-2">
              Recommended Fleet Rentals
            </h3>

            <div className="flex flex-col gap-4">
              {recommendedVehicles.slice(0, 3).map((vehicle) => (
                <div key={vehicle.id} className="flex gap-3 items-center border-b border-surface-container/30 pb-3 last:border-b-0 last:pb-0">
                  <div className="w-16 h-12 bg-zinc-100 rounded overflow-hidden shrink-0">
                    <img className="w-full h-full object-cover" src={vehicle.image} alt={vehicle.name} />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-display font-bold text-xs text-on-background">{vehicle.name}</h4>
                    <p className="text-[10px] text-on-surface-variant font-medium">{vehicle.seats} &bull; {vehicle.ac ? "AC" : "Non-AC"}</p>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-[10px] text-primary font-bold">From ₹{vehicle.startingPrice.toLocaleString()} / day</span>
                      <Link
                        href={`/fleet/${vehicle.id}`}
                        className="text-[9px] font-bold text-secondary hover:underline flex items-center"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Custom Plan Help */}
          <section className="bg-primary text-white rounded-lg p-5 text-center">
            <h4 className="font-display font-bold text-base mb-2">Need a Custom Itinerary?</h4>
            <p className="text-[11px] text-[#ebe1d6]/80 leading-relaxed mb-4">
              We customize hotels, vehicles, and stay days for family, honeymoon, or corporate getaways.
            </p>
            <div className="flex flex-col gap-2">
              <Link
                href="/contact"
                className="bg-secondary hover:bg-secondary/90 text-white font-semibold py-2 rounded text-xs transition-colors"
              >
                REQUEST CUSTOM PLAN
              </Link>
              <a
                href={businessConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 rounded text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="h-3.5 w-3.5" />
                CHAT ON WHATSAPP
              </a>
            </div>
          </section>
        </div>
      </div>

      {/* 3. FAQ SECTION */}
      {dest.faq.length > 0 && (
        <section className="bg-surface-container-low py-20 px-margin-mobile md:px-margin-desktop">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-primary text-center mb-8">
              Frequently Asked Questions - {dest.name}
            </h2>

            <div className="flex flex-col gap-4">
              {dest.faq.map((f, i) => (
                <div key={i} className="bg-white border border-surface-container-highest/60 rounded-lg p-5 shadow-sm">
                  <h3 className="font-display font-semibold text-sm sm:text-base text-on-background mb-2">{f.question}</h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed font-sans">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
