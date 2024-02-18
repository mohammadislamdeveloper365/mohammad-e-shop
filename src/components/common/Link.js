import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Link.css';
import { Link } from 'react-router-dom'

class NavigationLink extends Component {
    
    static propTypes = {
        value: PropTypes.string.isRequired,
        href : PropTypes.string
    }

    static defaultProps = {
        href: "#"
    }

    getClasses = () =>  {
        const classname = 'link';
        const { className } = this.props;

        return classNames({
            [classname]:true, 
            [className]: true });
    } 
    render() {
        const {href, value} = this.props;
        return (
            <a className={this.getClasses()} href={href}>
                {value}
            </a>
        );
    }
}

export default NavigationLink;