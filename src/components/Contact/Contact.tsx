import React from 'react';
import { FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';
import ContactCard from './ContactCard';
import { userInfo } from '../../helpers/userInfo';

const ContactSection: React.FC = () => {
	return (
		<section id="contact" className="flex flex-col md:flex-row justify-center">
			<div className="flex flex-col items-center text-center p-12 w-full md:w-1/4 lg:w-1/4">
				<h1 className="mb-4 text-4xl">CONTACT</h1>
				<p className="mb-8">Have a question? Please reach out.</p>
				<p className="mb-1">Address</p>
				<p className="mb-2 contact-subText">{userInfo.address}</p>
				<p className="mb-1">Phone</p>
				<p className="mb-2 contact-subText">{userInfo.phone}</p>
				<p className="mb-1">Email</p>
				<p className="mb-8 contact-subText">{userInfo.email}</p>
				<div className="flex justify-around w-1/2">
					<a
						href={userInfo.socials.youtube}
						target="_blank"
						rel="noopener noreferrer"
						className="hover:animate-bounce mr-6"
					>
						<FaYoutube size={30} />
					</a>
					<a
						href={userInfo.socials.instagram}
						target="_blank"
						rel="noopener noreferrer"
						className="hover:animate-bounce mr-6"
					>
						<FaInstagram size={30} />
					</a>
					<a
						href={userInfo.socials.facebook}
						target="_blank"
						rel="noopener noreferrer"
						className="hover:animate-bounce"
					>
						<FaFacebook size={30} />
					</a>
				</div>
			</div>
			<div className="w-full md:w-1/2 lg:w-1/2">
				<ContactCard />
			</div>
		</section>
	);
};

export default ContactSection;