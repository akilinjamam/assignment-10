import React, { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Login.css'
import Loading from '../../Loading/Loading';
import { Form, ToastContainer } from 'react-bootstrap';
import SignInWith from '../SignInWith/SignInWith';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location?.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    let errorElement;


    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth);


    // get user controll data from server;



    // const handleForgetPassword = async () => {
    //     const email = emailRef.current.value
    //     await sendPasswordResetEmail(email)
    //     alert('sent email')

    // }
    if (error || sending) {

        errorElement = <div>
            <p> Error: {error?.message}   </p>
        </div>

    }

    if (loading) {

        return <Loading></Loading>

        // theLoading = <div>
        //     <p>Loading...</p>
        // </div>

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value
        const password = passwordRef.current.value;
        console.log(email, password);

        signInWithEmailAndPassword(email, password)

    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleNavigate = event => {
        navigate('/register')
    }
    return (
        <div >
            <h3 className='loginTitle'>PLEASE LOGIN</h3>
            <div className='loginInfoContainer'>
                <div className="loginInfoMain">
                    <Form onSubmit={handleSubmit}>
                        <div className='loginInfo' >
                            <label>Email address: </label>
                            <input ref={emailRef} type="email" placeholder="Enter email" required />
                        </div>

                        <div className='loginInfo'>
                            <label>Password: </label>
                            <input ref={passwordRef} type="password" placeholder="Password" required />
                        </div>

                        <div className='loginOther'>
                            <p> <span style={{ cursor: 'pointer', fontSize: '13px' }} className='text-danger' onClick={handleNavigate}  > Register </span> </p>


                            <p>
                                <span style={{ cursor: 'pointer', fontSize: '13px' }} className='text-danger' onClick={async () => {
                                    const email = emailRef.current.value

                                    if (email) {
                                        await sendPasswordResetEmail(email);
                                        // toast('Sent email to your Gmail Account. please check it');
                                        alert('sent to your gmail account')
                                    } else {
                                        // toast('please enter your email address')
                                        alert('please enter your email address')
                                    }
                                }}   > create new password
                                </span>
                            </p>
                        </div>


                        <div>
                            <p style={{ fontSize: '12px', textAlign: 'center', color: 'red' }} > {errorElement} </p>

                        </div>
                        <SignInWith></SignInWith>
                        <ToastContainer />

                        <button className='btn btn-primary w-100' type='submit'>LOGIN</button>

                    </Form >
                </div>
            </div>
        </div >
    );
};


export default Login;