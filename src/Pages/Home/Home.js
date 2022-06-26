import React from 'react';
import mentor from '../../images/guy.jpg'
import Banner from '../Banner/Banner';
import Description from '../Shared/Description/Description';

const Home = () => {
    const style = {
        width: '80%',
        // height: '50%'
    }
    return (
        <div className=''>
            <div className='text-center bg-dark mentor'>
                <img style={style} src={mentor} className="img-fluid" alt="..."></img>
            </div>
            <Description></Description>
            <Banner></Banner>




        </div>
    );
};

export default Home;