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
				className={`relative w-full h-full flex items-center justify-center ${className}`}>


				<div
					id='slash'
					className='absolute inset-0 pointer-events-none select-none'
					style={{ zIndex: 50, ...layerStyle }}>
					<Image
						src={getAssetPath("DTELogo.png")}
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
