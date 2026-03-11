import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import LeadPopup from "./components/LeadPopup";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

import LeadSidebar from "./components/LeadSidebar";
import LeadModal from "./components/LeadModal";

const queryClient = new QueryClient();

const App = () => {

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>

        <Toaster />
        <Sonner />

        <BrowserRouter>

          {/* Lead Popup */}
          <LeadPopup />

          {/* Main content */}
          <div className="xl:pr-[340px]">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>

          {/* Fixed sidebar */}
          <LeadSidebar setModalOpen={setModalOpen} />

        </BrowserRouter>

        {/* Global Lead Modal */}
        <LeadModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        />

      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;