import { Building2, TreePine, Shield, Trophy, Car, Dumbbell, GraduationCap, HeartPulse } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  { icon: Building2, title: "Adani Shantigram", desc: "600-acre integrated township on SG Highway — Gujarat's largest" },
  { icon: TreePine, title: "Golf & Country Club", desc: "The Belvedere Golf and Country Club at your doorstep" },
  { icon: Shield, title: "24×7 Security", desc: "Multi-tier security for you and your family" },
  { icon: Trophy, title: "Sports & Recreation", desc: "Cricket ground, football ground & aqua shows" },
  { icon: Car, title: "Well Connected", desc: "Airport 18.9 km · Railway 20.7 km · SP Ring Road" },
  { icon: Dumbbell, title: "Health & Wellness", desc: "Dedicated spaces for fitness and relaxation" },
  { icon: GraduationCap, title: "Adani International School", desc: "Premium education within Shantigram" },
  { icon: HeartPulse, title: "Senior Friendly", desc: "Inclusive community with cycling & bus service" },
];

export default function HighlightCardsGrid() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="section-heading">Why Adani Shantigram</h2>
          <div className="accent-line" />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {highlights.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
              transition={{ type: "spring", stiffness: 80, damping: 16 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative p-6 text-center rounded-2xl bg-card border border-border shadow-sm hover:shadow-lg hover:shadow-accent/10 hover:border-accent/30 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="relative">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-accent/10 border-2 border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all duration-300 group-hover:scale-110">
                  <Icon size={24} strokeWidth={2} />
                </div>
                <h3 className="font-display text-base md:text-lg font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
