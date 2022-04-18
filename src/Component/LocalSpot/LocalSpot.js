import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const LocalSpot = ({ localSpot }) => {
    const navigate = useNavigate()
    const { name, img, id, breakfastHifi } = localSpot

    const handleBook = (id, name) => {
        navigate(`spotdetail/ ${id}/ ${name}`)
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
                    <a onClick={() => handleBook(id, name)} href="#" className="btn btn-primary">BOOK: {name} </a>
                </Card.Body>
            </Card>
        </div>
    );
};

export default LocalSpot;