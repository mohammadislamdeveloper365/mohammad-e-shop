import './ShoppingCard.css';
import PropTypes from 'prop-types';
import Button from '../core/button/Button';

export default function ShoppingCard(props) {
    const { shoppingItem } = props;
  return (
    <div className='mohammad-e-shop-shopping-card'>
        <div className='mohammad-e-shop-shopping-card-top'>
            <img src={shoppingItem.img} className='mohammad-e-shop-shopping-card--img mohammad-e-shop-shopping-card-description'/>
            <h4 className='mohammad-e-shop-shopping-card-description'>{shoppingItem.name}</h4>
            <h5 className='mohammad-e-shop-shopping-card-description'>Price: {shoppingItem.wholePrice}</h5>
            <p className='mohammad-e-shop-shopping-card-description'>Manufacturer: {shoppingItem.seller}</p>
            <p className='mohammad-e-shop-shopping-card-description'>Rating: {shoppingItem.star}</p>
        </div>
        <Button {...getButtonProps()}>Add To Cart</Button>
    </div>
  )

  function getButtonProps () {
    const { handleButtonClick } = props;
    return {
      className: 'mohammad-e-shop-shopping-card--btn',
      handleButtonClick: handleButtonClick
    }
  }
}

ShoppingCard.propTypes = {
    shoppingItem : PropTypes.object,
    handleButtonClick: PropTypes.func
}