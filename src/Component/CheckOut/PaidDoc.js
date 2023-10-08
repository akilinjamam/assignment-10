import React from 'react';
import '../PdfForm/PdfForm.css';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import fetchGetPaymentData from '../../fetchData/fetchPaymentData';

const PaidDoc = () => {
    const { cartId } = useParams();

    const { data: queryUserPaymentData } = useQuery("queryUserPaymentData", () => fetchGetPaymentData());

    const allPaymentData = queryUserPaymentData?.data?.result;

    const findPaymentDataByTourId = allPaymentData?.find(f => {
        return f?.tourId === cartId;
    })


    return (

        <div className='pdfFormContainer'>
            <div>
                <br /><br /><br />
                <div className='pdfFormMain' >
                    <section className=''>
                        <h5>TRAVELBEA</h5>
                        <hr />

                        <div>
                            <div className="pdfFormPersonalInfo">
                                <div className="pdfFormPersonalInfoPart1">
                                    <p>Your Name : <span>{findPaymentDataByTourId?.cus_name}</span></p>
                                    <p>Father's Name : <span>{findPaymentDataByTourId?.fatherName}</span></p>
                                    <p>Mother's Name : <span>{findPaymentDataByTourId?.motherName}</span></p>
                                    <p>Address : <span>{findPaymentDataByTourId?.cus_add1}</span></p>


                                </div>
                                <div className="pdfFormPersonalInfoPart2">
                                    <p>Nid No : <span>{findPaymentDataByTourId?.nidNum}</span></p>
                                    <p>Mobile No : <span>{findPaymentDataByTourId?.cus_phone}</span></p>
                                    <p>Gender Id : <span>{findPaymentDataByTourId?.genderId}</span></p>
                                    <p>Payment Method : <span>{findPaymentDataByTourId?.paymentMethod}</span></p>
                                </div>

                            </div>
                            <hr />
                            <div>
                                <div className="pdfFormTourInfo">
                                    <div className="pdfFormTourInfoPart1">
                                        <p>Tour Name : <span>{findPaymentDataByTourId?.tourName}</span></p>
                                        <p>Tour Type : <span>{findPaymentDataByTourId?.tourType}</span></p>
                                        <p>Tour Duration : <span>{findPaymentDataByTourId?.tourDuration}</span></p>
                                        <p>Total Member : <span>{findPaymentDataByTourId?.member}</span></p>
                                        <p>Tour Date : <span>{findPaymentDataByTourId?.tourDate}</span></p>

                                    </div>
                                    <div className="pdfFormTourInfoPart2">
                                        <p>Per Person Price : <span>{findPaymentDataByTourId?.total_amount}</span></p>
                                        <p>Total Price : <span>{(findPaymentDataByTourId?.total_amount * findPaymentDataByTourId?.member)}</span></p>
                                        <p>30% for Booking : <span>{((findPaymentDataByTourId?.total_amount * findPaymentDataByTourId?.member) * 30) / 100}</span></p>
                                        <p>70% Payable : <span>{((findPaymentDataByTourId?.total_amount * findPaymentDataByTourId?.member) * 70) / 100}</span></p>

                                    </div>
                                </div>
                                <p style={{ fontStyle: 'italic', fontWeight: 'bold', textAlign: 'left', fontSize: '12px', color: 'red' }}>70% payable amount will be collected at Tour Date</p>
                                <hr />
                                <div className="pdfFormAllMembersName">
                                    {
                                        findPaymentDataByTourId?.nameData?.map(n => {
                                            return (
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
                                        )
                                    }
                                </div>
                            </div>
                        </div>

                    </section>
                </div>
                <br />
                <div className='d-print-none' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <button onClick={() => window.print()} className='btn btn-primary'>DOWNLOAD PDF</button>
                </div>
            </div>

        </div>
    );
};

export default PaidDoc;