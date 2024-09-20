import React from 'react';

interface ProjectImageProps {
    image: string;
    title: string;
    url: string;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ image, title, url }) => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="block max-w-screen-md mx-auto w-1/2 rounded-xl shadow-lg m-4">
            <img src={image} alt={title} className="w-full h-1/2 rounded-xl" />
        </a>
    );
};

export default ProjectImage;