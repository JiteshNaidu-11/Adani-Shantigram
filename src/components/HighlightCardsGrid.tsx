import { Building2, TreePine, Shield, Waves, Car, Dumbbell, GraduationCap, HeartPulse } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  { icon: Building2, title: "Premium Towers", desc: "G+25 luxury towers with panoramic views" },
  { icon: TreePine, title: "80% Open Space", desc: "Lush landscaped gardens & parks" },
  { icon: Shield, title: "RERA Registered", desc: "Transparent & legally compliant" },
  { icon: Waves, title: "Infinity Pool", desc: "Rooftop pool with city skyline views" },
  { icon: Car, title: "2x Parking", desc: "Dedicated double car parking per unit" },
  { icon: Dumbbell, title: "World-Class Gym", desc: "State-of-the-art fitness center" },
  { icon: GraduationCap, title: "Top Schools Nearby", desc: "Within 2 km of leading institutions" },
  { icon: HeartPulse, title: "Health Hub", desc: "Hospital & wellness center access" },
];

const HighlightCardsGrid = () => (
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
          Why Verdant Heights
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="gold-divider origin-center"
        />
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } }
        }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
      >
        {highlights.map(({ icon: Icon, title, desc }) => (
          <motion.div
            key={title}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 15 } }
            }}
            className="luxury-card p-6 text-center group cursor-default"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
              <Icon size={22} className="text-primary" />
            </div>
            <h3 className="font-display text-base md:text-lg text-foreground mb-1">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HighlightCardsGrid;
