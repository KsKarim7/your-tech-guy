import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import './BannerDetails.css'

const BannerDetails = ({ review }) => {
    const { name, picture, rating, reviews } = review
    return (
        <div className='shadow-lg p-2 rounded-left review '>
            <div className=' d-flex align-items-center'>
                <img src={picture} className='picture' alt="" />
                <h6 className='ps-2 pt-2'>{name}</h6>
            </div>
            <p> <small>{reviews}</small></p>
            <p className='fs-6'> Rating: {rating} <FontAwesomeIcon className='icon' icon={faStar} ></FontAwesomeIcon></p>
            {/* <Link to='/checkout' className='btn btn-secondary'><span className='fw-bold'> Book:</span> {name}</Link> */}
            {/*clicking on this button user will be redirected to the checkout route to review his books services  */}
        </div>
    );
};

export default BannerDetails;