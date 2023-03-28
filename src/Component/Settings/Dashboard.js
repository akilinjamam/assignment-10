import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Dashboard.css'

const Dashboard = () => {

    const navigate = useNavigate()

    const handleNavigate = (value) => {
        if (value === 1) {
            navigate('/dashboard')
        }
        if (value === 2) {
            navigate('/dashboard/dashboardHomeBlogs');
        }
    }

    return (
        <div className='dashboardMain'>
            <div className='dashboardContainer'>
                <div className='dashboardPartOne'>
                    <br />
                    <p>MENU</p>
                    <hr />
                    <br />
                    <button onClick={() => handleNavigate(1)} className='btnDashboard'>EVENTS</button>
                    <br />
                    <br />
                    <button onClick={() => handleNavigate(2)} className='btnDashboard'>BLOGS</button>
                    <br />
                    <br />
                    <button className='btnDashboard' >ADMIN</button>
                    <br />
                    <br />

                    <button className='btnDashboard'>STATISTIC</button>
                    <br />
                    <br />
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