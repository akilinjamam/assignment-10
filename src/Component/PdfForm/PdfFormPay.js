import React from 'react';
import { Link } from 'react-router-dom';
import './PdfFormPay.css'

const PdfFormPay = () => {
    return (
        <div className='pdfFormPayContainer'>
            <div>
                ssl eCommerce
                <br /><br />
                <Link className='btn btn-primary' to='/pdfForm'>DOWNLOAD PDF</Link>
            </div>
        </div>
    );
};

export default PdfFormPay;