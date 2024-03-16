import React from 'react';
import HomeBrand from './HomeBrand';
import HomeCard from './HomeCard';
import DroneImage from './DroneImage';
import NavBar from './NavBar';
import { useTheme } from 'next-themes';

const HomePage: React.FC = () => {
    const { theme } = useTheme();

    return (
        <>
            <NavBar />
            <div className={`homePage ${theme === 'light' ? 'light' : ''}`}>
                <div className="invertedImage"></div>
                
                {/* <DroneImage src="/assets/phantom.png" alt="Mavic Pro" /> */}
                <HomeBrand />
                <HomeCard />
            </div>
        </>
    );
};

export default HomePage;