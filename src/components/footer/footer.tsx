import React from 'react';

import { Socials } from '@/components/socials/socials';

// TODO link to icons8
export const Footer = () => (
	<footer className="flex text-white py-1 min-h-64 bg-slate-700">
		<div className="flex flex-col items-center justify-center w-full gap-4">
			<Socials />
			<a href="https://icons8.com" className="text-gray-400 text-sm underline">
				super awesome icons by icons8.com
			</a>
			<p className="text-sm">
				Designed in 2024 ❤️&nbsp;|&nbsp;&copy;&nbsp;Adam Balušeskul
			</p>
		</div>
	</footer>
);
