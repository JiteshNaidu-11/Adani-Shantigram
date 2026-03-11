import { motion } from "framer-motion";
import { Phone, Calendar, MessageCircle, CheckCircle } from "lucide-react";
import { useState } from "react";

interface LeadSidebarProps {
  setModalOpen: (value: boolean) => void;
}

const popAnimation = {
  whileHover: { scale: 1.07 },
  animate: {
    scale: [1, 1.06, 1],
    boxShadow: [
      "0px 4px 10px rgba(0,0,0,0.15)",
      "0px 12px 28px rgba(0,0,0,0.35)",
      "0px 4px 10px rgba(0,0,0,0.15)"
    ]
  },
  transition: {
    duration: 1.2,
    repeat: Infinity,
    ease: "easeInOut" as const
  }
};

export default function LeadSidebar({ setModalOpen }: LeadSidebarProps) {

  const openModal = () => setModalOpen(true);

  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    configuration: ""
  });

  const handleSubmit = () => {
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  const openWhatsApp = () => {
    const phone = "919876543210";
    const message = encodeURIComponent(
      "Hi, I'm interested in Puravankara Group residences. Please share the price sheet, floor plans and site visit details."
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  const makePhoneCall = () => {
    window.location.href = "tel:+919876543210";
  };

  return (
    <>
      <iframe name="hidden_iframe" style={{ display: "none" }} />

      {/* DESKTOP SIDEBAR */}
      <div className="fixed top-0 right-0 w-[340px] h-screen bg-white text-gray-800 shadow-2xl border-l border-gray-200 z-[9999] hidden xl:flex flex-col overflow-y-auto">

        <div className="bg-primary text-white text-center text-sm font-semibold py-2 animate-pulse">
          🔥 PRE-LAUNCH OFFERS AVAILABLE
        </div>

        {/* CTA */}
        <div className="p-5 border-b border-gray-200 space-y-3">

          <motion.button
            {...popAnimation}
            onClick={openModal}
            className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-md font-semibold hover:bg-primary-dark"
          >
            <Calendar size={18} />
            Organize Site Visit
          </motion.button>

          <motion.button
            {...popAnimation}
            onClick={openModal}
            className="w-full flex items-center justify-center gap-2 border-2 border-primary text-primary py-2 rounded-md font-semibold hover:bg-primary hover:text-white"
          >
            <Phone size={18} />
            Request Call Back
          </motion.button>

        </div>

        {/* FORM */}
        <div className="p-6 space-y-4 flex-1">

          <h3 className="text-lg tracking-wide text-primary font-semibold">
            ENQUIRE NOW
          </h3>

          {submitted ? (

            <div className="text-center py-8">
              <CheckCircle size={48} className="text-primary mx-auto mb-3" />
              <p className="font-semibold text-lg">Thank You!</p>
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
                placeholder="Full Name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                required
                className="w-full bg-gray-50 border border-gray-300 rounded-md px-3 py-2"
              />

              <input
                type="tel"
                name="phone"
                placeholder="+91 Mobile Number"
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
                required
                className="w-full bg-gray-50 border border-gray-300 rounded-md px-3 py-2"
              />

              <select
                name="configuration"
                value={form.configuration}
                onChange={(e) =>
                  setForm({ ...form, configuration: e.target.value })
                }
                className="w-full bg-gray-50 border border-gray-300 rounded-md px-3 py-2"
              >
                <option>Select Configuration</option>
                <option>2 BHK</option>
                <option>3 BHK</option>
                <option>4 BHK</option>
                <option>Penthouse</option>
              </select>

              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Puravankara Lead" />

              <motion.button
                {...popAnimation}
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-md font-semibold hover:bg-primary-dark"
              >
                Get Price Details
              </motion.button>

              <p className="text-xs text-gray-500">
                Instant price sheet & floor plans will be shared.
              </p>

            </form>

          )}

        </div>

        {/* WhatsApp */}
        <div className="p-4 border-t border-gray-200">

          <motion.button
            {...popAnimation}
            onClick={openWhatsApp}
            className="flex items-center justify-center gap-2 bg-primary text-white py-2 rounded-md font-semibold hover:bg-primary-dark w-full"
          >
            <MessageCircle size={18} />
            WhatsApp Us
          </motion.button>

        </div>

      </div>

      {/* TABLET FLOAT */}
      <div className="hidden md:flex xl:hidden fixed bottom-6 right-6 flex-col gap-3 z-[9999]">

        <button
          onClick={openModal}
          className="bg-primary text-white p-4 rounded-full shadow-lg"
        >
          <Calendar size={22} />
        </button>

        <button
          onClick={openModal}
          className="bg-primary text-white p-4 rounded-full shadow-lg"
        >
          <Phone size={22} />
        </button>

      </div>

      {/* MOBILE BAR */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-xl flex md:hidden z-[9999]">

        <motion.button
          onClick={makePhoneCall}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
          className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-semibold text-white bg-primary"
        >
          <Phone size={18} />
          Call Now
        </motion.button>

        <motion.button
          onClick={openModal}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }}
          className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-semibold text-white bg-primary"
        >
          <Calendar size={18} />
          Site Visit
        </motion.button>

      </div>
    </>
  );
}