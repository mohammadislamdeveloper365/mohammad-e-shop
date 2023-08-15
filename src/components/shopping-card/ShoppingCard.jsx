import './ShoppingCard.css';
import Button from '../core/button/Button';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';


export default function ShoppingCard(props) {
    const { shoppingItem, isImg, isButton } = props;
  return (
    <div className={getClassName()}>
        <div className='mohammad-e-shop-shopping-card-top'>
            {isImg ? <img src={shoppingItem.img} className='mohammad-e-shop-shopping-card--img mohammad-e-shop-shopping-card-description'/> : null }
            <h4 className='mohammad-e-shop-shopping-card-description'>{shoppingItem.seller + ' '+ shoppingItem.category}</h4>
            <h5 className='mohammad-e-shop-shopping-card-description'>Price: {shoppingItem.wholePrice}</h5>
            <p className='mohammad-e-shop-shopping-card-description'>Manufacturer: {shoppingItem.seller}</p>
            <p className='mohammad-e-shop-shopping-card-description'>Rating: {shoppingItem.star}</p>
        </div>
        {
          isButton ? 

        <Button {...getButtonProps()}>
          Add To Cart
          <FontAwesomeIcon icon={faShoppingCart} className='shopping-cart-icon'/>
        </Button> : null
        }
    </div>
  )

  function getButtonProps () {
    const { handleButtonClick } = props;
    return {
      className: 'mohammad-e-shop-shopping-card--btn',
      handleButtonClick: handleButtonClick
    }
  }

  function getClassName() {
    const {className} = props;
    return classNames(className, 'mohammad-e-shop-shopping-card');
  }
}

ShoppingCard.propTypes = {
    shoppingItem : PropTypes.object,
    handleButtonClick: PropTypes.func,
    isImg: PropTypes.boolean,
    className: PropTypes.string,
    isButton: PropTypes.boolean
}