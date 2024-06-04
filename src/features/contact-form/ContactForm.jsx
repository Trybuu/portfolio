import ButtonSolid from '../../components/ui/ButtonSolid'
import classes from './ContactForm.module.css'

export default function ContactForm() {
  return (
    <form className={classes['form']}>
      <label htmlFor="name" className={classes['form__label']}>
        <input
          type="text"
          id="name"
          className={classes['form__input']}
          placeholder="Your name"
          autoComplete="given-name"
        />
      </label>

      <label htmlFor="email" className={classes['form__label']}>
        <input
          type="text"
          id="email"
          className={classes['form__input']}
          placeholder="Your email"
          autoComplete="email"
        />
      </label>

      <label
        htmlFor="message"
        className={`${classes['form__label']} ${classes['form__label--textarea']}`}
      >
        <textarea
          id="message"
          placeholder="Your message"
          className={classes['form__textarea']}
        ></textarea>
      </label>

      <ButtonSolid>Send message</ButtonSolid>
    </form>
  )
}
