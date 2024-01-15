import React, { Component } from 'react';
import classNames from 'classnames';
import Button from './Button';
import './ProductCart.css';

class ProductCart extends Component {
    constructor(props) {
      super(props)
    }
    

    getClassNames() {
        const {className} = this.props;

        return classNames('product-cart',className)
    }
    render() {
        return (
            <div className={this.getClassNames()}>
                <h2>Order Summary</h2>
                <p className='product-cart-item'>Total Items:</p>
                <p className='product-cart-item'>Total Price: </p>
                <p className='product-cart-item'>Total Shipping Charge: </p>
                <p className='product-cart-item'>Grand Total: </p>
                <Button className="product-cart-btn clear-btn">Clear Cart </Button>
                <Button className="product-cart-btn review-btn">Review Order </Button>
            </div>
        );
    }
}

export default ProductCart;