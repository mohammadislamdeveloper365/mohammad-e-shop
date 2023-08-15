import { useLoaderData } from 'react-router-dom'
import ShoppingCard from './components/shopping-card/ShoppingCard'
import ShoppingSummary from './components/shopping-summary/ShoppingSummary'
import './OrderPage.css'

export default function OrderPage() {
  const [,cart] = useLoaderData();
  return (
    <div className='mohammad-e-shop-order'>
      <div className='mohammad-e-shop-order-cart'>
        <h1>Orders : {cart.length}</h1>
        {/* <ShoppingCard isImg={false} isButton={false}/> */}
      </div>
      <div className='mohammad-e-shop-order-summary'>
        <ShoppingSummary className="mohammad-e-shop-order-summary-container" products={cart} />
      </div>
    </div>
  )
}
