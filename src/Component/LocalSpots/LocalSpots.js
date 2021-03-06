import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import LocalSpot from '../LocalSpot/LocalSpot';
import './LocalSpots.css'

const LocalSpots = () => {
    const [localSpots, setLocal] = useState([]);
    const localSpotsSliced = localSpots.slice(0, 3)
    useEffect(() => {
        fetch('localService.json')
            .then(res => res.json())
            .then(data => setLocal(data))
    }, [])
    return (
        <div style={{ margin: 'auto', width: '80%' }}>


            <h2 className='text-center text-primary mt-5'>Service (Local) {localSpotsSliced.length} </h2>
            <br />

            <div className='local-spots'>
                {
                    localSpotsSliced.map(localSpot => <LocalSpot
                        key={localSpot.id}
                        localSpot={localSpot}
                    ></LocalSpot>)
                }


            </div>
            <br />
            <Link to='/visitingspot' className='d-block mx-auto btn btn-primary w-25' >Visit More Spots</Link>
            <br />
            <br />
            <hr />


        </div>
    );
};

export default LocalSpots;