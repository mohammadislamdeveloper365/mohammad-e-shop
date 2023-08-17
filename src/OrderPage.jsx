import { useLoaderData } from 'react-router-dom'
import ReviewItem from './components/review-item/ReviewItem';
import ShoppingSummary from './components/shopping-summary/ShoppingSummary'
import { deleteFromDb } from './utilities/localStorage.js'
import './OrderPage.css'
import { useState } from 'react';

export default function OrderPage() {
  const [,cart] = useLoaderData();
  const [reviewCart, setReviewCart] = useState(cart);
  return (
    <div className='mohammad-e-shop-order'>
      <div className='mohammad-e-shop-order-cart'>
        {
          reviewCart.map(product=><ReviewItem shoppingItem={product} key={product.key} handleButtonClick={()=>removeItemFromCart(product.key)}/>)
        }
      </div>
      <div className='mohammad-e-shop-order-summary'>
        <ShoppingSummary className="mohammad-e-shop-order-summary-container" products={cart} />
      </div>
    </div>
  )

  function removeItemFromCart(id) {
    const remainingCart = reviewCart.filter(product=> id !== product.key );
    setReviewCart(remainingCart);
    deleteFromDb(id);
  }
}
