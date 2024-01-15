import React, { Component } from 'react';
import './Products.css';
import Product from './Product';

class Products extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         products:[]
      }
    }

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(response => response.json())
        .then(data=>{
            this.setState({
                products: data
            })
        })
    }
    

    handleProduct = product => {
        console.log(product);
    }
    render() {
        const { products = []} = this.state;
        return (
            <div className='products'>
                {products.map(product => <Product key={product.id} product={product} handleProductClick={()=>this.handleProduct(product)}/>)}
            </div>
        );
    }
}

export default Products;