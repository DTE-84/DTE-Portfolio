"use client";
import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import BgAnimation from "../../components/BgAnimation";
import ContactModal from "../../components/ContactModal";

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

	return (
		<p
			ref={containerRef}
			className={`transition-all duration-1000 ease-out ${
				isVisible
					? "opacity-100 translate-y-0"
					: `opacity-0 ${isReverse ? "-translate-y-4" : "translate-y-4"}`
			}`}
		>
			{text}
		</p>
	);
};

const Hero = ({ onContactClick }: { onContactClick: () => void }) => {
	const highlights = [
		"Real-World Operations",
		"Compliance-Aware Design",
		"Full-Stack Systems",
		"Data Analysis",
	];

	const quickLinks = [
		{
			label: "Portfolio",
			href: "https://dte-84.github.io/DTE-Portfolio/",
		},
		{
			label: "GitHub",
			href: "https://github.com/dte-84",
		},
		{
			label: "LinkedIn",
			href: "https://linkedin.com/in/dte84",
		},
		{
			label: "Resume",
			href: "/DTE-Portfolio/assets/DrewTErnst_Resume.pdf",
		},
	];

	return (
		<section className='pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto'>
			<div className='grid lg:grid-cols-[minmax(0,1.5fr)_minmax(280px,420px)] gap-12 items-start'>
				<div className='flex flex-col gap-6'>
					<span className='text-accent font-mono text-xs tracking-[0.5em] uppercase font-bold'>
						Data Analyst // Full-Stack Developer
					</span>
					<h1 className='text-6xl md:text-9xl font-black tracking-tighter leading-none uppercase'>
						Drew T
						<br />
						<span className='text-white/20 italic'>Ernst.</span>
					</h1>
					<div className='max-w-2xl mt-8'>
						<RevealText text='I build useful software for real people — especially workflow tools, behavioral products, and data-driven web apps that reduce friction and solve real problems.' />
					</div>
				</div>

				<div className='lg:pt-10'>
					<div className='bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-sm'>
						<p className='text-[10px] font-mono text-accent uppercase tracking-[0.35em] mb-6'>
							Highlights
						</p>
						<div className='flex flex-col divide-y divide-white/10'>
							{highlights.map((highlight) => (
								<div
									key={highlight}
									className='py-4 first:pt-0 last:pb-0 flex items-center justify-between gap-4'
								>
									<span className='text-lg md:text-xl font-semibold tracking-tight text-white/90'>
										{highlight}
									</span>
									<Icon
										icon='solar:arrow-right-up-linear'
										className='text-accent text-lg shrink-0 opacity-70'
									/>
								</div>
							))}
						</div>
						<p className='text-sm text-zinc-500 leading-relaxed mt-8'>
							Built for useful outcomes, not just polished demos.
						</p>
						<div className='flex flex-wrap gap-3 mt-8 pt-6 border-t border-white/10'>
							{quickLinks.map((link) => (
								<a
									key={link.label}
									href={link.href}
									target={link.href.startsWith("http") ? "_blank" : undefined}
									rel={link.href.startsWith("http") ? "noreferrer" : undefined}
									className='inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 text-xs font-mono uppercase tracking-[0.2em] text-white/70 hover:text-accent hover:border-accent/40 transition-all'
								>
									<span>{link.label}</span>
									<Icon icon='solar:arrow-right-up-linear' className='text-sm' />
								</a>
							))}
							<button
								onClick={onContactClick}
								className='inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-accent/30 text-xs font-mono uppercase tracking-[0.2em] text-accent hover:bg-accent/10 hover:border-accent/50 transition-all'
							>
								<span>Contact</span>
								<Icon icon='solar:letter-linear' className='text-sm' />
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

type Project = {
	id: string;
	title: string;
	category: string;
	year: number;
	description: string;
	tags: string[];
	link: string;
	video?: string;
};

interface ProjectCardProps {
	project: Project;
	index: number;
	property?: string;
	year?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
	return (
		<div className='flex flex-col gap-6'>
			<div className='group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all hover:border-accent/50'>
				{project.video && (
					<div className='relative aspect-video overflow-hidden bg-black'>
						<video
							src={project.video}
							className='w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500'
							autoPlay
							loop
							muted
							playsInline
						/>
					</div>
				)}

				<div className='flex flex-col gap-6 p-6'>
					<div className='flex justify-between items-start'>
						<div>
							<span className='text-[10px] font-mono text-accent uppercase tracking-widest mb-2 block'>
								{project.category} // {project.year}
							</span>
							<h3 className='text-2xl font-bold uppercase tracking-tight group-hover:text-accent transition-colors'>
								{project.title}
							</h3>
						</div>
						<a
							href={project.link}
							target='_blank'
							rel='noreferrer'
							className='text-white/40 hover:text-accent transition-colors'
						>
							<Icon icon='solar:arrow-right-up-linear' className='text-2xl' />
						</a>
					</div>
					<p className='text-sm text-zinc-400 leading-relaxed line-clamp-3'>
						{project.description}
					</p>
					<div className='flex flex-wrap gap-2'>
						{project.tags.map((tag) => (
							<span
								key={tag}
								className='text-[9px] font-mono uppercase tracking-widest px-2 py-1 bg-white/5 border border-white/5 rounded text-zinc-500'
							>
								{tag}
							</span>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

const projects: Project[] = [
	{
		id: "PCSP",
		title: "PCSP Assistant Pro",
		category: "Case Study",
		year: 2026,
		description:
			"HIPAA-sensitive clinical documentation tool built to streamline Missouri PCSP drafting, improve first-pass compliance quality, and reduce workflow friction for frontline staff.",
		tags: ["JavaScript", "HIPAA", "Workflow Design", "Compliance"],
		link: "https://dte-solutions.icu/pcsp-breakdown.html",
		video: "/DTE-Portfolio/assets/PCSP.mp4",
	},
	{
		id: "Pulse",
		title: "Pulse - Behavioral Finance App",
		category: "Analytics Product",
		year: 2026,
		description:
			"Behavioral finance application built to help users recognize spending triggers, understand habit patterns, and track progress toward long-term financial goals.",
		tags: ["Python", "PostgreSQL", "Behavioral Analytics", "ETL"],
		link: "https://dte-solutions.icu/pulse-breakdown.html",
		video: "/DTE-Portfolio/assets/Pulse.mp4",
	},
	{
		id: "SetLogic",
		title: "SetLogic - AI Fitness Planning App",
		category: "Health & Fitness",
		year: 2026,
		description:
			"Mobile-first fitness app designed to generate personalized workout plans, meal guidance, and progress support based on user goals and preferences.",
		tags: ["React", "Firebase", "Fitness Planning", "AI Coaching"],
		link: "https://dte-84.github.io/SetLogic/",
		video: "/DTE-Portfolio/assets/SetLogic.mp4",
	},
	{
		id: "NestLegacy",
		title: "NestLegacy - Lead Intelligence Platform",
		category: "Fintech Concept",
		year: 2026,
		description:
			"Behavior-driven lead intelligence concept designed to help financial professionals better understand, qualify, and engage high-value prospects.",
		tags: ["React", "Fintech", "Lead Qualification", "Product Strategy"],
		link: "https://dte-84.github.io/NestLegacy/",
		video: "/DTE-Portfolio/assets/NestLegacy.mp4",
	},
	{
		id: "Fluff",
		title: "Fluff - Golf Performance Analysis Platform",
		category: "Sports Tech",
		year: 2026,
		description:
			"Sports performance tool combining GPS, round analysis, and coaching support to help golfers review play and improve results.",
		tags: ["React", "Sports Analytics", "GPS", "Coaching"],
		link: "https://dte-84.github.io/Fluff/",
		video: "/DTE-Portfolio/assets/Fluff.mp4",
	},
	{
		id: "TONYS",
		title: "Landscaping Logic",
		category: "Business Website",
		year: 2026,
		description:
			"Service business website focused on clear presentation, responsive design, and practical customer-facing usability.",
		tags: ["Vanilla JS", "Responsive Design", "UI/UX"],
		link: "https://tonyslandscapingllc.com",
		video: "/DTE-Portfolio/assets/TonysLandscaping.mp4",
	},
];

const Work = () => {
	return (
		<section
			id='work'
			className='py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5'
		>
			<div className='flex flex-col gap-12'>
				<h2 className='text-4xl font-black uppercase tracking-tighter'>
					Selected <span className='text-accent italic'>Works.</span>
				</h2>
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{projects.map((project, index) => (
						<ProjectCard
							key={project.id}
							project={project}
							index={index}
							property={project.title}
							year={project.year}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

const About: React.FC = () => {
	return (
		<section
			id='about'
			className='py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5'
		>
			<div className='grid md:grid-cols-2 gap-16'>
				<div className='flex flex-col gap-8'>
					<h2 className='text-4xl font-black uppercase tracking-tighter'>
						The <span className='text-accent italic'>Philosophy.</span>
					</h2>
					<p className='text-lg text-zinc-400 leading-relaxed'>
						I like building systems that bridge the gap between high-level engineering and strategic marketing. Every line of code is a communicative act; every UI pattern is a behavioral prompt.
					</p>
					<p className='text-zinc-500 leading-relaxed'>
					With a background in Communications and Marketing, I approach software not just as a technical challenge, but as a mechanism for trust acquisition and data integrity.
					</p>
				</div>
				<div className='bg-white/5 border border-white/10 rounded-3xl p-8 grid sm:grid-cols-2 gap-8'>
					<div className='flex items-center gap-4'>
						<div className='w-12 h-12 rounded-full border border-accent flex items-center justify-center shrink-0'>
							<Icon
								icon='solar:globus-linear'
								className='text-2xl text-accent'
							/>
						</div>
						<div>
							<h4 className='font-bold uppercase tracking-tight text-sm'>
								Workflow Systems
							</h4>
							<p className='text-[10px] text-zinc-500 uppercase tracking-widest'>
								Global Ready
							</p>
						</div>
					</div>
					<div className='flex items-center gap-4'>
						<div className='w-12 h-12 rounded-full border border-accent flex items-center justify-center shrink-0'>
							<Icon
								icon='solar:shield-check-linear'
								className='text-2xl text-accent'
							/>
						</div>
						<div>
							<h4 className='font-bold uppercase tracking-tight text-sm'>
								Compliance-Aware Builds
							</h4>
							<p className='text-[10px] text-zinc-500 uppercase tracking-widest'>
								Privacy and workflow focused
							</p>
						</div>
					</div>
					<div className='flex items-center gap-4'>
						<div className='w-12 h-12 rounded-full border border-accent flex items-center justify-center shrink-0'>
							<Icon
								icon='solar:brain-linear'
								className='text-2xl text-accent'
							/>
						</div>
						<div>
							<h4 className='font-bold uppercase tracking-tight text-sm'>
								Behavioral Products
							</h4>
							<p className='text-[10px] text-zinc-500 uppercase tracking-widest'>
								Insight-driven product thinking
							</p>
						</div>
					</div>
					<div className='flex items-center gap-4'>
						<div className='w-12 h-12 rounded-full border border-accent flex items-center justify-center shrink-0'>
							<Icon
								icon='solar:chat-round-line-linear'
								className='text-2xl text-accent'
							/>
						</div>
						<div>
							<h4 className='font-bold uppercase tracking-tight text-sm'>
								Strategic PR
							</h4>
							<p className='text-[10px] text-zinc-500 uppercase tracking-widest'>
								Narrative Design
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

const ToolsOfTheTrade = () => {
	const tools = [
		{ name: "TypeScript", icon: "logos:typescript-icon" },
		{ name: "React 19", icon: "logos:react" },
		{ name: "Next.js", icon: "logos:nextjs-icon" },
		{ name: "Python", icon: "logos:python" },
		{ name: "FastAPI", icon: "logos:fastapi-icon" },
		{ name: "AWS", icon: "logos:aws" },
		{ name: "Docker", icon: "logos:docker-icon" },
		{ name: "MongoDB", icon: "logos:mongodb-icon" },
	];

	return (
		<section className='py-12 overflow-hidden border-y border-white/5 bg-white/[0.02]'>
			<div className='flex gap-12 items-center animate-marquee whitespace-nowrap'>
				{[...tools, ...tools].map((tool, index) => (
					<div
						key={index}
						className='flex items-center gap-3 grayscale hover:grayscale-0 transition-all opacity-40 hover:opacity-100'
					>
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

const Footer = ({ onContactClick }: { onContactClick: () => void }) => {
	return (
		<footer className='py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5'>
			<div className='flex flex-col md:flex-row justify-between items-center gap-12'>
				<div className='flex flex-col gap-4 text-center md:text-left'>
					<h2 className='text-3xl font-black uppercase tracking-tighter italic text-accent'>
						Let&apos;s Link Up.
					</h2>
					<p className='text-zinc-500 text-sm'>
						STL MO // IL Division // © 2026 DTE Solutions
					</p>
				</div>
				<div className='flex gap-6'>
					<button
						onClick={onContactClick}
						className='px-8 py-4 bg-accent text-black font-black uppercase text-xs rounded-xl hover:scale-105 transition-all'
					>
						Direct Contact
					</button>
					<a
						href='/DTE-Portfolio/assets/DrewTErnst_Resume.pdf'
						target='_blank'
						rel='noreferrer'
						className='px-8 py-4 border border-white/10 text-white font-black uppercase text-xs rounded-xl hover:bg-white/5 transition-all'
					>
						Resume
					</a>
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
			<div className='relative z-10'>
				<Hero onContactClick={() => setIsContactOpen(true)} />
				<ToolsOfTheTrade />
				<Work />
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
