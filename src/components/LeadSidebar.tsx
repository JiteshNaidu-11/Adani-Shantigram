import { motion } from "framer-motion";
import { Phone, FileText, Calendar, MessageCircle, ChevronRight } from "lucide-react";
import { useState, useEffect, type FormEvent } from "react";
import {
  FORMSUBMIT_ACTION,
  FORMSUBMIT_AUTORESPONSE,
  FORMSUBMIT_SUBJECT,
  getFormSubmitNextUrl,
} from "@/constants/formSubmit";
import { COMPANY_PHONE, COMPANY_PHONE_TEL_HREF } from "@/constants/channelPartnerLegal";

interface LeadSidebarProps {
  onOpenLead: () => void;
}

export default function LeadSidebar({ onOpenLead }: LeadSidebarProps) {
  const [submitting, setSubmitting] = useState(false);
  const [nextUrl, setNextUrl] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    inquiry_type: "Brochure",
  });

  useEffect(() => {
    setNextUrl(getFormSubmitNextUrl());
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const el = e.currentTarget;
    if (!el.checkValidity()) return;
    setSubmitting(true);
    window.setTimeout(() => {
      el.submit();
    }, 50);
  };

  const openEnquiryForm = () => onOpenLead();

  return (
    <>
      <div className="fixed top-0 right-0 w-[320px] xl:w-[340px] h-screen bg-card border-l border-border z-[9000] hidden xl:flex flex-col shadow-xl">
        <div className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground text-center py-2.5 px-4">
          <p className="text-xs font-semibold uppercase tracking-wider animate-pulse">Get Best Price • Free Site Visit</p>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          <div>
            <h3 className="font-display text-lg text-foreground mb-1">Enquire Now</h3>
            <p className="text-muted-foreground text-sm">Share your details for brochure, pricing & offers.</p>
          </div>

          <form action={FORMSUBMIT_ACTION} method="POST" onSubmit={handleSubmit} className="space-y-4">
            <input type="hidden" name="_subject" value={FORMSUBMIT_SUBJECT} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value={nextUrl} />
            <input type="hidden" name="_autoresponse" value={FORMSUBMIT_AUTORESPONSE} />
            <input type="hidden" name="form_source" value="lead_sidebar" />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full h-11 px-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 text-sm"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full h-11 px-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 text-sm"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
              className="w-full h-11 px-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 text-sm"
            />
            <select
              name="inquiry_type"
              value={form.inquiry_type}
              onChange={(e) => setForm({ ...form, inquiry_type: e.target.value })}
              className="w-full h-11 px-4 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 text-sm"
            >
              <option value="Brochure">Brochure</option>
              <option value="Site Visit">Site Visit</option>
              <option value="Pricing">Pricing</option>
            </select>
            <motion.button
              type="submit"
              disabled={submitting || !nextUrl}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 25px -5px rgba(0,0,0,0.15)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="w-full h-11 rounded-xl bg-adani-gradient text-white font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-70"
            >
              {submitting ? "Submitting..." : "Submit"}
              {!submitting ? <ChevronRight size={16} /> : null}
            </motion.button>
          </form>

          <div className="pt-4 border-t border-border space-y-3">
            <motion.button
              type="button"
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
              type="button"
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
              type="button"
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
            href={COMPANY_PHONE_TEL_HREF}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            <Phone size={16} /> {COMPANY_PHONE}
          </motion.a>
        </div>
      </div>

      <div className="hidden md:flex xl:hidden fixed bottom-6 right-6 flex-col gap-3 z-[9000]">
        <motion.button
          type="button"
          onClick={onOpenLead}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-full bg-adani-gradient text-white shadow-lg flex items-center justify-center hover:opacity-90 transition-opacity"
        >
          <FileText size={22} />
        </motion.button>
        <motion.a
          href={COMPANY_PHONE_TEL_HREF}
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
