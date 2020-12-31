import { render } from '@testing-library/react';
import React from 'react';
import { Player } from 'video-react';
import firstProject from '../image/project1fix.mp4';
import thirdProject from '../image/second project.mp4';
import secondProject from '../image/3project.mp4';
import firstPic from '../image/2020-11-18 (28).png';
import secondPic from '../image/2020-12-30 (2).png';
import thirdPic from '../image/2020-12-30 (3).png';

function Project () {
    return(
        <div className="project">
            <div className="project-info">
               <h3>Project info</h3> 
            </div>
            
            <div className="project-video">
                  <Player
                    playsInline
                    poster={firstPic}
                    src={firstProject}
                    />
            </div>
            <div className="project-info">
               <h3>Project info</h3> 
            </div>
            <div className="project-video">
                  <Player
                    playsInline
                    poster={secondPic}
                    src={secondProject}
                    />
            </div>
            <div className="project-info">
               <h3>Project info</h3> 
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
