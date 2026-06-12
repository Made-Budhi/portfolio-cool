import type { SkillGroup } from "../data/skills";

interface SkillCardProps {
  group: SkillGroup;
}

/**
 * A frosted-glass bento tile for one skill group. The translucent surface
 * and backdrop blur read against the section's aurora background, and the
 * card lifts + glows on hover.
 */
export function SkillCard({ group }: SkillCardProps) {
  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06] sm:p-7 ${
        group.featured ? "sm:col-span-2" : ""
      }`}
    >
      {/* Soft glow that blooms on hover */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#8d7dca]/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="flex items-center gap-2.5">
        <span className="h-1.5 w-1.5 rounded-full bg-[#8d7dca]" />
        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-white/60">
          {group.title}
        </h3>
      </div>

      {group.caption && (
        <p className="mt-3 font-serif text-lg italic text-white/80">
          {group.caption}
        </p>
      )}

      <ul className="mt-5 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-lg border border-white/10 bg-white/[0.05] px-3 py-1.5 text-sm text-white/75 transition-colors duration-200 hover:border-[#8d7dca]/50 hover:bg-[#8d7dca]/15 hover:text-white"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
