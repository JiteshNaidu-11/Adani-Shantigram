import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, MapPin, Shield } from "lucide-react";

interface HeroSectionProps {
  onOpenLead: () => void;
}

// Hero background – use /hero-1.jpg, /hero-2.jpg, /hero-3.jpg in public/ for your own photos
const heroImages = [
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=90",
  "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1920&q=90",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&q=90",
];

export default function HeroSection({ onOpenLead }: HeroSectionProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % heroImages.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden">
      {/* Background images with crossfade */}
      {heroImages.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[1200ms] ease-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={src}
            alt=""
            className="w-full h-full object-cover object-center scale-105"
          />
        </div>
      ))}
      {/* Layered overlay: dark base + gradient for readability */}
      <div className="absolute inset-0 bg-primary/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-transparent to-primary/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-primary/30" />

      {/* Content */}
      <div className="relative z-10 container-custom mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 flex flex-col items-center text-center min-h-[100dvh] justify-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-white font-semibold text-xs sm:text-sm uppercase tracking-[0.3em] mb-5 drop-shadow-md"
        >
          Adani Shantigram — Gujarat's Largest Integrated Township
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white max-w-4xl leading-[1.1] mb-5 drop-shadow-lg"
        >
          Where The Good Life Begins
        </motion.h1>
        <div className="w-16 h-0.5 rounded-full mb-6 bg-adani-gradient" style={{ height: "2px" }} aria-hidden />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
        >
          Adani Shantigram — 600 acres on SG Highway, between Ahmedabad & Gandhinagar. Premium homes, villas, golf club & world-class amenities.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-5 mb-12"
        >
          <Button
            onClick={onOpenLead}
            size="lg"
            variant="accent"
            className="rounded-full px-8 py-6 text-base font-semibold shadow-xl transition-opacity"
          >
            Get Brochure & Pricing
          </Button>
          <Button
            onClick={onOpenLead}
            size="lg"
            variant="outline"
            className="rounded-full border-2 border-white/70 bg-white/10 text-white hover:bg-white/20 hover:border-white backdrop-blur-sm px-8 py-6"
          >
            Book Site Visit
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-6 sm:gap-10 text-white/90 text-sm"
        >
          <span className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
              <Shield size={14} className="text-white" />
            </span>
            RERA Registered
          </span>
          <span className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
              <MapPin size={14} className="text-white" />
            </span>
            SG Highway · 18.9 km to Airport
          </span>
        </motion.div>
      </div>

      {/* Slider dots + scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-5 z-10">
        <div className="flex gap-2.5">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-10 bg-adani-gradient" : "w-1.5 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <a
          href="#about"
          className="flex flex-col items-center gap-1.5 text-white/70 hover:text-white transition-colors"
        >
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em]">Scroll</span>
          <ChevronDown size={20} className="animate-bounce" strokeWidth={2} />
        </a>
      </div>
    </section>
  );
}
