import { useTranslation } from 'react-i18next'
import { Link } from 'react-scroll'

import Section from './Section'
// import { WavyLine } from '../ui/Ornaments'

import classes from './StartSection.module.css'
import ButtonSolid from '../ui/ButtonSolid'

export default function StartSection() {
  const { t } = useTranslation()

  return (
    <Section id={'start'}>
      <div className={classes['wrapper']}>
        <div className={classes['content']}>
          <h1>{t('introduce.hello')}</h1>
          <p>{t('introduce.description')}</p>
          <Link to="contact" smooth={true} duration={500}>
            <ButtonSolid>{t('introduce.button')}</ButtonSolid>
          </Link>
          {/* <WavyLine /> */}
        </div>
        <div className={classes['image']}></div>
      </div>
    </Section>
  )
}
