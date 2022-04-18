import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const GlobalSpot = ({ globalSpot }) => {
    const navigate = useNavigate()
    const { img, name, id, breakfastHifi } = globalSpot

    const handleBook = (id, name) => {
        navigate(`/spotdetail/ ${id}/ ${name}`)

        console.log(id, name)

    }
    return (
        <div style={{ margin: 'auto' }} >
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>

                        {breakfastHifi}
                    </Card.Text>
                    <a onClick={() => handleBook(id, name)} className="btn btn-primary d-block ">BOOK: {name} </a>
                </Card.Body>
            </Card>
        </div>
    );
};

export default GlobalSpot;