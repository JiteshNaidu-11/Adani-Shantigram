import { useRef, useState, useEffect } from "react";
import { Waves, Dumbbell, TreePine, Coffee, Baby, Shield, ChevronLeft, ChevronRight, GraduationCap, Star, Building2, Music } from "lucide-react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";

// Local images in public/images/amenities/ (run: node scripts/download-amenity-images.mjs). Fallback to CDN if missing.
const AMENITY_BASE = "/images/amenities";
const FALLBACKS: Record<string, string> = {
  golf: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=600&q=80",
  sports: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80",
  aqua: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80",
  gardens: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
  "kids-play": "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80",
  school: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80",
  clubhouse: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  shoppers: "https://images.unsplash.com/photo-1567958451986-2de427a4a0be?w=600&q=80",
  fitness: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
  pool: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=600&q=80",
  security: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&q=80",
  temple: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600&q=80",
};

const amenities = [
  { slug: "golf", title: "The Belvedere Golf & Country Club", desc: "World-class golf and country club within Shantigram", icon: TreePine },
  { slug: "sports", title: "Cricket & Football Grounds", desc: "Dedicated sports facilities for the community", icon: Dumbbell },
  { slug: "aqua", title: "Musical Aqua Shows", desc: "Entertainment and aqua experiences", icon: Music },
  { slug: "gardens", title: "Landscaped Gardens", desc: "Curated green spaces across 600 acres", icon: TreePine },
  { slug: "kids-play", title: "Kids Play Zone", desc: "Safe, engaging play areas for children", icon: Baby },
  { slug: "school", title: "Adani International School", desc: "Premium education within Shantigram", icon: GraduationCap },
  { slug: "clubhouse", title: "Clubhouse & Lounges", desc: "Contemporary design and community spaces", icon: Building2 },
  { slug: "shoppers", title: "Shoppers' Plaza", desc: "Daily essentials and retail within Shantigram", icon: Coffee },
  { slug: "fitness", title: "Fitness & Wellness", desc: "State-of-the-art gym and wellness facilities", icon: Dumbbell },
  { slug: "pool", title: "Swimming Pool", desc: "Leisure and swim in style", icon: Waves },
  { slug: "security", title: "24×7 Security", desc: "Multi-tier security with smart access", icon: Shield },
  { slug: "temple", title: "Jain Derasar & Shiv Temple", desc: "Places of worship within Shantigram", icon: Star },
];

// Shoppers Plaza, Security, Temple use CDN directly for correct imagery
const USE_CDN_DIRECT: Record<string, string> = {
  shoppers: "https://images.unsplash.com/photo-1567958451986-2de427a4a0be?w=600&q=80",
  security: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&q=80",
  temple: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600&q=80",
};

function AmenityImage({ slug, title, className = "" }: { slug: string; title: string; className?: string }) {
  const directUrl = USE_CDN_DIRECT[slug];
  const src = directUrl ?? `${AMENITY_BASE}/${slug}.jpg`;
  const fallback = FALLBACKS[slug];
  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (fallback && e.currentTarget.src !== fallback) e.currentTarget.src = fallback;
  };
  const baseClass = "w-full object-cover transition-transform duration-500 group-hover:scale-105";
  return <img src={src} alt={title} className={className || `${baseClass} h-40 md:h-48`} onError={handleError} />;
}

const AmenitiesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section id="amenities" className="section-padding section-alt">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-heading"
          >
            Amenities & Facilities
          </motion.h2>
          <div className="accent-line" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="relative group/carousel"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div ref={scrollRef} className="grid grid-rows-2 grid-flow-col gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4" style={{ scrollbarWidth: "none" }}>
            {amenities.map(({ slug, title, desc }, idx) => (
              <Dialog key={`${title}-${idx}`}>
                <DialogTrigger asChild>
                  <div className="snap-start flex-shrink-0 w-[280px] md:w-[350px] card-lift overflow-hidden group cursor-pointer flex flex-col text-left">
                    <div className="overflow-hidden">
                      <AmenityImage slug={slug} title={title} />
                    </div>
                    <div className="p-4 flex-1 bg-card border-t">
                      <h3 className="font-display text-base md:text-lg text-foreground mb-1">{title}</h3>
                      <p className="text-muted-foreground text-sm">{desc}</p>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-5xl w-[95vw] max-h-[95vh] p-0 border-none bg-transparent shadow-none flex justify-center items-center">
                  <DialogTitle className="sr-only">{title}</DialogTitle>
                  <AmenityImage slug={slug} title={title} className="max-w-full max-h-[90vh] object-contain rounded-xl" />
                </DialogContent>
              </Dialog>
            ))}
          </div>

          <button onClick={() => scroll(-1)} className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur flex items-center justify-center shadow-lg hover:bg-card transition-colors md:opacity-0 md:group-hover/carousel:opacity-100 z-10">
            <ChevronLeft size={20} className="text-foreground" />
          </button>
          <button onClick={() => scroll(1)} className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur flex items-center justify-center shadow-lg hover:bg-card transition-colors md:opacity-0 md:group-hover/carousel:opacity-100 z-10">
            <ChevronRight size={20} className="text-foreground" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
