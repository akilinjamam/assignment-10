import React from 'react';
import './Gallery.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Gallery = () => {
    return (
        <div className='galleryMain' >
            <div data-aos='flip-up' data-aos-duration='1000'>
                <p className='title' >BLOGS</p>
            </div>
            <div class="containerrr">

                <div class="gallery-container w-3 h-2">
                    <div data-aos='zoom-in' data-aos-duration='1000' class="gallery-item">
                        <div class="image">
                            <img src="https://source.unsplash.com/1600x900/?nature" alt="nature" />
                        </div>
                        <div class="text">Nature</div>
                    </div>
                </div>

                <div class="gallery-container w-3 h-3">
                    <div data-aos='zoom-in' data-aos-duration='1000' class="gallery-item">
                        <div class="image">
                            <img src="https://source.unsplash.com/1600x900/?people" alt="people" />
                        </div>
                        <div class="text">People</div>
                    </div>
                </div>

                <div class="gallery-container h-2">
                    <div data-aos='zoom-in' data-aos-duration='1000' class="gallery-item">
                        <div class="image">
                            <img src="https://source.unsplash.com/1600x900/?sport" alt="sport" />
                        </div>
                        <div class="text">Sport</div>
                    </div>
                </div>

                <div class="gallery-container w-2">
                    <div data-aos='zoom-in' data-aos-duration='1000' class="gallery-item">
                        <div class="image">
                            <img src="https://source.unsplash.com/1600x900/?fitness" alt="fitness" />
                        </div>
                        <div class="text">Fitness</div>
                    </div>
                </div>

                <div class="gallery-container w-4 h-1">
                    <div data-aos='zoom-in' data-aos-duration='1000' class="gallery-item">
                        <div class="image">
                            <img src="https://source.unsplash.com/1600x900/?food" alt="food" />
                        </div>
                        <div class="text">Food</div>
                    </div>
                </div>

                <div class="gallery-container">
                    <div data-aos='zoom-in' data-aos-duration='1000' class="gallery-item">
                        <div class="image">
                            <img src="https://source.unsplash.com/1600x900/?travel" alt="travel" />
                        </div>
                        <div class="text">Travel</div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Gallery;


/* 

https://preview.themeforest.net/item/getaway-an-upbeat-travel-and-tourism-theme/full_screen_preview/20719616?_ga=2.205392976.1908446264.1670340366-301770410.1670340366

*/