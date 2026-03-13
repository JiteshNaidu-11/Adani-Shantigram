import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const FooterSection = () => {
  const [disclaimerOpen, setDisclaimerOpen] = useState(false);

  return (
    <footer className="bg-secondary border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="container-custom mx-auto section-padding !py-12"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <img src="/logo.png" alt="Adani Realty" className="h-9 w-auto mb-3 opacity-90" />
            <h4 className="font-display text-lg text-foreground mb-4">Adani Shantigram</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Adani Shantigram — 600-acre integrated township on SG Highway between Ahmedabad & Gandhinagar. Premium 2, 3, 4 & 5 BHK homes, villas, The Belvedere Golf & Country Club and world-class amenities. RERA Registered.
            </p>
          </div>
          <div>
            <h4 className="font-display text-base text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Projects", "Amenities", "Location", "Contact"].map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} className="block text-sm text-muted-foreground hover:text-accent transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display text-base text-foreground mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Toll-Free: 1800 108 0009 (India)</p>
              <p>info@adanirealty.com</p>
              <p>SG Highway, Ahmedabad – Gandhinagar, Gujarat</p>
            </div>
          </div>
          <div>
            <h4 className="font-display text-base text-foreground mb-4">Legal</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>RERA Registered</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6">
          <button
            onClick={() => setDisclaimerOpen(!disclaimerOpen)}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-3"
          >
            Disclaimer
            <ChevronDown size={14} className={`transition-transform ${disclaimerOpen ? "rotate-180" : ""}`} />
          </button>
          {disclaimerOpen && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="text-xs text-muted-foreground leading-relaxed overflow-hidden"
            >
              This website is for information purposes only and should not be treated as an offer or solicitation. Project details, amenities and specifications are subject to change. Images may be artist's impressions. Please contact our sales team for verified information.
            </motion.p>
          )}
          <p className="text-xs text-muted-foreground mt-4">
            © 2025 Adani Realty. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
