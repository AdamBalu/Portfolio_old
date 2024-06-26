'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

import { cn } from '@/lib/cn';

export const SnapshowAnimatedImg = () => {
	const ref = useRef<HTMLObjectElement | null>(null);
	useEffect(() => {
		const currRef = ref.current;
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						const objectElement = entry.target as HTMLObjectElement;
						objectElement.data = '/static/snapshow-animated.svg';
						observer.unobserve(objectElement);
					}
				});
			},
			{ threshold: 0.1 }
		);

		if (currRef) {
			observer.observe(currRef);
		}

		return () => {
			if (currRef) {
				observer.unobserve(currRef);
			}
		};
	}, []);

	return (
		<Image
			src="/static/snapshow.svg"
			alt="Dark mode"
			width={350}
			height={350}
		/>
		// 	<div className="relative group">
		// 		<object
		// 			ref={ref}
		// 			width={450}
		// 			type="image/svg+xml"
		// 			height={450}
		// 			data=""
		// 			className={cn('h-48 w-48 sm:h-72 sm:w-72 xl:h-96 xl:w-96')}
		// 			aria-labelledby="l1"
		// 		/>
		// 		<span id="l1" className="hidden">
		// 			Fk u lighthouse warning and blind people
		// 		</span>
		// 	</div>
	);
};
