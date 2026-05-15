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
							Full-Stack
						</span>
					</div>
				</div>
				<div className='flex items-center gap-10'>
					<div className='hidden md:flex items-center gap-12'>
						{[
							{ id: "01", name: "Flagship", href: "#flagship", color: "#00f3ff" },
							{ id: "02", name: "Systems", href: "#work", color: "#39ff14" },
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
							Contact
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

const Hero = ({ onContactClick }: { onContactClick: () => void }) => {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
			tl.addLabel("contentReveal", 0);
			tl.fromTo(".hero-logo", { scale: 0.8, opacity: 0, x: -30 }, { scale: 1, opacity: 1, x: 0, duration: 1.5 }, "contentReveal");
			tl.fromTo(".hero-char", { y: 90, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, stagger: 0.04 }, "contentReveal+=0.3");
			tl.fromTo(".hero-sub", { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 1.0, stagger: 0.15 }, "contentReveal+=0.8");
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
					<h1 className='font-orbitron font-black uppercase tracking-tighter leading-none text-white mb-4' style={{ fontSize: "clamp(3.2rem, 8vw, 7.5rem)" }}>
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
						Data Analyst &nbsp;//&nbsp; Full-Stack Capability
					</p>
					<div className='hero-sub max-w-xl bg-white/2.5 backdrop-blur-md border border-white/6 px-7 py-6 rounded-3xl relative overflow-hidden group mb-10' style={{ opacity: 0 }}>
						<p className='text-base md:text-lg text-white/75 leading-relaxed font-medium italic'>
							I build <span className='text-accent not-italic font-bold'>secure, data-driven systems</span> and real-world applications — turning raw data into usable architecture and clear insights.
						</p>
					</div>
					<div className='hero-sub flex flex-col sm:flex-row items-center gap-4' style={{ opacity: 0 }}>
						<a href='#flagship' className='group flex items-center gap-3 bg-accent text-black px-8 py-4 rounded-2xl font-black uppercase text-[11px] tracking-[0.25em] transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(var(--theme-accent-rgb),0.35)]'>
							<RollingText text='View Work' hoverColor='text-white' />
							<Icon icon='solar:arrow-right-down-linear' className='text-base group-hover:translate-y-1 transition-transform' />
						</a>
						<a href='#work' className='group flex items-center gap-3 bg-white/4 border border-white/10 text-white/60 px-8 py-4 rounded-2xl font-black uppercase text-[11px] tracking-[0.25em] transition-all duration-300 hover:bg-white/8 hover:border-white/20 hover:text-white'>
							<RollingText text='View Systems' />
						</a>
						<button onClick={onContactClick} className='group flex items-center gap-3 bg-white/4 border border-white/10 text-white/60 px-8 py-4 rounded-2xl font-black uppercase text-[11px] tracking-[0.25em] transition-all duration-300 hover:bg-white/8 hover:border-white/20 hover:text-white'>
							<RollingText text='Contact' />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

const StrengthsArchitecture = () => {
	const strengths = [
		{ id: "01", title: "Data Understanding", body: "Interpreting complex variables to find deterministic patterns.", icon: "solar:database-linear" },
		{ id: "02", title: "Systems Execution", body: "Engineering robust, full-stack backends for real-world utility.", icon: "solar:cpu-linear" },
		{ id: "03", title: "UI Communications", body: "Translating technical telemetry into high-fidelity visual clarity.", icon: "solar:graph-new-linear" }
	];

	return (
		<section className='py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5'>
			<div className='grid md:grid-cols-3 gap-12'>
				{strengths.map((s) => (
					<div key={s.id} className='group p-10 rounded-[3rem] bg-white/2 border border-white/5 hover:border-accent/30 transition-all'>
						<div className='w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform'>
							<Icon icon={s.icon} className='text-3xl text-accent' />
						</div>
						<span className='block font-mono text-[10px] text-accent/50 uppercase tracking-[0.4em] mb-4'>{s.id} // Strength</span>
						<h3 className='text-2xl font-black uppercase tracking-tighter text-white mb-4'>{s.title}</h3>
						<p className='text-white/40 leading-relaxed'>{s.body}</p>
					</div>
				))}
			</div>
		</section>
	);
};

const tagIcons: Record<string, string> = {
	"PostgreSQL": "logos:postgresql",
	"React 19": "logos:react",
	"Next.js": "logos:nextjs-icon",
	"TypeScript": "logos:typescript-icon",
	"Python": "logos:python",
	"FastAPI": "logos:fastapi-icon",
	"Gemini Pro": "logos:google-gemini",
	"AES-256": "solar:shield-keyhole-bold-duotone",
	"HIPAA": "solar:health-linear",
	"Analytics": "solar:chart-2-linear",
	"Window Fns": "solar:database-linear",
	"IoT Sync": "solar:globus-linear",
	"Geospatial": "solar:map-point-linear",
	"Audit Logic": "solar:clipboard-check-linear",
	"Systems": "solar:settings-linear",
	"GSAP": "logos:gsap-icon",
	"Architecture": "solar:structure-linear",
	"Game Design": "solar:gamepad-linear",
	"REST API": "solar:server-square-linear",
	"Search": "solar:magnifer-linear",
	"Vanilla JS": "logos:javascript",
	"CSS3": "logos:css-3",
	"Asymmetric Grid": "solar:grid-linear",
	"SEO": "solar:magnifer-zoom-in-linear",
	"Ecosystem": "solar:globus-linear",
};

const FlagshipBuilds = () => {
	const sectionRef = useRef<HTMLElement>(null);
	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from(".flagship-reveal", {
				scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
				y: 50, opacity: 0, duration: 1, stagger: 0.2, ease: "power3.out"
			});
		}, sectionRef);
		return () => ctx.revert();
	}, []);

	const builds = [
		{ id: "Pulse", title: "Pulse Behavioral AI", tags: ["FastAPI", "React 19", "PostgreSQL"], desc: "High-fidelity financial dashboard utilizing behavioral psychology signals and predictive telemetry.", link: "https://dte-solutions.icu/pulse-breakdown.html", video: "assets/Pulse.mp4" },
		{ id: "PCSP", title: "PCSP Assistant Pro", tags: ["Next.js", "AES-256", "HIPAA"], desc: "Deterministic documentation engine (v3.0) hardened with AES-GCM 256-bit encryption for HIPAA compliance.", link: getAssetPath("case-study-pcsp"), video: "assets/PCSP.mp4" },
		{ id: "SQL", title: "SQL Analytics Engine", tags: ["PostgreSQL", "Analytics", "Window Fns"], desc: "Advanced engineering for commerce telemetry using window functions, CTEs, and high-fidelity cohort analysis.", link: "https://dte-84.github.io/ecommSQL/", video: "assets/ecommSQL.mp4" },
		{ id: "Hub", title: "DTE Solutions Hub", tags: ["PostgreSQL", "Analytics", "Window Fns", "Ecosystem"], desc: "Central nexus for the DTE Ecosystem, orchestrating the 'Big Three' focus products via high-fidelity behavioral pipelines.", link: "https://dte-solutions.icu", video: "assets/dte-solutionspreview.mp4" }
	];

	return (
		<section ref={sectionRef} id='flagship' className='py-32 px-6 md:px-12 max-w-7xl mx-auto'>
			<div className='flex flex-col gap-4 mb-20 px-4'>
				<span className='flagship-reveal text-offset font-mono text-[10px] tracking-[0.4em] uppercase font-bold text-accent'>Principal Architecture //</span>
				<h2 className='flagship-reveal text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none text-white'>Flagship <span className='text-accent italic'>Builds.</span></h2>
			</div>
			<div className='grid gap-12'>
				{builds.map((build, i) => (
					<div key={build.id} className='group relative grid lg:grid-cols-[1.2fr_1fr] gap-12 bg-white/3 border border-white/10 rounded-[4rem] overflow-hidden p-8 md:p-16 transition-all duration-700 hover:border-accent/40'>
						<div className='flagship-reveal flex flex-col justify-center gap-8 order-2 lg:order-1'>
							<div className='flex flex-wrap gap-3'>
								{build.tags.map(tag => {
									const icon = tagIcons[tag];
									return (
										<span key={tag} className='flex items-center gap-2 text-[9px] font-mono uppercase tracking-widest px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent font-bold'>
											{icon && <Icon icon={icon} className="text-xs" />}
											{tag}
										</span>
									);
								})}
							</div>
							<h3 className='text-4xl md:text-5xl font-black uppercase tracking-tighter text-white group-hover:text-accent transition-colors'>{build.title}</h3>
							<p className='text-lg text-white/50 leading-relaxed max-w-xl'>{build.desc}</p>
							<a href={build.link} className='group/btn inline-flex items-center gap-4 bg-accent text-black px-10 py-5 rounded-2xl font-black uppercase text-xs transition-all hover:scale-105 active:scale-95 self-start'>
								<span>System Deep Dive</span>
								<Icon icon='solar:arrow-right-up-linear' className='text-lg group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform' />
							</a>
						</div>
						<div className='flagship-reveal relative aspect-video lg:aspect-auto rounded-[2.5rem] overflow-hidden bg-black/40 border border-white/10 order-1 lg:order-2 group-hover:border-accent/30 transition-colors'>
							<video src={getAssetPath(build.video)} autoPlay loop muted playsInline className='w-full h-full object-cover scale-[1.02] group-hover:scale-110 transition-transform duration-[2s] ease-out' />
							<div className='absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent' />
						</div>
					</div>
				))}
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
				<div className='flex flex-wrap gap-2'>
					{project.tags.map(tag => {
						const icon = tagIcons[tag];
						return (
							<span key={tag} className='flex items-center gap-2 text-[8px] font-mono uppercase tracking-widest px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/40 font-bold group-hover:border-accent/30 group-hover:text-white/60 transition-colors'>
								{icon && <Icon icon={icon} className="text-[10px] text-accent/50 group-hover:text-accent" />}
								{tag}
							</span>
						);
					})}
				</div>
			</div>
		</div>
	);
};

const OtherWorks = () => {
	const sectionRef = useRef<HTMLElement>(null);
	const projects: Project[] = [
		{ id: "Hub", title: "DTE Solutions Hub", category: "Corporate Ecosystem", year: 2026, description: "Central nexus for the DTE Ecosystem, orchestrating the 'Big Three' focus products via high-fidelity behavioral pipelines.", tags: ["PostgreSQL", "Analytics", "Window Fns", "Ecosystem"], link: "https://dte-solutions.icu", video: "assets/dte-solutionspreview.mp4" },
		{ id: "ProDip", title: "Pro Dip LLC", category: "Commercial Aesthetics", year: 2025, description: "High-performance automotive aesthetics hub featuring asymmetric CSS grids and zero-dependency architecture.", tags: ["PostgreSQL", "Analytics", "Window Fns", "Vanilla JS"], link: "https://dte-84.github.io/ProDip/", video: "assets/ProDippreview.mp4" },
		{ id: "Nest", title: "NestLegacy Shell", category: "Enterprise Fintech", year: 2026, description: "Digital trust layer for the $84 trillion wealth transfer using AI lead intelligence.", tags: ["React 19", "Architecture"], link: "https://dte-84.github.io/NestLegacy/", video: "assets/NestLegacy.mp4" },
		{ id: "Quarterly", title: "Quarterly Pro", category: "Audit Resilience", year: 2026, description: "Deterministic validation engine for Missouri DMH compliance reporting.", tags: ["Audit Logic", "Systems"], link: getAssetPath("case-study-quarterly"), video: "assets/PCSP.mp4" },
		{ id: "Fluff", title: "Fluff Telemetry", category: "Performance Analytics", year: 2026, description: "Multi-source telemetry suite orchestrating real-time GPS and biometrics.", tags: ["IoT Sync", "Geospatial"], link: "https://dte-84.github.io/Fluff/", video: "assets/Fluff.mp4" },
		{ id: "Tonys", title: "Landscaping Logic", category: "Commercial UI", year: 2026, description: "Custom interactive engine for visual data comparison and quote logic.", tags: ["GSAP", "Architecture"], link: "https://tonyslandscapingllc.com", video: "assets/Tonysllc.mp4" },
		{ id: "SiKnight", title: "SiKnight Hub", category: "Interactive Media", year: 2026, description: "High-engagement gaming portal featuring real-time leaderboard and virtual currency.", tags: ["React 19", "Game Design"], link: "https://dte-84.github.io/SiKnight/", video: "assets/siknight.mp4" },
		{ id: "Inventory", title: "Inventory Discovery", category: "Automotive SaaS", year: 2025, description: "Marketplace interface optimized for complex search heuristics and high-speed filtering.", tags: ["REST API", "Search"], link: "https://dte-84.github.io/CarSalesInv/", video: "assets/CarSales.mp4" },
	];

	return (
		<section ref={sectionRef} id='work' className='py-32 px-6 md:px-12 max-w-7xl mx-auto'>
			<div className='flex flex-col gap-4 mb-20 px-4'>
				<span className='works-header text-white/30 font-mono text-[10px] tracking-[0.4em] uppercase font-bold'>The Systems Portfolio //</span>
				<h2 className='works-header text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none text-white'>Systems <span className='text-accent italic'>Archive.</span></h2>
			</div>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
				{projects.map((project, i) => (
					<ProjectCard key={project.id} project={project} index={i} />
				))}
			</div>
		</section>
	);
};

const ExperienceMarquee = () => {
	const marqueeItems = ["Data Integrity", "Full-Stack Systems", "Behavioral Tech", "Systems Engineer", "PostgreSQL", "React 19", "Python / Pandas", "DTE Solutions LLC"];
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
					<p className='text-xl text-white font-medium z-20'>Available for strategic engineering partnerships and high-fidelity data systems development.</p>
				</div>
				<div className='flex flex-wrap justify-center gap-6'>
					<button onClick={onContactClick} className='group bg-accent text-black px-12 py-6 rounded-2xl font-black uppercase text-sm transition-all hover:scale-105 active:scale-95 flex items-center gap-3'>
						<RollingText text='Initiate Contact' hoverColor='text-white' />
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
				<Hero onContactClick={() => setIsContactOpen(true)} />
				<StrengthsArchitecture />
				<ExperienceMarquee />
				<FlagshipBuilds />
				<OtherWorks />
				<About />
				<Footer onContactClick={() => setIsContactOpen(true)} />
			</div>
			<ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
		</main>
	);
}
