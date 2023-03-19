import React, { useContext, useEffect, useState } from 'react';
import { Parallax } from 'react-parallax';
import { Link, useLocation, useParams } from 'react-router-dom';
import noteContext from '../../Context/noteContext';
import './SpotDetail.css'

const SpotDetail = () => {
    const [outletNumber, setOutletNumber] = useState(1);
    // const [tourType, setTourType] = useState('')
    const [data, setData] = useState([]);
    const [timeOver, setTimeOver] = useState(false)
    const { spotdetailId } = useParams()


    const routerPath = useLocation();
    const onTop = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        onTop()
    }, [routerPath])

    useEffect(() => {
        if (spotdetailId <= 8) {
            fetch('localService.json')
                .then(res => res.json())
                .then(res => setData(res))
        }
        if (spotdetailId >= 9) {
            fetch('globalService.json')
                .then(res => res.json())
                .then(res => setData(res))
        }
    }, [spotdetailId]);


    const findData = data?.find(i => {
        return i.id === parseInt(spotdetailId)
    });


    const state = useContext(noteContext);
    const setMembers = state.setMembers;
    const members = state.members;
    const lastDate = state?.name?.tourLastDate;
    const tourType = state.tourType;
    const setTourType = state.setTourType

    useEffect(() => {
        state.setName(findData,)
    }, [findData, state]);



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
    })



    return (
        <div id='#' >
            <Parallax className='forParallax' strength={300} bgImage={findData?.img}>
                <div className='imgDiv'>
                    <h1>{(findData?.name.toUpperCase())}</h1>
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
                            <div>

                            </div>
                        }
                        {
                            outletNumber === 2 &&
                            <div className='outLetInclusion'>
                                <p><span style={{ fontWeight: 'bold' }}>Bus Service :</span>  {findData?.busac}</p>
                                <p><span style={{ fontWeight: 'bold' }}>Breakfast :</span> {findData?.breakfastHifi}</p>
                                <p><span style={{ fontWeight: 'bold' }}>Lunch :</span> {findData?.lunchHifi}</p>
                                <p><span style={{ fontWeight: 'bold' }}>Dinner :</span> {findData?.dinnerHifi}</p>
                            </div>
                        }
                        {
                            outletNumber === 3 &&
                            <div className='outletItineraries'>
                                {
                                    findData?.description?.map(d => <p>{d}</p>)
                                }
                            </div>
                        }
                        {
                            outletNumber === 4 &&
                            <div>
                                hi Mother
                            </div>
                        }
                        {
                            outletNumber === 5 &&
                            <div>
                                hi Dear
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
                        <p><span>Last Date of Registration:</span> {lastDate}</p>

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
                    <h4>PROCCED TO CHECKOUT</h4>
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

                        <Link to='/checkout' ><button className={`${members ? '' : 'cursors'} ${!members && 'gray'} checkoutBtn `} disabled={members ? false : true} >NEXT</button></Link>
                    </div>
                    {timeOver && <p style={{ color: 'red' }}>Sorry! Registration Time is Over</p>}
                </div>

            </div>
        </div>
    );
};

export default SpotDetail;
