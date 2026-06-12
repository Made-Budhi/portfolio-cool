export interface SkillGroup {
  id: string;
  title: string;
  /** Optional one-line caption shown under the title. */
  caption?: string;
  skills: string[];
  /** Spans two columns in the bento grid for emphasis. */
  featured?: boolean;
}

/**
 * Technical skills grouped into a bento grid. The first group is `featured`
 * so it reads as your core stack.
 *
 * NOTE: these lists are a sensible starting point drawn from your projects —
 * curate them so they reflect exactly what you're confident in.
 */
export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    title: "Languages",
    skills: ["TypeScript", "Python", "SQL", "Java", "PHP"],
    // featured: true,
  },
  {
    id: "frontend",
    title: "Frontend",
    skills: ["React", "Tailwind CSS", "Vite", "Three.js", "HTML & CSS", "GSAP", "Shadcn/ui", "Flutter"],
  },
  {
    id: "backend",
    title: "Backend & Infra",
    skills: ["Node.js", "REST APIs", "Ubuntu Server", "NextCloud", "Docker", "Flask", "Laravel", "Express.js"],
  },
  {
    id: "ai-data",
    title: "AI & Data",
    skills: ["Python", "Pandas", "NumPy", "Scikit-learn"],
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    skills: ["Git", "GitHub", "Figma", "Jira", "Confluence", "VS Code", "Postman", "MySQL Workbench"],
  },
];
