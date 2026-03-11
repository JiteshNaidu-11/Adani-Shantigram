import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function LeadModal({ open, onClose }: Props) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    config: "",
    message: "I would like to receive the price sheet and floor plans.",
    consent: false
  });

  /* Prevent background scroll */
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [open]);

  /* Escape key close */
  useEffect(() => {
    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email) {
      alert("Please fill all required fields");
      return;
    }
    setLoading(true);
    try {
      /* Replace with your CRM / API */
      await new Promise((r) => setTimeout(r, 1500));
      alert("Thank you! Our team will contact you shortly.");
      setForm({
        name: "",
        phone: "",
        email: "",
        config: "",
        message: "I would like to receive the price sheet and floor plans.",
        consent: false
      });
      onClose();
    } catch (err) {
      alert("Something went wrong");
    }
    setLoading(false);
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
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 40 }}
            transition={{ duration: 0.35 }}
            className="relative bg-white rounded-xl shadow-2xl w-full max-w-md p-6 z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-400 hover:text-black"
            >
              <X size={20} />
            </button>

            {/* Heading */}
            <h2 className="text-2xl font-semibold text-primary mb-2">
              Get Price Details
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Fill in your details to receive the latest price sheet and floor plans.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                required
              />

              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                type="tel"
                placeholder="+91 Mobile Number"
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
                name="config"
                value={form.config}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
              >
                <option value="">Select Configuration</option>
                <option>2 BHK</option>
                <option>3 BHK</option>
                <option>4 BHK</option>
              </select>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={3}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
              />

              {/* Consent */}
              <label className="flex items-start gap-2 text-xs text-gray-500">
                <input
                  type="checkbox"
                  name="consent"
                  checked={form.consent}
                  onChange={handleChange}
                  required
                />
                I agree to be contacted regarding this project.
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-primary-foreground py-3 rounded-md font-semibold hover:bg-primary/90 transition"
              >
                {loading ? "Submitting..." : "Get Price Sheet"}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}