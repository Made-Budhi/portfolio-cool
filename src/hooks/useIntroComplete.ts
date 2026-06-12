import { useEffect, useState } from "react";

// Module-level so the signal survives component remounts (e.g. navigating
// away from the home page and back — the intro should not replay).
let introComplete = false;

/** Call once the intro curtain has finished opening. */
export function markIntroComplete() {
  if (introComplete) return;
  introComplete = true;
  window.dispatchEvent(new Event("intro:complete"));
}

/**
 * Returns true once the intro curtain has finished. On any mount after the
 * intro already ran (e.g. returning to the home route), it's true immediately.
 */
export function useIntroComplete(): boolean {
  // Initializer covers the "already complete" case (e.g. remounts); the
  // listener covers the live curtain finishing during this mount.
  const [done, setDone] = useState(introComplete);

  useEffect(() => {
    if (introComplete) return;
    const handler = () => setDone(true);
    window.addEventListener("intro:complete", handler);
    return () => window.removeEventListener("intro:complete", handler);
  }, []);

  return done;
}
