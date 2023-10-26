import React from 'react';
import "./Header.css";

const Header = () => {
  return (
    <div className='header-container '>
    <div className="header-left">
    Jai Vikrant

    </div>
    <div className="header-right">
    <a className='newlink' href="#"><li className="Routerr" >Home</li></a>
    <a className='newlink' href="#about-id"><li className="Routerr" >About Me</li></a>
    <a className='newlink' href="#whatido-id"><li className="Routerr" >What I do?</li></a>
    <a className='newlink' href="#skills-id"><li className='Routerr'>Skills</li></a>
    <a className='newlink' href="#project-id"><li className="Routerr" >Projects</li></a>
    <a className='newlink' href="#contact-id"><li className='Routerr'>Contact</li></a>
 
    <li className='Resume'>
    <a className='Resume-1' href="/Assets/Resume/Reactresume.pdf" target="blank">Resume</a>
    </li>
    </div>
    </div>
  )
}

export default Header