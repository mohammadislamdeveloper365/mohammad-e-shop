import classNames from 'classnames'
import PropTypes from 'prop-types'
import './Logo.css'

export default function Logo(props) {
    const {logo} = props;
  return (
    <div className={getClassNames()}>
      {logo}
    </div>
  )

  function getClassNames() {
    const className = props;
    return classNames(className,'mohammad-e-shop-logo');
  }
}

Logo.propTypes = {
    className: PropTypes.string,
    logo: PropTypes.oneOf(['Mohammad E-shop', 'Mohammad E-commerce']).isRequired
}

Logo.defaultProps = {
    logo: "Mohammad E-shop"
}