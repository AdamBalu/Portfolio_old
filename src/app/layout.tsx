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
	<html lang="en">
		<head>
			<meta name="msapplication-TileColor" content="#da532c" />
			<meta name="theme-color" content="#ffffff" />
		</head>
		<body
			className={`min-h-screen flex flex-col ${raleway.className} bg-body-main bg-repeat`}
		>
			<Providers>{children}</Providers>
			<Toaster position="bottom-right" richColors />
		</body>
	</html>
);

export default RootLayout;
