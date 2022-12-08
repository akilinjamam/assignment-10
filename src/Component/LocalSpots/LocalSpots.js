import React, { useEffect, useState } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Slider from "react-slick";

import { Link } from 'react-router-dom';
import LocalSpot from '../LocalSpot/LocalSpot';
import './LocalSpots.css'

const LocalSpots = () => {

    // navigation for react-slick
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    //   API
    const [localSpots, setLocal] = useState([]);
    const localSpotsSliced = localSpots.slice(0, 8)
    useEffect(() => {
        fetch('localService.json')
            .then(res => res.json())
            .then(data => setLocal(data))
    }, [])
    return (
        <div  >
            <h2 className='title'>VISIT BANGLADESH</h2>
            <br />


            <div>
                <Slider {...settings}>
                    {
                        localSpotsSliced.map(localSpot => <LocalSpot
                            key={localSpot.id}
                            localSpot={localSpot}
                        ></LocalSpot>)
                    }
                </Slider>
            </div>

            <br /><br />
            <Link to='/visitingspot' className='d-block mx-auto btn btn-primary w-25' >Visit More Spots</Link>
            <br />
            <br />
            <hr />


        </div>
    );
};

export default LocalSpots;