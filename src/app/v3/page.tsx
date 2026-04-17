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
									{item.id} {"//"}
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

	useEffect(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
			tl.addLabel("contentReveal", 0);
			tl.fromTo(".hero-logo", { scale: 0.8, opacity: 0, x: -30 }, { scale: 1, opacity: 1, x: 0, duration: 1.5 }, "contentReveal");
			tl.fromTo(".hero-char", { y: 90, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, stagger: 0.04 }, "contentReveal+=0.3");
			tl.fromTo(".hero-sub", { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 1.0, stagger: 0.15 }, "contentReveal+=0.8");
			tl.fromTo(".hero-glow", { scale: 0.6, opacity: 0 }, { scale: 1, opacity: 1, duration: 3.0, ease: "expo.out" }, "contentReveal");
		}, containerRef);
		return () => ctx.revert();
	}, []);

	const nameLines = ["DREW", "ERNST."];

	return (
		<section ref={containerRef} className='relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 md:px-16 overflow-x-clip'>
			<div className='w-full max-w-7xl flex flex-col md:flex-row items-center justify-between relative z-10'>
				<div className='hero-logo w-full md:w-1/2 flex items-center justify-center md:justify-start' style={{ opacity: 0 }}>
					<div className='relative w-64 h-64 md:w-120 md:h-120 flex items-center justify-center'>
						<div className='relative z-20 w-48 h-48 md:w-80 md:h-80' style={{ WebkitMaskImage: "radial-gradient(circle, black 30%, transparent 80%)", maskImage: "radial-gradient(circle, black 30%, transparent 80%)" }}>
							<DTELogoModular isStatic shouldSpin={false} />
						</div>
					</div>
				</div>
				<div className='w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left md:pl-16'>
					<h1 className='font-orbitron font-black uppercase tracking-tighter leading-none text-white mb-4' style={{ fontSize: "clamp(3.2rem, 8vw, 7.5rem)", textShadow: "0 0 80px rgba(0,224,255,0.18), 0 0 160px rgba(0,224,255,0.08)" }}>
						{nameLines.map((line, lineIdx) => (
							<div key={lineIdx} className={lineIdx > 0 ? "mt-[-0.06em]" : ""}>
								{line.split("").map((char, charIdx) => (
									<span key={charIdx} className='hero-char inline-block' style={{ opacity: 0, willChange: "transform, opacity" }}>
										{char === "." ? <span className='text-accent'>{char}</span> : char}
									</span>
								))}
							</div>
						))}
					</h1>
					<p className='hero-sub text-[10px] md:text-[12px] font-mono uppercase tracking-[0.55em] font-bold mb-8' style={{ color: "var(--theme-accent)", opacity: 0 }}>
						Systems Engineer &nbsp;//&nbsp; AI Architect
					</p>
					<div className='hero-sub max-w-xl bg-white/2.5 backdrop-blur-md border border-white/6 px-7 py-6 rounded-3xl relative overflow-hidden group mb-10' style={{ opacity: 0 }}>
						<div className='absolute inset-0 bg-linear-to-r from-transparent via-white/2.5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none' />
						<p className='text-base md:text-lg text-white/75 leading-relaxed font-medium italic'>
							I blend backend <span className='text-accent not-italic font-bold'>data integrity</span> with user-centric design — transforming raw information into high-impact, functional products.
						</p>
					</div>
					<div className='hero-sub flex flex-col sm:flex-row items-center gap-4' style={{ opacity: 0 }}>
						<a href='#featured' className='group flex items-center gap-3 bg-accent text-black px-8 py-4 rounded-2xl font-black uppercase text-[11px] tracking-[0.25em] transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(var(--theme-accent-rgb),0.35)]'>
							<RollingText text='View My Work' hoverColor='text-white' />
							<Icon icon='solar:arrow-right-down-linear' className='text-base group-hover:translate-y-1 transition-transform' />
						</a>
						<a href='#about' className='group flex items-center gap-3 bg-white/4 border border-white/10 text-white/60 px-8 py-4 rounded-2xl font-black uppercase text-[11px] tracking-[0.25em] transition-all duration-300 hover:bg-white/8 hover:border-white/20 hover:text-white'>
							<RollingText text='About Me' />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

const FeaturedPCSP = () => {
	const sectionRef = useRef<HTMLElement>(null);
	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from(".pcsp-reveal", {
				scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
				y: 50, opacity: 0, duration: 1, stagger: 0.2, ease: "power3.out"
			});
		}, sectionRef);
		return () => ctx.revert();
	}, []);

	return (
		<section ref={sectionRef} id='featured' className='py-32 px-6 md:px-12 max-w-7xl mx-auto'>
			<div className='flex flex-col gap-4 mb-20 px-4'>
				<span className='pcsp-reveal text-offset font-mono text-[10px] tracking-[0.4em] uppercase font-bold'>Primary Case Study // 01</span>
				<h2 className='pcsp-reveal text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none text-white'>PCSP Assistant Pro</h2>
			</div>
			<div className='group relative grid lg:grid-cols-[1.2fr_1fr] gap-12 bg-white/3 border border-white/10 rounded-[4rem] overflow-hidden p-8 md:p-16 transition-all duration-700 hover:border-accent/40'>
				<div className='pcsp-reveal flex flex-col justify-center gap-8 order-2 lg:order-1'>
					<div className='flex flex-wrap gap-3'>
						{["HIPAA", "SQL", "Next.js", "Clinical Logic"].map(tag => (
							<span key={tag} className='text-[9px] font-mono uppercase tracking-widest px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent font-bold'>{tag}</span>
						))}
					</div>
					<p className='text-4xl font-bold leading-tight text-white/90'>Streamlining Missouri PCSP workflow through <span className='text-offset italic'>deterministic data integrity.</span></p>
					<p className='text-lg text-white/50 leading-relaxed max-w-xl'>A high-fidelity clinical documentation engine built to reduce friction for frontline healthcare staff. This tool automates compliant drafting while ensuring HIPAA-sensitive data remains secure.</p>
					<a href='/case-study-pcsp' className='group/btn inline-flex items-center gap-4 bg-accent text-black px-10 py-5 rounded-2xl font-black uppercase text-xs transition-all hover:scale-105 active:scale-95 self-start'>
						<span>Deep Dive Breakdown</span>
						<Icon icon='solar:arrow-right-up-linear' className='text-lg group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform' />
					</a>
				</div>
				<div className='pcsp-reveal relative aspect-4/3 lg:aspect-auto rounded-[2.5rem] overflow-hidden bg-black/40 border border-white/10 order-1 lg:order-2 group-hover:border-accent/30 transition-colors'>
					<video src={getAssetPath("assets/PCSP.mp4")} autoPlay loop muted playsInline className='w-full h-full object-cover scale-[1.02] group-hover:scale-110 transition-transform duration-[2s] ease-out' />
					<div className='absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent' />
				</div>
			</div>
		</section>
	);
};

const FeaturedQuarterly = () => {
	const sectionRef = useRef<HTMLElement>(null);
	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from(".qtr-reveal", {
				scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
				y: 50, opacity: 0, duration: 1, stagger: 0.18, ease: "power3.out"
			});
		}, sectionRef);
		return () => ctx.revert();
	}, []);

	return (
		<section ref={sectionRef} className='py-20 px-6 md:px-12 max-w-7xl mx-auto'>
			<div className='flex flex-col gap-4 mb-16 px-4 items-end text-right'>
				<span className='qtr-reveal text-accent font-mono text-[10px] tracking-[0.4em] uppercase font-bold'>Audit Resilience // 02</span>
				<h2 className='qtr-reveal text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none text-white'>Quarterly Pro</h2>
			</div>
			<div className='group relative grid lg:grid-cols-[1fr_1.2fr] gap-12 bg-white/3 border border-white/10 rounded-[4rem] overflow-hidden p-8 md:p-16 transition-all duration-700 hover:border-accent/30'>
				<div className='qtr-reveal relative aspect-4/3 lg:aspect-auto rounded-[2.5rem] overflow-hidden bg-black/40 border border-white/10 order-1 group-hover:border-accent/30 transition-colors'>
					<video src={getAssetPath("assets/PCSP.mp4")} autoPlay loop muted playsInline className='w-full h-full object-cover scale-[1.02] group-hover:scale-110 transition-transform duration-[2s] ease-out' />
					<div className='absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-transparent' />
				</div>
				<div className='qtr-reveal flex flex-col justify-center gap-7 order-2'>
					<div className='flex flex-wrap gap-3'>
						{["React 19", "Audit Logic", "Data Integrity", "Systems Engineering"].map(tag => (
							<span key={tag} className='text-[9px] font-mono uppercase tracking-widest px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent font-bold'>{tag}</span>
						))}
					</div>
					<p className='text-3xl md:text-4xl font-bold leading-tight text-white/90'>High-fidelity audit resilience engine for <span className='text-accent italic'>Missouri DMH/MMAC reporting.</span></p>
					<p className='text-base text-white/50 leading-relaxed max-w-lg'>Features deterministic validation against the April 2026 EVV Hard Launch and Oct 2025 HRST mandates. Built to solve the 80% supervisory oversight gap.</p>
					<a href='/case-study-quarterly' className='group/btn inline-flex items-center gap-4 bg-white/5 border border-accent/30 text-accent px-10 py-5 rounded-2xl font-black uppercase text-xs transition-all hover:bg-accent hover:text-black hover:border-transparent hover:scale-105 active:scale-95 self-start'>
						<span>Case Study breakdown</span>
						<Icon icon='solar:arrow-right-up-linear' className='text-lg group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform' />
					</a>
				</div>
			</div>
		</section>
	);
};

const FeaturedPulse = () => {
	const sectionRef = useRef<HTMLElement>(null);
	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from(".pulse-reveal", {
				scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
				y: 50, opacity: 0, duration: 1, stagger: 0.18, ease: "power3.out"
			});
		}, sectionRef);
		return () => ctx.revert();
	}, []);

	return (
		<section ref={sectionRef} className='py-20 px-6 md:px-12 max-w-7xl mx-auto'>
			<div className='flex flex-col gap-4 mb-16 px-4'>
				<span className='pulse-reveal text-accent font-mono text-[10px] tracking-[0.4em] uppercase font-bold'>Behavioral AI // 03</span>
				<h2 className='pulse-reveal text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none text-white'>Pulse Behavioral AI</h2>
			</div>
			<div className='group relative grid lg:grid-cols-[1.2fr_1fr] gap-12 bg-white/3 border border-white/10 rounded-[4rem] overflow-hidden p-8 md:p-16 transition-all duration-700 hover:border-accent/30'>
				<div className='pulse-reveal flex flex-col justify-center gap-7 order-2 lg:order-1'>
					<div className='flex flex-wrap gap-3'>
						{["Python", "Pandas", "PostgreSQL", "FastAPI", "React 19"].map(tag => (
							<span key={tag} className='text-[9px] font-mono uppercase tracking-widest px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent font-bold'>{tag}</span>
						))}
					</div>
					<p className='text-3xl md:text-4xl font-bold leading-tight text-white/90'>Financial intelligence with <span className='text-accent italic'>predictive telemetry at the core.</span></p>
					<p className='text-base text-white/50 leading-relaxed max-w-xl'>A full-stack analytics platform that intercepts real-time behavioral signals from financial data streams using Python/Pandas telemetry layer.</p>
					<a href='https://dte-solutions.icu/pulse-breakdown.html' className='group/btn inline-flex items-center gap-4 bg-accent text-black px-10 py-5 rounded-2xl font-black uppercase text-xs transition-all hover:scale-105 active:scale-95 self-start'>
						<span>Full Breakdown</span>
						<Icon icon='solar:arrow-right-up-linear' className='text-lg group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform' />
					</a>
				</div>
				<div className='pulse-reveal relative aspect-4/3 lg:aspect-auto rounded-[2.5rem] overflow-hidden bg-black/40 border border-white/10 order-1 lg:order-2 group-hover:border-accent/30 transition-colors'>
					<video src={getAssetPath("assets/Pulse.mp4")} autoPlay loop muted playsInline className='w-full h-full object-cover scale-[1.02] group-hover:scale-110 transition-transform duration-[2s] ease-out' />
					<div className='absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent' />
				</div>
			</div>
		</section>
	);
};

const FeaturedEcommerce = () => {
	const sectionRef = useRef<HTMLElement>(null);
	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from(".ecomm-reveal", {
				scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
				y: 50, opacity: 0, duration: 1, stagger: 0.18, ease: "power3.out"
			});
		}, sectionRef);
		return () => ctx.revert();
	}, []);

	return (
		<section ref={sectionRef} className='py-20 px-6 md:px-12 max-w-7xl mx-auto'>
			<div className='flex flex-col gap-4 mb-16 px-4 items-end text-right'>
				<span className='ecomm-reveal text-accent font-mono text-[10px] tracking-[0.4em] uppercase font-bold'>Data Analytics // 04</span>
				<h2 className='ecomm-reveal text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none text-white'>SQL Analytics</h2>
			</div>
			<div className='group relative grid lg:grid-cols-[1fr_1.2fr] gap-12 bg-white/3 border border-white/10 rounded-[4rem] overflow-hidden p-8 md:p-16 transition-all duration-700 hover:border-accent/30'>
				<div className='ecomm-reveal relative aspect-4/3 lg:aspect-auto rounded-[2.5rem] overflow-hidden bg-black/40 border border-white/10 order-1 group-hover:border-accent/30 transition-colors'>
					<video src={getAssetPath("assets/PCSP.mp4")} autoPlay loop muted playsInline className='w-full h-full object-cover scale-[1.02] group-hover:scale-110 transition-transform duration-[2s] ease-out' />
					<div className='absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-transparent' />
				</div>
				<div className='ecomm-reveal flex flex-col justify-center gap-7 order-2'>
					<div className='flex flex-wrap gap-3'>
						{["PostgreSQL", "Window Functions", "CTEs", "Cohort Analysis"].map(tag => (
							<span key={tag} className='text-[9px] font-mono uppercase tracking-widest px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent font-bold'>{tag}</span>
						))}
					</div>
					<p className='text-3xl md:text-4xl font-bold leading-tight text-white/90'>Advanced SQL engineering and <span className='text-accent italic'>EDA for commerce telemetry.</span></p>
					<p className='text-base text-white/50 leading-relaxed max-w-lg'>Complex multi-table joins, window functions (NTILE, DENSE_RANK), and LTV cohort analysis to drive business intelligence.</p>
					<a href='https://ecomm-sql.vercel.app/' target='_blank' rel='noreferrer' className='group/btn inline-flex items-center gap-4 bg-white/5 border border-accent/30 text-accent px-10 py-5 rounded-2xl font-black uppercase text-xs transition-all hover:bg-accent hover:text-black hover:border-transparent hover:scale-105 active:scale-95 self-start'>
						<span>Live Dashboard</span>
						<Icon icon='solar:arrow-right-up-linear' className='text-lg group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform' />
					</a>
				</div>
			</div>
		</section>
	);
};

interface Project { id: string; title: string; category: string; year: number; description: string; tags: string[]; link: string; video: string; }

const ProjectCard = ({ project, index }: { project: Project; index: number; }) => {
	const cardRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		gsap.to(cardRef.current, {
			scrollTrigger: { trigger: cardRef.current, start: "top 90%" },
			y: 0, opacity: 1, duration: 0.8, delay: index * 0.1,
		});
	}, [index]);

	return (
		<div ref={cardRef} className='group relative flex flex-col gap-6 p-6 rounded-[3rem] bg-white/2 border border-white/5 hover:border-accent/30 transition-all duration-700 hover:bg-white/[0.03] shadow-2xl hover:shadow-accent/5' style={{ opacity: 0, transform: "translateY(40px)" }}>
			<div className='aspect-video rounded-[2rem] overflow-hidden bg-black/40 border border-white/10 relative transition-all duration-700 group-hover:border-accent/40'>
				<video src={getAssetPath(project.video)} autoPlay loop muted playsInline className='w-full h-full object-cover opacity-30 group-hover:opacity-100 duration-[2s] scale-[1.02] group-hover:scale-110 ease-out' />
				<div className='absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity' />
				<a href={project.link} target='_blank' rel='noreferrer' className='absolute top-8 right-8 w-14 h-14 rounded-full bg-black/80 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-accent hover:text-black hover:border-accent hover:scale-110 z-20'>
					<Icon icon='solar:arrow-right-up-linear' className='text-2xl' />
				</a>
			</div>
			<div className='px-2'>
				<div className='flex items-center justify-between mb-4'>
					<div className='flex items-center gap-3'>
						<span className='text-[10px] font-mono text-accent uppercase tracking-[0.4em] font-bold'>{project.category}</span>
						<div className='h-px w-8 bg-accent/20' />
						<span className='text-[10px] font-mono text-white/20 uppercase tracking-[0.4em]'>{project.year}</span>
					</div>
				</div>
				<h3 className='text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4 text-white group-hover:text-accent transition-colors duration-500'><RollingText text={project.title} /></h3>
				<p className='text-base text-white/40 leading-relaxed font-medium mb-8 max-w-xl group-hover:text-white/60 transition-colors duration-500'>{project.description}</p>
			</div>
		</div>
	);
};

const OtherWorks = () => {
	const sectionRef = useRef<HTMLElement>(null);
	const projects: Project[] = [
		{ id: "SetLogic", title: "SetLogic Fitness", category: "HealthTech", year: 2026, description: "AI-driven fitness orchestration platform with real-time trajectory tracking.", tags: ["React 19", "Firebase", "AI"], link: "https://dte-84.github.io/SetLogic/", video: "assets/SetLogic.mp4" },
		{ id: "NestLegacy", title: "NestLegacy Shell", category: "Fintech", year: 2026, description: "Cinematic lead intelligence platform featuring wide-angle analytics.", tags: ["Next.js", "Analytics", "UX Design"], link: "https://dte-84.github.io/NestLegacy/", video: "assets/NestLegacy.mp4" },
		{ id: "KW_MODELING", title: "Key Wallis Modeling", category: "Visual Storytelling", year: 2025, description: "High-impact digital portfolio featuring immersive scroll dynamics.", tags: ["Framer Motion", "React", "GSAP"], link: "https://kw-portfolio-kappa.vercel.app/", video: "assets/KWModel.mp4" },
		{ id: "SSANTIAGO", title: "Santi's Car Sales", category: "Automotive Logic", year: 2024, description: "Interactive inventory showroom for premium pre-owned vehicles.", tags: ["React", "Inventory Logic", "Sales Engine"], link: "https://dte-84.github.io/CarSalesInv/", video: "assets/CarSales.mp4" },
	];

	return (
		<section ref={sectionRef} id='work' className='py-32 px-6 md:px-12 max-w-7xl mx-auto'>
			<div className='flex flex-col gap-4 mb-20 px-4'>
				<span className='works-header text-white/30 font-mono text-[10px] tracking-[0.4em] uppercase font-bold'>Other Deployments //</span>
				<h2 className='works-header text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none text-white'>The <span className='text-accent italic'>Archive.</span></h2>
			</div>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
				{projects.map((project, i) => (
					<ProjectCard key={project.id} project={project} index={i} />
				))}
			</div>
		</section>
	);
};

const TechStack = () => {
	const tools = [
		{ name: "TypeScript", icon: "logos:typescript-icon" },
		{ name: "React 19", icon: "logos:react" },
		{ name: "Next.js", icon: "logos:nextjs-icon" },
		{ name: "Python", icon: "logos:python" },
		{ name: "PostgreSQL", icon: "logos:postgresql" },
		{ name: "FastAPI", icon: "logos:fastapi-icon" },
		{ name: "AWS", icon: "logos:aws" },
		{ name: "Docker", icon: "logos:docker-icon" },
	];

	return (
		<section className='py-12 overflow-hidden border-y border-white/5 bg-white/[0.02]'>
			<div className='flex gap-12 items-center animate-marquee whitespace-nowrap'>
				{[...tools, ...tools].map((tool, index) => (
					<div
						key={index}
						className='flex items-center gap-3 grayscale hover:grayscale-0 transition-all opacity-40 hover:opacity-100'>
						<Icon icon={tool.icon} className='text-xl' />
						<span className='font-mono text-[10px] uppercase tracking-[0.2em] font-bold'>
							{tool.name}
						</span>
					</div>
				))}
			</div>
		</section>
	);
};

const marqueeItems = ["Data Integrity", "Full-Stack Systems", "Behavioral Tech", "Systems Engineer", "PostgreSQL", "React 19", "Python / Pandas", "DTE Solutions LLC"];

const ExperienceMarquee = () => {
	return (
		<section className='py-12 border-y border-white/5 bg-white/2 overflow-hidden whitespace-nowrap rotate--1 translate-y-12 z-50 relative'>
			<div className='flex animate-marquee'>
				{[...Array(4)].map((_, i) => (
					<div key={i} className='flex items-center gap-12 px-6'>
						{marqueeItems.map((item) => (
							<div key={item} className='flex items-center gap-4'>
								<div className='w-2 h-2 rounded-full bg-accent animate-pulse' />
								<span className='text-3xl font-black uppercase tracking-tighter text-white/20 italic hover:text-accent transition-colors cursor-default'>{item}</span>
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
					<h2 className='text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none z-20'>Connect & <span className='text-accent italic'>Collaborate.</span></h2>
					<p className='text-xl text-white font-medium z-20'>Available for strategic engineering partnerships and high-fidelity systems development.</p>
				</div>
				<div className='flex flex-wrap justify-center gap-6'>
					<button onClick={onContactClick} className='group bg-accent text-black px-12 py-6 rounded-2xl font-black uppercase text-sm transition-all hover:scale-105 active:scale-95 flex items-center gap-3'>
						<RollingText text='Connection' hoverColor='text-white' />
						<Icon icon='solar:letter-linear' className='text-xl' />
					</button>
					<a href='https://dte-84.github.io/DTE-Portfolio/assets/DrewTErnst_Resume.pdf' target='_blank' rel='noreferrer' className='bg-black/5 border border-white/10 text-white px-12 py-6 rounded-2xl font-black uppercase text-sm transition-all hover:bg-white/10 hover:border-white/20 flex items-center gap-3'>
						<RollingText text='Download Dossier' />
						<Icon icon='solar:file-download-linear' className='text-xl' />
					</a>
				</div>
				<div className='mt-12 flex flex-col items-center gap-4 z-20'>
					<div className='flex gap-8'>
						<a href='https://github.com/dte-84' target='_blank' rel='noreferrer' className='text-2xl text-white hover:text-accent transition-colors'><Icon icon='simple-icons:github' /></a>
						<a href='https://linkedin.com/in/dte84' target='_blank' rel='noreferrer' className='text-2xl text-white hover:text-accent transition-colors'><Icon icon='simple-icons:linkedin' /></a>
					</div>
					<p className='text-[10px] font-mono text-white/10 uppercase tracking-[0.5em]'>STL MO // IL Division // © 2026 DTE Solutions LLC</p>
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
				<FeaturedQuarterly />
				<FeaturedPulse />
				<FeaturedEcommerce />
				<OtherWorks />
				<About />
				<Footer onContactClick={() => setIsContactOpen(true)} />
			</div>
			<ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
		</main>
	);
}
