import { useEffect, useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  FORMSUBMIT_ACTION,
  FORMSUBMIT_AUTORESPONSE,
  FORMSUBMIT_SUBJECT,
  getFormSubmitNextUrl,
} from "@/constants/formSubmit";

export default function LeadPopup() {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [nextUrl, setNextUrl] = useState("");
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    setNextUrl(getFormSubmitNextUrl());
  }, []);

  useEffect(() => {
    setOpen(true);
    const interval = setInterval(() => {
      setOpen(true);
    }, 120000);
    return () => clearInterval(interval);
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

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="relative bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden"
          >
            <div className="bg-primary text-white flex items-center justify-between px-5 py-3">
              <span className="font-semibold text-sm">Get Price Details</span>
              <button type="button" onClick={() => setOpen(false)} className="hover:opacity-80" aria-label="Close">
                <X size={20} />
              </button>
            </div>

            <div className="p-5">
              <form action={FORMSUBMIT_ACTION} method="POST" onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="_subject" value={FORMSUBMIT_SUBJECT} />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value={nextUrl} />
                <input type="hidden" name="_autoresponse" value={FORMSUBMIT_AUTORESPONSE} />
                <input type="hidden" name="form_source" value="lead_popup" />

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full h-12 px-4 rounded-lg border border-gray-300"
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.mobile}
                  onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                  className="w-full h-12 px-4 rounded-lg border border-gray-300"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full h-12 px-4 rounded-lg border border-gray-300"
                  required
                />

                <textarea
                  name="message"
                  placeholder="Your requirements"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 resize-none"
                />

                <Button
                  type="submit"
                  className="w-full bg-primary text-white rounded-lg h-12 disabled:opacity-70"
                  disabled={submitting || !nextUrl}
                >
                  {submitting ? "Submitting..." : "Get Pricing Details"}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
