import { useRef, useState, useEffect } from "react";
import { Waves, Dumbbell, TreePine, Coffee, Baby, Shield, ChevronLeft, ChevronRight, GraduationCap, Star, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import clubhouseImg from "@/assets/clubhouse.jpg";
import galleryImg1 from "@/assets/gallery-1.jpg";
import galleryImg2 from "@/assets/gallery-2.jpg";
import gymPeopleImg from "@/assets/gym-people.png";
import gardenPeopleImg from "@/assets/garden-people.png";
import clubhousePeopleImg from "@/assets/clubhouse-people.png";
import schoolKidsImg from "@/assets/school-kids.png";
import poolPeopleImg from "@/assets/pool-people.png";
import conciergePeopleImg from "@/assets/concierge-people.png";

const amenities = [
  { image: clubhouseImg, title: "Infinity Pool", desc: "Temperature-controlled rooftop pool", icon: Waves },
  { image: poolPeopleImg, title: "Leisure & Swim", desc: "Relax and unwind in style", icon: Waves },
  { image: galleryImg2, title: "Landscaped Gardens", desc: "12 acres of curated green spaces", icon: TreePine },
  { image: gardenPeopleImg, title: "Nature Walks", desc: "Stroll through endless greenery", icon: TreePine },
  { image: galleryImg1, title: "Kids Play Zone", desc: "Safe, engaging play areas for children", icon: Baby },
  { image: schoolKidsImg, title: "Top Schools Nearby", desc: "Premium education just minutes away", icon: GraduationCap },
  { image: clubhouseImg, title: "Clubhouse Architecture", desc: "Stunning contemporary design", icon: Building2 },
  { image: clubhousePeopleImg, title: "Community Lounge", desc: "Socialize with like-minded peers", icon: Coffee },
  { image: galleryImg1, title: "Premium Fitness Center", desc: "World-class gym facilities", icon: Dumbbell },
  { image: gymPeopleImg, title: "Active Lifestyle", desc: "State of the art equipment", icon: Dumbbell },
  { image: galleryImg2, title: "24/7 Security", desc: "Multi-tier security with smart access", icon: Shield },
  { image: conciergePeopleImg, title: "5-Star Hospitality", desc: "Dedicated concierge at your service", icon: Star },
];

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
    <section id="amenities" className="section-padding">
      <div className="container-luxury">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-4xl text-foreground"
          >
            World-Class Amenities
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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="relative group/carousel"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div ref={scrollRef} className="grid grid-rows-2 grid-flow-col gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4" style={{ scrollbarWidth: "none" }}>
            {[...amenities, ...amenities].map(({ image, title, desc }, idx) => (
              <Dialog key={`${title}-${idx}`}>
                <DialogTrigger asChild>
                  <div className="snap-start flex-shrink-0 w-[280px] md:w-[350px] luxury-card overflow-hidden group cursor-pointer flex flex-col text-left">
                    <div className="overflow-hidden">
                      <img src={image} alt={title} className="w-full h-40 md:h-48 object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-4 flex-1 bg-card border-t">
                      <h3 className="font-display text-base md:text-lg text-foreground mb-1">{title}</h3>
                      <p className="text-muted-foreground text-sm">{desc}</p>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-5xl w-[95vw] max-h-[95vh] p-0 border-none bg-transparent shadow-none flex justify-center items-center">
                  <DialogTitle className="sr-only">{title}</DialogTitle>
                  <img src={image} alt={title} className="max-w-full max-h-[90vh] object-contain rounded-md" />
                </DialogContent>
              </Dialog>
            ))}
          </div>

          <button onClick={() => scroll(-1)} className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur flex items-center justify-center luxury-shadow hover:bg-card transition-colors md:opacity-0 md:group-hover/carousel:opacity-100 z-10">
            <ChevronLeft size={20} className="text-foreground" />
          </button>
          <button onClick={() => scroll(1)} className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur flex items-center justify-center luxury-shadow hover:bg-card transition-colors md:opacity-0 md:group-hover/carousel:opacity-100 z-10">
            <ChevronRight size={20} className="text-foreground" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
