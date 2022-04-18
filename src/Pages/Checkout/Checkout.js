import React from 'react';
import thank from '../../images/thankYou.jpg'

const Checkout = () => {
    return (
        <div>
            <h2>Thank You for checking out.
                I appreciate your presence in my website.
            </h2>
            <img src={thank} className=" w-100 img-fluid" alt="..."></img>
        </div>
    );
};

export default Checkout;