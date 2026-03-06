import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Shield, MapPin, TreePine } from "lucide-react";
import heroImg1 from "@/assets/hero-1.jpg";
import heroImg2 from "@/assets/hero-2.jpg";

interface HeroSectionProps {
  onOpenLead: () => void;
}

const slides = [heroImg1, heroImg2];

const HeroSection = ({ onOpenLead }: HeroSectionProps) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[100svh] min-h-[600px] overflow-hidden">
      {/* Background images */}
      {slides.map((src, i) => (
        <img
          key={i}
          src={src}
          alt="Verdant Heights luxury residences"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsla(155,45%,12%,0.75) 0%, hsla(220,12%,10%,0.55) 100%)" }} />

      {/* Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="container-luxury px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-left md:text-left text-center mx-auto md:mx-0"
          >
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}
              className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-4"
            >
              Premium Residences · Whitefield, Bangalore
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-6"
            >
              Puravankara Group
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.7 }}
              className="text-primary-foreground/80 font-body text-lg md:text-xl mb-8 leading-relaxed"
            >
              Where luxury meets nature. Exquisitely crafted 2, 3 &amp; 4 BHK residences starting from ₹1.2 Cr.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.7 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              {[
                { icon: Shield, text: "RERA Registered" },
                { icon: MapPin, text: "Whitefield Location" },
                { icon: TreePine, text: "80% Open Space" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                  <Icon size={16} className="text-accent" />
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Button
                onClick={onOpenLead}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg text-base px-8 h-13"
              >
                Get Pricing Details <ChevronRight size={18} className="ml-1" />
              </Button>
              <Button
                onClick={onOpenLead}
                size="lg"
                className="border-2 border-primary-foreground/60 bg-transparent text-primary-foreground hover:bg-primary-foreground/20 rounded-lg text-base px-8 h-13"
              >
                Book Site Visit
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? "bg-accent w-6" : "bg-primary-foreground/40"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
