'use client';
import Image from 'next/image';

import { Button } from '@/components/ui/button';

export const GetDetoxrankButton = () => (
	<Button
		id="detox-rank"
		className="w-72 md:w-80 xl:w-96 h-16 md:h-20 mt-4 sm:mt-0"
		onClick={() =>
			window.open(
				'https://play.google.com/store/apps/details?id=com.blaubalu.detoxrank'
			)
		}
	>
		<span className="text-[#0c2e55] text-base md:text-xl xl:text-2xl">
			Get on Google Play
		</span>
		<Image
			src="/static/google-play.png"
			alt="google play"
			width={32}
			height={32}
		/>
	</Button>
);
