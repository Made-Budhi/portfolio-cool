import { SkillCard } from "./SkillCard";
import { skillGroups } from "../data/skills";

/**
 * Technical skills as a frosted bento grid over a deep-purple aurora.
 * The background fades from black at the top and bottom edges so it blends
 * seamlessly with the black sections above and below.
 */
export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#08060f] py-28 sm:py-40"
    >
      {/* Aurora + grid backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/4 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-[#8d7dca]/25 blur-[150px]" />
        <div className="absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[#5a6bff]/15 blur-[130px]" />
        <div className="absolute inset-0 bg-grid opacity-[0.05]" />
        {/* Fade to black at top and bottom for seamless section blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">
          Toolkit
        </p>
        <h2 className="mt-3 mb-12 text-3xl font-bold text-white sm:mb-16 sm:text-5xl">
          Technical Skills &amp; Tools
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <SkillCard key={group.id} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}
