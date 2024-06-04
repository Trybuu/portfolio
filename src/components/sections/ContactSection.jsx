import ContactForm from '../../features/contact-form/ContactForm'
import Title from '../ui/Title'
import Section from './Section'

import classes from './ContactSection.module.css'

export default function ContactSection() {
  return (
    <Section id="contact">
      <Title>Contact</Title>
      <p className={classes['contact-text']}>
        Ready to collaborate? Don&apos;t hesitate to reach out! I&apos;m here to
        help bring your project to life. Fill out the form below and I&apos;ll
        get back to you as soon as possible.
      </p>
      <ContactForm />
    </Section>
  )
}
