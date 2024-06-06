import ContactForm from '../../features/contact-form/ContactForm'
import Title from '../ui/Title'
import Section from './Section'

import classes from './ContactSection.module.css'
import { useTranslation } from 'react-i18next'

export default function ContactSection() {
  const { t } = useTranslation()

  return (
    <Section id="contact">
      <Title>{t('contact.title')}</Title>
      <p className={classes['contact-text']}>{t('contact.desc')}</p>
      <ContactForm />
    </Section>
  )
}
