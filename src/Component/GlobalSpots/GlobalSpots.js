import React, { useEffect, useState } from 'react';
import './GlobalSpots.css'
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import GlobalSpot from '../GlobalSpot/GlobalSpot';
import { Parallax } from 'react-parallax';
import winter from '../../background-image/boxed-water-is-better-5Lw1U5BIumE-unsplash.jpg'
import tree from '../../background-image/Trees.jpg'

const GlobalSpots = () => {

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

    const [global, setGlobal] = useState([])
    const globalSliced = global.slice(0, 9)
    useEffect(() => {
        fetch('globalService.json')
            .then(res => res.json())
            .then(data => setGlobal(data))
    }, [])

    return (
        <Parallax strength={300} bgImage={winter} >
            <div className='globalSpotsMain' style={{ width: '100%', height: '125vh', overflowX: 'hidden' }} >
                <div className='globalSpot' data-aos='flip-up' data-aos-duration='1000'>
                    <h2 style={{ color: 'pink' }} className='title'>VISIT WORLD</h2>
                </div>


                <br />
                <br />

                <div >
                    <Slider {...settings}>
                        {
                            globalSliced.map(globalSpot => <GlobalSpot
                                key={globalSpot.id}
                                globalSpot={globalSpot}
                            ></GlobalSpot>)
                        }
                    </Slider>
                </div>
                <br />
                <Link to='/globalvisiting' className='d-block mx-auto btn btn-primary w-25' >Visit More Spots</Link>
                <br />
                <br />
            </div>
        </Parallax>
    );
};

export default GlobalSpots;