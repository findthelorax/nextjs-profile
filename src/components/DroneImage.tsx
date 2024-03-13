import React, { useEffect, useRef } from 'react';

const DroneImage: React.FC<{ src: string, alt?: string }> = ({ src, alt }) => {
    const imgRef = useRef(null);

    useEffect(() => {
        const img = imgRef.current;

        const handleMouseMove = (event) => {
            const rect = img.getBoundingClientRect();

            // get mouse position relative to the image
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            // adjust the middle to be further to the right
            const middleX = rect.width * 0.75;
            const middleY = rect.height / 2;

            // get offset from middle as a percentage
            // limit offsetX and offsetY to the range [-20, 20] to prevent spinning out of control
            let offsetX = ((x - middleX) / middleX) * 20;
            offsetX = Math.max(-40, Math.min(20, offsetX));

            let offsetY = ((y - middleY) / middleY) * 20;
            offsetY = Math.max(-30, Math.min(20, offsetY));

            // set rotation
            img.style.transform = `perspective(1000px) rotateY(${offsetX}deg) rotateX(${-offsetY}deg)`;
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <img ref={imgRef} src={src} alt={alt} style={{width: '50vw', height: 'auto', position: 'absolute', zIndex: 1, right: '5vw'}} />
    );
};

export default DroneImage;