import React from 'react';
import { Spinner } from 'react-bootstrap';

const LoadingBlog = () => {
    return (
        <div style={{ width: '100%', height: '100vh' }} className='w-100 d-flex justify-content-center align-items-center'>
            <Spinner animation="border" variant="primary" />
        </div>
    );
};

export default LoadingBlog;