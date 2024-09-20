import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';
import ProjectImage from './ProjectImage';

interface AnimatedProjectProps {
    project: {
        title: string;
        description: string;
        languages: string[];
        image: string;
        url: string;
    };
    index: number;
}

const AnimatedProject: React.FC<AnimatedProjectProps> = ({ project, index }) => {
    const { title, description, languages, image, url } = project;
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const props = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : `translateX(${index % 2 === 0 ? '100%' : '-100%'})`,
        config: { ...config.slow, duration: 1000 },
        delay: 300,
    });

    const alignment = index % 2 === 0 ? 'justify-start' : 'justify-end';

    return (
        <animated.div
            ref={ref}
            style={props}
            className={`flex ${alignment} items-center`}
        >
            {index % 2 === 0 ? (
                <>
                    <ProjectImage image={image} title={title} url={url} />
                    <ProjectCard title={title} description={description} languages={languages} />
                </>
            ) : (
                <>
                    <ProjectCard title={title} description={description} languages={languages} />
                    <ProjectImage image={image} title={title} url={url} />
                </>
            )}
        </animated.div>
    );
};

export default AnimatedProject;