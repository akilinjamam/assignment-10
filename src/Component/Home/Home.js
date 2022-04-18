import React from 'react';
import Banner from '../Banner/Banner';
import GlobalSpots from '../GlobalSpots/GlobalSpots';
import LocalSpots from '../LocalSpots/LocalSpots';


const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <LocalSpots></LocalSpots>
            <GlobalSpots></GlobalSpots>

        </div>
    );
};

export default Home;