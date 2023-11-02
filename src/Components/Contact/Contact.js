import React from 'react';
import "./Contact.css";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
  return (
    <div id="contact-id" >
               <h2 className="whatido-title common-width">Contact Me</h2>
               <div className="contact-me-underline"></div>

    <div className='contact-container'>
    
        <a className='newlink' href="#">
        <li className='Contact-item'>
        <div className="contact-icon"><LocalPhoneIcon fontSize='large'/></div>
        <div className='contact-title'>Phone</div>
        <p className='contact-info'>+918864886461</p>
        </li>
        </a>

        <a className='newlink' href='https://www.linkedin.com/in/jai-vikrant-yadav-409353203/' target='blank'>
        <li className='Contact-item'>
        <div className="contact-icon"><LinkedInIcon fontSize='large'/></div>
        <div className='contact-title'>LinkedIn</div>
        <p className='contact-info'>jaivikrantyadav</p>
        </li>
        </a>

        <a className='newlink' href="#">
        <li className='Contact-item'>
        <div className="contact-icon"><EmailIcon fontSize='large'/></div>
        <div className='contact-title'>Email</div>
        <p className='contact-info'>Ajayyaduvanshi21@gmail.com</p>
        </li>
        </a>

        <a className='newlink' href="#">
        <li className='Contact-item'>
        <div className="contact-icon"><LocationOnIcon fontSize='large'/></div>
        <div className='contact-title'>Location</div>
        <p className='contact-info'>Gurugram</p>
        </li>
        </a>

    </div>
    </div>
  )
}

export default Contact