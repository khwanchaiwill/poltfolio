import React from 'react';
import { GitHub, Facebook, LinkedIn, PhoneAndroid, WhatsApp} from '@material-ui/icons';


function Footer () {
    return(
        <div className="footer-section">
            <h5>Footer go here</h5>
            <a href="https://www.facebook.com/profile.php?id=100001402268768"><Facebook /></a> 
            <a href="https://github.com/khwanchaiwill"><GitHub style={{color: "black"}}/> </a>
            <a href="https://www.linkedin.com/in/khwanchai-phaipha-266885a7/"><LinkedIn /> </a>
            <a href="tel:+1740-648-7326"><PhoneAndroid /></a>
            <a href="https://wa.me/+17406487326"><WhatsApp/></a>
            <div>
                <p> Copyright© {new Date().getFullYear()} All rights reserved</p>
            </div>    
        </div>
    )
}
export default Footer;