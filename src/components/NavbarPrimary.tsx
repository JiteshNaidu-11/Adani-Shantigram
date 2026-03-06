import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarPrimaryProps {
  onOpenLead: () => void;
}

const NavbarPrimary = ({ onOpenLead }: NavbarPrimaryProps) => {
  const [open, setOpen] = useState(false);
  const links = ["About", "Pricing", "Amenities", "Gallery", "Location", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container-luxury flex items-center justify-between h-16 px-4 md:px-8">
        <a href="#" className="font-display text-xl text-foreground tracking-wide">
          Puravankara Group
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {l}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+919876543210" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Phone size={14} /> +91 98765 43210
          </a>
          <Button onClick={onOpenLead} size="sm" className="rounded-lg bg-primary text-primary-foreground hover:bg-primary/90">
            Get Pricing
          </Button>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card border-b border-border px-4 pb-4 animate-fade-in">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-muted-foreground border-b border-border last:border-0"
            >
              {l}
            </a>
          ))}
          <Button onClick={() => { setOpen(false); onOpenLead(); }} className="w-full mt-3 bg-primary text-primary-foreground">
            Get Pricing Details
          </Button>
        </div>
      )}
    </nav>
  );
};

export default NavbarPrimary;
