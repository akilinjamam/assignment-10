import React from 'react';

const BackgroundTwo = () => {
    return (
        <div className='backgroundTwo'>
            <div className='backgroundTwoMain'>

                <div className='backgroundText'>
                    <div>
                        <p> <span style={{ fontWeight: 'bold' }} >Subscribe To</span> The <br />Newsletter</p>
                        <input type="text" name="" id="" />
                        <br /><br />
                        <button className='backgroundTwoSubscribeBtn'>Subscribe</button>
                    </div>
                </div>
            </div>

            <div className='backgroundTwoMainTwo'>
                <div className='away'>
                    <h1>AWAY</h1>
                </div>

                <div className='backgroundTwoMainTwoText' >
                    <h3>Trending, Best <span style={{ fontWeight: 'bold' }}> Selling <br />
                        Tours And</span> Fun <br /> Destinations</h3>
                </div>


                <div className='backgroundTwoDetailText'>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa cum sociis Theme natoque. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa cum sociis Theme natoque.</p>
                </div>

            </div>
        </div>
    );
};

export default BackgroundTwo;