import React from 'react';
// import thank from '../../images/thankYou.jpg'
import './Checkout.css'

const Checkout = () => {
    return (
        <div>
            {/* <h2>Thank You for checking out.
                I appreciate your presence in my website.
            </h2> */}
            {/* <img src={thank} className=" w-100 img-fluid" alt="..."></img> */}
            <div className='thank text-center pt-5 '>
                <h1>Thanks for checking out! <br />I appreciate your presence</h1>
            </div>

        </div>
    );
};

export default Checkout;