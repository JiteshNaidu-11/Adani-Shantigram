import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Resets scroll on route changes so pages like Legal Disclaimer open at the top.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
}
