import React, { useRef, useState } from 'react';
import './UpdateHome.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import { useEffect } from 'react';
import fetchHomeData from '../../../fetchData/fetchHomeData';
import JoditEditor from 'jodit-react';
import axios from 'axios';
import fetchBannerData from '../../../fetchData/fetchBannerData';
import fetchUserCartData from '../../../fetchData/fetchUserCartData';
import fetchCartData from '../../../fetchData/fetchCartData';

const UpdateHome = () => {

    const editor = useRef(null);
    const [view, setView] = useState(false);
    const [count, setCount] = useState(1);

    const [content, setContent] = useState('');
    const [contentSecond, setContectSecond] = useState('');
    const [contentThird, setContentThird] = useState('');
    const [contentFourth, setContentFourth] = useState('');
    const [contentFifth, setContentFifth] = useState('');
    const navigate = useNavigate();
    const { updateHomeId } = useParams()

    const [name, setName] = useState('');
    const [img, setImg] = useState('');
    const [imgContainer, setImgContainer] = useState('');
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
    const [allData, setAllData] = useState({});
    console.log(allData);

    const [message, setMessage] = useState('');

    const { data: updateHome, refetch } = useQuery("updateHome", () => fetchHomeData());
    const updateHomeData = updateHome?.data?.result;

    const { data: bannerUpdateForHome } = useQuery("bannerUpdateForHome", () => fetchBannerData());
    const bannerForUpdate = bannerUpdateForHome?.data?.result;

    const findBannerForUpdate = bannerForUpdate?.find(b => {
        return b.eventLink === updateHomeId
    })


    const homeData = updateHomeData?.find(i => {
        return i._id === updateHomeId
    });


    const { data: queryCartForUpdate } = useQuery("queryCartForUpdate", () => fetchCartData());

    const queryCartForUpdateData = queryCartForUpdate?.data?.result


    const filteringCartData = queryCartForUpdateData?.filter(f => {
        return f.tourName === homeData?.name
    });

    const mappedFiltered = filteringCartData?.map(obj => obj._id);




    useEffect(() => {
        setName(homeData?.name);
        setImg(homeData?.img);
        setPrice(homeData?.price);
        setStayLong(homeData?.stayLong);
        setTourDate(homeData?.tourDate);
        setTourLastDate(homeData?.tourLastDate);
        setTourArea(homeData?.tourArea);
        setDescription(homeData?.description);
        setItineraries(homeData?.itineraries);
        setTerms(homeData?.termsAndConditions);
        setAddition(homeData?.additionalInfo);
        setInclusion(homeData?.inclusion);
    }, [homeData])

    const handleBasic = (e) => {
        e.preventDefault();

        if (name === '' && img === '' && price === '' && tourDate === '' && tourLastDate === '' && tourArea === '' && stayLong === '') {
            setCount(1);
        } else if (name && img && price && tourDate && tourLastDate && tourArea && stayLong) {
            setCount(count + 1);
            setView(false);

        }

        if (name === '' || img === '' || price === '' || tourDate === '' || tourLastDate === '' || tourArea === '' || stayLong === '') {
            setView(true);
        }
    };

    const handleDetail = (e) => {
        e.preventDefault();
        if (description === '') {
            setCount(2);
            setView(true);
        } else {
            setCount(count + 1);
            setView(false);
        }
    };

    const handleItiner = (e) => {
        e.preventDefault();
        if (itineraries === '') {
            setCount(3);
            setView(true);
        } else {
            setCount(count + 1);
            setView(false);

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
        }


    };

    const handleAddition = (e) => {
        e.preventDefault();

        if (addition === '' && inclusion === '') {
            setCount(5);

        } else {
            setCount(count + 1);

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
            await axios.patch(`https://asssignment-10-server-delta.vercel.app/api/v1/homeEvents/${updateHomeId}`, allData)
                .then(res => {
                    setMessage(res.data);
                    console.log(res)
                });


            if (findBannerForUpdate?._id) {
                await axios.patch(`https://asssignment-10-server-delta.vercel.app/api/v1/bannerEvents/${findBannerForUpdate?._id}`, {
                    name: name,
                    bannerImg: img,
                    tourPrice: price,
                    tourDate: tourDate,
                    tourLastDate: tourLastDate
                })
                    .then(res => setMessage(res.data));

            }

            axios.patch('https://asssignment-10-server-delta.vercel.app/api/v1/userCarts/bulk-update', {
                ids: mappedFiltered,
                data: {
                    tourName: name,
                    tourLastDate: tourLastDate,
                    tourPrice: price,
                }
            }
            ).then(res => console.log(res));
            refetch();

        } catch (error) {
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

        navigate('/dashboard')
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

                    setImg(result?.data?.url);

                })
        }
    }, [imgContainer])
    return (
        <div>
            <br /><br />
            <div className="updateHomeMain">
                <div className="updateHeading">
                    <div className="updatePart"><span>basic info</span></div>
                    <div className="updatePart"><span>Description</span></div>
                    <div className="updatePart"><span>Itineraries</span></div>
                    <div className="updatePart"><span>Terms & Cond.</span></div>
                    <div className="updatePart"><span>Additional Info</span></div>
                </div>
                <div className="updateLine">
                    <div className={`${count === 1 && 'red'} linePart `}></div>
                    <div className={`${count === 2 && 'red'} linePart `}></div>
                    <div className={`${count === 3 && 'red'} linePart `}></div>
                    <div className={`${count === 4 && 'red'} linePart `}></div>
                    <div className={`${count === 5 && 'red'} linePart `}></div>
                </div>
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
                                                    <option value="">{tourArea}</option>
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
                                    value={description}
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
                                    value={itineraries}
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
                                    value={terms}
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
                                    value={addition}
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
                                    value={inclusion}
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
                                <p>if you update all information successfully. then procceed to update</p>
                                <input onClick={() => setCount(count - 1)} className='btn btn-primary finalMessageBackBtn' type="submit" value="BACK" />
                                <input className='btn btn-primary finalMessageBtn' type="submit" value="NEXT" />
                            </form>

                        </div>
                    }

                    {
                        count === 7 &&
                        <div className='finalMessageEvent'>
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
                                <input className='btn btn-primary finalMessageBtn' type="submit" value="GO DASHBOARD" />
                            </form>

                        </div>
                    }

                </div>

            </div>
        </div>
    );
};

export default UpdateHome;