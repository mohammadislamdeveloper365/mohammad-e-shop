import React, { Component } from 'react';
import classNames from 'classnames';
import './Button.css';

class Button extends Component {
    constructor(props) {
      super(props);
    }
    
    getClasses () {
        const {className} = this.props;

        return classNames('cart-btn',className);
    }
    render() {
        const {children} = this.props;
        return (
            <button className={this.getClasses()}>
                {children}
            </button>
        );
    }
}

export default Button;