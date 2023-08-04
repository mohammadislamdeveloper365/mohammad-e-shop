import Button from '../core/button/Button';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import './ShoppingSummary.css';

export default function ShoppingSummary(props) {
  const { products } = props;
  let price = 0, shippingCharge = 0, tax = 0, grandTotal = 0;
  
  for(const product of products) {
    price += parseFloat((product.price * product.items).toFixed(2));
    shippingCharge += parseFloat(product.shipping.toFixed(2));
    tax = parseFloat((0.075 *(price + shippingCharge)).toFixed(2));
    grandTotal = parseFloat((price + shippingCharge + tax).toFixed(2));
    
  }

  return (
    <div className={getClassNames()}>
      <h3 className='mohammad-e-shop-container--shopping-summary-header mohammad-e-shop-container--shopping-summary-style'>Shopping Summary</h3>
        <p className='mohammad-e-shop-container--shopping-summary-style'>Selected Items: {products.length}</p>
        <p className='mohammad-e-shop-container--shopping-summary-style'>Total Price: {price}</p>
        <p className='mohammad-e-shop-container--shopping-summary-style'>Total Shipping Charge: {shippingCharge}</p>
        <p className='mohammad-e-shop-container--shopping-summary-style'>Tax: {tax}</p>
        <p className='mohammad-e-shop-container--shopping-summary-style'>Grand Total: {grandTotal} </p>
        <Button className='mohammad-e-shop-container--shopping-summary-clear-btn'>
          Clear Cart
          <FontAwesomeIcon icon={ faRemove } className='font-awesome-clear'/>
        </Button>
        <Button className='mohammad-e-shop-container--shopping-summary-review-btn'>Review Order</Button>
    </div>
  )

  function getClassNames() {
    const { className } = props;

    return classNames('mohammad-e-shop-shopping-summary',className);
  }
}


ShoppingSummary.propTypes = {
    className: PropTypes.string,
    products: PropTypes.array
}
