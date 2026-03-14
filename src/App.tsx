import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LeadModalProvider, useLeadModal } from "@/context/LeadModalContext";
import LeadPopup from "./components/LeadPopup";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PropertyDetail from "./pages/PropertyDetail";
import LeadSidebar from "./components/LeadSidebar";
import LeadModalForm from "./components/LeadModalForm";
import Layout from "./components/Layout";
// import DisclaimerModal from "./components/DisclaimerModal";

const queryClient = new QueryClient();

/** On full load/refresh: scroll to hero and clear hash so user always lands at top. */
function useScrollToHeroOnLoad() {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }, []);
}

function AppContent() {
  const { isOpen, openLead, closeLead } = useLeadModal();
  useScrollToHeroOnLoad();

  return (
    <>
      {/* <DisclaimerModal /> */}
      <LeadPopup />
      <div className="min-w-0 overflow-x-hidden md:pr-20 xl:pr-[340px]">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/project/:slug" element={<PropertyDetail />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <LeadSidebar onOpenLead={openLead} />
      <LeadModalForm open={isOpen} onClose={closeLead} />
    </>
  );
}

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <LeadModalProvider>
            <AppContent />
          </LeadModalProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;