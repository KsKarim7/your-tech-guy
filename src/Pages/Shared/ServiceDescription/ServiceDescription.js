import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDescription.css'

const ServiceDescription = ({ service }) => {
    const { name, img, price, about } = service;
    return (
        <div className='shadow-lg p-3 mb-5  bg-body rounded text-center '>
            <img src={img} className='w-75' alt="" />
            <h2>{name}</h2>
            <p><span className='fs-5 fw-bold'>Price: </span>€ {price}</p>
            <p className='fs-5  p-3'>{about}</p>
            <Link to='/checkout' className='btn btn-secondary'><span className='fw-bold'> Book:</span> {name}</Link>
            {/*clicking on this button user will be redirected to the checkout route to review his books services  */}
        </div>
    );
};

export default ServiceDescription;