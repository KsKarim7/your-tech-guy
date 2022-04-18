import React from 'react';
import programming from '../../images/prog.jpeg'
import Banner from '../Banner/Banner';
import Description from '../Shared/Description/Description';

const Home = () => {
    return (
        <div>
            <div className='text-center bg-dark '>
                <img src={programming} className="img-fluid" alt="..."></img>

            </div>
            <Description></Description>





        </div>
    );
};

export default Home;