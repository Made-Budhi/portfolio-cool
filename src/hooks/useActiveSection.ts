import { useEffect, useState } from "react";

/**
 * Returns the id of the section the user is currently viewing, so the nav can
 * highlight it.
 *
 * Rather than an IntersectionObserver band (which leaves dead zones between
 * sections of different heights), this walks the sections in document order
 * and picks the last one whose top has scrolled past a reference line near
 * the top of the viewport. A bottom-of-page guard guarantees the final
 * section activates even if it can't scroll all the way up.
 */
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;

      // Reference line sits ~30% down from the top of the viewport.
      const refLine = window.innerHeight * 0.3;
      let current = ids[0] ?? "";

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= refLine) {
          current = id;
        }
      }

      // At (or near) the bottom of the page, force the last section active.
      const scrolledToBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (scrolledToBottom) {
        current = ids[ids.length - 1] ?? current;
      }

      setActive((prev) => (prev === current ? prev : current));
    };

    // Throttle to one update per frame.
    const onScroll = () => {
      if (frame === 0) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids]);

  return active;
}
