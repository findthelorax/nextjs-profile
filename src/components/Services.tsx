import React from 'react';
import { services } from '../helpers/userInfo';

const Services: React.FC = () => {
    return (
        <div>
            {services.map((service, index) => (
                <div key={index}>
                    <h2>{service.name}</h2>
                    <img src={service.image} alt={service.name} />
                    <p>{service.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Services;