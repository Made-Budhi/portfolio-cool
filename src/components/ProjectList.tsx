import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ProjectPreview } from "./ProjectPreview";
import { projects } from "../data/projects";

/**
 * Editorial list of projects. Hovering a row dims the others and reveals
 * that project's image, which smoothly trails the cursor. Every row is a
 * real link, so the interaction is entirely user-driven — no autoplay.
 */
export function ProjectList() {
  const [active, setActive] = useState<number | null>(null);
  // Persists the last hovered project so its image stays put while fading out.
  const [lastIndex, setLastIndex] = useState(0);

  const followerRef = useRef<HTMLDivElement>(null);
  // Smoothly eased pointer-follow, driven by rAF so the preview sits on the cursor.
  const target = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const seeded = useRef(false);

  useEffect(() => {
    let frame = 0;

    const tick = () => {
      // Ease current position toward the cursor target.
      pos.current.x += (target.current.x - pos.current.x) * 0.2;
      pos.current.y += (target.current.y - pos.current.y) * 0.2;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    target.current.x = e.clientX;
    target.current.y = e.clientY;
    // On the first move, snap to the cursor so it doesn't slide in from a corner.
    if (!seeded.current) {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      seeded.current = true;
    }
  };

  const handleEnter = (i: number) => {
    setActive(i);
    setLastIndex(i);
  };

  return (
    <div onMouseMove={handleMouseMove}>
      <ul className="border-t border-white/10">
        {projects.map((project, i) => {
          const dimmed = active !== null && active !== i;

          return (
            <li key={project.id} className="border-b border-white/10">
              <Link
                to={`/projects/${project.id}`}
                onMouseEnter={() => handleEnter(i)}
                onMouseLeave={() => setActive(null)}
                className={`group grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-2 py-7 transition-opacity duration-300 sm:py-9 md:grid-cols-[minmax(140px,0.9fr)_2.2fr_90px_120px] ${
                  dimmed ? "opacity-35" : "opacity-100"
                }`}
              >
                <span className="order-1 font-mono text-[11px] uppercase tracking-[0.2em] text-white/45 md:self-center">
                  {project.category}
                </span>

                <span className="order-3 col-span-2 font-serif text-3xl italic leading-none text-white transition-transform duration-300 group-hover:translate-x-2 sm:text-5xl md:order-2 md:col-span-1">
                  {project.title}
                </span>

                <span className="order-2 justify-self-end font-mono text-xs text-white/45 md:order-3 md:justify-self-start md:self-center">
                  {project.year}
                </span>

                <span className="order-4 hidden items-center justify-end gap-1 self-center font-mono text-[11px] uppercase tracking-widest text-white/45 transition-colors group-hover:text-white md:flex">
                  View <span aria-hidden>↗</span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>

      <ProjectPreview
        ref={followerRef}
        project={projects[lastIndex]}
        visible={active !== null}
      />
    </div>
  );
}
