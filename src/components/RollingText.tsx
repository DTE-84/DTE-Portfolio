"use client";
import React from "react";

interface RollingTextProps {
	text: string;
	className?: string;
	hoverColor?: string;
}

const RollingText: React.FC<RollingTextProps> = ({
	text,
	className = "",
	hoverColor = "text-accent",
}) => {
	return (
		<span
			className={`group relative inline-block overflow-hidden whitespace-nowrap leading-none ${className}`}>
			<span className='flex'>
				{text.split("").map((char, i) => (
					<span
						key={i}
						className={`relative inline-block transition-transform duration-500 ease-out group-hover:-translate-y-full`}
						style={{ transitionDelay: `${i * 30}ms` }}>
						{char === " " ? "\u00A0" : char}
					</span>
				))}
			</span>
			<span className={`absolute inset-0 flex translate-y-full ${hoverColor}`}>
				{text.split("").map((char, i) => (
					<span
						key={i}
						className={`relative inline-block transition-transform duration-500 ease-out group-hover:-translate-y-full`}
						style={{ transitionDelay: `${i * 30}ms` }}>
						{char === " " ? "\u00A0" : char}
					</span>
				))}
			</span>
		</span>
	);
};

export default RollingText;
