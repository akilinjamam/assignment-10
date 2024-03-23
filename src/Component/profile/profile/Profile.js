import React, { useContext } from 'react';
import './profile.css';
import { Outlet } from 'react-router-dom';
import noteContext from '../../../Context/noteContext';

const Profile = () => {

    const state = useContext(noteContext);
    const slideDrawer = state.slideDrawer;
    const setSlideDrawer = state.setSlideDrawer

    const terminals = [
        {
            iconClassName: 'uil uil-user-square',
            value: 'Personal Details'
        }
    ]
    return (
        <div className='profile_main'>
            <div className="profile_container only_flex">
                <div className="profile_part1">
                    {
                        terminals.map(terminal => {
                            return (
                                <p><i className={terminal.iconClassName}></i> {terminal.value}</p>
                            )
                        })
                    }
                </div>
                <div className="profile_part2">
                    <Outlet />
                    <div style={{ transform: `translateX(${slideDrawer ? '0' : '-100'}%)` }} className="profile_drawer_responsive">
                        <div className='profile_cancel_icon right_flex'>
                            <i onClick={() => setSlideDrawer(false)} class="uil uil-times" style={{ cursor: 'pointer' }}></i>
                        </div>
                        <hr />
                        {
                            terminals.map(terminal => {
                                return (
                                    <p><i class={terminal.iconClassName}></i> {terminal.value}</p>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;