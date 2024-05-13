type NavigationItem = {
	href: string;
	label: string;
	icon: string;
	selectedIcon: string;
};

export const NavigationItems: NavigationItem[] = [
	{
		href: '/',
		label: 'Home',
		icon: '/static/home.svg',
		selectedIcon: '/static/home-selected.svg'
	},
	{
		href: '/events',
		label: 'Works',
		icon: '/static/events.svg',
		selectedIcon: '/static/events-selected.svg'
	},
	{
		href: '/community',
		label: 'Socials',
		icon: '/static/community.svg',
		selectedIcon: '/static/community-selected.svg'
	}
];
