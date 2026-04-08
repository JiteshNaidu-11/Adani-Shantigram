import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CHANNEL_PARTNER_DISPLAY_NAME,
  CHANNEL_PARTNER_LOGO_SRC,
  COMPANY_ADDRESS,
  COMPANY_EMAIL,
  COMPANY_PHONE,
} from "@/constants/channelPartnerLegal";
import MandatoryLegalBlock from "@/components/legal/MandatoryLegalBlock";

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="mb-3">
              <img
                src={CHANNEL_PARTNER_LOGO_SRC}
                alt={CHANNEL_PARTNER_DISPLAY_NAME}
                className="h-9 w-auto max-w-[220px] object-contain object-left"
                width={220}
                height={36}
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Shantigram — integrated township on SG Highway between Ahmedabad &amp; Gandhinagar.
              This site is published by {CHANNEL_PARTNER_DISPLAY_NAME} as an authorized channel
              partner; it is not the official developer website.
            </p>
          </div>
          <div>
            <h4 className="font-display text-base text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                ["About", "/#about"],
                ["Projects", "/#projects"],
                ["Amenities", "/#amenities"],
                ["Location", "/#location"],
                ["Contact", "/contact"],
                ["Legal Disclaimer", "/legal-disclaimer"],
              ].map(([label, href]) => (
                <Link
                  key={label}
                  to={href}
                  className="block text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display text-base text-foreground mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>{COMPANY_PHONE}</p>
              <p>
                <a href={`mailto:${COMPANY_EMAIL}`} className="hover:text-accent transition-colors">
                  {COMPANY_EMAIL}
                </a>
              </p>
              <p>{COMPANY_ADDRESS}</p>
            </div>
          </div>
        </div>

        <MandatoryLegalBlock />

        <div className="border-t border-border pt-6 mt-10">
          <p className="text-xs text-muted-foreground">
            © 2026 PropRaise Realty. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
