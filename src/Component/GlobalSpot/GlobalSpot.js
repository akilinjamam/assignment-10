import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './GlobalSpot.css'

const GlobalSpot = ({ globalSpot }) => {
    const navigate = useNavigate()
    const { img, name, id, breakfastHifi, stayLong, lunchNormal, dinnerNormal, busac, price } = globalSpot

    const handleBook = (id, name) => {
        navigate(`/${id}`)

        console.log(id, name)

    }
    return (
        <div className='globalSpotMain'>
            <div className='localSpotImgBorder'>
                <img className='localSpotImg' src={img} alt="" />
                <br />
                <div className='localSpotDetail'>
                    <h4>{name}</h4>

                    <h5 style={{ color: 'green' }}>Benefits:</h5>

                    <h6 style={{ color: 'blue' }}>{stayLong}</h6>

                    <p style={{ fontWeight: 'bold' }} className='text-danger '>Price {price}/person</p>

                    <a onClick={() => handleBook(id, name)} style={{ background: 'crimson', color: 'white', }} className="btn  d-block ">Visit Details</a>
                </div>
            </div>
        </div>
    );
};

export default GlobalSpot;