import React from 'react';
import { useState } from 'react';
import './AddEventsHome.css';

const AddEventsHome = () => {

    const [count, setCount] = useState(1);

    const handleBasic = () => {
        setCount(count + 1);
    }

    const handleDetail = () => {
        setCount(count + 1)
    }
    const handleItiner = () => {
        setCount(count + 1)
    }
    const handleTerms = () => {
        setCount(count + 1)
    }
    const handleAddition = () => {
        setCount(1)
    }



    return (
        <div className='addEventsHomeMain'>
            <div className='showStepsHome'>
                <div className={`${count === 1 ? 'blue' : 'gray'} stepHome1`}>
                    <span>Basic Info</span>
                </div>
                <div className={`${count === 2 ? 'blue' : 'gray'} stepHome2`}>
                    <span>Detail Info</span>
                </div>
                <div className={`${count === 3 ? 'blue' : 'gray'} stepHome3`}>
                    <span>Itineraries</span>
                </div>
                <div className={`${count === 4 ? 'blue' : 'gray'} stepHome4`}>
                    <span>Terms & Cond.</span>
                </div>
                <div className={`${count === 5 ? 'blue' : 'gray'} stepHome5`}>
                    <span>Additional Info</span>
                </div>
            </div>
            <hr />


            <div className='addEventsHomeAllInfo'>
                {
                    count === 1 &&
                    <div>
                        <form onSubmit={handleBasic} action="">
                            <div className='basicInfo'>
                                <div className='basicInfoPartOne'>
                                    <div>
                                        <label htmlFor="">Tour Name :</label>
                                        <input required type="text" name="" id="" />
                                    </div>
                                    <br />
                                    <div>
                                        <label htmlFor="">Tour Image :</label>
                                        <input required type="text" name="" id="" />
                                    </div>
                                    <br />
                                    <div>
                                        <label htmlFor="">Tour Price :</label>
                                        <input required type="text" name="" id="" />
                                    </div>
                                    <br />
                                    <div>
                                        <label htmlFor="">Tour Duration :</label>
                                        <input required type="text" name="" id="" />
                                    </div>
                                    <br />
                                    <div>
                                        <label htmlFor="">Tour Date :</label>
                                        <input required type="text" name="" placeholder='01 Jan, 2023' id="" />
                                    </div>
                                    <br />
                                </div>
                                <div className='basicInfoPartTwo'>


                                    <div>
                                        <label htmlFor="">Tour Registration Last Date :</label>
                                        <input required type="text" name="" placeholder='04 Jan, 2023' id="" />
                                    </div>
                                    <br />
                                    <div>
                                        <label htmlFor="">Tour Area :</label>
                                        <div>
                                            <select required name="" id="">
                                                <option value="">select...</option>
                                                <option value="">global</option>
                                                <option value="">home</option>
                                            </select>
                                        </div>
                                    </div>
                                    <br />
                                </div>
                            </div>
                            <div>
                                <input className='btn btn-primary btnHomeBasic' type="submit" value="NEXT" />
                            </div>
                        </form>
                    </div>
                }

                {
                    count === 2 &&
                    <div className='detailInfo'>
                        <form onSubmit={handleDetail} action="">
                            <textarea required placeholder='write detail here...' name="" id="" cols="105" rows="13"></textarea>
                            <div>
                                <input className='btn btn-primary btnHomeDetail' type="submit" value="NEXT" />
                            </div>
                        </form>
                    </div>
                }



                {
                    count === 3 &&
                    <div className='itinerariesInfo'>
                        <form onSubmit={handleItiner} action="">
                            <textarea required placeholder='write detail here...' name="" id="" cols="105" rows="13"></textarea>
                            <div>
                                <input className='btn btn-primary btnHomeDetail' type="submit" value="NEXT" />
                            </div>
                        </form>
                    </div>
                }

                {
                    count === 4 &&
                    <div className='termsAndConditions'>
                        <form onSubmit={handleTerms} action="">
                            <textarea required placeholder='write detail here...' name="" id="" cols="105" rows="13"></textarea>
                            <div>
                                <input className='btn btn-primary btnHomeDetail' type="submit" value="NEXT" />
                            </div>
                        </form>
                    </div>
                }

                {
                    count === 5 &&
                    <div className='additionalInfo'>
                        <form onSubmit={handleAddition} action="">
                            <textarea required placeholder='write detail here...' name="" id="" cols="105" rows="13"></textarea>
                            <div>
                                <input className='btn btn-primary btnHomeDetail' type="submit" value="NEXT" />
                            </div>
                        </form>
                    </div>
                }
            </div>

        </div>
    );
};

export default AddEventsHome;