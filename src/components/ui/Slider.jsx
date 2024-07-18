import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'

import classes from './Slider.module.css'

export default function Slider({ slides }) {
  const slidesRef = useRef()
  const [slidesPos, setSlidesPos] = useState(0)
  const [maxSlides, setMaxSlides] = useState(1)

  useEffect(() => {
    if (slidesRef.current) {
      slidesRef.current.style.transform = `translateX(${slidesPos}%)`
    }
  }, [slidesPos])

  const updateMaxSlides = () => {
    if (window.innerWidth >= 1024) {
      setMaxSlides(3)
    } else if (window.innerWidth >= 768) {
      setMaxSlides(2)
    } else {
      setMaxSlides(1)
    }
  }

  useEffect(() => {
    updateMaxSlides()
    window.addEventListener('resize', updateMaxSlides)
    return () => {
      window.removeEventListener('resize', updateMaxSlides)
    }
  }, [])

  function controlSlidesPos(direction) {
    if (direction === 'left' && slidesPos < 0) {
      setSlidesPos((prevState) => prevState + 100)
    }
    if (
      direction === 'right' &&
      Math.abs(slidesPos) / 100 < Math.ceil(slides.length / maxSlides) - 1
    ) {
      setSlidesPos((prevState) => prevState - 100)
    }
  }

  return (
    <div className={classes['slider']}>
      <div className={classes['slider__slides']} ref={slidesRef}>
        {slides.map((slide, index) => {
          return (
            <div
              className={classes['slide']}
              key={index}
              style={{ backgroundImage: `url(${slide.photo})` }}
              alt={`Photo source link ${slide.photoSource}`}
            >
              <div className={classes['slide__content']}>
                <div className={classes['slide__no']}>
                  <h2>{index + 1}</h2>
                </div>

                <div className={classes['slide__info']}>
                  <h3>{slide.title}</h3>
                  <p>
                    <a href={slide.github} target="_blank">
                      Github
                    </a>
                    <span> </span>
                    <a href={slide.live} target="_blank">
                      Live preview
                    </a>
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className={classes['slider__control']}>
        <IoIosArrowRoundBack onClick={() => controlSlidesPos('left')} />
        <IoIosArrowRoundForward onClick={() => controlSlidesPos('right')} />
      </div>
    </div>
  )
}

Slider.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
      github: PropTypes.string.isRequired,
      live: PropTypes.string.isRequired,
    }),
  ).isRequired,
}
