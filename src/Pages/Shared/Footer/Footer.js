import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='d-flex justify-content-evenly ' >
            <small>copyright  ©yourTechGuy.ks.com </small>
            <small>All right reserved {year} </small>
        </footer >

    );
};

export default Footer;