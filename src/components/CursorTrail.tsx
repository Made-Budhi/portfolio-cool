import { useEffect, useRef } from "react";

/** Programming-flavored tokens scattered along the cursor's path. */
const TOKENS = [
  "{", "}", "(", ")", "[", "]", "<", ">", "/", ";", "=>", "&&", "||",
  "!=", "==", "//", "::", "</>", "#", "$", "*", "+", "-", "~", "^", "%",
  "0", "1", "fn", "0x",
];

// Minimum cursor travel (px) between spawned characters.
const SPAWN_DISTANCE = 22;

/**
 * A full-page cursor trail: every time the pointer travels far enough, a
 * random code token spawns at the cursor and fades/drifts away. DOM nodes are
 * created and removed imperatively (no per-particle React render) and clean
 * themselves up on animation end. Skipped for touch / reduced-motion users.
 */
export function CursorTrail() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Respect user preferences and skip pointer-less devices.
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(pointer: coarse)").matches
    ) {
      return;
    }

    let lastX = 0;
    let lastY = 0;
    let started = false;

    const spawn = (x: number, y: number) => {
      const span = document.createElement("span");
      span.className = "cursor-trail-char";
      span.textContent = TOKENS[Math.floor(Math.random() * TOKENS.length)];
      span.style.left = `${x}px`;
      span.style.top = `${y}px`;
      span.style.setProperty("--rot", `${(Math.random() * 24 - 12).toFixed(1)}deg`);
      span.addEventListener("animationend", () => span.remove(), { once: true });
      container.appendChild(span);
    };

    const onMove = (e: MouseEvent) => {
      if (!started) {
        lastX = e.clientX;
        lastY = e.clientY;
        started = true;
        return;
      }
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      if (dx * dx + dy * dy >= SPAWN_DISTANCE * SPAWN_DISTANCE) {
        spawn(e.clientX, e.clientY);
        lastX = e.clientX;
        lastY = e.clientY;
      }
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      container.replaceChildren();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[60] overflow-hidden"
    />
  );
}
