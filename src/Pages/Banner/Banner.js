import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BannerDetails from './BannerDetails';

const Banner = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div >
            <h2 className='text-center fs-1  my-5'>Some reviews of our students</h2>
            <div className='services-container container'>
                {
                    reviews.map(review => <BannerDetails
                        key={review.id}
                        review={review}
                    ></BannerDetails>)
                }

            </div>
        </div>
    );
};

export default Banner;