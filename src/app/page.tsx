import {Banner} from '@/components/banner';
import {Header} from '@/components/header/header';
import {Footer} from '@/components/footer/footer';
import {MoveDownHeroPageButton} from "@/components/home/move-down-hero-page-button";
import {MainHeading} from "@/components/hero/main-heading";

const Page = async () => {
    return (
        <>
            <Header/>
            <main className="container flex flex-col flex-grow pb-20 mt-10 px-3">
                <div>

                    <div className="flex flex-col lg:mx-24 md:justify-around gap-10 md:flex-row h-screen mt-[15%]">
                        <Banner/>
                        <MainHeading/>
                    </div>
                </div>
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="animate-bounce">
                        <MoveDownHeroPageButton/>
                    </div>
                </div>

                <div id="homepage-main-content" className="pt-4">
                    <div className="flex justify-center">
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
};

export default Page;
