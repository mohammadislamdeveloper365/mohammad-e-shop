import React, { Component } from 'react';
import Products from './Products';
import ProductCart from './ProductCart';
import './Shop.css';

class Shop extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         cart: []
      }
    }

    handleCart = (product) => {
        const {cart} = this.state;
        const newCart = [...cart, product]
        this.setState({
            cart: newCart
        });
        
    }
    
    render() {
        const { cart } = this.state;
        return (
            <div className='shop-container'>
                <Products handleProduct = {this.handleCart}/>
                <ProductCart className='shop-container-product-cart' productCart={cart}/>
            </div>
        );
    }
}

export default Shop;