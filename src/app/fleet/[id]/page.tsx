import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, ShieldAlert, ArrowRight, MessageSquare, Tag, Users, ShieldCheck, Info, Car } from "lucide-react";
import { vehicles } from "@/data/vehicles";
import { businessConfig } from "@/data/config";

interface VehiclePageProps {
  params: Promise<{ id: string }> | { id: string };
}

export default async function VehicleDetail({ params }: VehiclePageProps) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const vehicle = vehicles.find((v) => v.id === id);
  if (!vehicle) {
    notFound();
  }

  // Pre-filled WhatsApp message for vehicle rental
  const encodedWhatsappMsg = encodeURIComponent(
    `Hi WanderNest Travels, I'm looking to rent the "${vehicle.name}" (${vehicle.seats}) for a trip starting from Chennai. Please provide availability and a quote.`
  );
  const whatsappBookingUrl = `https://wa.me/${businessConfig.phoneRaw}?text=${encodedWhatsappMsg}`;

  // Find related vehicles
  const relatedVehicles = vehicles
    .filter((v) => v.id !== id && (v.category === vehicle.category || v.category === "SUV"))
    .slice(0, 3);

  return (
    <div className="pt-20 min-h-screen">
      {/* 1. HERO BANNER */}
      <section className="relative h-[55vh] min-h-[350px] flex items-end">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-on-surface via-on-surface/40 to-transparent z-10"></div>
          <img
            className="w-full h-full object-cover"
            src={vehicle.image}
            alt={vehicle.name}
          />
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop pb-12 flex flex-col md:flex-row justify-between items-end gap-6 text-white">
          <div>
            <span className="inline-block bg-secondary text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3">
              {vehicle.category} RENTAL
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-2 tracking-tight">
              {vehicle.name}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-surface-bright/80">
              <span className="flex items-center gap-1.5"><Users className="h-4.5 w-4.5 text-secondary-container" /> {vehicle.seats}</span>
              <span className="flex items-center gap-1.5"><Check className="h-4.5 w-4.5 text-secondary-container" /> {vehicle.ac ? "AC Coach" : "Non-AC"}</span>
              <span className="flex items-center gap-1.5"><Check className="h-4.5 w-4.5 text-secondary-container" /> Chauffeur Driven</span>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-lg border border-white/20 text-on-background flex flex-col items-start w-full md:w-auto shadow-md">
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Starting from</span>
            <div className="text-3xl font-bold text-primary mb-3">
              ₹{vehicle.startingPrice.toLocaleString()} <span className="text-xs font-normal text-on-surface-variant">/ {vehicle.priceUnit}</span>
            </div>
            <div className="grid grid-cols-2 gap-2 w-full">
              <Link
                href="/contact"
                className="bg-primary hover:bg-[#004249] text-white text-center py-2.5 px-4 rounded-full font-bold text-xs shadow transition-all duration-200"
              >
                RENT NOW
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

      {/* 2. VEHICLE DETAILS CANVAS */}
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-20 grid grid-cols-1 lg:grid-cols-12 gap-20">
        {/* Left Column: Overview, Rates, Features */}
        <div className="lg:col-span-8 flex flex-col gap-12">
          {/* Overview */}
          <section>
            <h2 className="font-display text-2xl font-bold text-primary mb-4">Vehicle Overview</h2>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              {vehicle.overview}
            </p>
          </section>

          {/* Rates Table */}
          <section className="bg-white border border-surface-container-highest/60 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-primary text-white p-4 font-display font-bold text-base flex items-center gap-2">
              <Tag className="h-5 w-5 text-secondary-container" />
              Rental Rates & Billing Details
            </div>
            <div className="p-5 flex flex-col gap-4 text-sm">
              <div className="flex flex-col sm:flex-row justify-between border-b border-surface-container/60 pb-3">
                <span className="font-bold text-on-background">Local Rental Package</span>
                <span className="text-on-surface-variant font-medium sm:text-right mt-1 sm:mt-0">
                  {vehicle.localRentalRate}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between pt-1">
                <span className="font-bold text-on-background">Outstation Travel Rate</span>
                <span className="text-on-surface-variant font-medium sm:text-right mt-1 sm:mt-0">
                  {vehicle.outstationRentalRate}
                </span>
              </div>
            </div>
          </section>

          {/* Features */}
          <section>
            <h2 className="font-display text-2xl font-bold text-primary mb-6">Key Cabin Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {vehicle.features.map((feature, i) => (
                <div key={i} className="bg-white border border-surface-container-highest/60 rounded-lg p-4 shadow-sm flex items-center gap-3">
                  <Check className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span className="text-xs sm:text-sm text-on-surface font-semibold">{feature}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Ideal For, Related Vehicles, Exclusions */}
        <div className="lg:col-span-4 flex flex-col gap-12">
          {/* Ideal For */}
          <section className="bg-white border border-surface-container-highest/60 rounded-lg p-5 shadow-sm">
            <h3 className="font-display font-bold text-lg text-primary mb-4 border-b border-surface-container/60 pb-2 flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-secondary" />
              Ideal Usages
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs text-on-surface font-semibold">
              {vehicle.idealFor.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Related fleet recommendations */}
          {relatedVehicles.length > 0 && (
            <section className="bg-white border border-surface-container-highest/60 rounded-lg p-5 shadow-sm">
              <h3 className="font-display font-bold text-lg text-primary mb-4 border-b border-surface-container/60 pb-2 flex items-center gap-2">
                <Car className="h-5 w-5 text-secondary" />
                Related Vehicles
              </h3>

              <div className="flex flex-col gap-4">
                {relatedVehicles.map((rel) => (
                  <div key={rel.id} className="flex gap-3 items-center border-b border-surface-container/30 pb-3 last:border-b-0 last:pb-0">
                    <div className="w-16 h-12 bg-zinc-100 rounded overflow-hidden shrink-0">
                      <img className="w-full h-full object-cover" src={rel.image} alt={rel.name} />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-display font-bold text-xs text-on-background">{rel.name}</h4>
                      <p className="text-[10px] text-on-surface-variant font-medium">{rel.seats} &bull; {rel.ac ? "AC" : "Non-AC"}</p>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-[10px] text-primary font-bold">From ₹{rel.startingPrice.toLocaleString()} / day</span>
                        <Link
                          href={`/fleet/${rel.id}`}
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
          )}

          {/* Terms & Exclusions */}
          <section className="bg-surface-container-low border border-surface-container-highest/60 rounded-lg p-5 shadow-sm">
            <h3 className="font-display font-bold text-base text-primary mb-3 flex items-center gap-2">
              <Info className="h-5 w-5 text-secondary" />
              Important Notes
            </h3>
            <ul className="flex flex-col gap-2.5 text-[11px] sm:text-xs text-on-surface-variant font-medium leading-relaxed">
              <li>Rental charges are calculated from our garage in Guindy and back to garage.</li>
              <li>Tolls, state entry permits, and parking clearances are charged extra at actual costs.</li>
              <li>Outstation night-drive travel is generally restricted between 11:00 PM and 5:00 AM for safety.</li>
              <li>Driver allowances (Beta) are mandatory for outstation travel and multi-day packages.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
