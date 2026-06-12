import { useState } from "react";
import { usePathDrawAnimation } from "../hooks/usePathDrawAnimation";
import { useIntroComplete } from "../hooks/useIntroComplete";

/**
 * The hand-drawn name/logo. The SVG scales fluidly via its `viewBox` and
 * `w-full h-auto` classes — width is driven by the parent container rather
 * than fixed pixel dimensions, so it stays responsive on every screen.
 *
 * Once the draw finishes, the signature lifts slightly and a "SOFTWARE
 * ENGINEER" line slides up from behind it — a masked reveal.
 */
export function AnimatedSignature() {
  const [revealed, setRevealed] = useState(false);
  const introComplete = useIntroComplete();
  const svgRef = usePathDrawAnimation({
    enabled: introComplete,
    onComplete: () => setRevealed(true),
  });

  return (
    <div className="flex flex-col items-center">
      <svg
        ref={svgRef}
        viewBox="0 0 737 224"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`h-auto w-full transition-transform duration-700 ease-out ${
          revealed ? "-translate-y-2 sm:-translate-y-3" : "translate-y-0"
        }`}
        role="img"
        aria-label="Signature"
      >
      <g filter="url(#filter0_d_1_487)">
        <path d="M14.0011 172.322C26.9621 173.976 53.3663 169.57 82.3775 147.363C96.9291 136.224 112.136 120.606 126.632 99.0285C136.984 82.8792 164.314 22.8368 138.641 11.6565" stroke="white" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M139.469 11.8864C118.931 2.94216 105.254 27.5225 98.0606 49.5582C90.8672 71.5938 81.9284 112.06 83.2059 147.593C83.8649 165.923 87.9037 182.501 97.6465 193.67" stroke="white" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M97.6463 193.67C111.725 209.809 139.804 211.051 153.962 182.479C162.658 164.931 168.501 129.333 132.844 108.358C171.768 136.93 188.331 143.555 220.63 117.064" stroke="white" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M220.63 117.064C216.075 141.081 201.582 196.144 238.021 201.952C265.951 206.403 277.621 184.707 280.258 180.152C289.368 164.417 290.61 154.829 298.892 117.064" stroke="white" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M298.892 117.064C293.923 142.737 285.437 193.801 311.728 197.958C336.988 201.952 346.278 174.344 353.137 155.721C380.996 67.9352 423.117 108.061 429.743 111.681" stroke="white" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M429.743 111.681C378.396 76.2168 359.793 137.649 353.137 155.721C341.129 199.2 373.841 206.349 390.405 201.952C404.07 198.324 427.093 180.999 438.025 117.064C448.957 53.1293 454.726 27.2076 456.244 22.2385" stroke="white" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M456.244 22.2385L431.813 153.504C428.225 165.926 425.519 193.007 443.408 201.952C461.296 210.896 482.884 189.943 491.442 178.349" stroke="white" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M491.442 178.349L563.906 82.281C585.025 48.0591 587.095 17.0027 563.906 11.8865" stroke="white" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M563.906 11.8865C534.103 5.31095 524.982 62.957 522.498 97.1881L509.247 201.952" stroke="white" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M509.247 201.952C513.526 164.408 531.856 92.6331 570.946 105.884" stroke="white" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M570.946 105.884C593.141 110.521 589.58 138.33 586.681 153.504C580.097 187.974 583.944 198.059 592.478 202.77C608.214 211.455 621.464 199.043 626.019 194.902C636.669 185.22 663.121 146.713 670.741 102.985" stroke="white" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M670.74 102.985C666.6 126.174 660.632 149.018 662.873 174.208C664.529 192.832 671.502 198.332 673.225 199.871C684.819 210.223 708.588 205.016 722.501 174.208" stroke="url(#paint0_linear_1_487)" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
        <filter id="filter0_d_1_487" x="0" y="0" width="736.504" height="223.787" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_487"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_487" result="shape"/>
        </filter>
        <linearGradient id="paint0_linear_1_487" x1="662.459" y1="62.175" x2="695.586" y2="121.389" gradientUnits="userSpaceOnUse">
          <stop offset="1" stopColor="white"/>
        </linearGradient>
      </defs>
      </svg>

      {/* Masked subtitle: slides up into view from behind the signature once
          the draw completes. */}
      <div className="overflow-hidden">
        <p
          className={`font-mono text-[0.6rem] uppercase tracking-[0.45em] text-white/60 transition-transform duration-700 ease-out sm:text-xl sm:tracking-[0.55em] ${
            revealed ? "translate-y-0" : "translate-y-full"
          }`}
        >
          Software Engineer
        </p>
      </div>
    </div>
  );
}
