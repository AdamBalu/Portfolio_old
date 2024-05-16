import React from 'react';

import { MobileNav } from '@/components/navigation/mobile-nav';

// TODO link to icons8
export const Footer = () => (
	<footer className="flex lg:hidden font-sarpanch h-14 text-white w-screen py-1 bg-zinc-900 z-20 fixed bottom-0">
		<MobileNav />
	</footer>
);
