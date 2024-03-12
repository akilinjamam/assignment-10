import React from 'react';
import trans from './Transection.module.css';
import { useQuery } from 'react-query';
import fetchGetPaymentData from '../../fetchData/fetchPaymentData';
import fetchUpdatePaymentData from '../../fetchData/fetchUpdatePaymentData';

const Transection = () => {
    const { data: getTransection, refetch } = useQuery("getTransection", () => fetchGetPaymentData());
    const allTransections = getTransection?.data?.result;

    const filteredTransection = allTransections?.filter(f => {
        return f?.isPaid === true;
    })

    const handleUpdatePayment = async (id) => {

        const findPayment = allTransections?.find(f => {
            return f?._id === id
        });


        if (findPayment?.isFullyPaid === true) {
            await fetchUpdatePaymentData(id, { isFullyPaid: false }, refetch).then(res => console.log(res))
        } else {
            await fetchUpdatePaymentData(id, { isFullyPaid: true }, refetch).then(res => console.log(res))
        }

    }

    return (
        <div className={trans.main} >
            <div className={trans.transectionContainer}>
                <p style={{ textAlign: 'left', fontWeight: 'bold' }}>ALL TRANSECTIONS :</p>
                <hr />
                <table className={trans.transTable}>
                    <tr>
                        <th>Order No</th>
                        <th>Customer</th>
                        <th>Tour</th>
                        <th>Type</th>
                        <th>Member</th>
                        <th>Transection No</th>
                        <th>Tour Date</th>
                        <th>30% Booking</th>
                        <th>70% Payment</th>
                        <th>Total/p</th>
                        <th>Total</th>
                    </tr>
                    {
                        filteredTransection?.slice()?.reverse()?.map((transData) => {
                            return (
                                <tr>
                                    <td>{transData?.orderNumber}</td>
                                    <td>{transData?.cus_name}</td>
                                    <td>{transData?.tourName}</td>
                                    <td>{transData?.tourType}</td>
                                    <td>{transData?.member}</td>
                                    <td>{transData?.tran_id}</td>
                                    <td>{transData?.tourDate}</td>
                                    <td>{((transData?.total_amount * 30) / 100) * transData?.member}</td>
                                    <td>{((transData?.total_amount * 70) / 100) * transData?.member}
                                        {transData?.isFullyPaid
                                            ?
                                            <span
                                                onClick={() => handleUpdatePayment(transData?._id)}
                                                style={{ fontStyle: 'italic', cursor: 'pointer', color: 'green', marginLeft: '2px' }}
                                            >
                                                paid
                                            </span>
                                            :
                                            <span
                                                onClick={() => handleUpdatePayment(transData?._id)}
                                                style={{ fontStyle: 'italic', cursor: 'pointer', color: 'red', marginLeft: '2px' }}
                                            >
                                                unpaid
                                            </span>}
                                    </td>
                                    <td>{transData?.total_amount}</td>
                                    <td>{transData?.total_amount * transData?.member}</td>

                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </div>
    );
};

export default Transection;