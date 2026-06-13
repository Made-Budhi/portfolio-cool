export interface Certification {
  id: string;
  title: string;
  issuer?: string;
  year?: string;
  description?: string;
  /** Path to the certificate PDF in /public. Presence makes the card open it. */
  pdf?: string;

  // --- Score-style certifications (e.g. TOEIC) ---
  /** Achieved score; presence switches the card to the gauge layout. */
  score?: number;
  /** Maximum possible score. */
  maxScore?: number;
  /** Sub-label, e.g. "Listening & Reading". */
  scoreLabel?: string;
}

/**
 * Professional certifications.
 *
 * NOTE: `issuer` values are best-guesses — verify them. PDFs live in
 * /public/certificates and are opened in an in-page viewer when clicked.
 */
export const certifications: Certification[] = [
  {
    id: "toeic",
    title: "TOEIC English Proficiency",
    issuer: "ETS",
    scoreLabel: "Listening & Reading",
    score: 925,
    maxScore: 990,
    description:
      "An internationally recognized benchmark of professional English proficiency, placing in the highest TOEIC proficiency band.",
    pdf: "/certificates/TOEIC-scanned-925.pdf",
  },
  {
    id: "iisma",
    title: "IISMA Awardee",
    issuer: "Ministry of Education and Culture of Indonesia",
    year: "2024",
    description:
      "Indonesian International Student Mobility Awards is a competitive, government-funded scholarship for a semester abroad at Coventry University, UK.",
    pdf: "/certificates/IISMA_certificate.pdf",
  },
  {
    id: "junior-web",
    title: "Junior Web Programming",
    issuer: "LSP TIK INDONESIA",
    year: "Certified",
    description:
      "A national competency certification covering foundational web development standards and best practices.",
    pdf: "/certificates/junior-web-programming.pdf",
  },
];
