import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Slider from "react-slick";
import React, { Component } from "react";


export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <h2> Single Item</h2>
                <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slider>
            </div>
        );
    }
}

    // const [counter, setCounter] = useState(0);

    // if (counter === 10) {

    //     setCounter(0)
    // }

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCounter((prevCounter) => prevCounter + 1);
    //     }, 1000);

    //     return () => clearInterval(interval);
    // }, []);







