import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <h1>Mohammad E-Shop</h1>
                <div>
                    <Link to='/home' className="header-link">Home</Link>
                    <Link to='/inventory' className="header-link">Inventory</Link>
                    <Link to='/order' className="header-link">Order</Link>
                    <Link to='/' className="header-link">Login</Link>
                </div>
            </div>
        );
    }
}

export default Header;
