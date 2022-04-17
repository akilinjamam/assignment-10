import React, { useEffect, useState } from 'react';
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

            <h2 className='text-primary mt-5'>Local Spots {localSpotsSliced.length} </h2>

            <div className='local-spots'>
                {
                    localSpotsSliced.map(localSpot => <LocalSpot
                        key={localSpot.id}
                        localSpot={localSpot}
                    ></LocalSpot>)
                }
            </div>

        </div>
    );
};

export default LocalSpots;