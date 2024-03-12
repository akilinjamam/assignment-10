import React, { useState } from 'react';
import './DashboardNew.css';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import fetchUserControllData from '../../../fetchData/fetchUserControllData';

const DashboardNew = () => {
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
        <div className='dashboardNew_main'>
            <div className="dashboardNew_title middle_flex">
                <h5>DASHBOARD</h5>
            </div>
            <div className="dashboardNew_container only_flex ">
                <div className='dashboardPartOne'>
                    <br />
                    <p ><i style={{ fontSize: '20px' }} class="uil uil-ellipsis-v"></i> MENU</p>
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
                                    } btnDashboard`}><i style={{ fontSize: '20px' }} class="uil uil-plane-fly"></i> EVENTS</button>
                            <br />
                            <br />
                            <button
                                onClick={() => navigate('/dashboard/dashboardHomeBlogs')} className={`${(location?.pathname === '/dashboard/dashboardHomeBlogs')
                                    ||
                                    (location?.pathname === '/dashboard/addToBlog')
                                    ||
                                    (location?.pathname?.slice(0, 21) === '/dashboard/updateBlog')
                                    ?
                                    'text-info'
                                    :
                                    'text-light'
                                    } btnDashboard`}><i style={{ fontSize: '20px' }} class="uil uil-document-layout-right"></i> BLOGS</button>
                            <br />
                            <br />
                            <button onClick={() => navigate('/dashboard/feedbackDash')} className={`${location?.pathname === '/dashboard/feedbackDash' ? 'text-info' : 'text-light'} btnDashboard`} ><i style={{ fontSize: '20px' }} class="uil uil-feedback"></i> REVIEW</button>
                            <br />
                            <br />
                            <button onClick={handleAdmin} className='btnDashboard' ><i style={{ fontSize: '20px' }} class="uil uil-user-md"></i> ADMIN</button>
                            <br />
                            <br />
                            <button onClick={() => navigate('/')} className='btnDashboard' ><i style={{ fontSize: '20px' }} class="uil uil-home"></i> BACK TO HOME</button>
                        </div>
                        <div className="adminSection">
                            <br />
                            <br />
                            <button onClick={() => navigate('/dashboard/userControll')} className={`${location?.pathname === '/dashboard/userControll' ? 'text-info' : 'text-light'} btnDashboard`} ><i style={{ fontSize: '20px' }} class="uil uil-users-alt"></i> USER CONTROLL</button>
                            <br />
                            <br />
                            <button
                                onClick={() => navigate('/dashboard/transection')}
                                className={`${location?.pathname === '/dashboard/transection' ? 'text-info' : 'text-light'} btnDashboard`} ><i style={{ fontSize: '20px' }} class="uil uil-transaction"></i> TRANSECTION</button>
                            <br />
                            <br />
                            <hr />

                            <button onClick={() => setSlider(true)} className='btnDashboard'><i style={{ fontSize: '20px' }} class="uil uil-step-backward-alt"></i> BACK </button>
                        </div>
                    </div>
                </div>
                <div className="dashboardNew_right ">
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

export default DashboardNew;