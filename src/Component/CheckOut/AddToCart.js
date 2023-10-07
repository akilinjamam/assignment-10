import React, { useContext, useEffect, useState } from 'react';
import './AddToCart.css';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import fetchUserCartData from '../../fetchData/fetchUserCartData';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import noteContext from '../../Context/noteContext';
import axios from 'axios';
import AddToCartRes from './AddToCartRes';
import fetchGetPaymentData from '../../fetchData/fetchPaymentData';

const AddToCart = () => {

    const [user] = useAuthState(auth);
    const [viewPopup, setViewPopup] = useState(false)
    const [id, setId] = useState('');
    const [tourName, setTourName] = useState('');
    const email = user?.email;


    const nowTime = new Date().getTime();



    const { data: queryUserCart, refetch } = useQuery("queryUserCart", () => fetchUserCartData(email), {
        refetchInterval: 1000,
        refetchIntervalInBackground: true
    });

    const queryUserCartData = queryUserCart?.data?.result;

    const { data: getPaymentData } = useQuery("getPaymentData", () => fetchGetPaymentData());
    const getAllPaymentData = getPaymentData?.data?.result

    const navigate = useNavigate();

    useEffect(() => {
        refetch();
    }, [refetch]);

    const state = useContext(noteContext);


    const handleNavigate = (id, tourNameById) => {
        setId(id);
        setTourName(tourNameById);
        navigate(`/checkout/${id}`);
    }

    const handleEdit = (id, tourType, totalMember) => {
        navigate(`/updateCart/${id}`);
        state.setTourType(tourType);
        state.setMembers(totalMember);
    };

    const handlePopup = (id, name) => {
        setViewPopup(true);
        setId(id);
        setTourName(name);
    }

    const handleDelete = async () => {
        try {
            await axios.delete(`https://asssignment-10-server-delta.vercel.app/api/v1/userCarts/${id}`)
                .then(res => console.log(res))
        } catch (error) {
            console.log(error.message);
        }

        setViewPopup(false);
    }

    return (
        <div>
            {
                queryUserCartData?.length === 0
                    ?
                    <div className='alt-div'>
                        <p style={{ color: 'red', fontWeight: '200' }}>you have not added to cart any event yet...</p>
                    </div>
                    :
                    <div>
                        <div className="addToCartMain">


                            <div className="addToCartContainer">
                                <p className='cartTitle'>YOUR CART : {(user?.displayName).toUpperCase()} </p>

                                <table>
                                    <tr>
                                        <th> <p className='cartHeading'>Delete</p></th>
                                        <th> <p className='cartHeading'>Name</p></th>
                                        <th> <p className='cartHeading'>Tour-Type</p></th>
                                        <th> <p className='cartHeading'>Members</p></th>
                                        <th> <p className='cartHeading'>Total Price</p></th>
                                        <th> <p className='cartHeading'>Price / p</p></th>
                                        <th> <p className='cartHeading'>30% for Booking</p></th>
                                        <th> <p className='cartHeading'>Tour-Date</p></th>
                                        <th> <p className='cartHeading'>Last-Date</p></th>
                                        <th> <p className='cartHeading'>Remaining</p></th>
                                        <th> <p className='cartHeading'>Duration</p></th>
                                        <th> <p className='cartHeading'>Checkout</p></th>
                                        <th> <p className='cartHeading'>Status</p></th>
                                        <th> <p className='cartHeading'>Edit</p></th>
                                    </tr>
                                    {
                                        queryUserCartData?.map(q => {
                                            return (
                                                <tr key={q._id}>
                                                    <td><i onClick={() => handlePopup(q?._id, q?.tourName)} class="uil uil-cancel"></i></td>
                                                    <td> <span className='cartDetail'>{q?.tourName}</span></td>
                                                    <td> <span className='cartDetail'>{q?.tourType}</span></td>
                                                    <td> <span className='cartDetail'>{q?.totalMember}</span></td>
                                                    <td> <span className='cartDetail'>{q?.tourPrice * q?.totalMember}</span></td>
                                                    <td> <span className='cartDetail'>{q?.tourPrice}</span></td>
                                                    <td> <span className='cartDetail'>{((q?.tourPrice * q?.totalMember) * 30) / 100}</span></td>
                                                    <td> <span className='cartDetail'>{q?.tourDate}</span></td>
                                                    <td> <span className='cartDetail'>{q?.tourLastDate}</span></td>
                                                    <td>
                                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100px', color: 'red', margin: 'auto' }}>
                                                            <span className='cartDetail'>
                                                                {
                                                                    (Math.floor(((new Date(q?.tourLastDate).getTime()) - (nowTime)) / (24 * 60 * 60 * 1000))) < 10 &&
                                                                    <span className='cartDetail'>0</span>
                                                                }
                                                                {(Math.floor(((new Date(q?.tourLastDate).getTime()) - (nowTime)) / (24 * 60 * 60 * 1000))) < 0
                                                                    ?
                                                                    <span className='cartDetail'>0</span>
                                                                    :
                                                                    <span className='cartDetail'>
                                                                        {Math.floor(((new Date(q?.tourLastDate).getTime()) - (nowTime)) / (24 * 60 * 60 * 1000))}
                                                                    </span>
                                                                }
                                                            </span>
                                                            <span className='cartDetail' style={{ fontWeight: 'bold' }}>:</span>
                                                            <span className='cartDetail'>
                                                                {
                                                                    (Math.floor(((new Date(q?.tourLastDate).getTime()) - (nowTime)) % (24 * 60 * 60 * 1000) / (1000 * 60 * 60))) < 10 &&
                                                                    <span>0</span>
                                                                }
                                                                {(Math.floor(((new Date(q?.tourLastDate).getTime()) - (nowTime)) % (24 * 60 * 60 * 1000) / (1000 * 60 * 60))) < 0
                                                                    ?
                                                                    <span className='cartDetail'>0</span>
                                                                    :
                                                                    <span className='cartDetail'>
                                                                        {Math.floor(((new Date(q?.tourLastDate).getTime()) - (nowTime)) % (24 * 60 * 60 * 1000) / (1000 * 60 * 60))}
                                                                    </span>
                                                                }
                                                            </span>
                                                            <span className='cartDetail' style={{ fontWeight: 'bold' }}>:</span>
                                                            <span className='cartDetail'>
                                                                {
                                                                    (Math.floor(((new Date(q?.tourLastDate).getTime()) - (nowTime)) % (60 * 60 * 1000) / (1000 * 60))) < 10 &&
                                                                    <span className='cartDetail'>0</span>
                                                                }
                                                                {(Math.floor(((new Date(q?.tourLastDate).getTime()) - (nowTime)) % (60 * 60 * 1000) / (1000 * 60))) < 0
                                                                    ?
                                                                    <span className='cartDetail'>0</span>
                                                                    :
                                                                    <span>
                                                                        {Math.floor(((new Date(q?.tourLastDate).getTime()) - (nowTime)) % (60 * 60 * 1000) / (1000 * 60))}
                                                                    </span>
                                                                }

                                                            </span>
                                                            <span className='cartDetail' style={{ fontWeight: 'bold' }}>:</span>
                                                            <span className='cartDetail'>
                                                                {
                                                                    (Math.floor(((new Date(q?.tourLastDate).getTime()) - (nowTime)) % (60 * 1000) / 1000)) < 10 &&
                                                                    <span className='cartDetail'>0</span>
                                                                }
                                                                {(Math.floor(((new Date(q?.tourLastDate).getTime()) - (nowTime)) % (60 * 1000) / 1000)) < 0
                                                                    ?
                                                                    <span className='cartDetail'>0</span>
                                                                    :
                                                                    <span className='cartDetail'>
                                                                        {Math.floor(((new Date(q?.tourLastDate).getTime()) - (nowTime)) % (60 * 1000) / 1000)}
                                                                    </span>
                                                                }
                                                            </span>
                                                        </div>

                                                    </td>
                                                    <td><span className='cartDetail'>{q?.tourDuration}</span></td>
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
                                                        <td style={{ color: 'red' }}> <span className='cartDetail'>checkout time over</span> </td>
                                                        :
                                                        <td>
                                                            {
                                                                (getAllPaymentData?.find(f => {
                                                                    return f?.tourId === q?._id
                                                                })?.isPaid === true)
                                                                    ?
                                                                    <span style={{ fontSize: '13px' }}>done</span>
                                                                    :
                                                                    <button onClick={() => handleNavigate(q?._id, q?.tourName)} className='btn-outline'>
                                                                        <span className='cartDetail'>
                                                                            Procced to checkout
                                                                        </span>
                                                                    </button>
                                                            }
                                                        </td>

                                                    }

                                                    <td><span className='cartDetail'>{(getAllPaymentData?.find(f => {
                                                        return f?.tourId === q?._id
                                                    })?.isPaid === true)
                                                        ?
                                                        <span
                                                            onClick={() => navigate('/addToCart/paidDoc')}
                                                            style={{
                                                                fontStyle: 'italic', fontSize: '12px', color: 'green', fontWeight: 'bold',
                                                                cursor: 'pointer'
                                                            }}
                                                        >paid</span>
                                                        :
                                                        <span
                                                            style={{
                                                                fontStyle: 'italic', fontSize: '12px', color: 'red', fontWeight: 'bold'
                                                            }}
                                                        >unpaid</span>}</span></td>

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
                                                        <td>
                                                            {
                                                                (
                                                                    getAllPaymentData?.find(f => {
                                                                        return f?.tourName === q?.tourName
                                                                    })?.isPaid === true
                                                                )
                                                                    ?
                                                                    <i class="uil uil-ban"></i>
                                                                    :
                                                                    <i onClick={() => handleEdit(q?._id, q?.tourType, q?.totalMember)} class="uil uil-edit-alt">
                                                                    </i>
                                                            }
                                                        </td>
                                                    }
                                                </tr>
                                            )
                                        })
                                    }
                                </table>

                            </div>

                            <div className={` ${viewPopup ? 'block' : 'none'}`}>
                                <div className='popupCart'>
                                    <div className="popupContainer">
                                        <div className='popup-wrappper'>
                                            <div>
                                                <p className='popup-delete-title'>Are you sure to delete  this event <span style={{ color: 'yellow', fontWeight: 'bold' }}>{tourName}</span>  from your cart ?</p>
                                                <div className='popupCart-btn'>
                                                    <button onClick={() => setViewPopup(false)} className='btn btn-secondary'>Cancel</button>
                                                    <button onClick={handleDelete} className='btn btn-primary'>Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='addToCartRes'>
                            <AddToCartRes
                                queryUserCartData={queryUserCartData}
                                handlePopup={handlePopup}
                                handleEdit={handleEdit}
                                nowTime={nowTime}
                                handleNavigate={handleNavigate}
                                user={user}
                                viewPopup={viewPopup}
                                setViewPopup={setViewPopup}
                                handleDelete={handleDelete}
                                tourName={tourName}
                                getAllPaymentData={getAllPaymentData}
                                navigate={navigate}
                            >

                            </AddToCartRes>
                        </div>
                    </div>



            }

        </div >
    );
};

export default AddToCart;