import { forwardRef } from "react";
import type { Project } from "../data/projects";

interface ProjectPreviewProps {
  project: Project | null;
  visible: boolean;
}

/**
 * The floating image that trails the cursor while a project row is hovered.
 * Positioning is driven by the parent (via the forwarded ref + GSAP); this
 * component only handles what it looks like and its show/hide fade.
 */
export const ProjectPreview = forwardRef<HTMLDivElement, ProjectPreviewProps>(
  function ProjectPreview({ project, visible }, ref) {
    return (
      <div
        ref={ref}
        className="pointer-events-none fixed left-0 top-0 z-30 hidden lg:block"
      >
        <div
          className={`origin-center -translate-x-1/2 -translate-y-1/2 rotate-3 transition-[opacity,transform] duration-300 ease-out ${
            visible ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
        >
          <div
            className="relative h-96 w-72 p-3 rounded-xl shadow-2xl shadow-black/60 ring-1 ring-white/15 flex flex-col items-center justify-between"
            style={{ background: project?.accent }}
          >
            {project?.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-lg object-cover"
              />
            )}
            
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <p className="mt-1 font-serif text-xl italic text-white">
                {project.title}
              </p>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
);
