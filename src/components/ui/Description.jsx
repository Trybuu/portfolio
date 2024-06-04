import PropTypes from 'prop-types'

import classes from './Description.module.css'

export default function Description({ children }) {
  return <div className={classes['description']}>{children}</div>
}

Description.propTypes = {
  children: PropTypes.node.isRequired,
}
