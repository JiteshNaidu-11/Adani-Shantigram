import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const SITE_VISIT_VIDEO = "/Shantigram_realty.mp4";

const SiteVisitSection = () => {
  const [form, setForm] = useState({ name: "", mobile: "", consent: false });
  const [submitted, setSubmitted] = useState(false);
  const [inView, setInView] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
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

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (inView) {
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  }, [inView]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.mobile || !form.consent) return;
    const formId = import.meta.env.VITE_FORMSPREE_ID;
    if (formId) {
      try {
        await fetch(`https://formspree.io/f/${formId}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name,
            phone: form.mobile,
            _subject: "Adani Shantigram – Site Visit Request",
          }),
        });
      } catch {
        // still show thank you for better UX
      }
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="card-lift overflow-hidden rounded-2xl bg-black/5"
          >
            <video
              ref={videoRef}
              src={SITE_VISIT_VIDEO}
              title="Adani Shantigram township"
              className="w-full h-72 md:h-[400px] object-cover"
              controls
              playsInline
              loop
            >
              Your browser does not support the video tag.
            </video>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h2 className="section-heading mb-2">
              Schedule a Site Visit
            </h2>
            <div className="accent-line-left !mx-0" />
            <p className="text-muted-foreground mb-8">Experience Shantigram first-hand. Our team will arrange a private tour at your convenience.</p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card-lift p-8 text-center"
              >
                <p className="font-display text-2xl text-accent mb-2">Thank You!</p>
                <p className="text-muted-foreground">Our team will contact you shortly to confirm your visit.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full h-12 px-4 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  required
                />
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  value={form.mobile}
                  onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                  className="w-full h-12 px-4 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  required
                />
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                    className="mt-1 accent-primary"
                    required
                  />
                  <span className="text-xs text-muted-foreground">
                    I authorize Adani Realty to contact me. This consent overrides any DND registration.
                  </span>
                </label>
                <Button type="submit" className="w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90 h-12 text-base">
                  Schedule Site Visit
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SiteVisitSection;
