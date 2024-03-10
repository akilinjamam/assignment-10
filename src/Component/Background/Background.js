import React, { useState } from 'react';
import './Background.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useQuery } from 'react-query';
import fetchBannerData from '../../fetchData/fetchBannerData';
import { useNavigate } from 'react-router-dom';
// ..
AOS.init();

const Background = () => {
    const navigate = useNavigate();
    const [popupBackground, setPopupBackground] = useState(false);
    const [filterValue, setFilterValue] = useState('');
    const [storeName, setStoreName] = useState('');

    const handleCancelPopup = () => {
        setPopupBackground(false)
    }

    const onClickFilter = (name) => {

        setFilterValue(name);
        setStoreName(name);
    }

    const { data: getBannerForFilterCountry } = useQuery("getBannerForFilterCountry", () => fetchBannerData());


    const filteredData = getBannerForFilterCountry?.data?.result?.filter(item => item.name.toLowerCase().startsWith(filterValue.toLowerCase()));



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
                        <button style={{ width: '100px' }} onClick={handleCancelPopup} className='btn btn-danger background-delete-btn'>cancel</button>
                        <br /><br /><br />
                        <div >
                            {
                                filteredData?.length !== 0 ? filteredData?.map(f =>
                                    <div key={f._id} className='popupFilteredBackgroundData'>
                                        <div className="imgDivBackground">
                                            <img src={f.bannerImg} alt="" />
                                        </div>
                                        <div className="detailDivBackground">
                                            <p>Tour Name: {f.name} </p>
                                            <p>Tour Area: {f.tourArea}</p>
                                            <p>Tour Price: {f.tourPrice}</p>
                                            <p>Tour Date: {f.tourDate}</p>
                                            <p>Tour Last Date: {f.tourLastDate}</p>
                                            <button onClick={() => navigate(`/spotDetail/${f.eventLink}`)} style={{ width: '100px' }} class="btn btn-primary btn-sm">view details</button>
                                        </div>
                                    </div>
                                )

                                    :

                                    <p style={{ color: 'red' }}>nothing found here by search...</p>
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Background;