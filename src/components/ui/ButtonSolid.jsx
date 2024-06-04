import PropTypes from 'prop-types'
import classes from './ButtonSolid.module.css'

export default function ButtonSolid({ children }) {
  return <button className={classes['button-solid']}>{children}</button>
}

ButtonSolid.propTypes = {
  children: PropTypes.node.isRequired,
}
