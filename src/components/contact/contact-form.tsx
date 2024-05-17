'use client';
import { z } from 'zod';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import { FormInput } from '@/components/ui/form/form-input';
import { FormTextArea } from '@/components/ui/form/form-textarea';
import { useSendEmailMutation } from '@/hooks/email';

import { Button } from '../ui/button';

const schema = z.object({
	email: z.string().email(),
	message: z.string().min(10).max(1000)
});

export type ContactFormSchema = z.infer<typeof schema>;

export const ContactForm = () => {
	const form = useForm<ContactFormSchema>({
		resolver: zodResolver(schema),
		defaultValues: {
			email: '',
			message: ''
		}
	});

	const mutation = useSendEmailMutation();

	const handleSubmit = (data: ContactFormSchema) => {
		mutation.mutate(data, {
			onSuccess: () => {
				form.reset();
				toast.success('Email sent successfully');
			},
			onError: _ => {
				toast.error('Email failed to send');
			}
		});
	};

	return (
		<FormProvider {...form}>
			<form
				className="w-[95%] sm:w-[80%] max-w-[700px] flex flex-col gap-4 items-center"
				onSubmit={form.handleSubmit(handleSubmit)}
			>
				<FormInput
					label="Email"
					name="email"
					placeholder="your@email.com"
					className="w-full sm:w-[50%]"
				/>
				<FormTextArea
					label="Message"
					name="message"
					placeholder="I'm yapping about..."
					className="w-full min-h-48"
				/>
				<Button type="submit" className="mt-2">
					Send
				</Button>
			</form>
		</FormProvider>
	);
};
