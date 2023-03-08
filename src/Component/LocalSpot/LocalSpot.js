import React from 'react';


import { useNavigate } from 'react-router-dom';
import './LocalSpot.css'


const LocalSpot = ({ localSpot }) => {


    const navigate = useNavigate()
    const { name, img, id, breakfastHifi, price, lunchNormal, dinnerNormal, stayLong, busac } = localSpot

    const handleBook = (id, name) => {
        navigate(`/${id}`)

        console.log(id, name)

    }
    return (

        <div className='lacalSpotMain'>
            <div className='localSpotImgBorder'>
                <img className='localSpotImg' src={img} alt="" />
                <br />
                <div className='localSpotDetail'>
                    <h4>{name}</h4>

                    <h5 style={{ color: 'green' }}>Benefits:</h5>

                    <h6 style={{ color: 'blue' }}>{stayLong}</h6>

                    <p style={{ fontWeight: 'bold' }} className='text-danger '>Price {price}/person</p>

                    <button onClick={() => handleBook(id, name)} style={{ background: 'crimson', color: 'white', width: '100%' }} className="btn  d-block ">Visit Details</button>
                </div>
            </div>
        </div>

    );
};

export default LocalSpot;



