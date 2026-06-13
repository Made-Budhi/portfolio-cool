import { ProjectList } from "./ProjectList";

/**
 * Featured work section. Sits on solid black, just below the hero — the
 * hero's fade-to-black overlay blends the shader gradient into this section.
 */
export function FeaturedProjects() {
  return (
    <section
      id="work"
      className="relative mt-40 scroll-mt-24 bg-black pb-28 pt-16 sm:pb-40 sm:pt-24"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">
          Selected Work
        </p>
        <h2 className="mt-3 mb-12 font-display text-4xl italic text-white sm:mb-28 sm:text-6xl">
          Featured Projects
        </h2>

        <ProjectList />
      </div>
    </section>
  );
}
