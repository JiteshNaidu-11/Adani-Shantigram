import { motion } from "framer-motion";
import { Phone, FileText, Calendar, MessageCircle, ChevronRight } from "lucide-react";
import { useState } from "react";

interface LeadSidebarProps {
  onOpenLead: () => void;
}

export default function LeadSidebar({ onOpenLead }: LeadSidebarProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    interest: "Brochure",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email) setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const openEnquiryForm = () => onOpenLead();

  return (
    <>
      <div className="fixed top-0 right-0 w-[320px] xl:w-[340px] h-screen bg-card border-l border-border z-[9000] hidden xl:flex flex-col shadow-xl">
        {/* Top strip */}
        <div className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground text-center py-2.5 px-4">
          <p className="text-xs font-semibold uppercase tracking-wider animate-pulse">Get Best Price • Free Site Visit</p>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          <div>
            <h3 className="font-display text-lg text-foreground mb-1">Enquire Now</h3>
            <p className="text-muted-foreground text-sm">Share your details for brochure, pricing & offers.</p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8 rounded-2xl bg-secondary/80"
            >
              <p className="font-display text-xl text-foreground mb-1">Thank you!</p>
              <p className="text-muted-foreground text-sm">We'll get back within 30 minutes.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full h-11 px-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 text-sm"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full h-11 px-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 text-sm"
              />
              <select
                value={form.interest}
                onChange={(e) => setForm({ ...form, interest: e.target.value })}
                className="w-full h-11 px-4 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 text-sm"
              >
                <option value="Brochure">Brochure</option>
                <option value="Price List">Price List</option>
                <option value="Site Visit">Site Visit</option>
                <option value="Callback">Request Callback</option>
              </select>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, boxShadow: "0 8px 25px -5px rgba(0,0,0,0.15)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="w-full h-11 rounded-xl bg-adani-gradient text-white font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                Submit <ChevronRight size={16} />
              </motion.button>
            </form>
          )}

          <div className="pt-4 border-t border-border space-y-3">
            <motion.button
              onClick={onOpenLead}
              whileHover={{ scale: 1.03, x: 4 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="w-full flex items-center justify-between gap-2 py-3 px-4 rounded-xl border border-border hover:border-accent/50 hover:bg-secondary/50 transition-colors text-left"
            >
              <span className="flex items-center gap-2 text-sm font-medium text-foreground">
                <FileText size={18} className="text-accent" /> Full Enquiry Form
              </span>
              <ChevronRight size={16} className="text-muted-foreground" />
            </motion.button>
            <motion.button
              onClick={onOpenLead}
              whileHover={{ scale: 1.03, x: 4 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="w-full flex items-center justify-between gap-2 py-3 px-4 rounded-xl border border-border hover:border-accent/50 hover:bg-secondary/50 transition-colors text-left"
            >
              <span className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Calendar size={18} className="text-accent" /> Book Site Visit
              </span>
              <ChevronRight size={16} className="text-muted-foreground" />
            </motion.button>
            <motion.button
              onClick={openEnquiryForm}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 20px -5px rgba(37,211,102,0.4)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="w-full h-11 rounded-xl bg-[#25D366] text-white font-semibold text-sm flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} /> Enquire (Form)
            </motion.button>
          </div>
        </div>

        <div className="p-4 border-t border-border">
          <motion.a
            href="tel:+919409374599"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            <Phone size={16} /> +91 94093 74599
          </motion.a>
        </div>
      </div>

      {/* Tablet float - only when sidebar hidden */}
      <div className="hidden md:flex xl:hidden fixed bottom-6 right-6 flex-col gap-3 z-[9000]">
        <motion.button
          onClick={onOpenLead}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-full bg-adani-gradient text-white shadow-lg flex items-center justify-center hover:opacity-90 transition-opacity"
        >
          <FileText size={22} />
        </motion.button>
        <motion.a
          href="tel:+919409374599"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center"
        >
          <Phone size={22} />
        </motion.a>
      </div>
    </>
  );
}
