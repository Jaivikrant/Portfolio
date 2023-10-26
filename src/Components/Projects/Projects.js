import React from 'react';
import "./Projects.css";
import desimeals from "../Pictures2/Desimeals.png";

const Projects = () => {
  return (
    <div className="common-width" className="project-main" id="project-id">
    <h2 class="project-title">Projects 💻 </h2>
    <div className="project-underline"></div>
    <div className="project-container">
    <a className="project-link" href="https://taupe-pastelito-9e63a6.netlify.app/" target="blank">

    <div className="main-project">
      <img src={desimeals} className='meal-img' alt="Desi-meals" />
      <h2>Food Cart</h2>
      <span className='span'>You can Search the food items from the list and add to cart and order them by checkout. </span>
    </div>
   
    </a>
    </div>

    

    </div>
  )
}

export default Projects;