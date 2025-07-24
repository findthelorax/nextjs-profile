import React from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    languages: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, languages }) => {
    return (
        <div className="w-full max-w-screen-md mx-auto m-6 shadow-lg project-card">
            <div className="px-4 md:px-6 py-4">
                <div className="project-title font-bold text-center mb-2 text-lg md:text-2xl">{title}</div>
                <p className="project-description text-black text-base md:text-lg">{description}</p>
                <div className="px-0 md:px-6 pt-4 pb-2">
                    {languages.map((lang, index) => (
                        <span key={index} className="project-languages inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 mb-2 text-xs lg:text-base">
                            {lang}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;