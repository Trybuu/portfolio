import { IoSettingsOutline, IoClose } from 'react-icons/io5'
import classes from './Settings.module.css'
import { useState } from 'react'
import ThemeSwitch from '../../features/theme/ThemeSwitch'
import LanguageSwitch from '../../features/language/LanguageSwitch'
import { useTranslation } from 'react-i18next'

export default function Settings() {
  const { t } = useTranslation()
  const [isModalActive, setIsModalActive] = useState(false)

  const toggleModal = () => {
    console.log('Current modal state:', isModalActive) // Dodaj logowanie stanu
    setIsModalActive(!isModalActive)
  }

  return (
    <div className={classes['settings-wrapper']}>
      <button
        className={classes['settings-btn']}
        onClick={toggleModal}
        aria-label={
          isModalActive
            ? t('settings.ariaLabelClose')
            : t('settings.ariaLabelOpen')
        }
      >
        {isModalActive ? (
          <IoClose aria-hidden={true} focusable={false} />
        ) : (
          <IoSettingsOutline aria-hidden={true} focusable={false} />
        )}
      </button>
      <div
        className={`${classes['settings-modal']} ${
          isModalActive ? classes['settings-modal--active'] : ''
        }`}
      >
        <section>
          <h3>{t('settings.theme')}</h3>
          <ThemeSwitch />
        </section>
        <section>
          <h3>{t('settings.language')}</h3>
          <LanguageSwitch />
        </section>
      </div>
    </div>
  )
}
