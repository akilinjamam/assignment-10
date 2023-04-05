import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './GlobalSpot.css'
import noteContext from '../../Context/noteContext';

const GlobalSpot = ({ globalSpot }) => {

    const state = useContext(noteContext)
    const navigate = useNavigate()
    const { img, name, _id, stayLong, price, tourArea } = globalSpot

    const handleBook = (id, tourArea) => {
        navigate(`/spotDetail/${id}`)
        state.setTourArea(tourArea)
        console.log(id, tourArea)

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

                    <button onClick={() => handleBook(_id, tourArea)} style={{ background: 'crimson', color: 'white', width: '100%' }} className="btn  d-block ">Visit Details</button>
                </div>
            </div>
        </div>
    );
};

export default GlobalSpot;