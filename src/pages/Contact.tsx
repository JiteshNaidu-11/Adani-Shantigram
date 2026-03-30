import SiteVisitSection from "@/components/SiteVisitSection";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function Contact() {
  usePageTitle("Contact");

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <main className="pt-24 md:pt-28">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl mb-8">
          <h1 className="font-display text-3xl sm:text-4xl text-foreground">
            Contact
          </h1>
          <p className="text-muted-foreground text-sm mt-2">
            Site visit requests, phone, and legal notices are below.
          </p>
        </div>
        <SiteVisitSection />
      </main>
    </div>
  );
}
