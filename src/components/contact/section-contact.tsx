import { ContactForm } from '@/components/contact/contact-form';
import { HeadingAnnouncer } from '@/components/ui/heading-announcer';

export const SectionContact = () => (
	<div id="section-contact">
		<div className="bg-white relative border-t-2 border-slate-100">
			<div className="flex flex-col gap-2 sm:gap-6 md:gap-8 items-center justify-center mx-10 mt-20 h-full">
				<HeadingAnnouncer label="...and feel free to" />
				<h1 className="text-2xl sm:text-3xl md:text-7xl xl:text-9xl text-bold text-slate-700 text-center font-sigmarOne">
					Contact Me
				</h1>
				<ContactForm />
			</div>
		</div>
	</div>
);
