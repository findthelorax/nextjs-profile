import React from 'react';
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

const SkillsScroll = () => {
    const [selectedSkill, setSelectedSkill] = React.useState<Skill | null>(null);

    const handleCardClick = (skill: Skill) => {
        setSelectedSkill(skill);
        // Display more information about the skill
    };

    return (
        <section className="flex justify-center items-center">
            <div className="scroll">
                <div className="scrolling">
                    {skills.map((skill) => (
                        <div key={skill.name} onClick={() => handleCardClick(skill)} className="skills-card-div">
                        <span className="skills-card-span">
                            <div className="skills-content">
                                    {skill.icon}
                                    <span className="skills-text">{skill.name}</span>
                                </div>
                            </span>
                        </div>
                    ))}
                    {skills.map((skill) => (
                        <div key={skill.name + 'duplicate'} onClick={() => handleCardClick(skill)} className="skills-card-div">
                        <span className="skills-card-span">
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