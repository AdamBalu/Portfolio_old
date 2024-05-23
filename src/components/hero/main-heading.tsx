'use client';

import { useEffect } from 'react';

import { HeadingLine } from '@/components/hero/heading-line';
import { HeadingAnnouncer } from '@/components/ui/heading-announcer';

export const MainHeading = () => {
	useEffect(() => dynamicHeadingsOpacity());
	return (
		<div className="flex flex-col gap-4 items-center" id="main-heading">
			<HeadingAnnouncer label="Hi, I am" />
			<div className="text-3xl sm:text-6xl md:text-7xl xl:text-9xl animate-slidein">
				<span className="text-primary dark:text-primary-dark transition-color duration-500 ease-in-out">
					Adam Balu
				</span>
				šeskul
			</div>
			<HeadingLine
				spanText="web"
				normalText=" developer"
				margin="ml-[-25px] sm:ml-[-65px]"
				id="h-webdev"
			/>
			<HeadingLine
				spanText="design"
				normalText="er"
				margin="mr-[-10px] sm:mr-[-25px]"
				id="h-designer"
			/>
			<HeadingLine
				spanText="mobile app"
				normalText=" creator"
				margin="ml-[-10px] sm:ml-[-25px]"
				id="h-mobile"
			/>
		</div>
	);
};

const dynamicHeadingsOpacity = () => {
	const h1 = document.getElementById('h-webdev');
	const h2 = document.getElementById('h-designer');
	const h3 = document.getElementById('h-mobile');

	changeColor(h1, 1000);
	changeColor(h2, 3000);
	changeColor(h3, 2000);
};

const changeColor = (h: HTMLElement | null, timeout: number) => {
	if (h === null) {
		return;
	}
	h.classList.remove('opacity-0');

	setTimeout(() => {
		const span = h.querySelector('span');
		if (span) {
			span.classList.add('text-primary');
			span.classList.add('dark:text-primary-dark');
		}
	}, timeout);
};
