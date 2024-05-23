import { NextSectionButton } from '@/components/articles/next-section-button';
import { cn } from '@/lib/cn';
import { GoToSnapshowButton } from '@/components/articles/go-to-snapshow-button';

export const SectionSnapShow = () => (
	<div id="section-snapshow">
		<div className="h-screen bg-teal-900 relative">
			<div className="flex flex-col gap-6 sm:flex-row-reverse md:gap-8 xl:gap-10 items-center justify-start pt-8 sm:pt-0 sm:justify-center h-full mx-10">
				<div className="relative group">
					<object
						width={450}
						type="image/svg+xml"
						height={450}
						data="/static/snapshow-animated.svg"
						className={cn('h-48 w-48 sm:h-72 sm:w-72 xl:h-96 xl:w-96')}
					/>
				</div>
				<div className="flex flex-col gap-4 sm:gap-16 justify-center items-center xl:items-start">
					<div className="flex flex-col gap-2 sm:gap-8">
						<h1 className="text-2xl sm:text-3xl md:text-5xl xl:text-9xl text-bold text-white dark:text-slate-300 transition-color duration-200 ease-in-out font-sigmarOne">
							SnapShow
						</h1>
						<p className="text-white dark:text-slate-300 transition-color duration-200 ease-in-out max-w-[550px] text-sm md:text-xl ml-0 xl:ml-3 ">
							If you ever wanted to post your photos from a concert on
							a&nbsp;social media platform and have it all in one place, now you
							can!
						</p>
					</div>
					<GoToSnapshowButton />
				</div>
			</div>
			<div className="absolute bottom-8 left-1/2 transfrom -translate-x-1/2">
				<NextSectionButton nextSection="section-skills" label="Skills" />
			</div>
		</div>
	</div>
);
