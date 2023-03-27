import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Dashboard.css'

const Dashboard = () => {

    return (
        <div className='dashboardMain'>
            <div className='dashboardContainer'>
                <div className='dashboardPartOne'>
                    <br />
                    <p>MENU</p>
                    <hr />
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