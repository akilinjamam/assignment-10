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
import { useQuery } from 'react-query';
import fetchHomeData from '../../fetchData/fetchHomeData';
import fetchGlobalData from '../../fetchData/fetchGlobalData';

const Banner = () => {

    const [counter, setCounter] = useState(0);
    const [bannerCounter, setBannerCounter] = useState(1);

    const [dynamicColor, setDynamicColor] = useState('crimson');

    const { data: bannerHome } = useQuery("bannerHome", () => fetchHomeData());
    const bannerHomeData = bannerHome?.data?.result


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
    }, [counter, setDynamicColor]);


    if (counter === 10) {
        setCounter(0)
    }

    if (bannerCounter === 3) {
        setBannerCounter(1)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => prevCounter + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // Banner Section.....
    return (
        <div style={{ width: '100%', margin: 'auto', }}>
            <Carousel>
                {
                    bannerHomeData?.map(b => {
                        return (
                            <Carousel.Item key={b._id}>
                                <img style={{ height: '500px' }}
                                    className="d-block w-100"
                                    src={b.img}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    {<h3 className='fontStyle' style={{ fontSize: '100px', marginBottom: '200px', color: `${dynamicColor}`, transition: '1s ease-in-out' }}>{b.name}</h3>}

                                    <p> Enjoy 4 night 5 days</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </div>
    );
};

export default Banner;