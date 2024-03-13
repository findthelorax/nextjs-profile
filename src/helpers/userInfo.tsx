import { FaPython, FaJs, FaHtml5, FaCss3Alt, FaSnowboarding } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiMongodb, SiPostgresql, SiTailwindcss, SiDocker, SiMui } from 'react-icons/si';
import { GiEagleEmblem } from 'react-icons/gi';

export const userInfo = {
    address: 'Stowe, Vermont',
    phone: '802-555-5555',
    email: 'dksdrone@gmail.com',
    socials: {
        github: 'https://github.com/yourusername',
        linkedin: 'https://linkedin.com/in/yourusername',
        youtube: 'https://www.youtube.com',
        instagram: 'https://www.instagram.com',
        facebook: 'https://www.facebook.com',
    },
};

export const skills = [
    { language: 'JavaScript', icon: <FaJs size={50} /> },
    { language: 'TypeScript', icon: <SiTypescript size={50} /> },
    { language: 'HTML/CSS', icon: (
        <div className="flex justify-center space-x-2">
            <FaHtml5 size={50} />
            <FaCss3Alt size={50} />
        </div>
    )},
    { language: 'Tailwind', icon: <SiTailwindcss size={50} /> },
    { language: 'MUI', icon: <SiMui size={50} /> },
    { language: 'Next.js', icon: <SiNextdotjs size={50} /> },
    { language: 'Python', icon: <FaPython size={50} /> },
    { language: 'MongoDB', icon: <SiMongodb size={50} /> },
    { language: 'PostgreSQL', icon: <SiPostgresql size={50} /> },
    { language: 'Docker', icon: <SiDocker size={50} /> },
    { language: 'Eagle Scout', icon: <GiEagleEmblem size={50} /> },
    { language: 'Ski Patrol', icon: <FaSnowboarding size={50} /> },
];

export const DSkills = [
    { service: 'Weddings', icon: <FaJs size={50} /> },
    { service: 'Real Estate', icon: <SiTypescript size={50} /> },
    { service: 'Inspections', icon: <SiTailwindcss size={50} /> },
    { service: '3D Modeling', icon: <SiMui size={50} /> },
    { service: 'Orthomosaic Mapping', icon: <SiNextdotjs size={50} /> },
    { service: 'Custom Requests', icon: <FaPython size={50} /> },
];

export const services = [
    {
        name: 'Weddings',
        image: '/path/to/your/image.jpg', // replace with the path to your image
        description: `
            Drone Photography has drastically changed real estate marketing. Well-planned, professionally-edited aerial photos generate a sense of awe and interest in the properties that you simply can’t get from traditional ground-based photography.

            Aerial shots of a property are no longer reserved for super high-end properties. Drones have dramatically reduced the price of these unique perspectives, so take advantage of the opportunity to provide your potential buyer with a bird’s-eye view of their future home.

            Some of the most important features of a property include the quality of landscaping, walking paths, pools, backyards, and gardens. Drone images highlight all of these in a compelling, dramatic way.

            Drones also provide special perspective, showing not only the entire property, but also nearby amenities such as schools, playgrounds, parks, stores, and surrounding scenery. The whole neighborhood is captured, creating an emotional connection to the area.

            Provide your potential buyer with 360 aerial views of the entire property and land, and watch how quickly your listings will sell!
        `,
    },
    {
        name: 'Real Estate',
        image: '/path/to/your/image.jpg', // replace with the path to your image
        description: `
            Drone Photography has drastically changed real estate marketing. Well-planned, professionally-edited aerial photos generate a sense of awe and interest in the properties that you simply can’t get from traditional ground-based photography.

            Aerial shots of a property are no longer reserved for super high-end properties. Drones have dramatically reduced the price of these unique perspectives, so take advantage of the opportunity to provide your potential buyer with a bird’s-eye view of their future home.

            Some of the most important features of a property include the quality of landscaping, walking paths, pools, backyards, and gardens. Drone images highlight all of these in a compelling, dramatic way.

            Drones also provide special perspective, showing not only the entire property, but also nearby amenities such as schools, playgrounds, parks, stores, and surrounding scenery. The whole neighborhood is captured, creating an emotional connection to the area.

            Provide your potential buyer with 360 aerial views of the entire property and land, and watch how quickly your listings will sell!
        `,
    },
    {
        name: 'Inspections',
        image: '/path/to/your/image.jpg', // replace with the path to your image
        description: `
            Are you looking for a safe, fast, and easy way to collect visual data on hard-to-reach places?

            By using a drone to evaluate the condition of an asset, you avoid having to place yourself in a dangerous situation. Instead of climbing several stories in the air on a tower to take a close look at a guy-wire, or scaling scaffolding to view construction progress, why not send a drone instead?

            Here are some examples of the almost endless applications for drones:

            Scheduled commercial inspection and construction monitoring
            Insurance inspections
            Home and roof inspections
            Chimney and steeple inspections
            Utility inspections
            Water system inspections
            Solar farm inspections
            Wind farm inspections
            Railroad inspections
            Bridge inspections
        `,
    },
    {
        name: '3D Modeling',
        image: '/path/to/your/image.jpg', // replace with the path to your image
        description: `
            Are you looking for a safe, fast, and easy way to collect visual data on hard-to-reach places?

            By using a drone to evaluate the condition of an asset, you avoid having to place yourself in a dangerous situation. Instead of climbing several stories in the air on a tower to take a close look at a guy-wire, or scaling scaffolding to view construction progress, why not send a drone instead?

            Here are some examples of the almost endless applications for drones:

            Scheduled commercial inspection and construction monitoring
            Insurance inspections
            Home and roof inspections
            Chimney and steeple inspections
            Utility inspections
            Water system inspections
            Solar farm inspections
            Wind farm inspections
            Railroad inspections
            Bridge inspections
        `,
    },
    {
        name: 'Orthomosaic Mapping',
        image: '/path/to/your/image.jpg', // replace with the path to your image
        description: `
            Are you looking for a safe, fast, and easy way to collect visual data on hard-to-reach places?

            By using a drone to evaluate the condition of an asset, you avoid having to place yourself in a dangerous situation. Instead of climbing several stories in the air on a tower to take a close look at a guy-wire, or scaling scaffolding to view construction progress, why not send a drone instead?

            Here are some examples of the almost endless applications for drones:

            Scheduled commercial inspection and construction monitoring
            Insurance inspections
            Home and roof inspections
            Chimney and steeple inspections
            Utility inspections
            Water system inspections
            Solar farm inspections
            Wind farm inspections
            Railroad inspections
            Bridge inspections
        `,
    },
    {
        name: 'Custom Requests',
        image: '/path/to/your/image.jpg', // replace with the path to your image
        description: `
            Are you looking for a safe, fast, and easy way to collect visual data on hard-to-reach places?

            By using a drone to evaluate the condition of an asset, you avoid having to place yourself in a dangerous situation. Instead of climbing several stories in the air on a tower to take a close look at a guy-wire, or scaling scaffolding to view construction progress, why not send a drone instead?

            Here are some examples of the almost endless applications for drones:

            Scheduled commercial inspection and construction monitoring
            Insurance inspections
            Home and roof inspections
            Chimney and steeple inspections
            Utility inspections
            Water system inspections
            Solar farm inspections
            Wind farm inspections
            Railroad inspections
            Bridge inspections
        `,
    },
];