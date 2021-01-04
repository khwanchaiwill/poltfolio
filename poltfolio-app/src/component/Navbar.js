
import React from 'react';
import { ContactMail, DeveloperMode, Home, Code } from '@material-ui/icons';
import { withStyles } from '@material-ui/styles'

const styles = theme => ({
    
    homeicon: {
        color: "white",
        fontSize: "2.5rem",
        '&:hover' : {
            color: "greenyellow",
            
        }
    }
})

function NavBar (props) {
    return (
        <div className="navigate">
            <a className="a-link" smooth="true" href="#home" title="Home page"> <Home  className={props.classes.homeicon} /><span className="span-view">Home </span> </a>
            <a className="a-link" smooth="true" href="#contact"  title="Contact info"> < ContactMail className={props.classes.homeicon}/> <span className="span-view">Contact</span></a>
            <a className="a-link" smooth="true" href="#project" title="Project section"> <DeveloperMode  className={props.classes.homeicon}/> <span className="span-view">Project </span></a>
            <a className="a-link" smooth="true" href="#skill" title="Skill section" > <Code className={props.classes.homeicon} /> <span className="span-view">Skill </span></a>
            
        </div>
    )
}
export default withStyles(styles) (NavBar);