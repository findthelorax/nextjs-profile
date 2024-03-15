import React from 'react';
import { FaYoutube, FaInstagram, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { userInfo } from '../helpers/userInfo';

const HomeSocials: React.FC = () => {
	return (
		<div className="flex">
			<a
				href={userInfo.socials.youtube}
				target="_blank"
				rel="noopener noreferrer"
				className="youtube-icon social-icon mr-6"
				style={{
					color: '#fff',
					backgroundColor: '#000',
					borderRadius: '20%',
					boxShadow: '0 0 10px rgba(0,0,0,0.5)',
				}}
			>
				<FaYoutube size={40} />
			</a>
			<a
				href={userInfo.socials.instagram}
				target="_blank"
				rel="noopener noreferrer"
				className="instagram-icon social-icon mr-6"
			>
				<svg width="50" height="50" viewBox="0 0 24 24">
					<linearGradient id="insta-gradient" x2="1" y2="1">
						<stop offset="0%" stopColor="#fff" />
						<stop offset="25%" stopColor="#fff" />
						fff <stop offset="75%" stopColor="#fff" />
						<stop offset="100%" stopColor="#fff" />
					</linearGradient>
					<path
						fill="url(#insta-gradient)"
						d="M12 2.163c3.204 0 3.584.012 4.85.07 1.24.056 1.852.24 2.295.511.564.345.97.799 1.319 1.508.349.709.455 1.064.511 2.305.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.24-.162 1.596-.511 2.305-.349.709-.755 1.163-1.319 1.508-.443.27-1.055.455-2.295.511-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.24-.056-1.852-.24-2.295-.511-.564-.345-.97-.799-1.319-1.508-.349-.709-.455-1.064-.511-2.305-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.056-1.24.162-1.596.511-2.305.349-.709.755-1.163 1.319-1.508.443-.27 1.055-.455 2.295-.511 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.275.059-2.153.275-2.91.577-.97.389-1.704.914-2.436 1.645-.732.731-1.257 1.466-1.646 2.436-.302.757-.518 1.635-.577 2.91-.058 1.28-.072 1.688-.072 4.947 0 3.259.014 3.667.072 4.947.059 1.275.275 2.153.577 2.91.389.97.914 1.704 1.645 2.436.731.732 1.466 1.257 2.436 1.646.757.302 1.635.518 2.91.577 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.275-.059 2.153-.275 2.91-.577.97-.389 1.704-.914 2.436-1.645.732-.731 1.257-1.466 1.646-2.436.302-.757.518-1.635.577-2.91.058-1.28.072-1.688.072-4.947 0-3.259-.014-3.667-.072-4.947-.059-1.275-.275-2.153-.577-2.91-.389-.97-.914-1.704-1.645-2.436-.731-.732-1.466-1.257-2.436-1.646-.757-.302-1.635-.518-2.91-.577-1.28-.058-1.688-.072-4.947-.072z"
					></path>
					<path
						fill="url(#insta-gradient)"
						d="M12 7.384c-2.549 0-4.616 2.067-4.616 4.616s2.067 4.616 4.616 4.616 4.616-2.067 4.616-4.616-2.067-4.616-4.616-4.616zm0 7.616c-1.655 0-3-1.345-3-3s1.345-3 3-3 3 1.345 3 3-1.345 3-3 3z"
					></path>
					<circle fill="url(#insta-gradient)" cx="18.406" cy="5.594" r="1.44"></circle>
				</svg>
			</a>
			<a
				href={userInfo.socials.facebook}
				target="_blank"
				rel="noopener noreferrer"
				className="facebook-icon social-icon mr-6"
				style={{
					color: '#fff',
					backgroundColor: '#000',
					borderRadius: '20%',
					boxShadow: '0 0 10px rgba(0,0,0,0.5)',
				}}
			>
				<FaFacebook size={40} />
			</a>
		</div>
	);
};

export default HomeSocials;
