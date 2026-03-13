import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "adani_disclaimer_accepted";

export default function DisclaimerModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(STORAGE_KEY);
    if (!accepted) setOpen(true);
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[11000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-card rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 md:p-8"
          >
            <img src="/logo.png" alt="Adani Realty" className="h-11 w-auto mb-6" />
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
              Welcome to Shantigram: Where 'The Good Life' Begins
            </h2>
            <div className="flex items-start gap-3 mb-4 p-4 rounded-xl bg-accent/10 border border-accent/20">
              <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div className="text-sm text-foreground space-y-2">
                <p className="font-semibold text-foreground">Disclaimer Note:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>The photographs/artistic impressions contained herein are illustrative and used for indicative purposes only.</li>
                  <li>This is purely conceptual and not a legal offering.</li>
                  <li>No warranty either expressly or impliedly given that the completed development will comply with such artistic impression depicted herein.</li>
                  <li>All specifications, amenities etc. of the unit/project shall be as per the final agreement to sell between the parties.</li>
                  <li>Recipients are advised to use their discretion in relying on the information described/shown herein.</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              For updated sales and marketing information and collaterals, please contact:<br />
              <strong className="text-foreground">Sales Team: 1800 108 0009 (India)</strong><br />
              <strong className="text-foreground">Email: info@adanirealty.com</strong>
            </p>
            <p className="text-xs text-muted-foreground mb-6">
              We use cookies to enhance your experience. By continuing, you agree to our{" "}
              <a href="#" className="text-accent hover:underline">Cookies Policy</a> and{" "}
              <a href="#" className="text-accent hover:underline">Privacy Policy</a>.
            </p>
            <Button onClick={accept} variant="accent" className="w-full rounded-xl py-6 font-semibold">
              Accept
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
