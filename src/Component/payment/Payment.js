import React from 'react';
import './Payment.css';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
    const navigate = useNavigate()
    return (
        <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '65%', height: '500px', boxShadow: '0px 0px 25px 0px lightGray', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div>
                    <i style={{ fontSize: '90px' }} className="uil uil-check-circle"></i>
                    <p className='fw-bold fs-3'>SUCCESS</p>
                    <button onClick={() => navigate('/addToCart')} className='btn btn-success'>BACK</button>
                </div>
            </div>
        </div>
    );
};

export default Payment;