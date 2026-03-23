"use client";
import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BgAnimation from "../../components/BgAnimation";
import ContactModal from "../../components/ContactModal";
import RollingText from "../../components/RollingText";

if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger);
}

const Nav = ({ onContactClick }: { onContactClick: () => void }) => {
	return (
		<nav className='fixed top-0 left-0 right-0 z-[100] px-6 py-6'>
			<div className='max-w-7xl mx-auto flex justify-between items-center bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3'>
				<div className='flex items-center gap-3'>
					<img src='/DTELogo.png' alt='DTE' className='w-8 h-8 opacity-80' />
					<span className='font-mono text-[9px] tracking-tighter uppercase font-bold text-white/30'>
						System Orchestrator
					</span>
				</div>
				<div className='flex items-center gap-8'>
					<div className='hidden md:flex items-center gap-6'>
						{["Work", "About"].map((item) => (
							<a
								key={item}
								href={`#${item.toLowerCase()}`}
								className='text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 hover:text-accent transition-colors'>
								<RollingText text={item} />
							</a>
						))}
					</div>
					<button
						onClick={onContactClick}
						className='group flex items-center gap-2 bg-accent/10 hover:bg-accent border border-accent/20 hover:border-accent text-accent hover:text-black px-4 py-2 rounded-xl transition-all duration-300'>
						<span className='text-[10px] font-mono uppercase tracking-widest font-bold'>
							Direct Uplink
						</span>
						<Icon icon='solar:letter-linear' className='text-sm group-hover:translate-x-1 transition-transform' />
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
			gsap.from(".hero-line", {
				y: 100,
				opacity: 0,
				duration: 1.2,
				stagger: 0.15,
				ease: "power4.out",
			});
			gsap.from(".hero-highlight", {
				scale: 0.9,
				opacity: 0,
				duration: 1.5,
				delay: 0.5,
				ease: "expo.out",
			});
		}, containerRef);
		return () => ctx.revert();
	}, []);

	return (
		<section ref={containerRef} className='relative min-h-screen flex flex-col justify-center pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto'>
			<div className='grid lg:grid-cols-[1.5fr_1fr] gap-12 items-center'>
				<div className='flex flex-col gap-8'>
					<div className='hero-line overflow-hidden'>
						<span className='text-offset font-mono text-[10px] tracking-[0.5em] uppercase font-bold block mb-4 animate-pulse'>
							Advanced Financial AI Consultant
						</span>
					</div>
					<h1 className='text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.85] uppercase text-white'>
						<div className='hero-line'>DREW T</div>
						<div className='hero-line opacity-10 italic'>ERNST.</div>
					</h1>
					<div className='hero-line max-w-2xl mt-8'>
						<p className='text-xl md:text-2xl text-white/60 leading-relaxed font-medium'>
							I blend backend <span className='text-accent'>data integrity</span> with user-centric design.
							Transforming raw information into high-impact, functional products.
						</p>
					</div>
				</div>

				<div className='hero-highlight relative'>
					<div className='aspect-square rounded-full border border-white/5 bg-gradient-to-br from-accent/10 to-transparent p-[1px] animate-float'>
						<div className='w-full h-full rounded-full border border-white/10 bg-black/40 backdrop-blur-3xl flex flex-col items-center justify-center p-12 text-center'>
							<p className='text-[10px] font-mono text-offset uppercase tracking-[0.4em] mb-4'>
								Philosophy
							</p>
							<p className='text-lg font-medium text-white/90 leading-tight italic'>
								"I like building systems that bridge the gap between high-level engineering and strategic marketing."
							</p>
							<div className='w-12 h-[1px] bg-accent/30 my-6' />
							<p className='text-[11px] text-white/40 leading-relaxed uppercase tracking-widest'>
								Every line of code is a communicative act; every UI pattern is a behavioral prompt.
							</p>
						</div>
					</div>
				</div>
			</div>
			
			<div className='absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 animate-bounce'>
				<span className='text-[8px] font-mono uppercase tracking-[0.3em]'>System Discovery</span>
				<Icon icon='solar:mouse-minimalistic-linear' className='text-xl' />
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
		<section ref={sectionRef} id='work' className='py-32 px-6 md:px-12 max-w-7xl mx-auto'>
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
							<span key={tag} className='text-[9px] font-mono uppercase tracking-widest px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent font-bold'>
								{tag}
							</span>
						))}
					</div>
					<p className='text-4xl font-bold leading-tight text-white/90'>
						"Streamlining Missouri PCSP workflow through <span className='text-offset italic'>deterministic data integrity.</span>"
					</p>
					<p className='text-lg text-white/50 leading-relaxed max-w-xl'>
						A high-fidelity clinical documentation engine built to reduce friction for frontline healthcare staff. 
						This tool automates compliant drafting while ensuring HIPAA-sensitive data remains secure and structured.
					</p>
					<div className='flex items-center gap-8 mt-4'>
						<a href='https://dte-solutions.icu/pcsp-breakdown.html' target='_blank' rel='noreferrer' className='group/btn flex items-center gap-4 bg-accent text-black px-10 py-5 rounded-2xl font-black uppercase text-xs transition-all hover:scale-105 active:scale-95'>
							<span>Deep Dive Breakdown</span>
							<Icon icon='solar:arrow-right-up-linear' className='text-lg group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform' />
						</a>
						<div className='flex flex-col'>
							<span className='text-[9px] font-mono text-white/20 uppercase tracking-[0.2em]'>Protocol Status</span>
							<span className='text-xs font-black text-offset uppercase flex items-center gap-2'>
								<div className='w-1.5 h-1.5 rounded-full bg-offset animate-ping' />
								Production Ready
							</span>
						</div>
					</div>
				</div>

				<div className='pcsp-reveal relative aspect-[4/3] lg:aspect-auto rounded-[2.5rem] overflow-hidden bg-black/40 border border-white/10 order-1 lg:order-2 group-hover:border-accent/30 transition-colors'>
					<video
						src='/DTE-Portfolio/assets/PCSP.mp4'
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

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
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
		<div ref={cardRef} className='group relative flex flex-col gap-6 p-4 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-accent/20 transition-all duration-500'>
			<div className='aspect-video rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 relative transition-all duration-500 group-hover:border-accent/30'>
				<video
					src={project.video}
					autoPlay
					loop
					muted
					playsInline
					className='w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-opacity duration-700 scale-[1.01] group-hover:scale-110 transition-transform duration-[3s]'
				/>
				<div className='absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors' />
				<a href={project.link} target='_blank' rel='noreferrer' className='absolute top-6 right-6 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-accent hover:text-black hover:border-accent'>
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
	const projects: Project[] = [
		{
			id: "Pulse",
			title: "Pulse Behavioral AI",
			category: "Analytics",
			year: 2026,
			description: "Full-stack behavioral finance pipeline with Python/Pandas telemetry and Postgres persistence.",
			tags: ["Python", "Pandas", "PostgreSQL"],
			link: "https://dte-solutions.icu/pulse-breakdown.html",
			video: "/DTE-Portfolio/assets/Pulse.mp4",
		},
		{
			id: "SetLogic",
			title: "SetLogic Fitness",
			category: "HealthTech",
			year: 2026,
			description: "AI-driven fitness orchestration platform with real-time trajectory tracking.",
			tags: ["React", "Firebase", "AI"],
			link: "https://dte-84.github.io/SetLogic/",
			video: "/DTE-Portfolio/assets/SetLogic.mp4",
		},
		{
			id: "NestLegacy",
			title: "NestLegacy Shell",
			category: "Fintech",
			year: 2026,
			description: "Cinematic lead intelligence platform featuring wide-angle analytics.",
			tags: ["Analytics", "Fintech", "UX"],
			link: "https://dte-84.github.io/NestLegacy/",
			video: "/DTE-Portfolio/assets/NestLegacy.mp4",
		},
	];

	return (
		<section className='py-32 px-6 md:px-12 max-w-7xl mx-auto'>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
				{projects.map((project, i) => (
					<ProjectCard key={project.id} project={project} index={i} />
				))}
			</div>
		</section>
	);
};

const marqueeItems = [
	"Data Integrity", "Full-Stack Systems", "Behavioral Tech", "Senior Systems Engineer", 
	"PostgreSQL", "React 19", "Python / Pandas", "DTE Solutions LLC"
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
				<img src='/DTELogo.png' alt='DTE' className='w-24 h-24 opacity-80' />
				<div className='max-w-3xl flex flex-col gap-6'>
					<h2 className='text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none'>
						Ready for the <span className='text-accent italic'>Uplink?</span>
					</h2>
					<p className='text-xl text-white/40 font-medium'>
						Available for strategic engineering partnerships and high-fidelity systems development.
					</p>
				</div>
				<div className='flex flex-wrap justify-center gap-6'>
					<button onClick={onContactClick} className='group bg-accent text-black px-12 py-6 rounded-2xl font-black uppercase text-sm transition-all hover:scale-105 active:scale-95 flex items-center gap-3'>
						<RollingText text='Direct Uplink' hoverColor='text-white' />
						<Icon icon='solar:letter-linear' className='text-xl' />
					</button>
					<a href='https://dte-84.github.io/DTE-Portfolio/assets/DrewTErnst_Resume.pdf' target='_blank' rel='noreferrer' className='bg-white/5 border border-white/10 text-white px-12 py-6 rounded-2xl font-black uppercase text-sm transition-all hover:bg-white/10 hover:border-white/20 flex items-center gap-3'>
						<RollingText text='Download Dossier' />
						<Icon icon='solar:file-download-linear' className='text-xl' />
					</a>
				</div>
				<div className='mt-12 flex flex-col items-center gap-4'>
					<div className='flex gap-8'>
						<a href='https://github.com/dte-84' target='_blank' rel='noreferrer' className='text-2xl text-white/20 hover:text-accent transition-colors'>
							<Icon icon='simple-icons:github' />
						</a>
						<a href='https://linkedin.com/in/dte84' target='_blank' rel='noreferrer' className='text-2xl text-white/20 hover:text-accent transition-colors'>
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
		<main className='bg-black min-h-screen text-white selection:bg-accent selection:text-black antialiased font-space relative overflow-hidden'>
			<BgAnimation />
			<Nav onContactClick={() => setIsContactOpen(true)} />
			<div className='relative z-10'>
				<Hero />
				<ExperienceMarquee />
				<FeaturedPCSP />
				<OtherWorks />
				<Footer onContactClick={() => setIsContactOpen(true)} />
			</div>

			<ContactModal
				isOpen={isContactOpen}
				onClose={() => setIsContactOpen(false)}
			/>
		</main>
	);
}
