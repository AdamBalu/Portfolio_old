import { Header } from '@/components/header/header';
import { Footer } from '@/components/footer/footer';
import { MoveDownHeroPageButton } from '@/components/home/move-down-hero-page-button';
import { MainHeading } from '@/components/hero/main-heading';
import { ProjectsBox } from '@/components/projects/projects-box';

const Page = async () => (
	<>
		<Header />
		<main className="flex flex-col flex-grow pb-20 mt-10">
			<div>
				<div className="flex flex-col lg:mx-12 md:justify-around gap-10 md:flex-row h-screen mt-[15%]">
					{/*<Banner />*/}
					<MainHeading />
				</div>
			</div>
			<div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
				<div className="animate-bounce">
					<MoveDownHeroPageButton />
				</div>
			</div>

			<div id="homepage-main-content">
				<ProjectsBox />
			</div>

			<article id="section-detox-rank">
				<div className="h-screen bg-cyan-800">kek</div>
			</article>

			<article id="section-fotosandrik">
				<div className="h-screen bg-white">kek</div>
			</article>

			<article id="section-snapshow">
				<div className="h-screen bg-teal-800">kek</div>
			</article>
		</main>
		<Footer />
	</>
);

export default Page;
