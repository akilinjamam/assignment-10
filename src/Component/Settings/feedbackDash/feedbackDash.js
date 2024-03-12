import React, { useRef, useState } from 'react';
import './feedbackDash.css';
import axios from 'axios';
import { useQuery } from 'react-query';
import { fetchGetReviewData } from '../../../fetchData/fetchReviewData';
import Test from '../../test/Test';
import Loading from '../../../Loading/Loading';

const FeedbackDash = () => {




    const [message, setMessage] = useState('');
    const [id, setId] = useState('');

    const { data: allReviewData, refetch, isLoading } = useQuery("allReviewData", () => fetchGetReviewData());

    const reviewData = allReviewData;

    const handleClick = (email, idFromFeedback) => {
        setMessage(email)
        setId(idFromFeedback)
        console.log(email, id)
    }

    const handleDeleteReviews = async (idForDelete) => {

        await axios.delete(`https://asssignment-10-server-delta.vercel.app/api/v1/reviews/${idForDelete}`).then(res => {
            if (res?.status === 200) {
                refetch();
            }
        })

    }

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='feedbackDashMain'>
            <p style={{ textAlign: 'left', fontWeight: 'bold' }}>ALL REVIEWS :</p>
            <hr />
            <div className="feedbackDashContainer">
                {
                    reviewData?.data?.result?.map(r => {
                        return (
                            <div key={r._id} className="feedbackDash">
                                <img style={{ width: '50px', height: '50px', borderRadius: '50%' }} src={r.photoUrl} alt="" />
                                <p style={{ width: '25%' }}>{r?.email}</p>
                                <p title={r?.review} style={{ width: '30%' }}>{r.review.length > 25 ? <span>{r?.review.slice(0, 25)}...</span> : <span>{r?.review}</span>}</p>
                                <p onClick={() => handleClick(r?.email, r?._id)} style={{ cursor: 'pointer' }} > <i class="uil uil-trash-alt"></i> </p>
                            </div>
                        )
                    })
                }
            </div>
            <Test
                deleteData={handleDeleteReviews}
                message={message}
                id={id}
                setId={setId}
                setMessage={setMessage}
            />
        </div>
    );
};

export default FeedbackDash;