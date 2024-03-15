import React from 'react';
import HomeBrand from './HomeBrand';
import HomeCard from './HomeCard';
import DroneImage from './DroneImage';
import NavBar from './NavBar';

const HomePage: React.FC = () => {
    return (
        <>
            <NavBar />
        <div style={{
            height: '80vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            backgroundColor: 'var(--background-color)',
            backgroundImage: 'url(/assets/topo1.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <DroneImage src="/assets/phantom.png" alt="Mavic Pro" />
            <HomeBrand />
            <HomeCard />
        </div>
        </>
    );
};

export default HomePage;