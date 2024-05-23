import { GetDetoxrankButton } from '@/components/articles/get-detoxrank-button';
import { NextSectionButton } from '@/components/articles/next-section-button';
import { DetoxRankImage } from '@/components/articles/detox-rank-image';

export const SectionDetoxRank = () => (
	<div id="section-detox-rank">
		<div className="h-screen min-h-[550px] sm:min-h-[600px] md:min-h-[750px] bg-[#1D4C81] relative">
			<div className="flex flex-col gap-6 sm:flex-row md:gap-8 xl:gap-32 items-center justify-start pt-8 sm:pt-0 sm:justify-center h-full mx-10">
				<DetoxRankImage />
				<div className="flex flex-col gap-4 sm:gap-16 justify-center items-center xl:items-start">
					<div className="flex flex-col gap-2 sm:gap-8 ">
						<h1 className="text-2xl sm:text-3xl md:text-7xl xl:text-9xl text-bold text-white dark:text-slate-300 font-sigmarOne transition-color duration-200 ease-in-out">
							Detox Rank
						</h1>
						<p className="text-white dark:text-slate-300 max-w-[550px] text-sm md:text-xl ml-0 xl:ml-3 transition-color duration-200 ease-in-out">
							get your dopamine circuitry back on track by reducing dopaminergic
							activities and doing healthy, productive tasks
						</p>
					</div>
					<GetDetoxrankButton />
				</div>
			</div>
			<div className="absolute bottom-8 left-1/2 transfrom -translate-x-1/2">
				<NextSectionButton
					nextSection="section-fotosandrik"
					label="fotosandrik"
				/>
			</div>
		</div>
	</div>
);
