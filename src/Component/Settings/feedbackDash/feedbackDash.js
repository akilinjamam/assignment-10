import React from 'react';
import './feedbackDash.css';
import { useEffect } from 'react';
import { useState } from 'react';

const FeedbackDash = () => {
    const [reviewData, setReviewData] = useState([]);
    console.log(reviewData);
    useEffect(() => {
        const url = 'https://asssignment-10-server-delta.vercel.app/api/v1/reviews';
        fetch(url).then(res => res.json()).then(res => setReviewData(res))
    }, []);

    return (
        <div className='feedbackDashMain'>
            <div className="feedbackDashContainer">
                {
                    reviewData?.result?.map(r => {
                        return (
                            <div key={r._id} className="feedbackDash">
                                <img style={{ width: '50px', height: '50px', borderRadius: '50%' }} src={r.photoUrl} alt="" />
                                <p style={{ width: '25%' }}>{r.email}</p>
                                <p title={r.review} style={{ width: '30%' }}>{r.review.length > 25 ? <span>{r.review.slice(0, 25)}...</span> : <span>{r.review}</span>}</p>
                                <p> <i class="uil uil-trash-alt"></i> </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default FeedbackDash;