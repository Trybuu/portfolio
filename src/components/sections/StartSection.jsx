import { useTranslation } from 'react-i18next'
import { Link } from 'react-scroll'

import Section from './Section'

import classes from './StartSection.module.css'
import ButtonSolid from '../ui/ButtonSolid'
import ImageComponent from '../ui/ImageComponent'

export default function StartSection() {
  const { t } = useTranslation()

  return (
    <Section id={'start'}>
      <div className={classes['wrapper']}>
        <div className={classes['content']}>
          <h1>{t('introduce.hello')}</h1>
          <p>{t('introduce.description')}</p>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            role="button"
            aria-label={t('introduce.button')}
          >
            <ButtonSolid>{t('introduce.button')}</ButtonSolid>
          </Link>
        </div>
        <div className={classes['img']}>
          <ImageComponent src="/images/portrait.webp" alt="Marek Trybuła" />
        </div>
        {/* <div
          className="blur-load"
          style={{ backgroundImage: 'url("/images/portrait-small.png")' }}
        >
          <img
            srcSet="/images/portrait.webp 2000w"
            sizes="(max-width: 1024px) 280px,
            (max-width: 1440px) 360px,
         660px"
            loading="lazy"
            src="elva-fairy-800w.jpg"
            alt="Elva dressed as a fairy"
            className={classes['img']}
          />
        </div> */}
      </div>
    </Section>
  )
}
