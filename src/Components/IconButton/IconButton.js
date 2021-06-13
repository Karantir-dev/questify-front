import PropTypes from 'prop-types'
import s from './IconButton.module.css'

const IconButton = ({ children, onClick, className, ...allProps }) => {
  const classList = [className, s.IconButton].join(' ')
  return (
    <button onClick={onClick} className={classList} {...allProps}>
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
