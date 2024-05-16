import { SkillGrid } from './skill-grid';

export const SectionSkills = () => (
	<div id="section-skills">
		<div className="bg-white relative">
			<div className="flex flex-col gap-2 sm:gap-6 md:gap-8 items-center justify-center mx-10 mt-20 h-full">
				<p className="text-center text-sm sm:text-2xl text-slate-400 italic">
					...and these are my
				</p>
				<h1 className="text-2xl sm:text-3xl md:text-7xl xl:text-9xl text-bold text-slate-700 text-center font-sigmarOne">
					Skills
				</h1>
				<SkillGrid />
			</div>
		</div>
	</div>
);
