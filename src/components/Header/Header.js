import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    const hoverStyle = {
  background: 'white',
        color: 'black',
        borderRadius: '8px'
}
    return (
        <div className="navbar">
            <div className="container menu">
                    <div>
                        <h2>Nirjhar <span>Education</span></h2>
                 </div>
                  
                        <nav>
                            <NavLink activeStyle={hoverStyle} to="/home">Home</NavLink>
                            <NavLink activeStyle={hoverStyle} to="/about">About</NavLink>
                            <NavLink activeStyle={hoverStyle} to="/services">Services</NavLink>
                            <NavLink activeStyle={hoverStyle} to="/contact">Contact</NavLink>
                     </nav>
                   
               </div>
        </div>
    );
};

export default Header;