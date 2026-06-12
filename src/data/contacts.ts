export interface ContactLink {
  id: string;
  label: string;
  /** Display value, e.g. a handle. */
  value: string;
  href: string;
}

/** Real email pulled from your account. */
export const email = "madebudhi15@gmail.com";

/**
 * Social / external links shown in the contact section.
 *
 * NOTE: the `href`s below are placeholders — drop in your real profile URLs
 * (and fix the handles in `value`).
 */
export const socialLinks: ContactLink[] = [
  {
    id: "github",
    label: "GitHub",
    value: "Made-Budhi",
    href: "https://github.com/Made-Budhi",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "Made Budhi",
    href: "https://www.linkedin.com/in/madebudhi/",
  },
  {
    id: "instagram",
    label: "Instagram",
    value: "@made_budhi",
    href: "https://www.instagram.com/made_budhi",
  },
];
