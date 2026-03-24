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
		<nav className='fixed top-0 left-0 right-0 z-[100] bg-black/20 backdrop-blur-xl border-b border-white/10'>
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
							Connect
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

			// ── Phase 1 ─────────────────────────────────────────────────────
			// Outer Hex Shell — erupts from deep background.
			// Starts as a near-invisible speck (scale 0.04) with a blur haze,
			// then rockets forward to full size — pure "object approaching through space."
			tl.fromTo(
				"#hex-shell",
				{ scale: 0.04, opacity: 0, filter: "blur(14px)" },
				{
					scale: 1,
					opacity: 1,
					filter: "blur(0px)",
					duration: 2.0,
					ease: "expo.out",
				},
			);

			// ── Phase 2 ─────────────────────────────────────────────────────
			// Inner Hex Glow Panel — blooms inward, slight elastic overshoot.
			tl.fromTo(
				"#inner-hex",
				{ scale: 0.3, opacity: 0 },
				{ scale: 1, opacity: 1, duration: 1.1, ease: "back.out(2.2)" },
				"-=0.75",
			);

			// ── Phase 3 ─────────────────────────────────────────────────────
			// Bar Graph — the data core rises from the floor of the hex.
			tl.fromTo(
				"#bar-graph",
				{ opacity: 0, y: 32 },
				{ opacity: 1, y: 0, duration: 1.0, ease: "power3.out" },
				"-=0.45",
			);

			// ── Phase 4 ─────────────────────────────────────────────────────
			// Angle Brackets — slam in from both sides simultaneously.
			tl.fromTo(
				"#bracket-left",
				{ x: -170, opacity: 0 },
				{ x: 0, opacity: 1, duration: 0.9, ease: "expo.out" },
				"-=0.35",
			);
			tl.fromTo(
				"#bracket-right",
				{ x: 170, opacity: 0 },
				{ x: 0, opacity: 1, duration: 0.9, ease: "expo.out" },
				"<", // exact same start time as bracket-left
			);

			// ── Phase 5 ─────────────────────────────────────────────────────
			// Diagonal Slash — drops from above with a crisp back-ease snap.
			tl.fromTo(
				"#slash",
				{ y: -130, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.75, ease: "back.out(1.6)" },
				"-=0.15",
			);

			// ── Phase 6 ─────────────────────────────────────────────────────
			// Name "DREW ERNST" — each character rises from below, staggered.
			// The logo is fully assembled before a single letter appears.
			tl.fromTo(
				".hero-char",
				{ y: 90, opacity: 0 },
				{ y: 0, opacity: 1, duration: 1.0, stagger: 0.032, ease: "power4.out" },
				"-=0.05",
			);

			// ── Phase 7 ─────────────────────────────────────────────────────
			// Tagline, quote card, and CTA — cascade in after the name lands.
			tl.fromTo(
				".hero-sub",
				{ y: 22, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.75, stagger: 0.12, ease: "power3.out" },
				"-=0.55",
			);

			// Ambient glow pulses in immediately as the timeline fires
			tl.fromTo(
				".hero-glow",
				{ scale: 0.4, opacity: 0 },
				{ scale: 1, opacity: 1, duration: 2.5, ease: "expo.out" },
				0,
			);
		}, containerRef);

		return () => ctx.revert();
	}, []);

	const nameLines = ["DREW", "ERNST."];

	return (
		<section
			ref={containerRef}
			className='relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-6 text-center overflow-x-clip'>
			{/* ── Ambient radial glow ─────────────────────────────────── */}
			<div
				className='hero-glow pointer-events-none absolute inset-0 flex items-center justify-center'
				style={{ opacity: 0 }}>
				<div className='w-[750px] h-[750px] rounded-full bg-accent/10 blur-[150px]' />
			</div>

			{/* ── THE LOGO — center stage ─────────────────────────────── */}
			<div className='relative z-10 w-[300px] h-[300px] md:w-[420px] md:h-[420px]'>
				<DTELogoModular ref={logoRef} />
			</div>

			{/* ── NAME REVEAL — character by character ────────────────── */}
			<div className='relative z-10 mt-4'>
				<h1
					className='font-orbitron font-black uppercase tracking-tighter leading-none text-white'
					style={{
						fontSize: "clamp(3.2rem, 13vw, 8.5rem)",
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
			</div>

			{/* ── TAGLINE ─────────────────────────────────────────────── */}
			<p
				className='hero-sub mt-5 text-[10px] md:text-[12px] font-mono uppercase tracking-[0.55em] font-bold'
				style={{ color: "var(--theme-accent)", opacity: 0 }}>
				Full-Stack Developer &nbsp;//&nbsp; AI App Builder
			</p>

			{/* ── QUOTE CARD ──────────────────────────────────────────── */}
			<div
				className='hero-sub mt-7 max-w-xl bg-white/[0.025] backdrop-blur-md border border-white/[0.06] px-7 py-6 rounded-3xl relative overflow-hidden group'
				style={{ opacity: 0 }}>
				<div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.025] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none' />
				<p className='text-base md:text-lg text-white/75 leading-relaxed font-medium italic'>
					"I blend backend{" "}
					<span className='text-accent not-italic font-bold'>
						data integrity
					</span>{" "}
					with user-centric design — transforming raw information into
					high-impact, functional products."
				</p>
				<div className='w-10 h-[1px] bg-accent/30 mx-auto mt-5' />
			</div>

			{/* ── CTA BUTTONS ─────────────────────────────────────────── */}
			<div
				className='hero-sub mt-8 flex flex-col sm:flex-row items-center justify-center gap-4'
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
					className='group flex items-center gap-3 bg-white/[0.04] border border-white/10 text-white/60 px-8 py-4 rounded-2xl font-black uppercase text-[11px] tracking-[0.25em] transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20 hover:text-white'>
					<RollingText text='About Me' />
				</a>
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
			color: "text-offset",
			borderColor: "border-offset/30",
			hoverBorder: "hover:border-offset",
			items: ["AWS", "PostgreSQL", "Docker", "SQL", "Git", "Supabase"],
		},
		{
			title: "UI/UX & Method",
			color: "text-white",
			borderColor: "border-white/20",
			hoverBorder: "hover:border-white",
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
						<div className='flex flex-wrap justify-center gap-4 max-w-[400px]'>
							{cat.items.map((tech) => (
								<div
									key={tech}
									className={`flex items-center justify-center w-[120px] h-[45px] bg-white/[0.02] border ${cat.borderColor} ${cat.color} text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 hover:bg-white/[0.05] ${cat.hoverBorder} hover:scale-105 cursor-default group`}>
									<span className='group-hover:tracking-[0.3em] transition-all duration-500'>
										{tech}
									</span>
								</div>
							))}
						</div>
						{i < categories.length - 1 && (
							<div className='w-full h-[1px] bg-white/5 md:hidden my-4' />
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

			<div className='group relative grid lg:grid-cols-[1.2fr_1fr] gap-12 bg-white/[0.03] border border-white/10 rounded-[4rem] overflow-hidden p-8 md:p-16 transition-all duration-700 hover:border-accent/40'>
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
						"Streamlining Missouri PCSP workflow through{" "}
						<span className='text-offset italic'>
							deterministic data integrity.
						</span>
						"
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

				<div className='pcsp-reveal relative aspect-[4/3] lg:aspect-auto rounded-[2.5rem] overflow-hidden bg-black/40 border border-white/10 order-1 lg:order-2 group-hover:border-accent/30 transition-colors'>
					<video
						src={getAssetPath("assets/PCSP.mp4")}
						autoPlay
						loop
						muted
						playsInline
						className='w-full h-full object-cover scale-[1.02] group-hover:scale-110 transition-transform duration-[2s] ease-out'
					/>
					<div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent' />
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
			<div className='group relative grid lg:grid-cols-[1fr_1.2fr] gap-12 bg-white/[0.03] border border-white/10 rounded-[4rem] overflow-hidden p-8 md:p-16 transition-all duration-700 hover:border-accent/30'>
				{/* Video — left column */}
				<div className='pulse-reveal relative aspect-[4/3] lg:aspect-auto rounded-[2.5rem] overflow-hidden bg-black/40 border border-white/10 order-1 group-hover:border-accent/30 transition-colors'>
					<video
						src={getAssetPath("assets/Pulse.mp4")}
						autoPlay
						loop
						muted
						playsInline
						className='w-full h-full object-cover scale-[1.02] group-hover:scale-110 transition-transform duration-[2s] ease-out'
					/>
					<div className='absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent' />
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
						"Behavioral finance intelligence with{" "}
						<span className='text-accent italic'>
							predictive telemetry at the core.
						</span>
						"
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
		gsap.from(cardRef.current, {
			scrollTrigger: {
				trigger: cardRef.current,
				start: "top 90%",
			},
			y: 40,
			opacity: 0,
			duration: 0.8,
			delay: index * 0.1,
		});
	}, [index]);

	return (
		<div
			ref={cardRef}
			className='group relative flex flex-col gap-6 p-4 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-accent/20 transition-all duration-500'>
			<div className='aspect-video rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 relative transition-all duration-500 group-hover:border-accent/30'>
				<video
					src={getAssetPath(project.video)}
					autoPlay
					loop
					muted
					playsInline
					className='w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-opacity duration-700 scale-[1.01] group-hover:scale-110 transition-transform duration-[3s]'
				/>
				<div className='absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors' />
				<a
					href={project.link}
					target='_blank'
					rel='noreferrer'
					className='absolute top-6 right-6 w-12 h-12 rounded-full bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-accent hover:text-black hover:border-accent'>
					<Icon icon='solar:arrow-right-up-linear' className='text-2xl' />
				</a>
			</div>
			<div className='px-4 pb-4'>
				<div className='flex items-center gap-3 mb-4'>
					<span className='text-[9px] font-mono text-offset uppercase tracking-[0.3em] font-bold'>
						{project.category}
					</span>
					<div className='h-[1px] w-8 bg-white/10' />
					<span className='text-[9px] font-mono text-white/20 uppercase tracking-[0.3em]'>
						{project.year}
					</span>
				</div>
				<h3 className='text-2xl font-black uppercase tracking-tighter mb-4 text-white hover:text-accent transition-colors'>
					<RollingText text={project.title} />
				</h3>
				<p className='text-sm text-white/40 leading-relaxed line-clamp-2 font-medium'>
					{project.description}
				</p>
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
				"AI-driven fitness orchestration platform with real-time trajectory tracking.",
			tags: ["React", "Firebase", "AI"],
			link: "https://dte-84.github.io/SetLogic/",
			video: "assets/SetLogic.mp4",
		},
		{
			id: "NestLegacy",
			title: "NestLegacy Shell",
			category: "Fintech",
			year: 2026,
			description:
				"Cinematic lead intelligence platform featuring wide-angle analytics.",
			tags: ["Analytics", "Fintech", "UX"],
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
			tags: ["UX Design", "Framer Motion", "React"],
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
			tags: ["Commercial UI", "GSAP", "Logic"],
			link: "https://tonyslandscapingllc.com",
			video: "assets/TonysLandscaping.mp4",
		},
		{
			id: "SSANTIAGO",
			title: "Santi's Car Sales",
			category: "Automotive Logic",
			year: 2024,
			description:
				"Interactive inventory showroom for premium pre-owned vehicles, optimized for search transparency and high-conversion leads.",
			tags: ["Inventory Logic", "UX", "Sales Engine"],
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
			tags: ["Branding", "Logic", "UI"],
			link: "https://dte-84.github.io/ProDrip/",
			video: "assets/ProDrip.mp4",
		},
	];

	return (
		<section
			ref={sectionRef}
			id='work'
			className='py-32 px-6 md:px-12 max-w-7xl mx-auto'>
			{/* Section header */}
			<div className='flex flex-col gap-4 mb-16 px-4'>
				<span className='works-header text-white/30 font-mono text-[10px] tracking-[0.4em] uppercase font-bold'>
					More Work
				</span>
				<h2 className='works-header text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-white'>
					Other Deployments
				</h2>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
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
	"Senior Systems Engineer",
	"PostgreSQL",
	"React 19",
	"Python / Pandas",
	"DTE Solutions LLC",
];

const ExperienceMarquee = () => {
	return (
		<section className='py-12 border-y border-white/5 bg-white/[0.02] overflow-hidden whitespace-nowrap rotate-[-1deg] translate-y-12 z-50 relative'>
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
			<div className='bg-white/[0.03] border border-white/10 rounded-[3rem] p-12 md:p-24 flex flex-col items-center text-center gap-12'>
				<div className='w-[140px] h-[140px] opacity-80'>
					<DTELogoModular isStatic />
				</div>
				<div className='max-w-3xl flex flex-col gap-6'>
					<h2 className='text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none'>
						Ready for the <span className='text-accent italic'>Uplink?</span>
					</h2>
					<p className='text-xl text-white/40 font-medium'>
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
						className='bg-white/5 border border-white/10 text-white px-12 py-6 rounded-2xl font-black uppercase text-sm transition-all hover:bg-white/10 hover:border-white/20 flex items-center gap-3'>
						<RollingText text='Download Dossier' />
						<Icon icon='solar:file-download-linear' className='text-xl' />
					</a>
				</div>
				<div className='mt-12 flex flex-col items-center gap-4'>
					<div className='flex gap-8'>
						<a
							href='https://github.com/dte-84'
							target='_blank'
							rel='noreferrer'
							className='text-2xl text-white/20 hover:text-accent transition-colors'>
							<Icon icon='simple-icons:github' />
						</a>
						<a
							href='https://linkedin.com/in/dte84'
							target='_blank'
							rel='noreferrer'
							className='text-2xl text-white/20 hover:text-accent transition-colors'>
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
