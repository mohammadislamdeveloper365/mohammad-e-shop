import React, { Component } from 'react';
import Link from './Link';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <h1>Mohammad E-Shop</h1>
                <div>
                    <Link value="Order" className="header-link"/>
                    <Link value="Order Review" className="header-link"/>
                    <Link value="Manage Inventory" className="header-link"/>
                    <Link value="Login" className="header-link"/>
                </div>
            </div>
        );
    }
}

export default Header;
