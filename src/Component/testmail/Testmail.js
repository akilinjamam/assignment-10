import React from 'react';
import './Testmail.css';
import { fetchPostMail } from '../../fetchData/fetchmailData';

const Testmail = () => {
    const handleMail = async (e) => {
        e.preventDefault();

        const mailData = {
            to: e.target.to.value,
            sub: e.target.sub.value,
            message: e.target.message.value,
        };

        await fetchPostMail(mailData).then(res => console.log(res?.data))

    }
    return (
        <div className='testmail'>
            <div className="mailContainer">


                <div className="mailInput">
                    <form onSubmit={handleMail}>

                        <input placeholder='to' type="text" name="to" id="" />
                        <br />

                        <input placeholder='subject' type="text" name="sub" id="" />
                        <br />

                        <input placeholder='message' type="text" name="message" id="" />
                        <br />
                        <br />
                        <button type='submit'> submit </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Testmail;