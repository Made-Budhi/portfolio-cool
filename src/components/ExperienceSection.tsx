import { ExperienceItem } from "./ExperienceItem";
import { experiences } from "../data/experiences";

/**
 * Professional experience, presented as a vertical timeline. Continues the
 * black background from the projects section above for a seamless flow.
 */
export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-24 bg-black pb-28 pt-16 sm:pb-40 sm:pt-24"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">
          Career
        </p>
        <h2 className="mt-3 mb-12 text-3xl font-bold text-white sm:mb-20 sm:text-5xl">
          Professional Experience
        </h2>

        <ul className="space-y-20">
          {experiences.map((experience, i) => (
            <ExperienceItem
              key={experience.id}
              experience={experience}
              index={i + 1}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
