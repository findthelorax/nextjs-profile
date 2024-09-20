import React from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    languages: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, languages }) => {
    return (
        <div className="max-w-screen-md mx-auto m-6 shadow-lg project-card">
            <div className="px-6 py-4">
                <div className=" project-title font-bold text-center mb-2">{title}</div>
                <p className="project-description text-black">{description}</p>
                <div className="px-6 pt-4 pb-2">
                    {languages.map((lang, index) => (
                        <span key={index} className="project-languages inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 mb-2">
                            {lang}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;