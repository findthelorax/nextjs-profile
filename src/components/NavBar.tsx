import { useEffect, useState, useRef } from 'react';
import { useTheme } from 'next-themes';
import { PiSunHorizonDuotone, PiMoonStarsDuotone } from "react-icons/pi";
import { useSpring, animated } from 'react-spring';
import { useWindowScroll } from 'react-use';
import Link from 'next/link';

export default function Navbar() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const { y } = useWindowScroll();
    const prevScrollPos = useRef(0);
    const [visible, setVisible] = useState(true);

    const fade = useSpring({
        opacity: visible ? 1 : 0,
        backdropFilter: visible ? 'blur(5px)' : 'blur(0px)',
        from: { opacity: 1, backdropFilter: 'blur(0px)' },
    });

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = y;
            if (prevScrollPos.current !== 0) {
                const visible = prevScrollPos.current > currentScrollPos;
                setVisible(visible);
            }
            prevScrollPos.current = currentScrollPos;
        };
        handleScroll();
    }, [y]);

    if (!mounted) {
        return null;
    }

    return (
        <animated.div style={fade} className="sticky top-0 z-50 nav-container relative bg-transparent navbar-gradient">
            <nav className="flex items-center justify-center p-4 mx-auto navbar">
                <div className="space-x-4">
                    <Link href="/" passHref>
                        <a className="nav-link">HOME</a>
                    </Link>
                    <Link href="/#projects" passHref>
                        <a className="nav-link">PROJECTS</a>
                    </Link>
                    <Link href="/about" passHref>
                        <a className="nav-link">ABOUT</a>
                    </Link>
                    <Link href="/#contact" passHref>
                        <a className="nav-link">CONTACT</a>
                    </Link>
                    <button className="align-middle text-2xl" onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
                        {resolvedTheme === 'dark' ? <PiSunHorizonDuotone color="#FDB813" /> : <PiMoonStarsDuotone color="#4A4A68" />}
                    </button>
                </div>
            </nav>
        </animated.div>
    );
}