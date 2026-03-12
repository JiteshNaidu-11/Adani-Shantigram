import { MapPin, GraduationCap, Building2, Plane, Train, Bus, HeartPulse, Car } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const locations = [
  { icon: Plane, name: "Sardar Vallabhbhai Patel Airport", distance: "18.9 km" },
  { icon: Train, name: "Kalupur Railway Station", distance: "20.7 km" },
  { icon: Bus, name: "Central Bus Depot", distance: "22.1 km" },
  { icon: Car, name: "SP Ring Road", distance: "Well connected" },
  { icon: GraduationCap, name: "Adani International School", distance: "Within Shantigram" },
  { icon: Building2, name: "Gandhinagar", distance: "Twin city access" },
  { icon: HeartPulse, name: "Hospitals & Wellness", distance: "Nearby" },
  { icon: MapPin, name: "SG Highway", distance: "Prime corridor" },
];

interface LocationMapSectionProps {
  onOpenLead: () => void;
}

const LocationMapSection = ({ onOpenLead }: LocationMapSectionProps) => (
  <section id="location" className="section-padding section-alt">
    <div className="container-custom mx-auto">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          Prime Location
        </motion.h2>
        <div className="accent-line" />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-muted-foreground max-w-lg mx-auto"
        >
          Strategically nestled between Ahmedabad & Gandhinagar on the prestigious SG Highway. Connected to Sanand, Vadodara, Mehsana, Udaipur & more via SP Ring Road.
        </motion.p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="card-lift overflow-hidden h-80 md:h-[420px] bg-secondary relative"
        >
          <iframe
            title="Adani Shantigram location - SG Highway Ahmedabad"
            src="https://www.openstreetmap.org/export/embed.html?bbox=72.58%2C23.18%2C72.72%2C23.26&layer=mapnik&marker=23.22%2C72.65"
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
          />
          <div className="absolute bottom-2 left-2 right-2 md:left-auto md:right-2 md:max-w-xs bg-card/95 backdrop-blur rounded-lg p-2 shadow-lg">
            <p className="font-display text-sm font-medium text-foreground">SG Highway, Ahmedabad – Gandhinagar</p>
            <p className="text-xs text-muted-foreground">Gujarat, India</p>
          </div>
        </motion.div>

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
                className="card-lift p-4 flex items-center gap-3"
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
            <Button onClick={onOpenLead} variant="accent" className="w-full mt-6 rounded-full h-12">
              Get Exact Location
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default LocationMapSection;
