import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div class="header">
            <img src={logo} alt=""/>
            <nav>
            <a href="#">Shop</a>
            <a href="#">Order Riview</a>
            <a href="#">Manage Inventory here</a>
            </nav>
        </div>
    );
};

export default Header;