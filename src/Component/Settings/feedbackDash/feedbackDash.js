import React from 'react';
import './feedbackDash.css';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { fetchGetReviewData } from '../../../fetchData/fetchReviewData';

const FeedbackDash = () => {

    const { data: allReviewData, refetch } = useQuery("allReviewData", () => fetchGetReviewData());

    const reviewData = allReviewData;

    const handleDeleteReviews = async (idForDelete) => {

        const confirm = window?.confirm('Are you sure to delete this review item ?');

        if (confirm) {
            await axios.delete(`https://asssignment-10-server-delta.vercel.app/api/v1/reviews/${idForDelete}`).then(res => {
                if (res?.status === 200) {
                    refetch();
                }
            })
        }
    }

    return (
        <div className='feedbackDashMain'>
            <div className="feedbackDashContainer">
                {
                    reviewData?.data?.result?.map(r => {
                        return (
                            <div key={r._id} className="feedbackDash">
                                <img style={{ width: '50px', height: '50px', borderRadius: '50%' }} src={r.photoUrl} alt="" />
                                <p style={{ width: '25%' }}>{r?.email}</p>
                                <p title={r?.review} style={{ width: '30%' }}>{r.review.length > 25 ? <span>{r?.review.slice(0, 25)}...</span> : <span>{r?.review}</span>}</p>
                                <p style={{ cursor: 'pointer' }} onClick={() => handleDeleteReviews(r?._id)}> <i class="uil uil-trash-alt"></i> </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default FeedbackDash;