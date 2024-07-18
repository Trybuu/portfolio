import { useTranslation } from 'react-i18next'
import Slider from '../ui/Slider'
import Title from '../ui/Title'
import Section from './Section'

export default function ProjectsSection() {
  const { t } = useTranslation()

  const projects = [
    {
      title: 'Codemates',
      photo: '/images/codemates.webp',
      github: 'https://github.com/Trybuu/codemates',
      live: 'https://chipper-crisp-d209c7.netlify.app/',
      photoSource:
        'https://unsplash.com/photos/two-men-using-computer-and-laptop-fSWOVc3e06w?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash',
    },
    {
      title: 'Audiophile Ecommerce Frontend',
      photo: '/images/audiophile.webp',
      github: 'https://github.com/Trybuu/react-audiophile-ecommerce',
      live: 'https://unique-cucurucho-18ec32.netlify.app/',
      photoSource:
        'https://unsplash.com/@cdx2?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplashz',
    },
    {
      title: 'NPM Landing Page',
      photo: '/images/npm.webp',
      github: 'https://github.com/Trybuu/npm-landing-page',
      live: 'https://playful-banoffee-8a4742.netlify.app/',
      photoSource:
        'https://unsplash.com/photos/orange-pink-keyboard-oZMUrWFHOB4',
    },
    {
      title: 'Dictionary App',
      photo: '/images/dictionary.webp',
      github: 'https://github.com/Trybuu/dictionary-app',
      live: 'https://playful-pony-6b4ca5.netlify.app/',
      photoSource:
        'https://unsplash.com/photos/open-dictionary-U3Ptj3jafX8?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash',
    },
  ]

  return (
    <Section id="projects">
      <Title>{t('projects.title')}</Title>
      <Slider slides={projects} />
    </Section>
  )
}
