export interface Experience {
  id: string;
  company: string;
  role: string;
  /** e.g. "Internship", "Full-time". */
  type: string;
  /** Display string, e.g. "Aug 2025 — Jan 2026". */
  period: string;
  /** Set true for an ongoing role to show a live "Present" marker. */
  current?: boolean;
  /** Optional company website. */
  companyUrl?: string;
  /** Short opening paragraph. */
  summary: string;
  /** Bullet-point achievements / responsibilities. */
  highlights: string[];
  /** Tech / tools used — shown as chips. */
  skills: string[];
}

/**
 * Work history, newest first. The section below is built to look intentional
 * with a single entry and to scale cleanly as you add more.
 *
 * NOTE: the `summary`, `highlights`, and `skills` below are placeholders —
 * swap in the specifics of what you actually built at ADA Group.
 */
export const experiences: Experience[] = [
  {
    id: "ada-group",
    company: "ADA Group",
    role: "Software Developer Intern",
    type: "Internship",
    period: "Aug 2025 — Jan 2026",
    summary:
      "Joined the engineering team to help build and ship features across the product, working alongside senior developers through the full development cycle — from ticket to production.",
    highlights: [
      "Built and maintained features in the company's web application, collaborating with the team via code review.",
      "Translated designs and requirements into responsive, accessible UI used by real customers.",
      "Develop features and fixed bugs, improving the reliability of the codebase over the internship.",
    ],
    skills: ["Python", "Flutter", "Docker", "Git", "Jira Confluence", "WebRTC", "Agile", "Flask"],
  },
];
