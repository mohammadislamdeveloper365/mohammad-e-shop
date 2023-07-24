import classNames from 'classnames'
import Logo from '../core/logo/Logo'
import PropTypes from 'prop-types'
import './Header.css'

export default function Header(props) {
  return (
    <div className={getClassNames()}>
      <div>
        <Logo/>
      </div>
      <div>
        Links
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
