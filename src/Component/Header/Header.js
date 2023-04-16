import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../logo-img/assignment-10-logo.png'
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

import { useQuery } from 'react-query';
import fetchUserCartData from '../../fetchData/fetchUserCartData';
import fetchUserControllData from '../../fetchData/fetchUserControllData';
import axios from 'axios';

const Header = () => {

    const [user] = useAuthState(auth);

    const [show, setShow] = useState(false);
    const [showInfo, setShowInfo] = useState(false);

    const { data: queryUserControll, refetch: refetchUserControl } = useQuery("queryUserControll", () => fetchUserControllData());



    const findUser = queryUserControll?.data?.result?.find(u => {
        return u.email === user?.email;
    });
    const findEmail = findUser?.email;



    // sending user info to database

    useEffect(() => {
        setTimeout(() => {
            const postUserInfo = async () => {

                try {
                    if (user?.email) {
                        if (!findEmail) {
                            const response = await axios.post('http://localhost:5000/api/v1/userControll', {
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
        <div className='HeaderMain'>
            <section className='headerContainer'>
                <Link to='/'> <img style={{ width: '147px', height: '47px', marginBottom: '10px', position: 'absolute', top: '0', left: '30px' }} src={logo} alt="" /></Link>
                <div className='headerCover'>
                    <div className='headerOne'>
                        <Link to='/'> <img style={{ width: '147px', height: '47px', marginBottom: '10px', position: 'absolute', top: '0', left: '30px' }} src={logo} alt="" /></Link>

                    </div>

                    <div className='headerTwo'>
                        <p> <CustomLink to="/tourHome">Home Tour</CustomLink></p>
                        <p> <CustomLink to="/tourAbroad">World Tour</CustomLink></p>
                        <p> <CustomLink to="/blogs">Blogs</CustomLink></p>
                        <p> <CustomLink to="/contact">Contact</CustomLink></p>
                        <p> <CustomLink to="/packages">packages</CustomLink></p>
                        <p> <CustomLink to="/visaGuide">visa Guide</CustomLink></p>
                        <p> <CustomLink to="/about">About Me</CustomLink></p>

                        {
                            <p>
                                {
                                    user ? <CustomLink onClick={handleSignOut} to='/login' >Sign Out</CustomLink> : <CustomLink to="/login">Login</CustomLink>
                                }
                            </p>
                        }
                        {
                            <p>
                                {
                                    user &&
                                    <CustomLink to='/addToCart' >
                                        <span className='cart'>
                                            <i style={{ color: 'white', }}
                                                class="uil uil-shopping-cart"
                                            >
                                            </i>
                                            <span className={`${queryCartNumberData === 0 ? 'none' : 'block'} cartNumber`}>
                                                {queryCartNumberData}
                                            </span>
                                        </span>
                                    </CustomLink>
                                }
                            </p>
                        }


                        {
                            user &&
                            <p >
                                <span> <i onClick={() => setShowInfo(!showInfo)} class="uil uil-user"></i></span>
                                <div onMouseLeave={() => setShowInfo(false)} className={`${showInfo ? 'visibleInfo' : 'hiddenInfo'} userInfo `}>

                                    <p>
                                        {
                                            user?.photoURL ? <CustomLink to=""><img className='googlePhoto' src={user?.photoURL} alt="" /></CustomLink> : <i class="uil uil-user-square"></i>
                                        }
                                        <br />
                                        {
                                            user?.displayName && <CustomLink to=''> {user.displayName} </CustomLink>
                                        }
                                        {
                                            user?.email && <CustomLink to=''> {user.email} </CustomLink>
                                        }
                                        {
                                            user?.email && <CustomLink to=''>Your Profile</CustomLink>
                                        }

                                    </p>
                                    <p style={{ color: 'white' }}>
                                        <  hr />
                                    </p>
                                    <p>
                                        <CustomLink to="/dashboard">Control Panel</CustomLink>
                                    </p>

                                </div>
                                <br />
                            </p>
                        }


                    </div>

                </div>

                <div onClick={() => setShow(!show)} className='headerCoverRes'>
                    <i style={{ color: 'white', position: 'absolute', rigth: '0' }} class="uil uil-bars"></i>
                </div>
                <div onMouseLeave={() => setShow(false)} className={`${show ? 'visible' : 'hidden'} headerMenuContainerRes`}>

                    <p> <CustomLink to="/tourHome">Home Tour</CustomLink></p>
                    <p> <CustomLink to="/tourAbroad">World Tour</CustomLink></p>
                    <p> <CustomLink to="/blogs">Blogs</CustomLink></p>
                    <p> <CustomLink to="/contact">Contact</CustomLink></p>
                    <p> <CustomLink to="/packages">packages</CustomLink></p>
                    <p> <CustomLink to="/visaGuide">visa Guide</CustomLink></p>
                    <p> <CustomLink to="/about">About Me</CustomLink></p>

                    <br />


                    {
                        <p>
                            {
                                user ? <CustomLink onClick={handleSignOut} to='/login' >Sign Out</CustomLink> : <CustomLink to="/login">Login</CustomLink>
                            }
                        </p>
                    }



                    <p>
                        {
                            user?.photoURL ? <CustomLink to=""><img className='googlePhoto' src={user?.photoURL} alt="" /></CustomLink> : <i class="uil uil-user-square"></i>
                        }
                        {
                            user?.displayName && <CustomLink to=''> {user.displayName} </CustomLink>
                        }
                        {
                            user?.email && <CustomLink to=''> {user.email} </CustomLink>
                        }
                        {
                            user?.email && <CustomLink to=''>Your Profile</CustomLink>
                        }

                    </p>

                    <p>
                        <CustomLink to="/dashboard">Control Panel</CustomLink>
                    </p>

                </div>
            </section>

        </div>
    );
};

export default Header;


/* 


                       
        


*/