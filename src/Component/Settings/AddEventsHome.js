import React, { useContext, useEffect, useRef } from 'react';
import { useState } from 'react';
import JoditEditor from 'jodit-react';
import './AddEventsHome.css';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from 'react-query';
import fetchHomeData from '../../fetchData/fetchHomeData';
import cloudinaryImgHolder from '../../cloudinaryImgHolder/CloudinaryImgHolder';
import noteContext from '../../Context/noteContext';


const AddEventsHome = () => {
    const location = useLocation().pathname;
    const state = useContext(noteContext);
    const allInputHomeEventData = state.allInputHomeEventData;
    const setAllInputHomeEventData = state.setAllInputHomeEventData;

    const addHomeImg = state.addHomeImg

    const setAddHomeImg = state.setAddHomeImg
    const setPathName = state.setPathName;

    const name = allInputHomeEventData.name;
    const price = allInputHomeEventData.price;
    const stayLong = allInputHomeEventData.stayLong;
    const tourDate = allInputHomeEventData.tourDate;
    const tourLastDate = allInputHomeEventData.tourLastDate;
    const tourArea = allInputHomeEventData.tourArea;
    const description = allInputHomeEventData.description;
    const itineraries = allInputHomeEventData.itineraries;
    const terms = allInputHomeEventData.termsAndConditions;
    console.log(terms)
    const addition = allInputHomeEventData.additionalInfo;
    const inclusion = allInputHomeEventData.inclusion;
    const content = allInputHomeEventData.content;
    const contentSecond = allInputHomeEventData.contentSecond;
    const contentThird = allInputHomeEventData.contentThird;
    const contentFourth = allInputHomeEventData.contentFourth;
    const contentFifth = allInputHomeEventData.contentFifth;

    const editor = useRef(null);


    const [allData, setAllData] = useState({})
    const [view, setView] = useState(false);
    const [fillBasic, setFillBasic] = useState(false);
    const [fillDes, setFillDes] = useState(false);
    const [fillItineraries, setFillItineraries] = useState(false);
    const [fillTerms, setFillTerms] = useState(false);
    const [fillAdditionIn, setFillAdditionIn] = useState(false);

    const [message, setMessage] = useState('');
    const [bannerMessage, setBannerMessage] = useState('');

    const [count, setCount] = useState(1);

    const navigate = useNavigate();

    const { data: getForBanner, refetch } = useQuery("getForBanner", () => fetchHomeData())
    const [processing, setProcessing] = useState(false)

    const eventForBanner = getForBanner?.data?.result;
    const lastEventForBanner = eventForBanner?.slice((eventForBanner.length - 1), (eventForBanner.length));

    const handleBasic = (e) => {
        e.preventDefault();

        if (name === '' && price === '' && setAddHomeImg === '' && tourDate === '' && tourLastDate === '' && tourArea === '' && stayLong === '' && addHomeImg === '') {
            setCount(1);
        } else if (name && price && addHomeImg && tourDate && tourLastDate && tourArea && stayLong && addHomeImg) {
            setCount(count + 1);
            setView(false);
            setFillBasic(true);
        }

        if (name === '' || setAddHomeImg === '' || price === '' || tourDate === '' || tourLastDate === '' || tourArea === '' || stayLong === '' || addHomeImg === '') {
            setView(true);
        };
    };
    const handleDetail = (e) => {
        e.preventDefault();
        if (description === '') {
            setCount(2);
            setView(true);
        } else {
            setCount(count + 1);
            setView(false);
            setFillDes(true);
        }
    }
    const handleItiner = (e) => {
        e.preventDefault();
        if (itineraries === '') {
            setCount(3);
            setView(true);
        } else {
            setCount(count + 1);
            setView(false);
            setFillItineraries(true);
        }
    }
    const handleTerms = (e) => {
        e.preventDefault();

        if (terms === '') {
            setCount(4);
            setView(true);
        } else {
            setCount(count + 1);
            setView(false);
            setFillTerms(true);
        }


    }
    const handleAddition = (e) => {
        e.preventDefault();

        if (addition === '' && inclusion === '') {
            setCount(5);

        } else {
            setCount(count + 1);
            setFillAdditionIn(true);
        }

        if (addition === '' || inclusion === '') {
            setView(true);
            setCount(5);
        }

        setAllData({
            name: name,
            img: addHomeImg,
            price: price,
            stayLong: stayLong,
            tourDate: tourDate,
            tourLastDate: tourLastDate,
            tourArea: tourArea,
            description: description,
            itineraries: itineraries,
            termsAndConditions: terms,
            additionalInfo: addition,
            inclusion: inclusion
        });

    };

    const handleReady = async (e) => {
        e.preventDefault();
        // send data to server:
        try {
            await axios.post('https://asssignment-10-server-delta.vercel.app/api/v1/homeEvents', allData)
                .then(res => setMessage(res.data));
        } catch (error) {
            setMessage(error.response.data);
        };
        setCount(count + 1)
    };


    const finalMessage = (e) => {
        e.preventDefault();

        if (name && addHomeImg && price && tourDate && tourLastDate && tourArea && stayLong && description && itineraries && terms && addition && inclusion) {
            setAllInputHomeEventData({
                ...allInputHomeEventData,
                name: '',
                price: '',
                stayLong: '',
                tourDate: '',
                tourArea: '',
                tourLastDate: '',
                itineraries: '',
                description: '',
                additionalInfo: '',
                termsAndConditions: '',
                inclusion: '',
                content: '',
                contentSecond: '',
                contentThird: '',
                contentFourth: '',
                contentFifth: ''
            });
            setView(false);
            setAddHomeImg('');
        };

        setFillBasic(false);
        setFillDes(false);
        setFillItineraries(false);
        setFillTerms(false);
        setFillAdditionIn(false);


        setCount(1);
    };

    const addToBanner = async (e) => {
        e.preventDefault();
        // send data to banner server:

        try {
            await axios.post('https://asssignment-10-server-delta.vercel.app/api/v1/bannerEvents', {
                name: lastEventForBanner[0].name,
                bannerImg: lastEventForBanner[0].img,
                tourType: lastEventForBanner[0].tourArea,
                eventLink: lastEventForBanner[0]._id,
                tourPrice: lastEventForBanner[0].price,
                tourDate: lastEventForBanner[0].tourDate,
                tourLastDate: lastEventForBanner[0].tourLastDate
            }).then(res => {
                setBannerMessage(res.data);
            });

        } catch (error) {

            setBannerMessage(error.response.data);
        };

    };

    useEffect(() => {
        if (count === 7) {
            setProcessing(true);
            refetch();
            setTimeout(() => {
                setProcessing(false);
                refetch();
            }, 4000)
        }
    }, [count, refetch]);

    return (
        <div className='addEventsHome'>
            <br />
            <br />
            {/* <p className='homeTitle'>ADD HOME EVENTS :</p> */}
            <div className='addEventsHomeMain'>

                <div className='showStepsHome'>
                    <div className={` ${fillBasic ? 'backgroundBlue' : 'gray'} stepHome1`}>
                        <span>Basic Info</span>
                    </div>
                    <div className={` ${fillDes ? 'backgroundBlue' : 'gray'} stepHome2`}>
                        <span>Detail Info</span>
                    </div>
                    <div className={` ${fillItineraries ? 'backgroundBlue' : 'gray'} stepHome3`}>
                        <span>Itineraries</span>
                    </div>
                    <div className={` ${fillTerms ? 'backgroundBlue' : 'gray'} stepHome4`}>
                        <span>Terms & Cond.</span>
                    </div>
                    <div className={` ${fillAdditionIn ? 'backgroundBlue' : 'gray'} stepHome5`}>
                        <span>Additional Info</span>
                    </div>
                </div>
                <div className='bottomLine'>
                    <div className={`${count === 1 && 'red'} bottomLine`}>

                    </div>
                    <div className={`${count === 2 && 'red'} bottomLine`}>

                    </div>
                    <div className={`${count === 3 && 'red'} bottomLine`}>

                    </div>
                    <div className={`${count === 4 && 'red'} bottomLine`}>

                    </div>
                    <div className={`${count === 5 && 'red'} bottomLine`}>

                    </div>
                </div>
                <hr />


                <div className='addEventsHomeAllInfo'>
                    {
                        count === 1 &&
                        <div>
                            <form action="">
                                <div className='basicInfo'>
                                    <div className='basicInfoPartOne'>
                                        <div>
                                            <label htmlFor="">Tour Name :</label>
                                            <div>
                                                <input required type="text" name="tourName" value={name} onChange={(e) => {
                                                    setAllInputHomeEventData({ ...allInputHomeEventData, name: e.target.value })
                                                }} id="" />

                                            </div>
                                        </div>
                                        {(view && name === '') && <p style={{ textAlign: 'left', color: 'red', margin: '0', padding: '0', fontWeight: '200', fontSize: '13px' }}>please fillup the field...</p>}
                                        <br />
                                        <div>
                                            <label htmlFor="">Tour Price :</label>
                                            <div>
                                                <input required type="text" name="tourPrice" value={price
                                                } onChange={(e) => {
                                                    setAllInputHomeEventData({ ...allInputHomeEventData, price: e.target.value })
                                                }} id="" />

                                            </div>
                                        </div>
                                        {(view && price === '') && <p style={{ textAlign: 'left', color: 'red', margin: '0', padding: '0', fontWeight: '200', fontSize: '13px' }}>please fillup the field...</p>}
                                        <br />
                                        <div>
                                            <label htmlFor="">Tour Duration :</label>
                                            <div>
                                                <input required type="text" name="tourDuration" value={stayLong
                                                } onChange={(e) => {
                                                    setAllInputHomeEventData({ ...allInputHomeEventData, stayLong: e.target.value })
                                                }} id="" />

                                            </div>
                                        </div>
                                        {(view && stayLong === '') && <p style={{ textAlign: 'left', color: 'red', margin: '0', padding: '0', fontWeight: '200', fontSize: '13px' }}>please fillup the field...</p>}
                                        <br />
                                        <div>
                                            <label htmlFor="">Tour Date :</label>
                                            <div>
                                                <input style={{ width: '195px' }} value={tourDate} onChange={(e) => {
                                                    setAllInputHomeEventData({ ...allInputHomeEventData, tourDate: e.target.value })
                                                }} type="date" name="" id="" />

                                            </div>
                                        </div>
                                        {(view && tourDate === '') && <p style={{ textAlign: 'left', color: 'red', margin: '0', padding: '0', fontWeight: '200', fontSize: '13px' }}>please fillup the field...</p>}
                                        <br />
                                        <div>
                                            <label htmlFor="">Tour Image :</label>
                                            <div>

                                                <input style={{ width: '200px' }} type="file" onChange={(e) => {
                                                    const imgFile = e.target.files[0];
                                                    cloudinaryImgHolder(imgFile, setAddHomeImg)
                                                }} id="" />
                                            </div>
                                        </div>
                                        <br />
                                        <div>
                                            <div></div>
                                            {(view && addHomeImg === '') && <p style={{ textAlign: 'left', color: 'red', margin: '0', padding: '0', fontWeight: '200', fontSize: '13px' }}>please select image....</p>}
                                        </div>
                                        <div>
                                            <button onClick={() => {
                                                setPathName(location)
                                                navigate('/dashboard/unsplash')
                                            }} className='btn btn-primary' >Add Unsplash Image</button>
                                        </div>
                                        <br />
                                    </div>
                                    <div className='basicInfoPartTwo'>
                                        <div>
                                            <label htmlFor="">Tour Registration Last Date :</label>
                                            <input style={{ width: '45%' }} value={tourLastDate} onChange={(e) => {
                                                setAllInputHomeEventData({ ...allInputHomeEventData, tourLastDate: e.target.value })
                                            }} type="date" name="" id="" />
                                        </div>
                                        {(view && tourLastDate === '') && <p style={{ textAlign: 'left', color: 'red', margin: '0', padding: '0', fontWeight: '200', fontSize: '13px' }}>please fillup the field...</p>}
                                        <br />
                                        <div>
                                            <label htmlFor="">Tour Area :</label>
                                            <div>
                                                <select required name="" id="" onChange={(e) => {
                                                    const option = e.target.value;
                                                    setAllInputHomeEventData({ ...allInputHomeEventData, tourArea: option });
                                                }}>
                                                    <option value="">select...</option>
                                                    <option value="home">Home</option>
                                                </select>

                                            </div>
                                        </div>
                                        {(view && tourArea === '') && <p style={{ textAlign: 'left', color: 'red', margin: '0', padding: '0', fontWeight: '200', fontSize: '13px' }}>please choose any option...</p>}
                                        <br />

                                    </div>
                                </div>

                                <input style={{ position: 'absolute', bottom: '10px', left: '20px' }} onClick={() => navigate('/dashboard')} className='btn btn-primary' type="submit" value="BACK" />
                                <button style={{ position: 'absolute', bottom: '10px', right: '30px' }} onClick={handleBasic} className='btn btn-primary btnHomeBasic'>NEXT</button>

                            </form>

                        </div>
                    }

                    {
                        count === 2 &&
                        <div className='detailInfo'>
                            <form onSubmit={handleDetail} action="">
                                <JoditEditor

                                    ref={editor}
                                    value={content}
                                    onBlur={newContent => { setAllInputHomeEventData({ ...allInputHomeEventData, content: newContent }) }}
                                    onChange={newContent => { setAllInputHomeEventData({ ...allInputHomeEventData, description: newContent }) }}
                                />
                                <br />
                                {(view && description === '') && <p style={{ textAlign: 'left', color: 'red', margin: '0', padding: '0', fontWeight: '200', fontSize: '13px' }}>please fillup the field...</p>}
                                <br />
                                <br />
                                <br />
                                <div>
                                    <input style={{ position: 'absolute', bottom: '10px', left: '20px' }} onClick={() => setCount(count - 1)} className='btn btn-primary btnHomeBasic' type="submit" value="BACK" />

                                    <input style={{ position: 'absolute', bottom: '10px', right: '30px' }} className='btn btn-primary btnHomeBasic' type="submit" value="NEXT" />
                                </div>
                            </form>
                        </div>
                    }

                    {
                        count === 3 &&
                        <div className='itinerariesInfo'>
                            <form onSubmit={handleItiner} action="">
                                <JoditEditor

                                    ref={editor}
                                    value={contentSecond}
                                    onBlur={newContent => { setAllInputHomeEventData({ ...allInputHomeEventData, contentSecond: newContent }) }}
                                    onChange={newContent => { setAllInputHomeEventData({ ...allInputHomeEventData, itineraries: newContent }) }}
                                />
                                <br />
                                {(view && itineraries === '') && <p style={{ textAlign: 'left', color: 'red', margin: '0', padding: '0', fontWeight: '200', fontSize: '13px' }}>please fillup the field...</p>}
                                <br />
                                <br />
                                <br />

                                <input style={{ position: 'absolute', bottom: '10px', left: '20px' }} onClick={() => setCount(count - 1)} className='btn btn-primary btnHomeBasic' type="submit" value="BACK" />
                                <input style={{ position: 'absolute', bottom: '10px', right: '30px' }} className='btn btn-primary btnHomeBasic' type="submit" value="NEXT" />

                            </form>
                        </div>
                    }

                    {
                        count === 4 &&
                        <div className='termsAndConditions'>
                            <form onSubmit={handleTerms} action="">
                                <JoditEditor

                                    ref={editor}
                                    value={contentThird}
                                    onBlur={newContent => { setAllInputHomeEventData({ ...allInputHomeEventData, contentThird: newContent }) }}
                                    onChange={newContent => { setAllInputHomeEventData({ ...allInputHomeEventData, termsAndConditions: newContent }) }}
                                />
                                <br />
                                {(view && terms === '') && <p style={{ textAlign: 'left', color: 'red', margin: '0', padding: '0', fontWeight: '200', fontSize: '13px' }}>please fillup the field...</p>}
                                <br />
                                <br />
                                <br />

                                <input style={{ position: 'absolute', bottom: '10px', left: '20px' }} onClick={() => setCount(count - 1)} className='btn btn-primary btnHomeBasic' type="submit" value="BACK" />
                                <input style={{ position: 'absolute', bottom: '10px', right: '30px' }} className='btn btn-primary btnHomeBasic' type="submit" value="NEXT" />

                            </form>
                        </div>
                    }

                    {
                        count === 5 &&
                        <div className='additionalInfo'>

                            <form onSubmit={handleAddition} action="">
                                <label htmlFor="">Additional Information</label>
                                <br />
                                <br />
                                <JoditEditor

                                    ref={editor}
                                    value={contentFourth}
                                    onBlur={newContent => { setAllInputHomeEventData({ ...allInputHomeEventData, contentFourth: newContent }) }}
                                    onChange={newContent => { setAllInputHomeEventData({ ...allInputHomeEventData, additionalInfo: newContent }) }}
                                />
                                <br />
                                {(view && addition === '') && <p style={{ textAlign: 'left', color: 'red', margin: '0', padding: '0', fontWeight: '200', fontSize: '13px' }}>please fillup the field...</p>}
                                <br />
                                <label htmlFor="">Inclusion</label>
                                <br />
                                <br />
                                <JoditEditor

                                    ref={editor}
                                    value={contentFifth}
                                    onBlur={newContent => { setAllInputHomeEventData({ ...allInputHomeEventData, contentFifth: newContent }) }}
                                    onChange={newContent => { setAllInputHomeEventData({ ...allInputHomeEventData, inclusion: newContent }) }}
                                />
                                <br />
                                {(view && inclusion === '') && <p style={{ textAlign: 'left', color: 'red', margin: '0', padding: '0', fontWeight: '200', fontSize: '13px' }}>please fillup the field...</p>}
                                <br />
                                <br />
                                <br />

                                <input style={{ position: 'absolute', bottom: '10px', left: '20px' }} onClick={() => setCount(count - 1)} className='btn btn-primary btnHomeBasic' type="submit" value="BACK" />
                                <input style={{ position: 'absolute', bottom: '10px', right: '30px' }} className='btn btn-primary btnHomeBasic' type="submit" value="NEXT" />

                                <br />
                            </form>
                        </div>
                    }


                    {
                        count === 6 &&
                        <div className='finalMessageEvent'>
                            <form className='lastFormEvent' action="" onSubmit={handleReady}>
                                <i class="uil uil-check-circle"></i>
                                <p>All Information Successfully is ready...</p>
                                <input onClick={() => setCount(count - 1)} className='btn btn-primary finalMessageBackBtn' type="submit" value="BACK" />
                                <input className='btn btn-primary finalMessageBtn' type="submit" value="NEXT" />
                            </form>

                        </div>
                    }

                    {
                        count === 7 &&
                        <div className='finalMessageEvent'>
                            {
                                processing ?
                                    <div>
                                        <p>processing....</p>
                                    </div>
                                    :
                                    <form className='lastFormEvent' action="" onSubmit={finalMessage}>
                                        <div>


                                            {message.status === 'success' && <i class="uil uil-check-circle"></i>}

                                            {message.status === 'failed' && <i class="uil uil-times-circle"></i>}
                                        </div>
                                        <div>
                                            {message.message}
                                        </div>
                                        {
                                            message.status === 'failed' && <input onClick={() => setCount(count - 1)} className='btn btn-primary finalMessageBackBtn' type="submit" value="BACK" />
                                        }
                                        {
                                            message.status === 'success' &&
                                            <div className='bannerOkBtn'>
                                                <span style={{ marginRight: '10px', fontStyle: 'italic', color: 'crimson' }}>if you want to add this event to Banner Section, press ok</span>
                                                <button onClick={addToBanner} className='btn btn-secondary btn-sm '>OK</button>
                                                {bannerMessage.status === 'success' && <span style={{ marginLeft: '20px', color: 'green' }}>{bannerMessage.message}</span>}

                                            </div>
                                        }
                                        <input className='btn btn-primary finalMessageBtn' type="submit" value="ADD NEW EVENT" />
                                    </form>
                            }

                        </div>
                    }
                </div>

            </div>
        </div>
    );
};

export default AddEventsHome;




