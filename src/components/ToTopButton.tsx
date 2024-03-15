import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to top smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className="scroll-to-top">
            {isVisible && (
                <div onClick={scrollToTop} className="fixed bottom-2 right-2 bg-gray-600 text-white p-2 rounded-full cursor-pointer">
                    <FaArrowUp />
                </div>
            )}
        </div>
    );
};

export default ToTopButton;