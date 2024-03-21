import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../logo-img/assignment-10-logo.png'
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

import { useQuery } from 'react-query';
import fetchUserCartData from '../../fetchData/fetchUserCartData';
import fetchUserControllData from '../../fetchData/fetchUserControllData';
import axios from 'axios';

const Header = () => {

    const location = useLocation().pathname;

    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const { data: queryUserControll, refetch: refetchUserControl } = useQuery("queryUserControll", () => fetchUserControllData());

    const findUser = queryUserControll?.data?.result?.find(u => {
        return u.email === user?.email;
    });
    const findEmail = findUser?.email;


    const handleControlPanel = () => {

        if (findUser?.userRoll === 'normal') {
            setShowPopup(true)
        } else {
            navigate('/dashboard')
        }

    }

    // sending user info to database

    useEffect(() => {
        setTimeout(() => {
            const postUserInfo = async () => {

                try {
                    if (user?.email) {
                        if (!findEmail) {
                            await axios.post('https://asssignment-10-server-delta.vercel.app/api/v1/userControll', {
                                email: user?.email,
                                emailName: user?.displayName,
                                userPhoto: user?.photoURL
                            }).then(res => console.log(res));
                            refetchUserControl();
                        }
                    }
                } catch (error) {
                    console.log(error);
                }
            };

            postUserInfo();
        }, 3000)



    }, [user, findEmail, refetchUserControl])

    const handleSignOut = () => {
        signOut(auth)
    };

    const { data: queryCartNumber, refetch } = useQuery("queryCartNumber", () => fetchUserCartData(user?.email));

    if (queryCartNumber) {
        refetch()
    }
    const queryCartNumberData = queryCartNumber?.data?.result?.length;

    return (
        <div>

            <div onClick={(e) => {
                if (e.target.className !== 'uil uil-user') {
                    setShow(false)
                }

                if (e.target.className === 'user_popup' || e.target.className === 'uil uil-bars') {
                    setShow(true)
                }

            }} className='navMain'
                style={{ height: `${location.slice(0, 8) === '/profile' ? '70px' : '120px'}` }}
            >
                <section className='navContainer'>
                    <div style={{ backgroundColor: 'rgb(1, 1, 65)' }}>
                        <div style={{ height: `${location.slice(0, 8) === '/profile' ? '70px' : '60px'}` }} className='navConOne'>
                            <div className='navConOneLeft'>
                                <img onClick={() => navigate('/')} style={{ width: '147px', height: '47px' }} src={logo} alt='' />
                            </div>
                            <div className='navConOneRight'>

                                {
                                    <div>
                                        {
                                            user ? <CustomLink onClick={handleSignOut} to='/login' ><i style={{ fontSize: '18px' }} class="uil uil-signout"></i>  Logout</CustomLink> : <CustomLink to="/login">Login</CustomLink>
                                        }
                                    </div>
                                }
                                {
                                    <div style={{ position: 'relative' }}>
                                        {
                                            user &&
                                            <CustomLink to='/addToCart' >
                                                <span className='cart'>
                                                    <i style={{ color: 'white', }}
                                                        className="uil uil-shopping-cart"
                                                    >
                                                    </i>

                                                </span>
                                                {
                                                    queryCartNumberData > 0
                                                    &&
                                                    <span
                                                        style={{
                                                            position: 'absolute',
                                                            top: '5px',
                                                            right: '-20px',
                                                            width: '22px',
                                                            height: '22px',
                                                            backgroundColor: 'red',
                                                            borderRadius: '50%',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center'
                                                        }}>
                                                        {queryCartNumberData}
                                                    </span>
                                                }
                                            </CustomLink>
                                        }
                                    </div>
                                }
                                {
                                    user &&
                                    <div >
                                        <i
                                            onClick={() => {
                                                setShow(!show)
                                            }}
                                            style={{ marginTop: '5px', marginLeft: '20px' }} className='uil uil-user'></i>
                                        <div style={{ height: 'auto', width: '190px', position: 'absolute', top: '70px', right: '97px', zIndex: '20', borderRadius: '10px', border: '1px solid green', backgroundColor: 'white', display: `${show ? 'block' : 'none'}` }}>

                                            <div className='user_popup' style={{ textAlign: 'left', padding: '5px 10px' }}>
                                                <p onClick={() => navigate('/profile')} className='user_popup_text' style={{ cursor: 'pointer' }}><i class="uil uil-users-alt"></i> Profile</p>
                                                <p className='user_popup_text' style={{ cursor: 'pointer' }} onClick={handleControlPanel}><i className="uil uil-create-dashboard"></i> Dashboard</p>
                                            </div>



                                        </div>
                                    </div>
                                }
                            </div>
                            <div className='navConOneRightRes'>
                                <div>

                                    <i onClick={() => setShow(!show)} style={{ color: 'white', cursor: 'pointer' }} class="uil uil-bars"></i>
                                    <div style={{ display: `${show ? 'block' : 'none'}` }} className='navConOneRightResPopup'>
                                        <CustomLink to='/tourHome'>
                                            <span style={{ color: 'black' }} ><i style={{ fontSize: '18px' }} class="uil uil-estate"></i> Home Tour</span>
                                        </CustomLink>
                                        <CustomLink to='/tourAbroad'>
                                            <span style={{ color: 'black' }} ><i style={{ fontSize: '18px' }} class="uil uil-globe"></i> World Tour</span>
                                        </CustomLink>
                                        <CustomLink to='/blogs'>
                                            <span style={{ color: 'black' }} ><i style={{ fontSize: '18px' }} class="uil uil-document-layout-right"></i> Blogs</span>
                                        </CustomLink>
                                        <hr />
                                        {
                                            <div>
                                                {
                                                    user ? <CustomLink onClick={handleSignOut} to='/login' ><i style={{ fontSize: '18px', color: 'black' }} class="uil uil-signout"></i>  <span style={{ color: 'black' }}>Logout</span> </CustomLink> : <CustomLink to="/login"> <i style={{ color: 'black' }} class="uil uil-signin"></i> <span style={{ color: 'black' }}>Login</span></CustomLink>
                                                }
                                            </div>
                                        }

                                        <div style={{ cursor: 'pointer' }} onClick={() => navigate('/addToCart')}>
                                            <i style={{ color: 'black', fontSize: '18px', marginLeft: '15px', }} className="uil  uil-shopping-cart"></i> <span>Your Cart - {queryCartNumberData}</span>
                                        </div>
                                        <div style={{ cursor: 'pointer' }}>
                                            <i style={{ color: 'black', fontSize: '18px', marginLeft: '15px', }} class="uil uil-users-alt"></i>
                                            <span onClick={() => navigate('/profile')}> Profile</span>
                                        </div>
                                        <div style={{ cursor: 'pointer' }} onClick={handleControlPanel}>
                                            <i style={{ color: 'black', fontSize: '18px', marginLeft: '15px', }} class="uil uil-create-dashboard"></i>
                                            <span> Dashboard</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundColor: 'rgb(1, 1, 65)', display: `${location.slice(0, 8) === '/profile' ? 'none' : 'block'}` }}>
                        <div className='navConTwo'>
                            <div style={{ width: '400px', height: '60px', color: 'white', display: 'flex', alignItems: 'baseline', justifyContent: 'flex-start' }}>

                                <div style={{ display: 'flex' }}>
                                    <CustomLink to='/tourHome'>
                                        <span ><i style={{ fontSize: '18px' }} class="uil uil-estate"></i> Home Tour</span>
                                    </CustomLink>
                                    <CustomLink to='/tourAbroad'>
                                        <span style={{ marginLeft: '15px' }} ><i style={{ fontSize: '18px' }} class="uil uil-globe"></i> World Tour</span>
                                    </CustomLink>
                                    <CustomLink to='/blogs'>
                                        <span style={{ marginLeft: '15px' }} ><i style={{ fontSize: '18px' }} class="uil uil-document-layout-right"></i> Blogs</span>
                                    </CustomLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className={`${showPopup ? 'block' : 'none'}`}>
                    <div className="headerPopup">
                        <div className="headerPopupContainer">
                            <div className='crossPopupHeader'>
                                <i onClick={() => setShowPopup(false)} className="uil uil-times"></i>
                            </div>
                            <p style={{ color: 'white' }}>sorry <span style={{ color: 'yellow' }}>{user?.displayName} !</span> you have no access to controll panel !</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
