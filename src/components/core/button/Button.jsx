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
    return classNames('mohammad-e-shop-button', className);
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
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    handleButtonClick : PropTypes.func
}
