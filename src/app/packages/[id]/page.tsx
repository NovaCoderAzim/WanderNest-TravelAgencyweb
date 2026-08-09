import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, X, Clock, Star, MessageSquare, AlertCircle, HelpCircle, MapPin, Building, Car } from "lucide-react";
import { packages } from "@/data/packages";
import { businessConfig } from "@/data/config";

interface PackagePageProps {
  params: Promise<{ id: string }> | { id: string };
}

export default async function PackageDetail({ params }: PackagePageProps) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const pkg = packages.find((p) => p.id === id);
  if (!pkg) {
    notFound();
  }

  // Pre-filled WhatsApp message for booking enquiry
  const encodedWhatsappMsg = encodeURIComponent(
    `Hi WanderNest Travels, I'm interested in booking the "${pkg.name}" (${pkg.duration}) tour package starting from Chennai. Please share availability and details.`
  );
  const whatsappBookingUrl = `https://wa.me/${businessConfig.phoneRaw}?text=${encodedWhatsappMsg}`;

  return (
    <div className="pt-20 min-h-screen">
      {/* 1. HERO BANNER */}
      <section className="relative h-[65vh] min-h-[450px] flex items-end">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-on-surface via-on-surface/40 to-transparent z-10"></div>
          <img
            className="w-full h-full object-cover animate-kenburns"
            src={pkg.itinerary[0].image || pkg.gallery[0]}
            alt={pkg.name}
          />
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop pb-12 flex flex-col md:flex-row justify-between items-end gap-6 text-white">
          <div>
            <span className="inline-block bg-[#ffab69] text-[#783d01] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3">
              OUTSTATION TOUR
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-2 tracking-tight">
              {pkg.name}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-surface-bright/80">
              <span className="flex items-center gap-1.5"><Clock className="h-4.5 w-4.5 text-secondary-container" /> {pkg.duration}</span>
              <span className="flex items-center gap-1"><Star className="h-4.5 w-4.5 text-amber-500 fill-amber-500" /> {pkg.rating} ({pkg.reviewsCount} reviews)</span>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-lg border border-white/20 text-on-background flex flex-col items-start w-full md:w-auto shadow-md">
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Starting from</span>
            <div className="text-3xl font-bold text-primary mb-3">
              ₹{pkg.startingPrice.toLocaleString()} <span className="text-xs font-normal text-on-surface-variant">/ person</span>
            </div>
            <div className="grid grid-cols-2 gap-2 w-full">
              <Link
                href="/contact"
                className="bg-primary hover:bg-[#004249] text-white text-center py-2.5 px-4 rounded-full font-bold text-xs shadow transition-all duration-200"
              >
                BOOK NOW
              </Link>
              <a
                href={whatsappBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white text-center py-2.5 px-4 rounded-full font-bold text-xs flex items-center justify-center gap-1 transition-all duration-200"
              >
                <MessageSquare className="h-3.5 w-3.5" />
                WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTENT CANVAS */}
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-20 grid grid-cols-1 lg:grid-cols-12 gap-20">
        {/* Left Column: Overview, Itinerary, Inclusions */}
        <div className="lg:col-span-8 flex flex-col gap-12">
          {/* Overview */}
          <section>
            <h2 className="font-display text-2xl font-bold text-primary mb-4">Trip Overview</h2>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              {pkg.summary}
            </p>
          </section>

          {/* Day-by-Day Journey (Itinerary timeline) */}
          <section>
            <h2 className="font-display text-2xl font-bold text-primary mb-6">Day-by-Day Detailed Itinerary</h2>
            <div className="flex flex-col gap-6 relative before:absolute before:top-2 before:bottom-2 before:left-[17px] before:w-[2px] before:bg-surface-container-highest">
              {pkg.itinerary.map((day, idx) => (
                <div key={idx} className="flex gap-4 relative">
                  {/* Circle Pin */}
                  <div className="w-9 h-9 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0 z-10 ring-4 ring-background">
                    {day.dayNumber}
                  </div>
                  {/* Card Content */}
                  <div className="bg-white border border-surface-container-highest/60 rounded-lg p-5 shadow-sm flex flex-col md:flex-row gap-4 items-start w-full">
                    {day.image && (
                      <div className="w-full md:w-48 h-32 rounded overflow-hidden shrink-0 bg-zinc-100">
                        <img className="w-full h-full object-cover" src={day.image} alt={day.title} />
                      </div>
                    )}
                    <div className="flex-grow">
                      <h3 className="font-display font-bold text-lg text-on-background mb-2">
                        {day.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-3">
                        {day.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {day.activities.map((act, i) => (
                          <span key={i} className="bg-primary/5 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full">
                            {act}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Inclusions & Exclusions */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Inclusions */}
            <div className="bg-emerald-50/50 border border-emerald-100 rounded-lg p-5 shadow-sm">
              <h3 className="font-display font-bold text-lg text-emerald-800 mb-4 flex items-center gap-2">
                <Check className="h-5 w-5 text-emerald-600" />
                What's Included
              </h3>
              <ul className="flex flex-col gap-3 text-xs sm:text-sm text-on-surface-variant font-medium">
                {pkg.inclusions.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions */}
            <div className="bg-rose-50/50 border border-rose-100 rounded-lg p-5 shadow-sm">
              <h3 className="font-display font-bold text-lg text-rose-800 mb-4 flex items-center gap-2">
                <X className="h-5 w-5 text-rose-600" />
                What's Excluded
              </h3>
              <ul className="flex flex-col gap-3 text-xs sm:text-sm text-on-surface-variant font-medium">
                {pkg.exclusions.map((exc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <X className="h-4 w-4 text-rose-600 shrink-0 mt-0.5" />
                    <span>{exc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* Right Column: Hotel Levels, Vehicle Options, Tips */}
        <div className="lg:col-span-4 flex flex-col gap-12">
          {/* Hotel Accommodation Options */}
          <section className="bg-white border border-surface-container-highest/60 rounded-lg p-5 shadow-sm">
            <h3 className="font-display font-bold text-lg text-primary mb-4 border-b border-surface-container/60 pb-2 flex items-center gap-2">
              <Building className="h-5 w-5 text-secondary" />
              Accommodation Details
            </h3>

            <div className="flex flex-col gap-4 text-xs">
              <div className="border border-surface-container/50 rounded-lg p-3">
                <div className="font-bold text-[#8e4e14] uppercase tracking-wider mb-1">Standard Option</div>
                <p className="text-on-surface-variant font-medium">{pkg.hotelOptions.standard}</p>
              </div>
              <div className="border border-surface-container/50 rounded-lg p-3">
                <div className="font-bold text-primary uppercase tracking-wider mb-1">Premium Option</div>
                <p className="text-on-surface-variant font-medium">{pkg.hotelOptions.premium}</p>
              </div>
              <div className="border border-surface-container/50 rounded-lg p-3">
                <div className="font-bold text-on-surface-variant uppercase tracking-wider mb-1">Budget Option</div>
                <p className="text-on-surface-variant font-medium">{pkg.hotelOptions.budget}</p>
              </div>
            </div>
          </section>

          {/* Vehicle Options */}
          <section className="bg-white border border-surface-container-highest/60 rounded-lg p-5 shadow-sm">
            <h3 className="font-display font-bold text-lg text-primary mb-4 border-b border-surface-container/60 pb-2 flex items-center gap-2">
              <Car className="h-5 w-5 text-secondary" />
              Vehicle Options Included
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs text-on-surface-variant font-medium">
              {pkg.vehicleOptions.map((opt, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>{opt}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Important notes */}
          <section className="bg-surface-container-low border border-surface-container-highest/60 rounded-lg p-5 shadow-sm">
            <h3 className="font-display font-bold text-base text-primary mb-3 flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-secondary" />
              Booking Information
            </h3>
            <ul className="flex flex-col gap-2.5 text-[11px] sm:text-xs text-on-surface-variant font-medium leading-relaxed">
              <li>Prices quoted are starting rates for reference. Final prices vary based on seasonal demands and hotel selections.</li>
              <li>Tolls, interstate permits, and driver allowances are included. No surprise hidden charges at trip end.</li>
              <li>Booking requires a 30% advance payment. Balance to be cleared on starting day of travel.</li>
            </ul>
          </section>

          {/* Package FAQs */}
          {pkg.faqs && pkg.faqs.length > 0 && (
            <section className="bg-white border border-surface-container-highest/60 rounded-lg p-5 shadow-sm">
              <h3 className="font-display font-bold text-lg text-primary mb-4 border-b border-surface-container/60 pb-2 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-secondary" />
                Package FAQ
              </h3>
              <div className="flex flex-col gap-3">
                {pkg.faqs.map((f, i) => (
                  <div key={i} className="border-b border-surface-container/30 pb-2 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-xs text-on-background mb-1">{f.question}</h4>
                    <p className="text-[10px] text-on-surface-variant leading-relaxed">{f.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
