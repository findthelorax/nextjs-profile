import React from 'react';
import { FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';
import ContactCard from './ContactCard';

const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="flex justify-between">
            <div className="flex flex-col items-center w-1/2">
                <h2>CONTACT</h2>
                <p>INFORMATION...LOREM Ipsum</p>
                <p>Address</p>
                <p>Phone</p>
                <p>Email</p>
                <div className="flex justify-around w-full">
                    <FaYoutube />
                    <FaInstagram />
                    <FaFacebook />
                </div>
            </div>
            <div className="w-1/2">
                <ContactCard />
            </div>
        </section>
    );
};

export default ContactSection;