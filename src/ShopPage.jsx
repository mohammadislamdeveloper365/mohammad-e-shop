import { useState, useEffect } from 'react';
import ShoppingSummary from './components/shopping-summary/ShoppingSummary';
import ShoppingCard from './components/shopping-card/ShoppingCard';
import { addToDb, getStoredCart } from './utilities/localStorage'
import './ShopPage.css';
import { useLoaderData } from 'react-router-dom';

export default function ShopPage(props) {
  const [ products, storedCart ] = useLoaderData();
  const [cart, setCart] = useState(storedCart);

  // useEffect(()=>{
  //   fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON').
  //   then(res=>res.json()).
  //   then(data=>setProducts(data))
  // },[]);

  // useEffect(()=>{
  //   const localStorageCart = getStoredCart();
  //   const storedCart = [];

  //   for(let id in localStorageCart ) {
  //       const storedProduct = products.find(product=>product.key === id );
  //       if(storedProduct){
  //         storedProduct.items = localStorageCart[id];
  //         storedCart.push(storedProduct);
  //       }
  //       setCart(storedCart);
  //   }
  // },[products]);

  return (
    <div className='mohammad-e-shop-container'>
      <div className='mohammad-e-shop-container--cards'>
        {products.map(product=><ShoppingCard key={product.key} shoppingItem={product} handleButtonClick={()=>addProductToCart(product)} isImg isButton/>)}
      </div>
      <ShoppingSummary className='mohammad-e-shop-container--shopping-summary' products={storedCart}/>
    </div>
  )

  function addProductToCart (product) {
    addToDb(product.key);
    if(product.items) {
      setCart([...cart, product]);
    }
    
    else {
      product.items = 1;
      setCart([...cart, product])
    }
  }
}


