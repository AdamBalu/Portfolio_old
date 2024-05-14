'use client';
import Image from 'next/image';

import { scrollToSection } from '@/common/functions/scroll-to-section';
import { Button } from '@/components/ui/button';

export const NextSectionButton = ({ nextSection }: { nextSection: string }) => (
	<Button
		className="text-slate-700 font-raleway h-16"
		onClick={() => scrollToSection(nextSection)}
	>
		Next project
		<Image
			src="/static/down-triangle-slate.svg"
			alt="arrow down"
			width={24}
			height={24}
		/>
	</Button>
);
