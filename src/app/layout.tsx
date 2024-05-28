import './globals.css';

import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import { Toaster } from 'sonner';
import React from 'react';
import Head from 'next/head';

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
	<html lang="en">
		<Head>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			{/* eslint-disable-next-line @next/next/no-page-custom-font */}
			<link
				href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
				rel="stylesheet"
			/>
			<meta name="msapplication-TileColor" content="#da532c" />
			<meta name="theme-color" content="#ffffff" />
		</Head>
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
