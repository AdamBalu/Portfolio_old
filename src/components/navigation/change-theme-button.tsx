'use client';
import React from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export const ChangeThemeButton = () => {
	const { theme, setTheme } = useTheme();
	return (
		<button
			className="fixed z-30 right-28 top-10 px-4 py-2 font-semibold rounded-md"
			onClick={() => {
				setTheme(theme === 'light' ? 'dark' : 'light');
			}}
		>
			{theme === 'light' ? <Moon color="orange" /> : <Sun />}
		</button>
	);
};
