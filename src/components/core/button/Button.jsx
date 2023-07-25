import classNames from 'classnames'
import PropTypes from 'prop-types'
import './Button.css'

export default function Button(props) {
    const { children } = props;
  return (
    <button {...getProps()}>
        {children}
    </button>
  )

  function getClassNames() {
    const { className } = props;
    return classNames(className, 'mohammad-e-shop-button');
  }

  function getProps() {
    const { handleButtonClick } = props;
    return {
      className: getClassNames(),
      onClick: handleButtonClick
    }
  }
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
    handleButtonClick : PropTypes.func
}
