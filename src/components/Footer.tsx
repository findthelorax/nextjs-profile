import React from 'react';
import { useTheme } from 'next-themes';
import { useIsMounted } from '../hooks/useIsMounted';

const Footer: React.FC = () => {
    const { resolvedTheme } = useTheme();
    const isMounted = useIsMounted();
    const year = new Date().getFullYear();

    if (!isMounted) {
        return null;
    }

    return (
        <footer className={`${resolvedTheme === 'dark' ? 'dark' : ''}`}>
            <p>© {year} Brett Ferrante</p>
        </footer>
    );
};

export default Footer;