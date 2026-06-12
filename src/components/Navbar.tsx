import { useState } from "react";
import { useScrollDirection } from "../hooks/useScrollDirection";
import { useActiveSection } from "../hooks/useActiveSection";

interface NavItem {
  id: string;
  label: string;
}

// Section ids must match the `id` attributes on each section.
const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
const NAV_IDS = NAV_ITEMS.map((item) => item.id);

// Edit these two lines for the brand block on the left.
const BRAND_NAME = "Made Budhi";
const BRAND_ROLE = "Software Engineer";

/**
 * Dynamic navigation bar: hides on scroll-down, reveals on scroll-up, swaps
 * to a blurred background once scrolled, and highlights the active section.
 */
export function Navbar() {
  const { hidden, scrolled } = useScrollDirection();
  const active = useActiveSection(NAV_IDS);
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Keep the bar visible while the mobile menu is open.
  const isHidden = hidden && !menuOpen;
  const hasBackground = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-500 ease-out ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div
        className={`transition-colors duration-300 ${
          hasBackground
            ? "border-b border-white/10 bg-black/50 backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
          {/* Brand */}
          <button
            onClick={() => go("home")}
            className="text-left font-mono leading-tight"
          >
            <span className="block text-sm font-bold uppercase tracking-widest text-white">
              {BRAND_NAME}
            </span>
            <span className="block text-[11px] uppercase tracking-widest text-white/45">
              {BRAND_ROLE}
            </span>
          </button>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => go(item.id)}
                  className={`font-mono text-xs uppercase tracking-widest transition-colors ${
                    active === item.id
                      ? "text-white"
                      : "text-white/45 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="relative h-6 w-6 md:hidden"
          >
            <span
              className={`absolute left-0 top-2 h-px w-6 bg-white transition-transform duration-300 ${
                menuOpen ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-3.5 h-px w-6 bg-white transition-transform duration-300 ${
                menuOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>

        {/* Mobile menu */}
        <ul
          className={`overflow-hidden border-t border-white/5 transition-[max-height,opacity] duration-300 md:hidden ${
            menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => go(item.id)}
                className={`block w-full px-6 py-4 text-left font-mono text-sm uppercase tracking-widest transition-colors ${
                  active === item.id ? "text-white" : "text-white/50"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
