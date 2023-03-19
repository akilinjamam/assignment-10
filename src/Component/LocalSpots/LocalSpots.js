import React, { useEffect, useState } from 'react';
import { Parallax } from 'react-parallax';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Slider from "react-slick";

import { Link, useParams } from 'react-router-dom';
import LocalSpot from '../LocalSpot/LocalSpot';
import './LocalSpots.css'
import river from '../../background-image/river.jpg'

const LocalSpots = () => {

    // navigation for react-slick
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
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
    }, []);


    return (

        <Parallax strength={300} bgImage={river} >
            <div style={{ width: '100%', overflowX: 'hidden', scrollBehavior: 'smooth' }}  >
                <div data-aos='flip-up' data-aos-duration='1000'>
                    <h2 style={{ color: 'white' }} className='title'>VISIT BANGLADESH</h2>
                </div>
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

                <br /><br /><br />
                <Link to='/tourHome' className='d-block mx-auto btn btn-primary w-25' >Visit More Spots</Link>
                <br />
                <br />
            </div>

        </Parallax>
    );
};

export default LocalSpots;