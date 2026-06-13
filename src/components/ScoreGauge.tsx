import { useCountUp } from "../hooks/useCountUp";

interface ScoreGaugeProps {
  score: number;
  max: number;
  /** When true, the ring fills and the number counts up. */
  active: boolean;
}

const RADIUS = 86;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

/**
 * Circular progress ring with a number that counts up to `score` when active.
 * Used to make the TOEIC result the visual centerpiece of the credentials.
 */
export function ScoreGauge({ score, max, active }: ScoreGaugeProps) {
  const value = useCountUp(score, active);
  const pct = Math.min(score / max, 1);
  const offset = active ? CIRCUMFERENCE * (1 - pct) : CIRCUMFERENCE;

  return (
    <div className="relative h-52 w-52 shrink-0">
      <div className="absolute inset-0 rounded-full bg-[#8d7dca]/20 blur-2xl" />
      <svg viewBox="0 0 200 200" className="h-full w-full -rotate-90">
        <circle
          cx="100"
          cy="100"
          r={RADIUS}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="8"
        />
        <circle
          cx="100"
          cy="100"
          r={RADIUS}
          fill="none"
          stroke="url(#gaugeGradient)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 1.8s cubic-bezier(0.16,1,0.3,1)" }}
        />
        <defs>
          <linearGradient id="gaugeGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#8d7dca" />
            <stop offset="1" stopColor="#5a6bff" />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-serif text-6xl italic leading-none text-white">
          {value}
        </span>
        <span className="mt-2 font-mono text-xs tracking-widest text-white/45">
          / {max}
        </span>
      </div>
    </div>
  );
}
