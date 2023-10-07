import React from 'react';

const AddToCartRes = ({ queryUserCartData, handlePopup, handleEdit, nowTime, handleNavigate, user, setViewPopup, viewPopup, handleDelete, tourName, getAllPaymentData, navigate }) => {
    return (
        <div className='addToCartMainResContainer'>
            <div>
                <p style={{ textAlign: 'left', marginLeft: '15px', fontWeight: 'bold' }}>YOUR CART : {(user?.displayName).toUpperCase()} </p>
            </div>
            {
                queryUserCartData?.map(q => {
                    return (
                        <div key={q._id} className='addToCartMainRes'>
                            <section className='addToCartMainResModification'>
                                <p><i onClick={() => handlePopup(q?._id, q?.tourName)} class="uil uil-cancel"></i></p>
                                {((
                                    Math.floor(((new Date(q?.tourLastDate).getTime()) - (nowTime)) / (24 * 60 * 60 * 1000))
                                )
                                    &&
                                    (
                                        Math.floor(((new Date(q?.tourLastDate).getTime()) - (nowTime)) % (24 * 60 * 60 * 1000) / (1000 * 60 * 60))
                                    )
                                    &&
                                    (
                                        Math.floor(((new Date(q?.tourLastDate).getTime()) - (nowTime)) % (60 * 60 * 1000) / (1000 * 60))
                                    )
                                    &&
                                    (
                                        Math.floor(((new Date(q?.tourLastDate).getTime()) - (nowTime)) % (60 * 1000) / 1000)
                                    )
                                ) < 0
                                    ?
                                    <p ><i class="uil uil-ban"></i></p>
                                    :
                                    <p><i onClick={() => handleEdit(q?._id, q?.tourType, q?.totalMember)} class="uil uil-edit-alt"></i></p>
                                }
                            </section>
                            <section className='addToCartMainResInfo'>
                                <div className="addToCartMainResInfoPart1">
                                    <p>Name : <span >{q?.tourName}</span></p>
                                    <p>Tour-Type : <span>{q?.tourType}</span></p>
                                    <p>Member : <span>{q?.totalMember}</span></p>
                                    <p>Total-Price : <span>{q?.tourPrice * q?.totalMember}</span></p>
                                    <p>Price/P : <span>{q?.tourPrice}</span></p>
                                    <p>30% for Booking : <span>{((q?.tourPrice * q?.totalMember) * 30) / 100}</span></p>
                                </div>
                                <div className="addToCartMainResInfoPart2">
                                    <p>Duration : <span>{q?.tourDuration}</span></p>
                                    <p>Tour-Date : <span >{q?.tourDate}</span></p>
                                    <p>Last-Date : <span >{q?.tourLastDate}</span></p>
                                    <p>Status : <span>{
                                        (getAllPaymentData?.find(f => {
                                            return f?.tourId === q?._id
                                        })?.isPaid === true)
                                            ?
                                            <span
                                                onClick={() => navigate('/addToCart/paidDoc')}
                                                style={{
                                                    fontStyle: 'italic', fontSize: '12px', color: 'green', fontWeight: 'bold', cursor: 'pointer'
                                                }}
                                            >paid</span>
                                            :
                                            <span
                                                style={{
                                                    fontStyle: 'italic', fontSize: '12px', color: 'red', fontWeight: 'bold'
                                                }}
                                            >unpaid</span>
                                    }</span></p>
                                </div>
                            </section>

                            <section className='addToCartMainResNavigate'>
                                {((
                                    Math.floor(((new Date(q?.tourLastDate).getTime()) - (nowTime)) / (24 * 60 * 60 * 1000))
                                )
                                    &&
                                    (
                                        Math.floor(((new Date(q?.tourLastDate).getTime()) - (nowTime)) % (24 * 60 * 60 * 1000) / (1000 * 60 * 60))
                                    )
                                    &&
                                    (
                                        Math.floor(((new Date(q?.tourLastDate).getTime()) - (nowTime)) % (60 * 60 * 1000) / (1000 * 60))
                                    )
                                    &&
                                    (
                                        Math.floor(((new Date(q?.tourLastDate).getTime()) - (nowTime)) % (60 * 1000) / 1000)
                                    )
                                ) < 0
                                    ?
                                    <p style={{ color: 'red' }}> <span className='cartDetail'>checkout time over</span> </p>
                                    :
                                    <p><button onClick={() => handleNavigate(q._id)} className='btn-outline'> <span className='cartDetail'>
                                        {
                                            (getAllPaymentData?.find(f => {
                                                return f?.tourId === q?._id
                                            })?.isPaid === true)
                                                ?
                                                <span style={{ fontSize: '13px' }}>done</span>
                                                :
                                                <span
                                                    onClick={() => handleNavigate(q?._id, q?.tourName)}
                                                    className='cartDetail'>
                                                    Procced to checkout
                                                </span>

                                        }
                                    </span> </button></p>

                                }
                            </section>
                        </div>
                    )
                })
            }

            <div className={` ${viewPopup ? 'block' : 'none'}`}>
                <div className='popupCart'>
                    <div className="popupContainer">
                        <div className='popup-wrappper'>
                            <div>
                                <p className='popup-delete-title'>Are you sure to delete  this event <span style={{ color: 'yellow', fontWeight: 'bold' }}>{tourName}</span>  from your cart ?</p>
                                <div className='popupCart-btn'>
                                    <button onClick={() => setViewPopup(false)} className='btn btn-secondary'>Cancel</button>
                                    <button onClick={handleDelete} className='btn btn-primary'>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddToCartRes;