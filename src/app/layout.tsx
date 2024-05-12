import './globals.css';

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Toaster } from 'sonner';
import React from 'react';

import { FaviconLinks } from '@/components/header/favicon-links';

import { Providers } from './providers';

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
	title: 'SnapShow'
};

const RootLayout = ({
	children
}: Readonly<{
	children: React.ReactNode;
}>) => (
	<html lang="en">
		<head>
			<FaviconLinks />
			<meta name="msapplication-TileColor" content="#da532c" />
			<meta name="theme-color" content="#ffffff" />
		</head>
		<body
			className={`min-h-screen flex flex-col ${poppins.className} bg-body-main bg-repeat`}
		>
			{children}
			<Toaster position="bottom-right" richColors />
		</body>
	</html>
);

export default RootLayout;
