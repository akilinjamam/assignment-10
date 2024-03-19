import React, { useState } from 'react';
import './DashboardNew.css';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import fetchUserControllData from '../../../fetchData/fetchUserControllData';


const DashboardNew = () => {
    const location = useLocation();
    const [collapse, setCollapse] = useState(false)
    const [viewText, setviewText] = useState(false)
    const [user] = useAuthState(auth);
    const [slider, setSlider] = useState(true);
    const [view, setView] = useState(false);



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

    const handleCollapse = () => {
        setCollapse(!collapse)
        setTimeout(() => {
            if (collapse) {
                setviewText(false)
                console.log(viewText)
            }
            if (!collapse) {
                setviewText(true)
            }
        }, 500)
    }



    return (
        <div>
            <div className='dashboardNew_main'>
                <div className="dashboardNew_title middle_flex">
                    <h5>DASHBOARD</h5>
                </div>
                <div className="dashboardNew_container only_flex ">
                    <div style={{ width: `${collapse ? '3%' : '15%'}` }} className='dashboardPartOne'>
                        <br />
                        <div className='between_flex'>
                            <p > {!viewText ? <i style={{ fontSize: '20px' }} class="uil uil-ellipsis-v"></i> : <i onClick={handleCollapse} style={{ fontSize: '20px', cursor: 'pointer' }} class="uil uil-eye"></i>} {!viewText && 'MENU'}</p>
                            {!viewText && <p onClick={handleCollapse}><i style={{ marginRight: '10px', cursor: 'pointer' }} class="uil uil-eye-slash"></i></p>}
                        </div>
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
                                        } btnDashboard`}><i title={viewText && 'EVENTS'} style={{ fontSize: '20px' }} class="uil uil-plane-fly"></i> {!viewText && 'EVENTS'}</button>
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
                                        } btnDashboard`}><i title={viewText && 'BLOGS'} style={{ fontSize: '20px' }} class="uil uil-document-layout-right"></i> {!viewText && 'BLOGS'}</button>
                                <br />
                                <br />
                                <button onClick={() => navigate('/dashboard/feedbackDash')} className={`${location?.pathname === '/dashboard/feedbackDash' ? 'text-info' : 'text-light'} btnDashboard`} ><i title={viewText && 'REVIEW'} style={{ fontSize: '20px' }} class="uil uil-feedback"></i> {!viewText && 'REVIEW'}</button>
                                <br />
                                <br />
                                <button onClick={handleAdmin} className='btnDashboard' ><i title={viewText && 'ADMIN'} style={{ fontSize: '20px' }} class="uil uil-user-md"></i> {!viewText && 'ADMIN'}</button>
                                <br />
                                <br />
                                <button onClick={() => navigate('/')} className='btnDashboard' ><i title={viewText && 'BACK TO HOME'} style={{ fontSize: '20px' }} class="uil uil-home"></i> {!viewText && 'BACK TO HOME'}</button>
                            </div>
                            <div className="adminSection">
                                <br />
                                <br />
                                <button onClick={() => navigate('/dashboard/userControll')} className={`${location?.pathname === '/dashboard/userControll' ? 'text-info' : 'text-light'} btnDashboard`} ><i title={viewText && 'USER CONTROLL'} style={{ fontSize: '20px' }} class="uil uil-users-alt"></i> {!viewText && 'USER CONTROLL'}</button>
                                <br />
                                <br />
                                <button
                                    onClick={() => navigate('/dashboard/transection')}
                                    className={`${location?.pathname === '/dashboard/transection' ? 'text-info' : 'text-light'} btnDashboard`} ><i title={viewText && 'TRANSECTION'} style={{ fontSize: '20px' }} class="uil uil-transaction"></i> {!viewText && 'TRANSECTION'}</button>
                                <br />
                                <br />
                                <hr />

                                <button onClick={() => setSlider(true)} className='btnDashboard'><i title={viewText && 'BACK'} style={{ fontSize: '20px' }} class="uil uil-step-backward-alt"></i>{!viewText && 'BACK'} </button>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: `${collapse ? '97%' : '85%'}` }} className="dashboardNew_right ">
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
            <div className="dashboardRes">
                <div className="dashboardResContainer middle_flex">
                    <p>DASHBOARD IS ONLY AVAILABLE FOR DESKTOP MODE. UPTO SCREEN SIZE 900PX</p>
                </div>
            </div>
        </div>

    );
};

export default DashboardNew;