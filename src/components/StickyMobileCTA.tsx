import { Phone, MessageCircle, IndianRupee } from "lucide-react";

interface StickyMobileCTAProps {
  onOpenLead: () => void;
}

const StickyMobileCTA = ({ onOpenLead }: StickyMobileCTAProps) => (
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card border-t border-border px-2 py-2 flex gap-2">
    <a
      href="tel:+919876543210"
      className="flex-1 flex items-center justify-center gap-1.5 h-11 rounded-lg bg-primary text-primary-foreground text-sm font-medium"
    >
      <Phone size={15} /> Call Now
    </a>
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 flex items-center justify-center gap-1.5 h-11 rounded-lg bg-[hsl(142,70%,35%)] text-primary-foreground text-sm font-medium"
    >
      <MessageCircle size={15} /> WhatsApp
    </a>
    <button
      onClick={onOpenLead}
      className="flex-1 flex items-center justify-center gap-1.5 h-11 rounded-lg bg-accent text-accent-foreground text-sm font-medium"
    >
      <IndianRupee size={15} /> Get Price
    </button>
  </div>
);

export default StickyMobileCTA;
