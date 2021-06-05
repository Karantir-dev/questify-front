import React from 'react'
import PropTypes from 'prop-types'
import s from './IconButton.module.css'

const IconButton = ({ children, onClick, name, email, password, className, ...allProps }) => {
  return (
    <button disabled={!name && !email || password < 1}
            type="submit"
            onClick={onClick}
            className={s.IconButtonReg}
            >
      {children}
    </button>
  )
}

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
}

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string,
}

export default IconButton
