import React, { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Login.css'
import Loading from '../../Loading/Loading';
import { toast } from 'react-toastify';
import { Button, Form, ToastContainer } from 'react-bootstrap';
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
        <div style={{ border: '1px solid lightgray', borderRadius: '10px' }} className='mx-auto w-75 p-4 login'>
            <h2 className='text-center text-primary'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <p>New to Genius Car? <span style={{ cursor: 'pointer', fontSize: '13px' }} className='text-danger' onClick={handleNavigate}  > Register </span> </p>


                <p> forget your password? <span style={{ cursor: 'pointer', fontSize: '13px' }} className='text-danger' onClick={async () => {
                    const email = emailRef.current.value

                    if (email) {
                        await sendPasswordResetEmail(email);
                        toast('Sent email to your Gmail Account. please check it');
                    } else {
                        toast('please enter your email address')
                    }
                }}   > create new password </span> </p>



                <div>
                    <p style={{ fontSize: '12px', textAlign: 'center', color: 'red' }} > {errorElement} </p>

                </div>
                <SignInWith></SignInWith>
                <ToastContainer />


                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button className='d-block mx-auto' variant="primary" type="submit">
                    Submit
                </Button>



            </Form >
        </div >
    );
};


export default Login;