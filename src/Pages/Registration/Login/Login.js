import React, { useRef, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import auth from '../../../firebase.init';
// import SocialLogin from './SocialLogin/SocialLogin';
// import Loading from '../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'bootstrap';
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/home';
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }
    const handlePasswordBlur = e => {
        setPassword(e.target.value);
    }

    // if (loading || sending) {
    //     return <Loading></Loading>
    // }

    if (user) {
        navigate(from, { replace: true })

    }
    if (error) {
        errorElement = <p className='text-danger'>Error:  {error?.message} </p>

    }

    const handleUserLogin = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)

    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email')
        }
        else {
            toast('enter an email address first')
        }
    }

    return (
        <div className='form-container d-flex justify-content-center'>
            <div className='form-title ' >
                <h1 className='text-secondary'>Login</h1>
                <form onSubmit={handleUserLogin}>
                    <div className="mb-3 ">
                        <label htmlFor='email' className="form-label">Email address</label>
                        <input ref={emailRef} onBlur={handleEmailBlur} type="email" name='email' className="form-control" required />
                    </div>
                    <div className="mb-3 ">
                        <label className="form-label" htmlFor='password'>Password</label>
                        <input onBlur={handlePasswordBlur} type="password" className="form-control" required />
                    </div>
                    <p className='text-danger'>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input className='form-submit bg-secondary ' type="submit" value="Login" required />
                </form>
                {errorElement}
                <p className='d-flex justify-content-end user'>
                    Already a user?  <Link className='text form-link mx-2' to='/register'>Create an account!</Link>
                </p>
                <p className='d-flex justify-content-end'>
                    Forget Password?  <button onClick={resetPassword} className='btn btn-link text-primary form-link mx-2' >Reset Password</button>
                </p>
                <SocialLogin></SocialLogin>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;