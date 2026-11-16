"use client";
import React from "react";

interface RollingTextProps {
	text: string;
	className?: string;
	hoverColor?: string;
}

/**
 * Letter-by-letter hover roll. Each word is its own masked unit so long
 * titles can wrap between words instead of overflowing their container.
 */
const RollingText: React.FC<RollingTextProps> = ({
	text,
	className = "",
	hoverColor = "text-accent",
}) => {
	const words = text.split(" ");
	const starts = words.map((_, w) =>
		words.slice(0, w).reduce((n, word) => n + word.length + 1, 0),
	);

	return (
		<span className={`group inline leading-none ${className}`} aria-label={text}>
			{words.map((word, w) => {
				const start = starts[w];
				const chars = word.split("");
				const renderChars = () =>
					chars.map((char, i) => (
						<span
							key={i}
							className='relative inline-block transition-transform duration-500 ease-out group-hover:-translate-y-full'
							style={{ transitionDelay: `${(start + i) * 30}ms` }}>
							{char}
						</span>
					));

				return (
					<React.Fragment key={w}>
						<span aria-hidden='true' className='relative inline-flex overflow-hidden whitespace-nowrap align-bottom'>
							<span className='flex'>{renderChars()}</span>
							<span className={`absolute inset-0 flex translate-y-full ${hoverColor}`}>{renderChars()}</span>
						</span>
						{w < words.length - 1 && " "}
					</React.Fragment>
				);
			})}
		</span>
	);
};

export default RollingText;
