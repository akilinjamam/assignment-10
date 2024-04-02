import React, { useContext, useEffect, useMemo } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './LocalSpots.css'
import { useQuery } from 'react-query';
import fetchHomeData from '../../fetchData/fetchHomeData';
import Loading from '../../Loading/Loading';
import noteContext from '../../Context/noteContext';
import { useNavigate } from 'react-router-dom';




const LocalSpots = () => {

    const state = useContext(noteContext);
    const navigate = useNavigate();
    // fetch home data:
    const { data, isLoading } = useQuery("localSpots", () => fetchHomeData());
    const homeEvents = useMemo(() => data?.data?.result, [data])
    useEffect(() => {
        state.setHomeData(homeEvents);

    }, [state, homeEvents]);

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div style={{ padding: '20px 0' }} className='local_spot_main'>
            <main className='local_spot_container'>
                <div className='local_spot_title'>
                    <h3>Local Trending Spot</h3>
                    <p>most visiting place in Bangladesh</p>
                    <hr style={{ height: '3px' }} />
                </div>
                <div className='local_spot_cart'>
                    {
                        homeEvents?.slice(0, 2)?.map((event) => {
                            return (
                                <div className='local_spot_cart_detail' key={event?._id}
                                    onClick={() => navigate(`/spotDetail/${event?._id}`)}
                                >
                                    <img src={event?.img} alt="" />
                                    <div className='local_spot_cart_detail_backShadow' >
                                        <div className='local_spot_cart_detail_backShadow_container' >
                                            <h3>{event.name}</h3>
                                            <div className="local_spot_cart_detail_backShadow_container_hoverEffect">
                                                <div className='l_s_c_d_b_c_h_container'>
                                                    <hr />
                                                    <p>Duration: {event?.stayLong}</p>
                                                    <p>Price/person: {event?.price}</p>
                                                    <p>Last Date of Registration: {event?.tourLastDate}</p>
                                                    <p>Tour Last Date: {event?.tourDate}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='local_spot_cart'>
                    {
                        homeEvents?.slice(2, 5)?.map((event) => {
                            return (
                                <div className='local_spot_cart_detail' key={event?._id}
                                    onClick={() => navigate(`/spotDetail/${event?._id}`)}
                                >
                                    <img src={event?.img} alt="" />
                                    <div className='local_spot_cart_detail_backShadow' >
                                        <div className='local_spot_cart_detail_backShadow_container' >
                                            <h3>{event.name}</h3>
                                            <div className="local_spot_cart_detail_backShadow_container_hoverEffect">
                                                <div className='l_s_c_d_b_c_h_container'>
                                                    <hr />
                                                    <p>Duration: {event?.stayLong}</p>
                                                    <p>Price/person: {event?.price}</p>
                                                    <p>Last Date of Registration: {event?.tourLastDate}</p>
                                                    <p>Tour Last Date: {event?.tourDate}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='local_spot_footer'>
                    <button onClick={() => navigate('/tourHome')} className='btn btn-primary fw-bold '>VISIT MORE</button>
                </div>
            </main>
        </div>
    );
};

export default LocalSpots;


