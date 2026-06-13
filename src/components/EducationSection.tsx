import { EducationCard } from "./EducationCard";
import { educations } from "../data/education";
import { useInView } from "../hooks/useInView";

/**
 * "Academic Journey" — 3D-tilt education cards laid out on a diagonal, with a
 * gradient route line that draws itself in as the section enters view,
 * suggesting the path from Bali to Coventry.
 */
export function EducationSection() {
  const { ref, inView } = useInView(0.25);

  return (
    <section
      id="education"
      ref={ref}
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#070611] py-28 sm:py-40"
    >
      {/* Ambient backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/3 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[#5a6bff]/15 blur-[150px]" />
        <div className="absolute right-0 bottom-1/4 h-[30rem] w-[30rem] rounded-full bg-[#8d7dca]/15 blur-[150px]" />
        <div className="absolute inset-0 bg-grid opacity-[0.04]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">
          Academic Journey
        </p>
        <h2 className="mt-3 mb-14 font-display text-4xl italic text-white sm:mb-20 sm:text-6xl">
          Education
        </h2>

        {/* Cards + route line */}
        <div className="relative">
          {/* Draw-in route line (desktop only) */}
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 hidden h-full w-full lg:block"
            viewBox="0 0 1000 400"
            preserveAspectRatio="none"
          >
            <path
              d="M 120 90 C 360 30, 620 380, 880 300"
              fill="none"
              stroke="url(#routeGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              pathLength={1}
              style={{
                strokeDasharray: 1,
                strokeDashoffset: inView ? 0 : 1,
                transition: "stroke-dashoffset 2s ease",
              }}
            />
            <defs>
              <linearGradient id="routeGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#8d7dca" stopOpacity="0.1" />
                <stop offset="0.5" stopColor="#8d7dca" stopOpacity="0.7" />
                <stop offset="1" stopColor="#5a6bff" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {educations.map((education, i) => (
              <div key={education.id} className={i === 1 ? "lg:mt-24" : ""}>
                <EducationCard
                  education={education}
                  index={i + 1}
                  active={inView}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
