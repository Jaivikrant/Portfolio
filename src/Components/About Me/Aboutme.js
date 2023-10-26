import React from 'react';
import "./Aboutme.css";
import WhatIdo from '../WhatIdo/WhatIdo';
import Skills from '../Skills/Skills';

const Aboutme = () => {
  return (
    <div>
    <div className="About-me-container common-width" id="about-id">
      <div className="about-me-left">
      <img className="About-me-image" src="https://emojigraph.org/media/emojidex/man-technologist_1f468-200d-1f4bb.png" alt="Emoji" />
      </div>
      <div className="about-me-right">
        <div className="about-me-heading">
          About Me
        <div className="about-me-underline"></div>
        </div>
        <div>
        <p> I am a Computer Scientist who just graduated from the premier IT university COMSATS University Islamabad in Computer Science Majors. I am a highly skilled professional developer who loves to take on the challenges and then solve them.
           While doing my graduation, I had the pleasure of working for some amazing companies like Starbucks. I worked on a portion of their website for their Trinidad and Tobago website. I also worked with Nastech Group of companies as a freelance web developer. Nastech is a giant in IT and cabling sector in Middle Eastern countries. I have also worked with TechnoSpark on React and NextJS technologies.
           Communities</p>
        </div>
      </div>
    </div>
    <WhatIdo/>
    <Skills/>
    </div>
  )
}

export default Aboutme;