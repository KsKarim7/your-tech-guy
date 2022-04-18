import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import SocialLogin from '../Login/SocialLogin/SocialLogin';
// import SocialLogin from '../Login/SocialLogin/SocialLogin';
// import Loading from '../Shared/Loading/Loading';


const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user, loading] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const handleEmailBlur = e => {
        setEmail(e.target.value)
    }
    const handlePasswordBlur = e => {
        setPassword(e.target.value)
    }
    // if (loading || updating) {
    //     return <Loading></Loading>
    // }

    if (user) {
        navigate('/home');
    }

    const handleConfirmPasswordBlur = e => {
        setConfirmPassword(e.target.value)
    }


    const handleCreateUser = async (e) => {
        e.preventDefault();
        // const agree = e.target.terms.checked;


        if (password !== confirmPassword) {
            setError('both of your passwords do not match')
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 characters or longer')
            return;
        }
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: email });
        alert('Update profile')
        navigate('/home');
    }

    return (
        <div className='form-container d-flex justify-content-center'>
            <div className='form-title'>
                <h1 className='text-secondary'>Sign Up</h1>
                <form onSubmit={handleCreateUser}>
                    <div className="mb-3 ">
                        <label htmlFor='email' className="form-label" >Email address</label>
                        <input onBlur={handleEmailBlur} type="email" name='email' className="form-control" required />
                    </div>
                    <div className="mb-3 ">
                        <label className="form-label" htmlFor='password'>Password</label>
                        <input onBlur={handlePasswordBlur} type="password" className="form-control" name='password' required />
                    </div>
                    <div className="mb-3 ">
                        <label htmlFor='confirm-password' className="form-label">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" className="form-control" name='confirm-password' required />
                    </div>
                    <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                    <label className={agree ? 'text-secondary ps-2' : 'text-danger ps-2'} htmlFor="terms" > Accept terms and conditions</label>
                    {/* without accepting out site's given terms and condition no user can sign up to the site  */}
                    <p className='text-danger' >{error}</p>
                    <input
                        disabled={!agree}
                        className='form-submit bg-secondary '
                        type="submit"
                        value="Sign Up" />
                </form>
                <p className='d-flex justify-content-end user'>
                    Existing User?<Link className='text form-link mx-2' to='/login'>Log In</Link>
                </p>
                {/* If a is previously logged in then he will only log in instead of signing up */}
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;