import { useLoaderData } from 'react-router-dom'
import ReviewItem from './components/review-item/ReviewItem';
import ShoppingSummary from './components/shopping-summary/ShoppingSummary'
import './OrderPage.css'

export default function OrderPage() {
  const [,cart] = useLoaderData();
  return (
    <div className='mohammad-e-shop-order'>
      <div className='mohammad-e-shop-order-cart'>
        {
          cart.map(product=><ReviewItem shoppingItem={product} key={product.key}/>)
        }
      </div>
      <div className='mohammad-e-shop-order-summary'>
        <ShoppingSummary className="mohammad-e-shop-order-summary-container" products={cart} />
      </div>
    </div>
  )
}
