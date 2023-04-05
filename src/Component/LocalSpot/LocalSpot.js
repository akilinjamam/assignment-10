import React from 'react';


import { useNavigate } from 'react-router-dom';
import './LocalSpot.css'
import { useContext } from 'react';
import noteContext from '../../Context/noteContext';



const LocalSpot = ({ localSpot }) => {

    const state = useContext(noteContext);

    const navigate = useNavigate()
    const { name, img, _id, price, stayLong, tourArea } = localSpot

    const handleBook = (id, tourAreas) => {
        navigate(`/spotDetail/${id}`)
        state.setTourArea(tourAreas);
        console.log(id, tourArea)

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

                    <button onClick={() => handleBook(_id, tourArea)} style={{ background: 'crimson', color: 'white', width: '100%' }} className="btn  d-block ">Visit Details</button>
                </div>
            </div>
        </div>

    );
};

export default LocalSpot;



