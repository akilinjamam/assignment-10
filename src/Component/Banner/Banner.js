import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Loading from '../../Loading/Loading'

import 'aos/dist/aos.css';

import './Banner.css'
import { useQuery } from 'react-query';
import fetchBannerData from '../../fetchData/fetchBannerData';
import { useNavigate } from 'react-router-dom';


const Banner = () => {


    const navigate = useNavigate();

    const handleNavigate = (eventLink) => {

        navigate(`spotDetail/${eventLink}`);

    }

    const [counter, setCounter] = useState(0);
    const [bannerCounter, setBannerCounter] = useState(1);

    const [dynamicColor, setDynamicColor] = useState('crimson');

    const { data: bannerHome, isLoading } = useQuery("bannerHome", () => fetchBannerData());

    useEffect(() => {
        if (counter === 0) {
            setDynamicColor('blue')
        } else if (counter === 1) {
            setDynamicColor('green')
        } else if (counter === 2) {
            setDynamicColor('yellow')
        } else if (counter === 3) {
            setDynamicColor('red')
        } else if (counter === 4) {
            setDynamicColor('pink')
        } else if (counter === 5) {
            setDynamicColor('goldenRod')
        } else if (counter === 6) {
            setDynamicColor('skyBlue')
        } else if (counter === 7) {
            setDynamicColor('orange')
        } else if (counter === 8) {
            setDynamicColor('yellowgreen')
        } else if (counter === 9) {
            setDynamicColor('crimson')
        }
    }, [counter, setDynamicColor]);


    if (counter === 10) {
        setCounter(0)
    }

    if (bannerCounter === 3) {
        setBannerCounter(1)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => prevCounter + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    if (isLoading) {
        return <Loading></Loading>
    }


    // Banner Section.....
    return (
        <div style={{ width: '100%', margin: 'auto', }}>
            <Carousel>
                {
                    bannerHome?.data?.result?.map(b => {
                        return (
                            <Carousel.Item style={{ cursor: 'pointer' }} onClick={() => handleNavigate(b.eventLink)} key={b._id}>
                                <img style={{ height: '500px' }}
                                    className="d-block w-100"
                                    src={b.bannerImg}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    {<h3 className='fontStyle' style={{ color: `${dynamicColor}`, transition: '1s ease-in-out' }}>{b.name}</h3>}


                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </div>
    );
};

export default Banner;