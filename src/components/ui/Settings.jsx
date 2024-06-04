import { IoSettingsOutline, IoClose } from 'react-icons/io5'
import classes from './Settings.module.css'
import { useState } from 'react'
import ThemeSwitch from '../../features/theme/ThemeSwitch'
import LanguageSwitch from '../../features/language/LanguageSwitch'

export default function Settings() {
  const [isModalActive, setIsModalActive] = useState(false)

  const toggleModal = () => {
    console.log('Current modal state:', isModalActive) // Dodaj logowanie stanu
    setIsModalActive(!isModalActive)
  }

  return (
    <div className={classes['settings-wrapper']}>
      <button className={classes['settings-btn']} onClick={toggleModal}>
        {isModalActive ? <IoClose /> : <IoSettingsOutline />}
      </button>
      <div
        className={`${classes['settings-modal']} ${
          isModalActive ? classes['settings-modal--active'] : ''
        }`}
      >
        <section>
          <h3>Theme</h3>
          <ThemeSwitch />
        </section>
        <section>
          <h3>Language</h3>
          <LanguageSwitch />
        </section>
      </div>
    </div>
  )
}
