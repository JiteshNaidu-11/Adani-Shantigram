import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80", alt: "Shantigram Township View" },
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", alt: "Residential Tower" },
  { src: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=80", alt: "Golf & Greens" },
  { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", alt: "Luxury Living" },
  { src: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&q=80", alt: "Landscaped Gardens" },
  { src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80", alt: "Community Spaces" },
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
    <section id="gallery" className="section-padding bg-background">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-heading"
          >
            Gallery
          </motion.h2>
          <div className="accent-line" />
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
            {galleryImages.map(({ src, alt }) => (
              <Dialog key={alt}>
                <DialogTrigger asChild>
                  <div className="snap-start flex-shrink-0 w-[300px] md:w-[400px] card-lift overflow-hidden group cursor-pointer">
                    <img src={src} alt={alt} className="w-full h-56 md:h-72 object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-5xl w-[95vw] max-h-[95vh] p-0 border-none bg-transparent shadow-none flex justify-center items-center">
                  <DialogTitle className="sr-only">{alt}</DialogTitle>
                  <img src={src} alt={alt} className="max-w-full max-h-[90vh] object-contain rounded-xl" />
                </DialogContent>
              </Dialog>
            ))}
          </div>
          <button onClick={() => scroll(-1)} className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur flex items-center justify-center shadow-lg hover:bg-card transition-colors">
            <ChevronLeft size={20} className="text-foreground" />
          </button>
          <button onClick={() => scroll(1)} className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur flex items-center justify-center shadow-lg hover:bg-card transition-colors">
            <ChevronRight size={20} className="text-foreground" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryCarousel;
