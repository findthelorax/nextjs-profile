import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const Footer: React.FC = () => {
    const { resolvedTheme } = useTheme();
    const year = new Date().getFullYear();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <footer className={`${mounted && resolvedTheme === 'dark' ? 'dark' : ''} text-center pb-4 footer`}>
            <p>© {year} BRETT FERRANTE</p>
        </footer>
    );
};

export default Footer;