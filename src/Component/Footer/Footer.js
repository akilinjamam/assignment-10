import React from 'react';
import logo from '../../logo-img/fav-for-assignment-10.png'

const Footer = () => {

    const today = new Date()
    const year = today.getFullYear()

    return (
        <div style={{ height: '200px' }} className='bg-dark'>
            <br />
            <img style={{ height: '70px', width: '70px', display: 'block', margin: 'auto', }} src={logo} alt="" />
            <p style={{ paddingTop: '5px' }} className='text-white text-center '> &copy; All Right reserved by  Travelbea </p>
            <p className='text-white text-center'> {year} </p>
        </div>
    );
};

export default Footer;