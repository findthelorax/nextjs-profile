import React from 'react';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { useIsMounted } from '../hooks/useIsMounted';
import Link from 'next/link';

const NavBar: React.FC = () => {
	const { theme, setTheme, resolvedTheme } = useTheme();
	const isMounted = useIsMounted();

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	if (!isMounted) {
		return null;
	}

	return (
		<div className={`flex justify-center pb-6 navbar ${resolvedTheme === 'dark' ? 'dark' : ''}`}>
			<nav
				className="flex items-center justify-between mt-6"
				style={{
					width: '60%',
				}}
			>
				<div>
					<h1 className="text-2xl">Logo</h1>
				</div>
				<div className="flex items-center">
					<ul className="flex space-x-4">
						<Link href="/">
							<span>Home</span>
						</Link>
						<li>
							<a href="#portfolio">Portfolio</a>
						</li>
						<li>
							<a href="#experience">Experience</a>
						</li>
						<li>
							<Link href="/about">
								<span>About</span>
							</Link>
						</li>
						<li>
							<a href="/#contact">Contact</a>
						</li>
					</ul>
					<button onClick={toggleTheme} className="ml-4">
						{theme === 'dark' ? (
							<SunIcon className="h-6 w-6 text-gray-800" />
						) : (
							<MoonIcon className="h-6 w-6 text-gray-500" />
						)}
					</button>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
