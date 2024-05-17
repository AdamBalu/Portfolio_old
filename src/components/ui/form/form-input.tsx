'use client';

import React, { type HTMLProps } from 'react';
import { useFormContext } from 'react-hook-form';

import { cn } from '@/lib/cn';

type FormInputProps = HTMLProps<HTMLInputElement> & {
	label?: string;
	name: string;
};

export const FormInput = ({
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
		<div className="form-control w-full">
			{label && (
				<label htmlFor={name} className="label">
					<span className="label-text text-slate-400 font-extrabold">
						{label}
					</span>
				</label>
			)}
			<input
				id={name}
				className={cn(
					'input text-slate-700 input-bordered w-full border-gray-200 focus:border-primary bg-gray-50',
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
		</div>
	);
};
