import Image from 'next/image';

import { GetDetoxrankButton } from '@/components/articles/get-detoxrank-button';

export const SectionDetoxRank = () => (
	<article id="section-detox-rank">
		<div className="h-screen bg-[#1D4C81]">
			<div className="flex flex-row gap-6 md:gap-8 xl:gap-32 items-center justify-center h-full mx-10">
				<Image
					src="/static/detoxrank-big.svg"
					alt="Detox Rank"
					className="w-32 h-32 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] xl:w-[600px] xl:h-[600px]"
					width={450}
					height={450}
				/>
				<div className="flex flex-col gap-16 justify-center">
					<div className="flex flex-col gap-8">
						<h1 className="text-2xl sm:text-3xl md:text-7xl xl:text-9xl text-bold text-white font-sigmarOne">
							Detox Rank
						</h1>
						<p className="text-white max-w-[550px] text-xl ml-3 font-raleway">
							get your dopamine circuitry back on track by reducing dopaminergic
							activities and doing healthy, productive tasks
						</p>
					</div>
					<GetDetoxrankButton />
				</div>
			</div>
		</div>
	</article>
);
