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
    }, []);


    const sign = '>'

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

            <div className='writeFeedbacksMain'>
                <div className="writeFeedbacks">
                    <h1 className='relax'>RELAX</h1>

                    <div className='symbol'>
                        <div className='line'>

                        </div>
                        <div className='sign'>
                            <p ><i class="uil uil-caret-right"></i></p>
                        </div>
                    </div>
                    <div className='writeFeedbackContainer'>
                        <p> <span style={{ fontWeight: 'bold' }} >Write Here</span> The <br />Feedback !</p>
                        <input className='writeFeedbackContainerInputs' type="text" name="" id="" />
                        <br /><br />
                        <button>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedBack;