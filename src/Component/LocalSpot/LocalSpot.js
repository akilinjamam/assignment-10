import React from 'react';


import { useNavigate } from 'react-router-dom';
import './LocalSpot.css'


const LocalSpot = ({ localSpot }) => {


    const navigate = useNavigate()
    const { name, img, id, breakfastHifi, price, lunchNormal, dinnerNormal, stayLong, busac } = localSpot

    const handleBook = (id, name) => {
        navigate(`/spotdetail/ ${id}/ ${name}`)

        console.log(id, name)

    }
    return (

        <div className='lacalSpotMain'>
            <div className='localSpotImgBorder'>
                <img className='localSpotImg' src={img} alt="" />
                <br />
                <div className='localSpotDetail'>
                    <h3>{name}</h3>

                    <h5 style={{ color: 'green' }}>Benefits:</h5>

                    <h6 style={{ color: 'blue' }}>{stayLong}</h6>
                    <h6>Break Fast :  {breakfastHifi}</h6>
                    <h6>Lunch: {lunchNormal} </h6>
                    <h6>Dinner: {dinnerNormal} </h6>
                    <h6>Travel with: {busac} Bus </h6>
                    <p style={{ fontWeight: 'bold' }} className='text-danger '>Price {price}/person</p>

                    <a onClick={() => handleBook(id, name)} style={{ background: 'crimson', color: 'white', }} className="btn  d-block ">Book Now</a>
                </div>
            </div>
        </div>

    );
};

export default LocalSpot;



/* 

 <div style={{ margin: 'auto' }} >
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='text-center text-primary'>{name}</Card.Title>
                    <Card.Text>
                        <h5 style={{ color: 'green' }}>Benefits:</h5>

                        <h6 style={{ color: 'blue' }}>{stayLong}</h6>
                        <h6>Break Fast :  {breakfastHifi}</h6>
                        <h6>Lunch: {lunchNormal} </h6>
                        <h6>Dinner: {dinnerNormal} </h6>
                        <h6>Travel with: {busac} Bus </h6>
                        <p style={{ fontWeight: 'bold' }} className='text-danger text-center'>Price {price}/person</p>
                    </Card.Text>
                    <a onClick={() => handleBook(id, name)} className="btn btn-primary d-block ">BOOK: {name} </a>
                </Card.Body>
            </Card>
        </div>

*/