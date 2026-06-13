import { useEffect, useState } from "react";

/**
 * Animates a number from 0 to `target` once `active` becomes true, easing out.
 * Returns the current value to render.
 */
export function useCountUp(target: number, active: boolean, durationMs = 1600) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    let raf = 0;
    let startTs = 0;

    const step = (ts: number) => {
      if (!startTs) startTs = ts;
      const progress = Math.min((ts - startTs) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setValue(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, active, durationMs]);

  return value;
}
