import React from 'react';
import "./ProfileSection.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ProfileSection = () => {
  return (<>

   
          <div className='profileSection-container common-width'>

        <div className="profileSection-left ">
          <h1>Hi, I'm Jai Vikrant Yadav</h1>
          <p>A passionate Full Stack Software Developer 🚀 having a <br />
            special interest in Frontend technologies and experience of <br />
            building Web applications with JavaScript / Reactjs / Material UI <br />
            and some other cool libraries and frameworks.</p>
          <div className='profile-buttons'>
            <a className="Mylinks" href="https://www.linkedin.com/in/jai-vikrant-yadav-409353203/">
              <button ><LinkedInIcon />View on LinkedIn</button>
            </a>
          </div>
        </div>

        <div className="profileSection-right">
          <img className="ProfilePic" src="/Assets/Pictures/MyProfile.jpg" alt="Profile Pic" />
        </div>      
      </div>
      

    
     
      
  </>
  )
}

export default ProfileSection;