import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './TourArea.css'
import { useQuery } from 'react-query';
import fetchGlobalData from '../../fetchData/fetchGlobalData';
import { useContext } from 'react';
import noteContext from '../../Context/noteContext';

const TourAbroad = () => {

    const navigate = useNavigate();

    const routerPath = useLocation();
    const onTop = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        onTop()
    }, [routerPath])


    const { data: globalQuery } = useQuery("globalQuery", () => fetchGlobalData());

    const data = globalQuery?.data?.result;


    const [findDate, setFindDate] = useState('');
    const [findPlace, setFindPlace] = useState('');
    const [findPrice, setFindPrice] = useState('');

    const findDataPlace = data?.find(i => {
        return i.name === findPlace
    });
    const findDataDate = data?.find(i => {
        return i.tourLastDate === findDate
    });
    const findDataPrice = data?.find(i => {
        return i.price === findPrice
    });



    const handleView = () => {

        setFindDate('');
        setFindPlace('');
        setFindPrice('');
    }

    const state = useContext(noteContext);

    const handleViewDetail = (id, tourArea) => {
        navigate(`/spotDetail/${id}`);
        state.setTourArea(tourArea)
    }

    return (
        <div className='tourAreaMain'>

            <section className='partOne'>

                <div className='viewAllButton'>
                    <button onClick={handleView} className='btn btn-primary'>VIEW ALL</button>
                </div>
                <br />
                <br />
                <div className='partOneFind'>
                    <label htmlFor="">Find by Place :</label>
                    <br />
                    <br />
                    <select name="" id="" onChange={(e) => {
                        const option = e.target.value;
                        setFindPlace(option);
                        setFindPrice('');
                        setFindDate('');
                    }}>
                        <option value="">Select Place....</option>
                        {
                            data?.map(d => <option value={d.name}>{d.name}</option>)
                        }
                    </select>
                </div>
                <br />
                <br />
                <br />
                <div className='partOneFind'>
                    <label htmlFor="">Find by Date :</label>
                    <br />
                    <br />
                    <select name="" id="" onChange={(e) => {
                        const option = e.target.value;
                        setFindDate(option);
                        setFindPlace('');
                        setFindPrice('');
                    }}>  <option value="">Select Date....</option>
                        {
                            data?.map(d => <option value={d.tourLastDate}>{d.tourLastDate}</option>)
                        }
                    </select>
                </div>
                <br />
                <br />
                <br />
                <div className='partOneFind'>
                    <label htmlFor="">Find by Price :</label>
                    <br />
                    <br />
                    <select name="" id="" onChange={(e) => {
                        const option = e.target.value;
                        setFindPrice(option);
                        setFindDate('')
                        setFindPlace('')
                    }}>
                        <option value="">Select Price....</option>
                        {
                            data?.map(d => <option value={d.price}>{d.price}</option>)
                        }
                    </select>
                </div>
                <br />
                <br />
                <br />
            </section>
            <section className='partTwo'>

                <h6 style={{ color: 'black' }}>WORLD TOUR</h6>
                <hr />

                <div className='tourAreaContainer'>
                    {
                        (findDate || findPlace || findPrice) === '' &&
                        <div>
                            {
                                data?.map(d => {
                                    return (
                                        <div key={d.id} className='tourAreaSection'>

                                            <div className='tourAreaImg'>
                                                <img src={d.img} alt="" />
                                            </div>

                                            <div className='tourAreaInfo'>
                                                <div className='tourAreaInfoContainer'>
                                                    <p><span>Tour Name</span> : {d.name} </p>
                                                    <p><span>Tour Duration</span> : {d.stayLong} </p>
                                                    <p><span>Last Date of  Registration</span> : {d.tourLastDate} </p>
                                                    <p><span>Tour Price</span> : {d.price} </p>
                                                    <button onClick={() => handleViewDetail(d._id, d.tourArea)} className=''>VIEW DETAIL</button>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                })
                            }
                        </div>
                    }

                    {
                        (findDataPlace) &&
                        <div key={findDataPlace.id} className='tourAreaSection'>

                            <div className='tourAreaImg'>
                                <img src={findDataPlace.img} alt="" />
                            </div>

                            <div className='tourAreaInfo'>
                                <div className='tourAreaInfoContainer'>
                                    <p><span>Tour Name</span> : {findDataPlace.name} </p>
                                    <p><span>Tour Duration</span> : {findDataPlace.stayLong} </p>
                                    <p><span>Last Date of  Registration</span> : {findDataPlace.tourLastDate} </p>
                                    <p><span>Tour Price</span> : {findDataPlace.price} </p>
                                    <button onClick={() => handleViewDetail(findDataPlace._id, findDataPlace.tourArea)} className=''>VIEW DETAIL</button>
                                </div>
                            </div>
                        </div>
                    }
                    {
                        (findDataDate) &&
                        <div key={findDataDate.id} className='tourAreaSection'>

                            <div className='tourAreaImg'>
                                <img src={findDataDate.img} alt="" />
                            </div>

                            <div className='tourAreaInfo'>
                                <div className='tourAreaInfoContainer'>
                                    <p><span>Tour Name</span> : {findDataDate.name} </p>
                                    <p><span>Tour Duration</span> : {findDataDate.stayLong} </p>
                                    <p><span>Last Date of  Registration</span> : {findDataDate.tourLastDate} </p>
                                    <p><span>Tour Price</span> : {findDataDate.price} </p>
                                    <button onClick={() => handleViewDetail(findDataDate._id, findDataDate.tourArea)} className=''>VIEW DETAIL</button>
                                </div>
                            </div>
                        </div>
                    }
                    {
                        (findDataPrice) &&
                        <div key={findDataPrice.id} className='tourAreaSection'>

                            <div className='tourAreaImg'>
                                <img src={findDataPrice.img} alt="" />
                            </div>

                            <div className='tourAreaInfo'>
                                <div className='tourAreaInfoContainer'>
                                    <p><span>Tour Name</span> : {findDataPrice.name} </p>
                                    <p><span>Tour Duration</span> : {findDataPrice.stayLong} </p>
                                    <p><span>Last Date of  Registration</span> : {findDataPrice.tourLastDate} </p>
                                    <p><span>Tour Price</span> : {findDataPrice.price} </p>
                                    <button onClick={() => handleViewDetail(findDataPrice._id, findDataPrice.tourArea)} className=''>VIEW DETAIL</button>
                                </div>
                            </div>
                        </div>
                    }

                </div>
            </section>
        </div>
    );
};

export default TourAbroad;