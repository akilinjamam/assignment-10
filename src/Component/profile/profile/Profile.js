import React, { useContext } from 'react';
import './profile.css';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import noteContext from '../../../Context/noteContext';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Profile = () => {
    const pathname = useLocation().pathname;
    const [user] = useAuthState(auth)
    const state = useContext(noteContext);
    const slideDrawer = state.slideDrawer;
    const setSlideDrawer = state.setSlideDrawer;

    const navigate = useNavigate()

    const terminals = [
        {
            iconClassName: 'uil uil-user-square',
            value: 'Personal Details',
            link: '/profile'
        },
        {
            iconClassName: 'uil uil-file-edit-alt',
            value: 'Manage Blogs',
            link: '/profile/manageBlogs'
        },
        {
            iconClassName: 'uil uil-home',
            value: 'Back to Home',
            link: '/'
        },
    ]

    const getHeighLight = (value) => {
        const isActive = value.link === pathname;
        return isActive ? 'text-info' : 'text-dark'
    }

    return (
        <div className='profile_main'>
            <div className="profile_container only_flex">
                <div className="profile_part1">
                    <div className="profile_part1_container">
                        {
                            terminals.map((terminal) => {
                                const heighlight = getHeighLight(terminal)
                                return (
                                    <p className={heighlight} onClick={() => navigate(`${terminal.link}`)}><i className={`${terminal.iconClassName} `}></i> {terminal.value}</p>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="profile_part2">
                    <Outlet />
                    <div style={{ transform: `translateX(${slideDrawer ? '0' : '-100'}%)` }} className="profile_part2_slidDrawer_responsive">
                        <div className='profile_part2_slidDrawer_responsive_title right_flex' >
                            <i onClick={() => {
                                setSlideDrawer(false)
                                console.log('hello')
                            }} class="uil uil-times"></i>
                        </div>
                        <hr />
                        {
                            terminals.map(terminal => {
                                return (
                                    <p onClick={() => {
                                        if (terminal.link === '/') {
                                            setTimeout(() => {
                                                navigate(`${terminal.link}`)
                                            }, 1000)
                                        } else {
                                            navigate(`${terminal.link}`)
                                        }
                                        setSlideDrawer(false)
                                    }}><i className={terminal.iconClassName}></i> {terminal.value}</p>
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