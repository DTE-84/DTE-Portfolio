"use client";
import React from "react";

const DTELogoSVG = ({ className = "" }: { className?: string }) => {
	return (
		<svg
			viewBox='0 0 1000 1000'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}>
			<defs>
				<linearGradient id='nova-grad' x1='0%' y1='0%' x2='100%' y2='100%'>
					<stop offset='0%' stopColor='#00f3ff' />
					<stop offset='100%' stopColor='#39ff14' />
				</linearGradient>
				<linearGradient id='blue-grad' x1='0%' y1='0%' x2='0%' y2='100%'>
					<stop offset='0%' stopColor='#00f3ff' />
					<stop offset='100%' stopColor='#082284' />
				</linearGradient>
			</defs>

			{/* Hex Shell Outer */}
			<path
				id='hex-shell'
				d='M500 50L900 275V725L500 950L100 725V275L500 50Z'
				stroke='url(#nova-grad)'
				strokeWidth='24'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			
			{/* Hex Shell Inner Detail */}
			<path
				id='hex-inner'
				d='M500 150L820 325V675L500 850L180 675V325L500 150Z'
				stroke='url(#nova-grad)'
				strokeWidth='12'
				opacity='0.4'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>

			{/* Corner Accents */}
			<g id='hex-accents' opacity='0.6' stroke='url(#nova-grad)' strokeWidth='12'>
				<path d='M500 50V150' />
				<path d='M900 275L820 325' />
				<path d='M900 725L820 675' />
				<path d='M500 950V850' />
				<path d='M100 725L180 675' />
				<path d='M100 275L180 325' />
			</g>

			{/* Bar Graph Group */}
			<g id='bar-graph'>
				{/* Bar 1 */}
				<rect
					id='bar-1'
					x='390'
					y='310'
					width='60'
					height='310'
					rx='12'
					fill='url(#nova-grad)'
				/>
				{/* Bar 2 */}
				<rect
					id='bar-2'
					x='480'
					y='380'
					width='60'
					height='240'
					rx='12'
					fill='url(#blue-grad)'
				/>
				{/* Bar 3 */}
				<rect
					id='bar-3'
					x='570'
					y='440'
					width='60'
					height='180'
					rx='12'
					fill='url(#nova-grad)'
				/>
			</g>

			{/* Brackets */}
			<path
				id='bracket-left'
				d='M280 370L210 500L280 630'
				stroke='url(#nova-grad)'
				strokeWidth='24'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				id='bracket-right'
				d='M720 370L790 500L720 630'
				stroke='url(#nova-grad)'
				strokeWidth='24'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>

			{/* Central Slash */}
			<path
				id='slash'
				d='M545 335L455 680'
				stroke='url(#blue-grad)'
				strokeWidth='16'
				strokeLinecap='round'
			/>
		</svg>
	);
};

export default DTELogoSVG;
