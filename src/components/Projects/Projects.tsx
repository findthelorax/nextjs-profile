import React from 'react';
import AnimatedProject from './AnimatedProject';
import projects from './ProjectsData';

const Projects = () => {
    return (
        <section id="projects" className='container mx-auto pt-20' style={{ overflowX: 'hidden' }}>
            <div className="mx-auto">
                <div className="w-full text-white text-center py-2 projects-title">
                    <h1>PROJECTS</h1>
                </div>
                {projects.map((project, index) => (
                    <AnimatedProject key={index} project={project} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Projects;