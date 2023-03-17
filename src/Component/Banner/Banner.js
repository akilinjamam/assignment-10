import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import bannar1 from '../../bannar-img/the-innani-beach.jpg'
import bannar2 from '../../bannar-img/the-sajek-valley.jpg'
import bannar3 from '../../bannar-img/the-bandarban.jpg'
import bannar4 from '../../bannar-img/the-tangoar-haor.jpg'
import bannar5 from '../../bannar-img/the-rangamati.jpg'
import './Banner.css'

const Banner = () => {

    const [counter, setCounter] = useState(0);
    const [dynamicColor, setDynamicColor] = useState('crimson');
    console.log(dynamicColor);

    useEffect(() => {
        if (counter === 0) {
            setDynamicColor('blue')
        } else if (counter === 1) {
            setDynamicColor('green')
        } else if (counter === 2) {
            setDynamicColor('yellow')
        } else if (counter === 3) {
            setDynamicColor('red')
        } else if (counter === 4) {
            setDynamicColor('pink')
        } else if (counter === 5) {
            setDynamicColor('goldenRod')
        } else if (counter === 6) {
            setDynamicColor('skyBlue')
        } else if (counter === 7) {
            setDynamicColor('orange')
        } else if (counter === 8) {
            setDynamicColor('yellowgreen')
        } else if (counter === 9) {
            setDynamicColor('crimson')
        }
    }, [counter, setDynamicColor])


    if (counter === 10) {
        setCounter(0)
    }



    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => prevCounter + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // Banner Section.....
    return (
        <div style={{ width: '100%', margin: 'auto' }}>
            <Carousel>
                <Carousel.Item>
                    <img style={{ height: '500px' }}
                        className="d-block w-100"
                        src="https://source.unsplash.com/1600x900/?coxbazar"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        {<h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: `${dynamicColor}`, transition: '1s ease-in-out' }}>Cox Bazar</h3>}

                        <p> Enjoy 4 night 5 days</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: '500px' }}
                        className="d-block w-100"
                        src="https://source.unsplash.com/1600x900/?sajek valley"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        {<h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: `${dynamicColor}`, transition: '1s ease-in-out' }}>sajek</h3>}

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: '500px' }}
                        className="d-block w-100"
                        src="https://source.unsplash.com/1600x900/?maountain"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        {<h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: `${dynamicColor}`, transition: '1s ease-in-out' }}>Bandarban</h3>}

                        <p>Enjoy 2 night 3 days</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: '500px' }}
                        className="d-block w-100  "
                        src="https://source.unsplash.com/1600x900/?tangoar haor"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        {<h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: `${dynamicColor}`, transition: '1s ease-in-out' }}>Tangoar Haor</h3>}

                        <p>Enjoy 3 night 4 day</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: '500px' }}
                        className="d-block w-100"
                        src="https://source.unsplash.com/1600x900/?rangamati"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        {<h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: `${dynamicColor}`, transition: '1s ease-in-out' }}>Rangamati</h3>}

                        <p>Enjoy 3 days 4 night</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;