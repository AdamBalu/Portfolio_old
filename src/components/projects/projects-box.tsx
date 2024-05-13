'use client';
import Image from 'next/image';

import { Project } from '@/components/projects/project';

export const ProjectsBox = () => {
	const scrollToSection = (sectionId: string) => {
		const mainPageStart = document.getElementById(sectionId);
		if (mainPageStart) {
			mainPageStart.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<div className="mx-auto max-w-[1400px]">
			<div className="mx-4 my-2 sm:my-0 mb-20 sm:mb-0 flex flex-col sm:flex-row justify-center items-center gap-20 sm:gap-2 sm:h-screen md:mx-8">
				<Project
					img={
						<div className="h-40 group-hover:transition-transform group-hover:-rotate-12 group-hover:duration-500">
							<div className="w-48 flex justify-center">
								<Image
									src="/static/detoxrank.svg"
									alt="project image"
									width={128}
									height={128}
								/>
							</div>
						</div>
					}
					heading="Detox Rank"
					bg="bg-[#1D4C81]"
					borderOnHover="group-hover:border-[#b5d8ff]"
					onClick={() => scrollToSection('section-detox-rank')}
				>
					Mobile application for overcoming dopamine addiction
				</Project>
				<Project
					img={
						<div className="h-40 group-hover:transition-transform group-hover:rotate-12 group-hover:duration-500">
							<div className="w-48 flex justify-center">
								<Image
									src="/static/rings.svg"
									alt="project image"
									width={168}
									height={120}
								/>
							</div>
						</div>
					}
					heading="Fotosandrik"
					bg="bg-amber-400"
					borderOnHover="group-hover:border-amber-200"
					onClick={() => scrollToSection('section-fotosandrik')}
				>
					A wedding photographer&apos;s website
				</Project>
				<Project
					img={
						<div className="h-40 group-hover:duration-500">
							<div className="w-48 flex justify-center">
								<Image
									src="/static/snapshow.svg"
									alt="project image"
									width={188}
									height={128}
								/>
							</div>
						</div>
					}
					heading="SnapShow"
					bg="bg-teal-700"
					borderOnHover="group-hover:border-teal-200"
					onClick={() => scrollToSection('section-snapshow')}
				>
					Concert-based social media platform
				</Project>
			</div>
		</div>
	);
};
