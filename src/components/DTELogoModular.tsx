"use client";
import React, { forwardRef } from "react";
import Image from "next/image";

interface DTELogoModularProps {
  className?: string;
  isStatic?: boolean;
}

const DTELogoModular = forwardRef<HTMLDivElement, DTELogoModularProps>(
  ({ className = "", isStatic = false }, ref) => {
    // When animated (hero), pieces start invisible — GSAP drives them in.
    // When static (footer / nav), everything is immediately visible.
    const layerStyle: React.CSSProperties = isStatic
      ? { opacity: 1 }
      : { opacity: 0 };

    return (
      <div
        ref={ref}
        // Sizing is intentionally NOT hardcoded here.
        // Callers must provide dimensions via a wrapper div or via className.
        //   Hero  → parent div: w-[300px] h-[300px] md:w-[420px] md:h-[420px]
        //   Footer → parent div: w-[140px] h-[140px]
        className={`relative w-full h-full flex items-center justify-center ${className}`}
      >
        {/*
         * ─────────────────────────────────────────────
         * LAYER 1 — Outer Hex Shell (wireframe)
         * The thin double-line hex that frames everything.
         * Animation: scales up from near-zero ("fly from deep background").
         * ─────────────────────────────────────────────
         */}
        <div
          id="hex-shell"
          className="absolute inset-0 pointer-events-none select-none"
          style={{ zIndex: 10, ...layerStyle }}
        >
          <Image
            src="/outterhex.png"
            alt="DTE outer hex wireframe"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/*
         * ─────────────────────────────────────────────
         * LAYER 2 — Inner Hex Glow Panel (solid 3-D bezel)
         * The thick bevelled hex body that gives the logo
         * its depth. Transparent in the center so the
         * bars/brackets/slash show through.
         * Animation: blooms inward with a back-ease overshoot.
         * ─────────────────────────────────────────────
         */}
        <div
          id="inner-hex"
          className="absolute inset-0 pointer-events-none select-none"
          style={{ zIndex: 20, ...layerStyle }}
        >
          <Image
            src="/Innerhex.png"
            alt="DTE inner hex glow panel"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/*
         * ─────────────────────────────────────────────
         * LAYER 3 — Bar Graph (gradient bars)
         * Three descending gradient bars — the data heart
         * of the mark. Animation: rises from below.
         * ─────────────────────────────────────────────
         */}
        <div
          id="bar-graph"
          className="absolute inset-0 pointer-events-none select-none"
          style={{ zIndex: 30, ...layerStyle }}
        >
          <Image
            src="/bargraph.png"
            alt="DTE bar graph"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/*
         * ─────────────────────────────────────────────
         * LAYER 4a — Left Angle Bracket  <
         * Animation: slams in from the left.
         * ─────────────────────────────────────────────
         */}
        <div
          id="bracket-left"
          className="absolute inset-0 pointer-events-none select-none"
          style={{ zIndex: 40, ...layerStyle }}
        >
          <Image
            src="/leftangle.png"
            alt="DTE left angle bracket"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/*
         * ─────────────────────────────────────────────
         * LAYER 4b — Right Angle Bracket  >
         * Animation: slams in from the right (same time as left).
         * ─────────────────────────────────────────────
         */}
        <div
          id="bracket-right"
          className="absolute inset-0 pointer-events-none select-none"
          style={{ zIndex: 40, ...layerStyle }}
        >
          <Image
            src="/Isolated right angle.png"
            alt="DTE right angle bracket"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/*
         * ─────────────────────────────────────────────
         * LAYER 5 — Diagonal Slash  /
         * The dev-identity stroke through the bars.
         * Animation: drops from above.
         * ─────────────────────────────────────────────
         */}
        <div
          id="slash"
          className="absolute inset-0 pointer-events-none select-none"
          style={{ zIndex: 50, ...layerStyle }}
        >
          <Image
            src="/slash.png"
            alt="DTE slash symbol"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    );
  },
);

DTELogoModular.displayName = "DTELogoModular";
export default DTELogoModular;
