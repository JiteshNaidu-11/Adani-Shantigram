import { useState } from "react";
import { motion } from "framer-motion";
import { ZoomIn } from "lucide-react";

const MASTER_LAYOUT_FALLBACK = "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80";

export default function MasterLayoutSection() {
  const [useFallback, setUseFallback] = useState(false);

  return (
    <section className="section-padding bg-background">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Master Layout</h2>
          <div className="accent-line" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            Explore Adani Shantigram — the 600-acre integrated township plan — residential, commercial, greens, and amenities.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden card-lift bg-secondary/50"
        >
          <div className="aspect-[4/3] md:aspect-[2/1] flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/10 relative overflow-hidden">
            {!useFallback ? (
              <img
                src="/master-layout.png"
                alt="Adani Shantigram Master Layout"
                className="w-full h-full object-contain p-4"
                onError={() => setUseFallback(true)}
              />
            ) : (
              <img
                src={MASTER_LAYOUT_FALLBACK}
                alt="Adani Shantigram township plan"
                className="w-full h-full object-cover"
              />
            )}
            {useFallback && (
              <div className="absolute bottom-2 left-2 right-2 md:left-auto md:max-w-sm bg-card/95 backdrop-blur rounded-lg p-2 text-left">
                <p className="text-xs text-muted-foreground">
                  Add your plan as <code className="bg-secondary px-1 rounded">/public/master-layout.png</code> to replace this image.
                </p>
              </div>
            )}
          </div>
          <div className="p-4 md:p-6 border-t border-border">
            <p className="text-xs text-muted-foreground text-center">
              Disclaimer: All data and information provided herein (including but not limited to the layout, design etc.) is provided on an indicative basis and the same may be subject to change or withdrawal without notice. Please contact the sales team for updated information.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
