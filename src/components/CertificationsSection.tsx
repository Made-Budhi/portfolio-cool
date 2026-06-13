import { useState } from "react";
import { ScoreGauge } from "./ScoreGauge";
import { CertificateModal } from "./CertificateModal";
import { certifications, type Certification } from "../data/certifications";
import { useInView } from "../hooks/useInView";

/** Affordance shown on cards that open a certificate PDF. */
function ViewCertificate({ className = "mt-6" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-white/45 transition-colors group-hover:text-[#bcb0ed] ${className}`}
    >
      View Certificate
      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
        ↗
      </span>
    </span>
  );
}

/**
 * Credentials section. The score-bearing certification (TOEIC) becomes a
 * count-up gauge feature; the rest render as shimmering badge cards. Cards
 * with a PDF are clickable and open it in an in-page viewer.
 */
export function CertificationsSection() {
  const { ref, inView } = useInView(0.3);
  const [selected, setSelected] = useState<Certification | null>(null);

  const scored = certifications.find((c) => c.score !== undefined);
  const badges = certifications.filter((c) => c.score === undefined);

  // Shared interaction props for any card backed by a PDF.
  const clickProps = (cert: Certification) =>
    cert.pdf
      ? {
          onClick: () => setSelected(cert),
          role: "button" as const,
          tabIndex: 0,
          onKeyDown: (e: React.KeyboardEvent) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setSelected(cert);
            }
          },
          className: "cursor-pointer",
        }
      : {};

  return (
    <section
      id="certifications"
      ref={ref}
      className="relative isolate scroll-mt-24 overflow-hidden bg-black py-28 sm:py-40"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8d7dca]/15 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">
          Credentials
        </p>
        <h2 className="mt-3 mb-12 font-display text-4xl italic text-white sm:mb-16 sm:text-6xl">
          Certifications
        </h2>

        <div className="space-y-5">
          {/* Featured score card — full-width banner */}
          {scored && (
            <article
              {...clickProps(scored)}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md transition-colors duration-300 hover:border-white/25 sm:p-10 ${
                scored.pdf ? "cursor-pointer" : ""
              }`}
            >
              <div className="flex flex-col items-center gap-10 text-center sm:flex-row sm:gap-14 sm:text-left">
                <ScoreGauge
                  score={scored.score!}
                  max={scored.maxScore ?? 990}
                  active={inView}
                />
                <div className="sm:flex-1">
                  {scored.issuer && (
                    <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#a99ce0]">
                      {scored.issuer}
                    </span>
                  )}
                  <h3 className="mt-3 font-serif text-3xl italic leading-tight text-white sm:text-5xl">
                    {scored.title}
                  </h3>
                  {scored.scoreLabel && (
                    <p className="mt-2 font-mono text-xs uppercase tracking-widest text-white/45">
                      {scored.scoreLabel}
                    </p>
                  )}
                  {scored.description && (
                    <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/65">
                      {scored.description}
                    </p>
                  )}
                  {scored.pdf && <ViewCertificate />}
                </div>
              </div>
            </article>
          )}

          {/* Badge cards — equal-height row beneath */}
          <div className="grid gap-5 sm:grid-cols-2">
            {badges.map((cert) => (
              <article
                key={cert.id}
                {...clickProps(cert)}
                className={`group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md transition-colors duration-300 hover:border-white/25 sm:p-10 ${
                  cert.pdf ? "cursor-pointer" : ""
                }`}
              >
                {/* Shimmer sweep on hover */}
                <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[420%]" />

                {/* Seal emblem */}
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#8d7dca] to-[#5a6bff]">
                  <div className="flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full bg-[#0b0a14]">
                    <span className="font-mono text-sm text-[#bcb0ed]">&lt;/&gt;</span>
                  </div>
                </div>

                {cert.issuer && (
                  <span className="mt-6 font-mono text-[11px] uppercase tracking-[0.25em] text-[#a99ce0]">
                    {cert.issuer}
                  </span>
                )}
                <h3 className="mt-3 font-serif text-2xl italic leading-tight text-white sm:text-3xl">
                  {cert.title}
                </h3>
                {cert.description && (
                  <p className="mt-4 text-sm leading-relaxed text-white/60">
                    {cert.description}
                  </p>
                )}

                {cert.pdf ? (
                  <ViewCertificate className="mt-auto pt-6" />
                ) : (
                  cert.year && (
                    <span className="mt-auto inline-flex w-fit items-center gap-2 pt-6 font-mono text-[11px] uppercase tracking-widest text-white/45">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#8d7dca]" />
                      {cert.year}
                    </span>
                  )
                )}
              </article>
            ))}
          </div>
        </div>
      </div>

      {selected?.pdf && (
        <CertificateModal
          title={selected.title}
          pdf={selected.pdf}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}
