import React from 'react';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { useIsMounted } from '../hooks/useIsMounted';

const NavBar: React.FC = () => {
    const { theme, setTheme } = useTheme();
    const isMounted = useIsMounted();

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    if (!isMounted) {
        return null;
    }

    return (
        <div className="flex justify-center">
            <nav className="flex items-center justify-between p-6 w-1/2" style={{ backgroundColor: theme === 'dark' ? 'black' : 'white' }}>
                <div style={{ color: theme === 'dark' ? 'white' : 'black' }}>
                    <h1 className="text-2xl">Logo</h1>
                </div>
                <div className="flex items-center">
                    <ul className="flex space-x-4">
                        <li><a href="#home" style={{ color: theme === 'dark' ? 'white' : 'black' }}>Home</a></li>
                        <li><a href="#portfolio" style={{ color: theme === 'dark' ? 'white' : 'black' }}>Portfolio</a></li>
                        <li><a href="#experience" style={{ color: theme === 'dark' ? 'white' : 'black' }}>Experience</a></li>
                        <li><a href="#about" style={{ color: theme === 'dark' ? 'white' : 'black' }}>About</a></li>
                        <li><a href="#contact" style={{ color: theme === 'dark' ? 'white' : 'black' }}>Contact</a></li>
                    </ul>
                    <button onClick={toggleTheme} className="ml-4">
                        {theme === 'dark' ? <SunIcon className="h-6 w-6 text-gray-800" /> : <MoonIcon className="h-6 w-6 text-gray-500" />}
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;