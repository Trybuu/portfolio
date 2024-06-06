import PropTypes from 'prop-types'
import classes from './ButtonSolid.module.css'

export default function ButtonSolid({ children, ...props }) {
  return (
    <button className={classes['button-solid']} {...props}>
      {children}
    </button>
  )
}

ButtonSolid.propTypes = {
  children: PropTypes.node.isRequired,
}
