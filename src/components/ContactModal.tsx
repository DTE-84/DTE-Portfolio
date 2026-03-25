import React, { useRef, useState, useEffect } from "react";
import { Icon } from "@iconify/react";

interface ContactModalProps {
	isOpen: boolean;
	onClose: () => void;
}

declare global {
	interface Window {
		emailjs: {
			sendForm: (
				serviceID: string,
				templateID: string,
				form: HTMLFormElement,
				publicKey: string,
			) => Promise<void>;
		};
	}
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
	const formRef = useRef<HTMLFormElement>(null);
	const [isSending, setIsSending] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);

	useEffect(() => {
		if (isOpen) {
			const timer = setTimeout(() => setIsAnimating(true), 50);
			return () => clearTimeout(timer);
		} else {
			setIsAnimating(false);
		}
	}, [isOpen]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!formRef.current) return;

		setIsSending(true);

		window.emailjs
			.sendForm(
				"service_akgmg6r",
				"template_nx4fvkb",
				formRef.current,
				"zmPiRmxRkScwdiYFX",
			)
			.then(() => {
				setIsSending(false);
				setIsSuccess(true);
				setTimeout(() => {
					setIsSuccess(false);
					onClose();
					formRef.current?.reset();
				}, 3000);
			})
			.catch((error: unknown) => {
				setIsSending(false);
				console.error("EmailJS Error:", error);
				alert("Connection failed. Please email dte.solutions.llc@gmail.com");
			});
	};

	return (
		<div
			className={`fixed inset-0 z-[3000] flex items-center justify-center bg-black/90 backdrop-blur-[10px] transition-all duration-500 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
			<div
				className={`main-modal relative w-[95%] max-w-[950px] max-h-[85vh] bg-[#121212] rounded-[2rem] flex border border-white/10 overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)] transition-all duration-500 ${isOpen ? "scale-100" : "scale-95"}`}>
				{/* Loading Overlay */}
				{isSending && (
					<div className='absolute inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm'>
						<Icon
							icon='svg-spinners:90-ring-with-bg'
							className='text-6xl text-accent'
						/>
					</div>
				)}

				{/* Success Overlay */}
				{isSuccess && (
					<div className='absolute inset-0 z-[100] flex flex-col items-center justify-center bg-accent text-black font-black uppercase tracking-widest text-center px-10'>
						<Icon icon='solar:check-circle-bold' className='text-8xl mb-6' />
						<h2 className='text-3xl mb-4 font-orbitron'>Connecetion Successful</h2>
						<p className='text-sm'>Response protocol initiated</p>
					</div>
				)}

				<div
					className={`modal__half modal__about w-1/2 p-[45px] flex flex-col justify-center bg-accent text-black hidden md:flex transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${isAnimating ? "translate-x-0 opacity-100 scale-100" : "-translate-x-[150%] opacity-0 scale-90"}`}>
					<h3 className='modal__title text-3xl font-black mb-4 uppercase tracking-tighter'>
						Drew T Ernst
					</h3>
					<h4 className='modal__sub-title text-black/40 font-black mb-6 uppercase tracking-[0.3em] text-[10px]'>
						Systems Engineer
					</h4>
					<p className='modal__para leading-relaxed text-black/80 text-sm font-bold'>
						Strategic engineering focused on trust acquisition and data integrity. 
						Building beyond the interface.
					</p>
				</div>

				<div
					className={`modal__half modal__contact w-full md:w-1/2 p-[45px] flex flex-col justify-center bg-[#121212] text-white relative transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${isAnimating ? "translate-x-0 opacity-100 scale-100" : "translate-x-[150%] opacity-0 scale-90"}`}>
					<button
						onClick={onClose}
						className='absolute top-8 right-8 text-2xl cursor-pointer text-white/20 hover:text-accent transition-all z-50 p-2 group/close'>
						<Icon
							icon='bi:x-lg'
							className='modal__exit block transition-transform duration-300 group-hover/close:rotate-90 group-hover/close:scale-110'
						/>
					</button>
					<h3 className='modal__title text-2xl font-black mb-8 uppercase tracking-tighter text-white'>
						Lets <span className='text-accent italic'>Chat.</span>
					</h3>
					<form ref={formRef} onSubmit={handleSubmit} className='space-y-6'>
						<div className='form__item'>
							<label className='block text-[9px] font-bold uppercase mb-2 text-white/30 tracking-[0.3em]'>
								Identity
							</label>
							<input
								className='w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white font-bold outline-none font-mono text-xs uppercase placeholder:text-white/20 focus:border-accent/50 transition-all'
								placeholder='Full Name...'
								name='user_name'
								type='text'
								required
							/>
						</div>
						<div className='form__item'>
							<label className='block text-[9px] font-bold uppercase mb-2 text-white/30 tracking-[0.3em]'>
								Coordinate
							</label>
							<input
								className='w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white font-bold outline-none font-mono text-xs uppercase placeholder:text-white/20 focus:border-accent/50 transition-all'
								placeholder='Email Address...'
								name='user_email'
								type='email'
								required
							/>
						</div>
						<div className='form__item'>
							<label className='block text-[9px] font-bold uppercase mb-2 text-white/30 tracking-[0.3em]'>
								Transmission
							</label>
							<textarea
								className='w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white font-bold outline-none h-32 font-mono text-xs uppercase placeholder:text-white/20 focus:border-accent/50 transition-all'
								placeholder='System Details...'
								name='message'
								required></textarea>
						</div>
						<button
							disabled={isSending}
							className='group w-full py-4 bg-accent text-black font-black uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all text-xs disabled:opacity-50 flex items-center justify-center gap-3 rounded-xl'>
							{isSending ? "Transmitting..." : "Connect"}
							<Icon icon='solar:rocket-linear' className='text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform' />
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ContactModal;
