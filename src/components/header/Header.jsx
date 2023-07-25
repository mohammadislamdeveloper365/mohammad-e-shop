import classNames from 'classnames';
import Logo from '../core/logo/Logo';
import Link from '../core/link/Link';
import PropTypes from 'prop-types';
import './Header.css';

export default function Header(props) {
  return (
    <div className={getClassNames()}>
      <div>
        <Logo/>
      </div>
      <div>
        <Link>
          Home
        </Link>
        <Link>
          Order Review
        </Link>
        <Link>
          Order
        </Link>
        <Link>
          Home
        </Link>
        <Link>
          Inventory
        </Link>
        <Link>
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
