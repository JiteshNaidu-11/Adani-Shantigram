import { useState } from "react";
import NavbarPrimary from "@/components/NavbarPrimary";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HighlightCardsGrid from "@/components/HighlightCardsGrid";
import PricingSection from "@/components/PricingSection";
import PlansSection from "@/components/PlansSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import GalleryCarousel from "@/components/GalleryCarousel";
import LocationMapSection from "@/components/LocationMapSection";
import SiteVisitSection from "@/components/SiteVisitSection";
import LeadModalForm from "@/components/LeadModalForm";
import ChatbotWidget from "@/components/ChatbotWidget";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  const [leadOpen, setLeadOpen] = useState(false);
  const openLead = () => setLeadOpen(true);

  return (
    <div className="min-h-screen bg-background pb-14 md:pb-0">
      <NavbarPrimary onOpenLead={openLead} />
      <main>
        <HeroSection onOpenLead={openLead} />
        <AboutSection onOpenLead={openLead} />
        <HighlightCardsGrid />
        <PricingSection onOpenLead={openLead} />
        <PlansSection onOpenLead={openLead} />
        <AmenitiesSection />
        <GalleryCarousel />
        <LocationMapSection onOpenLead={openLead} />
        <SiteVisitSection />
      </main>
      <FooterSection />
      <ChatbotWidget />
      <StickyMobileCTA onOpenLead={openLead} />
      <LeadModalForm open={leadOpen} onClose={() => setLeadOpen(false)} />
    </div>
  );
};

export default Index;
