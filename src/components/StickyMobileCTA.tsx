import { Phone, MessageCircle, IndianRupee } from "lucide-react";

interface StickyMobileCTAProps {
  onOpenLead: () => void;
}

const StickyMobileCTA = ({ onOpenLead }: StickyMobileCTAProps) => (
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card border-t border-border px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] flex gap-2">
    <a
      href="tel:18001080009"
      className="flex-1 flex items-center justify-center gap-1.5 h-11 rounded-full bg-primary text-primary-foreground text-sm font-medium"
    >
      <Phone size={15} /> Call Now
    </a>
    <button
      type="button"
      onClick={onOpenLead}
      className="flex-1 flex items-center justify-center gap-1.5 h-11 rounded-full bg-[#25D366] text-white text-sm font-medium"
    >
      <MessageCircle size={15} /> Enquire
    </button>
    <button
      onClick={onOpenLead}
      className="flex-1 flex items-center justify-center gap-1.5 h-11 rounded-full bg-adani-gradient text-white text-sm font-medium hover:opacity-90 transition-opacity"
    >
      <IndianRupee size={15} /> Get Price
    </button>
  </div>
);

export default StickyMobileCTA;
