import React, { useEffect, useRef } from 'react';
import './Test.css'

const Test = ({ deleteData, message, id, setId, setMessage }) => {


    // const openRef = useRef(null);
    const closeRef = useRef(null);


    useEffect(() => {
        if (message) {
            document?.getElementsByClassName('popup')[0].classList.add('active')
        }
    }, [message, id])


    closeRef?.current?.addEventListener('click', () => {
        document.getElementsByClassName('popup')[0].classList.remove('active');
        setId('');
        setMessage('')

    })

    return (
        <div className='main_modal'>
            <div className="popup center" >

                <div className="title">

                </div>
                <div className="description">
                    <p>Are you sure to delete {message}</p>
                </div>
                <div className="dismiss-btn">
                    <button ref={closeRef} id="dismiss-popup-btn">cancel</button>
                    <button onClick={() => deleteData(id)} id="dismiss-popup-btn">delete</button>
                </div>
            </div>
            {/* <div className="center">
                <button ref={openRef} onClick={() => handleData('its working')} id="open-popup-btn">open popup</button>
            </div> */}
        </div>
    );
};

export default Test;