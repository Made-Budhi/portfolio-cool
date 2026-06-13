import { SkillLogoTile } from "./SkillLogoTile";
import { skillLogos, type SkillLogo } from "../data/skills";

// Split into three rows for a denser, more impressive wall.
const PER_ROW = Math.ceil(skillLogos.length / 3);
const ROW_ONE = skillLogos.slice(0, PER_ROW);
const ROW_TWO = skillLogos.slice(PER_ROW, PER_ROW * 2);
const ROW_THREE = skillLogos.slice(PER_ROW * 2);

const EDGE_FADE =
  "linear-gradient(to right, transparent, black 6%, black 94%, transparent)";

interface MarqueeRowProps {
  items: SkillLogo[];
  direction: "left" | "right";
  duration: number;
}

/** One seamlessly-looping row of logo tiles. Pauses while hovered. */
function MarqueeRow({ items, direction, duration }: MarqueeRowProps) {
  const loop = [...items, ...items];

  return (
    <div
      className="group relative overflow-hidden py-3"
      style={{ maskImage: EDGE_FADE, WebkitMaskImage: EDGE_FADE }}
    >
      <ul
        className={`flex w-max gap-5 group-hover:[animation-play-state:paused] ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        {loop.map((skill, i) => (
          <li key={`${skill.name}-${i}`} aria-hidden={i >= items.length}>
            <SkillLogoTile skill={skill} />
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Technical skills as a scrolling logo wall over the deep-purple aurora —
 * two rows drifting in opposite directions, rounded frosted tiles.
 */
export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#08060f] py-28 sm:py-40"
    >
      {/* Aurora + grid backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/4 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-[#8d7dca]/25 blur-[150px]" />
        <div className="absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[#5a6bff]/15 blur-[130px]" />
        <div className="absolute inset-0 bg-grid opacity-[0.05]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="mx-auto mb-12 max-w-7xl px-6 sm:mb-16 sm:px-10">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">
          Toolkit
        </p>
        <h2 className="mt-3 font-display text-4xl italic text-white sm:text-6xl">
          Technical Skills &amp; Tools
        </h2>
      </div>

      <div className="flex flex-col gap-5">
        <MarqueeRow items={ROW_ONE} direction="left" duration={55} />
        <MarqueeRow items={ROW_TWO} direction="right" duration={68} />
        <MarqueeRow items={ROW_THREE} direction="left" duration={60} />
      </div>
    </section>
  );
}
