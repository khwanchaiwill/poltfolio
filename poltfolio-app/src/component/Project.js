
import React from 'react';
import { Player } from 'video-react';
import firstProject from '../image/project1fix.mp4';
import thirdProject from '../image/second project.mp4';
import secondProject from '../image/3project.mp4';
import firstPic from '../image/2020-11-18 (28).png';
import secondPic from '../image/2020-12-30 (2).png';
import thirdPic from '../image/2020-12-30 (3).png';
import { airBnb, humanRight,expath } from '../../src/Data/DummyData.js';

function Project () {
    return(
        <div className="project">
            <div className="project-info">
                {
                    humanRight.map(human => {
                        return <div> 
                            <h2>{human.name} </h2>
                            <h3 className="h3-project-text">From {human.date} </h3>
                            <h4 className="h4-project-text">Project description</h4>
                            {human.description.map(des => {
                                return <div><h6 className="project-text"> • {des.name}</h6></div>
                            })} 
                            <a target="_blank" rel="noopener noreferrer" href={human.url}> Visit site </a>
                        </div>

                    })
                }

            </div>
            
            <div className="project-video">
                <Player
                    playsInline
                    poster={firstPic}
                    src={firstProject}
                />
            </div>
            <div className="project-info">
                {
                    airBnb.map(bnb => {
                        return <div> 
                            <h2>{bnb.name} </h2>
                            <h3 className="h3-project-text">From {bnb.date} </h3>
                            <h4 className="h4-project-text">Project description</h4>
                            {bnb.description.map(des => {
                                return <div><h6 className="project-text"> • {des.name}</h6></div>
                            })} 
                            <a target="_blank" rel="noopener noreferrer" href={bnb.url}> Visit site </a>
                        </div>

                    })
                }
            </div>
            <div className="project-video">
                  <Player
                    playsInline
                    poster={secondPic}
                    src={secondProject}
                    />
            </div>
            <div className="project-info">
                {
                    expath.map(journal => {
                        return <div> 
                            <h2>{journal.name} </h2>
                            <h3 className="h3-project-text">From {journal.date} </h3>
                            <h4 className="h4-project-text">Project description</h4>
                            {journal.description.map(des => {
                                return <div><h6 className="project-text"> • {des.name}</h6></div>
                            })} 
                            <a target="_blank" rel="noopener noreferrer" href={journal.url}> Visit site</a>
                        </div>

                    })
                }
            </div>
            <div className="project-video">
                  <Player
                    playsInline
                    poster={thirdPic}
                    src={thirdProject}
                    />
            </div>
          
        </div>
    )
}
export default Project;
