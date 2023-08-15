import classNames from 'classnames';
import Logo from '../core/logo/Logo';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.css';

export default function Header(props) {
  return (
    <div className={getClassNames()}>
      <div>
        <Logo/>
      </div>
      <div>
        <Link to='/' className='header-navigation-link'>
          Home
        </Link>
        <Link to='/order-summary' className='header-navigation-link'>
          Order
        </Link>
        <Link to='/inventory' className='header-navigation-link'>
          Inventory
        </Link>
        <Link to='login' className='header-navigation-link'>
          Login
        </Link>
      </div>
    </div>
  )

 function getClassNames() {
    const className = props;
    return classNames(className,'mohammad-e-shop-header');
  }
}

Header.propTypes = {
    className: PropTypes.string
}
