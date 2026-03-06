import { useState } from "react";
import { MessageCircle, X, FileText, DollarSign, LayoutGrid, Gift, Send } from "lucide-react";

const options = [
  { icon: FileText, label: "Brochure" },
  { icon: DollarSign, label: "Price List" },
  { icon: LayoutGrid, label: "Floor Plan" },
  { icon: Gift, label: "Offers & Discounts" },
  { icon: Send, label: "Send on WhatsApp" },
];

const ChatbotWidget = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 z-50">
      {open && (
        <div className="mb-3 w-72 rounded-lg bg-card animate-scale-in overflow-hidden" style={{ boxShadow: "var(--shadow-elevated)" }}>
          <div className="bg-primary p-4 flex items-center justify-between">
            <span className="text-primary-foreground font-medium text-sm">Hi! How can we help?</span>
            <button onClick={() => setOpen(false)} className="text-primary-foreground/70 hover:text-primary-foreground">
              <X size={16} />
            </button>
          </div>
          <div className="p-3 space-y-2">
            {options.map(({ icon: Icon, label }) => (
              <button
                key={label}
                className="w-full flex items-center gap-3 p-3 rounded-md text-sm text-foreground hover:bg-secondary transition-colors text-left"
              >
                <Icon size={16} className="text-primary flex-shrink-0" />
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors"
        style={{ boxShadow: "var(--shadow-elevated)" }}
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
};

export default ChatbotWidget;
