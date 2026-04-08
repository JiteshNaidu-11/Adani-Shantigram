import { Link } from "react-router-dom";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function ThankYou() {
  usePageTitle("Thank You");

  return (
    <div className="min-h-screen bg-background pt-24 md:pt-28 pb-24 px-4">
      <div className="container-custom mx-auto max-w-lg text-center">
        <h1 className="font-display text-3xl sm:text-4xl text-foreground mb-4">Thank you</h1>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          We received your enquiry. Our team will contact you shortly.
        </p>
        <Link to="/" className="text-accent font-medium hover:underline">
          Back to home
        </Link>
      </div>
    </div>
  );
}
