import { useTranslation } from 'react-i18next'
import Slider from '../ui/Slider'
import Title from '../ui/Title'
import Section from './Section'

export default function ProjectsSection() {
  const { t } = useTranslation()

  const projects = [
    {
      title: 'Codemates',
      photo:
        'https://images.unsplash.com/photo-1513682121497-80211f36a7d3?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      github: 'https://www.github.com',
      live: 'https://www.youtube.com',
    },
    {
      title: 'Codemates',
      photo:
        'https://images.unsplash.com/photo-1517586979036-b7d1e86b3345?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      github: 'https://www.github.com',
      live: 'https://www.youtube.com',
    },
    {
      title: 'Codemates',
      photo:
        'https://images.unsplash.com/photo-1529232076213-d23c9a1974f5?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      github: 'https://www.github.com',
      live: 'https://www.youtube.com',
    },
  ]

  return (
    <Section id="projects">
      <Title>{t('projects.title')}</Title>
      <Slider slides={projects} />
    </Section>
  )
}
