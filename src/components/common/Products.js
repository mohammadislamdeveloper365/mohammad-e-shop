import React, { Component } from 'react';
import './Products.css';
import Product from './Product';

class Products extends Component {
   
    render() {
        const { handleProduct, products } = this.props;
        return (
            <div className='products'>
                {products.map(product => <Product key={product.id} product={product} handleProductClick={()=>handleProduct(product)}/>)}
            </div>
        );
    }
}

export default Products;