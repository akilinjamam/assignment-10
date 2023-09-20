import React, { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useQuery } from 'react-query';
import fetchUserControllData from '../../fetchData/fetchUserControllData';
import axios from 'axios';

const BackgroundTwo = () => {
    const [user] = useAuthState(auth);
    const [message, setMessage] = useState('');
    console.log(message)
    const [view, setView] = useState(false)

    const { data: getUserControllForNewsLetter } = useQuery('getUserControllForNewsLetter', () => fetchUserControllData());
    console.log(getUserControllForNewsLetter?.data?.result);

    const userControllData = getUserControllForNewsLetter?.data?.result;
    const findEmailForNewsLetter = userControllData?.find(f => {
        return f.email === user?.email;
    })

    console.log(findEmailForNewsLetter?._id);

    const [verifyEmail, setVerifyEmail] = useState(false)
    const [userEmail, setUserEmail] = useState('');
    console.log(userEmail);
    console.log(verifyEmail);

    const handleNewsLetter = async () => {

        if (user?.email) {
            if (verifyEmail) {
                try {
                    const response = await axios.patch(`https://asssignment-10-server-delta.vercel.app/api/v1/userControll/${findEmailForNewsLetter?._id}`, {
                        newsLetter: 'yes'
                    });
                    console.log(response);

                    if (findEmailForNewsLetter?.newsLetter === 'yes') {
                        setView(true);
                        setMessage('successfully added')
                        setTimeout(() => {
                            setView(false);
                            setMessage('')
                        }, 3000)
                    }
                } catch (error) {
                    console.log(error.message);
                }
            } else {
                setView(true);
                setMessage('please write email correctly')
                setTimeout(() => {
                    setView(false);
                    setMessage('')
                }, 3000)
            }
        } else {
            setView(true);
            setMessage('to get news letter, you must have to signup.')
            setTimeout(() => {
                setView(false);
                setMessage('')
            }, 4000)
        }
    }

    useEffect(() => {
        if (userEmail === user?.email) {
            setVerifyEmail(true);
        } else {
            setVerifyEmail(false)
        }

    }, [userEmail, user?.email])


    return (
        <div className='backgroundTwo'>
            <div className='backgroundTwoMain'>

                <div className='backgroundText'>
                    <div>
                        <p> <span style={{ fontWeight: 'bold' }} >Subscribe To</span> The <br />Newsletter</p>
                        <input onChange={(e) => setUserEmail(e.target.value)} placeholder='please type Email address...' type="text" name="" id="" />
                        <br /><br />
                        <p style={{ color: 'blue', fontSize: '11px' }}> {view ? message : ''}</p>
                        <br />
                        <button onClick={handleNewsLetter} className='backgroundTwoSubscribeBtn'>Subscribe</button>
                    </div>
                </div>
            </div>

            <div className='backgroundTwoMainTwo'>
                <div className='away'>
                    <h1>AWAY</h1>
                </div>

                <div className='backgroundTwoMainTwoText' >
                    <h3>Trending, Best <span style={{ fontWeight: 'bold' }}> Selling <br />
                        Tours And</span> Fun <br /> Destinations</h3>
                </div>


                <div className='backgroundTwoDetailText'>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa cum sociis Theme natoque. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa cum sociis Theme natoque.</p>
                </div>

            </div>
        </div>
    );
};

export default BackgroundTwo;