import React, { useEffect, useState } from 'react';
import LocalSpot from '../LocalSpot/LocalSpot';

const VisitingSpots = () => {

    const [localSpots, setLocal] = useState([]);

    useEffect(() => {
        fetch('localService.json')
            .then(res => res.json())
            .then(data => setLocal(data))
    }, [])
    return (
        <div>


            <div className='local-spots'>
                {
                    localSpots.map(localSpot => <LocalSpot
                        key={localSpot.id}
                        localSpot={localSpot}
                    ></LocalSpot>)
                }
            </div>

        </div>
    );
};

export default VisitingSpots;