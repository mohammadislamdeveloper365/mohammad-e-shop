import { getStoredCart } from "../../utilities/localStorage";
const cartProductsLoader = async ()=>{
    const loadedProducts = await fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON');
    const products = await loadedProducts.json();

    const localStorageCart = getStoredCart();
    const storedCart = [];

    for(let id in localStorageCart ) {
        const storedProduct = products.find(product=>product.key === id );
        if(storedProduct){
          storedProduct.items = localStorageCart[id];
          storedCart.push(storedProduct);
        }
    }
    return [ products, storedCart ];
}

export default cartProductsLoader;