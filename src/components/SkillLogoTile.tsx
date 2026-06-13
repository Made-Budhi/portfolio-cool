import type { SkillLogo } from "../data/skills";

/** Initials fallback for a skill without a bundled icon. */
function monogram(name: string) {
  return name.replace(/[^a-zA-Z0-9]/g, "").slice(0, 2).toUpperCase();
}

/**
 * A single rounded tile: the brand icon on top with the skill name beneath,
 * so the logo is recognizable even when the mark alone is ambiguous.
 */
export function SkillLogoTile({ skill }: { skill: SkillLogo }) {
  const { Icon, name } = skill;

  return (
    <div className="group/tile flex h-28 w-28 shrink-0 flex-col items-center justify-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.05] p-3 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.08] sm:h-32 sm:w-32">
      {Icon ? (
        <Icon className="text-3xl text-white/70 transition-all duration-300 group-hover/tile:scale-110 group-hover/tile:text-white sm:text-4xl" />
      ) : (
        <span className="font-mono text-xl text-white/70 transition-colors group-hover/tile:text-white">
          {monogram(name)}
        </span>
      )}
      <span className="text-center font-mono text-[10px] uppercase leading-tight tracking-wider text-white/50 transition-colors group-hover/tile:text-white/80">
        {name}
      </span>
    </div>
  );
}
