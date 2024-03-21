import React from 'react';
import './profile.css';
import { Outlet } from 'react-router-dom';

const Profile = () => {
    return (
        <div className='profile_main'>
            <div className="profile_container only_flex">
                <div className="profile_part1">
                    <div className="profile_part1_container">
                        <p><i class="uil uil-user-square"></i> Personal Details</p>
                    </div>
                </div>
                <div className="profile_part2">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Profile;