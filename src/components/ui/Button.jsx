import PropTypes from 'prop-types'

import classes from './Button.module.css'

function Button({ isActive = false, children, ...props }) {
  return (
    <button
      className={
        isActive
          ? `${classes['button']} ${classes['button--active']}`
          : classes['button']
      }
      {...props}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  isActive: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Button
