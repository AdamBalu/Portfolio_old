import Image from 'next/image';

import { GetDetoxrankButton } from '@/components/articles/get-detoxrank-button';
import { NextSectionButton } from '@/components/articles/next-section-button';

import { RankImage } from './rank-image';

export const SectionDetoxRank = () => (
	<article id="section-detox-rank">
		<div className="h-screen bg-[#1D4C81] relative">
			<div className="flex flex-col gap-6 sm:flex-row md:gap-8 xl:gap-32 items-center justify-start pt-8 sm:pt-0 sm:justify-center h-full mx-10">
				<div className="relative group">
					<Image
						src="/static/detoxrank-big.svg"
						alt="Detox Rank"
						className="w-52 h-52 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] xl:w-[600px] xl:h-[600px]
						 relative z-10 group-hover:translate-y-5 ease-in-out duration-500"
						width={450}
						height={450}
					/>

					<RankImage
						src="/static/rank-gold.svg"
						animation="group-hover:-translate-x-32 sm:group-hover:-translate-x-40 md:group-hover:-translate-x-72 md:group-hover:-translate-y-5 xl:group-hover:-translate-x-80 group-hover:-rotate-45"
					/>
					<RankImage
						src="/static/rank-diamond.svg"
						animation="group-hover:-translate-x-0 sm:group-hover:-translate-x-20 md:group-hover:-translate-x-10 md:group-hover:-translate-y-5 xl:group-hover:-translate-x-0 group-hover:rotate-45"
					/>

					<RankImage
						src="/static/rank-platinum.svg"
						animation="group-hover:-translate-y-16 sm:group-hover:-translate-y-44 md:group-hover:-translate-y-52 xl:group-hover:-translate-y-60"
					/>

					<RankImage
						src="/static/rank-bronze.svg"
						animation="md:group-hover:translate-y-5 xl:group-hover:translate-y-48 group-hover:rotate-12"
						className="invisible xl:visible xl:w-72 xl:h-72"
					/>
				</div>
				<div className="flex flex-col gap-4 sm:gap-16 justify-center items-center">
					<div className="flex flex-col gap-2 sm:gap-8">
						<h1 className="text-2xl sm:text-3xl md:text-7xl xl:text-9xl text-bold text-white font-sigmarOne">
							Detox Rank
						</h1>
						<p className="text-white max-w-[550px] text-sm md:text-xl ml-0 sm:ml-3 font-raleway">
							get your dopamine circuitry back on track by reducing dopaminergic
							activities and doing healthy, productive tasks
						</p>
					</div>
					<GetDetoxrankButton />
				</div>
			</div>
			<div className="absolute bottom-20 left-1/2 transfrom -translate-x-1/2">
				<NextSectionButton nextSection="section-fotosandrik" />
			</div>
		</div>
	</article>
);
