import { useState, useEffect } from 'react';
import ShoppingSummary from '../shopping-summary/ShoppingSummary';
import ShoppingCard from '../shopping-card/ShoppingCard';
import './Shop.css';

export default function Shop(props) {
  const [ products, setProducts] = useState([]);
  const [ cart, setCart ] = useState([]);

  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON').
    then(res=>res.json()).
    then(data=>setProducts(data))
  },[]);

  return (
    <div className='mohammad-e-shop-container'>
      <div className='mohammad-e-shop-container--cards'>
        {products.map(product=><ShoppingCard key={product.key} shoppingItem={product} handleButtonClick={()=>addProductToCart(product)}/>)}
      </div>
      <ShoppingSummary className='mohammad-e-shop-container--shopping-summary' products={cart}/>
    </div>
  )

  function addProductToCart (product) {
    setCart([...cart, product]);
  }
}


