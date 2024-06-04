import PropTypes from 'prop-types'
import classes from './Title.module.css'
import { WavyLine } from './Ornaments'

export default function Title({ children }) {
  return (
    <div className={classes['title']}>
      <h2>{children}</h2>
      <WavyLine />
    </div>
  )
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
}
