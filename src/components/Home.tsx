import React from 'react';
import HomeBrand from './HomeBrand';
import HomeCard from './HomeCard';
import DroneImage from './DroneImage';

const HomePage: React.FC = () => {
    return (
        <div style={{
            height: '95vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            backgroundColor: 'var(--background-color)',
            backgroundImage: 'url(/assets/topo.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            {/* <img src="/assets/mavic-pro.png" style={{width: '50vw', height: 'auto', position: 'absolute', zIndex: 1, right: '5vw'}} /> */}
            <DroneImage src="/assets/mavic-pro.png" alt="Mavic Pro" />
            <HomeBrand />
            <HomeCard />
        </div>
    );
};

export default HomePage;