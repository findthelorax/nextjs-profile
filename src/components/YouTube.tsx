import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useMediaQuery } from 'react-responsive';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const videoIds = ['f4mUhKDI09k', 'lV0zxH9hjhk', 'QbbavdKtLF0', 'Srbw9wcmuSI'];

const YouTube: React.FC = () => {
    const isLargeScreen = useMediaQuery({ minWidth: 992 }); // Change this value based on your needs

    const renderVideos = (videoIds: string[]) => (
        <div className={`grid ${isLargeScreen ? 'grid-cols-2' : 'grid-cols-1'} gap-4`}>
            {videoIds.map((videoId, index) => (
                <div key={index}>
                    <iframe
                        width="100%"
                        height="350"
                        src={`https://www.youtube-nocookie.com/embed/${videoId}?mute=1`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            ))}
        </div>
    );

    const videoGroups = isLargeScreen
        ? videoIds.reduce((resultArray: string[][], item, index) => { // Add type annotation here
              const chunkIndex = Math.floor(index / 2);
              if (!resultArray[chunkIndex]) {
                  resultArray[chunkIndex] = []; // start a new chunk
              }
              resultArray[chunkIndex].push(item);
              return resultArray;
          }, [])
        : videoIds.map((video) => [video]);

    return (
        <section id='portfolio' className='div-bg'>
            <div className="flex flex-col items-center space-y-4 p-4">
                <Carousel
                    infiniteLoop
                    useKeyboardArrows
                    autoPlay
                    showThumbs={false}
                    transitionTime={2000}
                    interval={5000}
                >
                    {videoGroups.map((videoGroup, index) => (
                        <div key={index}>{renderVideos(videoGroup)}</div>
                    ))}
                </Carousel>
            </div>
        </section>
    );
};

export default YouTube;