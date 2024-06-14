import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import classes from './Section.module.css'

export default function Section({ id = '', children }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
          entry.target.classList.add(classes.show)
        }
      })
    })

    const currentSection = sectionRef.current
    if (currentSection) {
      observer.observe(currentSection)
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection)
      }
    }
  }, [])

  return (
    <section
      className={`${classes.section} ${classes.hidden}`}
      id={id}
      ref={sectionRef}
    >
      {children}
    </section>
  )
}

Section.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
}
