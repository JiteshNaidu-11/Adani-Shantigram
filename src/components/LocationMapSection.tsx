import { MapPin, GraduationCap, Building2, ShoppingBag, Plane, Train, HeartPulse, Coffee } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const locations = [
  { icon: GraduationCap, name: "International School", distance: "1.2 km" },
  { icon: Building2, name: "IT Tech Park", distance: "2.5 km" },
  { icon: ShoppingBag, name: "Phoenix Mall", distance: "3 km" },
  { icon: HeartPulse, name: "Columbia Hospital", distance: "1.8 km" },
  { icon: Plane, name: "KIA Airport", distance: "28 km" },
  { icon: Train, name: "Whitefield Metro", distance: "0.8 km" },
  { icon: Coffee, name: "Restaurants Hub", distance: "1 km" },
  { icon: MapPin, name: "Outer Ring Road", distance: "2 km" },
];

interface LocationMapSectionProps {
  onOpenLead: () => void;
}

const LocationMapSection = ({ onOpenLead }: LocationMapSectionProps) => (
  <section id="location" className="section-padding">
    <div className="container-luxury">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl text-foreground"
        >
          Prime Location
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
          Strategically located in Whitefield — Bangalore's most sought-after residential corridor.
        </motion.p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="luxury-card overflow-hidden h-80 md:h-[420px] bg-secondary flex items-center justify-center relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10" />
          <div className="text-center z-10">
            <MapPin size={48} className="text-primary mx-auto mb-3" />
            <p className="font-display text-lg text-foreground">Whitefield, Bangalore</p>
            <p className="text-muted-foreground text-sm">Interactive map available on request</p>
          </div>
        </motion.div>

        {/* Location cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
          }}
        >
          <div className="grid grid-cols-2 gap-3">
            {locations.map(({ icon: Icon, name, distance }) => (
              <motion.div
                key={name}
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0, transition: { type: "tween", ease: "easeOut", duration: 0.5 } }
                }}
                className="luxury-card p-4 flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{name}</p>
                  <p className="text-xs text-muted-foreground">{distance}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
          >
            <Button onClick={onOpenLead} className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg h-12">
              Get Exact Location
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default LocationMapSection;
