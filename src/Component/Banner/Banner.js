import React from 'react';
import { Carousel } from 'react-bootstrap';
import bannar1 from '../../bannar-img/the-innani-beach.jpg'
import bannar2 from '../../bannar-img/the-sajek-valley.jpg'
import bannar3 from '../../bannar-img/the-bandarban.jpg'
import bannar4 from '../../bannar-img/the-tangoar-haor.jpg'
import bannar5 from '../../bannar-img/the-rangamati.jpg'


const Banner = () => {
    // Banner Section.....
    return (
        <div style={{ width: '90%', margin: 'auto' }}>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bannar1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Cox Bazar</h3>
                        <p> Enjoy 4 night 5 days</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bannar2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Sajek</h3>
                        <p>Enjoy 5 night 6 days</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bannar3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Bandarban</h3>
                        <p>Enjoy 2 night 3 days</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bannar4}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Tangoar Haor</h3>
                        <p>Enjoy 3 night 4 day</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bannar5}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Rangamati</h3>
                        <p>Enjoy 3 days 4 night</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;