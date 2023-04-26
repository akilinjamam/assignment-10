import React, { useContext, useEffect, useState } from 'react';
import './AddToCart.css';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import fetchUserCartData from '../../fetchData/fetchUserCartData';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import noteContext from '../../Context/noteContext';
import axios from 'axios';

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
    const navigate = useNavigate();

    useEffect(() => {
        refetch();
    }, [refetch]);

    const state = useContext(noteContext);


    const handleNavigate = () => {
        navigate('/checkout');
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
            const response = await axios.delete(`https://assignment-10-server.onrender.com/api/v1/userCarts/${id}`)
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
                    <div className="addToCartMain">


                        <div className="addToCartContainer">
                            <p className='cartTitle'>YOUR CART : {(user?.displayName).toUpperCase()} </p>

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
                                    <th>Status</th>
                                    <th>Edit</th>
                                </tr>
                                {
                                    queryUserCartData?.map(q => {
                                        return (
                                            <tr key={q._id}>
                                                <td><i onClick={() => handlePopup(q?._id, q?.tourName)} class="uil uil-cancel"></i></td>
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

                                                <td>unpaid</td>

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
                                                    <td><i onClick={() => handleEdit(q?._id, q?.tourType, q?.totalMember)} class="uil uil-edit-alt"></i></td>
                                                }
                                            </tr>
                                        )
                                    })
                                }
                            </table>

                            {/* ${viewPopup ? 'block' : 'none'} */}

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
            }

            {/* <Link to='/checkout'>checkout</Link> */}
        </div >
    );
};

export default AddToCart;