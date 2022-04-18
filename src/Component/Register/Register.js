import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Loading/Loading';
import SignInWith from '../SignInWith/SignInWith';

const Register = () => {

    const [agree, setAgree] = useState(false)

    const [
        createUserWithEmailAndPassword,
        user

    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, error] = useUpdateProfile(auth);

    const navigate = useNavigate()

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
        console.log('Updated profile');
        navigate('/home')
    }

    if (user) {
        console.log('user', user)
    }

    const handleNavigate = event => {
        navigate('/login')
    }


    return (
        <div style={{ border: '1px solid lightgray', borderRadius: '10px' }} className='mx-auto w-75 p-4'>
            <h2 className='text-center text-primary'>Please Register</h2>
            <Form onSubmit={handleRegister}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <p>Already Account in Genius Car? <span style={{ cursor: 'pointer' }} className='text-danger' onClick={handleNavigate}  > Login </span> </p>

                <SignInWith></SignInWith>
                <div className='mx-auto'>
                    <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                    {/* <label className={agree ? 'text-primary' : 'text-danger'} style={{ fontSize: '12px', marginLeft: '10px' }} htmlFor="terms">Accepts Genius Cars Terms and Conditions</label> */}
                    <label className={`ps-2 ${agree ? 'text-primary' : 'text-danger'}`} style={{ fontSize: '12px' }} htmlFor="terms">Accepts Genius Cars Terms and Conditions</label>
                </div>


                <Button disabled={!agree} className='d-block mx-auto' variant="primary" type="submit">
                    Submit
                </Button>



            </Form>
        </div>
    );
};

export default Register;