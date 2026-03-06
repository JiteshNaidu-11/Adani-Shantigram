import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import aboutImg from "@/assets/about.jpg";

interface AboutSectionProps {
  onOpenLead: () => void;
}

const AboutSection = ({ onOpenLead }: AboutSectionProps) => (
  <section id="about" className="section-padding">
    <div className="container-luxury">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-2">
            A Legacy of Luxury Living
          </h2>
          <div className="gold-divider !mx-0" />
          <p className="text-muted-foreground font-body text-base md:text-lg leading-[1.7] mb-6">
            Verdant Heights is an ultra-premium residential development by one of Bangalore's most trusted builders.
            Spread across 12 acres of lush greenery, it offers thoughtfully designed residences that blend modern architecture
            with nature-inspired living. Every detail — from Italian marble flooring to smart home automation — is crafted
            for discerning homeowners who accept nothing but the finest.
          </p>
          <p className="text-muted-foreground font-body text-base md:text-lg leading-[1.7] mb-8">
            With RERA registration, Tier-1 construction partners, and 80% open space, Verdant Heights is not just a home — it's a statement.
          </p>
          <Button onClick={onOpenLead} className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-8">
            Download Brochure
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="luxury-card overflow-hidden"
        >
          <img src={aboutImg} alt="Premium interiors" className="w-full h-80 md:h-[420px] object-cover rounded-lg" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
