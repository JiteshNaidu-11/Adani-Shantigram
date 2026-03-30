import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LegalDisclaimerText from "@/components/legal/LegalDisclaimerText";
import ChannelPartnerBrandingLine from "@/components/legal/ChannelPartnerBrandingLine";

export default function LandingLegalNotice() {
  return (
    <section
      aria-label="Legal notice"
      className="section-padding bg-muted/40 border-y border-border"
    >
      <div className="container-custom mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-border bg-card/80 p-6 sm:p-8 shadow-sm"
        >
          <h2 className="font-display text-lg sm:text-xl text-foreground mb-3">
            Important notice
          </h2>
          <ChannelPartnerBrandingLine className="mb-4" />
          <LegalDisclaimerText variant="summary" compact className="mb-4" />
          <Link
            to="/legal-disclaimer"
            className="text-sm font-medium text-accent hover:underline"
          >
            Read full legal disclaimer &amp; RERA details →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
