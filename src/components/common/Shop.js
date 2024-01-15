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
        console.log(product)
    }
    
    render() {
        return (
            <div className='shop-container'>
                <Products handleProduct = {this.handleCart}/>
                <ProductCart className='shop-container-product-cart'/>
            </div>
        );
    }
}

export default Shop;