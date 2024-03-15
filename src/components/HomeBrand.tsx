import React from 'react';
import '../styles/globals.css';

const HomeBrand: React.FC = () => {
    const text1 = Array.from('DKS');
    const text2 = Array.from('DRONE');

    return (
        <div>
            <h1 className="home-brand" style={{position: 'absolute', top: '49vh', left: '20vw'}}>
                {text1.map((letter, index) => <span key={index} style={{animationDelay: `${index * 1}s`}}>{letter}</span>)}
            </h1>
            <h1 className="home-brand-2" style={{position: 'absolute', top: '60vh', left: '20vw'}}>
                {text2.map((letter, index) => <span key={index} style={{animationDelay: `${(index + text1.length) * 1}s`}}>{letter}</span>)}
            </h1>
        </div>
    );
};

export default HomeBrand;