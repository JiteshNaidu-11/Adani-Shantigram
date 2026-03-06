import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import siteVisitImg from "@/assets/site-visit.jpg";

const SiteVisitSection = () => {
  const [form, setForm] = useState({ name: "", mobile: "", consent: false });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.mobile && form.consent) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="section-padding section-alt">
      <div className="container-luxury">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="luxury-card overflow-hidden"
          >
            <img src={siteVisitImg} alt="Book a site visit" className="w-full h-72 md:h-[420px] object-cover rounded-lg" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-2">
              Schedule a Site Visit
            </h2>
            <div className="gold-divider !mx-0" />
            <p className="text-muted-foreground mb-8">Experience the luxury first-hand. Our team will arrange a private tour at your convenience.</p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="luxury-card p-8 text-center"
              >
                <p className="font-display text-2xl text-primary mb-2">Thank You!</p>
                <p className="text-muted-foreground">Our team will contact you shortly to confirm your visit.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full h-12 px-4 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  required
                />
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  value={form.mobile}
                  onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                  className="w-full h-12 px-4 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
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
                    I authorize Verdant Heights to contact me. This consent overrides any DND registration.
                  </span>
                </label>
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg h-12 text-base">
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
