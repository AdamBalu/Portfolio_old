'use client';
import React from 'react';

import { scrollToSection } from '@/common/functions/scroll-to-section';
import { type NavigationItem } from '@/data/navigation-list';

export const NavButton = ({ item }: { item: NavigationItem }) => (
	<button onClick={() => scrollToSection(item.href)} className="uppercase">
		{item.label}
	</button>
);
