import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Shield, MapPin, TreePine, Calendar } from "lucide-react";
import heroImg1 from "@/assets/hero-1.jpg";
import heroImg2 from "@/assets/hero-2.jpg";

interface HeroSectionProps {
  onOpenLead: () => void;
}

const popAnimation = {
  whileHover: { scale: 1.07 },
  animate: {
    scale: [1, 1.06, 1],
    boxShadow: [
      "0px 4px 10px rgba(0,0,0,0.15)",
      "0px 12px 28px rgba(0,0,0,0.35)",
      "0px 4px 10px rgba(0,0,0,0.15)"
    ]
  },
  transition: {
    duration: 1.2,
    repeat: Infinity,
    ease: "easeInOut" as const
  }
};

const slides = [heroImg1, heroImg2];

export default function HeroSection({ onOpenLead }: HeroSectionProps) {

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (

<section className="relative w-full min-h-screen overflow-hidden">

{/* BACKGROUND */}

{slides.map((src, i) => (
<img
key={i}
src={src}
className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
style={{ opacity: i === current ? 1 : 0 }}
/>
))}

<div className="absolute inset-0 bg-black/60" />

{/* CONTENT */}

<div className="relative z-10 container mx-auto px-6 lg:px-10 min-h-screen flex items-center pt-24 md:pt-28 lg:pt-32">

<div className="grid lg:grid-cols-[380px_1fr] gap-12 items-center w-full">

{/* LEFT PROPERTY CARD */}

<div className="order-2 lg:order-1">

<div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-[380px] mx-auto lg:mx-0">

<div className="bg-primary text-center py-3 font-semibold text-white">
Pre Launch
</div>

<div className="p-6 space-y-3">

<h3 className="text-xl font-display">
PURAVANKARA GROUP
</h3>

<p className="text-sm text-gray-500">
Whitefield, East Bangalore
</p>

<div className="grid grid-cols-2 gap-y-3 text-sm mt-4">

<span>Property Type</span>
<span className="text-right font-semibold">Luxury Residences</span>

<span>Developer</span>
<span className="text-right font-semibold">Puravankara Ltd</span>

<span>Total Units</span>
<span className="text-right font-semibold">1200+ Units</span>

<span>Configuration</span>
<span className="text-right font-semibold">2, 3 & 4 BHK</span>

<span>Land Area</span>
<span className="text-right font-semibold">12 Acres</span>

<span>RERA</span>
<span className="text-right font-semibold">Registered</span>

</div>

</div>

<div className="bg-primary text-center py-3 font-semibold text-white">
Total Units : 1200+
</div>

<div className="p-5">

<motion.button
{...popAnimation}
onClick={onOpenLead}
className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-md font-semibold hover:bg-primary-dark"
>
<Calendar size={18} />
Express Your Interest
</motion.button>

</div>

</div>

</div>

{/* HERO TEXT */}

<motion.div
initial={{ opacity: 0, y: 40 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
className="order-1 lg:order-2 text-center lg:text-left max-w-3xl"
>

<p className="text-accent text-sm tracking-[0.2em] uppercase mb-4">
PREMIUM RESIDENCES · WHITEFIELD, BANGALORE
</p>

<h1 className="text-4xl md:text-6xl font-display text-white mb-6 leading-tight">
Puravankara Group
</h1>

<p className="text-white/80 text-lg md:text-xl mb-10 leading-relaxed">
Where luxury meets nature. Exquisitely crafted 2, 3 & 4 BHK residences starting from ₹1.2 Cr.
</p>

{/* FEATURES */}

<div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-10 text-white/80 text-sm">

<div className="flex items-center gap-2">
<Shield size={16}/> RERA Registered
</div>

<div className="flex items-center gap-2">
<MapPin size={16}/> Whitefield Location
</div>

<div className="flex items-center gap-2">
<TreePine size={16}/> 80% Open Space
</div>

</div>

{/* CTA */}

<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

<Button
onClick={onOpenLead}
size="lg"
className="bg-primary text-primary-foreground px-10"
>
Get Pricing Details <ChevronRight size={18}/>
</Button>

<Button
onClick={onOpenLead}
size="lg"
variant="outline"
className="border-white text-white px-10"
>
Book Site Visit
</Button>

</div>

</motion.div>

</div>

</div>

{/* SLIDER DOTS */}

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">

{slides.map((_, i) => (
<button
key={i}
onClick={() => setCurrent(i)}
className={`w-2 h-2 rounded-full transition-all ${
i === current ? "bg-primary w-6" : "bg-white/40"
}`}
/>
))}

</div>

</section>
);
}