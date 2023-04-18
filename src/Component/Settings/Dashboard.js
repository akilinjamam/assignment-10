import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Dashboard.css'
import { useQuery } from 'react-query';
import fetchUserControllData from '../../fetchData/fetchUserControllData';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth)

    const [slider, setSlider] = useState(true);
    const [view, setView] = useState(false);

    const navigate = useNavigate();

    const { data: queryUserForAdminVarify } = useQuery("queryUserForAdminVarify", () => fetchUserControllData());

    const findUserAdmin = queryUserForAdminVarify?.data?.result?.find(a => {
        return a?.email === user?.email
    });

    console.log(findUserAdmin);

    const handleNavigate = (value) => {
        if (value === 1) {
            navigate('/dashboard')
        }
        if (value === 2) {
            navigate('/dashboard/dashboardHomeBlogs');
        }
        if (value === 3) {
            navigate('/dashboard/userControll')
        }
    };

    const handleAdmin = () => {

        if (findUserAdmin?.userRoll === 'admin') {
            setSlider(false);
        } else {
            setView(true)
        }

    }

    return (
        <div className='dashboardMain'>
            <div className='dashboardContainer'>
                <div className='dashboardPartOne'>
                    <br />
                    <p>MENU</p>
                    <hr />
                    <div className={`${slider ? 'leftSlide' : 'rightSlide'} sectionContainer`}>
                        <div className="editorSection">
                            <br />
                            <button onClick={() => handleNavigate(1)} className='btnDashboard'>EVENTS</button>
                            <br />
                            <br />
                            <button onClick={() => handleNavigate(2)} className='btnDashboard'>BLOGS</button>
                            <br />
                            <br />
                            <button className='btnDashboard' >REVIEW</button>
                            <br />
                            <br />
                            <button onClick={handleAdmin} className='btnDashboard' >ADMIN</button>
                            <br />
                            <br />
                        </div>
                        <div className="adminSection">
                            <br />
                            <br />
                            <button onClick={() => handleNavigate(3)} className='btnDashboard' >USER CONTROLL</button>
                            <br />
                            <br />
                            <button className='btnDashboard' >STATISTIC</button>
                            <br />
                            <br />
                            <hr />

                            <button onClick={() => setSlider(true)} className='btnDashboard'> BACK </button>
                        </div>
                    </div>
                </div>

                <div className='dashboardPartTwo'>

                    <p>DASHBOARD</p>

                    <Outlet></Outlet>
                </div>
            </div>

            <div className={`${view ? 'block' : 'none'}`}>
                <div className="popupDashboard">
                    <div className="popupDashboardContainer">
                        <div className='crossPopupDashboard'>
                            <i onClick={() => setView(false)} className='uil uil-times'></i>
                        </div>
                        <p style={{ color: 'white' }}>sorry ! Editor has no permission to get access to Admin Panel</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;