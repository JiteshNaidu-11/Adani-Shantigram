import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface PricingCardProps {
  badge?: string;
  type: string;
  area: string;
  price: string;
  elevated?: boolean;
  onOpenLead: () => void;
}

const PricingCard = ({ badge, type, area, price, elevated, onOpenLead, idx }: PricingCardProps & { idx: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay: idx * 0.15 }}
    className={`luxury-card p-6 md:p-8 text-center relative ${elevated ? "md:-mt-4 md:scale-105 ring-2 ring-accent z-10" : ""}`}
  >
    {badge && (
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap">
        {badge}
      </span>
    )}
    <h3 className="font-display text-2xl text-foreground mb-2 mt-2">{type}</h3>
    <p className="text-muted-foreground text-sm mb-4">{area}</p>
    <div className="w-12 h-[1px] bg-gold mx-auto mb-4" />
    <p className="font-display text-3xl md:text-4xl text-foreground mb-6">{price}</p>
    <Button onClick={onOpenLead} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg h-12">
      Get Cost Sheet
    </Button>
  </motion.div>
);

interface PricingSectionProps {
  onOpenLead: () => void;
}

const PricingSection = ({ onOpenLead }: PricingSectionProps) => (
  <section id="pricing" className="section-padding">
    <div className="container-luxury">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl text-foreground"
        >
          Pricing
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="gold-divider origin-center"
        />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-muted-foreground max-w-lg mx-auto"
        >
          Thoughtfully priced for exceptional value in Bangalore's most coveted location.
        </motion.p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto items-center">
        <PricingCard type="2 BHK" area="1,250 – 1,400 sq.ft." price="₹1.2 Cr*" onOpenLead={onOpenLead} idx={0} />
        <PricingCard type="3 BHK" area="1,650 – 1,850 sq.ft." price="₹1.85 Cr*" badge="Most Popular" elevated onOpenLead={onOpenLead} idx={1} />
        <PricingCard type="4 BHK" area="2,200 – 2,500 sq.ft." price="₹2.8 Cr*" onOpenLead={onOpenLead} idx={2} />
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-center text-muted-foreground text-xs mt-6"
      >
        *Prices are indicative and subject to change. T&C apply.
      </motion.p>
    </div>
  </section>
);

export default PricingSection;
