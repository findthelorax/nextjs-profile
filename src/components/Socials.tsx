import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { userInfo } from '../helpers/userInfo';

const Socials: React.FC = () => {
    return (
        <div className="flex justify-center space-x-4">
            <a href={userInfo.socials.github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-6 h-6 text-gray-500 hover:text-gray-700" />
            </a>
            <a href={userInfo.socials.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-6 h-6 text-gray-500 hover:text-gray-700" />
            </a>
        </div>
    );
};

export default Socials;