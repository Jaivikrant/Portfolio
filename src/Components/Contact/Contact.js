import React from 'react';
import "./Contact.css";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
  return (
    <div id="contact-id" >
               <h2 className="whatido-title">Contact Me</h2>
               <div className="contact-me-underline"></div>

    <div className='contact-container'>
    
        <li className='Contact-item'>
        <div className="contact-icon">
            <LocalPhoneIcon fontSize='large'            />
        </div>
            <div className='contact-title'>Phone</div>
            <p className='contact-info'>+918864886461</p>
        </li>
        <li className='Contact-item'>
        <div className="contact-icon">
            <LinkedInIcon fontSize='large'/>
        </div>
            <div className='contact-title'>LinkedIn</div>
            <p className='contact-info'>jaivikrantyadav</p>
        </li>
        <li className='Contact-item'>
        <div className="contact-icon">
            <EmailIcon  
            fontSize='large'/>
        </div>
            <div className='contact-title'>Email</div>
            <p className='contact-info'>Ajayyaduvanshi21@gmail.com</p>
        </li>
        <li className='Contact-item'>
        <div className="contact-icon">
            <LocationOnIcon 
                fontSize='large'/>
        </div>
            <div className='contact-title'>Location</div>
            <p className='contact-info'>Gurugram</p>
        </li>


    </div>
    </div>
  )
}

export default Contact