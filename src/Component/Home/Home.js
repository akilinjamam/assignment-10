import React from 'react';
import './Home.css';
import { useEffect } from 'react';
import { useState } from 'react';
import Background from '../Background/Background';
import Banner from '../Banner/Banner';
import Test from '../Banner/Test';
import Gallery from '../Gallery/Gallery';
import GlobalSpots from '../GlobalSpots/GlobalSpots';
import LocalSpots from '../LocalSpots/LocalSpots';
import BackgroundTwo from '../Background/BackgroundTwo';
import FeedBack from '../FeedBack/FeedBack';



const Home = () => {



    return (
        <div>
            <Banner></Banner>
            <Background></Background>
            <br /><br />
            <Gallery></Gallery>
            <br /><br /><br />
            <LocalSpots></LocalSpots>
            <GlobalSpots></GlobalSpots>
            <BackgroundTwo></BackgroundTwo>
            <FeedBack></FeedBack>
        </div>
    );
};

export default Home;