import React, { useContext } from 'react';
import './Personal_detail.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import usePersonalDetails from './usePersonalDetails';
import noteContext from '../../../Context/noteContext';

const PersonalDetail = () => {
    const state = useContext(noteContext);
    const setSlideDrawer = state.setSlideDrawer;
    const [user] = useAuthState(auth);

    const [allInfo, allData, setAllData, viewEdit, setViewEdit, idHolder, setIdHolder, handleUpdate, isLoading, viewUpdating, setViewUpdating] = usePersonalDetails(user);

    return (
        <div className='personal_main'>
            <div className="personal_title">
                <div>
                    <h3>Personal details</h3>
                    <p>Update your info and find out how it's used.</p>
                </div>
                <div className='right_flex'>
                    {user?.photoURL ? <img src={user?.photoURL} alt="" /> : <i style={{ fontSize: '40px' }} class="uil uil-image-upload"></i>}
                </div>
            </div>
            <div className='switch_drawer_responsive'>
                <i onClick={() => setSlideDrawer(true)} class="uil uil-bars" style={{ cursor: 'pointer' }}></i>
            </div>
            <hr />
            {
                allInfo.map(info => {
                    return (
                        <div key={info.id}>
                            <div className="personal_detail">
                                <div className="personal_detail_title">
                                    <p>{info.title}</p>

                                </div>
                                <div className="personal_detail_value">
                                    <p style={{ display: `${(viewEdit && (info.id === idHolder)) ? 'none' : 'block'}` }}>

                                        {!isLoading ? info.updatedValue : 'loading...'}
                                        {info.title === 'Email Address' && <p>{info.emailVarified ? <p className='text-primary'>Verified</p> : <p className='text-danger'>Not Verified</p>}</p>}

                                    </p>
                                    <div style={{ display: `${(viewEdit && (info.id === idHolder)) ? 'block' : 'none'}` }}>
                                        <input type="text" value={info.editableValue}
                                            onChange={(e) => {
                                                setAllData({ ...allData, [info.variable]: e.target.value })
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="personal_detail_edition right_flex">
                                    <button
                                        style={{ display: `${((viewEdit && (info.id === idHolder)) || info.buttonHide === true) ? 'none' : 'block'}` }}
                                        onClick={() => {
                                            setIdHolder(info.id)
                                            setViewEdit(!viewEdit)
                                        }} className='btn btn-primary'>{info.buttonEdit}
                                    </button>
                                    <button
                                        style={{ display: `${(viewEdit && (info.id === idHolder)) ? 'block' : 'none'}`, marginRight: '5px' }}
                                        onClick={() => {
                                            setViewUpdating(true)
                                            setTimeout(() => {
                                                setViewEdit(!viewEdit);
                                                setViewUpdating(false)
                                            }, 2000)
                                            handleUpdate();
                                        }} className='btn btn-primary'>{viewUpdating ? 'loading..' : info.buttonSave}
                                    </button>
                                    <button
                                        style={{ display: `${(viewEdit && (info.id === idHolder)) ? 'block' : 'none'}` }}
                                        onClick={() => {
                                            setViewEdit(!viewEdit);
                                        }} className='btn btn-danger'>{info.buttonCancel}
                                    </button>
                                </div>
                            </div>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    );
};

export default PersonalDetail;