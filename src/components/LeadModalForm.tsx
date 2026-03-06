import { useState } from "react";
import { X, Phone, CheckCircle, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LeadModalFormProps {
  open: boolean;
  onClose: () => void;
}

const LeadModalForm = ({ open, onClose }: LeadModalFormProps) => {
  const [form, setForm] = useState({ name: "", mobile: "", consent: false });
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.mobile && form.consent) {
      setSubmitted(true);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setForm({ name: "", mobile: "", consent: false });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" onClick={handleClose} />

      {/* Modal */}
      <div className="relative bg-card rounded-lg w-full max-w-lg animate-scale-in" style={{ boxShadow: "var(--shadow-elevated)" }}>
        <button onClick={handleClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
          <X size={20} />
        </button>

        <div className="grid md:grid-cols-5">
          {/* Trust badges - left */}
          <div className="md:col-span-2 bg-primary rounded-t-lg md:rounded-l-lg md:rounded-tr-none p-6 flex flex-col justify-center gap-4">
            {[
              { icon: Phone, text: "Instant Call Back" },
              { icon: CheckCircle, text: "Free Site Visit" },
              { icon: Gift, text: "Best Price Guarantee" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3 text-primary-foreground">
                <Icon size={18} className="text-accent flex-shrink-0" />
                <span className="text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>

          {/* Form - right */}
          <div className="md:col-span-3 p-6 md:p-8">
            <h3 className="font-display text-2xl text-foreground mb-1">Get Exclusive Details</h3>
            <p className="text-muted-foreground text-sm mb-6">Fill in your details for pricing, brochure & offers.</p>

            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle size={48} className="text-primary mx-auto mb-3" />
                <p className="font-display text-xl text-foreground mb-1">Thank You!</p>
                <p className="text-muted-foreground text-sm">Our team will reach out within 30 minutes.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full h-12 px-4 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  required
                />
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  value={form.mobile}
                  onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                  className="w-full h-12 px-4 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  required
                />
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                    className="mt-1 accent-primary"
                    required
                  />
                  <span className="text-xs text-muted-foreground">
                    I authorize Verdant Heights to contact me. This overrides any DND registration.
                  </span>
                </label>
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg h-12 text-base">
                  Get Pricing Details
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadModalForm;
