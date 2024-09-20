import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectImageProps {
    image: string;
    title: string;
    url: string;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ image, title, url }) => {
    return (
        <Link href={url} passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className="block max-w-screen-md mx-auto w-1/2 rounded-xl shadow-lg m-4">
                <Image src={image} alt={title} className="w-full h-1/2 rounded-xl" layout="responsive" width={500} height={300} />
            </a>
        </Link>
    );
};

export default ProjectImage;