import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import heroImg1 from "@/assets/hero-1.jpg";
import heroImg2 from "@/assets/hero-2.jpg";
import aboutImg from "@/assets/about.jpg";
import clubhouseImg from "@/assets/clubhouse.jpg";
import galleryImg1 from "@/assets/gallery-1.jpg";
import galleryImg2 from "@/assets/gallery-2.jpg";

const images = [
  { src: heroImg1, alt: "Exterior View" },
  { src: heroImg2, alt: "Living Room" },
  { src: aboutImg, alt: "Bedroom" },
  { src: clubhouseImg, alt: "Clubhouse" },
  { src: galleryImg1, alt: "Fitness Center" },
  { src: galleryImg2, alt: "Gardens" },
];

const GalleryCarousel = () => {
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
          scrollRef.current.scrollBy({ left: 360, behavior: "smooth" });
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  return (
    <section id="gallery" className="section-padding section-alt">
      <div className="container-luxury">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-4xl text-foreground"
          >
            Gallery
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
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div ref={scrollRef} className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4" style={{ scrollbarWidth: "none" }}>
            {images.map(({ src, alt }) => (
              <Dialog key={alt}>
                <DialogTrigger asChild>
                  <div className="snap-start flex-shrink-0 w-[300px] md:w-[400px] luxury-card overflow-hidden group cursor-pointer">
                    <img src={src} alt={alt} className="w-full h-56 md:h-72 object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-5xl w-[95vw] max-h-[95vh] p-0 border-none bg-transparent shadow-none flex justify-center items-center">
                  <DialogTitle className="sr-only">{alt}</DialogTitle>
                  <img src={src} alt={alt} className="max-w-full max-h-[90vh] object-contain rounded-md" />
                </DialogContent>
              </Dialog>
            ))}
          </div>
          <button onClick={() => scroll(-1)} className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur flex items-center justify-center luxury-shadow hover:bg-card transition-colors">
            <ChevronLeft size={20} className="text-foreground" />
          </button>
          <button onClick={() => scroll(1)} className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur flex items-center justify-center luxury-shadow hover:bg-card transition-colors">
            <ChevronRight size={20} className="text-foreground" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryCarousel;
