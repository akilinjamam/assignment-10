import React from 'react';
import './FeedBack.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import imgOne from '../../background-image/feedBackOne.png'
import imgTwo from '../../background-image/feedBackTwo.png'
import { useState } from 'react';
import { useEffect } from 'react';

const FeedBack = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };

    const [feedBack, setFeedBack] = useState([]);
    console.log(feedBack)
    useEffect(() => {
        const url = 'feedBack.json';
        fetch(url).then(res => res.json()).then(res => setFeedBack(res))
    }, [])

    return (
        <div className='feedBackMain'>
            <h2 style={{ color: 'lightGreen' }} className='title'>FEEDBACKS</h2>

            <div className='feedBack'>
                <div className='feedBackImage'>
                    <img className='imgOne' src={imgOne} alt="" />
                    <img className='imgTwo' src={imgTwo} alt="" />
                </div>

                <div className='feedBackDetail'>
                    <Slider {...settings} >
                        {
                            feedBack.map(f =>

                                <div>
                                    <img src={f.img} alt="" />
                                    <br />
                                    <p>{f.name}</p>
                                    <p>{f.feedBacks}</p>
                                </div>

                            )
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default FeedBack;