import { createContext, useContext, useState, useCallback, ReactNode } from "react";

type LeadModalContextType = {
  openLead: () => void;
  closeLead: () => void;
  isOpen: boolean;
};

const LeadModalContext = createContext<LeadModalContextType | null>(null);

export function LeadModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const openLead = useCallback(() => setOpen(true), []);
  const closeLead = useCallback(() => setOpen(false), []);
  return (
    <LeadModalContext.Provider value={{ openLead, closeLead, isOpen }}>
      {children}
    </LeadModalContext.Provider>
  );
}

export function useLeadModal() {
  const ctx = useContext(LeadModalContext);
  if (!ctx) throw new Error("useLeadModal must be used within LeadModalProvider");
  return ctx;
}
