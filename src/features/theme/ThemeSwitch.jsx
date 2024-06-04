import useLocalStorage from 'use-local-storage'
import Button from '../../components/ui/Button'

function ThemeSwitch() {
  const preference = window.matchMedia('(prefers-color-scheme: dark)').matches

  const [darkTheme, setDarkTheme] = useLocalStorage('darkTheme', preference)

  document.querySelector('body').dataset.theme = darkTheme ? 'dark' : 'light'

  return (
    <>
      <Button isActive={!darkTheme} onClick={() => setDarkTheme(false)}>
        Light
      </Button>
      <Button isActive={darkTheme} onClick={() => setDarkTheme(true)}>
        Dark
      </Button>
    </>
  )
}

export default ThemeSwitch
