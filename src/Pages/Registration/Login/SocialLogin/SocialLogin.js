import React from 'react';
import google from '../../../../images/Social/google.png'
import auth from '../../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../Shared/Spinner/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth); //another way to log into the site with google account
    const navigate = useNavigate();

    let errorElement;

    if (loading) {
        return <Loading></Loading>
    }


    if (error) {
        errorElement = <p className='text-danger'>Error:  {error?.message}</p>
    }

    if (user) {
        navigate('/') //if user account is previously logged in he will be redirected to the home page
    }
    return (
        <div>
            <div className='d-flex align-items-center my-2'>
                <div style={{ height: '2px' }} className='bg-secondary w-50'></div>
                <p className='m-3'>or</p>
                <div style={{ height: '2px' }} className='bg-secondary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-light
                     w-50  d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-3'>Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;