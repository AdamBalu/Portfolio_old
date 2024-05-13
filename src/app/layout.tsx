import './globals.css';

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Toaster } from 'sonner';
import React from 'react';

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
	title: 'Portfolio'
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
			className={`min-h-screen flex flex-col ${poppins.className} bg-body-main bg-repeat`}
		>
			{children}
			<Toaster position="bottom-right" richColors />
		</body>
	</html>
);

export default RootLayout;
