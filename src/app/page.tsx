import { Header } from '@/components/header/header';
import { Footer } from '@/components/footer/footer';
import { MoveDownHeroPageButton } from '@/components/home/move-down-hero-page-button';
import { MainHeading } from '@/components/hero/main-heading';
import { ProjectsBox } from '@/components/projects/projects-box';
import { SectionDetoxRank } from '@/components/articles/section-detox-rank';
import { SectionFotosandrik } from '@/components/articles/section-fotosandrik';
import { SectionSnapShow } from '@/components/articles/section-snapshow';
import { SectionSkills } from '@/components/skills/section-skills';
import { Socials } from '@/components/socials/socials';

const Page = async () => (
	<>
		<Header />
		<main className="flex flex-col flex-grow pb-20 mt-10">
			<div id="homepage">
				<div className="flex flex-col lg:mx-12 md:justify-start gap-10 h-screen  min-h-[500px] sm:min-h-[600px] md:min-h-[750px] mt-[4%]">
					<MainHeading />
					<Socials className="bg-white dark:bg-secondary" />
				</div>
			</div>
			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
				<div className="animate-bounce">
					<MoveDownHeroPageButton />
				</div>
			</div>

			<div id="projects">
				<ProjectsBox />
			</div>

			<SectionDetoxRank />

			<SectionFotosandrik />

			<SectionSnapShow />

			<SectionSkills />

			{/*<SectionContact />*/}
		</main>
		<Footer />
	</>
);

export default Page;
