import { useLeadModal } from "@/context/LeadModalContext";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import HighlightCardsGrid from "@/components/HighlightCardsGrid";
import AmenitiesSection from "@/components/AmenitiesSection";
import LocationMapSection from "@/components/LocationMapSection";
import SiteVisitSection from "@/components/SiteVisitSection";
import VideosSection from "@/components/VideosSection";
import MasterLayoutSection from "@/components/MasterLayoutSection";
import TrustIndicators from "@/components/TrustIndicators";
import ChatbotWidget from "@/components/ChatbotWidget";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  const { openLead } = useLeadModal();

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <main>
        <HeroSection onOpenLead={openLead} />
        <AboutSection onOpenLead={openLead} />
        <TrustIndicators />
        <ProjectsSection onOpenLead={openLead} />
        <HighlightCardsGrid />
        <AmenitiesSection />
        <VideosSection />
        <MasterLayoutSection />
        <LocationMapSection onOpenLead={openLead} />
        <SiteVisitSection />
      </main>
      <FooterSection />
      <ChatbotWidget onEnquire={openLead} />
      <StickyMobileCTA onOpenLead={openLead} />
    </div>
  );
};

export default Index;
