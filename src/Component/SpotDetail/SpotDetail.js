import React, { useContext, useEffect, useState } from 'react';
import { Parallax } from 'react-parallax';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import noteContext from '../../Context/noteContext';
import './SpotDetail.css'
import { useQuery } from 'react-query';
import fetchHomeData from '../../fetchData/fetchHomeData';
import fetchGlobalData from '../../fetchData/fetchGlobalData';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';

const SpotDetail = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    const emailName = user?.displayName;
    console.log(user?.email)
    const [outletNumber, setOutletNumber] = useState(1);
    const [timeOver, setTimeOver] = useState(false);
    const navigate = useNavigate();
    const { spotdetailId } = useParams()
    const [findData, setFindData] = useState();
    console.log(findData);

    const routerPath = useLocation();

    const onTop = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        onTop()
    }, [routerPath]);

    const homeQuery = useQuery({ queryKey: ['fetchHomeData'], queryFn: () => fetchHomeData() });
    const globalQuery = useQuery({ queryKey: ['fetchGlobalData'], queryFn: () => fetchGlobalData() })


    const homeDatas = homeQuery?.data?.data?.result
    const globalDatas = globalQuery?.data?.data?.result


    const state = useContext(noteContext);
    const setMembers = state.setMembers;
    const members = state.members;
    const lastDate = state?.name?.tourLastDate;
    const tourType = state.tourType;
    const setTourType = state.setTourType;


    const homeData = homeDatas?.find(i => {
        return i._id === spotdetailId
    });
    const globalData = globalDatas?.find(i => {
        return i._id === spotdetailId
    });

    console.log(homeData)
    console.log(globalData)


    useEffect(() => {
        state.setName(findData,)
    }, [findData, state]);

    useEffect(() => {
        if (homeData?.tourArea === 'home') {
            setFindData(homeData)
        }
        if (globalData?.tourArea === 'global') {
            setFindData(globalData)
        }
    }, [homeData, globalData])

    const [timerDays, setTimerDays] = useState(0);
    const [timerHours, setTimerHours] = useState(0);
    const [timerMinutes, setTimerMinutes] = useState(0);
    const [timerSeconds, setTimerSeconds] = useState(0);


    let interval;

    const startTimer = (dynamicDate) => {
        const countDate = new Date(dynamicDate).getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();

            const distance = countDate - now;

            const days = Math.floor(distance / (24 * 60 * 60 * 1000));
            const hours = Math.floor(distance % (24 * 60 * 60 * 1000) / (1000 * 60 * 60))
            const minutes = Math.floor(distance % (60 * 60 * 1000) / (1000 * 60))
            const seconds = Math.floor(distance % (60 * 1000) / 1000)

            if (distance < 0) {
                clearInterval(interval.current);
                setTimeOver(true);
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        })
    }


    useEffect(() => {
        if (findData) {
            startTimer(findData?.tourLastDate);
        }
    });


    const handleCart = async (e) => {
        e.preventDefault();
        navigate('/addToCart')
        try {
            const result = await axios.post('https://assignment-10-server.onrender.com/api/v1/userCarts', {
                email: email,
                emailName: emailName,
                tourName: findData?.name,
                tourImg: findData?.img,
                tourArea: findData?.tourArea,
                tourType: tourType,
                tourPrice: findData?.price,
                tourLastDate: findData?.tourLastDate,
                totalMember: members,
                tourDuration: findData?.stayLong
            })
                .then(response => console.log(response));
            console.log(result);
        } catch (error) {
            console.log(error.message)
        }

        setMembers('');


    };

    console.log(findData)


    return (
        <div>
            <div id='#' >
                <Parallax className='forParallax' strength={300} bgImage={findData?.img}>
                    <div className='imgDiv'>
                        <h1>{(findData?.name?.toUpperCase())}</h1>
                        <p>{findData?.stayLong}</p>
                    </div>
                </Parallax>

                <div className='spotDetailInfo'>

                    <div className='outletpart'>
                        <section className='spotDetailBtn'>
                            <div onClick={() => setOutletNumber(1)} className={outletNumber === 1 ? 'crimson' : 'yellow'} >Detail</div>
                            <div onClick={() => setOutletNumber(2)} className={outletNumber === 2 ? 'crimson' : 'yellow'}>Inclusion</div>
                            <div onClick={() => setOutletNumber(3)} className={outletNumber === 3 ? 'crimson' : 'yellow'}>Itineraries</div>
                            <div onClick={() => setOutletNumber(4)} className={outletNumber === 4 ? 'crimson' : 'yellow'}>Additional Info</div>
                            <div onClick={() => setOutletNumber(5)} className={outletNumber === 5 ? 'crimson' : 'yellow'}>Terms & Conditions</div>
                        </section>
                        <br />
                        <section>
                            {
                                outletNumber === 1 &&
                                <div style={{ padding: '10px' }}>
                                    <div dangerouslySetInnerHTML={{ __html: findData?.description }}>

                                    </div>
                                </div>
                            }
                            {
                                outletNumber === 2 &&
                                <div style={{ padding: '10px' }}>
                                    <div dangerouslySetInnerHTML={{ __html: findData?.inclusion }}>

                                    </div>
                                </div>
                            }
                            {
                                outletNumber === 3 &&
                                <div style={{ padding: '10px' }}>
                                    <div dangerouslySetInnerHTML={{ __html: findData?.itineraries }}>

                                    </div>
                                </div>
                            }
                            {
                                outletNumber === 4 &&
                                <div style={{ padding: '10px' }}>
                                    <div dangerouslySetInnerHTML={{ __html: findData?.additionalInfo }}>

                                    </div>
                                </div>
                            }
                            {
                                outletNumber === 5 &&
                                <div style={{ padding: '10px' }}>
                                    <div dangerouslySetInnerHTML={{ __html: findData?.termsAndConditions }}>

                                    </div>
                                </div>
                            }
                        </section>
                    </div>

                    <div className='sidePart'>
                        <h4>TOUR SUMMERY</h4>

                        <div className='sidepartSummery'>
                            <p><span>Tour Name:</span> {findData?.name}</p>
                            <p><span>Tour Duration:</span> {findData?.stayLong}</p>
                            <p><span>Tour Cost/person:</span> {findData?.price}</p>
                            <p><span>Tour Date(yy/mm/dd) :</span> {findData?.tourDate}</p>
                            <p><span>Last Date of Registration(yy/mm/dd) :</span> {lastDate}</p>

                            <div className='remainingDatesContainer'>
                                <h6>REMAINING TIMES OF REGISTRATION :</h6>
                                <div className='remainingDates'>
                                    <div className='timersDiv'>
                                        <p className='timers'>{(timerDays.toString()).length === 1 && '0'}{timerDays}</p>
                                        <p className='timeLetter'>DAYS</p>
                                    </div>
                                    <h5>:</h5>
                                    <div className='timersDiv'>
                                        <p className='timers'>{(timerHours.toString()).length === 1 && '0'}{timerHours} </p>
                                        <p className='timeLetter'>HOURS</p>
                                    </div>
                                    <h5>:</h5>
                                    <div className='timersDiv'>
                                        <span></span>
                                        <p className='timers'>{(timerMinutes.toString()).length === 1 && '0'}{timerMinutes} </p>
                                        <p className='timeLetter'>MINUTES</p>
                                    </div>
                                    <h5>:</h5>
                                    <div className='timersDiv'>
                                        <p className='timers'>{(timerSeconds.toString()).length === 1 && '0'}{timerSeconds}</p>
                                        <p className='timeLetter'>SECONDS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />

                        <h4>BOOK EVENT</h4>
                        <br />
                        <div className={`${timeOver ? 'none' : 'block'} sidepartSelections`}>
                            <label htmlFor="">Please Select Tour Type :</label>
                            <select name="" id="" onChange={(e) => {
                                const option = e.target.value;
                                setTourType(option)
                            }}>
                                <option value="">select here...</option>
                                <option value="Single-Tour">Single-Tour</option>
                                <option value="Couple-Tour">Couple-Tour</option>
                                <option value="Family-Tour">Family-Tour</option>
                                <option value="Group-Tour">Group-Tour"</option>

                            </select>
                        </div>
                        <br />
                        <div className={timeOver ? 'none' : 'block'}>
                            <div className='sidepartSelections'>

                                {tourType === 'Single-Tour' &&
                                    <div>
                                        <label htmlFor=""> Select '1' as a single person  :</label>
                                        <select name="" id="" onChange={(e) => {
                                            const option = e.target.value;
                                            setMembers(option)
                                        }}>
                                            <option value="">select here...</option>
                                            <option value="1">1</option>
                                        </select>
                                    </div>
                                }

                                {
                                    tourType === 'Family-Tour' &&
                                    <div>
                                        <label htmlFor="">Select Number of Family Memebers (including you) :</label>
                                        <select name="" id="" onChange={(e) => {
                                            const option = e.target.value;
                                            setMembers(option)
                                        }}>
                                            <option value="">select here...</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </select>
                                    </div>
                                }
                                {
                                    tourType === 'Couple-Tour' &&
                                    <div>
                                        <label htmlFor="">Select '2' as a couple :</label>
                                        <select name="" id="" onChange={(e) => {
                                            const option = e.target.value;
                                            setMembers(option)
                                        }}>
                                            <option value="">select here...</option>
                                            <option value="2">2</option>

                                        </select>
                                    </div>
                                }
                                {
                                    tourType === 'Group-Tour' &&
                                    <div>
                                        <label htmlFor="">Select Number of Group Memebers (including you) :</label>
                                        <select name="" id="" onChange={(e) => {
                                            const option = e.target.value;
                                            setMembers(option)
                                        }}>
                                            <option value="">select here...</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>

                                        </select>
                                    </div>
                                }
                            </div>
                            <br /><br />
                            {!members && <p style={{ color: 'red' }}>please select any one option</p>}


                            <button onClick={handleCart}
                                className={`${members ? '' : 'cursors'} ${!members && 'gray'} checkoutBtn `}
                                disabled={members ? false : true}
                                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '38%' }}>
                                    <span><i className="uil uil-shopping-cart"></i></span>
                                    <span>ADD TO CART</span>
                                </div>
                            </button>

                        </div>
                        {timeOver && <p style={{ color: 'red' }}>Sorry! Registration Time is Over</p>}
                    </div>

                </div>
            </div>

        </div>
    );
};

export default SpotDetail;
