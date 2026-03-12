import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, FileText, DollarSign, LayoutGrid, Gift, Send } from "lucide-react";

const options = [
  { icon: FileText, label: "Download Brochure", action: "enquire" as const },
  { icon: DollarSign, label: "Get Price List", action: "enquire" as const },
  { icon: LayoutGrid, label: "Floor Plans", action: "enquire" as const },
  { icon: Gift, label: "Offers & Discounts", action: "enquire" as const },
  { icon: Send, label: "Enquire (Form)", action: "enquire" as const },
];

interface ChatbotWidgetProps {
  onEnquire?: () => void;
}

export default function ChatbotWidget({ onEnquire }: ChatbotWidgetProps) {
  const [open, setOpen] = useState(false);

  const handleOption = (action: "enquire") => {
    if (onEnquire) {
      setOpen(false);
      onEnquire();
    }
  };

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 z-[5000]">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-3 w-72 rounded-2xl bg-card border border-border shadow-xl overflow-hidden"
          >
            <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
              <span className="font-medium text-sm">How can we help?</span>
              <button
                onClick={() => setOpen(false)}
                className="p-1 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>
            <div className="p-3 space-y-1">
              {options.map(({ icon: Icon, label, action }) => (
                <button
                  key={label}
                  onClick={() => handleOption("enquire")}
                  className="w-full flex items-center gap-3 p-3 rounded-xl text-sm text-foreground hover:bg-secondary transition-colors text-left font-medium"
                >
                  <Icon size={18} className="text-accent flex-shrink-0" />
                  {label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-adani-gradient text-white shadow-lg flex items-center justify-center hover:opacity-90 transition-opacity"
        aria-label="Open help menu"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </div>
  );
}
