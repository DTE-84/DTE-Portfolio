"use client";

import React, { useEffect, useRef, useState } from "react";

const RevealText: React.FC<{ text: string; isReverse?: boolean }> = ({
	text,
	isReverse = false,
}) => {
	const [isVisible, setIsVisible] = useState(false);
	const containerRef = useRef<HTMLParagraphElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting);
			},
			{ threshold: 0.15 },
		);

		if (containerRef.current) {
			observer.observe(containerRef.current);
		}

		return () => observer.disconnect();
	}, []);

	const words = text.split(" ");

	return (
		<p
			ref={containerRef}
			className={`about-reveal ${isVisible ? "visible" : ""}`}>
			{words.map((word, i) => {
				const index = isReverse ? words.length - 1 - i : i;

				return (
					<React.Fragment key={i}>
						<span
							className='reveal-word inline-block opacity-0 blur-[8px] translate-y-[8px] transition-all duration-[0.8s] ease-[cubic-bezier(0.23,1,0.32,1)] font-medium'
							style={{
								transitionDelay: `${index * 35}ms`,
								opacity: isVisible ? 1 : 0,
								filter: isVisible ? "blur(0)" : "blur(8px)",
								transform: isVisible ? "translateY(0)" : "translateY(8px)",
								marginRight: "0.25em",
							}}>
							{word}
						</span>{" "}
					</React.Fragment>
				);
			})}
		</p>
	);
};

const About: React.FC = () => {
	return (
		<section id='about' className='py-32 px-6 md:px-12 max-w-7xl mx-auto'>
			<div className='flex flex-col gap-4 mb-20'>
				<span className='text-white/30 font-mono text-[10px] tracking-[0.4em] uppercase font-bold'>Who I Am //</span>
				<h2 className='text-[clamp(2.25rem,9vw,6rem)] font-black uppercase tracking-tighter leading-none text-white'>My <span className='text-accent italic'>Identity.</span></h2>
			</div>

			<div className='grid lg:grid-cols-2 gap-12 items-stretch'>
				<div className='space-y-6 text-lg md:text-xl text-white/80 leading-relaxed self-center'>
					<RevealText text="My work sits at the intersection of backend architecture and user experience—where structured data, predictive analytics, and real-world usability come together." />
					<RevealText text="I specialize in creating end-to-end systems that transform raw data into meaningful insights, whether in financial behavior, clinical workflows, or business operations." />
				</div>

				<div className='p-10 rounded-[3rem] bg-white/2 border border-white/5'>
					<h3 className='text-lg font-bold text-white uppercase tracking-widest border-b border-[var(--theme-accent)]/40 pb-4 mb-8'>
						Philosophy
					</h3>
					<ul className='terminal-list list-none p-0 space-y-5'>
						<li className="relative pl-[25px] text-[clamp(0.9rem,1.4vw,1.05rem)] text-[#d7e3fc]/75 leading-relaxed font-semibold before:content-['>>'] before:absolute before:left-0 before:text-accent before:font-orbitron before:text-[14px] before:top-[4px] before:animate-[list-pulse_1.5s_infinite]">
							<span className='font-bold text-white'>Deterministic Architecture:</span> Systems should be reliable, predictable, and built on strong data integrity.
						</li>
						<li className="relative pl-[25px] text-[clamp(0.9rem,1.4vw,1.05rem)] text-[#d7e3fc]/75 leading-relaxed font-semibold before:content-['>>'] before:absolute before:left-0 before:text-accent before:font-orbitron before:text-[14px] before:top-[4px] before:animate-[list-pulse_1.5s_infinite]">
							<span className='font-bold text-white'>Signal Clarity:</span> Data should be structured and presented in a way that makes decisions obvious - not overwhelming.
						</li>
						<li className="relative pl-[25px] text-[clamp(0.9rem,1.4vw,1.05rem)] text-[#d7e3fc]/75 leading-relaxed font-semibold before:content-['>>'] before:absolute before:left-0 before:text-accent before:font-orbitron before:text-[14px] before:top-[4px] before:animate-[list-pulse_1.5s_infinite]">
							<span className='font-bold text-white'>Analytical Precision:</span> Every system should produce measurable, meaningful outcomes using behavioral and operational data.
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default About;
