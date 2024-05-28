'use client';
import { useEffect, useRef } from 'react';

import { cn } from '@/lib/cn';

export const SnapshowAnimatedImg = () => {
	const ref = useRef<HTMLObjectElement | null>(null);

	useEffect(() => {
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

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, []);

	return (
		<div className="relative group">
			<object
				ref={ref}
				width={450}
				type="image/svg+xml"
				height={450}
				data=""
				className={cn('h-48 w-48 sm:h-72 sm:w-72 xl:h-96 xl:w-96')}
				aria-labelledby="l1"
			/>
			<span id="l1" className="hidden">
				Fk u lighthouse warning and blind people
			</span>
		</div>
	);
};
