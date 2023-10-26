import React from 'react';
import "./Skills.css";
import SkillsCard from './SkillsCard';

const Myskills = [
    {
        id:1,
        Skill_Name: "HTML",
        Skill_img: "../Assets/Pictures/HTMLLOGO.png",
    },
    {
        id:2,
        Skill_Name:"CSS",
        Skill_img:"../Assets/Pictures/CSSLOGO.png",
    },
    {
        id:3,
        Skill_Name:"JavaScript",
        Skill_img:"../Assets/Pictures/JSLogo.png",
    },
    {
        id:4,
        Skill_Name:"React",
        Skill_img:"../Assets/Pictures/ReactLogo.png",
    },
    {
        id:5,
        Skill_Name:"Redux",
        Skill_img:"../Assets/Pictures/ReduxLogo.png",
    },
    {
        id:6,
        Skill_Name:"Github",
        Skill_img:"../Assets/Pictures/Github.png",
    },
    {
        id:7,
        Skill_Name:"Bootstrap5",
        Skill_img:"../Assets/Pictures/Bootstrap.png",
    },
    {
        id:8,
        Skill_Name:"Material UI",
        Skill_img:"../Assets/Pictures/MaterialUI.png",
    },
]


const Skills = () => {
    return (
        <>
          <div className="seperator" id="skills-id"></div>

        <div className="skills-container common-width" >
            <h2 className="skills-title">Skills🔥</h2>
            <div className="skills-underline"></div>
            <div className="skills-inner-container common-width">
            <SkillsCard MySkills={Myskills}/>


            </div>
        </div>
        </>
    )
}

export default Skills;