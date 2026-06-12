import { useEffect, useState } from "react";
import { markIntroComplete } from "../hooks/useIntroComplete";

/** "Hello" in a handful of languages — ends on Indonesian for a local touch. */
const GREETINGS = [
  "Hello",
  "Hola",
  "Bonjour",
  "Ciao",
  "こんにちは",
  "안녕하세요",
  "你好",
  "नमस्ते",
  "Olá",
  "Halo",
];

const INTERVAL_MS = 170; // time each greeting is shown
const SPLIT_MS = 900; // curtain open transition

/**
 * Full-viewport intro curtain shown on load. Cycles "Hello" through several
 * languages, then splits open (top panel up, bottom panel down) to reveal the
 * site. Removes itself from the tree once finished.
 */
export function Preloader() {
  const [index, setIndex] = useState(0);
  const [opening, setOpening] = useState(false);
  const [gone, setGone] = useState(false);

  // Cycle through greetings, then trigger the reveal.
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      if (i >= GREETINGS.length) {
        clearInterval(interval);
        setOpening(true);
        window.setTimeout(() => {
          markIntroComplete();
          setGone(true);
        }, SPLIT_MS);
        return;
      }
      setIndex(i);
    }, INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  // Lock page scroll while the curtain is up.
  useEffect(() => {
    if (gone) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [gone]);

  if (gone) return null;

  return (
    <div aria-hidden className="fixed inset-0 z-[100]">
      {/* Top panel */}
      <div
        className={`absolute inset-x-0 top-0 h-1/2 bg-black transition-transform duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
          opening ? "-translate-y-full" : "translate-y-0"
        }`}
      />
      {/* Bottom panel */}
      <div
        className={`absolute inset-x-0 bottom-0 h-1/2 bg-black transition-transform duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
          opening ? "translate-y-full" : "translate-y-0"
        }`}
      />

      {/* Greeting, centered over the seam */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          opening ? "opacity-0" : "opacity-100"
        }`}
      >
        <span className="font-serif text-6xl italic text-white sm:text-8xl">
          {GREETINGS[index]}
        </span>
      </div>
    </div>
  );
}
