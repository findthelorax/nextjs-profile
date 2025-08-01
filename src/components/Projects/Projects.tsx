import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';
import ProjectImage from './ProjectImage';
import projects from './ProjectsData';

const ProjectRow = ({ project, index }: { project: any; index: number }) => {
    const { title, description, languages, image, url } = project;
    const [ref, inView] = useInView({ triggerOnce: true });
    const props = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : `translateX(${index % 2 === 0 ? '100%' : '-100%'})`,
        config: { ...config.slow, duration: 1000 },
        delay: 300,
    });
    return (
        <animated.div
            ref={ref}
            style={props}
            className="flex justify-center items-center"
            key={index}
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

const Projects = () => {
    return (
        <section id="projects" className="container mx-auto pt-20 px-4 md:px-12" style={{ overflowX: 'hidden' }}>
            <div className="mx-auto">
                <div className="w-full text-white text-center py-2 projects-title">
                    <h1>PROJECTS</h1>
                </div>
                {projects.map((project, index) => (
                    <ProjectRow project={project} index={index} key={index} />
                ))}
            </div>
        </section>
    );
};

export default Projects;