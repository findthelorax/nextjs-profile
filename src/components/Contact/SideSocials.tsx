import React from "react";
import { AiTwotoneMail } from "react-icons/ai";
import { PiGithubLogoDuotone, PiLinkedinLogoDuotone } from "react-icons/pi";
import { useSpring, animated } from "react-spring";

const SideSocials = () => {
    const socials = [
        {
            Icon: AiTwotoneMail,
            link: "mailto:your-email@example.com",
            color: "#FF6B6B",
        },
        {
            Icon: PiLinkedinLogoDuotone,
            link: "https://www.linkedin.com/in/brett-ferrante",
            color: "#0A66C2",
        },
        {
            Icon: PiGithubLogoDuotone,
            link: "https://github.com/findthelorax",
            color: "#6f42c1",
        },
    ];

    const springs = socials.map((_, index) =>
        useSpring({
            from: { transform: "translate3d(0,-800px,0) rotate(0deg)" },
            to: { transform: "translate3d(0,0px,0) rotate(720deg)" },
            delay: 500 * index,
            config: { tension: 5, friction: 2 },
        })
    );

    return (
        <div className="socials-container">
            <div className="icons-container pl-6">
                {socials.map(({ Icon, link, color }, index) => (
                    <animated.div
                        key={index}
                        className="icon-circle pb-3"
                        style={springs[index]}
                    >
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icon size={30} color={color} />
                        </a>
                    </animated.div>
                ))}
            </div>
            <div className="rotated-text">CONTACT ME</div>
        </div>
    );
};

export default SideSocials;
