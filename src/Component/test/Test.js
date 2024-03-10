import React, { useRef, useState } from 'react';
import './Test.css'

const Test = () => {
    const [data, setData] = useState('');

    const handleData = (value) => {
        setData(value)
    }


    const openRef = useRef(null);
    const closeRef = useRef(null);

    openRef?.current?.addEventListener('click', () => {
        document.getElementsByClassName('popup')[0].classList.add('active')
    })

    closeRef?.current?.addEventListener('click', () => {
        document.getElementsByClassName('popup')[0].classList.remove('active')
    })

    return (
        <div>
            <div className="popup center" >
                <div className="icon">
                    <p>check icon</p>
                </div>
                <div className="title">
                    {data}
                </div>
                <div className="description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores nulla sunt incidunt! Dolores beatae dolorum debitis vero in veritatis, quaerat nesciunt, minima repellendus, fugiat cum amet obcaecati. Facilis, maiores magni?

                </div>
                <div className="dismiss-btn">
                    <button ref={closeRef} id="dismiss-popup-btn">dismiss</button>
                </div>
            </div>
            <div className="center">
                <button ref={openRef} onClick={() => handleData('its working')} id="open-popup-btn">open popup</button>
            </div>
        </div>
    );
};

export default Test;