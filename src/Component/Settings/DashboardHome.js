import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './DashboardHome.css'

const DashboardHome = () => {

    const [homeData, setHomeData] = useState([])
    const [globalData, setGlobalData] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        const url = 'localService.json';
        const urlTwo = 'globalService.json';
        fetch(url).then(res => res.json()).then(res => setHomeData(res))
        fetch(urlTwo).then(res => res.json()).then(res => setGlobalData(res))
    }, [])

    const handleDashHome = (value) => {
        if (value === 1) {
            navigate('/dashboard/addToHome')
        }
        if (value === 2) {
            navigate('/dashboard/addToAbroad')
        }
    }


    const handleNavigate = (id) => {
        navigate(`/${id}`)
    }
    return (
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
                        homeData.map(h => {
                            return (
                                <div className='dashboardDataContainer' key={h.id} >
                                    <div>
                                        <img src={h.img} alt="" />
                                        <div className='dashboardDataP'>
                                            <p onClick={() => handleNavigate(h.id)}>{h.name}</p>
                                            <i class="uil uil-edit"></i>
                                            <i class="uil uil-trash"></i>
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
                        globalData.map(h => {
                            return (
                                <div className='dashboardDataContainer' key={h.id} >
                                    <div>
                                        <img src={h.img} alt="" />
                                        <div className='dashboardDataP'>
                                            <p onClick={() => handleNavigate(h.id)} >{h.name}</p>
                                            <i class="uil uil-edit"></i>
                                            <i class="uil uil-trash"></i>
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
    );
};

export default DashboardHome;