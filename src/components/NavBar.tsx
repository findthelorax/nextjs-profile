import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useIsMounted } from '../hooks/useIsMounted';
import Link from 'next/link';
import { useRouter } from 'next/router';
import HamburgerMenu from './HamburgerMenu';

const NavBar: React.FC = () => {
	const { theme, setTheme, resolvedTheme } = useTheme();
	const isMounted = useIsMounted();
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	if (!isMounted) {
		return null;
	}

	return (
		<div className="flex justify-center navbar-container">
			<div className={`flex justify-between w-3/4`}>
				<div className="mt-2 text-4xl navbar-brand">DKS DRONE</div>
                <nav className="flex items-center mt-6">
                    <div className="md:hidden">
                        <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
                    </div>
                    <div className="hidden md:flex items-center navbar-text">
						<ul className="flex space-x-4 ml-6">
							<li className={`navbar-item ${router.pathname === "/" ? "active" : ""}`}>
								<Link href="/">HOME</Link>
							</li>
							<li className={`navbar-item ${router.pathname === "/portfolio" ? "active" : ""}`}>
								<Link href="/portfolio">PORTFOLIO</Link>
							</li>
							<li className={`navbar-item ${router.pathname === "/services" ? "active" : ""}`}>
								<Link href="/#services">SERVICES</Link>
							</li>
							<li className={`navbar-item ${router.pathname === "/about" ? "active" : ""}`}>
								<Link href="/about">ABOUT</Link>
							</li>
							<li className={`navbar-item ${router.pathname === "/contact" ? "active" : ""}`}>
								<Link href="/#contact">CONTACT</Link>
							</li>
						</ul>
						<button onClick={toggleTheme} className="ml-4">
							{theme === 'dark' ? (
								<FiSun className="h-6 w-6 text-gray-800" />
							) : (
								<FiMoon className="h-6 w-6 text-gray-500" />
							)}
						</button>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default NavBar;