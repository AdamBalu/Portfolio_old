import { HeadingAnnouncer } from '@/components/ui/heading-announcer';

import { SkillGrid } from './skill-grid';

export const SectionSkills = () => (
	<div id="section-skills">
		<div className="relative">
			<div className="flex flex-col gap-2 sm:gap-6 md:gap-8 items-center justify-center mx-10 mt-20 h-full">
				<HeadingAnnouncer label="...and these are my" />
				<h1 className="text-2xl sm:text-3xl md:text-7xl xl:text-9xl text-bold text-center font-sigmarOne">
					Skills
				</h1>
				<SkillGrid />
			</div>
		</div>
	</div>
);
