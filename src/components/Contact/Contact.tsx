import React from 'react';
import { FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';
import ContactCard from './ContactCard';
import { userInfo } from '../../helpers/userInfo';

const ContactSection: React.FC = () => {
	return (
		<section id="contact" className="flex justify-center div-bg">
			<div className="div-bg flex flex-col items-center text-center w-1/2 pt-12">
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
						className="hover:animate-bounce"
					>
						<FaYoutube size={30} />
					</a>
					<a
						href={userInfo.socials.instagram}
						target="_blank"
						rel="noopener noreferrer"
						className="hover:animate-bounce"
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
			<div>
				<ContactCard />
			</div>
		</section>
	);
};

export default ContactSection;
