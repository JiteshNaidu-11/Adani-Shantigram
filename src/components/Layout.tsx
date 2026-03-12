import { Outlet } from "react-router-dom";
import { useLeadModal } from "@/context/LeadModalContext";
import NavbarPrimary from "@/components/NavbarPrimary";

export default function Layout() {
  const { openLead } = useLeadModal();
  return (
    <>
      <NavbarPrimary onOpenLead={openLead} />
      <Outlet />
    </>
  );
}
