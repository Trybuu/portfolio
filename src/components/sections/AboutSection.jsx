import { useTranslation } from 'react-i18next'
import Section from './Section'
import Description from '../ui/Description'
import Title from '../ui/Title'

export default function AboutSection() {
  const { t } = useTranslation()

  return (
    <Section id="about">
      <Title>{t('about.title')}</Title>
      <Description>
        <h3>{t('about.education')}</h3>
        <p>{t('about.educationDesc')}</p>
      </Description>

      <Description>
        <h3>{t('about.websites')}</h3>
        <p>{t('about.websitesDesc')}</p>
      </Description>

      <Description>
        <h3>{t('about.incentive')}</h3>
        <p>{t('about.incentiveDesc')}</p>
      </Description>
    </Section>
  )
}
