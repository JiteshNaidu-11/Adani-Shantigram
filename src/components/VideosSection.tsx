import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const VIDEOS = [
  { type: "youtube" as const, id: "EoUtuQcP8-I", title: "Township Experience" },
  { type: "youtube" as const, id: "vLEM2lTe5nQ", title: "Living the Good Life" },
  { type: "youtube" as const, id: "X41CajKozbM", title: "Shantigram Life" },
  { type: "youtube" as const, id: "NviKH3DLgI8", title: "Community & Amenities" },
  { type: "youtube" as const, id: "HwJk00tEbsE", title: "Project Highlights" },
];

export default function VideosSection() {
  const [current, setCurrent] = useState(0);
  const [inView, setInView] = useState(false);
  const video = VIDEOS[current];
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => setInView(entries[0].isIntersecting),
      { threshold: 0.35, rootMargin: "0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleVideoChange = (nextIndex: number) => setCurrent(nextIndex);

  const youtubeSrc = (v: (typeof VIDEOS)[number]) =>
    `https://www.youtube.com/embed/${v.id}${inView ? "?autoplay=1" : ""}`;

  return (
    <section className="section-padding bg-background">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Fulfilling Your Housing Dreams</h2>
          <div className="accent-line" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            Adani Shantigram Township – where the future lies. Watch how families are living the good life.
          </p>
        </motion.div>

        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden card-lift bg-black/5"
        >
          <div className="aspect-video w-full bg-black relative [filter:none]">
            {inView ? (
              <iframe
                key={`${video.id}-${current}`}
                src={youtubeSrc(video)}
                title={video.title}
                className="absolute inset-0 w-full h-full [filter:none]"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div
                className="absolute inset-0 bg-cover bg-center [filter:none]"
                style={{ backgroundImage: `url(https://img.youtube.com/vi/${video.id}/mqdefault.jpg)` }}
              />
            )}
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
            <button
              type="button"
              onClick={() => handleVideoChange(current === 0 ? VIDEOS.length - 1 : current - 1)}
              className="w-10 h-10 rounded-full bg-card/90 backdrop-blur flex items-center justify-center text-foreground hover:bg-card shadow-lg transition-colors"
              aria-label="Previous video"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="text-sm font-medium text-white drop-shadow-lg bg-black/30 px-3 py-1 rounded-full">
              {current + 1} / {VIDEOS.length}
            </span>
            <button
              type="button"
              onClick={() => handleVideoChange(current === VIDEOS.length - 1 ? 0 : current + 1)}
              className="w-10 h-10 rounded-full bg-card/90 backdrop-blur flex items-center justify-center text-foreground hover:bg-card shadow-lg transition-colors"
              aria-label="Next video"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {VIDEOS.map((v, i) => (
            <button
              key={v.id}
              type="button"
              onClick={() => handleVideoChange(i)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                i === current ? "bg-accent text-accent-foreground" : "bg-secondary text-muted-foreground hover:bg-secondary/80"
              }`}
            >
              {v.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
