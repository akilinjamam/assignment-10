import React, { useContext, useEffect, useState } from 'react';
import './AddToCart.css';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import fetchUserCartData from '../../fetchData/fetchUserCartData';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddToCart = () => {

    const [user] = useAuthState(auth);
    const [timerCount, setTimerCount] = useState()
    const email = user?.email;


    const nowTime = new Date().getTime();

    console.log(nowTime);

    const { data: queryUserCart, refetch } = useQuery("queryUserCart", () => fetchUserCartData(email), {
        refetchInterval: 1000,
        refetchIntervalInBackground: true
    });

    const queryUserCartData = queryUserCart?.data?.result;
    const navigate = useNavigate();

    useEffect(() => {
        refetch();
    }, [refetch]);



    const handleNavigate = () => {
        navigate('/checkout');
    }

    return (
        <div>
            <div className="addToCartMain">

                <p className='cartTitle'>YOUR CART : {(user?.displayName).toUpperCase()} </p>

                <div className="addToCartContainer">

                    <table>
                        <tr>
                            <th>Delete</th>
                            <th>Name</th>
                            <th>Tour-Type</th>
                            <th>Members</th>
                            <th>Price</th>
                            <th>Last-Date</th>
                            <th>Remaining</th>
                            <th>Duration</th>
                            <th>Checkout</th>
                            <th>Edit</th>
                        </tr>
                        {
                            queryUserCartData?.map(q => {
                                return (
                                    <tr key={q._id}>
                                        <td><i class="uil uil-cancel"></i></td>
                                        <td>{q?.tourName}</td>
                                        <td>{q?.tourType}</td>
                                        <td>{q?.totalMember}</td>
                                        <td>{q?.tourPrice}</td>
                                        <td>{q?.tourLastDate}</td>
                                        <td>
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100px', color: 'red' }}>
                                                <span>
                                                    {
                                                        (Math.floor(((new Date(q?.tourLastDate).getTime()) - (nowTime)) / (24 * 60 * 60 * 1000))) < 10 &&
                                                        <span>0</span>
                                                    }
                                                    {(Math.floor(((new Date(q?.tourLastDate).getTime()) - (nowTime)) / (24 * 60 * 60 * 1000))) < 0
                                                        ?
                                                        <span>0</span>
                                                        :
                                                        <span>
                                                            {Math.floor(((new Date(q?.tourLastDate).getTime()) - (nowTime)) / (24 * 60 * 60 * 1000))}
                                                        </span>
                                                    }
                                                </span>
                                                <span style={{ fontWeight: 'bold' }}>:</span>
                                                <span>
                                                    {
                                                        (Math.floor(((new Date(q?.tourLastDate).getTime()) - (nowTime)) % (24 * 60 * 60 * 1000) / (1000 * 60 * 60))) < 10 &&
                                                        <span>0</span>
                                                    }
                                                    {(Math.floor(((new Date(q?.tourLastDate).getTime()) - (nowTime)) % (24 * 60 * 60 * 1000) / (1000 * 60 * 60))) < 0
                                                        ?
                                                        <span>0</span>
                                                        :
                                                        <span>
                                                            {Math.floor(((new Date(q?.tourLastDate).getTime()) - (nowTime)) % (24 * 60 * 60 * 1000) / (1000 * 60 * 60))}
                                                        </span>
                                                    }
                                                </span>
                                                <span style={{ fontWeight: 'bold' }}>:</span>
                                                <span>
                                                    {
                                                        (Math.floor(((new Date(q?.tourLastDate).getTime()) - (nowTime)) % (60 * 60 * 1000) / (1000 * 60))) < 10 &&
                                                        <span>0</span>
                                                    }
                                                    {(Math.floor(((new Date(q?.tourLastDate).getTime()) - (nowTime)) % (60 * 60 * 1000) / (1000 * 60))) < 0
                                                        ?
                                                        <span>0</span>
                                                        :
                                                        <span>
                                                            {Math.floor(((new Date(q?.tourLastDate).getTime()) - (nowTime)) % (60 * 60 * 1000) / (1000 * 60))}
                                                        </span>
                                                    }

                                                </span>
                                                <span style={{ fontWeight: 'bold' }}>:</span>
                                                <span>
                                                    {
                                                        (Math.floor(((new Date(q?.tourLastDate).getTime()) - (nowTime)) % (60 * 1000) / 1000)) < 10 &&
                                                        <span>0</span>
                                                    }
                                                    {(Math.floor(((new Date(q?.tourLastDate).getTime()) - (nowTime)) % (60 * 1000) / 1000)) < 0
                                                        ?
                                                        <span>0</span>
                                                        :
                                                        <span>
                                                            {Math.floor(((new Date(q?.tourLastDate).getTime()) - (nowTime)) % (60 * 1000) / 1000)}
                                                        </span>
                                                    }
                                                </span>
                                            </div>

                                        </td>
                                        <td>{q?.tourDuration}</td>
                                        {((
                                            Math.floor(((new Date(q?.tourLastDate).getTime()) - (nowTime)) / (24 * 60 * 60 * 1000))
                                        )
                                            &&
                                            (
                                                Math.floor(((new Date(q?.tourLastDate).getTime()) - (nowTime)) % (24 * 60 * 60 * 1000) / (1000 * 60 * 60))
                                            )
                                            &&
                                            (
                                                Math.floor(((new Date(q?.tourLastDate).getTime()) - (nowTime)) % (60 * 60 * 1000) / (1000 * 60))
                                            )
                                            &&
                                            (
                                                Math.floor(((new Date(q?.tourLastDate).getTime()) - (nowTime)) % (60 * 1000) / 1000)
                                            )
                                        ) < 0
                                            ?
                                            <td style={{ color: 'red' }}>checkout time over</td>
                                            :
                                            <td><button onClick={handleNavigate} className='btn-outline'>Procced to checkout</button></td>

                                        }

                                        {((
                                            Math.floor(((new Date(q?.tourLastDate).getTime()) - (nowTime)) / (24 * 60 * 60 * 1000))
                                        )
                                            &&
                                            (
                                                Math.floor(((new Date(q?.tourLastDate).getTime()) - (nowTime)) % (24 * 60 * 60 * 1000) / (1000 * 60 * 60))
                                            )
                                            &&
                                            (
                                                Math.floor(((new Date(q?.tourLastDate).getTime()) - (nowTime)) % (60 * 60 * 1000) / (1000 * 60))
                                            )
                                            &&
                                            (
                                                Math.floor(((new Date(q?.tourLastDate).getTime()) - (nowTime)) % (60 * 1000) / 1000)
                                            )
                                        ) < 0
                                            ?
                                            <td ><i class="uil uil-ban"></i></td>
                                            :
                                            <td><i class="uil uil-edit-alt"></i></td>

                                        }
                                        {/* <td><i class="uil uil-edit-alt"></i></td> */}
                                    </tr>
                                )
                            })
                        }
                    </table>



                </div>
            </div>

            {/* <Link to='/checkout'>checkout</Link> */}
        </div >
    );
};

export default AddToCart;