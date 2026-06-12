import type { Experience } from "../data/experiences";

interface ExperienceItemProps {
  experience: Experience;
  /** 1-based position, shown as an editorial index. */
  index: number;
}

/**
 * A single role on the experience timeline: accent line + marker dot on the
 * left, role/company/story on the right. Designed to carry visual weight on
 * its own, so one entry doesn't read as empty.
 */
export function ExperienceItem({ experience, index }: ExperienceItemProps) {
  return (
    <li className="group relative pl-8 sm:pl-14">
      {/* Timeline line — fades out at the bottom so a lone entry looks clean */}
      <span className="absolute left-0 top-3 h-full w-px bg-gradient-to-b from-white/25 to-transparent" />

      {/* Marker dot */}
      <span className="absolute left-0 top-2 flex -translate-x-1/2 items-center justify-center">
        <span className="h-3 w-3 rounded-full bg-[#8d7dca] ring-4 ring-black transition-transform duration-300 group-hover:scale-125" />
        {experience.current && (
          <span className="absolute h-3 w-3 animate-ping rounded-full bg-[#8d7dca]" />
        )}
      </span>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#a99ce0]">
          {experience.period}
        </span>
        <span className="font-mono text-[11px] uppercase tracking-widest text-white/40">
          {experience.type}
        </span>
        {experience.current && (
          <span className="rounded-full bg-[#8d7dca]/15 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-[#bcb0ed]">
            Present
          </span>
        )}
      </div>

      <h3 className="mt-3 font-serif text-3xl italic leading-tight text-white sm:text-5xl">
        {experience.role}
      </h3>

      <div className="mt-2 flex items-center gap-2 text-lg text-white/70 sm:text-xl">
        {experience.companyUrl ? (
          <a
            href={experience.companyUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 underline-offset-4 transition-colors hover:text-white hover:underline"
          >
            {experience.company}
            <span aria-hidden className="text-sm">
              ↗
            </span>
          </a>
        ) : (
          <span>{experience.company}</span>
        )}
      </div>

      <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg sm:leading-relaxed">
        {experience.summary}
      </p>

      <ul className="mt-6 max-w-2xl space-y-3">
        {experience.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-3 text-white/70">
            <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8d7dca]" />
            <span className="text-base leading-relaxed sm:text-[1.0625rem]">
              {highlight}
            </span>
          </li>
        ))}
      </ul>

      <ul className="mt-7 flex flex-wrap gap-2">
        {experience.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-white/15 px-3 py-1 font-mono text-xs text-white/60"
          >
            {skill}
          </li>
        ))}
      </ul>

      {/* Oversized faded index for editorial flair */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 hidden font-serif text-7xl italic text-white/[0.04] lg:block"
      >
        {String(index).padStart(2, "0")}
      </span>
    </li>
  );
}
