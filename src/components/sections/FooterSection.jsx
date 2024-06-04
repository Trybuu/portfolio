import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { TbBrandLeetcode } from 'react-icons/tb'

import classes from './FooterSection.module.css'
import Section from './Section'

export default function FooterSection() {
  const year = new Date().getFullYear()

  return (
    <Section>
      <footer className={classes['footer']}>
        <div>
          <p>Marek Trybuła | Frontend Developer</p>
          <p>marektrybula-info@gmail.com</p>
          <br></br>
          <p>© {year} Marek Trybuła</p>
        </div>

        <div className={classes['socials']}>
          <p className={classes['socials__links']}>
            <a href="" className={classes['socials__link']}>
              <FaFacebook />
            </a>
            <a href="" className={classes['socials__link']}>
              <FaGithub />
            </a>
            <a href="" className={classes['socials__link']}>
              <FaLinkedin />
            </a>
            <a href="" className={classes['socials__link']}>
              <TbBrandLeetcode />
            </a>
          </p>
        </div>
      </footer>
    </Section>
  )
}
