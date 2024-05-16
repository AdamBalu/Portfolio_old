import React from 'react';

import { MobileNavLink } from '@/components/navigation/mobile-nav-link';
import { NavigationItems } from '@/data/navigation-list';

export const MobileNav = async () => (
	<nav className="container w-[60%]">
		<ul className="flex justify-between">
			{NavigationItems.map((item, _) => (
				<div key={item.href} className="indicator">
					<MobileNavLink {...item} />
				</div>
			))}
		</ul>
	</nav>
);
