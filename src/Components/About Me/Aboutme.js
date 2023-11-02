import React from 'react';
import "./Aboutme.css";


const Aboutme = () => {
  return (
    <div>
        <div className="about-me-heading">
          About Me
       
        </div>
    <div className="About-me-container common-width" id="about-id">
      <div className="about-me-left">
      <img className="About-me-image" src="https://emojigraph.org/media/emojidex/man-technologist_1f468-200d-1f4bb.png" alt="Emoji" />
      </div>
      <div className="about-me-right">
        <div>
        <p className='pp'> I am a Frontend Developer who is graduated from JSS Academy of Technical Education,Noida in Electrical Engineering. I have exprience using HTML5 CSS3 Javascript and React to build accessible component-based web pages and systems.
Ability to deliver quality results while collaborating in rapidly changing work environments and team compositions.
A passionate person willing to learn more technologies to become a better developer than I was yesterday. So determined and result orietend.</p>
        </div>
      </div>
    </div>
    
    </div>
  )
}

export default Aboutme;