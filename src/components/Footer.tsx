import Link from "next/link";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { businessConfig } from "@/data/config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-[#f9efe4] border-t border-primary-container">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-2.5 group text-white">
            <div className="bg-[#f9efe4] text-primary p-1.5 rounded-full hover:rotate-12 transition-transform duration-300">
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
            <span className="font-display text-2xl font-bold tracking-tight">
              WanderNest
            </span>
          </Link>
          <p className="text-[#ebe1d6]/80 text-sm leading-relaxed max-w-sm">
            "Plan the trip. We'll handle the journey." Comfort travel, reliable vehicle rental, and custom holiday packages across Tamil Nadu and South India.
          </p>
          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-2">
            <a href="https://www.instagram.com/tnwebz?igsh=ZnZ3N3VtamJ2aGJ3" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#f9efe4]/10 hover:bg-secondary rounded-full transition-colors text-white" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/tnwebz/" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#f9efe4]/10 hover:bg-secondary rounded-full transition-colors text-white" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://www.youtube.com/@TNWebz" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#f9efe4]/10 hover:bg-secondary rounded-full transition-colors text-white" aria-label="Youtube">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="flex flex-col gap-4">
          <h3 className="font-display font-semibold text-lg text-white border-l-4 border-secondary-container pl-3">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm text-[#ebe1d6]/80">
            <li>
              <Link href="/destinations" className="hover:text-white hover:underline transition-all">Destinations</Link>
            </li>
            <li>
              <Link href="/packages" className="hover:text-white hover:underline transition-all">Tour Packages</Link>
            </li>
            <li>
              <Link href="/fleet" className="hover:text-white hover:underline transition-all">Vehicle Fleet</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white hover:underline transition-all">Our Services</Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-white hover:underline transition-all">Travel Gallery</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white hover:underline transition-all">About Us</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white hover:underline transition-all">Contact & Enquiry</Link>
            </li>
          </ul>
        </div>

        {/* Popular Destinations Column */}
        <div className="flex flex-col gap-4">
          <h3 className="font-display font-semibold text-lg text-white border-l-4 border-secondary-container pl-3">
            Popular Getaways
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm text-[#ebe1d6]/80">
            <li>
              <Link href="/destinations/ooty" className="hover:text-white hover:underline transition-all">Ooty Hill Station</Link>
            </li>
            <li>
              <Link href="/destinations/kodaikanal" className="hover:text-white hover:underline transition-all">Kodaikanal Valley</Link>
            </li>
            <li>
              <Link href="/destinations/pondicherry" className="hover:text-white hover:underline transition-all">Pondicherry Coastline</Link>
            </li>
            <li>
              <Link href="/destinations/madurai" className="hover:text-white hover:underline transition-all">Madurai Culture Trail</Link>
            </li>
            <li>
              <Link href="/destinations/rameswaram" className="hover:text-white hover:underline transition-all">Rameswaram Holy Island</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="flex flex-col gap-4">
          <h3 className="font-display font-semibold text-lg text-white border-l-4 border-secondary-container pl-3">
            Get in Touch
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-[#ebe1d6]/80">
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-secondary-container shrink-0 mt-0.5" />
              <span>
                {businessConfig.address}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-secondary-container" />
              <a href={`tel:${businessConfig.phoneRaw}`} className="hover:text-white transition-all">{businessConfig.phone}</a>
            </li>
            <li className="flex items-center gap-3">
              <MessageSquare className="h-4 w-4 text-secondary-container" />
              <a href={businessConfig.whatsappLink} className="hover:text-white transition-all">{businessConfig.whatsapp} (WhatsApp)</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-secondary-container" />
              <a href={`mailto:${businessConfig.email}`} className="hover:text-white transition-all">{businessConfig.email}</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer Section (Styled Exactly like the screenshot image but bigger) */}
      <div className="bg-[#020617] text-slate-300 py-10 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-4">
          {/* Left Column: WhatsApp CTA */}
          <a
            href={businessConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 hover:opacity-90 transition-opacity group cursor-pointer w-full lg:w-auto justify-center lg:justify-start"
          >
            <div className="bg-[#00c655] hover:bg-[#00b54d] text-white p-4 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/10 group-hover:scale-105 transition-transform duration-300">
              {/* WhatsApp Logo SVG */}
              <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-sans font-bold text-white text-base tracking-wider uppercase leading-snug">
                LET'S BUILD YOUR ONLINE PRESENCE
              </span>
              <span className="text-slate-400 text-sm mt-1 leading-snug">
                Get a professional website that brings more customers and more growth.
              </span>
            </div>
          </a>

          {/* Divider 1 */}
          <div className="hidden lg:block h-16 w-[1px] bg-slate-800/80 shrink-0"></div>

          {/* Middle Column: Contact Info */}
          <div className="flex flex-col gap-3 text-sm text-slate-300 w-full lg:w-auto items-center lg:items-start my-2 lg:my-0">
            <a href={`tel:${businessConfig.phoneRaw}`} className="flex items-center gap-3.5 hover:text-white transition-colors group">
              <Phone className="h-5 w-5 text-slate-400 group-hover:text-secondary transition-colors animate-none" />
              <span className="font-semibold text-sm">{businessConfig.phone}</span>
            </a>
            <a href={`mailto:${businessConfig.email}`} className="flex items-center gap-3.5 hover:text-white transition-colors group">
              <Mail className="h-5 w-5 text-slate-400 group-hover:text-secondary transition-colors" />
              <span className="font-semibold text-sm">{businessConfig.email}</span>
            </a>
            <a
              href="https://maps.google.com/?q=Tamil+Nadu,+India"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3.5 hover:text-white transition-colors group text-left"
            >
              <MapPin className="h-5.5 w-5.5 text-slate-400 group-hover:text-secondary transition-colors shrink-0 mt-0.5" />
              <span className="font-semibold text-sm">{businessConfig.address}</span>
            </a>
          </div>

          {/* Divider 2 */}
          <div className="hidden lg:block h-16 w-[1px] bg-slate-800/80 shrink-0"></div>

          {/* Right Column: Designed & Developed By */}
          <div className="flex flex-col items-center lg:items-end w-full lg:w-auto">
            <span className="text-xs text-slate-500 font-bold tracking-widest uppercase mb-2">
              DESIGNED & DEVELOPED BY
            </span>
            <a
              href="https://tnwebz.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group hover:opacity-90 transition-opacity"
            >
              {/* Red Z Circle Logo */}
              <div className="group-hover:scale-105 transition-transform duration-300">
                <svg viewBox="0 0 100 100" className="h-9 w-9 shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="46" fill="white" stroke="#e2e8f0" strokeWidth="2" />
                  <path d="M30 30h40v12L42 68h28v12H30V68l28-26H30V30z" fill="#ef4444" />
                </svg>
              </div>
              <span className="font-display font-black text-white tracking-wider text-xl group-hover:text-red-500 transition-colors">
                TNWEBZ
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
