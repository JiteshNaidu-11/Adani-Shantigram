import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import AdaniLogo from "@/components/AdaniLogo";

interface NavbarPrimaryProps {
  onOpenLead: () => void;
}

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Amenities", href: "#amenities" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

const NavbarPrimary = ({ onOpenLead }: NavbarPrimaryProps) => {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 z-[10000] transition-all duration-300 xl:right-[340px] right-0 ${
          scrolled || !isHome
            ? "bg-card/95 backdrop-blur-lg border-b border-border py-2 shadow-lg shadow-primary/5"
            : "bg-transparent py-4"
        } ${scrolled || !isHome ? "text-foreground" : "text-white"}`}
      >
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
          <div className="flex items-center justify-between gap-2 min-w-0">
            <Link to="/" className="flex items-center gap-2 transition-colors duration-300" aria-label="Adani Shantigram – Home">
              <AdaniLogo className="text-base sm:text-lg" />
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {isHome && navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={closeMenu}
                  className={`text-sm font-medium transition-colors hover:text-accent ${scrolled || !isHome ? "text-muted-foreground" : "text-white/90"}`}
                >
                  {label}
                </a>
              ))}
              {!isHome && (
                <Link to="/" className={`text-sm font-medium hover:text-accent ${scrolled || !isHome ? "text-muted-foreground" : "text-white/90"}`}>
                  Home
                </Link>
              )}
              <a
                href="tel:+919409374599"
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-foreground ${scrolled || !isHome ? "text-muted-foreground" : "text-white/90"}`}
              >
                <Phone size={14} /> +91 94093 74599
              </a>
              <Button onClick={onOpenLead} size="sm" variant="accent" className="rounded-full px-6 font-medium">
                Enquire Now
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen((p) => !p)}
            className="lg:hidden p-2 rounded-lg transition-colors text-inherit"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Housing-style enquiry bar - only on home when scrolled */}
          {isHome && scrolled && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-2 flex items-center gap-2 rounded-xl bg-secondary/80 px-3 py-2"
            >
              <input
                type="text"
                placeholder="Get best price & brochure"
                readOnly
                onClick={onOpenLead}
                className="flex-1 min-w-0 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none cursor-pointer"
              />
              <Button onClick={onOpenLead} size="sm" variant="accent" className="rounded-full shrink-0">
                Submit
              </Button>
            </motion.div>
          )}
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-card z-[9999] flex flex-col items-center justify-center gap-8 pt-20 pb-10"
          >
            <button onClick={closeMenu} className="absolute top-6 right-6 text-foreground p-2" aria-label="Close menu">
              <X size={28} />
            </button>
            {isHome && navLinks.map(({ label, href }) => (
              <a key={label} href={href} onClick={closeMenu} className="text-foreground text-xl font-medium hover:text-accent transition-colors">
                {label}
              </a>
            ))}
            {!isHome && <Link to="/" onClick={closeMenu} className="text-foreground text-xl font-medium hover:text-accent">Home</Link>}
            <a href="tel:+919409374599" onClick={closeMenu} className="flex items-center gap-2 text-muted-foreground hover:text-accent text-lg">
              <Phone size={20} /> +91 94093 74599
            </a>
            <Button onClick={() => { closeMenu(); onOpenLead(); }} variant="accent" className="rounded-full px-8 py-3 font-medium">
              Enquire Now
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default NavbarPrimary;
