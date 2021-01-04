import React from 'react';
import { skillSet, languageSkill, otherSkill } from '../../src/Data/DummyData.js';


function Skills () {

    return(
        <div className="skill-section">
            <div className="tech-skill">
                <div className="skill-title">
                    <h4 className="text-title">Computer Tech skills</h4>
                </div>
                
                <div className="frontend-skill">
                    <h3 className="f-b">Front End</h3>
                    {
                        skillSet.map(skill => {
                            return <div key={skill.id}> {

                            }  <p className="skill-list"> <img className="icon-img" src={skill.src} width="45" alt={skill.src} /> {skill.frontEnd} </p>
                                
                            </div>
                            
                        })
                    }
                </div>
                <div className="backend-skill">
                    <h3 className="f-b">Back End</h3>
                    { 
                         skillSet.map(backend => {
                            return <div key={backend.id}> 
                                <p className="skill-list"> <img className="icon-img" src={backend.pics} width="45" alt="skill"/> {backend.backend} </p >
                            </div>
                        })
                    }
                </div>
            </div>
            <div className="other-skill">
                <div className="skill-title">
                    <h4 className="text-title">Language & other skills</h4>
                </div>
                <div className="backend-skill">
                    <h3 className="f-b">Language</h3>
                    {
                        languageSkill.map(lang => {
                            return <div key={lang.id}>
                                <p className="text-skill"> <img className="icon-img" src={lang.src} width="45" alt="skill"/> {lang.language} : {lang.level} </p>
                            </div>
                        })
                    }
                </div>
                <div className="backend-skill">
                    <h3 className="f-b">Other</h3>
                    {
                        otherSkill.map(other => {
                            return <div key={other.id}>
                                <p className="text-skill"> {other.other}</p>
                            </div>
                        })
                    }
                </div>

            </div>
        </div>
    )
}
export default Skills;
