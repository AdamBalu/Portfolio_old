'use client';
import Image from 'next/image';

import { Project } from '@/components/projects/project';
import { scrollToSection } from '@/common/functions/scroll-to-section';
import { HeadingAnnouncer } from '@/components/ui/heading-announcer';

export const ProjectsBox = () => (
	<div className="mx-auto max-w-[1400px]">
		<div className="flex flex-col justify-center sm:h-screen  min-h-[500px] sm:min-h-[600px] md:min-h-[850px]">
			<HeadingAnnouncer label="My main" />
			<h1 className="text-5xl md:text-7xl xl:text-9xl text-bold font-sigmarOne text-center mb-10">
				Projects
			</h1>
			<div className="mx-4 my-2 sm:my-0 mb-20 sm:mb-0 flex flex-col sm:flex-row justify-center items-center gap-20 sm:gap-2 md:mx-8">
				<Project
					img={
						<div className="h-40 group-hover:transition-transform group-hover:-rotate-12 group-hover:duration-500">
							<div className="w-48 flex justify-center">
								<Image
									src="/static/detoxrank.svg"
									alt="project image"
									width={128}
									height={128}
									className="h-auto"
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
					bg="bg-primary dark:bg-primary-dark"
					borderOnHover="group-hover:border-amber-200"
					onClick={() => scrollToSection('section-fotosandrik')}
				>
					A wedding photographer&apos;s website
				</Project>
				<Project
					img={
						<div className="h-40 group-hover:duration-500 group-hover:transition-transform group-hover:-rotate-6">
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
	</div>
);
