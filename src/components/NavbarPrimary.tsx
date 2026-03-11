import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarPrimaryProps {
  onOpenLead: () => void;
}

const NavbarPrimary = ({ onOpenLead }: NavbarPrimaryProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = ["About", "Pricing", "Amenities", "Gallery", "Location", "Contact"];

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 xl:right-[340px] z-[10000] transition-all duration-500 ${
          scrolled
            ? "bg-card/90 backdrop-blur-md border-b border-border py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container-luxury mx-auto px-5 lg:px-12 flex items-center justify-between">
          {/* LOGO */}
          <a
            href="#"
            className={`font-display text-xl tracking-wide transition-colors ${
              scrolled ? "text-foreground" : "text-white"
            }`}
          >
            Puravankara Group
          </a>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`text-sm font-medium uppercase tracking-widest transition hover:text-primary ${
                  scrolled ? "text-muted-foreground" : "text-white/80"
                }`}
              >
                {link}
              </a>
            ))}

            {/* Phone (desktop, inside nav) */}
            <a
              href="tel:+919876543210"
              className={`flex items-center gap-1 text-sm transition-colors ${
                scrolled
                  ? "text-muted-foreground hover:text-primary"
                  : "text-white/80 hover:text-white"
              }`}
            >
              <Phone size={14} /> +91 98765 43210
            </a>

            {/* Enquire / Get Pricing button */}
            <Button
              onClick={onOpenLead}
              size="sm"
              className={`rounded-lg transition ${
                scrolled
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-white/10 text-white border border-white/30 hover:bg-white hover:text-primary"
              }`}
            >
              Get Pricing
            </Button>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className={`lg:hidden transition-colors ${
              scrolled || mobileOpen ? "text-foreground" : "text-white"
            }`}
          >
            {mobileOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </motion.nav>

      {/* FULL‑SCREEN MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-card z-[9999] flex flex-col items-center justify-center text-center"
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={closeMenu}
              className="absolute top-6 right-6 text-foreground"
            >
              <X size={34} />
            </button>

            <div className="flex flex-col gap-8">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={closeMenu}
                  className="text-foreground text-2xl hover:text-primary transition"
                >
                  {link}
                </a>
              ))}

              <a
                href="tel:+919876543210"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 text-foreground/80 hover:text-primary transition"
              >
                <Phone size={18} /> +91 98765 43210
              </a>

              <Button
                onClick={() => {
                  closeMenu();
                  onOpenLead();
                }}
                className="mt-6 bg-primary text-primary-foreground px-10 py-3 text-sm uppercase tracking-widest hover:bg-primary/90"
              >
                Get Pricing Details
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavbarPrimary;