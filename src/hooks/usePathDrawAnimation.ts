import { useEffect, useRef } from "react";
import gsap from "gsap";

interface UsePathDrawAnimationOptions {
  /** Duration of each path's draw, in seconds. */
  durationPerPath?: number;
  /** GSAP easing for the stroke reveal. */
  ease?: string;
  /** Called once every path has finished drawing. */
  onComplete?: () => void;
  /**
   * Gate the draw. Paths are hidden immediately on mount regardless, but the
   * timeline only runs once this is true — letting an intro finish first.
   */
  enabled?: boolean;
}

/**
 * Animates every `<path>` inside the referenced SVG with a sequential
 * "self-drawing" stroke effect (stroke-dashoffset tween).
 *
 * Returns a ref to attach to the target `<svg>` element.
 */
export function usePathDrawAnimation<T extends SVGSVGElement = SVGSVGElement>({
  durationPerPath = 0.25,
  ease = "none",
  onComplete,
  enabled = true,
}: UsePathDrawAnimationOptions = {}) {
  const svgRef = useRef<T>(null);
  // Kept in a ref so a changing callback identity doesn't restart the draw.
  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    if (!svgRef.current) return;

    const paths = svgRef.current.querySelectorAll("path");

    // Hide every stroke up front so nothing flashes while we wait for `enabled`.
    paths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
    });

    if (!enabled) return;

    const timeline = gsap.timeline({
      onComplete: () => onCompleteRef.current?.(),
    });

    paths.forEach((path) => {
      timeline.to(
        path,
        {
          strokeDashoffset: 0,
          duration: durationPerPath,
          ease,
        },
        ">"
      );
    });

    return () => {
      timeline.kill();
    };
  }, [durationPerPath, ease, enabled]);

  return svgRef;
}
