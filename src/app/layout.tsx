import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "WanderNest Travels | Premium Tours, Travel & Vehicle Rental in Chennai",
  description: "Explore Tamil Nadu and South India with comfortable tour packages, vehicle rentals, and customized travel experiences from Chennai.",
  keywords: [
    "travel agency Chennai",
    "car rental Chennai",
    "Ooty tour packages",
    "Kodaikanal tour",
    "outstation travels",
    "tempo traveller rental Chennai",
    "tourist bus rental",
    "WanderNest Travels",
    "South India tours",
    "wedding transportation Chennai",
    "airport transfer Chennai"
  ].join(", "),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-on-background selection:bg-primary-container/20 selection:text-primary">
        <Navbar />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
