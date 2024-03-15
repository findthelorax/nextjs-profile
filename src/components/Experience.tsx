import React from 'react';
import { DSkills } from '../helpers/userInfo';
import { services } from '../helpers/services';

const Experience = () => {
    return (
        <section id="services" className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 w-3/4 mx-auto m-20">
                {DSkills.map((item, index) => {
                    const matchedService = services.find(service => service.name === item.service);
                    return (
                        <div key={index} className="flip-card">
                            <div className="flip-card-inner transform transition-transform duration-700 ease-in-out">
                                <div className="flip-card-front flex flex-col justify-between items-center text-center glass-style h-full exp-card" style={{ backgroundImage: `url(${matchedService?.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                    <div className="text-lg font-bold flex-grow">{item.service}</div>
                                </div>
                                <div className="flip-card-back flex flex-col justify-center items-center text-center glass-style h-full absolute w-full h-full top-0 rotate-y-180">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl mb-4">
                                        More Info
                                    </button>
                                    {matchedService && (
                                        <>
                                            <p>{matchedService.blurb}</p>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Experience;