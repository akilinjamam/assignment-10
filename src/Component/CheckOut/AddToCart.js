import React, { useContext, useEffect, useState } from 'react';
import './AddToCart.css';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import fetchUserCartData from '../../fetchData/fetchUserCartData';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import noteContext from '../../Context/noteContext';

const AddToCart = () => {

    const [user] = useAuthState(auth);
    const email = user?.email;

    const state = useContext(noteContext);

    useEffect(() => {

    })


    const { data: queryUserCart, refetch } = useQuery("queryUserCart", () => fetchUserCartData(email));

    const queryUserCartData = queryUserCart?.data?.result;
    const navigate = useNavigate();

    useEffect(() => {
        refetch();
    }, [refetch]);

    const mappedForEmailName = queryUserCartData?.map(q => {
        return (
            <span>{(q?.emailName).toUpperCase()}</span>
        )
    })

    const handleNavigate = () => {
        navigate('/checkout');
    }

    return (
        <div>
            <div className="addToCartMain">

                <p className='cartTitle'>YOUR CART : {mappedForEmailName?.slice((mappedForEmailName.length - 1), (mappedForEmailName.le))} </p>

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
                                        <td></td>
                                        <td>{q?.tourDuration}</td>
                                        <td><button onClick={handleNavigate} className='btn-outline'>Procced to checkout</button></td>
                                        <td><i class="uil uil-edit-alt"></i></td>
                                    </tr>
                                )
                            })
                        }
                    </table>



                </div>
            </div>

            {/* <Link to='/checkout'>checkout</Link> */}
        </div>
    );
};

export default AddToCart;