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
		<section id='about' className='py-[100px]'>
			<div className='container-main'>
				<div className='flex items-center gap-6 mb-16'>
					<h2 className='text-2xl md:text-3xl font-bold text-white tracking-widest uppercase'>
						My
						<span style={{ color: "var(--theme-accent)", opacity: 0.8 }}>
							 //
						</span>{" "}
						Identity
					</h2>
					<div className='h-[1px] flex-grow bg-[var(--theme-accent)]/40'></div>
				</div>

				<div className='grid lg:grid-cols-3 gap-12 lg:gap-20'>
					<div className='lg:col-span-2'>
						<RevealText text='I design and build secure, data-driven systems that turn complex information into clear, actionable products.' />
						<br />
						<RevealText text="My work sits at the intersection of backend architecture and user experience-where structured data, predictive analytics, and real-world usability come together." />
						<br />
						<RevealText text="I specialize in creating end-to-end systems that transform raw data into meangingful insights, whether in financial behavior, clinical workflows, or business operations." />
					</div>

					<div className='space-y-10'>
						<h4 className='text-lg font-bold text-white uppercase tracking-widest border-b border-[var(--theme-accent)]/60 pb-4'>
							Philosophy
						</h4>
						<ul className='terminal-list list-none p-0 mt-[30px]'>
							<li className="relative pl-[25px] mb-[18px] text-[clamp(0.85rem,1.8vw,1.1rem)] text-[#d7e3fc]/75 leading-relaxed font-semibold before:content-['>>'] before:absolute before:left-0 before:text-accent before:font-orbitron before:text-[14px] before:top-[4px] before:animate-[list-pulse_1.5s_infinite]">
								<span className='bold'>Deterministic Architecture:</span> I believe data is not just information - it's a signal that drives decisions.
							</li>
							<li className="relative pl-[25px] mb-[18px] text-[clamp(0.85rem,1.8vw,1.1rem)] text-[#d7e3fc]/75 leading-relaxed font-semibold before:content-['>>'] before:absolute before:left-0 before:text-accent before:font-orbitron before:text-[14px] before:top-[4px] before:animate-[list-pulse_1.5s_infinite]">
								<span className='bold'>High-Fidelity Signal:</span> My approach focuses on three core principles:
								<br /><br />
								<span className='bold'>1. Deterministic Architecture</span> - Systems should be reliable, predictable, and built on strong data integrity.
								<br /><br />
								<span className='bold'>2. Signal Clarity</span> - Data should be structured and presented in a way that makes decisions obvious - not overwhelming.
								<br /><br />
								<span className='bold'>3. Analytical Precision</span> - Every system should produce measurable, meaningful outcomes using behavioral and operational data.
							</li>
							<li className="relative pl-[25px] mb-[18px] text-[clamp(0.85rem,1.8vw,1.1rem)] text-[#d7e3fc]/75 leading-relaxed font-semibold before:content-['>>'] before:absolute before:left-0 before:text-accent before:font-orbitron before:text-[14px] before:top-[4px] before:animate-[list-pulse_1.5s_infinite]">
								<span className='bold'>Analytical Precision:</span> Building 
								tools that leverage behavioral telemetry to drive measurable results.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
