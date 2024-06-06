import useLocalStorage from 'use-local-storage'
import Button from '../../components/ui/Button'
import { useTranslation } from 'react-i18next'

function ThemeSwitch() {
  const { t } = useTranslation()
  const preference = window.matchMedia('(prefers-color-scheme: dark)').matches

  const [darkTheme, setDarkTheme] = useLocalStorage('darkTheme', preference)

  document.querySelector('body').dataset.theme = darkTheme ? 'dark' : 'light'

  return (
    <>
      <Button isActive={!darkTheme} onClick={() => setDarkTheme(false)}>
        {t('settings.light')}
      </Button>
      <Button isActive={darkTheme} onClick={() => setDarkTheme(true)}>
        {t('settings.dark')}
      </Button>
    </>
  )
}

export default ThemeSwitch
