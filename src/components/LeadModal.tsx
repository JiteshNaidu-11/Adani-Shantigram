import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import {
  FORMSUBMIT_ACTION,
  FORMSUBMIT_AUTORESPONSE,
  FORMSUBMIT_SUBJECT,
  getFormSubmitNextUrl,
} from "@/constants/formSubmit";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function LeadModal({ open, onClose }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [nextUrl, setNextUrl] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    inquiry_type: "Brochure",
    message: "I would like to receive the price sheet and floor plans.",
  });

  useEffect(() => {
    setNextUrl(getFormSubmitNextUrl());
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [open]);

  useEffect(() => {
    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [onClose]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.currentTarget;
    const checked = "checked" in e.currentTarget ? e.currentTarget.checked : false;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

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
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} aria-hidden />

          <motion.div
            initial={{ scale: 0.9, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 40 }}
            transition={{ duration: 0.35 }}
            className="relative bg-white rounded-xl shadow-2xl w-full max-w-md p-6 z-10"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-400 hover:text-black"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <h2 className="text-2xl font-semibold text-primary mb-2">Get Price Details</h2>
            <p className="text-sm text-gray-500 mb-6">
              Fill in your details to receive the latest price sheet and floor plans.
            </p>

            <form
              action={FORMSUBMIT_ACTION}
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input type="hidden" name="_subject" value={FORMSUBMIT_SUBJECT} />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value={nextUrl} />
              <input type="hidden" name="_autoresponse" value={FORMSUBMIT_AUTORESPONSE} />
              <input type="hidden" name="form_source" value="lead_modal_legacy" />

              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                required
              />

              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                required
              />

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                required
              />

              <select
                name="inquiry_type"
                value={form.inquiry_type}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
              >
                <option value="Brochure">Brochure</option>
                <option value="Site Visit">Site Visit</option>
                <option value="Pricing">Pricing</option>
              </select>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your requirements"
                rows={3}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
              />

              <button
                type="submit"
                disabled={submitting || !nextUrl}
                className="w-full bg-primary text-primary-foreground py-3 rounded-md font-semibold hover:bg-primary/90 transition disabled:opacity-70"
              >
                {submitting ? "Submitting..." : "Get Price Sheet"}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
