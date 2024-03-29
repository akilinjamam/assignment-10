import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Dashboard.css'
import { useQuery } from 'react-query';
import fetchUserControllData from '../../fetchData/fetchUserControllData';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Dashboard = () => {
    const location = useLocation();
    console.log(location?.pathname)
    const [user] = useAuthState(auth);
    const [slider, setSlider] = useState(true);
    const [view, setView] = useState(false);

    console.log(window.history)

    const navigate = useNavigate();

    const { data: queryUserForAdminVarify } = useQuery("queryUserForAdminVarify", () => fetchUserControllData());

    const findUserAdmin = queryUserForAdminVarify?.data?.result?.find(a => {
        return a?.email === user?.email
    });


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
                            <button
                                onClick={() => navigate('/dashboard')}
                                className={`${(location?.pathname === '/dashboard')
                                    ||
                                    (location?.pathname === '/dashboard/addToHome')
                                    ||
                                    (location?.pathname === '/dashboard/addToAbroad')
                                    ||
                                    (location?.pathname?.slice(0, 21) === '/dashboard/updateHome')
                                    ||
                                    (location?.pathname?.slice(0, 23) === '/dashboard/updateGlobal')
                                    ?
                                    'text-info'
                                    :
                                    'text-light'
                                    } btnDashboard`}>EVENTS</button>
                            <br />
                            <br />
                            <button
                                onClick={() => navigate('/dashboard/dashboardHomeBlogs')} className={`${(location?.pathname === '/dashboard/dashboardHomeBlogs')
                                    ||
                                    (location?.pathname === '/dashboard/addToblog')
                                    ||
                                    (location?.pathname?.slice(0, 21) === '/dashboard/updateBlog')
                                    ?
                                    'text-info'
                                    :
                                    'text-light'
                                    } btnDashboard`}>BLOGS</button>
                            <br />
                            <br />
                            <button onClick={() => navigate('/dashboard/feedbackDash')} className={`${location?.pathname === '/dashboard/feedbackDash' ? 'text-info' : 'text-light'} btnDashboard`} >REVIEW</button>
                            <br />
                            <br />
                            <button onClick={handleAdmin} className='btnDashboard' >ADMIN</button>
                            <br />
                            <br />

                        </div>
                        <div className="adminSection">
                            <br />
                            <br />
                            <button onClick={() => navigate('/dashboard/userControll')} className={`${location?.pathname === '/dashboard/userControll' ? 'text-info' : 'text-light'} btnDashboard`} >USER CONTROLL</button>
                            <br />
                            <br />
                            <button
                                onClick={() => navigate('/dashboard/transection')}
                                className={`${location?.pathname === '/dashboard/transection' ? 'text-info' : 'text-light'} btnDashboard`} >TRANSECTION</button>
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