import React, { useContext } from 'react';
import jsPDF from 'jspdf';
import './PdfForm.css';
import noteContext from '../../Context/noteContext';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';

const PdfForm = () => {
    const user = useAuthState(auth);
    console.log(user)
    const state = useContext(noteContext);
    // const navigate = useNavigate();
    const nameData = state.nameData;
    const formPersonal = state.formPersonal;
    const formPersonalSliced = formPersonal.slice((formPersonal.length - 1), (formPersonal.length));
    const nameDataSliced = nameData.slice((nameData.length - 1), (nameData.length));

    const findFormData = formPersonalSliced?.find(f => {
        return f
    });

    console.log(findFormData);

    // const handlePdf = () => {
    //     const doc = jsPDF('p', 'pt', 'a4');
    //     doc.html(document.querySelector('#content'), {
    //         callback: function (pdf) {
    //             const pageCount = doc.internal.getNumberOfPages();
    //             pdf.deletePage(pageCount);
    //             pdf.save('registrationForm.pdf')
    //         }
    //     })
    // }

    const handlePayment = async () => {

        const paymentData = {
            total_amount: findFormData.tourPrice,
            currency: 'BDT',
            cus_name: findFormData.name,
            cus_email: user?.[0]?.email,
            cus_add1: findFormData.address,
            cus_city: 'chittagong',
            cus_postcode: '4000',
            cus_country: 'Bangladesh',
            cus_phone: findFormData.mobileNum,
            tourName: findFormData?.tourName
        }

        await axios.post('http://localhost:5000/api/v1/payment/create-payment', paymentData)
            .then(res => {
                window.location.replace(res?.data?.url);
            })
            .catch(error => console.log(error))




    }


    return (
        <div className='pdfFormContainer'>
            <div>
                <br /><br /><br />
                <div className='pdfFormMain' id='content' >
                    <section className=''>
                        <h5>TRAVELBEA</h5>
                        <hr />
                        {
                            formPersonalSliced?.map(f => {
                                return (
                                    <div>
                                        <div className="pdfFormPersonalInfo">
                                            <div className="pdfFormPersonalInfoPart1">
                                                <p>Your Name : <span>{f.name}</span></p>
                                                <p>Father's Name : <span>{f.fatherName}</span></p>
                                                <p>Mother's Name : <span>{f.motherName}</span></p>
                                                <p>Address : <span>{f.address}</span></p>


                                            </div>
                                            <div className="pdfFormPersonalInfoPart2">
                                                <p>Nid No : <span>{f.nidNum}</span></p>
                                                <p>Mobile No : <span>{f.mobileNum}</span></p>
                                                <p>Gender Id : <span>{f.genderId}</span></p>
                                                <p>Payment Method : <span>{f.paymentMethod}</span></p>
                                            </div>

                                        </div>
                                        <hr />
                                        <div>
                                            <div className="pdfFormTourInfo">
                                                <div className="pdfFormTourInfoPart1">
                                                    <p>Tour Name : <span>{f.tourName}</span></p>
                                                    <p>Tour Type : <span>{f.tourType}</span></p>
                                                    <p>Tour Duration : <span>{f.tourDuration}</span></p>
                                                    <p>Total Member : <span>{f.member}</span></p>
                                                    <p>Tour Date : <span>{f.tourDate}</span></p>

                                                </div>
                                                <div className="pdfFormTourInfoPart2">
                                                    <p>Per Person Price : <span>{f.tourPrice}</span></p>
                                                    <p>Total Price : <span>{(f.tourPrice * f.member)}</span></p>
                                                    <p>30% for Booking : <span>{((f.tourPrice * f.member) * 30) / 100}</span></p>
                                                    <p>70% Payable : <span>{((f.tourPrice * f.member) * 70) / 100}</span></p>

                                                </div>
                                            </div>
                                            <p style={{ fontStyle: 'italic', fontWeight: 'bold', textAlign: 'left', fontSize: '12px', color: 'red' }}>70% payable amount will be collected at Tour Date</p>
                                            <hr />
                                            <div className="pdfFormAllMembersName">
                                                {
                                                    nameDataSliced.map(n =>
                                                        <div className='pdfFormMembers'>
                                                            <p>All-Members Name :</p>
                                                            <div>
                                                                {n.member1 && <span>{n.member1} |</span>}
                                                                {n.member2 && <span> {n.member2} |</span>}
                                                                {n.member3 && <span> {n.member3} |</span>}
                                                                {n.member4 && <span> {n.member4} |</span>}
                                                                {n.member5 && <span> {n.member5} |</span>}
                                                                {n.member6 && <span> {n.member6} |</span>}
                                                                {n.member7 && <span> {n.member7} |</span>}
                                                                {n.member8 && <span> {n.member8} |</span>}
                                                                {n.member9 && <span> {n.member9} |</span>}
                                                                {n.member10 && <span> {n.member10} |</span>}
                                                                {n.member11 && <span> {n.member11} |</span>}
                                                                {n.member12 && <span> {n.member12} |</span>}
                                                                {n.member13 && <span> {n.member13} |</span>}
                                                                {n.member14 && <span> {n.member14} |</span>}
                                                                {n.member15 && <span> {n.member15} |</span>}
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </section>
                </div>
                <br />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    {/* <button onClick={handlePdf} className='btn btn-primary'>DOWNLOAD PDF</button> */}
                    <button onClick={handlePayment} className='btn btn-primary'>PROCCED</button>
                </div>
            </div>

        </div>
    );
};

export default PdfForm;
