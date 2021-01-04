import React from 'react';
import { GitHub, LinkedIn, PhoneAndroid, WhatsApp, ExpandLess} from '@material-ui/icons';


function Footer () {
    return(
        <div className="footer-section">
            <a href="https://github.com/khwanchaiwill"><GitHub style={{color: "black"}}/> </a>
            <a href="https://www.linkedin.com/in/khwanchai-phaipha-266885a7/"><LinkedIn /> </a>
            <a href="tel:+1740-648-7326"><PhoneAndroid /></a>
            <a href="https://wa.me/+17406487326"><WhatsApp/></a> 
            <p className="copyright">Copyright© {new Date().getFullYear()} All rights reserved</p> 
            <a smooth="true" href="#home" className="back-to-top">
                back to top {'  '}
                <ExpandLess />
            </a>    
        </div>
    )
}
export default Footer;