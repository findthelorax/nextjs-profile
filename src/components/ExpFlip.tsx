import React from 'react';
import { DSkills } from '../helpers/userInfo';

const Experience = () => {
    return (
        <section id="experience" className="flex justify-center div-bg">
        <div className="grid grid-cols-3 gap-4 w-3/4 mx-auto m-20">
            {DSkills.map((item, index) => (
                <div key={index} className="flex flex-col justify-between items-center text-center glass-style h-full">
                    <div className="mb-4">{item.icon}</div>
                    <div className="text-lg font-bold flex-grow">{item.service}</div>
                </div>
            ))}
        </div>
        </section>
    );
};

export default Experience;