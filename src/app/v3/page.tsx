"use client";
import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BgAnimation from "../../components/BgAnimation";
import ContactModal from "../../components/ContactModal";
import RollingText from "../../components/RollingText";
import About from "../../components/About";
import { getAssetPath } from "../../utils/paths";
import DTELogoModular from "../../components/DTELogoModular";
if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger);
}

const Nav = ({ onContactClick }: { onContactClick: () => void }) => {
	return (
		<nav className='fixed top-0 left-0 right-0 z-100 bg-black/20 backdrop-blur-xl border-b border-white/10'>
			<div className='w-full flex justify-between items-center px-6 md:px-16 py-4'>
				<div className='flex items-center gap-6'>
					<div className='flex flex-col'>
						<span
							className='font-mono text-[11px] tracking-[0.4em] uppercase font-bold text-white flex items-center gap-1.5'
							style={{ WebkitTextStroke: "0.15px white" }}>
							Data Analyst
							<span
								className='text-[#00f3ff] mx-0.5'
								style={{ WebkitTextStroke: "0px" }}>
								/
							</span>
							<span
								className='text-[#39ff14] mx-0.5'
								style={{ WebkitTextStroke: "0px" }}>
								/
							</span>
							Developer
						</span>
					</div>
				</div>
				<div className='flex items-center gap-10'>
					<div className='hidden md:flex items-center gap-12'>
						{[
							{ id: "01", name: "Work", href: "#featured", color: "#00f3ff" },
							{ id: "02", name: "About", href: "#about", color: "#39ff14" },
						].map((item) => (
							<a
								key={item.name}
								href={item.href}
								className='group flex items-center gap-3 text-[12px] font-mono uppercase tracking-[0.3em] text-white hover:text-accent transition-all'>
								<span
									className='text-[10px] opacity-80 group-hover:opacity-100 transition-opacity whitespace-nowrap'
									style={{ color: item.color }}>
									{item.id} //
								</span>
								<RollingText text={item.name} />
							</a>
						))}
					</div>
					<button
						onClick={onContactClick}
						className='group flex items-center gap-3 bg-accent text-black px-6 py-2.5 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(var(--theme-accent-rgb),0.3)]'>
						<span className='text-[12px] font-black uppercase tracking-widest'>
							Contact Me
						</span>
						<Icon
							icon='nimbus:ecosystem'
							className='text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform'
						/>
					</button>
				</div>
			</div>
		</nav>
	);
};

const Hero = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const logoRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

			// Define contentReveal label at the start
			tl.addLabel("contentReveal", 0);

			// Logo Animation
			tl.fromTo(
				".hero-logo",
				{ scale: 0.8, opacity: 0, x: -30 },
				{ scale: 1, opacity: 1, x: 0, duration: 1.5 },
				"contentReveal",
			);

			// Name "DREW ERNST"
			tl.fromTo(
				".hero-char",
				{ y: 90, opacity: 0 },
				{ y: 0, opacity: 1, duration: 1.2, stagger: 0.04 },
				"contentReveal+=0.3",
			);

			// Tagline, quote card, and CTA
			tl.fromTo(
				".hero-sub",
				{ y: 22, opacity: 0 },
				{ y: 0, opacity: 1, duration: 1.0, stagger: 0.15 },
				"contentReveal+=0.8",
			);

			// Ambient glow pulses in with the content
			tl.fromTo(
				".hero-glow",
				{ scale: 0.6, opacity: 0 },
				{ scale: 1, opacity: 1, duration: 3.0, ease: "expo.out" },
				"contentReveal",
			);
		}, containerRef);

		return () => ctx.revert();
	}, []);

	const nameLines = ["DREW", "ERNST."];

	return (
		<section
			ref={containerRef}
			className='relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 md:px-16 overflow-x-clip'>
			<style jsx>{`
				.orb-ring {
					position: absolute;
					top: 50%;
					left: 50%;
					border-radius: 50%;
					pointer-events: none;
					aspect-ratio: 1/1;
				}
				.orb-ring-1 {
					width: 110%;
					height: 110%;
					border: 1px solid rgba(0, 170, 250, 0.3);
					margin-left: -55%;
					margin-top: -55%;
					animation: spin 20s ease-in-out infinite;
				}
				.orb-ring-2 {
					width: 130%;
					height: 130%;
					border: 1px solid rgba(0, 255, 204, 0.25);
					margin-left: -65%;
					margin-top: -65%;
					animation: spin-reverse 45s ease-in-out infinite;
				}
				.orb-ring-3 {
					width: 150%;
					height: 150%;
					border: 1px solid rgba(0, 140, 212, 0.2);
					margin-left: -75%;
					margin-top: -75%;
					animation: spin 60s ease-in-out infinite;
				}
				.orb {
					position: absolute;
					border-radius: 50%;
					display: block;
					animation: orb-magic 3s ease-in-out infinite;
				}
				.orb-ring-1 .orb:nth-child(1) {
					background: #00aafa;
				}
				.orb-ring-1 .orb:nth-child(2) {
					background: #00ffcc;
				}
				.orb-ring-1 .orb:nth-child(3) {
					background: #008cd4;
				}

				.orb-ring-2 .orb:nth-child(1) {
					background: #008cd4;
				}
				.orb-ring-2 .orb:nth-child(2) {
					background: #00aafa;
				}
				.orb-ring-2 .orb:nth-child(3) {
					background: #00ffcc;
				}

				.orb-ring-3 .orb:nth-child(1) {
					background: #00ffcc;
				}
				.orb-ring-3 .orb:nth-child(2) {
					background: #008cd4;
				}
				.orb-ring-3 .orb:nth-child(3) {
					background: #00aafa;
				}

				@keyframes orb-magic {
					0%,
					100% {
						transform: translate(-50%, -50%) scale(1);
						box-shadow:
							0 0 15px currentColor,
							0 0 30px currentColor;
						opacity: 0.9;
					}
					50% {
						transform: translate(-50%, -50%) scale(1.4);
						box-shadow:
							0 0 25px currentColor,
							0 0 50px currentColor,
							0 0 75px currentColor;
						opacity: 1;
					}
				}

				.orb:nth-child(1) {
					top: 0%;
					left: 50%;
					transform: translate(-50%, -50%);
				}
				.orb:nth-child(2) {
					top: 75%;
					left: 93.3%;
					transform: translate(-50%, -50%);
				}
				.orb:nth-child(3) {
					top: 75%;
					left: 6.7%;
					transform: translate(-50%, -50%);
				}

				.orb-ring-1 .orb:nth-child(1) {
					animation-delay: 0s;
				}
				.orb-ring-1 .orb:nth-child(2) {
					animation-delay: 1s;
				}
				.orb-ring-1 .orb:nth-child(3) {
					animation-delay: 2s;
				}

				.orb-ring-2 .orb:nth-child(1) {
					animation-delay: 0.5s;
				}
				.orb-ring-2 .orb:nth-child(2) {
					animation-delay: 1.5s;
				}
				.orb-ring-2 .orb:nth-child(3) {
					animation-delay: 2.5s;
				}

				.orb-ring-3 .orb:nth-child(1) {
					animation-delay: 0.33s;
				}
				.orb-ring-3 .orb:nth-child(2) {
					animation-delay: 1.33s;
				}
				.orb-ring-3 .orb:nth-child(3) {
					animation-delay: 2.33s;
				}

				@keyframes spin {
					from {
						transform: rotate(0deg);
					}
					to {
						transform: rotate(360deg);
					}
				}
				@keyframes spin-reverse {
					from {
						transform: rotate(0deg);
					}
					to {
						transform: rotate(-360deg);
					}
				}
			`}</style>
			{/* ── Ambient radial glow ─────────────────────────────────── */}
			<div
				className='hero-glow pointer-events-none absolute inset-0 flex items-center justify-center'
				style={{ opacity: 0 }}>
				{/* Glow removed */}
			</div>

			<div className='w-full max-w-7xl flex flex-col md:flex-row items-center justify-between relative z-10 '>
				{/* ── LEFT COLUMN: LOGO + RINGS ────────────────── */}
				<div
					className='hero-logo w-full md:w-1/2 flex items-center justify-center md:justify-start'
					style={{ opacity: 0 }}>
					<div className='relative w-64 h-64 md:w-120 md:h-120 flex items-center justify-center'>
						{/* Hub Rings Integration */}
						<div className='orb-ring orb-ring-1'>
							<div className='orb'></div>
							<div className='orb'></div>
							<div className='orb'></div>
						</div>
						<div className='orb-ring orb-ring-2'>
							<div className='orb'></div>
							<div className='orb'></div>
							<div className='orb'></div>
						</div>
						<div className='orb-ring orb-ring-3'>
							<div className='orb'></div>
							<div className='orb'></div>
							<div className='orb'></div>
						</div>

						<div
							className='relative z-20 w-48 h-48 md:w-80 md:h-80'
							style={{
								WebkitMaskImage:
									"radial-gradient(circle, black 30%, transparent 80%)",
								maskImage:
									"radial-gradient(circle, black 30%, transparent 80%)",
							}}>
							<DTELogoModular isStatic shouldSpin={false} />
						</div>
					</div>
				</div>

				{/* ── RIGHT COLUMN: CONTENT ────────────────── */}
				<div className='w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left md:pl-16'>
					{/* NAME REVEAL */}
					<h1
						className='font-orbitron font-black uppercase tracking-tighter leading-none text-white mb-4'
						style={{
							fontSize: "clamp(3.2rem, 8vw, 7.5rem)",
							textShadow:
								"0 0 80px rgba(0,224,255,0.18), 0 0 160px rgba(0,224,255,0.08)",
						}}>
						{nameLines.map((line, lineIdx) => (
							<div key={lineIdx} className={lineIdx > 0 ? "mt-[-0.06em]" : ""}>
								{line.split("").map((char, charIdx) => (
									<span
										key={charIdx}
										className='hero-char inline-block'
										style={{ opacity: 0, willChange: "transform, opacity" }}>
										{char === "." ? (
											<span className='text-accent'>{char}</span>
										) : (
											char
										)}
									</span>
								))}
							</div>
						))}
					</h1>

					{/* TAGLINE */}
					<p
						className='hero-sub text-[10px] md:text-[12px] font-mono uppercase tracking-[0.55em] font-bold mb-8'
						style={{ color: "var(--theme-accent)", opacity: 0 }}>
						Systems Engineer &nbsp;//&nbsp; Behavioral AI Architect
					</p>

					{/* QUOTE CARD */}
					<div
						className='hero-sub max-w-xl bg-white/2.5 backdrop-blur-md border border-white/6 px-7 py-6 rounded-3xl relative overflow-hidden group mb-10'
						style={{ opacity: 0 }}>
						<div className='absolute inset-0 bg-linear-to-r from-transparent via-white/2.5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none' />
						<p className='text-base md:text-lg text-white/75 leading-relaxed font-medium italic'>
							I blend backend{" "}
							<span className='text-accent not-italic font-bold'>
								data integrity
							</span>{" "}
							with user-centric design — transforming raw information into
							high-impact, functional products.
						</p>
					</div>

					{/* CTA BUTTONS */}
					<div
						className='hero-sub flex flex-col sm:flex-row items-center gap-4'
						style={{ opacity: 0 }}>
						<a
							href='#featured'
							className='group flex items-center gap-3 bg-accent text-black px-8 py-4 rounded-2xl font-black uppercase text-[11px] tracking-[0.25em] transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(var(--theme-accent-rgb),0.35)]'>
							<RollingText text='View My Work' hoverColor='text-white' />
							<Icon
								icon='solar:arrow-right-down-linear'
								className='text-base group-hover:translate-y-1 transition-transform'
							/>
						</a>
						<a
							href='#about'
							className='group flex items-center gap-3 bg-white/4 border border-white/10 text-white/60 px-8 py-4 rounded-2xl font-black uppercase text-[11px] tracking-[0.25em] transition-all duration-300 hover:bg-white/8 hover:border-white/20 hover:text-white'>
							<RollingText text='About Me' />
						</a>
					</div>
				</div>
			</div>

			{/* ── SCROLL INDICATOR ────────────────────────────────────── */}
			<div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 animate-bounce'>
				<span className='text-[8px] font-mono uppercase tracking-[0.4em]'>
					System Discovery
				</span>
			</div>
		</section>
	);
};

const TechStack = () => {
	const categories = [
		{
			title: "Systems & Core",
			color: "text-accent",
			borderColor: "border-accent/30",
			hoverBorder: "hover:border-accent",
			items: ["React 19", "TypeScript", "Python", "Java", "C#", "Node.js"],
		},
		{
			title: "Cloud & Database",
			color: "text-white",
			borderColor: "border-white/20",
			hoverBorder: "hover:border-white",
			items: ["AWS", "PostgreSQL", "Docker", "SQL", "Git", "Supabase"],
		},
		{
			title: "UI/UX & Method",
			color: "text-offset/30",
			borderColor: "border-offset/30",
			hoverBorder: "hover:offset",
			items: ["Tailwind", "GSAP", "Figma", "OOD", "SDLC", "Agile"],
		},
	];

	return (
		<section className='py-24 px-6 md:px-12 max-w-7xl mx-auto'>
			<div className='flex flex-col md:flex-row gap-12 items-start justify-center w-full'>
				{categories.map((cat, i) => (
					<div
						key={cat.title}
						className='flex flex-col items-center gap-6 w-full'>
						<span className='text-[10px] font-mono uppercase tracking-[0.4em] text-white/30 font-bold'>
							{cat.title}
						</span>
						<div className='flex flex-wrap justify-center gap-4 max-w-100'>
							{cat.items.map((tech) => (
								<div
									key={tech}
									className={`flex items-center justify-center w-30 h-11.25 bg-white/2 border ${cat.borderColor} ${cat.color} text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 hover:bg-white/5 ${cat.hoverBorder} hover:scale-105 cursor-default group`}>
									<span className='group-hover:tracking-[0.3em] transition-all duration-500'>
										{tech}
									</span>
								</div>
							))}
						</div>
						{i < categories.length - 1 && (
							<div className='w-full h-px bg-white/5 md:hidden my-4' />
						)}
					</div>
				))}
			</div>
		</section>
	);
};

const FeaturedPCSP = () => {
	const sectionRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from(".pcsp-reveal", {
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 80%",
				},
				y: 50,
				opacity: 0,
				duration: 1,
				stagger: 0.2,
				ease: "power3.out",
			});
		}, sectionRef);
		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={sectionRef}
			id='featured'
			className='py-32 px-6 md:px-12 max-w-7xl mx-auto'>
			<div className='flex flex-col gap-4 mb-20 px-4'>
				<span className='pcsp-reveal text-offset font-mono text-[10px] tracking-[0.4em] uppercase font-bold'>
					Primary Case Study
				</span>
				<h2 className='pcsp-reveal text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none text-white'>
					PCSP Assistant Pro
				</h2>
			</div>

			<div className='group relative grid lg:grid-cols-[1.2fr_1fr] gap-12 bg-white/3 border border-white/10 rounded-[4rem] overflow-hidden p-8 md:p-16 transition-all duration-700 hover:border-accent/40'>
				<div className='pcsp-reveal flex flex-col justify-center gap-8 order-2 lg:order-1'>
					<div className='flex flex-wrap gap-3'>
						{["HIPAA", "SQL", "Next.js", "Case Management"].map((tag) => (
							<span
								key={tag}
								className='text-[9px] font-mono uppercase tracking-widest px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent font-bold'>
								{tag}
							</span>
						))}
					</div>
					<p className='text-4xl font-bold leading-tight text-white/90'>
						Streamlining Missouri PCSP workflow through{" "}
						<span className='text-offset italic'>
							deterministic data integrity.
						</span>
					</p>
					<p className='text-lg text-white/50 leading-relaxed max-w-xl'>
						A high-fidelity clinical documentation engine built to reduce
						friction for frontline healthcare staff. This tool automates
						compliant drafting while ensuring HIPAA-sensitive data remains
						secure and structured.
					</p>
					<div className='flex items-center gap-8 mt-4'>
						<a
							href='https://dte-84.github.io/DTE-E-Portfolio/case-study-pcsp/'
							target='_blank'
							rel='noreferrer'
							className='group/btn flex items-center gap-4 bg-accent text-black px-10 py-5 rounded-2xl font-black uppercase text-xs transition-all hover:scale-105 active:scale-95'>
							<span>Deep Dive Breakdown</span>
							<Icon
								icon='solar:arrow-right-up-linear'
								className='text-lg group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform'
							/>
						</a>
						<div className='flex flex-col'>
							<span className='text-[9px] font-mono text-white/20 uppercase tracking-[0.2em]'>
								Protocol Status
							</span>
							<span className='text-xs font-black text-offset uppercase flex items-center gap-2'>
								<div className='w-1.5 h-1.5 rounded-full bg-offset animate-ping' />
								Production Ready
							</span>
						</div>
					</div>
				</div>

				<div className='pcsp-reveal relative aspect-4/3 lg:aspect-auto rounded-[2.5rem] overflow-hidden bg-black/40 border border-white/10 order-1 lg:order-2 group-hover:border-accent/30 transition-colors'>
					<video
						src={getAssetPath("assets/PCSP.mp4")}
						autoPlay
						loop
						muted
						playsInline
						className='w-full h-full object-cover scale-[1.02] group-hover:scale-110 transition-transform duration-[2s] ease-out'
					/>
					<div className='absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent' />
				</div>
			</div>
		</section>
	);
};

// ─────────────────────────────────────────────────────────────────────────────
// FEATURED PULSE — Secondary case study. Mirrored layout from PCSP (video left,
// content right) to create visual rhythm between the two hero projects.
// ─────────────────────────────────────────────────────────────────────────────
const FeaturedPulse = () => {
	const sectionRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from(".pulse-reveal", {
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 80%",
				},
				y: 50,
				opacity: 0,
				duration: 1,
				stagger: 0.18,
				ease: "power3.out",
			});
		}, sectionRef);
		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={sectionRef}
			id='pulse'
			className='py-20 px-6 md:px-12 max-w-7xl mx-auto'>
			{/* Section header — right-aligned to contrast PCSP's left-aligned header */}
			<div className='flex flex-col gap-4 mb-16 px-4 items-end text-right'>
				<span className='pulse-reveal text-accent font-mono text-[10px] tracking-[0.4em] uppercase font-bold'>
					Featured Project // 02
				</span>
				<h2 className='pulse-reveal text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none text-white'>
					Pulse Behavioral AI
				</h2>
			</div>

			{/* Card — video LEFT, content RIGHT (inverse of PCSP) */}
			<div className='group relative grid lg:grid-cols-[1fr_1.2fr] gap-12 bg-white/3 border border-white/10 rounded-[4rem] overflow-hidden p-8 md:p-16 transition-all duration-700 hover:border-accent/30'>
				{/* Video — left column */}
				<div className='pulse-reveal relative aspect-4/3 lg:aspect-auto rounded-[2.5rem] overflow-hidden bg-black/40 border border-white/10 order-1 group-hover:border-accent/30 transition-colors'>
					<video
						src={getAssetPath("assets/Pulse.mp4")}
						autoPlay
						loop
						muted
						playsInline
						className='w-full h-full object-cover scale-[1.02] group-hover:scale-110 transition-transform duration-[2s] ease-out'
					/>
					<div className='absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-transparent' />
					{/* Live data badge */}
					<div className='absolute top-6 left-6 flex items-center gap-2 bg-black/70 backdrop-blur-md border border-accent/20 rounded-full px-4 py-2'>
						<div className='w-1.5 h-1.5 rounded-full bg-accent animate-ping' />
						<span className='text-[9px] font-mono uppercase tracking-widest text-accent font-bold'>
							Live Telemetry
						</span>
					</div>
				</div>

				{/* Content — right column */}
				<div className='pulse-reveal flex flex-col justify-center gap-7 order-2'>
					<div className='flex flex-wrap gap-3'>
						{["Python", "Pandas", "PostgreSQL", "FastAPI", "React 19"].map(
							(tag) => (
								<span
									key={tag}
									className='text-[9px] font-mono uppercase tracking-widest px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent font-bold'>
									{tag}
								</span>
							),
						)}
					</div>

					<p className='text-3xl md:text-4xl font-bold leading-tight text-white/90'>
						Behavioral finance intelligence with{" "}
						<span className='text-accent italic'>
							predictive telemetry at the core.
						</span>
					</p>

					<p className='text-base text-white/50 leading-relaxed max-w-lg'>
						A full-stack analytics platform that intercepts real-time behavioral
						signals from financial data streams. A Python/Pandas telemetry layer
						feeds a PostgreSQL persistence model, surfacing actionable patterns
						with sub-second response times.
					</p>

					<div className='flex items-center gap-8 mt-2'>
						<a
							href='https://dte-solutions.icu/pulse-breakdown.html'
							target='_blank'
							rel='noreferrer'
							className='group/btn flex items-center gap-4 bg-white/5 border border-accent/30 text-accent px-10 py-5 rounded-2xl font-black uppercase text-xs transition-all hover:bg-accent hover:text-black hover:border-transparent hover:scale-105 active:scale-95'>
							<span>Full Breakdown</span>
							<Icon
								icon='solar:arrow-right-up-linear'
								className='text-lg group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform'
							/>
						</a>
						<div className='flex flex-col gap-1'>
							<span className='text-[9px] font-mono text-white/20 uppercase tracking-[0.2em]'>
								Release Status
							</span>
							<span className='text-xs font-black text-accent uppercase flex items-center gap-2'>
								<div className='w-1.5 h-1.5 rounded-full bg-accent animate-pulse' />
								Active Development
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

interface Project {
	id: string;
	title: string;
	category: string;
	year: number;
	description: string;
	tags: string[];
	link: string;
	video: string;
}

const ProjectCard = ({
	project,
	index,
}: {
	project: Project;
	index: number;
}) => {
	const cardRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		gsap.to(cardRef.current, {
			scrollTrigger: {
				trigger: cardRef.current,
				start: "top 90%",
			},
			y: 0,
			opacity: 1,
			duration: 0.8,
			delay: index * 0.1,
		});
	}, [index]);

	return (
		<div
			ref={cardRef}
			className='group relative flex flex-col gap-6 p-6 rounded-[3rem] bg-white/2 border border-white/5 hover:border-accent/30 transition-all duration-700 hover:bg-white/[0.03] shadow-2xl hover:shadow-accent/5'
			style={{ opacity: 0, transform: "translateY(40px)" }}>
			<div className='aspect-video rounded-[2rem] overflow-hidden bg-black/40 border border-white/10 relative transition-all duration-700 group-hover:border-accent/40'>
				<video
					src={getAssetPath(project.video)}
					autoPlay
					loop
					muted
					playsInline
					className='w-full h-full object-cover opacity-30 group-hover:opacity-100 duration-[2s] scale-[1.02] group-hover:scale-110 ease-out'
				/>
				<div className='absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity' />

				<a
					href={project.link}
					target='_blank'
					rel='noreferrer'
					className='absolute top-8 right-8 w-14 h-14 rounded-full bg-black/80 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-accent hover:text-black hover:border-accent hover:scale-110 z-20'>
					<Icon icon='solar:arrow-right-up-linear' className='text-2xl' />
				</a>

				<div className='absolute bottom-6 left-8 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-100 z-20'>
					{project.tags.map((tag) => (
						<span
							key={tag}
							className='text-[8px] font-mono font-black uppercase tracking-widest px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 text-white/80 rounded-lg'>
							{tag}
						</span>
					))}
				</div>
			</div>

			<div className='px-2'>
				<div className='flex items-center justify-between mb-4'>
					<div className='flex items-center gap-3'>
						<span className='text-[10px] font-mono text-accent uppercase tracking-[0.4em] font-bold'>
							{project.category}
						</span>
						<div className='h-px w-8 bg-accent/20' />
						<span className='text-[10px] font-mono text-white/20 uppercase tracking-[0.4em]'>
							{project.year}
						</span>
					</div>
				</div>

				<h3 className='text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4 text-white group-hover:text-accent transition-colors duration-500'>
					<RollingText text={project.title} />
				</h3>

				<p className='text-base text-white/40 leading-relaxed font-medium mb-8 max-w-xl group-hover:text-white/60 transition-colors duration-500'>
					{project.description}
				</p>

				<div className='flex flex-wrap gap-3 mt-auto pt-6 border-t border-white/5'>
					{project.tags.map((tag) => (
						<div
							key={tag}
							className='flex items-center gap-2 px-4 py-2 bg-white/2 border border-white/5 rounded-xl text-[9px] font-mono uppercase tracking-widest text-white/40 group-hover:border-accent/20 group-hover:text-accent/60 transition-all duration-500 hover:bg-accent/5 hover:text-accent hover:scale-105 cursor-default'>
							<div className='w-1 h-1 rounded-full bg-accent/20 group-hover:bg-accent/40' />
							{tag}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

const OtherWorks = () => {
	const sectionRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from(".works-header", {
				scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
				y: 30,
				opacity: 0,
				duration: 0.9,
				stagger: 0.15,
				ease: "power3.out",
			});
		}, sectionRef);
		return () => ctx.revert();
	}, []);

	const projects: Project[] = [
		{
			id: "SetLogic",
			title: "SetLogic Fitness",
			category: "HealthTech",
			year: 2026,
			description:
				"AI-driven fitness orchestration platform with real-time trajectory tracking and behavioral insights.",
			tags: ["React 19", "Firebase", "GSAP", "AI"],
			link: "https://dte-84.github.io/SetLogic/",
			video: "assets/SetLogic.mp4",
		},
		{
			id: "NestLegacy",
			title: "NestLegacy Shell",
			category: "Fintech",
			year: 2026,
			description:
				"Cinematic lead intelligence platform featuring wide-angle analytics and high-fidelity reporting.",
			tags: ["Next.js", "Analytics", "UX Design", "GSAP"],
			link: "https://dte-84.github.io/NestLegacy/",
			video: "assets/NestLegacy.mp4",
		},
		{
			id: "KW_MODELING",
			title: "Key Wallis Modeling",
			category: "Visual Storytelling",
			year: 2025,
			description:
				"High-impact digital portfolio featuring immersive scroll dynamics and gallery-focused architecture.",
			tags: ["UX Design", "Framer Motion", "React", "GSAP"],
			link: "https://kw-portfolio-kappa.vercel.app/",
			video: "assets/KWModel.mp4",
		},
		{
			id: "TONYS_LLC",
			title: "Tonys Landscaping",
			category: "Service Logic",
			year: 2024,
			description:
				"Custom interactive modules for performance visualization and client acquisition in the landscaping sector.",
			tags: ["Vanilla JS", "GSAP", "Logic Engine", "UI/UX"],
			link: "https://tonyslandscapingllc.com",
			video: "assets/TonysLandscaping.mp4",
		},
		{
			id: "SSANTIAGO",
			title: "Santi's Car Sales",
			category: "Automotive Logic",
			year: 2024,
			description:
				"Interactive inventory showroom for premium pre-owned vehicles, optimized for search transparency.",
			tags: ["React", "Inventory Logic", "UX", "Sales Engine"],
			link: "https://dte-84.github.io/CarSalesInv/",
			video: "assets/CarSales.mp4",
		},
		{
			id: "ProDrip",
			title: "ProDrip",
			category: "Service Logic",
			year: 2024,
			description:
				"Dynamic landing and service orchestration for premium automotive wraps and tinting services.",
			tags: ["Branding", "Logic", "UI", "Next.js"],
			link: "https://dte-84.github.io/ProDip/",
			video: "assets/ProDrip.mp4",
		},
	];

	return (
		<section
			ref={sectionRef}
			id='work'
			className='py-32 px-6 md:px-12 max-w-7xl mx-auto'>
			{/* Section header */}
			<div className='flex flex-col gap-4 mb-20 px-4'>
				<span className='works-header text-white/30 font-mono text-[10px] tracking-[0.4em] uppercase font-bold'>
					Other Deployments //
				</span>
				<h2 className='works-header text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none text-white'>
					The <span className='text-accent italic'>Archive.</span>
				</h2>
			</div>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
				{projects.map((project, i) => (
					<ProjectCard key={project.id} project={project} index={i} />
				))}
			</div>
		</section>
	);
};

const marqueeItems = [
	"Data Integrity",
	"Full-Stack Systems",
	"Behavioral Tech",
	"Systems Engineer",
	"PostgreSQL",
	"React 19",
	"Python / Pandas",
	"DTE Solutions LLC",
];

const ExperienceMarquee = () => {
	return (
		<section className='py-12 border-y border-white/5 bg-white/2 overflow-hidden whitespace-nowrap rotate--1 translate-y-12 z-50 relative'>
			<div className='flex animate-marquee'>
				{[...Array(4)].map((_, i) => (
					<div key={i} className='flex items-center gap-12 px-6'>
						{marqueeItems.map((item) => (
							<div key={item} className='flex items-center gap-4'>
								<div className='w-2 h-2 rounded-full bg-accent animate-pulse' />
								<span className='text-3xl font-black uppercase tracking-tighter text-white/20 italic hover:text-accent transition-colors cursor-default'>
									{item}
								</span>
							</div>
						))}
					</div>
				))}
			</div>
		</section>
	);
};

const Footer = ({ onContactClick }: { onContactClick: () => void }) => {
	return (
		<footer className='py-32 px-6 md:px-12 max-w-7xl mx-auto'>
			<div className='relative overflow-hidden bg-white/3 border border-white/10 rounded-[3rem] p-12 md:p-24 flex flex-col items-center text-center gap-12'>
				<div className='max-w-3xl flex flex-col gap-6'>
					<h2 className='text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none z-20'>
						Connect & <span className='text-accent italic'>Collaborate.</span>
					</h2>
					<p className='text-xl text-white font-medium z-20'>
						Available for strategic engineering partnerships and high-fidelity
						systems development.
					</p>
				</div>
				<div className='flex flex-wrap justify-center gap-6'>
					<button
						onClick={onContactClick}
						className='group bg-accent text-black px-12 py-6 rounded-2xl font-black uppercase text-sm transition-all hover:scale-105 active:scale-95 flex items-center gap-3'>
						<RollingText text='Connection' hoverColor='text-white' />
						<Icon icon='solar:letter-linear' className='text-xl' />
					</button>
					<a
						href='https://dte-84.github.io/DTE-Portfolio/assets/DrewTErnst_Resume.pdf'
						target='_blank'
						rel='noreferrer'
						className='bg-black/5 border border-white/10 text-white px-12 py-6 rounded-2xl font-black uppercase text-sm transition-all hover:bg-white/10 hover:border-white/20 flex items-center gap-3'>
						<RollingText text='Download Dossier' />
						<Icon icon='solar:file-download-linear' className='text-xl' />
					</a>
				</div>
				<div className='mt-12 flex flex-col items-center gap-4 z-20'>
					<div className='flex gap-8'>
						<a
							href='https://github.com/dte-84'
							target='_blank'
							rel='noreferrer'
							className='text-2xl text-white hover:text-accent transition-colors'>
							<Icon icon='simple-icons:github' />
						</a>
						<a
							href='https://linkedin.com/in/dte84'
							target='_blank'
							rel='noreferrer'
							className='text-2xl text-white hover:text-accent transition-colors'>
							<Icon icon='simple-icons:linkedin' />
						</a>
					</div>
					<p className='text-[10px] font-mono text-white/10 uppercase tracking-[0.5em]'>
						STL MO // IL Division // © 2026 DTE Solutions LLC
					</p>
				</div>
			</div>
		</footer>
	);
};

export default function Home() {
	const [isContactOpen, setIsContactOpen] = useState(false);

	return (
		<main className='bg-black min-h-screen text-white selection:bg-accent selection:text-black antialiased font-space relative overflow-x-hidden'>
			<BgAnimation />
			<Nav onContactClick={() => setIsContactOpen(true)} />
			<div className='relative z-10'>
				<Hero />
				<TechStack />
				<ExperienceMarquee />
				<FeaturedPCSP />
				<FeaturedPulse />
				<OtherWorks />
				<About />
				<Footer onContactClick={() => setIsContactOpen(true)} />
			</div>

			<ContactModal
				isOpen={isContactOpen}
				onClose={() => setIsContactOpen(false)}
			/>
		</main>
	);
}
