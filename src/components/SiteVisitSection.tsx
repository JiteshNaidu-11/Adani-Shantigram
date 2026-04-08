import { useState, useRef, useEffect, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ChannelPartnerBrandingLine from "@/components/legal/ChannelPartnerBrandingLine";
import LegalDisclaimerText from "@/components/legal/LegalDisclaimerText";
import {
  FORMSUBMIT_ACTION,
  FORMSUBMIT_AUTORESPONSE,
  FORMSUBMIT_SUBJECT,
  getFormSubmitNextUrl,
} from "@/constants/formSubmit";

const SITE_VISIT_VIDEO = "/Shantigram_realty.mp4";

const SiteVisitSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [nextUrl, setNextUrl] = useState("");
  const [inView, setInView] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setNextUrl(getFormSubmitNextUrl());
  }, []);

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const el = e.currentTarget;
    if (!el.checkValidity()) return;
    setSubmitting(true);
    window.setTimeout(() => {
      el.submit();
    }, 50);
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
              title="Shantigram township"
              className="w-full h-72 md:h-[400px] object-cover"
              controls
              playsInline
              loop
              preload="auto"
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
            <h2 className="section-heading mb-2">Schedule a Site Visit</h2>
            <div className="accent-line-left !mx-0" />
            <p className="text-muted-foreground mb-6">
              Experience Shantigram first-hand. Our team will arrange a private tour at your convenience.
            </p>
            <ChannelPartnerBrandingLine className="mb-4" />
            <LegalDisclaimerText variant="summary" compact className="mb-8" />

            <form action={FORMSUBMIT_ACTION} method="POST" onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="_subject" value={FORMSUBMIT_SUBJECT} />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value={nextUrl} />
              <input type="hidden" name="_autoresponse" value={FORMSUBMIT_AUTORESPONSE} />
              <input type="hidden" name="form_source" value="site_visit" />
              <input type="hidden" name="inquiry_type" value="Site Visit" />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full h-12 px-4 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full h-12 px-4 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full h-12 px-4 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                required
              />
              <textarea
                name="message"
                placeholder="Your requirements"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
              />
              <Button
                type="submit"
                variant="accent"
                className="w-full rounded-full h-12 text-base disabled:opacity-70"
                disabled={submitting || !nextUrl}
              >
                {submitting ? "Submitting..." : "Schedule Site Visit"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SiteVisitSection;
