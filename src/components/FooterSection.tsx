import { motion } from "framer-motion";
import AdaniLogo from "@/components/AdaniLogo";

const FooterSection = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="container-custom mx-auto section-padding !py-12"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-foreground mb-3">
              <AdaniLogo className="text-lg opacity-90" />
            </div>
            {/* <h4 className="font-display text-lg text-foreground mb-4">Adani Shantigram</h4> */}
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
              <p>+91 94093 74599</p>
              <p>info@propraiserealtors.com</p>
              <p>SG Highway, Ahmedabad – Gandhinagar, Gujarat</p>
            </div>
          </div>
          {/* Legal section commented out
          <div>
            <h4 className="font-display text-base text-foreground mb-4">Legal</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>RERA Registered</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
          */}
        </div>

        <div className="border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">
            © 2026 PropRaise Realty. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
