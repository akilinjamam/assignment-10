import React from 'react';
import { Outlet } from 'react-router-dom';
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
                    <CustomLink to="/dashboard">ADD EVENT (HOME)</CustomLink>
                    <br />
                    <CustomLink to="/dashboard/addToAbroad">ADD EVENT (ABROAD)</CustomLink>
                    <br />
                    <CustomLink to="1">ADMIN</CustomLink>
                    <br />
                    <CustomLink to="2">STATISTIC</CustomLink>
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