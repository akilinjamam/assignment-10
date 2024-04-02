import React, { useEffect, useState } from 'react';
import { Blurhash } from 'react-blurhash';

const ImageComponent = ({ src, width, height }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setIsLoaded(true)
        }
        img.src = src
    }, [src])
    return (
        <>
            <div style={{ display: isLoaded ? 'none' : 'inline' }}>
                <Blurhash
                    hash='LEHV6nWB2yk8pyo0adR*.7kCMdnj'
                    width={width}
                    height={height}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                />
            </div>
            <img style={{ display: !isLoaded ? 'none' : 'inline' }} src={src} alt="" />
        </>
    );
};

export default ImageComponent;