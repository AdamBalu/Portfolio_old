'use client';
import Image from 'next/image';

import { scrollToSection } from '@/common/functions/scroll-to-section';
import { Button } from '@/components/ui/button';

export const NextSectionButton = ({
	nextSection,
	label
}: {
	nextSection: string;
	label: string;
}) => (
	<Button
		className="text-slate-700 text-xs sm:text-2xl h-6 sm:h-16"
		onClick={() => scrollToSection(nextSection)}
	>
		{label}
		<Image
			src="/static/down-triangle-slate.svg"
			alt="arrow down"
			width={24}
			height={24}
		/>
	</Button>
);
