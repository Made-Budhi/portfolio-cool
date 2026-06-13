import type { IconType } from "react-icons";
import {
  SiTypescript,
  SiPython,
  SiPhp,
  SiReact,
  SiTailwindcss,
  SiVite,
  SiThreedotjs,
  SiHtml5,
  SiCss,
  SiGreensock,
  SiShadcnui,
  SiFlutter,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiLaravel,
  SiDocker,
  SiUbuntu,
  SiNextcloud,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiGit,
  SiGithub,
  SiFigma,
  SiJira,
  SiConfluence,
  SiPostman,
  SiMysql,
} from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa6";
import { TbBrandVscode } from "react-icons/tb";

export interface SkillLogo {
  name: string;
  /** Bundled icon component (offline, monochrome via currentColor). */
  Icon?: IconType;
}

/**
 * Flat list of skills shown as a scrolling logo wall. Icons are bundled from
 * `react-icons` (no network) and inherit color, so they render white to match
 * the site. Any entry without an `Icon` falls back to a text monogram tile.
 */
export const skillLogos: SkillLogo[] = [
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Python", Icon: SiPython },
  { name: "PHP", Icon: SiPhp },
  { name: "Java", Icon: FaJava },
  { name: "SQL", Icon: FaDatabase },
  { name: "React", Icon: SiReact },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Vite", Icon: SiVite },
  { name: "Three.js", Icon: SiThreedotjs },
  { name: "HTML5", Icon: SiHtml5 },
  { name: "CSS3", Icon: SiCss },
  { name: "GSAP", Icon: SiGreensock },
  { name: "shadcn/ui", Icon: SiShadcnui },
  { name: "Flutter", Icon: SiFlutter },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Express", Icon: SiExpress },
  { name: "Flask", Icon: SiFlask },
  { name: "Laravel", Icon: SiLaravel },
  { name: "Docker", Icon: SiDocker },
  { name: "Ubuntu", Icon: SiUbuntu },
  { name: "NextCloud", Icon: SiNextcloud },
  { name: "Pandas", Icon: SiPandas },
  { name: "NumPy", Icon: SiNumpy },
  { name: "scikit-learn", Icon: SiScikitlearn },
  { name: "Git", Icon: SiGit },
  { name: "GitHub", Icon: SiGithub },
  { name: "Figma", Icon: SiFigma },
  { name: "Jira", Icon: SiJira },
  { name: "Confluence", Icon: SiConfluence },
  { name: "Postman", Icon: SiPostman },
  { name: "MySQL", Icon: SiMysql },
  { name: "VS Code", Icon: TbBrandVscode },
];
