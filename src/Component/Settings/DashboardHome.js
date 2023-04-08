import React, { useContext, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import './DashboardHome.css'
import noteContext from '../../Context/noteContext';
import { useQuery } from 'react-query';
import fetchHomeData from '../../fetchData/fetchHomeData';
import fetchGlobalData from '../../fetchData/fetchGlobalData';
import fetchBannerData from '../../fetchData/fetchBannerData';
import Loading from '../../Loading/Loading';

const DashboardHome = () => {


    const navigate = useNavigate();

    const { data: homeDatas, refetch: refetchHome, isLoading: loadingHome } = useQuery("homeDatas", () => fetchHomeData());
    const { data: globalDatas, refetch: refetchGlobal, isLoading: loadingGlobal } = useQuery("globalDatas", () => fetchGlobalData());

    const { data: bannerGet } = useQuery("bannerGet", () => fetchBannerData())
    const allBannerData = bannerGet?.data?.result;

    const [view, setView] = useState(false)
    const [info, setInfo] = useState('');
    const [tourArea, setTourArea] = useState('');
    const [id, setId] = useState('');

    const handlePopup = (id, name, tourAreas) => {
        setView(true);
        setInfo(name);
        setTourArea(tourAreas);
        setId(id)
    };

    const handleDelete = (id, tourArea) => {


        if (tourArea === 'home') {
            fetchHomeData(id, refetchHome);

            const findBannerData = allBannerData?.find(a => {
                return a.eventLink === id
            });

            if (findBannerData?.eventLink) {
                fetchBannerData(findBannerData?._id)
            }
            setView(false);
        }

        if (tourArea === 'global') {
            fetchGlobalData(id, refetchGlobal);

            const findBannerData = allBannerData?.find(a => {
                return a.eventLink === id
            });
            if (findBannerData?.eventLink) {
                fetchBannerData(findBannerData?._id)
            }
            setView(false)
        }


    };

    const handleUpdate = (id, tourArea) => {
        if (tourArea === 'home') {
            navigate(`updateHome/${id}`)
        }
        if (tourArea === 'global') {
            navigate(`updateGlobal/${id}`)
        }
    }

    const state = useContext(noteContext);

    const handleDashHome = (value) => {
        if (value === 1) {
            navigate('/dashboard/addToHome')
        }
        if (value === 2) {
            navigate('/dashboard/addToAbroad')
        }
    };

    const handleNavigate = (id, tourArea) => {
        navigate(`/spotDetail/${id}`);
        state.setTourArea(tourArea)
    };

    if (loadingHome || loadingGlobal) {
        return <Loading></Loading>
    }


    return (
        <div className='dashboardHomePlatform'>
            <div className='dashboardHomeMain'>
                <div className="dashboardHomeContainer">
                    <div className="homeEvents">
                        <h6>ADD HOME EVENTS</h6>
                        <div onClick={() => handleDashHome(1)}>
                            <i class="uil uil-plus"></i>
                        </div>
                    </div>

                    <div className='dashboardData'>
                        {
                            homeDatas?.data?.result?.map(h => {
                                return (
                                    <div className='dashboardDataContainer' key={h._id} >
                                        <div>
                                            <img src={h.img} alt="" />
                                            <div className='dashboardDataP'>
                                                <p onClick={() => handleNavigate(h._id, h.tourArea)}>{h.name}</p>
                                                <i onClick={() => handleUpdate(h._id, h.tourArea)} class="uil uil-edit"></i>
                                                <i onClick={() => handlePopup(h._id, h.name, h.tourArea)} class="uil uil-trash"></i>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <br />
                    <hr className='hrDash' />
                    <div className="globalEvents">
                        <h6>ADD GLOBAL EVENTS</h6>
                        <div onClick={() => handleDashHome(2)}>
                            <i class="uil uil-plus"></i>
                        </div>
                    </div>
                    <div className='dashboardData'>
                        {
                            globalDatas?.data?.result?.map(h => {
                                return (
                                    <div className='dashboardDataContainer' key={h._id} >
                                        <div>
                                            <img src={h.img} alt="" />
                                            <div className='dashboardDataP'>
                                                <p onClick={() => handleNavigate(h._id, h.tourArea)} >{h.name}</p>
                                                <i onClick={() => handleUpdate(h._id, h.tourArea)} class="uil uil-edit"></i>
                                                <i onClick={() => handlePopup(h._id, h.name, h.tourArea)} class="uil uil-trash"></i>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <br />
                </div>
            </div>

            <div className={`${view ? 'block' : 'none'}`}>
                <div className={`${view ? 'block' : 'none'} deletePopup`}>
                    <div className='deletePopup-main'>
                        <div>
                            <p style={{ color: 'white', fontWeight: '400' }}>Are you sure to delete the event " {info} " </p>
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                                <button onClick={() => setView(false)} className='btn btn-primary'>Cancel</button>
                                {tourArea === 'home' && <button onClick={() => handleDelete(id, tourArea)} className='btn btn-primary'>Delete</button>}
                                {tourArea === 'global' && <button onClick={() => handleDelete(id, tourArea)} className='btn btn-danger'>Delete</button>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;