import PropTypes from 'prop-types';
import Button from '../core/button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './ReviewItem.css'

export default function ReviewItem(props) {
    const { shoppingItem, handleButtonClick } = props;
  return (
    <div className='mohammad-e-shop-review-item-container'>
      <div className='mohammad-e-shop-review-item-details'>
            <img src={shoppingItem.img} className='mohammad-e-shop-review-item--img mohammad-e-shop-review-item-description'/>
            <div>
                <h4 className='mohammad-e-shop-review-item-description'>{shoppingItem.seller + ' '+ shoppingItem.category}</h4>
                <h5 className='mohammad-e-shop-review-item-description'>Price: {shoppingItem.wholePrice}</h5>
                <p className='mohammad-e-shop-review-item-description'>Manufacturer: {shoppingItem.seller}</p>
                <p className='mohammad-e-shop-review-item-description'>Rating: {shoppingItem.star}</p>
                <p className='mohammad-e-shop-review-item-description'>Quantity: {shoppingItem.items}</p>
            </div>
      </div>
      <div className='mohammad-e-shop-review-item-btn-container mohammad-e-shop-review-item-description'>
            <Button className='mohammad-e-shop-review-item-btn' handleButtonClick={handleButtonClick}>
              <FontAwesomeIcon icon={faTrashAlt} className='mohammad-e-shop-review-item-delete-btn'/>
            </Button>
      </div>
    </div>
  )
}

ReviewItem.propTypes = {
    shoppingItem : PropTypes.object,
    className: PropTypes.string,
    handleButtonClick: PropTypes.func
    
}