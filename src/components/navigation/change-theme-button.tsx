'use client';
import React from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export const ChangeThemeButton = () => {
	const { theme, setTheme } = useTheme();
	return (
		<div suppressHydrationWarning>
			<button
				className="fixed left-5 z-30 top-10 px-4 py-2 font-semibold rounded-md"
				onClick={() => {
					setTheme(theme === 'light' ? 'dark' : 'light');
				}}
			>
				{theme === 'light' ? (
					<Moon
						color="orange"
						className="hover:fill-primary transition-transform hover:-rotate-[360deg] ease-in-out duration-1000"
					/>
				) : (
					<Sun className="hover:fill-primary-dark transition-transform hover:-rotate-[180deg] ease-in-out duration-1000" />
				)}
			</button>
		</div>
	);
};
