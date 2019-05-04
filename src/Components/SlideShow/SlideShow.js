import React from 'react';
import { Zoom } from 'react-slideshow-image';

import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';

const images = [
    img1,
    img2,
    img3
];

const zoomOutProperties = {
    duration: 2000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true
}

const Slideshow = () => {
    return (
        <Zoom {...zoomOutProperties}>
            {
                images.map((each, index) => <img key={index} style={{width: "100%",height:'400px'}} src={each}  alt="test"/>)
            }
        </Zoom>
    )
}



export default Slideshow;