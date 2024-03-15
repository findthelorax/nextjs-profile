import React from 'react';

const PhotoGrid: React.FC = () => {
    const photos = [
        '/assets/Real-Estate.jpeg',
        '/assets/Weddings.jpeg',
        '/assets/Inspections.jpeg',
        '/assets/Orthomosaic-Mapping.jpeg',
        '/assets/3d-Modeling.jpeg',
        '/assets/mavic-pro.pnng',
    ];

    return (
        <div className="grid grid-cols-3 grid-rows-3 gap-4 mx-auto">
            <div className="col-span-2 row-span-2 bg-cover bg-center min-h-[200px]" style={{ backgroundImage: `url(${photos[0]})` }} />
            <div className="col-span-1 row-span-2 bg-cover bg-center min-h-[200px]" style={{ backgroundImage: `url(${photos[1]})` }} />
            <div className="col-span-2 row-span-1 bg-cover bg-center min-h-[200px]" style={{ backgroundImage: `url(${photos[2]})` }} />
            <div className="col-span-2 row-span-2 bg-cover bg-center min-h-[200px]" style={{ backgroundImage: `url(${photos[3]})` }} />
            <div className="col-span-1 row-span-2 bg-cover bg-center min-h-[200px]" style={{ backgroundImage: `url(${photos[4]})` }} />
            <div className="col-span-2 row-span-1 bg-cover bg-center min-h-[200px]" style={{ backgroundImage: `url(${photos[5]})` }} />
        </div>
    );
};

export default PhotoGrid;