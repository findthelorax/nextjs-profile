import React, { useRef } from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaDatabase, FaBootstrap, FaMountain, FaNode } from 'react-icons/fa';
import { GiMountainClimbing, GiJuggler, GiHealthNormal } from "react-icons/gi";
import { MdOutlinePedalBike } from "react-icons/md";
import { SiNextdotjs, SiMui, SiTypescript, SiJavascript, SiMongodb, SiExpress } from "react-icons/si";
import Image from 'next/image';
import yoyoIcon from '../../public/assets/yoyo(2).png';

type Skill = {
    name: string;
    icon: JSX.Element;
};

const skills: Skill[] = [
    { name: 'HTML', icon: <FaHtml5 className="skill-icon" /> },
    { name: 'CSS', icon: <FaCss3Alt className="skill-icon" /> },
    { name: 'Bootstrap', icon: <FaBootstrap className="skill-icon" /> },
    { name: 'MUI', icon: <SiMui className="skill-icon" /> },
    { name: 'JavaScript', icon: <SiJavascript className="skill-icon" /> },
    { name: 'TypeScript', icon: <SiTypescript className="skill-icon" /> },
    { name: 'MongoDB', icon: <SiMongodb className="skill-icon" /> },
    { name: 'Express', icon: <SiExpress className="skill-icon" /> },
    { name: 'React', icon: <FaReact className="skill-icon" /> },
    { name: 'Node.js', icon: <FaNode className="skill-icon" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="skill-icon" /> },
    { name: 'Yo-Yoer', icon: <Image src={yoyoIcon} alt="Yo-Yoer" width={40} height={40} style={{ marginLeft: '10px' }} /> },
    { name: 'Juggler', icon: <GiJuggler className="skill-icon" /> },
    { name: 'EMT', icon: <GiHealthNormal className="skill-icon" /> },
    { name: 'Mountaineer Guide', icon: <FaMountain className="skill-icon" /> },
    { name: 'Rock Climber', icon: <GiMountainClimbing className="skill-icon" /> },
    { name: 'Mountain Biker', icon: <MdOutlinePedalBike className="skill-icon" /> },
];

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

function isColorLight(hex: string) {
    hex = hex.replace('#', '');
    if (hex.length === 3) {
        hex = hex.split('').map(x => x + x).join('');
    }
    if (hex.length !== 6) return false;
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return (r * 0.299 + g * 0.587 + b * 0.114) > 100;
}

const SkillsScroll = () => {
    const cardRefs = useRef<(HTMLSpanElement | null)[]>([]);

    const handleMouseEnter = (idx: number) => {
        const color = getRandomColor();
        const el = cardRefs.current[idx];
        if (el) {
            el.style.backgroundColor = color;
            el.style.color = isColorLight(color) ? 'black' : 'white';
        }
    };

    const handleMouseLeave = (idx: number) => {
        const el = cardRefs.current[idx];
        if (el) {
            el.style.backgroundColor = 'black';
            el.style.color = 'white';
        }
    };

    // Render both main and duplicate in a single array for easier ref management
    const allSkills = [...skills, ...skills];

    return (
        <section className="flex justify-center items-center">
            <div className="scroll">
                <div className="scrolling">
                    {allSkills.map((skill, idx) => (
                        <div
                            key={skill.name + (idx < skills.length ? '-main' : '-duplicate')}
                            className="skills-card-div"
                        >
                            <span
                                className="skills-card-span"
                                ref={el => cardRefs.current[idx] = el}
                                style={{ backgroundColor: 'black', color: 'white' }}
                                onMouseEnter={() => handleMouseEnter(idx)}
                                onMouseLeave={() => handleMouseLeave(idx)}
                            >
                                <div className="skills-content">
                                    {skill.icon}
                                    <span className="skills-text">{skill.name}</span>
                                </div>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsScroll;