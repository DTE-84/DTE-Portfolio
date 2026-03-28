"use client";
import React, { forwardRef } from "react";
import Image from "next/image";
import { getAssetPath } from "../utils/paths";

interface DTELogoModularProps {
	className?: string;
	isStatic?: boolean;
	shouldSpin?: boolean;
}

const DTELogoModular = forwardRef<HTMLDivElement, DTELogoModularProps>(
	({ className = "", isStatic = false, shouldSpin = false }, ref) => {
		// When animated (hero), pieces start invisible — GSAP drives them in.
		// When static (footer / nav), everything is immediately visible.
		const layerStyle: React.CSSProperties = isStatic
			? { opacity: 1 }
			: { opacity: 1 }; // Forcing opacity to 1 for systemlogo comparison

		return (
			<div
				ref={ref}
				className={`relative w-full h-full flex items-center justify-center ${className}`}>


				<div
					id='slash'
					className={`absolute   pointer-events-none select-none ${shouldSpin ? 'animate-spin-slow' : ''}`}
					style={{ zIndex: 50,  width: '500px',  height: '500px',...layerStyle }}>
						
					<Image
						src={getAssetPath("systemlogo.png")}
						alt='DTE LOGO'
						fill
						className='object-contain'
						priority
					/>
				</div>
			</div>
		);
	},
);

DTELogoModular.displayName = "DTELogoModular";
export default DTELogoModular;
