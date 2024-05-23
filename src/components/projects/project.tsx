'use client';
import React, { type PropsWithChildren } from 'react';
import Image from 'next/image';

type ProjectProps = {
	img: React.ReactNode;
	heading: string;
	bg: string;
	borderOnHover: string;
	onClick: () => void;
};

export const Project = ({
	img,
	heading,
	bg,
	borderOnHover,
	children,
	onClick
}: PropsWithChildren<ProjectProps>) => (
	<button className="group w-full relative" onClick={onClick}>
		<div className="mx-auto w-[90%] group-hover:w-[100%] group-hover:transition-width group-hover:ease-in group-hover:duration-200">
			<div className="h-[340px] group-hover:transition-height group-hover:ease-in-out group-hover:duration-500">
				<div
					className={`relative cursor-pointer mb-5 ${bg}  rounded-3xl h-96 group-hover:h-[400px] group-hover:transition-height group-hover:duration-700`}
				>
					<div
						className={`h-full w-full group-hover:h-[19rem] transition-background ease-in duration-300 bg-white dark:bg-secondary border-[1px] group-hover:shadow-2xl ${borderOnHover} border-slate-100 dark:border-slate-600 shadow-xl rounded-2xl relative z-10`}
					>
						<div className="flex flex-col items-center gap-5 py-8">
							{img}
							<p className="text-xl transition group-hover:duration-700 group-hover:translate-y-7 group-hover:font-bold">
								{heading}
							</p>
							<div className="group-hover:invisible text-slate-400 px-6 text-center text-sm">
								{children}
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
	</button>
);
