import { FaGithub, FaLinkedin } from 'react-icons/fa'
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
          <p>info.marektrybula@gmail.com</p>
          <br></br>
          <p>© {year} Marek Trybuła</p>
        </div>

        <div className={classes['socials']}>
          <p className={classes['socials__links']}>
            <a
              href="https://www.linkedin.com/in/trybulamarek/"
              aria-label="Marek Trybuła Linkedin"
              target="_blank"
              className={classes['socials__link']}
            >
              <FaLinkedin aria-hidden={true} focusable={false} />
            </a>
            <a
              href="https://github.com/Trybuu"
              aria-label="Marek Trybuła Github"
              target="_blank"
              className={classes['socials__link']}
            >
              <FaGithub aria-hidden={true} focusable={false} />
            </a>
            <a
              href="https://leetcode.com/u/Trybuu/"
              aria-label="Marek Trybuła Leetcode"
              target="_blank"
              className={classes['socials__link']}
            >
              <TbBrandLeetcode aria-hidden={true} focusable={false} />
            </a>
          </p>
        </div>
      </footer>
    </Section>
  )
}
