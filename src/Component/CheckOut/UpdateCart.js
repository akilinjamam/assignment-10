import React, { useState } from 'react'
import './UpdateCart.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useContext } from 'react'
import noteContext from '../../Context/noteContext'
import { useEffect } from 'react'
import axios from 'axios'

const UpdateCart = () => {

    const nevigate = useNavigate();

    const state = useContext(noteContext);

    const { updateCart } = useParams();
    const [tourType, setTourType] = useState(state?.tourType);
    const [members, setMembers] = useState(state?.members);
    const [updatedMember, setUpdatedMember] = useState('');
    const [updatedTourType, setUpdatedTourType] = useState('');
    const [viewTourType, setViewTourType] = useState('');
    const [viewMembers, setViewMembers] = useState('');
    const [viewBoth, setViewBoth] = useState('');

    console.log(updatedTourType);
    console.log(updatedMember);
    console.log(members);
    console.log(tourType);


    const handleUpdate = async () => {

        try {
            if (updatedMember && updatedTourType) {
                const updateCartInfo = await axios.patch(`http://localhost:5000/api/v1/userCarts/${updateCart}`, {
                    tourType: updatedTourType,
                    totalMember: updatedMember
                })
                    .then(res => console.log(res));

                nevigate('/addToCart')
            } else if (updatedMember === '' && updatedTourType === '') {
                setViewBoth('please select both ');
                setTimeout(() => {
                    setViewBoth('')
                }, 2000)
            } else if (updatedMember === '') {
                setViewMembers('please select member');
                setTimeout(() => {
                    setViewMembers('')
                }, 2000)
            } else if (updatedTourType === '') {
                setViewTourType('please select tourType')
                setTimeout(() => {
                    setViewTourType('')
                }, 2000)
            }


        } catch (error) {
            console.log(error?.response?.status);
        }
    }

    return (
        <div className='updateCartMain'>
            <div className="updateCartContainer">
                <div className='tablee'>
                    <table >
                        <tr className='tableHead'>
                            <td>{updatedTourType ? updatedTourType : tourType}</td>
                            <td>{updatedMember ? updatedMember : members}</td>
                            <td><i class="uil uil-file-edit-alt"></i></td>
                            <td><i class="uil uil-previous"></i></td>
                        </tr>
                        <tr>
                            <td>
                                <div >

                                    <select name="" id="" onChange={(e) => {
                                        const option = e.target.value;
                                        setTourType(option);
                                        setUpdatedTourType(option);
                                        if (option === 'Single-Tour') {
                                            setUpdatedMember(1);
                                        }
                                        if (option === 'Couple-Tour') {
                                            setUpdatedMember(2)
                                        }
                                        if (option === 'Family-Tour') {
                                            setUpdatedMember(3)
                                        }
                                        if (option === 'Group-Tour') {
                                            setUpdatedMember(5)
                                        }

                                    }}>
                                        <option value="">select type...</option>
                                        <option value="Single-Tour">Single-Tour</option>
                                        <option value="Couple-Tour">Couple-Tour</option>
                                        <option value="Family-Tour">Family-Tour</option>
                                        <option value="Group-Tour">Group-Tour"</option>

                                    </select>
                                </div>
                            </td>
                            <td className=''>

                                {tourType === 'Single-Tour' &&
                                    <div>
                                        <select name="" id="" onChange={(e) => {
                                            const option = e.target.value;

                                            setUpdatedMember(option)
                                        }}>
                                            <option value="">select member..</option>
                                            <option value="1">1</option>
                                        </select>
                                    </div>
                                }
                                {
                                    tourType === 'Family-Tour' &&
                                    <div>

                                        <select name="" id="" onChange={(e) => {
                                            const option = e.target.value;

                                            setUpdatedMember(option)
                                        }}>
                                            <option value="">select member..</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </select>
                                    </div>
                                }
                                {
                                    tourType === 'Couple-Tour' &&
                                    <div>

                                        <select name="" id="" onChange={(e) => {
                                            const option = e.target.value;

                                            setUpdatedMember(option)
                                        }}>
                                            <option value="">select member..</option>
                                            <option value="2">2</option>

                                        </select>
                                    </div>
                                }
                                {
                                    tourType === 'Group-Tour' &&
                                    <div>

                                        <select name="" id="" onChange={(e) => {
                                            const option = e.target.value;

                                            setUpdatedMember(option)
                                        }}>
                                            <option value="">select member..</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>

                                        </select>
                                    </div>
                                }
                            </td>
                            <td>
                                <button className='btn btn-primary' onClick={handleUpdate}>UPDATE</button>
                            </td>
                            <td>
                                <Link to='/addToCart'><button className='btn btn-danger'>CANCEL</button></Link>
                            </td>
                        </tr>
                    </table>
                    <div>
                        <p style={{ color: 'red' }}>{viewBoth}</p>
                    </div>
                    <div>
                        <p style={{ color: 'red' }}>{viewMembers}</p>
                    </div>
                    <div>
                        <p style={{ color: 'red' }}>{viewTourType}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateCart