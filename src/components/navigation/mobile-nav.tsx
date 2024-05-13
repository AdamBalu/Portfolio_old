import React from 'react';

import { MobileNavLink } from '@/components/navigation/mobile-nav-link';
import { NavigationItems } from '@/components/navigation/navigation-list';

export const MobileNav = async () => {
	return (
		<nav className="container w-[60%]">
			<ul className="flex justify-between">
				{NavigationItems.map((item, index) => {
					return (
						<div key={item.href} className="indicator">
							<MobileNavLink {...item} />
						</div>
					);
				})}
			</ul>
		</nav>
	);
};
