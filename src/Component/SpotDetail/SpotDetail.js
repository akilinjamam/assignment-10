import React from 'react';
import { Link, useParams } from 'react-router-dom';

const SpotDetail = () => {

    const { spotdetailId, nameId } = useParams()


    return (
        <div>
            <h2 className='text-center text-secondary'> {nameId} </h2>
            <br />

            <Link to='/checkout' className='d-block mx-auto btn btn-primary w-25' >Procced to Checkout</Link>
        </div>
    );
};

export default SpotDetail;