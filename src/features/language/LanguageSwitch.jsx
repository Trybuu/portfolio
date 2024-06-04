import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../../components/ui/Button'

export default function LanguageSwitch() {
  const { i18n } = useTranslation()

  const [currentLng, setCurrentLng] = useState(i18n.language)

  useEffect(() => {
    i18n.changeLanguage(currentLng)
  }, [currentLng, i18n])

  return (
    <>
      <Button
        isActive={currentLng === 'en-US'}
        onClick={() => setCurrentLng('en-US')}
      >
        English
      </Button>
      <Button
        isActive={currentLng === 'pl-PL'}
        onClick={() => setCurrentLng('pl-PL')}
      >
        Polish
      </Button>
    </>
  )
}
