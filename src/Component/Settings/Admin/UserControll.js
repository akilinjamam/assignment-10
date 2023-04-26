import React, { useEffect } from 'react';
import './UserControll.css';
import { useQuery } from 'react-query';
import fetchUserControllData from '../../../fetchData/fetchUserControllData';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const UserControll = () => {
    const { data: queryUserController, refetch } = useQuery("queryUserController", () => fetchUserControllData());

    const [user] = useAuthState(auth)

    const handleRole = async (id, role) => {
        console.log(role);

        if (id) {
            try {
                const response = await axios.patch(`https://assignment-10-server.onrender.com/api/v1/userControll/${id}`, {
                    userRoll: role
                })
                    .then(response => console.log(response));
                refetch();
            } catch (error) {
                console.log(error.message);
            }
        }

    }

    return (
        <div className='userControllMain'>
            <div className="userControllContainer">
                <h6 className='userControllTitle'>ALL USERS :</h6>
                <hr />
                <div className="userControllSection">
                    <table>
                        <tr>
                            <td style={{ fontWeight: 'bold', fontSize: '12px' }}>IMAGE</td>
                            <td style={{ fontWeight: 'bold', fontSize: '12px' }}>EMAIL</td>
                            <td style={{ fontWeight: 'bold', fontSize: '12px' }}>MAKE ADMIN</td>
                            <td style={{ fontWeight: 'bold', fontSize: '12px' }}>MAKE EDITOR</td>
                            <td style={{ fontWeight: 'bold', fontSize: '12px' }}>MAKE USER</td>
                            <td style={{ fontWeight: 'bold', fontSize: '12px' }}>STATUS</td>

                        </tr>

                        {
                            queryUserController?.data?.result?.map(u => {
                                return (
                                    <tr key={u?._id}>
                                        <td >
                                            {
                                                u?.userPhoto !== null
                                                    ?
                                                    <img style={{ width: '40px', height: '40px', borderRadius: '50%' }} src={u?.userPhoto} alt="" />
                                                    :
                                                    <i className="uil uil-user-circle"></i>
                                            }
                                        </td>
                                        <td>{u?.email}</td>

                                        <td><button onClick={() => handleRole(u?._id, 'admin')} style={{ width: '70%' }} type="button" className="btn btn-outline-warning"><span style={{ fontSize: '13px' }}>ADMIN</span></button></td>

                                        <td>
                                            {
                                                u?.email !== 'akilinjamam@gmail.com' &&
                                                <button onClick={() => handleRole(u?._id, 'editor')} style={{ width: '70%' }} type="button" className="btn btn-outline-success"><span style={{ fontSize: '13px' }}>EDITOR</span></button>
                                            }
                                        </td>

                                        <td>
                                            {
                                                u?.email !== 'akilinjamam@gmail.com' &&
                                                <button onClick={() => handleRole(u?._id, 'normal')} style={{ width: '70%' }} type="button" className="btn btn-outline-info"><span style={{ fontSize: '13px' }}>USER</span></button>
                                            }
                                        </td>
                                        <td>{u?.userRoll}</td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserControll;