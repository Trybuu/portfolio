import { useTranslation } from 'react-i18next'
import Slider from '../ui/Slider'
import Title from '../ui/Title'
import Section from './Section'

export default function ProjectsSection() {
  const { t } = useTranslation()

  const projects = [
    {
      title: 'Codemates',
      photo: '/images/codemates.jpg',
      github: 'https://www.github.com',
      live: 'https://www.youtube.com',
      photoSource:
        'https://unsplash.com/photos/two-men-using-computer-and-laptop-fSWOVc3e06w?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash',
    },
    {
      title: 'Codemates',
      photo: '/images/codemates.jpg',
      github: 'https://www.github.com',
      live: 'https://www.youtube.com',
      photoSource:
        'https://unsplash.com/photos/two-men-using-computer-and-laptop-fSWOVc3e06w?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash',
    },
    {
      title: 'Codemates',
      photo: '/images/codemates.jpg',
      github: 'https://www.github.com',
      live: 'https://www.youtube.com',
      photoSource:
        'https://unsplash.com/photos/two-men-using-computer-and-laptop-fSWOVc3e06w?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash',
    },
  ]

  return (
    <Section id="projects">
      <Title>{t('projects.title')}</Title>
      <Slider slides={projects} />
    </Section>
  )
}
