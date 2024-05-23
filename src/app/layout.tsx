import './globals.css';

import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import { Toaster } from 'sonner';
import React from 'react';

import { Providers } from './providers';

const raleway = Raleway({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
	title: 'Adam Balušeskul - Portfolio'
};

const RootLayout = ({
	children
}: Readonly<{
	children: React.ReactNode;
}>) => (
	<html lang="en" suppressHydrationWarning>
		<head>
			<meta name="msapplication-TileColor" content="#da532c" />
			<meta name="theme-color" content="#ffffff" />
		</head>
		<body
			className={`min-h-screen flex flex-col ${raleway.className}  text-slate-700 dark:text-slate-200 transition-color duration-500 ease-in-out`}
		>
			<div className="bg-white dark:bg-secondary transition-background duration-700 ease-in-out">
				<Providers>{children}</Providers>
				<Toaster position="bottom-right" richColors />
			</div>
		</body>
	</html>
);

export default RootLayout;
