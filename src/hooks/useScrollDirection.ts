import { useEffect, useRef, useState } from "react";

interface ScrollState {
  /** True when the user is scrolling down past the top region. */
  hidden: boolean;
  /** True once the page has scrolled away from the very top. */
  scrolled: boolean;
}

/**
 * Tracks scroll direction so a sticky bar can hide on scroll-down and reveal
 * on scroll-up, plus whether we've left the top (for a background swap).
 */
export function useScrollDirection(): ScrollState {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 10);

      const diff = y - lastY.current;
      // Ignore tiny jitter to keep the bar from flickering.
      if (Math.abs(diff) < 6) return;

      // Hide when moving down (and past the hero region); show when moving up.
      setHidden(diff > 0 && y > 120);
      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { hidden, scrolled };
}
