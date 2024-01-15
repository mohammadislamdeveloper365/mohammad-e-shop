import React, { Component } from 'react';
import Header from './common/Header';
import Shop from './common/Shop';

class MainPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Shop />
            </div>
        );
    }
}

export default MainPage;