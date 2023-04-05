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
import { useQuery } from 'react-query';
import fetchGlobalData from '../../fetchData/fetchGlobalData';
import Loading from '../../Loading/Loading';
import { useContext } from 'react';
import noteContext from '../../Context/noteContext';

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

    const state = useContext(noteContext);

    const { data, isLoading } = useQuery("globalSpots", () => fetchGlobalData());
    const global = data?.data?.result;

    useEffect(() => {
        state.setGlobalData(global)
    }, [global, state])

    console.log(data?.data?.result);

    if (isLoading) {
        return <Loading></Loading>
    }
    return (

        <div className='globalSpotsMain' style={{ width: '100%', height: '125vh', overflowX: 'hidden' }} >
            <div className='globalSpot' data-aos='flip-up' data-aos-duration='1000'>
                <h2 style={{ color: 'pink' }} className='title'>VISIT WORLD</h2>
            </div>


            <br />
            <br />

            <div >
                <Slider {...settings}>
                    {
                        global?.map(globalSpot => <GlobalSpot
                            key={globalSpot._id}
                            globalSpot={globalSpot}
                        ></GlobalSpot>)
                    }
                </Slider>
            </div>
            <br />
            <Link to='/tourAbroad' className='d-block mx-auto btn btn-primary w-25' >Visit More Spots</Link>
            <br />
            <br />
        </div>
    );
};

export default GlobalSpots;