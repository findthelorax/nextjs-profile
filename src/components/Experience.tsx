import React from 'react';
import { FaPython, FaJs, FaHtml5, FaCss3Alt, FaSnowboarding } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiMongodb, SiPostgresql } from 'react-icons/si';
import { GiEagleEmblem } from 'react-icons/gi';

const Experience = () => {
    const data = [
        { language: 'JavaScript', icon: <FaJs size={50} /> },
        { language: 'TypeScript', icon: <SiTypescript size={50} /> },
        { language: 'HTML/CSS', icon: (
            <div className="relative w-12 h-12">
                <FaHtml5 className="absolute left-[-1rem]" size={40} />
                <FaCss3Alt className="absolute right-[-1rem]" size={40} />
            </div>
        )},
        { language: 'Next.js', icon: <SiNextdotjs size={50} /> },
        { language: 'Python', icon: <FaPython size={50} /> },
        { language: 'MongoDB', icon: <SiMongodb size={50} /> },
        { language: 'PostgreSQL', icon: <SiPostgresql size={50} /> },
        { language: 'Eagle Scout', icon: <GiEagleEmblem size={50} /> },
        { language: 'Ski Patrol', icon: <FaSnowboarding size={50} /> },
    ];

    return (
        <div className="grid grid-cols-3 gap-4 w-1/2 mx-auto m-20">
            {data.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                    <div className="mb-2">{item.icon}</div>
                    <div className="mb-2 text-lg font-bold">{item.language}</div>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded">More Info</button>
                </div>
            ))}
        </div>
    );
};

export default Experience;