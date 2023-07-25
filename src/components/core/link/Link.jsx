import classNames from "classnames";
import PropTypes from 'prop-types';
import './Link.css'

export default function Link(props) {
    const { children } = props;
  return (
    <a {...getProps()}>
      {children}
    </a>
  )

  function getClassNames() {
    const { className } = props;
    return classNames(className, 'mohammad-e-shop-link');
  }

  function getProps() {
    const { address, handleLinkClick } = props;
    
    return {
        className: getClassNames(),
        href: address ,
        onClick: handleLinkClick
    }
  }
}

Link.propTypes = {
    address: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
    handleLinkClick: PropTypes.func
}
