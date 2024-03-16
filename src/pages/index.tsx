import React from 'react';
import Footer from '../components/Footer';
import ContactSection from '../components/Contact/Contact';
import Exoerience from '../components/Experience';
import YouTube from '../components/YouTube';
import HomePage from '@/components/Home';
import ToTopButton from '@/components/ToTopButton';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                <HomePage />
                <YouTube />
                <Exoerience />
                <ContactSection />
            </main>
            <ToTopButton />
            <Footer />
        </div>
    );
};

export default Home;