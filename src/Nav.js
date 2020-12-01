import React from 'react';
import {NavLink} from 'react-router-dom';



const Nav = () => {
    return (
        <nav className="nav">
            <h3 className="logo">MyReads</h3>
            <ul className="nav-list">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/search">Search</NavLink>
                </li>
            </ul> 
        </nav>
    )
}

export default Nav
