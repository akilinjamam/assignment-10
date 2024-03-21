import React from 'react';
import logo from '../../logo-img/fav-for-assignment-10.png';
import './Footer.css';

const Footer = () => {

    const today = new Date()
    const year = today.getFullYear()

    return (
        <div className='bg-dark footer_main bottom_flex'>
            <div className="footer_container">
                <div class="footer_grid_container">
                    <div class="footer_column1">
                        <div class="footer_column1_grid_container">
                            <div class="sub_column1">
                                <h5>Solutions</h5>
                                <br />
                                <p>Marketing</p>
                                <p>Analytics</p>
                                <p>Commerce</p>
                                <p>Insights</p>
                            </div>
                            <div class="sub_column2">

                                <h5>Supports</h5>
                                <br />
                                <p>Pricing</p>
                                <p>Documentation</p>
                                <p>Guides</p>
                                <p>API status</p>
                            </div>
                            <div class="sub_column3">

                                <h5>Company</h5>
                                <br />
                                <p>About</p>
                                <p>Blog</p>
                                <p>Jobs</p>
                                <p>Press</p>
                            </div>
                            <div class="sub_column4">

                                <h5>Company</h5>
                                <br />
                                <p>About</p>
                                <p>Blog</p>
                                <p>Jobs</p>
                                <p>Press</p>
                            </div>
                        </div>

                    </div>
                    <div class="footer_column2">
                        <img style={{ height: '70px', width: '70px', display: 'block' }} src={logo} alt="" />
                        <br />
                        <p>Subscribe to our newsletter</p>
                        <br />
                        <p>The latest news, articles, and resources, sent to your inbox weekly.</p>
                        <div className='footer_input'>
                            <input type="text" />
                            <button className='btn btn-primary'>Subscribe</button>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="footer_bottom">
                    <div className='footer_bottom_column1'>
                        <p>© {year} Travelbea, Inc. All rights reserved.</p>
                    </div>
                    <div className='footer_bottom_column2'>
                        <div className='footer_bottom_column2_icons'>
                            <i class="uil uil-facebook-f"></i>
                            <i class="uil uil-instagram"></i>
                            <i class="uil uil-github"></i>
                            <i class="uil uil-youtube"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;


