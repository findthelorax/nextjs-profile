import { FaPython, FaJs, FaHtml5, FaCss3Alt, FaSnowboarding } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiMongodb, SiPostgresql, SiTailwindcss, SiDocker, SiMui } from 'react-icons/si';
import { GiEagleEmblem } from 'react-icons/gi';

export const userInfo = {
    address: 'Stowe, Vermont',
    phone: '802-555-5555',
    email: 'dksdrone@gmail.com',
    socials: {
        github: 'https://github.com/yourusername',
        linkedin: 'https://linkedin.com/in/yourusername',
        youtube: 'https://www.youtube.com',
        instagram: 'https://www.instagram.com',
        facebook: 'https://www.facebook.com',
    },
};

export const skills = [
    { language: 'JavaScript', icon: <FaJs size={50} /> },
    { language: 'TypeScript', icon: <SiTypescript size={50} /> },
    { language: 'HTML/CSS', icon: (
        <div className="flex justify-center space-x-2">
            <FaHtml5 size={50} />
            <FaCss3Alt size={50} />
        </div>
    )},
    { language: 'Tailwind', icon: <SiTailwindcss size={50} /> },
    { language: 'MUI', icon: <SiMui size={50} /> },
    { language: 'Next.js', icon: <SiNextdotjs size={50} /> },
    { language: 'Python', icon: <FaPython size={50} /> },
    { language: 'MongoDB', icon: <SiMongodb size={50} /> },
    { language: 'PostgreSQL', icon: <SiPostgresql size={50} /> },
    { language: 'Docker', icon: <SiDocker size={50} /> },
    { language: 'Eagle Scout', icon: <GiEagleEmblem size={50} /> },
    { language: 'Ski Patrol', icon: <FaSnowboarding size={50} /> },
];

export const DSkills = [
    { service: 'Weddings', icon: <FaJs size={50} /> },
    { service: 'Real Estate', icon: <SiTypescript size={50} /> },
    { service: 'Inspections', icon: <SiTailwindcss size={50} /> },
    { service: '3D Modeling', icon: <SiMui size={50} /> },
    { service: 'Orthomosaic Mapping', icon: <SiNextdotjs size={50} /> },
    { service: 'Custom Requests', icon: <FaPython size={50} /> },
];