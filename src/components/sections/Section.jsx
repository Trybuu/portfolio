import PropTypes from 'prop-types'

import classes from './Section.module.css'

export default function Section({ id = '', children }) {
  return (
    <section className={classes.section} id={id}>
      {children}
    </section>
  )
}

Section.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
}
