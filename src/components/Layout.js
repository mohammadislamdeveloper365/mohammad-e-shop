import React, { Component } from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import { Outlet } from 'react-router-dom';

class Layout extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        );
    }
}

export default Layout;