import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, CheckCircle, Gift, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID || "";

interface LeadModalFormProps {
  open: boolean;
  onClose: () => void;
}

export default function LeadModalForm({ open, onClose }: LeadModalFormProps) {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "Hi, I'm interested in Adani Shantigram. Please share brochure, price and site visit details.",
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      // Reset form every time modal opens so it never preloads previous data
      setForm({
        name: "",
        mobile: "",
        email: "",
        message: "Hi, I'm interested in Adani Shantigram. Please share brochure, price and site visit details.",
        consent: false,
      });
      setSubmitted(false);
      setError("");
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!form.name || !form.mobile || !form.email) return;

    setLoading(true);
    try {
      if (FORMSPREE_ID) {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            phone: form.mobile,
            message: form.message,
            _subject: "Adani Shantigram – New Enquiry",
          }),
        });
        if (!res.ok) throw new Error("Submission failed");
      }
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or call +91 94093 74599.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setError("");
    setForm({
      name: "",
      mobile: "",
      email: "",
      message: "Hi, I'm interested in Adani Shantigram. Please share brochure, price and site visit details.",
      consent: false,
    });
    onClose();
  };

  if (!open) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10001] flex items-end sm:items-center justify-center p-0 sm:p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
          onClick={handleClose}
        />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: "spring", damping: 28, stiffness: 300 }}
          className="relative bg-card w-full max-h-[92dvh] sm:max-h-[90vh] sm:max-w-lg sm:rounded-2xl overflow-hidden shadow-2xl border border-border flex flex-col"
        >
          {/* Sticky header – matches Get Brochure & Pricing button gradient */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-4 pt-16 sm:pt-4 pb-3 sm:py-4 bg-popup-gradient shrink-0">
            <h3 className="font-display text-lg sm:text-xl text-white">Get Brochure & Pricing</h3>
            <button
              onClick={handleClose}
              className="p-2 rounded-full text-white/90 hover:text-white hover:bg-white/20 transition-colors"
              aria-label="Close"
            >
              <X size={24} />
            </button>
          </div>

          <div className="overflow-y-auto flex-1 min-h-0">
            <div className="grid sm:grid-cols-5">
              <div className="hidden sm:flex sm:col-span-2 bg-popup-gradient flex-col justify-center gap-4 p-6">
                {[
                  { icon: Phone, text: "Instant Call Back" },
                  { icon: CheckCircle, text: "Free Site Visit" },
                  { icon: Gift, text: "Best Price Guarantee" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-white">
                    <Icon size={18} className="flex-shrink-0 opacity-90" />
                    <span className="text-sm font-medium">{text}</span>
                  </div>
                ))}
              </div>

              <div className="sm:col-span-3 p-4 sm:p-6 md:p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <CheckCircle size={48} className="text-accent mx-auto mb-3" />
                    <p className="font-display text-xl text-foreground mb-1">Thank You!</p>
                    <p className="text-muted-foreground text-sm">Our team will reach out within 30 minutes.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full h-12 px-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all"
                      required
                    />
                    <input
                      type="tel"
                      placeholder="Mobile Number"
                      value={form.mobile}
                      onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                      className="w-full h-12 px-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full h-12 px-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all"
                      required
                    />
                    <textarea
                      placeholder="Your Message"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all resize-none"
                    />
                    {error && <p className="text-sm text-destructive">{error}</p>}
                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full rounded-full h-12 text-base font-semibold disabled:opacity-70 shadow-lg bg-popup-gradient text-white hover:opacity-90 transition-opacity border-0"
                    >
                      {loading ? <Loader2 size={20} className="animate-spin mx-auto" /> : "Get Pricing & Brochure"}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
