import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Building2, HardHat, Trophy, Users } from "lucide-react";

const INDICATORS = [
  { icon: Award, value: 14, suffix: "+", label: "Years Young" },
  { icon: Building2, value: 31, suffix: "+", label: "Mn. Sq. Ft. Area Developed" },
  { icon: HardHat, value: 108, suffix: "+", label: "Mn. Sq. Ft. Area Under Development" },
  { icon: Trophy, value: 50, suffix: "+", label: "Awards Won" },
  { icon: Users, value: 10000, suffix: "+", label: "Happy Families" },
];

function AnimatedNumber({ value, suffix, active }: { value: number; suffix: string; active: boolean }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!active) return;
    const duration = 1500;
    const steps = 40;
    const step = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else setDisplay(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [value, active]);

  return (
    <span>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

function IndicatorCard({ icon: Icon, value, suffix, label, active, idx }: (typeof INDICATORS)[0] & { active: boolean; idx: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      whileHover={{ scale: 1.05, y: -4 }}
      className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-medium transition-shadow"
    >
      <motion.div
        animate={active ? { scale: [1, 1.15, 1] } : {}}
        transition={{ duration: 0.5, delay: idx * 0.1 }}
        className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4"
      >
        <Icon className="w-7 h-7 text-accent" />
      </motion.div>
      <p className="font-display text-3xl md:text-4xl text-foreground mb-1">
        <AnimatedNumber value={value} suffix={suffix} active={active} />
      </p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </motion.div>
  );
}

export default function TrustIndicators() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [started, setStarted] = useState(false);
  useEffect(() => {
    if (inView && !started) setStarted(true);
  }, [inView, started]);

  return (
    <section className="section-padding section-alt">
      <div className="container-custom mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Our Legacy in Numbers</h2>
          <div className="accent-line" />
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {INDICATORS.map((item, idx) => (
            <IndicatorCard key={item.label} {...item} active={started} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
