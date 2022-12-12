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
                        {counter === 0 && <h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: 'crimson' }}>Cox Bazar</h3>}
                        {counter === 1 && <h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: 'blue' }}>Cox Bazar</h3>}
                        {counter === 2 && <h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: 'green' }}>Cox Bazar</h3>}
                        {counter === 3 && <h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: 'red' }}>Cox Bazar</h3>}
                        {counter === 4 && <h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: 'pink' }}>Cox Bazar</h3>}
                        {counter === 5 && <h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: 'orange' }}>Cox Bazar</h3>}
                        {counter === 6 && <h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: 'skyBlue' }}>Cox Bazar</h3>}
                        {counter === 7 && <h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: 'red' }}>Cox Bazar</h3>}
                        {counter === 8 && <h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: 'yellow' }}>Cox Bazar</h3>}
                        {counter === 9 && <h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: 'goldenRod' }}>Cox Bazar</h3>}
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
                        {counter === 0 && <h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: 'blue' }}>sajek</h3>}
                        {counter === 1 && <h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: 'blue' }}>sajek</h3>}
                        {counter === 2 && <h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: 'green' }}>sajek</h3>}
                        {counter === 3 && <h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: 'red' }}>sajek</h3>}
                        {counter === 4 && <h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: 'pink' }}>sajek</h3>}
                        {counter === 5 && <h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: 'orange' }}>sajek</h3>}
                        {counter === 6 && <h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: 'skyBlue' }}>sajek</h3>}
                        {counter === 7 && <h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: 'red' }}>sajek</h3>}
                        {counter === 8 && <h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: 'yellow' }}>sajek</h3>}
                        {counter === 9 && <h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: 'goldenRod' }}>sajek</h3>}
                        <p>Enjoy 5 night 6 days</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: '500px' }}
                        className="d-block w-100"
                        src="https://source.unsplash.com/1600x900/?maountain"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        {counter === 0 && <h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: 'crimson' }}>Bandarban</h3>}
                        {counter === 1 && <h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: 'blue' }}>Bandarban</h3>}
                        {counter === 2 && <h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: 'green' }}>Bandarban</h3>}
                        {counter === 3 && <h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: 'red' }}>Bandarban</h3>}
                        {counter === 4 && <h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: 'pink' }}>Bandarban</h3>}
                        {counter === 5 && <h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: 'orange' }}>Bandarban</h3>}
                        {counter === 6 && <h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: 'skyBlue' }}>Bandarban</h3>}
                        {counter === 7 && <h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: 'red' }}>Bandarban</h3>}
                        {counter === 8 && <h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: 'yellow' }}>Bandarban</h3>}
                        {counter === 9 && <h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: 'goldenRod' }}>Bandarban</h3>}
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
                        {counter === 0 && <h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: 'crimson' }}>Tangoar Haor</h3>}
                        {counter === 1 && <h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: 'blue' }}>Tangoar Haor</h3>}
                        {counter === 2 && <h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: 'green' }}>Tangoar Haor</h3>}
                        {counter === 3 && <h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: 'red' }}>Tangoar Haor</h3>}
                        {counter === 4 && <h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: 'pink' }}>Tangoar Haor</h3>}
                        {counter === 5 && <h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: 'orange' }}>Tangoar Haor</h3>}
                        {counter === 6 && <h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: 'skyBlue' }}>Tangoar Haor</h3>}
                        {counter === 7 && <h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: 'red' }}>Tangoar Haor</h3>}
                        {counter === 8 && <h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: 'yellow' }}>Tangoar Haor</h3>}
                        {counter === 9 && <h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: 'goldenRod' }}>Tangoar Haor</h3>}
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
                        {counter === 0 && <h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: 'crimson' }}>Rangamati</h3>}
                        {counter === 1 && <h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: 'blue' }}>Rangamati</h3>}
                        {counter === 2 && <h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: 'green' }}>Rangamati</h3>}
                        {counter === 3 && <h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: 'red' }}>Rangamati</h3>}
                        {counter === 4 && <h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: 'pink' }}>Rangamati</h3>}
                        {counter === 5 && <h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: 'orange' }}>Rangamati</h3>}
                        {counter === 6 && <h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: 'skyBlue' }}>Rangamati</h3>}
                        {counter === 7 && <h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: 'red' }}>Rangamati</h3>}
                        {counter === 8 && <h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: 'yellow' }}>Rangamati</h3>}
                        {counter === 9 && <h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: 'goldenRod' }}>Rangamati</h3>}
                        <p>Enjoy 3 days 4 night</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;