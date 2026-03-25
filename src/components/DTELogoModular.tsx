"use client";
import React, { forwardRef } from "react";
import Image from "next/image";
import { getAssetPath } from "../utils/paths";

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
        className={`relative w-full h-full flex items-center justify-center ${className}`}
      >
        <div
          id="hex-shell"
          className="absolute inset-0 pointer-events-none select-none"
          style={{ zIndex: 10, ...layerStyle }}
        >
          <Image
            src={getAssetPath("outterhex.png")}
            alt="DTE outer hex wireframe"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div
          id="inner-hex"
          className="absolute inset-0 pointer-events-none select-none"
          style={{ zIndex: 20, ...layerStyle }}
        >
          <Image
            src={getAssetPath("logoinside.png")}
            alt="DTE inner hex glow panel"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div
          id="bar-graph"
          className="absolute inset-0 pointer-events-none select-none"
          style={{ zIndex: 30, ...layerStyle }}
        >
          <Image
            src={getAssetPath("barlogo.png")}
            alt="DTE bar graph"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div
          id="bracket-left"
          className="absolute inset-0 pointer-events-none select-none"
          style={{ zIndex: 40, ...layerStyle }}
        >
          <Image
            src={getAssetPath("logoleft.png")}
            alt="DTE left angle bracket"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div
          id="bracket-right"
          className="absolute inset-0 pointer-events-none select-none"
          style={{ zIndex: 40, ...layerStyle }}
        >
          <Image
            src={getAssetPath("logoright.png")}
            alt="DTE right angle bracket"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div
          id="slash"
          className="absolute inset-0 pointer-events-none select-none"
          style={{ zIndex: 50, ...layerStyle }}
        >
          <Image
            src={getAssetPath("logoslash.png")}
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
