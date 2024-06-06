import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../../components/ui/Button'

export default function LanguageSwitch() {
  const { t, i18n } = useTranslation()

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
        {t('settings.english')}
      </Button>
      <Button
        isActive={currentLng === 'pl-PL'}
        onClick={() => setCurrentLng('pl-PL')}
      >
        {t('settings.polish')}
      </Button>
    </>
  )
}
