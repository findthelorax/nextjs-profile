import React from 'react';
import { services } from '../helpers/userInfo';
import Link from 'next/link';

const FlipCard = ({ item, index }) => {
    return (
        <div key={index} className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front glass-style flex flex-col justify-between items-center text-center h-full">
                    <div className="mb-4">{item.icon}</div>
                    <div className="text-lg font-bold flex-grow">{item.service}</div>
                </div>
                <div className="flip-card-back glass-style">
                    <img src={services[index].image} alt={services[index].name} className="bursting-image" />
                    <div className="p-4">
                        <h2 className="text-lg font-bold mb-2">{services[index].name}</h2>
                        <p>{services[index].description}</p>
                        <Link href="/services" className="px-4 py-2 bg-blue-500 text-white rounded mt-4">More Info</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlipCard;