import React from 'react';
import './FeedBack.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import imgOne from '../../background-image/feedBackOne.png'
import imgTwo from '../../background-image/feedBackTwo.png'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useQuery } from 'react-query';

const FeedBack = () => {

    const [review, setReview] = useState('');
    const [user] = useAuthState(auth);
    const [view, setView] = useState('');
    const [message, setMessage] = useState('');
    const [img, setImg] = useState('');

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };



    const fetchReviewData = async () => {
        const response = await fetch('https://asssignment-10-server-delta.vercel.app/api/v1/reviews');
        const data = await response.json();
        return data;
    }

    const { data: reviewsForFeedback, refetch } = useQuery('reviewsForFeedback', fetchReviewData);


    useEffect(() => {
        if (user?.photoURL) {
            setImg(user?.photoURL)
        } else {
            setImg('https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg')
        }
    }, [user])

    // post to server...

    const handleReviews = async () => {
        if (user?.email) {
            try {
                const response = await axios.post(`https://asssignment-10-server-delta.vercel.app/api/v1/reviews`, {
                    email: user?.email,
                    photoUrl: img,
                    review: review
                });
                refetch();
                setReview('');
                setView(true);
                setMessage('review added successfully');
                setTimeout(() => {
                    setView(false);
                    setMessage('')
                }, 3000)

            } catch (error) {

            }
        }
    }

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
                            reviewsForFeedback?.result?.map(f =>

                                <div key={f?._id}>
                                    <img src={f?.photoUrl} alt="" />
                                    <br />
                                    <p>{f?.email}</p>
                                    <p>{f?.review}</p>
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
                        <input onChange={(e) => setReview(e.target.value)} className='writeFeedbackContainerInputs' type="text" name="" id="" />
                        <br /><br />
                        {view ? <p style={{ fontSize: '11px', color: 'blue' }}>{message}</p> : ''}
                        <br />
                        <button onClick={handleReviews}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedBack;