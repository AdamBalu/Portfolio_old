import React from 'react';

import { Navigation } from '@/components/navigation/navigation';
import { Logo } from '@/components/header/logo';

export const Header = async () => {
	return (
		<header className="font-sarpanch font-extrabold bg-zinc-900 text-white">
			<div className="navbar container flex items-center h-28 justify-between">
				{/*<Logo />*/}
				<div></div>

				<div className="flex gap-x-12 pr-4">
					<Navigation />
				</div>
			</div>
		</header>
	);
};
