import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Dashboard.css'

const Dashboard = () => {

    const [slider, setSlider] = useState(true)

    const navigate = useNavigate()

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
                            <button onClick={() => setSlider(false)} className='btnDashboard' >ADMIN</button>
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
        </div>
    );
};

export default Dashboard;