import React, { useState } from 'react';
import './Background.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Parallax } from 'react-parallax';
import winter from '../../background-image/ricardo-gomez-angel-cp8hPQ8cjG0-unsplash.jpg'
import { useQuery } from 'react-query';
import fetchBannerData from '../../fetchData/fetchBannerData';
// ..
AOS.init();

const Background = () => {
    const [popupBackground, setPopupBackground] = useState(false);
    const [filterValue, setFilterValue] = useState('');
    const [storeName, setStoreName] = useState('');
    console.log(filterValue.length);

    const handleCancelPopup = () => {
        setPopupBackground(false)
    }

    const onClickFilter = (name) => {

        setFilterValue(name);
        setStoreName(name);
    }

    console.log(filterValue);
    const { data: getBannerForFilterCountry } = useQuery("getBannerForFilterCountry", () => fetchBannerData());
    console.log(getBannerForFilterCountry?.data?.result);

    const filteredData = getBannerForFilterCountry?.data?.result?.filter(item => item.name.toLowerCase().startsWith(filterValue.toLowerCase()));

    console.log(storeName?.length)

    const handleInputChange = (event) => {
        setFilterValue(event.target.value.trim());

    };


    return (
        <div className='mainBackground'>
            <div className='background'>

                <div className='input'>
                    <div className='suggession-borderline'>
                        <input value={filterValue} placeholder='where to go' type="text" name="" id=""
                            onChange={handleInputChange}
                        />
                        {
                            filterValue &&
                            <div>
                                {
                                    filteredData?.length === 0 ?
                                        <div className='suggession'>
                                            <p style={{ margin: '0', fontSize: '12px', textAlign: 'left', cursor: 'pointer', borderBottom: '1px solid gray', padding: '5px' }}>nothing matched</p>
                                        </div>
                                        :

                                        <div>
                                            {
                                                filterValue !== storeName &&
                                                <div className='suggession'>
                                                    {
                                                        filteredData?.map(data =>
                                                            <p onClick={() => onClickFilter(data.name)} style={{ margin: '0', fontSize: '12px', textAlign: 'left', cursor: 'pointer', borderBottom: '1px solid gray', padding: '5px' }}>
                                                                {data.name}
                                                            </p>
                                                        )
                                                    }
                                                </div>
                                            }
                                        </div>
                                }
                            </div>
                        }
                    </div>
                    <div>
                        <input placeholder='month' type="datetime" name="" id="" />
                    </div>
                    <div>
                        <input placeholder='Travel Type' type="text" name="" id="" />
                    </div>

                    <button onClick={() => setPopupBackground(filterValue.length === 0 ? false : true)} className='button'>Find Now</button>
                </div>
                <div className='adminEditor' >
                    <span>
                        <p>Admin Access:</p>
                        <p>Email: belal@gmail.com</p>
                        <p>Password: 123456</p>
                    </span>

                    <span>
                        <p>Editor Access:</p>
                        <p>Email: jamal@gmail.com</p>
                        <p>Password: 123456</p>
                    </span>
                </div>
            </div>

            <div >
                <p data-aos="fade-right" data-aos-duration="1000" className='go'>GO!</p>
            </div>


            <div data-aos="fade-right" data-aos-duration="1000" className='textBackground'>
                <p style={{ color: 'black' }}> <span>Amazing </span> Tour And Fun <br /> Advantures <span> Waiting for</span> <br /> <span> You</span> </p>
            </div>


            <div className='detailBackgroundImg'>

                <div style={{ padding: '20px' }} data-aos="zoom-in" data-aos-duration="1000" className='detailBackground'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa cum sociis Theme natoque.
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa cum sociis Theme natoque.
                </div>
            </div>
            <div className={popupBackground ? 'block' : 'none'}>
                <div className='popupBackground'>
                    <div className='popupBackground-main'>
                        <button onClick={handleCancelPopup} className='btn btn-danger background-delete-btn'>cancel</button>
                        <div>
                            {
                                filteredData?.map(f =>
                                    <div>
                                        <p>{f.name}</p>
                                        <p>{f.tourArea}</p>
                                    </div>
                                )
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Background;