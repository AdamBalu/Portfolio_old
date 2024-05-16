import React from 'react';

import { NavigationItems } from '@/data/navigation-list';

export const Navigation = async () => (
	<nav className="menu--right" role="navigation">
		<div className="menuToggle">
			<input type="checkbox" />
			<span />
			<span />
			<span />
			<ul className="menuItem rounded-bl-2xl">
				{NavigationItems.map((item, _) => (
					<li key={item.label} className="my-6 uppercase">
						<a href={item.href}>{item.label}</a>
					</li>
				))}
			</ul>
		</div>
	</nav>
);
