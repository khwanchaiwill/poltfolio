
import React from 'react';
import { ContactMail, DeveloperMode, Home, Code, ListAlt } from '@material-ui/icons';
import { withStyles } from '@material-ui/styles'

const styles = theme => ({ 

    homeicon: {
        color: "white",
        fontSize: "2.5rem",
        '&:hover' : {
            color: "greenyellow",
            
        },
        
    }, 
    design: {
        color: "white",
        fontSize: "1.5rem",
        '&:hover' : {
            color: "greenyellow",
            
        },
    },
    
}) 


function NavBar (props) {
    
    return (
        
           
            <div className="navigate"> 
                <a className="a-link" href="#home" title="Home page">
                    <span className="icon">
                        <Home  className={props.classes.homeicon} />
                    </span>
                    <span className="span-view">Home</span>
                    <span className="design">
                        <Home  className={props.classes.design} />
                    </span>
                </a>
                <a className="a-link" href="#contact"  title="Contact info">
                    <span className="icon">
                        < ContactMail className={props.classes.homeicon}/>
                    </span> 
                    <span className="span-view">Contact</span>
                    <span className="design">
                        <ContactMail  className={props.classes.design} />
                    </span>
                </a>
                <a className="a-link" href="#project" title="Project section">
                    <span className="icon">
                        <DeveloperMode  className={props.classes.homeicon}/>
                    </span> 
                    <span className="span-view">Project </span>
                    <span className="design">
                        <DeveloperMode  className={props.classes.design} />
                    </span>
                </a>
                <a className="a-link" href="#skill" title="Skill section" >
                    <span className="icon">
                        <Code className={props.classes.homeicon} />
                    </span> 
                    <span className="span-view">Skill </span>
                    <span className="design">
                        <Code  className={props.classes.design} />
                    </span>
                </a>
                <a target="_blank" rel="noopener noreferrer" className="a-link" href="https://drive.google.com/file/d/1Z6GkqadCmy17hpOaDMgLhuQa6hCcyYy6/view?usp=sharing" title="Resume" >
                    <span className="icon">
                        <ListAlt className={props.classes.homeicon} />
                    </span> 
                    <span className="span-view">Resume </span>
                    <span className="design">
                        <ListAlt   className={props.classes.design} />
                    </span>
                </a>
            </div>
       
    )
}
export default withStyles(styles) (NavBar);