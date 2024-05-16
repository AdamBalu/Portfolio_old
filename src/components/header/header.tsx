import React from 'react';

import { Navigation } from '@/components/navigation/navigation';

export const Header = async () => (
	<header className="font-sarpanch font-extrabold bg-zinc-900 text-white">
		<div className="navbar container flex items-center h-28 justify-between">
			<div />

			<div className="flex gap-x-12 pr-4">
				<Navigation />
			</div>
		</div>
	</header>
);
