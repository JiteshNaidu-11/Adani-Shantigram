import { Outlet } from "react-router-dom";
import { useLeadModal } from "@/context/LeadModalContext";
import NavbarPrimary from "@/components/NavbarPrimary";
import FooterSection from "@/components/FooterSection";
import ScrollToTop from "@/components/ScrollToTop";

export default function Layout() {
  const { openLead } = useLeadModal();
  return (
    <>
      <ScrollToTop />
      <NavbarPrimary onOpenLead={openLead} />
      <Outlet />
      <FooterSection />
    </>
  );
}
