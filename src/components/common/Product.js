import React, { Component } from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

class Product extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name = '', img = '', ratings = '', seller = '',category = '', price = '' } = this.props?.product ?? {};
        const {handleProductClick} = this.props;
        return (
            <div className='product'>
                <img src={img} alt="product image" />
                <div className='product-description'>
                    <p className='product-name product-info'>{name}</p>
                    <p className='product-info'>{category}</p>
                    <p className='product-info'>Price: {price}</p>
                    <p className='product-info'><small>manufacturer: {seller}</small></p>
                    <p className='product-info'><small>Rating: {ratings}</small></p>
                </div>
                <button onClick={handleProductClick}>Add To Cart <FontAwesomeIcon icon={faShoppingBasket}/></button>
            </div>
        );
    }
}

export default Product;