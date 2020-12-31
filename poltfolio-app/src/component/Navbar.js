import React from 'react';
import { NavLink } from 'react-router-dom';
function NavBar () {
    return (
        <div>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <a smooth href="#project">Project</a>
        </div>
    )
}
export default NavBar;