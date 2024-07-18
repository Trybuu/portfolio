import { useState } from 'react'
import emailjs from 'emailjs-com'
import { useTranslation } from 'react-i18next'
import ButtonSolid from '../../components/ui/ButtonSolid'
import classes from './ContactForm.module.css'

export default function ContactForm() {
  const { t } = useTranslation()
  const [status, setStatus] = useState('')
  const [isSending, setIsSending] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setIsSending(true)

    emailjs
      .sendForm(
        'service_5ghig1q',
        'template_75fhtxi',
        e.target,
        'XplvkgHeBuZdT9Y0m',
      )
      .then(
        (result) => {
          console.log(result.text)
          setStatus('success')
          setIsSending(false)
        },
        (error) => {
          console.log(error.text)
          setStatus('error')
          setIsSending(false)
        },
      )
  }

  return (
    <form className={classes['form']} onSubmit={sendEmail}>
      <label htmlFor="name" className={classes['form__label']}>
        <input
          type="text"
          id="name"
          name="user_name"
          className={classes['form__input']}
          placeholder={t('contact.name')}
          autoComplete="given-name"
          required
          disabled={status === 'success'}
        />
      </label>

      <label htmlFor="email" className={classes['form__label']}>
        <input
          type="email"
          id="email"
          name="user_email"
          className={classes['form__input']}
          placeholder={t('contact.email')}
          autoComplete="email"
          required
          disabled={status === 'success'}
        />
      </label>

      <label
        htmlFor="message"
        className={`${classes['form__label']} ${classes['form__label--textarea']}`}
      >
        <textarea
          id="message"
          name="message"
          placeholder={t('contact.message')}
          className={classes['form__textarea']}
          required
          disabled={status === 'success'}
        ></textarea>
      </label>
      <ButtonSolid type="submit" disabled={status === 'success'}>
        {!isSending && status === '' ? t('contact.send') : null}
        {isSending && 'Sending...'}
        {!isSending && status === 'success' ? 'Send' : null}
        {!isSending && status === 'error' ? 'Error' : null}
      </ButtonSolid>
    </form>
  )
}
