'use client';
import Image from 'next/image';

import { Button } from '@/components/ui/button';

export const GoToSnapshowButton = () => (
	<Button
		id="go-to-snapshow-button"
		className="w-72 md:w-80 xl:w-96 h-16 md:h-20 mt-4 sm:mt-0"
		onClick={() => window.open('https://snap-show.vercel.app')}
	>
		<span className="text-[#0c2e55] text-base md:text-xl xl:text-2xl">
			Start Snapping
		</span>
		<Image
			src="/static/snapshow.svg"
			alt="snapshow icon"
			width={32}
			height={32}
		/>
	</Button>
);
