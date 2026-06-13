import { useEffect, useRef, useState } from "react";

/**
 * Returns a ref + a boolean that flips true the first time the element scrolls
 * into view, then stops observing. Useful for triggering one-shot reveal
 * animations (count-ups, draw-ins) only when the user reaches a section.
 */
export function useInView<T extends Element = HTMLDivElement>(threshold = 0.3) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}
