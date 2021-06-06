import React from 'react'
import PropTypes from 'prop-types'
import s from './IconButton.module.css'

const IconButton = ({ children, name, email, password, className, ...allProps }) => {
  const classList = [className, s.IconButton].join(' ');
  return (
    <button disabled={!name && !email || password < 1}
            
            /*onClick={onClick} */
            className={classList}
            {...allProps}>
      {children}
    </button>
  )
}

IconButton.defaultProps = {
  /* onClick: () => null, */
  children: null,
}

IconButton.propTypes = {
  /* onClick: PropTypes.func, */
  children: PropTypes.node,
  'aria-label': PropTypes.string,
}

export default IconButton
