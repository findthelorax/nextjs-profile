import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SafeOperationPolicy from '../components/OpPolicy';
import ToTopButton from '../components/ToTopButton';

const OpPolicyPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />
            <main className="flex-grow text-center text-black text-2xl">
                <h1 className="text-4xl">Operation Policy</h1>
                <SafeOperationPolicy />
            </main>
            <ToTopButton />
            <Footer />
        </div>
    );
};

export default OpPolicyPage;