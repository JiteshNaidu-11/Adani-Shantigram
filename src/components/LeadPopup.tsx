import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LeadPopup() {

  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
    consent: false
  });

  useEffect(() => {

    setOpen(true);

    const interval = setInterval(() => {
      setOpen(true);
    }, 120000);

    return () => clearInterval(interval);

  }, []);

  const handleSubmit = () => {
    setSubmitted(true);

    setTimeout(() => {
      setOpen(false);
      setSubmitted(false);
    }, 4000);
  };

  return (
    <AnimatePresence>

      {open && (

        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">

          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* MODAL */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="relative bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden"
          >

            {/* HEADER */}
            <div className="bg-primary text-white flex items-center justify-between px-5 py-3">

              <span className="font-semibold text-sm">
                Get Price Details
              </span>

              <button
                onClick={() => setOpen(false)}
                className="hover:opacity-80"
              >
                <X size={20} />
              </button>

            </div>

            {/* FORM AREA */}
            <div className="p-5">

              <iframe name="hidden_iframe" style={{ display: "none" }} />

              {submitted ? (

                <div className="text-center py-8">
                  <CheckCircle size={48} className="text-primary mx-auto mb-3" />
                  <p className="font-semibold text-lg mb-1">Thank You!</p>
                  <p className="text-gray-500 text-sm">
                    Our team will reach out within 30 minutes.
                  </p>
                </div>

              ) : (

                <form
                  action="https://formsubmit.co/support@homeambit.com"
                  method="POST"
                  target="hidden_iframe"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >

                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="w-full h-12 px-4 rounded-lg border border-gray-300"
                    required
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Mobile Number"
                    value={form.mobile}
                    onChange={(e) =>
                      setForm({ ...form, mobile: e.target.value })
                    }
                    className="w-full h-12 px-4 rounded-lg border border-gray-300"
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full h-12 px-4 rounded-lg border border-gray-300"
                    required
                  />

                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 resize-none"
                  />

                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.consent}
                      onChange={(e) =>
                        setForm({ ...form, consent: e.target.checked })
                      }
                      required
                    />
                    <span className="text-xs text-gray-500">
                      I authorize Adani Realty to contact me.
                    </span>
                  </label>

                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_subject" value="New Lead Popup" />

                  <Button
                    type="submit"
                    className="w-full bg-primary text-white rounded-lg h-12"
                  >
                    Get Pricing Details
                  </Button>

                </form>

              )}

            </div>

          </motion.div>

        </div>

      )}

    </AnimatePresence>
  );
}