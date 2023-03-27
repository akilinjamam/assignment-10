import JoditEditor from 'jodit-react';
import React, { useRef } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './AddEventsAbroad.css';

const AddEventsAbroad = () => {
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

    console.log(allData)

    const [count, setCount] = useState(1);

    const navigate = useNavigate();

    const handleBasic = (e) => {
        e.preventDefault();

        if (name === '' && img === '' && price === '' && tourDate === '' && tourLastDate === '' && tourArea === '' && stayLong === '') {
            setCount(1);
        } else if (name && img && price && tourDate && tourLastDate && tourArea && stayLong) {
            setCount(count + 1);
            setView(false);
            setFillBasic(true);
        }

        if (name === '' || img === '' || price === '' || tourDate === '' || tourLastDate === '' || tourArea === '' || stayLong === '') {
            setView(true);
        }
    }

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



    }


    const handleFinal = () => {

        if (name && img && price && tourDate && tourLastDate && tourArea && stayLong && description && itineraries && terms && addition && inclusion) {
            setName('');
            setImg('');
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
        setCount(1)
    }
    return (
        <div className='addEventsGlobal'>
            <p className='globalTitle'>ADD GLOBAL EVENTS :</p>
            <div className='addEventsHomeMain'>

                <div className='showStepsAbroad'>
                    <div className={` ${fillBasic ? 'backgroundyellow' : 'gray'} stepAbroad1`}>
                        <span>Basic Info</span>
                    </div>
                    <div className={` ${fillDes ? 'backgroundyellow' : 'gray'} stepHome2`}>
                        <span>Detail Info</span>
                    </div>
                    <div className={` ${fillItineraries ? 'backgroundyellow' : 'gray'} stepAbroad3`}>
                        <span>Itineraries</span>
                    </div>
                    <div className={` ${fillTerms ? 'backgroundyellow' : 'gray'} stepAbroad4`}>
                        <span>Terms & Cond.</span>
                    </div>
                    <div className={` ${fillAdditionIn ? 'backgroundyellow' : 'gray'} stepAbroad5`}>
                        <span>Additional Info</span>
                    </div>
                </div>
                <div className='bottomLines'>
                    <div className={`${count === 1 && 'orange'} bottomLines`}>

                    </div>
                    <div className={`${count === 2 && 'orange'} bottomLines`}>

                    </div>
                    <div className={`${count === 3 && 'orange'} bottomLines`}>

                    </div>
                    <div className={`${count === 4 && 'orange'} bottomLines`}>

                    </div>
                    <div className={`${count === 5 && 'orange'} bottomLines`}>

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
                                            <label htmlFor="">Tour Image :</label>
                                            <div>
                                                <input required type="text" name="tourImg" value={img} onChange={(e) => setImg(e.target.value)} id="" />

                                            </div>
                                        </div>
                                        {(view && img === '') && <p style={{ textAlign: 'left', color: 'red', margin: '0', padding: '0', fontWeight: '200', fontSize: '13px' }}>please fillup the field...</p>}
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
                                                <input required type="text" name="tourDate" value={tourDate} onChange={(e) => setTourDate(e.target.value)} placeholder='01 Jan, 2023' id="" />

                                            </div>
                                        </div>
                                        {(view && tourDate === '') && <p style={{ textAlign: 'left', color: 'red', margin: '0', padding: '0', fontWeight: '200', fontSize: '13px' }}>please fillup the field...</p>}
                                        <br />
                                    </div>
                                    <div className='basicInfoPartTwo'>


                                        <div>
                                            <label htmlFor="">Tour Registration Last Date :</label>
                                            <div>
                                                <input required type="text" name="tourLastDate" value={tourLastDate} onChange={(e) => setTourLastDate(e.target.value)} placeholder='04 Jan, 2023' id="" />

                                            </div>
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
                                                    <option value="global">Global</option>
                                                </select>

                                            </div>
                                        </div>
                                        {(view && tourArea === '') && <p style={{ textAlign: 'left', color: 'red', margin: '0', padding: '0', fontWeight: '200', fontSize: '13px' }}>please choose any option...</p>}
                                        <br />
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '95%', margin: 'auto' }}>
                                    <input onClick={() => navigate('/dashboard')} className='btn btn-primary' type="submit" value="BACK" />
                                    <button onClick={handleBasic} className='btn btn-primary btnHomeBasic'>NEXT</button>
                                </div>
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
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '95%', margin: 'auto' }}>
                                    <input onClick={() => setCount(count - 1)} className='btn btn-primary btnHomeBasic' type="submit" value="BACK" />
                                    <input className='btn btn-primary btnHomeBasic' type="submit" value="NEXT" />
                                </div>
                            </form>
                            {/* <br />
                        <div dangerouslySetInnerHTML={{ __html: content }}>

                        </div> */}

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
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '95%', margin: 'auto' }}>
                                    <input onClick={() => setCount(count - 1)} className='btn btn-primary btnHomeBasic' type="submit" value="BACK" />
                                    <input className='btn btn-primary btnHomeBasic' type="submit" value="NEXT" />
                                </div>
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
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '95%', margin: 'auto' }}>
                                    <input onClick={() => setCount(count - 1)} className='btn btn-primary btnHomeBasic' type="submit" value="BACK" />
                                    <input className='btn btn-primary btnHomeBasic' type="submit" value="NEXT" />
                                </div>
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
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '95%', margin: 'auto' }}>
                                    <input onClick={() => setCount(count - 1)} className='btn btn-primary btnHomeBasic' type="submit" value="BACK" />
                                    <input className='btn btn-primary btnHomeBasic' type="submit" value="ADD TO DATABASE" />
                                </div>
                                <br />
                            </form>
                        </div>
                    }


                    {
                        count === 6 &&
                        <div className='finalMessageEvent'>
                            <form className='lastFormEvent' action="" onSubmit={handleFinal}>
                                <i class="uil uil-check-circle"></i>
                                <p>All IInformation Successfully added to Database</p>
                                <input className='btn btn-primary finalMessageBtn' type="submit" value="ADD NEW EVENT" />
                            </form>

                        </div>
                    }
                </div>

            </div>
        </div>
    );
};

export default AddEventsAbroad;