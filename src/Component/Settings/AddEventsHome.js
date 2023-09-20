import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import JoditEditor from 'jodit-react';
import './AddEventsHome.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from 'react-query';
import fetchHomeData from '../../fetchData/fetchHomeData';
import fetchBannerData from '../../fetchData/fetchBannerData';

const AddEventsHome = () => {

    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [contentSecond, setContectSecond] = useState('');
    const [contentThird, setContentThird] = useState('');
    const [contentFourth, setContentFourth] = useState('');
    const [contentFifth, setContentFifth] = useState('');

    const [allData, setAllData] = useState({})
    const [view, setView] = useState(false);
    const [fillBasic, setFillBasic] = useState(false);
    const [fillDes, setFillDes] = useState(false);
    const [fillItineraries, setFillItineraries] = useState(false);
    const [fillTerms, setFillTerms] = useState(false);
    const [fillAdditionIn, setFillAdditionIn] = useState(false);

    const [name, setName] = useState('');
    const [img, setImg] = useState('');
    const [imgContainer, setImgContainer] = useState();
    const [price, setPrice] = useState('');
    const [stayLong, setStayLong] = useState('');
    const [tourDate, setTourDate] = useState('');
    const [tourLastDate, setTourLastDate] = useState('');
    const [tourArea, setTourArea] = useState('');
    const [description, setDescription] = useState('');
    const [itineraries, setItineraries] = useState('');
    const [terms, setTerms] = useState('')
    const [addition, setAddition] = useState('');
    const [inclusion, setInclusion] = useState('');

    const [message, setMessage] = useState('');
    const [bannerMessage, setBannerMessage] = useState('');


    console.log(tourLastDate);

    const [count, setCount] = useState(1);

    const navigate = useNavigate();

    const { data: getForBanner, refetch } = useQuery("getForBanner", () => fetchHomeData())
    const { data: getBanner } = useQuery("getBanner", () => fetchBannerData())
    const [processing, setProcessing] = useState(false)
    const eventBanner = getBanner?.data?.result;
    console.log(eventBanner);
    const eventForBanner = getForBanner?.data?.result;
    const lastEventForBanner = eventForBanner?.slice((eventForBanner.length - 1), (eventForBanner.length))



    const handleBasic = (e) => {
        e.preventDefault();

        if (name === '' && price === '' && img === '' && tourDate === '' && tourLastDate === '' && tourArea === '' && stayLong === '' && imgContainer === '') {
            setCount(1);
        } else if (name && price && img && tourDate && tourLastDate && tourArea && stayLong && imgContainer) {
            setCount(count + 1);
            setView(false);
            setFillBasic(true);
        }

        if (name === '' || img === '' || imgContainer === '' || price === '' || tourDate === '' || tourLastDate === '' || tourArea === '' || stayLong === '') {
            setView(true);
        };
    };

    console.log(imgContainer)

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
            img: img,
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
            const res = await axios.post('https://asssignment-10-server-delta.vercel.app/api/v1/homeEvents', allData)
                .then(res => setMessage(res.data));

        } catch (error) {
            console.log(error.response.data);
            setMessage(error.response.data);
        };



        setCount(count + 1)

    };


    const finalMessage = (e) => {
        e.preventDefault();

        if (name && img && imgContainer && price && tourDate && tourLastDate && tourArea && stayLong && description && itineraries && terms && addition && inclusion) {
            setName('');
            setImg('');
            setImgContainer('');
            setPrice('');
            setStayLong('');
            setTourDate('');
            setTourArea('');
            setTourLastDate('');
            setItineraries('');
            setDescription('');
            setTerms('');
            setAddition('');
            setInclusion('');
            setContent('');
            setContectSecond('');
            setContentThird('');
            setContentFourth('');
            setContentFifth('');
            setView(false)
        };

        setFillBasic(false);
        setFillDes(false);
        setFillItineraries(false);
        setFillTerms(false);
        setFillAdditionIn(false);


        setCount(1);
    };


    useEffect(() => {
        if (imgContainer) {
            const imgStorageKey = 'a7d23ad727734bb709b70dc5aa33543f'
            const formData = new FormData();
            formData.append('image', imgContainer);
            const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
            fetch(url, {
                method: 'POST',
                body: formData,
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result?.data?.url);
                    setImg(result?.data?.url);

                })
        }
    }, [imgContainer])

    const addToBanner = async (e) => {
        e.preventDefault();
        // send data to banner server:

        try {
            const resBanner = await axios.post('https://asssignment-10-server-delta.vercel.app/api/v1/bannerEvents', {
                name: lastEventForBanner[0].name,
                bannerImg: lastEventForBanner[0].img,
                tourType: lastEventForBanner[0].tourArea,
                eventLink: lastEventForBanner[0]._id,
                tourPrice: lastEventForBanner[0].price,
                tourData: lastEventForBanner[0].tourData,
                tourLastDate: lastEventForBanner[0].tourLastDate
            }).then(res => setBannerMessage(res.data));

        } catch (error) {
            console.log(error.response.data);
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
    console.log(processing);

    return (
        <div className='addEventsHome'>
            <p className='homeTitle'>ADD HOME EVENTS :</p>
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
                                                <input required type="text" name="tourName" value={name} onChange={(e) => setName(e.target.value)} id="" />

                                            </div>
                                        </div>
                                        {(view && name === '') && <p style={{ textAlign: 'left', color: 'red', margin: '0', padding: '0', fontWeight: '200', fontSize: '13px' }}>please fillup the field...</p>}
                                        <br />
                                        <div>
                                            <label htmlFor="">Tour Price :</label>
                                            <div>
                                                <input required type="text" name="tourPrice" value={price
                                                } onChange={(e) => setPrice(e.target.value)} id="" />

                                            </div>
                                        </div>
                                        {(view && price === '') && <p style={{ textAlign: 'left', color: 'red', margin: '0', padding: '0', fontWeight: '200', fontSize: '13px' }}>please fillup the field...</p>}
                                        <br />
                                        <div>
                                            <label htmlFor="">Tour Duration :</label>
                                            <div>
                                                <input required type="text" name="tourDuration" value={stayLong
                                                } onChange={(e) => setStayLong(e.target.value)} id="" />

                                            </div>
                                        </div>
                                        {(view && stayLong === '') && <p style={{ textAlign: 'left', color: 'red', margin: '0', padding: '0', fontWeight: '200', fontSize: '13px' }}>please fillup the field...</p>}
                                        <br />
                                        <div>
                                            <label htmlFor="">Tour Date :</label>
                                            <div>
                                                <input style={{ width: '195px' }} value={tourDate} onChange={(e) => setTourDate(e.target.value)} type="date" name="" id="" />

                                            </div>
                                        </div>
                                        {(view && tourDate === '') && <p style={{ textAlign: 'left', color: 'red', margin: '0', padding: '0', fontWeight: '200', fontSize: '13px' }}>please fillup the field...</p>}
                                        <br />
                                        <div>
                                            <label htmlFor="">Tour Image :</label>
                                            <div>

                                                <input style={{ width: '200px' }} type="file" onChange={(e) => {
                                                    const imgFile = e.target.files[0];
                                                    setImgContainer(imgFile);
                                                }} id="" />
                                            </div>
                                        </div>
                                        <br />
                                        <div>
                                            <div></div>
                                            {(view && img === '') && <p style={{ textAlign: 'left', color: 'red', margin: '0', padding: '0', fontWeight: '200', fontSize: '13px' }}>please select image from local file....</p>}

                                        </div>

                                    </div>
                                    <div className='basicInfoPartTwo'>
                                        <div>
                                            <label htmlFor="">Tour Registration Last Date :</label>
                                            <input style={{ width: '45%' }} value={tourLastDate} onChange={(e) => setTourLastDate(e.target.value)} type="date" name="" id="" />
                                        </div>
                                        {(view && tourLastDate === '') && <p style={{ textAlign: 'left', color: 'red', margin: '0', padding: '0', fontWeight: '200', fontSize: '13px' }}>please fillup the field...</p>}
                                        <br />
                                        <div>
                                            <label htmlFor="">Tour Area :</label>
                                            <div>
                                                <select required name="" id="" onChange={(e) => {
                                                    const option = e.target.value;
                                                    setTourArea(option);
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
                                    onBlur={newContent => setContent(newContent)}
                                    onChange={newContent => { setDescription(newContent) }}
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
                                    onBlur={newContent => setContectSecond(newContent)}
                                    onChange={newContent => { setItineraries(newContent) }}
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
                                    onBlur={newContent => setContentThird(newContent)}
                                    onChange={newContent => { setTerms(newContent) }}
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
                                    onBlur={newContent => setContentFourth(newContent)}
                                    onChange={newContent => { setAddition(newContent) }}
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
                                    onBlur={newContent => setContentFifth(newContent)}
                                    onChange={newContent => { setInclusion(newContent) }}
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




