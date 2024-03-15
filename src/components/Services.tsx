import React from 'react';
import { services } from '../helpers/services';
import Image from 'next/image';

const Services: React.FC = () => {
    return (
        <div>
            {services.map((service, index) => (
                <div key={index}>
                    <h2>{service.name}</h2>
                    <Image src={service.image} alt={service.name} width={500} height={300} />
                    <p>{service.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Services;