import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDescription.css'

const ServiceDescription = ({ service }) => {
    const { name, img, price, about } = service;
    return (
        <div className='service'>
            <img src={img} className='w-50' alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{about}</small></p>
            <Link to='/checkout' className='btn btn-secondary'>Book:{name}</Link>
            {/*clicking on this button user will be redirected to the checkout route to review his books services  */}
        </div>
    );
};

export default ServiceDescription;