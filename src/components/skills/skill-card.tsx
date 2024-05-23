import Image from 'next/image';
import React from 'react';

import { Stars } from './stars';

type SkillCardProps = {
	iconSrc: string;
	heading: string;
	description: string;
	starCount: number;
};

export const SkillCard = ({
	iconSrc,
	heading,
	description,
	starCount
}: SkillCardProps) => (
	<div className="group w-full relative">
		<div className="h-48 sm:h-64 group-hover:transition-height group-hover:ease-in-out group-hover:duration-500">
			<div className="relative mb-5 bg-white dark:bg-secondary rounded-3xl h-26 group-hover:h-48 sm:group-hover:h-64 group-hover:transition-height group-hover:duration-700">
				<div className="h-[9rem] w-[9rem] sm:h-[15rem] sm:w-[15rem] group-hover:h-52 sm:group-hover:h-64 transition-height ease-in-out duration-300 bg-white dark:bg-secondary border-[1px] group-hover:shadow-2xl group-hover:border-primary group-hover:dark:border-primary-dark border-slate-100 dark:border-slate-600 shadow-xl rounded-2xl relative z-10">
					<div className="flex flex-col items-center pt-6 sm:pt-0 gap-4 sm:gap-2 py-1">
						<Stars count={starCount} />
						<Image
							src={iconSrc}
							alt="skill icon"
							width={64}
							height={64}
							className="block group-hover:hidden sm:mt-7"
						/>
						<p className="text-base sm:text-xl transition invisible group-hover:visible group-hover:duration-700 group-hover:-translate-y-7 group-hover:font-bold">
							{heading}
						</p>
						<div
							className="opacity-0 group-hover:opacity-100 group-hover:transfer group-hover:-translate-y-10 sm:group-hover:-translate-y-5
						transition transform-opacity ease-in-out duration-500 text-slate-400 px-6 text-center text-xs sm:text-sm"
						>
							{description}
						</div>
					</div>
				</div>
				<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-1">
					<Image
						src="static/down-triangle.svg"
						alt="arrow down"
						className="fill-amber-200 text-amber-200"
						width={32}
						height={32}
					/>
				</div>
			</div>
		</div>
	</div>
);
