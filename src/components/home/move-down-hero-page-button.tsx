'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';

const scrollToMainPageStart = () => {
	const mainPageStart = document.getElementById('homepage-main-content');
	if (mainPageStart) {
		mainPageStart.scrollIntoView({ behavior: 'smooth' });
	}
};

export const MoveDownHeroPageButton = () => {
	useEffect(() => changeOpacity());
	return (
		<Button
			id="explore-events-button"
			className="flex flex-row gap-1 sm:gap-3 px-3 sm:px-6 transition h-min max-w-56 mx-auto opacity-0"
			onClick={scrollToMainPageStart}
		>
			<div className="flex uppercase items-center text-md sm:text-2xl h-min sm:h-16 gap-0">
				projects
			</div>
			<Image
				src="/static/down-triangle-slate.svg"
				alt="arrow down"
				className="w-4 sm:w-6"
				width={32}
				height={32}
			/>
		</Button>
	);
};

const changeOpacity = () => {
	const h = document.getElementById('explore-events-button');

	if (h) {
		setTimeout(() => {
			h.style.opacity = '1';
		}, 4000);
	}
};
