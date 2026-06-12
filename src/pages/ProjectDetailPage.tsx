import { useParams, Link } from "react-router-dom";
import { projects, getProject } from "../data/projects";

export function ProjectDetailPage() {
  const { id } = useParams();
  const project = getProject(id);

  if (!project) {
    return (
      <main className="flex min-h-dvh flex-col items-center justify-center bg-black px-6 text-center text-white">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">
          404
        </p>
        <h1 className="mt-4 font-serif text-4xl italic">Project not found</h1>
        <Link
          to="/"
          className="mt-8 font-mono text-xs uppercase tracking-widest text-white/60 underline-offset-4 hover:text-white hover:underline"
        >
          ← Back to home
        </Link>
      </main>
    );
  }

  // Next project for the footer link (wraps around).
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="min-h-dvh bg-black text-white">
      <article className="mx-auto max-w-3xl px-6 pb-32 pt-16 sm:px-8 sm:pt-24">
        {/* Back */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/50 transition-colors hover:text-white"
        >
          <span aria-hidden>←</span> Work
        </Link>

        {/* Title block */}
        <header className="mt-12 sm:mt-16">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-white/45">
            <span>{project.category}</span>
            <span className="h-px w-6 bg-white/25" />
            <span>{project.year}</span>
          </div>
          <h1 className="mt-5 font-serif text-5xl italic leading-[1.05] sm:text-7xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
            {project.tagline}
          </p>
        </header>

        {/* Hero visual */}
        <div
          className="mt-12 aspect-[16/9] w-full overflow-hidden rounded-2xl ring-1 ring-white/10 sm:mt-16"
          style={project.image ? undefined : { background: project.accent }}
        >
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          )}
        </div>

        {/* Meta */}
        <dl className="mt-12 grid grid-cols-2 gap-8 border-y border-white/10 py-8 sm:grid-cols-3">
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-widest text-white/40">
              Role
            </dt>
            <dd className="mt-2 text-sm text-white/80">{project.role}</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-widest text-white/40">
              Tools
            </dt>
            <dd className="mt-2 text-sm text-white/80">
              {project.tools.join(", ")}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-widest text-white/40">
              Year
            </dt>
            <dd className="mt-2 text-sm text-white/80">{project.year}</dd>
          </div>
        </dl>

        {/* Overview */}
        <p className="mt-12 text-xl leading-relaxed text-white/85 sm:text-2xl sm:leading-relaxed">
          {project.overview}
        </p>

        {/* Story sections */}
        <div className="mt-16 space-y-14">
          {project.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-serif text-2xl italic text-white sm:text-3xl">
                {section.heading}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg sm:leading-relaxed">
                {section.body}
              </p>
            </section>
          ))}
        </div>
      </article>

      {/* Next project */}
      <Link
        to={`/projects/${nextProject.id}`}
        className="group block border-t border-white/10"
      >
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-14 sm:px-8">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-white/40">
              Next project
            </p>
            <p className="mt-3 font-serif text-3xl italic text-white/80 transition-colors group-hover:text-white sm:text-4xl">
              {nextProject.title}
            </p>
          </div>
          <span
            aria-hidden
            className="font-serif text-3xl text-white/50 transition-all group-hover:translate-x-2 group-hover:text-white sm:text-4xl"
          >
            →
          </span>
        </div>
      </Link>
    </main>
  );
}
