import { ContactForm } from '@/components/contact/contact-form';
import { HeadingAnnouncer } from '@/components/ui/heading-announcer';

export const SectionContact = () => (
	<div id="section-contact">
		<div className="bg-white dark:bg-secondary relative min-h-[650px] sm:min-h-[800px]">
			<div className="flex flex-col gap-2 sm:gap-6 md:gap-8 items-center justify-center mx-10 mt-20 h-full border-t pt-10 border-slate-100 dark:border-slate-700">
				<HeadingAnnouncer label="...and feel free to" />
				<h1 className="text-2xl sm:text-3xl md:text-7xl xl:text-9xl text-bold text-slate-700 dark:text-slate-300 text-center font-sigmarOne transition-color">
					Contact Me
				</h1>
				<ContactForm />
			</div>
		</div>
	</div>
);
