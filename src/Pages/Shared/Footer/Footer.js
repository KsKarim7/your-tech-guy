import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faWhatsapp, faTwitch, faTwitter, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        // <footer className='d-flex justify-content-evenly footer' >
        //     <small>copyright  ©yourTechGuy.ks.com </small>
        //     <small>All right reserved {year} </small>
        // </footer >
        <footer className='bg-dark text '>
            <div className="content">
                <h3>Your Tech Guy</h3>
                <p>Your Tech Guy, Inc. is a for-profit massive open online course provider aimed at professional adults and students. It was founded in May 2010 by KS.</p>
                <ul className="socials">
                    <li><a href="#"> <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon> </a></li>
                    <li><a href="#"> <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon> </a></li>
                    <li><a href="#"> <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> </a></li>
                    <li><a href="#"> <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon> </a></li>
                    <li><a href="#"> <FontAwesomeIcon icon={faTwitch}></FontAwesomeIcon> </a></li>
                    <li><a href="#"> <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon> </a></li>
                </ul>
            </div>
            <div className="foot">
                <small>copyright  ©yourTechGuy.ks.com </small>
                <small>All right reserved {year} </small>
            </div>
        </footer>
    );
};

export default Footer;