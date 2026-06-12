import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Resets scroll position to the top whenever the route changes, so
 * navigating into a project doesn't land mid-page.
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
