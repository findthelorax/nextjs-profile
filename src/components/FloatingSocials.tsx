import React from 'react';
import { FaYoutube, FaInstagram, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { userInfo } from '../helpers/userInfo';

const FloatingSocials: React.FC = () => {
    return (
        <div className="absolute top-0 right-0 flex justify-around">
            <a
                href={userInfo.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="bubble youtube mr-6"
            >
                <FaYoutube size={20} />
            </a>
            <a
                href={userInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bubble instagram mr-6"
            >
                <FaInstagram size={20} />
            </a>
            <a
                href={userInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bubble facebook mr-6"
            >
                <FaFacebook size={20} />
            </a>
        </div>
    );
};

export default FloatingSocials;