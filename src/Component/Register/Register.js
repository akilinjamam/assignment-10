import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Loading/Loading';
import SignInWith from '../SignInWith/SignInWith';
import signupImg from '../../images/signup-form-img.png'



const Register = () => {

    const [agree, setAgree] = useState(false)

    const [
        createUserWithEmailAndPassword,
        user

    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, error] = useUpdateProfile(auth);

    const navigate = useNavigate();



    if (updating) {
        return <Loading></Loading>
    }

    const handleRegister = async (event) => {
        event.preventDefault();

        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        // const agree = event.target.terms.checked


        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });

        navigate('/home')
    }



    const handleNavigate = () => {
        navigate('/login')
    }

    return (
        <div className='loginPlatform'>
            <div className='loginInfoContainer'>
                <div className="loginImgPart">
                    <img src={signupImg} alt="" />
                </div>
                <div className='loginMain'>
                    <h5 className='loginTitle'>Registration Form</h5>
                    <div className="loginInfoMain">
                        <Form onSubmit={handleRegister}>

                            <div className='loginInfo'>
                                <label>Name</label>
                                <input type="text" name='name' placeholder="Enter name" required />

                            </div>

                            <div className='loginInfo'>
                                <label>Email address</label>
                                <input type="email" name='email' placeholder="Enter email" required />

                            </div>

                            <div className='loginInfo'>
                                <label>Password</label>
                                <input type="password" name='password' placeholder="Password" required />
                            </div>

                            <p style={{ fontSize: '12px' }}>Already Account in Genius Car? <span style={{ cursor: 'pointer' }} className='text-danger' onClick={handleNavigate}  > Login </span> </p>

                            <SignInWith></SignInWith>
                            <div className='mx-auto'>
                                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />

                                <label className={`ps-2 ${agree ? 'text-primary' : 'text-danger'}`} style={{ fontSize: '12px' }} htmlFor="terms">Accepts Genius Cars Terms and Conditions</label>
                            </div>


                            <button disabled={!agree} className='btn btn-primary w-100' type='submit'>REGISTER</button>



                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;