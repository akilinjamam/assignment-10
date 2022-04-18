import React, { useEffect, useState } from 'react';
import GlobalSpot from '../GlobalSpot/GlobalSpot';

const VisitingGlobalSpot = () => {
    const [globalSpots, setGlobal] = useState([]);

    useEffect(() => {
        fetch('globalService.json')
            .then(res => res.json())
            .then(data => setGlobal(data))
    }, [])
    return (
        <div>


            <div className='local-spots'>
                {
                    globalSpots.map(globalSpot => <GlobalSpot
                        key={globalSpot.id}
                        globalSpot={globalSpot}
                    ></GlobalSpot>)
                }
            </div>

        </div>
    );
};

export default VisitingGlobalSpot;