import React from 'react';
import './Header.css'
import logo from '../images/country-design-china-name.png'
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div className='link-container'>
                <a href="/Home">Home</a>
                <a href="/Details">Details</a>
                <a href="/About">About</a>
            </div>
        </div>
    );
};

export default Header;