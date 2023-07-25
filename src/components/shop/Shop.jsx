import { useState, useEffect } from 'react';
import Button from '../core/button/Button';
import ShoppingCard from '../shopping-card/ShoppingCard';
import './Shop.css';

export default function Shop(props) {
  const [ propducts, setProducts] = useState([]);

  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON').
    then(res=>res.json()).
    then(data=>setProducts(data))
  },[]);

  return (
    <div className='mohammad-e-shop-container'>
      {propducts.map(product=><ShoppingCard key={product.key} shoppingItem={product}/>)}
    </div>
  )
}


