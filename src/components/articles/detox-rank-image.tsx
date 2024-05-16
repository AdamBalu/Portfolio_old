import Image from 'next/image';

import { RankImage } from '@/components/articles/rank-image';

export const DetoxRankImage = () => (
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
);
