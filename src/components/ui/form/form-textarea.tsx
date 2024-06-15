'use client';

import { type HTMLProps } from 'react';
import { useFormContext } from 'react-hook-form';

import { cn } from '@/lib/cn';

type FormInputProps = HTMLProps<HTMLTextAreaElement> & {
	label: string;
	name: string;
};

export const FormTextArea = ({
	label,
	name,
	className,
	...inputProps
}: FormInputProps) => {
	const {
		register,
		formState: { errors }
	} = useFormContext();

	return (
		<label htmlFor={name} className="form-control w-full">
			<div className="label">
				<span className="label-text text-slate-400 font-sarpanch font-extrabold">
					{label}
				</span>
			</div>
			<textarea
				id={name}
				className={cn(
					'input text-slate-700 input-bordered w-full dark:text-slate-200 min-h-20 py-2.5 border-gray-200 focus:border-primary bg-gray-50 focus:bg-gray-100 dark:bg-slate-800 focus:dark:bg-slate-700',
					errors[name] && 'input-error',
					className
				)}
				{...inputProps}
				{...register(name, {
					valueAsNumber: inputProps.type === 'number'
				})}
			/>

			{errors[name] && (
				<span className="mt-2 text-sm text-error">
					{errors[name]?.message?.toString()}
				</span>
			)}
		</label>
	);
};
