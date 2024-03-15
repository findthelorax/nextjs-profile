import React from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface HamburgerMenuProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, toggleMenu }) => {
    const router = useRouter();

    return (
        <>
            <button onClick={toggleMenu} className='ml-6'>
                {isOpen ? (
                    <AiOutlineClose className="h-6 w-6 text-gray-500" />
                ) : (
                    <AiOutlineMenu className="h-6 w-6 text-gray-500" />
                )}
            </button>
            {isOpen && (
                <div className="fixed top-0 left-0 w-64 h-screen shadow-md z-10000 transform transition-transform duration-200 ease-in-out">
                    <nav className="flex flex-col p-6 space-y-4">
                        {['Home', 'Portfolio', 'Services', 'About', 'Contact'].map((item, index) => (
                            <Link key={index} href={`/${item.toLowerCase()}`}>
                                <p
                                    className={`block p-2 transition-colors duration-200 ease-in-out ${
                                        router.pathname === `/${item.toLowerCase()}` ? 'text-blue-500' : ''
                                    }`}
                                    onClick={toggleMenu}
                                >
                                    {item.toUpperCase()}
                                </p>
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </>
    );
};

export default HamburgerMenu;