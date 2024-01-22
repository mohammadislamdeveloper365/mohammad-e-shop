import React, { Component } from 'react';
import classNames from 'classnames';
import Button from './Button';
import './ProductCart.css';

class ProductCart extends Component {
    
    getClassNames() {
        const {className} = this.props;

        return classNames('product-cart',className)
    }

    getProductPriceDetails() {
        const {productCart = []} = this.props;
        let total = 0, shippingCharges = 0;

        productCart.forEach(product=> {
            total += product.price;
        })

        productCart.forEach(product=>{
            shippingCharges += product.shipping;
        })
        
        total = parseFloat(total.toFixed(2));
        shippingCharges = parseFloat(shippingCharges.toFixed(2));

        return {total, shippingCharges};
    }

    render() {
        let grandTotal = 0;
        const {productCart} = this.props;
        const {total, shippingCharges} = this.getProductPriceDetails();
        const tax = parseFloat(((total + shippingCharges) * 10/100).toFixed(2));
        grandTotal = (total + shippingCharges + tax).toFixed(2);

        return (
            <div className={this.getClassNames()}>
                <h2>Order Summary</h2>
                <p className='product-cart-item'>Total Items:{productCart.length}</p>
                <p className='product-cart-item'>Total Price: $ {total}</p>
                <p className='product-cart-item'>Total Shipping Charge:$ {shippingCharges} </p>
                <p className='product-cart-item'>Tax:$ {tax} </p>
                <p className='product-cart-item'>Grand Total:$ {grandTotal}</p>
                <Button className="product-cart-btn clear-btn">Clear Cart </Button>
                <Button className="product-cart-btn review-btn">Review Order </Button>
            </div>
        );
    }
}

export default ProductCart;