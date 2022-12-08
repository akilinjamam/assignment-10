import React from 'react';
import './Background.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Parallax } from 'react-parallax';
import winter from '../../background-image/ricardo-gomez-angel-cp8hPQ8cjG0-unsplash.jpg'
// ..
AOS.init();

const Background = () => {
    return (
        <div className='mainBackground'>
            <div className='background'>

                <div className='input'>
                    <div>
                        <input placeholder='where to go' type="text" name="" id="" />
                    </div>
                    <div>
                        <input placeholder='month' type="datetime" name="" id="" />
                    </div>
                    <div>
                        <input placeholder=' Travel Type' type="text" name="" id="" />
                    </div>

                    <button className='button'>Find Now</button>
                </div>

            </div>

            <div >
                <p data-aos="fade-right" data-aos-duration="1000" className='go'>GO!</p>
            </div>


            <div data-aos="fade-right" data-aos-duration="1000" className='textBackground'>
                <p> <span>Amazing </span> Tour And Fun <br /> Advantures <span> Waiting for</span> <br /> <span> You</span> </p>
            </div>

            <Parallax strength={500} bgImage={winter} >
                <div style={{ padding: '20px' }} data-aos="zoom-in" data-aos-duration="1000" className='detailBackground'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa cum sociis Theme natoque.
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa cum sociis Theme natoque.
                </div>
            </Parallax>
        </div>
    );
};

export default Background;