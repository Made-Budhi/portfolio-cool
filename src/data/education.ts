export interface Education {
  id: string;
  institution: string;
  /** Programme / field of study. */
  field: string;
  /** "City, Country". */
  location: string;
  /** Display period, e.g. "2022 — 2026". */
  period: string;
  /** Small caption under the period, e.g. "Expected Graduation". */
  note?: string;
  /** Optional badge label, e.g. "Exchange". */
  badge?: string;
  /** 0..1 progress toward completion — drives the animated bar. */
  progress?: number;
}

/**
 * Academic journey, in order.
 *
 * NOTE: `field` for Politeknik Negeri Bali is a placeholder — set it to your
 * actual programme name.
 */
export const educations: Education[] = [
  {
    id: "pnb",
    institution: "Politeknik Negeri Bali",
    field: "Information Technology", // TODO: confirm exact programme
    location: "Bali, Indonesia",
    period: "2022 — 2026",
    note: "Expected Graduation",
    progress: 0.9,
  },
  {
    id: "coventry",
    institution: "Coventry University",
    field: "IISMA (Indonesian International Student Mobility Awards)",
    location: "Coventry, United Kingdom",
    period: "Sept 2024 — Jan 2025",
    note: "International Exchange",
    badge: "Exchange",
  },
];
