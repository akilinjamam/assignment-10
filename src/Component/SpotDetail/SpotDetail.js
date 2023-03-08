import React, { useEffect, useState } from 'react';
import { Parallax } from 'react-parallax';
import { Link, useLocation, useParams } from 'react-router-dom';
import './SpotDetail.css'

const SpotDetail = () => {
    const [message, setMessage] = useState('');
    const [outletNumber, setOutletNumber] = useState(1);
    const [members, setMembers] = useState()
    const [data, setData] = useState([]);
    console.log(members);
    console.log(data)
    const { spotdetailId } = useParams()
    console.log(spotdetailId)

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
        return i.id == spotdetailId
    });

    console.log(findData);


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
                        <p><span>Tour Type:</span> {findData?.tourType}</p>
                        <p><span>Tour Duration:</span> {findData?.stayLong}</p>
                    </div>
                    <br />
                    <h4>PROCCED TO CHECKOUT</h4>
                    <div className='sidepartSelections'>

                        {
                            findData?.tourType === 'Family-Tour' &&
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
                            findData?.tourType === 'Couple-Tour' &&
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
                            findData?.tourType === 'Group-Tour' &&
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
                                    <option value="10">11</option>
                                    <option value="10">12</option>
                                    <option value="10">13</option>
                                    <option value="10">14</option>
                                    <option value="10">15</option>

                                </select>
                            </div>
                        }
                    </div>
                    <br /><br />
                    {!members && <p style={{ color: 'red' }}>please select any one option</p>}
                    <Link to='/checkout' ><button className={`${members ? '' : 'cursors'} ${!members && 'gray'} checkoutBtn `} disabled={members ? false : true} >NEXT</button></Link>

                </div>

            </div>
        </div>
    );
};

export default SpotDetail;

// <Link to='/checkout' className='d-block mx-auto btn btn-primary w-25' >Procced to Checkout</Link>