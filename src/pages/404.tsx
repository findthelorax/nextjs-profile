import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Custom404: React.FC = () => {
    const router = useRouter();

    useEffect(() => {
        console.error('Page not found, redirecting to homepage...');
        router.replace('/');
    }, [router]);

    return <p>Page not found, redirecting...</p>;
};

export default Custom404;