import Link from "next/link";
import { Compass, ArrowRight, Home, MapPin, Package } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-28 pb-16 sm:pb-20 px-4 sm:px-6 md:px-margin-desktop">
      <div className="max-w-xl mx-auto text-center glass-card-light rounded-2xl sm:rounded-3xl p-6 sm:p-12 shadow-2xl border border-white/70 flex flex-col items-center">
        <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
          <Compass className="h-10 w-10 text-secondary animate-pulse" />
        </div>

        <span className="text-xs font-bold text-secondary uppercase tracking-widest mb-2">404 Error</span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-primary mb-4">
          Journey Off the Map
        </h1>
        <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-8 max-w-md">
          We couldn't find the page or destination you were looking for. It might have moved or the link may be outdated.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 w-full justify-center mb-8">
          <Link
            href="/"
            className="bg-secondary hover:bg-secondary/90 text-white font-semibold py-3 px-6 rounded-full text-xs shadow transition-all flex items-center justify-center gap-2"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          <Link
            href="/destinations"
            className="bg-white hover:bg-surface-container-high text-primary border border-outline-variant/60 font-semibold py-3 px-6 rounded-full text-xs transition-all flex items-center justify-center gap-2"
          >
            <MapPin className="h-4 w-4 text-primary" />
            Explore Destinations
          </Link>
        </div>

        <div className="border-t border-surface-container/60 pt-6 w-full text-center">
          <p className="text-xs text-on-surface-variant font-medium mb-3">
            Looking for something specific?
          </p>
          <div className="flex justify-center gap-4 text-xs font-bold text-primary">
            <Link href="/packages" className="hover:text-secondary flex items-center gap-1 transition-colors">
              <Package className="h-3.5 w-3.5" /> Packages
            </Link>
            <span className="text-surface-container-highest">&bull;</span>
            <Link href="/fleet" className="hover:text-secondary transition-colors">
              Vehicle Fleet
            </Link>
            <span className="text-surface-container-highest">&bull;</span>
            <Link href="/contact" className="hover:text-secondary transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
