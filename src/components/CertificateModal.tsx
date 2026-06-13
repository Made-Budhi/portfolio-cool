import { useEffect, useState } from "react";

interface CertificateModalProps {
  title: string;
  /** Raw path (may contain spaces); encoded before use. */
  pdf: string;
  onClose: () => void;
}

/**
 * Full-screen overlay that previews a certificate PDF in an embedded viewer.
 * Closes on backdrop click or Escape, locks page scroll, and offers an
 * open-in-new-tab fallback for browsers/devices that can't inline PDFs.
 */
export function CertificateModal({ title, pdf, onClose }: CertificateModalProps) {
  const [shown, setShown] = useState(false);
  const src = encodeURI(pdf);

  useEffect(() => {
    // Trigger the entrance transition after mount.
    const raf = requestAnimationFrame(() => setShown(true));

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} certificate`}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
          shown ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Panel */}
      <div
        className={`relative z-10 flex h-[88vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#0b0a14] shadow-2xl shadow-black/60 transition-all duration-300 ease-out ${
          shown ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <header className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
          <h3 className="truncate font-serif text-lg italic text-white">
            {title}
          </h3>
          <div className="flex shrink-0 items-center gap-4">
            <a
              href={src}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[11px] uppercase tracking-widest text-white/50 transition-colors hover:text-white"
            >
              Open ↗
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/40 hover:text-white"
            >
              ✕
            </button>
          </div>
        </header>

        <iframe
          src={src}
          title={`${title} certificate`}
          className="h-full w-full bg-white"
        />
      </div>
    </div>
  );
}
