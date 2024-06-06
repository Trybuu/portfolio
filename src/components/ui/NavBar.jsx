import { useEffect, useState } from 'react'
import ButtonSolid from './ButtonSolid'
import Button from './Button'
import Logo from './Logo'
import classes from './NavBar.module.css'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoClose } from 'react-icons/io5'
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'

export default function NavBar() {
  const { t } = useTranslation()

  const [isMobileNavActive, setIsMobileNavActive] = useState(true)
  const [activeSection, setActiveSection] = useState('start')
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  function controlActiveNavType() {
    if (window.innerWidth >= 768) {
      setIsMobileNavActive(false)
    } else {
      setIsMobileNavActive(true)
    }
  }

  useEffect(() => {
    controlActiveNavType()
    window.addEventListener('resize', controlActiveNavType)

    return () => window.removeEventListener('resize', controlActiveNavType)
  }, [])

  function checkActiveSection() {
    const sectionNodes = document.querySelectorAll('section')
    const sections = Array.from(sectionNodes).map((section) => ({
      id: section.getAttribute('id'),
      y: section.getBoundingClientRect().top + window.scrollY,
    }))

    let currentSection = ''

    sections.forEach((section) => {
      if (window.scrollY >= section.y - window.innerHeight / 3) {
        currentSection = section.id
      }
    })

    setActiveSection(currentSection)
  }

  useEffect(() => {
    window.addEventListener('scroll', checkActiveSection)

    return () => window.removeEventListener('scroll', checkActiveSection)
  }, [])

  const nav = (
    <nav className={classes['nav']}>
      <ul
        className={`${classes['nav__links']} ${
          isMobileNavActive ? classes['nav__links--mobile'] : null
        }`}
      >
        <li>
          <Link
            to="start"
            smooth={true}
            duration={500}
            role="button"
            aria-label={`${t('nav.scrollTo')} ${t('nav.start')}`}
          >
            <Button isActive={activeSection === 'start'}>
              {t('nav.start')}
            </Button>
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            role="button"
            aria-label={`${t('nav.scrollTo')} ${t('nav.about')}`}
          >
            <Button isActive={activeSection === 'about'}>
              {t('nav.about')}
            </Button>
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            role="button"
            aria-label={`${t('nav.scrollTo')} ${t('nav.projects')}`}
          >
            <Button isActive={activeSection === 'projects'}>
              {t('nav.projects')}
            </Button>
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            role="button"
            aria-label={`${t('nav.scrollTo')} ${t('nav.contact')}`}
          >
            <Button isActive={activeSection === 'contact'}>
              {t('nav.contact')}
            </Button>
          </Link>
        </li>
        <li>
          <ButtonSolid>{t('nav.resume')}</ButtonSolid>
        </li>
      </ul>
    </nav>
  )

  if (isMobileNavActive) {
    return (
      <div className={classes['navbar']}>
        <Logo />
        <div
          className={`${classes['nav-modal']} ${
            isMobileNavOpen ? classes['nav-modal--active'] : null
          }`}
        >
          {nav}
        </div>

        {isMobileNavOpen ? (
          <button
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            aria-label={t('nav.ariaLabelClose')}
          >
            <IoClose aria-hidden={true} focusable={false} />
          </button>
        ) : (
          <button
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            aria-label={t('nav.ariaLabelOpen')}
          >
            <RxHamburgerMenu aria-hidden={true} focusable={false} />
          </button>
        )}
      </div>
    )
  } else {
    return (
      <div className={classes['navbar']}>
        <Logo />
        {nav}
      </div>
    )
  }
}
