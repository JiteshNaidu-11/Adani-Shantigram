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
        className="container-luxury section-padding !py-12"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Puravankara Group</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium 2, 3 & 4 BHK residences in Whitefield, Bangalore. RERA Registered.
            </p>
          </div>
          <div>
            <h4 className="font-display text-base text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Pricing", "Amenities", "Gallery", "Location"].map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display text-base text-foreground mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>+91 98765 43210</p>
              <p>sales@puravankara.in</p>
              <p>Whitefield, Bangalore 560066</p>
            </div>
          </div>
          <div>
            <h4 className="font-display text-base text-foreground mb-4">Legal</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>RERA No: PRM/KA/RERA/1234</p>
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
              This website is meant for information purposes only and should not be treated as an offer or solicitation for purchase.
              The project details, amenities, and specifications mentioned herein are subject to change without notice and do not constitute
              a legal offering. All images are artist's impressions and may vary from the actual project. Please contact our sales team
              for verified and updated information.
            </motion.p>
          )}
          <p className="text-xs text-muted-foreground mt-4">
            © 2026 Puravankara Group. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
