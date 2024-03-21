import React, { useState } from 'react';
import './Personal_detail.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const PersonalDetail = () => {
    const [user] = useAuthState(auth);
    const [viewEdit, setViewEdit] = useState(false);
    const [idHolder, setIdHolder] = useState('');

    const [allData, setAllData] = useState({
        name: 'Injamam Islam Chowdhury',
        displayName: 'Akil injamam',
        emailAddress: 'akil@gmail.com',
        phoneNumber: '123456789',
        dateOfBirth: '1992/12/31',
        nationality: 'Bangladeshi',
        gender: 'Male',
        address: 'Chittagong, Bangladesh',
        passport: '123223345675'
    })

    const allInfo = [
        {
            id: 1,
            title: 'name',
            updatedValue: allData.name,
            editableValue: allData.name,
            buttonEdit: 'Edit',
            buttonSave: 'save',
            buttonCancel: 'cancel',
            variable: 'name'
        },
        {
            id: 2,
            title: 'Display Name',
            updatedValue: allData.displayName,
            editableValue: allData.displayName,
            buttonEdit: 'Edit',
            buttonSave: 'save',
            buttonCancel: 'cancel',
            variable: 'displayName'
        },
        {
            id: 3,
            title: 'Email Address',
            updatedValue: allData.emailAddress,
            editableValue: allData.emailAddress,
            buttonEdit: 'Edit',
            buttonSave: 'save',
            buttonCancel: 'cancel',
            variable: 'emailAddress'
        },
        {
            id: 4,
            title: 'Phone Number',
            updatedValue: allData.phoneNumber,
            editableValue: allData.phoneNumber,
            buttonEdit: 'Edit',
            buttonSave: 'save',
            buttonCancel: 'cancel',
            variable: 'phoneNumber'
        },
        {
            id: 5,
            title: 'Date of Birth',
            updatedValue: allData.dateOfBirth,
            editableValue: allData.dateOfBirth,
            buttonEdit: 'Edit',
            buttonSave: 'save',
            buttonCancel: 'cancel',
            variable: 'dateOfBirth'
        },
        {
            id: 6,
            title: 'Nationality',
            updatedValue: allData.nationality,
            editableValue: allData.nationality,
            buttonEdit: 'Edit',
            buttonSave: 'save',
            buttonCancel: 'cancel',
            variable: 'nationality'
        },
        {
            id: 7,
            title: 'Gender',
            updatedValue: allData.gender,
            editableValue: allData.gender,
            buttonEdit: 'Edit',
            buttonSave: 'save',
            buttonCancel: 'cancel',
            variable: 'gender'
        },
        {
            id: 8,
            title: 'Address',
            updatedValue: allData.address,
            editableValue: allData.address,
            buttonEdit: 'Edit',
            buttonSave: 'save',
            buttonCancel: 'cancel',
            variable: 'address'
        },
        {
            id: 9,
            title: 'Passport',
            updatedValue: allData.passport,
            editableValue: allData.passport,
            buttonEdit: 'Edit',
            buttonSave: 'save',
            buttonCancel: 'cancel',
            variable: 'passport'
        }
    ]

    return (
        <div className='personal_main'>
            <div className="personal_title">
                <div>
                    <h3>Personal details</h3>
                    <p>Update your info and find out how it's used.</p>
                </div>
                <div className='right_flex'>
                    <img src={user?.photoURL} alt="" />
                </div>
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
                                    <p style={{ display: `${(viewEdit && (info.id === idHolder)) ? 'none' : 'block'}` }}>{info.updatedValue}</p>
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
                                        style={{ display: `${(viewEdit && (info.id === idHolder)) ? 'none' : 'block'}` }}
                                        onClick={() => {
                                            setIdHolder(info.id)
                                            setViewEdit(!viewEdit)
                                        }} className='btn btn-primary'>{info.buttonEdit}
                                    </button>
                                    <button
                                        style={{ display: `${(viewEdit && (info.id === idHolder)) ? 'block' : 'none'}`, marginRight: '5px' }}
                                        onClick={() => {
                                            setIdHolder(info.id)
                                            setViewEdit(!viewEdit)
                                        }} className='btn btn-primary'>{info.buttonSave}
                                    </button>
                                    <button
                                        style={{ display: `${(viewEdit && (info.id === idHolder)) ? 'block' : 'none'}` }}
                                        onClick={() => {
                                            setIdHolder(info.id)
                                            setViewEdit(!viewEdit)
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