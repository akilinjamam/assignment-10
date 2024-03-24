import React, { useState } from 'react';
import './DashboardNew.css';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import fetchUserControllData from '../../../fetchData/fetchUserControllData';
import useDashboard from './useDashboard';


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

    const [allButtons] = useDashboard(location)

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


    const handleButton = (value, path) => {

        if (value === 'navigate') {
            navigate(path.one || path.two || path.three || path.four || path.five)
        } else if (value === 'handleAdmin') {
            handleAdmin();
        } else if (value === 'setSlider') {
            setSlider(true)
        }

    }

    const getButtonClassName = (button, location) => {
        const { link } = button;
        const { pathname } = location;

        const linkPaths = [link?.one, link?.two, link?.three, link?.four, link?.five];
        const isActive = linkPaths.some(path => pathname === path);

        return isActive ? 'text-info btnDashboard' : 'text-light btnDashboard';
    };

    return (
        <div>
            <div className='dashboardNew_main'>
                <div className="dashboardNew_title middle_flex">
                    <h5>DASHBOARD</h5>
                </div>
                <div className="dashboardNew_container only_flex ">
                    <div style={{ width: `${collapse ? '4%' : '15%'}` }} className='dashboardPartOne'>
                        <br />
                        <div className='between_flex'>
                            <p > {!viewText ? <i style={{ fontSize: '20px' }} class="uil uil-ellipsis-v"></i> : <i onClick={handleCollapse} style={{ fontSize: '20px', cursor: 'pointer' }} class="uil uil-eye"></i>} {!viewText && 'MENU'}</p>
                            {!viewText && <p onClick={handleCollapse}><i style={{ marginRight: '10px', cursor: 'pointer' }} class="uil uil-eye-slash"></i></p>}
                        </div>
                        <hr />
                        <div className={`${slider ? 'leftSlide' : 'rightSlide'} sectionContainer`}>
                            <div className="editorSection">
                                <br />
                                {
                                    allButtons?.slice(0, 5)?.map(button => {
                                        const buttonClassName = getButtonClassName(button, location);
                                        return (
                                            <button
                                                onClick={() => handleButton(button.functionType, button.link)}
                                                style={{ display: 'block', marginBottom: '20px' }}
                                                className={buttonClassName}
                                            >
                                                <i title={viewText && button.value} style={{ fontSize: '20px' }} className={button?.iconName}></i> {!viewText && button?.value}
                                            </button>
                                        )
                                    })
                                }
                                <br />
                                <br />

                            </div>
                            <div className="adminSection">
                                <br />
                                <br />
                                {
                                    allButtons?.slice(5)?.map(button => {
                                        const buttonClassName = getButtonClassName(button, location);
                                        return (
                                            <button
                                                onClick={() => handleButton(button.functionType, button.link)}
                                                style={{ display: 'block', marginBottom: '20px' }}
                                                className={buttonClassName}
                                            >
                                                <i title={viewText && button.value} style={{ fontSize: '20px' }} className={button?.iconName}></i> {!viewText && button?.value}
                                            </button>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div style={{ width: `${collapse ? '96%' : '85%'}` }} className="dashboardNew_right ">
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