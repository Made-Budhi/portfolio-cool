import { AnimatedSignature } from "./AnimatedSignature";

/**
 * Full-viewport hero holding the animated signature. The shader gradient is
 * rendered behind it (fixed, at the app root). A gradient overlay along the
 * bottom edge fades the shader smoothly into black, so the transition into
 * the projects section is seamless rather than a hard cut.
 */
export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-dvh items-center justify-center px-6 sm:px-10"
    >
      <div className="w-full max-w-184.25">
        <AnimatedSignature />
      </div>

      {/* Fade the hero (and the fixed shader behind it) into black.
          Stays transparent through the upper half so the darkening only
          sets in near the very bottom edge. */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-40 h-60 bg-linear-to-b from-transparent via-transparent to-black sm:h-96" />
    </section>
  );
}
