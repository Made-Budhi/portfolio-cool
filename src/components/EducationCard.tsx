import { useRef, useState } from "react";
import type { Education } from "../data/education";

interface EducationCardProps {
  education: Education;
  index: number;
  /** True once the section is in view — triggers the progress-bar fill. */
  active: boolean;
}

const NEUTRAL = "perspective(1000px) rotateX(0deg) rotateY(0deg)";

/**
 * A glass education card that tilts in 3D toward the cursor, with layered
 * depth (institution name floats forward), geo-coordinates, an optional
 * exchange badge, and a progress bar that fills when scrolled into view.
 */
export function EducationCard({ education, index, active }: EducationCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState(NEUTRAL);
  const [hovered, setHovered] = useState(false);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform(
      `perspective(1000px) rotateX(${(-py * 8).toFixed(2)}deg) rotateY(${(px * 10).toFixed(2)}deg)`
    );
  };

  const reset = () => {
    setTransform(NEUTRAL);
    setHovered(false);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={reset}
      style={{ transform }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md transition-transform duration-300 ease-out [transform-style:preserve-3d] hover:border-white/25 sm:p-10"
    >
      {/* Glow that appears on hover */}
      <div
        className={`pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#8d7dca]/25 blur-3xl transition-opacity duration-500 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="flex items-start justify-between">
        <span className="font-mono text-xs tracking-widest text-white/40">
          {String(index).padStart(2, "0")}
        </span>
        {education.badge && (
          <span
            style={{ transform: "translateZ(40px)" }}
            className="rounded-full border border-[#8d7dca]/40 bg-[#8d7dca]/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[#bcb0ed]"
          >
            {education.badge}
          </span>
        )}
      </div>

      <h3
        style={{ transform: "translateZ(35px)" }}
        className="mt-6 font-serif text-3xl italic leading-tight text-white sm:text-4xl"
      >
        {education.institution}
      </h3>
      <p className="mt-2 text-base text-white/70">{education.field}</p>

      <div className="mt-8 h-px w-full bg-white/10" />

      {/* Location */}
      <div className="mt-5">
        <span className="flex items-center gap-2 text-sm text-white/70">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            className="shrink-0 text-[#8d7dca]"
            aria-hidden
          >
            <path
              d="M12 21s7-6.6 7-12a7 7 0 1 0-14 0c0 5.4 7 12 7 12Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2" />
          </svg>
          {education.location}
        </span>
      </div>

      {/* Period + progress */}
      <div className="mt-6">
        <div className="flex items-baseline justify-between">
          <span className="font-mono text-sm text-[#a99ce0]">
            {education.period}
          </span>
          {education.note && (
            <span className="font-mono text-[11px] uppercase tracking-widest text-white/40">
              {education.note}
            </span>
          )}
        </div>

        {education.progress !== undefined && (
          <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#8d7dca] to-[#5a6bff] transition-[width] duration-[1400ms] ease-out"
              style={{ width: active ? `${education.progress * 100}%` : "0%" }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
