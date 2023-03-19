import React, { useContext, useEffect } from 'react';
import './CheckOut.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import noteContext from '../../Context/noteContext';

import { useState } from 'react';
const CheckOut = () => {

    const [gender, setGender] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('')
    const navigate = useNavigate();
    const c = useContext(noteContext);
    const members = c.members;
    const setNameData = c.setNameData;
    const setFormPersonal = c.setFormPersonal

    const routerPath = useLocation();
    const onTop = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        onTop()
    }, [routerPath])

    let memberData
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            name: e.target.myName.value,
            fatherName: e.target.fatherName.value,
            motherName: e.target.motherName.value,
            nidNum: e.target.nidNum.value,
            mobileNum: e.target.mobileNum.value,
            genderId: gender,
            tourName: c?.name?.name,
            tourType: c?.tourType,
            tourDuration: c?.name?.stayLong,
            tourPrice: c?.name?.price,
            paymentMethod: paymentMethod,
            address: e.target.address.value,
            member: members,
        }

        setFormPersonal((s) => [...s, formData])

        console.log(formData)


        if (members == 1) {
            memberData = {
                member1: e.target.name1.value,
            }
            setNameData((m) => [...m, memberData]);
        }
        if (members == 2) {
            memberData = {
                member1: e.target.name1.value,
                member2: e.target.name2.value,

            }
            setNameData((m) => [...m, memberData]);
        }
        if (members == 3) {
            memberData = {
                member1: e.target.name1.value,
                member2: e.target.name2.value,
                member3: e.target.name3.value,
            }
            setNameData((m) => [...m, memberData]);
        }
        if (members == 4) {
            memberData = {
                member1: e.target.name1.value,
                member2: e.target.name2.value,
                member3: e.target.name3.value,
                member4: e.target.name4.value,

            }
            setNameData((m) => [...m, memberData]);
        }
        if (members == 5) {
            memberData = {
                member1: e.target.name1.value,
                member2: e.target.name2.value,
                member3: e.target.name3.value,
                member4: e.target.name4.value,
                member5: e.target.name5.value
            }
            setNameData((m) => [...m, memberData]);
        }
        if (members == 6) {
            memberData = {
                member1: e.target.name1.value,
                member2: e.target.name2.value,
                member3: e.target.name3.value,
                member4: e.target.name4.value,
                member5: e.target.name5.value,
                member6: e.target.name6.value
            }
            setNameData((m) => [...m, memberData]);
        }
        if (members == 7) {
            memberData = {
                member1: e.target.name1.value,
                member2: e.target.name2.value,
                member3: e.target.name3.value,
                member4: e.target.name4.value,
                member5: e.target.name5.value,
                member6: e.target.name6.value,
                member7: e.target.name7.value,
            }
            setNameData((m) => [...m, memberData]);
        }
        if (members == 8) {
            memberData = {
                member1: e.target.name1.value,
                member2: e.target.name2.value,
                member3: e.target.name3.value,
                member4: e.target.name4.value,
                member5: e.target.name5.value,
                member6: e.target.name6.value,
                member7: e.target.name7.value,
                member8: e.target.name8.value,
            }
            setNameData((m) => [...m, memberData]);
        }
        if (members == 9) {
            memberData = {
                member1: e.target.name1.value,
                member2: e.target.name2.value,
                member3: e.target.name3.value,
                member4: e.target.name4.value,
                member5: e.target.name5.value,
                member6: e.target.name6.value,
                member7: e.target.name7.value,
                member8: e.target.name8.value,
                member9: e.target.name9.value,
            }
            setNameData((m) => [...m, memberData]);
        }
        if (members == 10) {
            memberData = {
                member1: e.target.name1.value,
                member2: e.target.name2.value,
                member3: e.target.name3.value,
                member4: e.target.name4.value,
                member5: e.target.name5.value,
                member6: e.target.name6.value,
                member7: e.target.name7.value,
                member8: e.target.name8.value,
                member9: e.target.name9.value,
                member10: e.target.name10.value,
            }
            setNameData((m) => [...m, memberData]);
        }
        if (members == 11) {
            memberData = {
                member1: e.target.name1.value,
                member2: e.target.name2.value,
                member3: e.target.name3.value,
                member4: e.target.name4.value,
                member5: e.target.name5.value,
                member6: e.target.name6.value,
                member7: e.target.name7.value,
                member8: e.target.name8.value,
                member9: e.target.name9.value,
                member10: e.target.name10.value,
                member11: e.target.name11.value,
            }
            setNameData((m) => [...m, memberData]);
        }
        if (members == 12) {
            memberData = {
                member1: e.target.name1.value,
                member2: e.target.name2.value,
                member3: e.target.name3.value,
                member4: e.target.name4.value,
                member5: e.target.name5.value,
                member6: e.target.name6.value,
                member7: e.target.name7.value,
                member8: e.target.name8.value,
                member9: e.target.name9.value,
                member10: e.target.name10.value,
                member11: e.target.name11.value,
                member12: e.target.name12.value,
            }
            setNameData((m) => [...m, memberData]);
        }
        if (members == 13) {
            memberData = {
                member1: e.target.name1.value,
                member2: e.target.name2.value,
                member3: e.target.name3.value,
                member4: e.target.name4.value,
                member5: e.target.name5.value,
                member6: e.target.name6.value,
                member7: e.target.name7.value,
                member8: e.target.name8.value,
                member9: e.target.name9.value,
                member10: e.target.name10.value,
                member11: e.target.name11.value,
                member12: e.target.name12.value,
                member13: e.target.name13.value,
            }
            setNameData((m) => [...m, memberData]);
        }
        if (members == 14) {
            memberData = {
                member1: e.target.name1.value,
                member2: e.target.name2.value,
                member3: e.target.name3.value,
                member4: e.target.name4.value,
                member5: e.target.name5.value,
                member6: e.target.name6.value,
                member7: e.target.name7.value,
                member8: e.target.name8.value,
                member9: e.target.name9.value,
                member10: e.target.name10.value,
                member11: e.target.name11.value,
                member12: e.target.name12.value,
                member13: e.target.name13.value,
                member14: e.target.name14.value,
            }
            setNameData((m) => [...m, memberData]);
        }
        if (members == 15) {
            memberData = {
                member1: e.target.name1.value,
                member2: e.target.name2.value,
                member3: e.target.name3.value,
                member4: e.target.name4.value,
                member5: e.target.name5.value,
                member6: e.target.name6.value,
                member7: e.target.name7.value,
                member8: e.target.name8.value,
                member9: e.target.name9.value,
                member10: e.target.name10.value,
                member11: e.target.name11.value,
                member12: e.target.name12.value,
                member13: e.target.name13.value,
                member14: e.target.name14.value,
                member15: e.target.name15.value,
            }
            setNameData((m) => [...m, memberData]);
        }

        if (paymentMethod === 'onSpotPayment') {
            navigate('/pdfForm')
        }
        if (paymentMethod === 'online') {
            navigate('/pdfFormPay')
        }
    }


    return (
        <div>
            <br />
            <h2 className=''>FILL-UP THE FORM</h2>

            <div className='checkoutMain'>
                <section className='checkoutContainer'>
                    <form onSubmit={handleSubmit} action="">
                        <div className="checkoutDiv">
                            <div className="checkoutFirstDiv">
                                <div style={{ display: 'flex' }}>
                                    <label htmlFor="">YOUR NAME :</label>
                                    <input required type="text" name="myName" id="" />
                                </div>
                                <br />
                                <div style={{ display: 'flex' }}>
                                    <label htmlFor="">FATHER'S NAME :</label>
                                    <input required type="text" name="fatherName" id="" />
                                </div>
                                <br />
                                <div style={{ display: 'flex' }}>
                                    <label htmlFor="">MOTHER'S NAME :</label>
                                    <input required type="text" name="motherName" id="" />
                                </div>
                                <br />
                                <div style={{ display: 'flex' }}>
                                    <label htmlFor="">ADDRESS :</label>
                                    <input required type="text" name="address" id="" />
                                </div>
                            </div>
                            <div className="checkoutSecondDiv">
                                <div style={{ display: 'flex' }}>
                                    <label htmlFor="">NID NUMBER :</label>
                                    <input required type="text" name="nidNum" id="" />
                                </div>
                                <br />
                                <div style={{ display: 'flex' }}>
                                    <label htmlFor="">MOBILE NUMBER :</label>
                                    <input required type="text" name="mobileNum" id="" />
                                </div>
                                <br />
                                <div style={{ display: 'flex' }}>
                                    <label htmlFor="">GENDER :</label>
                                    <select required name="" id="" onChange={(e) => {
                                        const option = e.target.value;
                                        setGender(option)
                                    }} >
                                        <option value="">SELECT GENDER</option>
                                        <option value="male">MALE</option>
                                        <option value="female">FEMALE</option>
                                        <option value="third">THIRD</option>
                                    </select>
                                </div>
                                <br />
                                <div style={{ display: 'flex' }}>
                                    <label htmlFor="">PAYMENT :</label>
                                    <select required name="" id="" onChange={(e) => {
                                        const option = e.target.value;
                                        setPaymentMethod(option)
                                    }} >
                                        <option value="">SELECT PAYMENT METHOD</option>
                                        <option value="onSpotPayment">ON-SPOT-PAYMENT</option>
                                        <option value="online">BKASH/ROCKET/NOGOD</option>

                                    </select>
                                </div>
                            </div>
                        </div>
                        <br />
                        <hr />
                        <br />
                        <div className="checkoutTourInfo">
                            <div className='infoDivOne'>
                                <div style={{ display: 'flex' }}>
                                    <label htmlFor="">TOUR NAME :</label>
                                    <input required type="text" name="" id="" value={c?.name?.name} />
                                </div>
                                <br />
                                <div style={{ display: 'flex' }}>
                                    <label htmlFor="">TOUR TYPE :</label>
                                    <input required type="text" name="" id="" value={c?.tourType} />
                                </div>
                                <br />
                                <div style={{ display: 'flex' }}>
                                    <label htmlFor="">TOUR DURATION :</label>
                                    <input required type="text" name="" id="" value={c?.name?.stayLong} />
                                </div>
                            </div>
                            <br />
                            <div className='infoDivTwo'>
                                <div style={{ display: 'flex' }}>
                                    <label htmlFor="">TOUR MEMBERS :</label>
                                    <input required type="text" name="" id="" value={c?.members} />
                                </div>
                                <br />
                                <div style={{ display: 'flex' }}>
                                    <label htmlFor="">Tour Cost :</label>
                                    <input required type="text" name="" id="" value={c?.name?.price} />
                                </div>
                            </div>
                        </div>
                        <br />
                        <hr />
                        <br />
                        <div className='memberMngmntContainer'>
                            {members > 2 && <p style={{ fontStyle: 'italic' }}>please type all name of members(including you..)</p>}
                            {members == 1 && <p style={{ fontStyle: 'italic' }}>please Type Your Name here...</p>}
                            {members == 2 && <p style={{ fontStyle: 'italic' }}>please Type both of your Name here...</p>}
                            {members == 1 &&
                                <div className="memberManagement">
                                    <div>
                                        <input required placeholder='type your name... ' type="text" name="name1" id="" />

                                    </div>
                                </div>
                            }
                            {members == 2 &&
                                <div className="memberManagement">
                                    <div>
                                        <input required placeholder='type member name 1 ' type="text" name="name1" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 2 ' type="text" name="name2" id="" />
                                        <br /><br />
                                    </div>
                                </div>
                            }
                            {members == 3 &&
                                <div className="memberManagement">
                                    <div>
                                        <input required placeholder='type member name 1 ' type="text" name="name1" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 2 ' type="text" name="name2" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 3 ' type="text" name="name3" id="" />
                                        <br /><br />
                                    </div>
                                </div>
                            }
                            {members == 4 &&
                                <div className="memberManagement">
                                    <div>
                                        <input required placeholder='type member name 1 ' type="text" name="name1" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 2 ' type="text" name="name2" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 3 ' type="text" name="name3" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 4 ' type="text" name="name4" id="" />
                                        <br /><br />
                                    </div>
                                </div>
                            }
                            {members == 5 &&
                                <div className="memberManagement">
                                    <div>
                                        <input required placeholder='type member name 1 ' type="text" name="name1" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 2 ' type="text" name="name2" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 3 ' type="text" name="name3" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 4 ' type="text" name="name4" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 5 ' type="text" name="name5" id="" />
                                        <br /><br />
                                    </div>
                                </div>
                            }
                            {members == 6 &&
                                <div className="memberManagement">
                                    <div>
                                        <input required placeholder='type member name 1 ' type="text" name="name1" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 2 ' type="text" name="name2" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 3 ' type="text" name="name3" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 4 ' type="text" name="name4" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 5 ' type="text" name="name5" id="" />
                                        <br /><br />
                                    </div>
                                    <div>
                                        <input required placeholder='type member name 6 ' type="text" name="name6" id="" />
                                        <br /><br />
                                    </div>

                                </div>
                            }
                            {members == 7 &&
                                <div className="memberManagement">
                                    <div>
                                        <input required placeholder='type member name 1 ' type="text" name="name1" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 2 ' type="text" name="name2" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 3 ' type="text" name="name3" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 4 ' type="text" name="name4" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 5 ' type="text" name="name5" id="" />
                                        <br /><br />
                                    </div>
                                    <div>
                                        <input required placeholder='type member name 6 ' type="text" name="name6" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 7 ' type="text" name="name7" id="" />
                                        <br /><br />
                                    </div>

                                </div>
                            }
                            {members == 8 &&
                                <div className="memberManagement">
                                    <div>
                                        <input required placeholder='type member name 1 ' type="text" name="name1" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 2 ' type="text" name="name2" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 3 ' type="text" name="name3" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 4 ' type="text" name="name4" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 5 ' type="text" name="name5" id="" />
                                        <br /><br />
                                    </div>
                                    <div>
                                        <input required placeholder='type member name 6 ' type="text" name="name6" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 7 ' type="text" name="name7" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 8 ' type="text" name="name8" id="" />
                                        <br /><br />
                                    </div>

                                </div>
                            }
                            {members == 9 &&
                                <div className="memberManagement">
                                    <div>
                                        <input required placeholder='type member name 1 ' type="text" name="name1" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 2 ' type="text" name="name2" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 3 ' type="text" name="name3" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 4 ' type="text" name="name4" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 5 ' type="text" name="name5" id="" />
                                        <br /><br />
                                    </div>
                                    <div>
                                        <input required placeholder='type member name 6 ' type="text" name="name6" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 7 ' type="text" name="name7" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 8 ' type="text" name="name8" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 9 ' type="text" name="name9" id="" />
                                        <br /><br />
                                    </div>

                                </div>
                            }
                            {members == 10 &&
                                <div className="memberManagement">
                                    <div>
                                        <input required placeholder='type member name 1 ' type="text" name="name1" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 2 ' type="text" name="name2" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 3 ' type="text" name="name3" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 4 ' type="text" name="name4" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 5 ' type="text" name="name5" id="" />
                                        <br /><br />
                                    </div>
                                    <div>
                                        <input required placeholder='type member name 6 ' type="text" name="name6" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 7 ' type="text" name="name7" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 8 ' type="text" name="name8" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 9 ' type="text" name="name9" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 10' type="text" name="name10" id="" />
                                        <br /><br />
                                    </div>
                                </div>
                            }
                            {members == 11 &&
                                <div className="memberManagement">
                                    <div>
                                        <input required placeholder='type member name 1 ' type="text" name="name1" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 2 ' type="text" name="name2" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 3 ' type="text" name="name3" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 4 ' type="text" name="name4" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 5 ' type="text" name="name5" id="" />
                                        <br /><br />
                                    </div>
                                    <div>
                                        <input required placeholder='type member name 6 ' type="text" name="name6" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 7 ' type="text" name="name7" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 8 ' type="text" name="name8" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 9 ' type="text" name="name9" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 10' type="text" name="name10" id="" />
                                        <br /><br />
                                    </div>
                                    <div>
                                        <input required placeholder='type member name 11' type="text" name="name11" id="" />
                                        <br /><br />
                                    </div>
                                </div>
                            }
                            {members == 12 &&
                                <div className="memberManagement">
                                    <div>
                                        <input required placeholder='type member name 1 ' type="text" name="name1" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 2 ' type="text" name="name2" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 3 ' type="text" name="name3" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 4 ' type="text" name="name4" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 5 ' type="text" name="name5" id="" />
                                        <br /><br />
                                    </div>
                                    <div>
                                        <input required placeholder='type member name 6 ' type="text" name="name6" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 7 ' type="text" name="name7" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 8 ' type="text" name="name8" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 9 ' type="text" name="name9" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 10' type="text" name="name10" id="" />
                                        <br /><br />
                                    </div>
                                    <div>
                                        <input required placeholder='type member name 11' type="text" name="name11" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 12' type="text" name="name12" id="" />
                                        <br /><br />
                                    </div>
                                </div>
                            }
                            {members == 13 &&
                                <div className="memberManagement">
                                    <div>
                                        <input required placeholder='type member name 1 ' type="text" name="name1" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 2 ' type="text" name="name2" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 3 ' type="text" name="name3" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 4 ' type="text" name="name4" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 5 ' type="text" name="name5" id="" />
                                        <br /><br />
                                    </div>
                                    <div>
                                        <input required placeholder='type member name 6 ' type="text" name="name6" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 7 ' type="text" name="name7" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 8 ' type="text" name="name8" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 9 ' type="text" name="name9" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 10' type="text" name="name10" id="" />
                                        <br /><br />
                                    </div>
                                    <div>
                                        <input required placeholder='type member name 11' type="text" name="name11" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 12' type="text" name="name12" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 13' type="text" name="name13" id="" />
                                        <br /><br />
                                    </div>
                                </div>
                            }
                            {members == 14 &&
                                <div className="memberManagement">
                                    <div>
                                        <input required placeholder='type member name 1 ' type="text" name="name1" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 2 ' type="text" name="name2" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 3 ' type="text" name="name3" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 4 ' type="text" name="name4" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 5 ' type="text" name="name5" id="" />
                                        <br /><br />
                                    </div>
                                    <div>
                                        <input required placeholder='type member name 6 ' type="text" name="name6" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 7 ' type="text" name="name7" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 8 ' type="text" name="name8" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 9 ' type="text" name="name9" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 10' type="text" name="name10" id="" />
                                        <br /><br />
                                    </div>
                                    <div>
                                        <input required placeholder='type member name 11' type="text" name="name11" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 12' type="text" name="name12" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 13' type="text" name="name13" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 14' type="text" name="name14" id="" />
                                        <br /><br />
                                    </div>
                                </div>
                            }
                            {members == 15 &&
                                <div className="memberManagement">
                                    <div>
                                        <input required placeholder='type member name 1 ' type="text" name="name1" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 2 ' type="text" name="name2" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 3 ' type="text" name="name3" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 4 ' type="text" name="name4" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 5 ' type="text" name="name5" id="" />
                                        <br /><br />
                                    </div>
                                    <div>
                                        <input required placeholder='type member name 6 ' type="text" name="name6" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 7 ' type="text" name="name7" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 8 ' type="text" name="name8" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 9 ' type="text" name="name9" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 10' type="text" name="name10" id="" />
                                        <br /><br />
                                    </div>
                                    <div>
                                        <input required placeholder='type member name 11' type="text" name="name11" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 12' type="text" name="name12" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 13' type="text" name="name13" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 14' type="text" name="name14" id="" />
                                        <br /><br />
                                        <input required placeholder='type member name 15' type="text" name="name15" id="" />
                                        <br /><br />
                                    </div>
                                </div>
                            }
                        </div>
                        <br />
                        <hr />
                        <br />
                        <div className='checkoutFormBtn'>
                            <input required className='btn btn-primary' type="submit" value="NEXT" />
                        </div>
                    </form>

                </section>
            </div>
            <br />
        </div>
    );
};

export default CheckOut;