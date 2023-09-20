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
import { fetchProvider } from '../Banner/Banner';


const LocalSpots = () => {

    // navigation for react-slick
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
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

    const { data, isLoading } = useQuery("localSpots", () => fetchHomeData());

    const homeEvents = data?.data?.result;

    useEffect(() => {
        state.setHomeData(homeEvents);

    }, [state, homeEvents]);

    if (isLoading) {
        return <Loading></Loading>
    }

    return (


        <div style={{ width: '100%', overflowX: 'hidden', scrollBehavior: 'smooth' }}  >
            <div >
                <h2 style={{ color: 'gray' }} className='title'>VISIT BANGLADESH</h2>
            </div>
            <br />

            {
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
            }


            <br /><br /><br />
            <Link to='/tourHome' className='d-block mx-auto btn btn-primary localSpotsDetailBtn' >Visit More Spots</Link>
            <br />
            <br />
        </div>



    );
};

export default LocalSpots;