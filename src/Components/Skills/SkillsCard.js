import React from 'react';
import "./SkillsCard.css";

const SkillsCard = ({ MySkills }) => {
    return (
        <>
            {MySkills.map((skill) => {
                return <>
                    <div className="skill-container common-width">
                        <div className="skills-card-container  ">
                            <img className="SkillLogo" src={skill.Skill_img} alt="HTML Logo" />
                        </div>
                        <div className="skill-name"></div>

                    </div>
                </>
            })}
        </>

    )
}

export default SkillsCard;