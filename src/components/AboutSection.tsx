import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const aboutImage = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=85";
const ABOUT_VIDEO_ID = "o8SmfPL5OMM";
const aboutVideoSrc = (autoplay: boolean) =>
  `https://www.youtube.com/embed/${ABOUT_VIDEO_ID}?autoplay=${autoplay ? 1 : 0}&mute=0&rel=0`;

interface AboutSectionProps {
  onOpenLead: () => void;
}

export default function AboutSection({ onOpenLead }: AboutSectionProps) {
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => setInView(entries[0].isIntersecting),
      { threshold: 0.35, rootMargin: "0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom mx-auto space-y-10 lg:space-y-14">
        {/* Row 1: Image (left) + Data (right) aligned */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden card-lift order-2 lg:order-1"
          >
            <img src={aboutImage} alt="Township lifestyle" className="w-full h-72 lg:h-[400px] object-cover" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-accent/90 flex items-center justify-center text-accent-foreground font-display text-2xl font-semibold shadow-lg">
              600+
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <h2 className="section-heading mb-2">Where The Good Life Begins</h2>
            <div className="accent-line-left !mx-0" />
            <p className="text-muted-foreground leading-relaxed mb-6">
              Adani Shantigram is a visionary 600-acre integrated township by Adani Realty, strategically nestled between Ahmedabad and Gandhinagar along the prestigious SG Highway. It sets a new benchmark in Indian urban development with a thoughtfully planned environment for a vibrant, inclusive, and future-ready lifestyle.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With The Belvedere Golf & Country Club, Adani International School, 24×7 security, Shoppers' Plaza, and over 3,500 families already calling it home — it's a thriving community.
            </p>
            <Button onClick={onOpenLead} className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-8">
              Download Brochure
            </Button>
          </motion.div>
        </div>

        {/* Row 2: Video in landscape, full width; plays when in view, stops when scrolled away; volume on by default */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden card-lift aspect-video w-full"
        >
          {inView ? (
            <iframe
              key="about-video"
              src={aboutVideoSrc(true)}
              title="About Adani Shantigram township"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div
              className="w-full h-full bg-cover bg-center cursor-pointer"
              style={{ backgroundImage: `url(https://img.youtube.com/vi/${ABOUT_VIDEO_ID}/maxresdefault.jpg)` }}
              aria-hidden
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}
