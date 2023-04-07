import React, { useContext, useEffect, useState } from 'react';
import { Parallax } from 'react-parallax';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Slider from "react-slick";

import { Link } from 'react-router-dom';
import LocalSpot from '../LocalSpot/LocalSpot';
import './LocalSpots.css'
import river from '../../background-image/river.jpg'
import { useQuery } from 'react-query';
import fetchHomeData from '../../fetchData/fetchHomeData';
import Loading from '../../Loading/Loading';
import noteContext from '../../Context/noteContext';


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

    const state = useContext(noteContext);


    // fetch home data:

    const { data, isLoading, } = useQuery("localSpots", () => fetchHomeData(), {
        cacheTime: true
    });



    const homeEvents = data?.data?.result;

    useEffect(() => {
        state.setHomeData(homeEvents);
    }, [state, homeEvents]);

    if (isLoading) {
        return <Loading></Loading>
    }

    return (


        <div style={{ width: '100%', overflowX: 'hidden', scrollBehavior: 'smooth' }}  >
            <div data-aos='flip-up' data-aos-duration='1000'>
                <h2 style={{ color: 'gray' }} className='title'>VISIT BANGLADESH</h2>
            </div>
            <br />

            {
                homeEvents ?
                    <div>
                        <Slider {...settings}>
                            {
                                homeEvents?.map(localSpot => <LocalSpot
                                    key={localSpot._id}
                                    localSpot={localSpot}
                                ></LocalSpot>)
                            }
                        </Slider>
                    </div>

                    :

                    <div>
                        <p style={{ color: 'red' }}>Data not found yet...</p>
                    </div>
            }


            <br /><br /><br />
            <Link to='/tourHome' className='d-block mx-auto btn btn-primary w-25' >Visit More Spots</Link>
            <br />
            <br />
        </div>



    );
};

export default LocalSpots;