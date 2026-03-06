import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import masterplanImg from "@/assets/masterplan.jpg";
import clubhouseImg from "@/assets/clubhouse.jpg";

interface PlanImageCardProps {
  image: string;
  label: string;
  onOpenLead: () => void;
}

const PlanImageCard = ({ image, label, onOpenLead, idx }: PlanImageCardProps & { idx: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay: idx * 0.2 }}
    className="luxury-card overflow-hidden relative group cursor-pointer"
    onClick={onOpenLead}
  >
    <img
      src={image}
      alt={label}
      className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent transition-all duration-400 group-hover:from-foreground/80" />
    <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
      <Button variant="outline" className="bg-background text-primary border-transparent hover:bg-background/90 rounded-lg">
        {label}
      </Button>
    </div>
  </motion.div>
);

interface PlansSectionProps {
  onOpenLead: () => void;
}

const PlansSection = ({ onOpenLead }: PlansSectionProps) => (
  <section className="section-padding section-alt">
    <div className="container-luxury">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl text-foreground"
        >
          Plans & Layouts
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="gold-divider origin-center"
        />
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <PlanImageCard image={masterplanImg} label="Request Master Plan" onOpenLead={onOpenLead} idx={0} />
        <PlanImageCard image={clubhouseImg} label="Request Unit Plan" onOpenLead={onOpenLead} idx={1} />
      </div>
    </div>
  </section>
);

export default PlansSection;
