import React from 'react'
import notFound from '../../logo-img/404.jpg'

const NotFound = () => {
    return (
        <div>
            <img style={{ width: '25%' }} className=' mx-auto d-block' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;