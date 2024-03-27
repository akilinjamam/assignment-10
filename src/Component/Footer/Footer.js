import React from 'react';
import logo from '../../logo-img/fav-for-assignment-10.png';
import './Footer.css';
import useFooter from './useFooter';

const Footer = () => {

    const [footerOptions, year] = useFooter()

    return (
        <div className='bg-dark footer_main bottom_flex'>
            <div className="footer_container">
                <div class="footer_grid_container">
                    <div class="footer_column1">
                        <div class="footer_column1_grid_container">
                            {
                                footerOptions.map((option, index) => {
                                    return (
                                        <div className={`sub_column${index + 1}`}>
                                            <h5>{option.title}</h5>
                                            <br />
                                            {
                                                option?.topic?.map(option_topic => {
                                                    return (
                                                        <p>{option_topic}</p>
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                })
                            }
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


