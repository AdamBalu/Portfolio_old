import { GetDetoxrankButton } from '@/components/articles/get-detoxrank-button';
import { NextSectionButton } from '@/components/articles/next-section-button';
import { cn } from '@/lib/cn';

export const SectionSnapShow = () => (
	<article id="section-snapshow">
		<div className="h-screen bg-teal-900 relative">
			<div className="flex flex-col gap-6 sm:flex-row md:gap-8 xl:gap-32 items-center justify-start pt-8 sm:pt-0 sm:justify-center h-full mx-10">
				<div className="relative group">
					<object
						width={450}
						type="image/svg+xml"
						height={450}
						data="/static/snapshow-animated.svg"
						className={cn('h-48 w-48 sm:h-48 sm:w-48')}
					/>
				</div>
				<div className="flex flex-col gap-4 sm:gap-16 justify-center items-center xl:items-start">
					<div className="flex flex-col gap-2 sm:gap-8">
						<h1 className="text-2xl sm:text-3xl md:text-7xl xl:text-9xl text-bold text-white font-sigmarOne">
							SnapShow
						</h1>
						<p className="text-white max-w-[550px] text-sm md:text-xl ml-0 xl:ml-3 font-raleway">
							If you ever wanted to post your photos from a concert on a social
							media platform that is made just for that, now you can!
						</p>
					</div>
					<GetDetoxrankButton />
				</div>
			</div>
			<div className="absolute bottom-20 left-1/2 transfrom -translate-x-1/2">
				<NextSectionButton nextSection="" />
			</div>
		</div>
	</article>
);
