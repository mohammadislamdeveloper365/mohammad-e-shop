import React, { Component } from 'react';
import Products from './Products';
import { addToDb, getStoredCart } from '../../utilities/storage';
import ProductCart from './ProductCart';
import './Shop.css';

class Shop extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         cart: [],
         products: []
      }
    }

    componentDidMount() { 
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(response => response.json())
        .then(data=>this.getStoredCart(data))
        
    }

    getStoredCart(products) {
        const storedCart = getStoredCart();
        let updatedCart = [];
        for(const id in storedCart) {
            const savedProduct = products.find(product => product.id === id);
           
            if(savedProduct) {
                savedProduct.quantity = storedCart[id];
                updatedCart.push(savedProduct);
            }
            
        }
      
        this.setState({
            cart: updatedCart,
            products: products
        })
    }

    handleCart = (product) => {
        const {cart} = this.state;
        const newCart = [...cart];
        const newProduct = newCart.find(item => item.id === product.id);

        if(newProduct) {
            product.quantity += 1;
        } else {
            product.quantity = 1;
            newCart.push(product);
        }
        
        this.setState({
            cart: newCart
        });

        addToDb(product.id);
        
    }
    
    render() {
        const { cart, products } = this.state;
        return (
            <div className='shop-container'>
                <Products handleProduct = {this.handleCart} products={products}/>
                <ProductCart className='shop-container-product-cart' productCart={cart}/>
            </div>
        );
    }
}

export default Shop;