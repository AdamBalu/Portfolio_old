import Image from 'next/image';
import { SquareArrowOutUpRight } from 'lucide-react';

import { NextSectionButton } from '@/components/articles/next-section-button';

export const SectionFotosandrik = () => (
	<div id="section-fotosandrik">
		<div className="h-screen bg-white relative">
			<div className="flex flex-col gap-2 sm:gap-6 md:gap-8 items-center justify-center mx-10 h-full">
				<p className="text-center text-sm sm:text-2xl text-slate-400 italic">
					💍 A photographer&apos;s website 💍
				</p>
				<h1 className="text-2xl sm:text-3xl md:text-7xl xl:text-9xl text-bold text-slate-700 text-center font-sigmarOne">
					Fotosandrik
				</h1>
				<div className="group p-[1.5rem] bg-white relative flex flex-end transition ease-out rounded-xl max-w-[900px] aspect-video duration-700 transform hover:translate-y-4 hover:before:opacity-50">
					<Image
						src="/static/wedding.webp"
						alt="wedding picture"
						className="rounded-xl shadow-xl object-cover absolute top-0 left-0 aspect-video"
						width={900}
						height={550}
					/>
					<div className="absolute bg-white bg-opacity-80 group-hover:opacity-0 transition duration-200 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl px-4 py-2 sm:px-6 sm:py-4 text-slate-700">
						<a
							className="flex items-center gap-1 sm:gap-4 text-md sm:text-4xl text-blue-500 bottom-2 right-2 sm:bottom-10 sm:right-10"
							href="https://www.fotosandrik.sk"
						>
							www.fotosandrik.sk
							<SquareArrowOutUpRight
								size={24}
								className="w-3 h-3 sm:w-6 sm:h-6"
							/>
						</a>
					</div>
					<div
						className="font-raleway text-[10px] sm:text-base info relative z-20 md:text-2xl text-slate-700 transform
					 opacity-0 translate-y-5 duration-500 rounded-xl p-4 group-hover:bg-white group-hover:bg-opacity-50 group-hover:opacity-100 group-hover:transform group-hover:translate-y-0 "
					>
						<h1 className="font-bold mb-2 sm:mb-4">Simple, cozy, beautiful</h1>
						<p className="mb-2 sm:mb-4">
							If you ever need a wedding photographer, Fotosandrik is the right
							choice!
						</p>
						<p>
							On this website you can see the best photos from various weddings.
						</p>
						<a
							className="flex items-center gap-1 sm:gap-4 absolute text-md sm:text-4xl text-blue-500 bottom-2 right-2 sm:bottom-10 sm:right-10"
							href="https://www.fotosandrik.sk"
						>
							visit fotosandrik.sk
							<SquareArrowOutUpRight
								size={24}
								className="w-3 h-3 sm:w-6 sm:h-6"
							/>
						</a>
					</div>
				</div>
			</div>
			<div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
				<NextSectionButton nextSection="section-snapshow" label="SnapShow" />
			</div>
		</div>
	</div>
);
