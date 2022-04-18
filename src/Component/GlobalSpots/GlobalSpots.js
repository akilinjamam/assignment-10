import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GlobalSpot from '../GlobalSpot/GlobalSpot';

const GlobalSpots = () => {
    const [global, setGlobal] = useState([])
    const globalSliced = global.slice(0, 3)
    useEffect(() => {
        fetch('globalService.json')
            .then(res => res.json())
            .then(data => setGlobal(data))
    }, [])

    return (
        <div style={{ margin: 'auto', width: '80%' }}>
            <h2 className='text-center text-primary mt-5'> Service (Global) {globalSliced.length} </h2>
            <br />
            <br />

            <div className='local-spots'>
                {
                    globalSliced.map(globalSpot => <GlobalSpot
                        key={globalSpot.id}
                        globalSpot={globalSpot}
                    ></GlobalSpot>)
                }
            </div>
            <br />
            <Link to='/globalvisiting' className='d-block mx-auto btn btn-primary w-25' >Visit More Spots</Link>
            <br />
            <br />
        </div>
    );
};

export default GlobalSpots;