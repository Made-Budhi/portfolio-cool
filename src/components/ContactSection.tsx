import { useRef } from "react";
import { email, socialLinks } from "../data/contacts";

/**
 * Closing contact section. The background is an interactive spotlight — a
 * soft purple glow that follows the cursor — over a faint grid, anchored by
 * a warm glow at the bottom edge. Big email CTA + links + footer bar.
 */
export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <section
      id="contact"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative isolate flex min-h-dvh scroll-mt-24 flex-col overflow-hidden bg-[#06050d]"
      style={{ ["--x" as string]: "50%", ["--y" as string]: "50%" }}
    >
      {/* Interactive spotlight + ambient glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-[0.04]" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(500px circle at var(--x) var(--y), rgba(141,125,202,0.18), transparent 70%)",
          }}
        />
        <div className="absolute -bottom-32 left-1/2 h-[34rem] w-[44rem] -translate-x-1/2 rounded-full bg-[#8d7dca]/20 blur-[150px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent" />
      </div>

      {/* Main CTA */}
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 py-28 sm:px-10 sm:py-32">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">
          Contact
        </p>
        <h2 className="mt-5 max-w-4xl font-serif text-5xl italic leading-[1.05] text-white sm:text-7xl lg:text-8xl">
          Let&apos;s build something together.
        </h2>

        {/* Email */}
        <a
          href={`mailto:${email}`}
          className="group mt-12 inline-flex w-fit items-center gap-3 font-serif text-2xl italic text-white transition-colors hover:text-[#bcb0ed] sm:text-4xl lg:text-5xl"
        >
          <span className="break-all underline decoration-white/20 decoration-1 underline-offset-8 transition-colors group-hover:decoration-[#8d7dca]">
            {email}
          </span>
          <span
            aria-hidden
            className="shrink-0 transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-1"
          >
            ↗
          </span>
        </a>

        {/* Links */}
        <ul className="mt-16 grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md sm:grid-cols-3">
          {socialLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col justify-between gap-6 p-6 transition-colors hover:bg-white/[0.06]"
              >
                <span className="font-mono text-[11px] uppercase tracking-widest text-white/45">
                  {link.label}
                </span>
                <span className="flex items-center justify-between text-base text-white/80 transition-colors group-hover:text-white">
                  {link.value}
                  <span
                    aria-hidden
                    className="text-white/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#8d7dca]"
                  >
                    →
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer bar */}
      <footer className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-8 font-mono text-xs text-white/40 sm:flex-row sm:items-center sm:px-10">
          <span>© 2026 Made Budhi</span>
          <span className="hidden sm:block">Designed &amp; built with care (and Claude Code)</span>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 uppercase tracking-widest transition-colors hover:text-white"
          >
            Back to top <span aria-hidden>↑</span>
          </button>
        </div>
      </footer>
    </section>
  );
}
