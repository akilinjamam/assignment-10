import React, { useEffect } from 'react';
import './GlobalSpots.css'
import { Link, useNavigate } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import GlobalSpot from '../GlobalSpot/GlobalSpot';

import { useQuery } from 'react-query';
import fetchGlobalData from '../../fetchData/fetchGlobalData';
import Loading from '../../Loading/Loading';
import { useContext } from 'react';
import noteContext from '../../Context/noteContext';

const GlobalSpots = () => {

    const state = useContext(noteContext);
    const navigate = useNavigate();
    const { data, isLoading } = useQuery("globalSpots", () => fetchGlobalData());
    const global = data?.data?.result;

    useEffect(() => {
        state.setGlobalData(global)
    }, [global, state])

    if (isLoading) {
        return <Loading></Loading>
    }
    return (

        <div className='global_spot_main'>
            <main className='global_spot_container'>
                <div className='global_spot_title'>
                    <h3>Worldwide Trending Spot</h3>
                    <p>most visiting place in the World</p>
                    <hr style={{ height: '3px' }} />
                </div>
                <div className='global_spot_cart'>
                    {
                        global?.slice(0, 2)?.map((event) => {
                            return (
                                <div className='global_spot_cart_detail' key={event?._id}
                                    onClick={() => navigate(`/spotDetail/${event?._id}`)}
                                >
                                    <img src={event?.img} alt="" />
                                    <div className='global_spot_cart_detail_backShadow' >
                                        <div className='global_spot_cart_detail_backShadow_container' >
                                            <h3>{event.name}</h3>
                                            <div className="global_spot_cart_detail_backShadow_container_hoverEffect">
                                                <div className='g_s_c_d_b_c_h_container'>
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
                <div className='global_spot_cart'>
                    {
                        global?.slice(1, 4)?.map((event) => {
                            return (
                                <div className='global_spot_cart_detail' key={event?._id}
                                    onClick={() => navigate(`/spotDetail/${event?._id}`)}
                                >
                                    <img src={event?.img} alt="" />
                                    <div className='global_spot_cart_detail_backShadow' >
                                        <div className='global_spot_cart_detail_backShadow_container' >
                                            <h3>{event.name}</h3>
                                            <div className="global_spot_cart_detail_backShadow_container_hoverEffect">
                                                <div className='g_s_c_d_b_c_h_container'>
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
                <div className='global_spot_footer'>
                    <button onClick={() => navigate('/tourAbroad')} className='btn btn-primary fw-bold '>VISIT MORE</button>
                </div>
            </main>
        </div>
    );
};

export default GlobalSpots;
